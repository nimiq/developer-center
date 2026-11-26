---
title: Oracle contract on Nimiq
description: The state, transactions, read methods and logs of the oracle contract on Nimiq.
icon: i-tabler-file-code
navigation:
  title: Oracle contract
  order: 2
---

# Oracle contract (Nimiq)

The oracle contract is the Nimiq account type that stores the values its owner writes to it. On the bridge, its owner writes roots of the relayer's record tree, and [bridge contracts](/bridge/reference/nimiq/bridge-contract) check every release proof against them. The contract does not interpret what it stores. How its slots are written, and why a proof never expires, is explained in [Oracles](/bridge/how-it-works/oracles).

## Account state

```rust
pub struct OracleContract {
    pub owner: Address,
    pub balance: Coin,
    pub hash_count: u16,
    pub hash_algorithm: HashType,
    pub hashes: Vec<AnyHash>,
    pub latest_index: Option<u64>,
}
```

| Field | Type | Description |
| --- | --- | --- |
| `owner` | `Address` | The only address that can write to the contract, transfer it or delete it |
| `balance` | `Coin` | The deposit paid at creation. No other transaction adds to it |
| `hash_count` | `u16` | The number of slots. Fixed at creation, and never zero |
| `hash_algorithm` | `HashType` | The hash algorithm of every stored value. Fixed at creation |
| `hashes` | `Vec<AnyHash>` | The slots. Empty before the first write, and exactly `hash_count` values after it |
| `latest_index` | `Option<u64>` | The index of the last value written. `None` before the first write. It never wraps |

Read through RPC, an oracle account shows its balance, `owner`, `hashCount`, `hashAlgorithm` and `hashes`, with the slots in slot order.

## Indices and slots

Every value written gets the next **index**, starting at 0. Index `i` is written to slot `i mod hash_count`. Writing a value does not replace the slot's content. The slot becomes the hash of its previous value followed by the new one, in `hash_algorithm`, so it commits to every value ever written to it. On the first write, every slot starts from the zero hash.

| Term | Meaning |
| --- | --- |
| Latest index | `latest_index`, the index of the last value written |
| Earliest index | The oldest index whose slot has not been written again since. 0 until a slot is written a second time, then `latest_index - hash_count + 1` |
| Entry at an index | The current value of the slot that index was written to. Defined for every index from 0 to `latest_index`, inside the window or not |

A release proof for an index ends in that index's entry. For an index older than the earliest index, the proof reaches the current value with one more step for each time the slot has been written since.

## Creating an oracle contract

An oracle contract is created by a transaction with the contract creation flag, sent to the address the protocol derives for the new contract. Its `value` is the deposit and becomes the contract's balance. Its `recipient_data` holds the creation data:

```rust
pub struct CreationTransactionData {
    pub owner: Address,
    pub hash_count: u16,
    pub hash_algorithm: HashType,
}
```

The only check on the creation data is that `hash_count` is not zero. `hash_algorithm` is one of `blake2b`, `sha256`, `sha512` or `keccak256`. A bridge contract cannot use an oracle whose algorithm is `sha512`, because the [creation checks](/bridge/reference/nimiq/chain-config#creation-checks) for a bridge reject it.

`createNewOracleTransaction` and `sendNewOracleTransaction` build this transaction on a node, signed by a wallet unlocked on that node.

## Owner transactions

The owner writes to the contract and transfers it with signaling transactions, which carry no value. Any other transaction to an oracle contract is invalid. The transaction's `recipient_data` holds one of two operations:

```rust
pub enum IncomingOracleTransactionData {
    Update {
        hashes: Vec<AnyHash>,
        proof: SignatureProof,
    },
    ChangeOwner {
        new_owner: Address,
        proof: SignatureProof,
    },
}
```

Both operations carry the owner's signature in `proof`, made over the transaction with `proof` left empty. The transaction itself is sent and signed by whichever account pays the fee, which does not have to be the owner.

The data must be in its canonical encoding, the exact bytes it serializes to. Any other encoding of the same data is invalid. An update has no nonce. What keeps a signed update from being written twice is that the chain refuses a transaction it already holds, and that only works if each update has exactly one encoding.

### `Update`

Writes `hashes` to the next indices, in order.

- Every hash must use the contract's `hash_algorithm`.
- An update can carry at most `hash_count` hashes.
- An update with no hashes is accepted and changes nothing.

If the block is reverted, the slots the update wrote get back their previous values.

`createUpdateOracleTransaction` and `sendUpdateOracleTransaction` build an update on a node. They take two wallets, the owner that signs the update and the sender that pays the fee.

### `ChangeOwner`

Makes `new_owner` the owner, in one step. The new owner does not have to accept.

`createChangeOracleOwnerTransaction` and `sendChangeOracleOwnerTransaction` build this transaction, with the same two wallets as an update.

## Deleting an oracle contract

The owner deletes the contract by withdrawing its deposit. The withdrawal is a transaction from the contract, signed by the owner, and it must take the whole balance.

- Its `value` must equal the balance.
- Its fee also comes from the balance, so the fee must be zero.
- It carries no `sender_data`.

Once the balance is zero, the contract is removed. A bridge contract that reads it [can no longer release any NIM](/bridge/security-and-trust#if-the-nimiq-oracle-is-deleted).

`createDeleteOracleTransaction` and `sendDeleteOracleTransaction` build the withdrawal.

## Read methods

Anyone can read an oracle contract through these RPC methods. They are answered by full nodes only.

| Method | Parameters | Returns |
| --- | --- | --- |
| `getOwner` | `contractAddress` | The current owner |
| `getWindowSize` | `contractAddress` | `hash_count` |
| `getLatestIndex` | `contractAddress` | The latest index |
| `getEarliestIndex` | `contractAddress` | The earliest index |
| `getLatestData` | `contractAddress` | The entry at the latest index |
| `getEntry` | `contractAddress`, `index` | The entry at `index` |

Before the first write, `getLatestIndex`, `getEarliestIndex` and `getLatestData` return an error saying the oracle contract has no data. `getEntry` returns an error for an index that has not been written yet.

## Logs

Each log appears in RPC responses with the `type` and fields below.

| `type` | Emitted on | Fields |
| --- | --- | --- |
| `oracle-create` | Creation | `contractAddress`, `owner`, `hashCount`, `deposit` |
| `oracle-update` | Every update that writes at least one hash | `contractAddress`, `hashes` |
| `oracle-change-owner` | Every owner change | `contractAddress`, `oldOwner`, `newOwner` |

A deletion emits the usual `pay-fee` and `transfer` logs.
