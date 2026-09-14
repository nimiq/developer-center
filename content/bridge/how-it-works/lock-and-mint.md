---
title: Lock and mint
description: How NIM locked on Nimiq becomes wrapped NIM on an EVM network.
icon: i-tabler-arrow-right
navigation:
  title: Lock and mint
  order: 3
---

# Lock and mint

<!-- TODO
- WAITING ON DEV: nothing validates recipient_data when locking, so a malformed lock is
  accepted and cannot later be minted. Whether such a deposit is recoverable is unresolved.
-->

Moving NIM to an EVM network takes four steps: the NIM is locked in the bridge contract on Nimiq, the transaction reaches finality, the relayer commits a history root covering it to the oracle on the EVM network, and [wNIM](/bridge#the-wrapped-token) is then minted against a proof that the lock happened.

The NIM stays locked on Nimiq for as long as that wNIM exists, and wNIM is created only against proof of a lock that has already been finalized.

[IMAGE: bridge-lock-and-mint.png. The four steps in sequence, from a user locking NIM on Nimiq through to receiving wNIM on the EVM network, with the wait for finality shown as its own step rather than as an arrow.]

## 1. Lock NIM on Nimiq

The user sends an ordinary NIM transaction to the bridge contract. The `value` is the amount to lock, and `recipient_data` carries the information the other network will need:

| **Bytes** | **Field** | **Description** |
| --- | --- | --- |
| 0 to 7 | Nonce | An 8-byte value, big-endian, used to keep the transaction unique |
| 8 to 27 | Destination address | The 20-byte address that will receive wNIM |

The nonce here is a uniqueness tag rather than a counter. Minting is keyed on the hash of the whole serialized transaction, so two deposits with the same sender, amount and destination would otherwise serialize identically and only one of them could ever be minted. The nonce is what keeps them distinct, and any value that does so works. The reference tooling uses a millisecond timestamp.

`recipient_data` needs to be at least 28 bytes for the transfer to be completable on the other network, and anything beyond those 28 bytes is ignored there. Nimiq itself does not check this. A lock transaction is accepted whatever its `recipient_data` contains, and the layout is only enforced when the mint is attempted.

The bridge contract does very little at this point. It adds the transaction value to its balance, increments its transaction counter, and records the deposit in the transaction log. There is nothing to verify, because no claim is being made yet: this is a transfer into a contract, and the proof obligation falls on the other network later.

The contract balance is the total NIM locked by every user of that bridge, not a per-user record. What ties a particular deposit to a particular mint is the transaction itself, not the balance.

## 2. Wait for the next macro block

The lock transaction is included in a micro block, but a micro block alone is not enough. The transfer waits for the next [macro block](/protocol/consensus/block-format), which finalizes the batch and makes the transaction irreversible.

This wait exists so the other network is never asked to mint against something that could still disappear. wNIM minted against a reverted lock would not be backed by anything, and the 1:1 relationship between locked NIM and wNIM would be broken with no way to repair it.

## 3. The history root is committed

Once the macro block exists, the relayer takes the [history root](/protocol/storage/merkle-trees#merkle-mountain-range) covering the lock transaction and records it on the EVM network by calling `submit` on the oracle there, together with the macro block height.

The root used here is not the one Nimiq normally stores. History roots are normally computed with Blake2b, but the bridge needs a root the EVM side can verify cheaply, so a second root is derived over the same historic transactions using keccak256, the hash EVM contracts work with natively. This is an addition rather than a replacement: the usual root is unchanged, and the keccak256 root is computed on demand rather than stored. A node exposes it through `get_keccak256_history_root`, and the matching proof for a single transaction through `get_keccak256_transaction_proof`.

Writing to the oracle is restricted to its owner, so this step is performed by whoever operates the bridge. See [Oracles](/bridge/how-it-works/oracles) for how entries are stored and how long they are retained.

::callout{icon="i-tabler-info-circle" color="info"}
Every macro block produces a root, and each root covers its epoch's transactions up to that point. A lock can be proved against any root from its own epoch, so a proof that has gone stale can be rebuilt against a newer one. Roots from a later epoch do not cover it.
::

## 4. Mint on the EVM network

With the root committed, anyone can complete the transfer by calling `mint` with three arguments: the serialized Nimiq transaction, the oracle index the proof is checked against, and the Merkle proof itself.

The relayer does this automatically, which is why a transfer usually appears to complete on its own. The function carries no owner restriction, so a user who does not want to depend on the relayer can submit the same call themselves, provided they can obtain the proof.

Before anything is minted, the contract runs a fixed sequence of checks. Each one closes a specific way the 1:1 backing could otherwise be broken:

| **Check** | **What it prevents** |
| --- | --- |
| The oracle, bridge address and network id are all configured | A partially configured contract minting against incomplete assumptions. Each is unset until explicitly configured, so minting fails until all three are set |
| The Merkle proof reconstructs the value stored at the given oracle index | Minting against a transaction that was never committed by the oracle |
| The transaction's recipient is the configured Nimiq bridge address | Minting against any transaction in the history root rather than only deposits actually sent to the bridge |
| The transaction's network id matches the configured one | Minting against a genuine deposit made on a different Nimiq network. Nimiq addresses are identical across networks, so without this check a deposit on one network could be replayed against a bridge serving another |
| The transaction has not already been minted | Minting the same deposit more than once |

The replay check is keyed on the transaction itself, not on the destination address, so unrelated deposits never block one another.

Only after all of these pass is the amount converted and the wNIM minted to the destination address from `recipient_data`, and a `TokensMinted` event emitted.

## Units

The two sides count in different units, and the conversion is fixed in the contract.

NIM has five decimal places: 1 NIM is 100,000 luna, and a Nimiq transaction value is expressed in luna. wNIM uses the 18 decimals conventional for ERC-20 tokens. One luna is therefore 10^13 of wNIM's smallest unit, and a locked amount in luna is multiplied by that factor when minted.

The conversion is exact in this direction, since every luna maps to a whole number of those units. It is not exact in the other direction, which is why [Burn and release](/bridge/how-it-works/burn-and-release) rejects amounts that are not a whole number of luna.
