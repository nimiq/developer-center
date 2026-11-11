---
title: Lock and mint
description: How NIM locked on Nimiq becomes wrapped NIM on an EVM network.
icon: i-tabler-arrow-right
navigation:
  title: Lock and mint
  order: 3
---

# Lock and mint

Moving NIM to an EVM network takes four steps: the NIM is locked in the bridge contract on Nimiq, the transaction reaches finality, a macro block header covering it is committed to the oracle on the EVM network, and [wNIM](/bridge#the-wrapped-token) is then minted against a proof that the lock happened.

The NIM stays locked on Nimiq for as long as that wNIM exists, and wNIM is created only against proof of a lock that has already been finalized.

The header feed runs continuously. The relayer submits every Nimiq macro block header to the oracle in order, whether or not anyone is bridging. A lock does not cause a submission. It waits for the next one that happens to cover it.

If the relayer goes offline, locks are still accepted on Nimiq, but they cannot be minted until a macro block header covering them reaches the oracle. The oracle accepts only the next macro block header, so missed macro block headers cannot be skipped. When the relayer returns, it submits the missed macro block headers in order, several per transaction. Its Nimiq node must still hold them: after a longer outage, the oracle advances only with macro block headers from a node that kept them.

[IMAGE PLACEHOLDER: bridge-lock-and-mint.png. The four steps in sequence, with the wait for finality as its own step and the header feed drawn as an ambient process that the user's path crosses rather than causes.]

## 1. Lock NIM on Nimiq

The user sends a NIM transaction to the bridge contract. The `value` is the amount to lock, and `recipient_data` names the EVM address that will receive the wNIM, the **destination**, along with what the other network needs to verify the transfer:

| **Bytes** | **Field** | **Description** |
| --- | --- | --- |
| 0 to 7 | Nonce | 8 bytes, big-endian. The destination's next mint nonce |
| 8 to 27 | Destination | The 20-byte EVM address that will receive wNIM |
| 28 to 35 | EVM chain id | 8 bytes, big-endian. The EVM network this lock is for |
| 36 to 55 | EVM bridge address | The 20-byte bridge contract that may mint this lock |

The last two fields bind the lock to one bridge on one network. A lock made for one EVM network cannot be minted on another, and a lock made for one bridge cannot be minted by a second bridge serving the same network.

::callout{icon="i-tabler-alert-triangle" color="warning"}
Nimiq does not check `recipient_data` when the lock is made. A lock transaction is accepted whatever it contains, the NIM is locked, and the layout is only enforced when the mint is attempted. Data that cannot be parsed as a lock can never be minted, and the NIM behind it stays locked with no way to recover it.
::

The bridge contract does very little at this point. It adds the transaction value to its balance, increments its transaction counter, and records the deposit in the transaction log. There is nothing to verify, because no claim is being made yet: this is a transfer into a contract, and the proof obligation falls on the other network later.

The contract balance is the total NIM locked by every user of that bridge, not a per-user record. What ties a particular deposit to a particular mint is the transaction itself, not the balance.

### The nonce is sequential

The nonce belongs to the destination. Every EVM address has its own count on the bridge contract, and a mint is accepted only if the lock carries exactly one more than the last nonce minted to that address. The first mint to an address that has never received one carries nonce 1.

This is replay protection, and it is strict in the same way the other direction is. A lock whose nonce skips ahead cannot be minted, and neither can any later lock for that address, because each one waits for a predecessor that will never arrive. A lock whose nonce repeats a value already minted cannot be minted at all.

The count is readable from the bridge contract as `mintNonces`, keyed by address. The value to put in a lock is that count plus one, plus however many locks to the same destination have already been made but not yet minted. Keeping track of those is left to whoever builds the lock.

::callout{icon="i-tabler-alert-triangle" color="warning"}
Two locks to the same destination must not carry the same nonce. The count advances when a mint happens, not when a lock happens, so reading it again before the first mint has landed returns the same value as before. If two locks collide on a nonce, only one of them can ever be minted and the NIM behind the other stays locked permanently.

For the same reason, a lock that needs retrying has to be resent as the **same signed bytes**. Nimiq only treats byte-identical transactions as duplicates, so rebuilding the lock produces a second lock carrying the same nonce.
::

This is not the account nonce an EVM network uses to order an account's own transactions, and Nimiq has no equivalent of its own: ordinary Nimiq transactions are protected from replay by the [validity window](/protocol/storage/history-store#validity-store-and-validity-window) instead.

### The destination must be an address the user controls

Minting requires the destination's own consent, so the destination has to be an address whose owner is able to give it. An exchange deposit address cannot: the exchange has no reason to authorize a mint for an incoming bridge transfer, and generally no mechanism to. A lock naming one leaves the NIM locked on Nimiq and the wNIM unmintable, and neither is recoverable.

## 2. Wait for the next macro block

The lock transaction is included in a micro block, but a micro block alone is not enough. The transfer waits for the next [macro block](/protocol/consensus/block-format), which finalizes the batch and makes the transaction irreversible.

This wait exists so the other network is never asked to mint against something that could still disappear. wNIM minted against a reverted lock would not be backed by anything, and the 1:1 relationship between locked NIM and wNIM would be broken with no way to repair it.

## 3. A header covering the lock is committed

The relayer submits Nimiq macro block headers to the oracle on the EVM network by calling `submit`, one per macro block, in order. This runs on its own schedule.

What this means for a transfer is that the third step is usually already done, or about to be, without anything having asked for it. The lock needs a header from its own epoch, at or after the block the lock was in, and the feed produces one every batch.

The oracle checks each header against the one before it and stores its block hash. See [Oracles](/bridge/how-it-works/oracles) for what those checks are and how the storage works. Writing is restricted to the oracle's owner, so this step is performed by whoever operates the bridge but can be verified by anyone.

::callout{icon="i-tabler-info-circle" color="info"}
A header commits the history of its own epoch up to its own block. A lock can be proved against any header from its epoch at or after the lock's block, so a proof can be rebuilt against a later one. Headers from a different epoch do not cover it. The oracle stores every macro header, so no lock is left without one to prove against.
::

## 4. Mint on the EVM network

Minting is a call to `mint` with five arguments. Three of them describe the lock and two of them locate it in the oracle:

| **Argument** | **What it is** |
| --- | --- |
| `historicTx` | The lock, serialized exactly as it appears as a leaf of Nimiq's history tree |
| `mmrProof` | The [history tree proof](/protocol/storage/merkle-trees) that this leaf is covered by the header's history root |
| `header` | The content serialization of a macro header from the lock's epoch, at or after the lock's block |
| `index` | The oracle index that header's block hash was written at |
| `ring` | The oracle slot's value before that index, then every block hash written to the slot since |

A Nimiq node supplies the first three directly: `getTransactionHistoryProof` for the transaction and its proof, and `getRawMacroHeader` for the header. The last two come from the oracle on the EVM network, and `ring` is assembled from the oracle's `Submitted` events.

### Who can call it, and who pays

`mint` has to be sent by the destination itself. `mintWithSignature` takes the same five arguments plus a signature, and anyone can submit it, but the signature has to be the destination's authorization of that one lock. Either way the wNIM goes to the destination and never to the submitter.

The destination does not have to be an ordinary account. A contract wallet can consent as well, either by calling `mint` or by signing in a way it accepts under EIP-1271.

**The relayer does not perform this step.** It submits headers and commits records, and it never sends a bridge transaction of any kind, so no transfer completes on the user's behalf by default. Whoever submits the mint pays the gas for it, which means the destination needs the EVM network's own gas token in order to call `mint`.

That is what the signature path exists for. It enables gas abstraction: a sponsor can submit a mint the destination has authorized, so the destination does not need to hold any gas. The contract function is in place and the design reserves room for this, but the sponsor service itself is not built yet.

::callout{icon="i-tabler-alert-triangle" color="warning"}
Never sign a mint authorization for a lock made by somebody else. An attacker can lock a trivial amount naming the destination and its next nonce, then ask for an authorization covering that lock. Signing it spends the nonce on the attacker's lock, and the destination's own pending lock can never be minted. An authorization covers one specific lock and has no expiry, so authorize only locks there is a record of creating, and check the lock's transaction and amount before signing.
::

### How the proof resolves

The proof runs in three segments, and they do not age the same way:

| **Segment** | **Proves** | **Over time** |
| --- | --- | --- |
| History tree | The lock is covered by the header's history root | Fixed. Fetched once from a Nimiq node, valid forever |
| Header | The header hashes to a specific block hash | Fixed. The header bytes never change |
| Ring | That block hash is committed by the oracle slot at `index` | Grows by one value each time the slot is written again |

This is why a long-delayed transfer costs more to complete rather than becoming impossible. The first two segments are the same whenever they are fetched. The third has to account for everything written to that slot since, so it is assembled at mint time rather than saved with the rest. [Oracles](/bridge/how-it-works/oracles) covers how far that growth can go.

### What the contract checks

Before anything is minted, the contract runs a fixed sequence of checks. Each one closes a specific way the 1:1 backing could otherwise be broken:

| **Check** | **What it prevents** |
| --- | --- |
| The oracle, bridge address and network id are all configured | A partially configured contract minting against incomplete assumptions. Each is unset until explicitly configured, so minting fails until all three are set |
| The history tree proof reconstructs the history root read out of the header | Minting against a transaction the header does not cover |
| The ring segment reconstructs the oracle's current value for that slot | Minting against a header the oracle never stored |
| The leaf parses as a successful, non-creating lock with exactly 56 bytes of data | Minting against anything that is not a completed transfer into the bridge |
| The transaction's recipient is the configured Nimiq bridge address, and its sender is not | Minting against any transaction in the history rather than only deposits sent to the bridge, and against the bridge's own outgoing releases |
| The Nimiq network id matches in the header and in both places the record carries it | Minting against a genuine deposit made on a different Nimiq network. Nimiq addresses are identical across networks, so without this a deposit on one network could be replayed against a bridge serving another |
| The lock names this EVM chain and this bridge contract | Minting a lock intended for a different network or a different bridge |
| The nonce is exactly one higher than the last minted for that destination | Replaying a lock, and minting locks for an address out of order |
| The caller is the destination, or carries its authorization | Minting to an address without its consent |

Only then is the lock's value minted to the destination as wNIM, and a `Minted` event emitted.

### Locks are read by protocol version

The parsing in that fourth check depends on how Nimiq serializes a history record, and that can change with a protocol version. Rather than fixing one layout in the bridge contract, the owner registers a parser per protocol version with `setLockParser`, and the contract selects one with `lockParserFor` based on the version of the header the lock was proved against.

A Nimiq upgrade that changes the record or transaction encoding therefore needs a new parser registered, not a new bridge deployed. Locks made under older versions stay mintable, because their parsers stay registered.

## Units

Both sides count in luna. NIM has five decimal places: 1 NIM is 100,000 luna, and a Nimiq transaction value is expressed in luna. wNIM has the same five decimals, so its smallest unit is one luna and 1 wNIM corresponds to 1 NIM. A lock mints exactly its value, and a burn releases exactly its amount, with no conversion in either direction.
