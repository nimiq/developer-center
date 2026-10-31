---
title: Oracles
description: The record each network keeps of the other, and what every transfer is proved against.
icon: i-tabler-database
navigation:
  title: Oracles
  order: 2
---

# Oracles

Nimiq cannot read the state of an EVM network, and an EVM network cannot read the state of Nimiq. Each side therefore holds an **oracle contract**: a record of what happened on the other network. The relayer writes to it, and the local bridge contract checks transfer proofs against it.

An oracle holds no funds and moves nothing. It stores hashes, and it knows nothing about who is bridging what. Every transfer, in either direction, ultimately succeeds or fails on whether its proof reconciles against a single entry in one of these two contracts.

There are two of them, one per network, and they are not the same contract written twice. They share a construction but differ in what they store, how much they retain, and what their index means.

## How an oracle works

Both oracles are a **hash chain** held in a **sliding window**.

Each entry is derived from the entry before it, together with the new value being recorded:

```text
data_i = H(data_i-1 || state_i)
```

`state_i` is the value being attested: a history root from Nimiq in one oracle, a root over burn events in the other. `data_i` is the running head of the chain after that value is folded in.

Chaining rather than storing a plain list means each entry proves the value folded into it. With the entry before it in hand, recomputing the hash confirms what was recorded, so the oracle does not have to store that value separately.

Entries are addressed by a **global index**. The index keeps counting upward for the life of the contract and is not reset when the window wraps, so an index identifies one specific attestation for as long as it is retained.

The window holds a fixed number of entries. When it is full, a new entry replaces the oldest one.

[IMAGE: bridge-oracle-window.png. A row of fixed slots holding a chain of entries, each derived from the one before it, with the oldest being replaced as a new entry arrives and the replaced entry shown as unrecoverable.]

A replaced entry is gone permanently. Reading its index returns nothing on Nimiq and reverts with `EvmOracle: index too old` on the EVM side, so any proof built against it stops working.

What expires is the proof, not the claim. Whoever submits a proof chooses the index it is checked against, so a new proof can be built against an entry the oracle still holds. How long that remains possible depends on the window size and how often entries are written, and it differs by direction: [Lock and mint](/bridge/how-it-works/lock-and-mint) carries a further constraint that [Burn and release](/bridge/how-it-works/burn-and-release) does not.

## The Nimiq oracle

`OracleContract` is an account type on Nimiq, alongside the basic, HTLC, vesting and staking types. Its own code describes it as "essentially a hash storage".

```rust
pub struct OracleContract {
    /// The owner of the contract, the only address that can interact with it.
    pub owner: Address,
    /// When the contract is created, a deposit is required.
    pub balance: Coin,
    /// The number of hashes that can be stored.
    pub hash_count: u16,
    /// Ring buffer storage for hashes.
    pub hashes: Vec<AnyHash>,
    /// The latest valid index in the hash chain.
    pub latest_index: Option<u64>,
}
```

The window size is `hash_count`, fixed when the contract is created and never changed afterwards. Before the first write the contract holds no hashes and `latest_index` is `None`.

`latest_index` is **the index of the last hash written**, so it is a valid index that can be read directly. Reads are served by `get_hash_at_index`, which returns nothing for any index outside the retained range, and `earliest_index` reports the oldest index still held.

Each entry is a single chained hash. The raw attested value is not kept separately, which means reconstructing the chain at a given index requires the predecessor entry as well. A proof therefore needs both its own index and the one before it to still be within the window.

**Writing** is done with a signaling transaction carrying an `Update`, which is rejected unless it is signed by the contract owner. An update may carry several hashes at once, though an update after the first may not carry more than `hash_count` of them. A second operation, `ChangeOwner`, transfers ownership in a single step.

**Reading** is open to anyone, through RPC methods that each have a matching `nimiq-client` subcommand:

| Method | Returns |
| --- | --- |
| `get_owner` | The address currently allowed to write |
| `get_latest_index` | The index of the last hash written |
| `get_earliest_index` | The oldest index still retained |
| `get_window_size` | The capacity, `hash_count` |
| `get_latest_data` | The current head of the hash chain |
| `get_entry` | The hash stored at a given index |

## The EVM oracle

`EvmOracle` is a standalone Solidity contract, deployed separately from the bridge contract that reads it. Its public read surface is declared in an `IOracle` interface, which the bridge contract compiles against.

Each entry holds three values rather than one:

```solidity
struct OracleEntry {
    uint64 height;
    bytes32 data;      // hash-chain head after this state: keccak256(prevData || stateHash)
    bytes32 stateHash; // raw state hash folded in at this index
}
```

Keeping `stateHash` alongside the chained `data` is what lets a consumer verify a single attested value without needing the entry before it. Since the predecessor may already have been replaced, reading the raw value directly avoids a failure that reconstruction would hit.

`height` records the block height on the source network that the entry corresponds to. The Nimiq oracle has no equivalent field, which is why height-based lookups exist only on this side.

The window is `WINDOW_SIZE`, a constant of 1024 entries, rather than chosen at creation as on Nimiq.

`latestIndex` is **the number of updates performed**, not an index that can be read. The last valid index is `latestIndex - 1`, and `getEntry` rejects anything at or above `latestIndex`. This is the opposite convention to the Nimiq contract, where the equivalent value is itself readable.

**Writing** is done with `submit(uint64 height, bytes32 stateHash)`, which carries an `onlyOwner` modifier and takes one entry per call. Heights must strictly increase, so an entry cannot be recorded out of order or replayed at the same height. Ownership transfer is deliberately two steps: the current owner nominates a successor with `transferOwnership`, and the successor must call `acceptOwnership` to take over. A single-step transfer to an address that could not act would leave the contract unable to accept new entries.

**Reading** is open to anyone, through view functions callable directly or from a block explorer:

| Function | Returns |
| --- | --- |
| `latestIndex` | The number of updates performed so far |
| `earliestIndex` | The oldest index still retained |
| `windowSize` | The capacity, 1024 |
| `latestData` | The current head of the hash chain |
| `latestHeight` | The height associated with the latest entry |
| `getEntry` | The `height` and `data` at a given index |
| `stateHashAt` | The raw attested value at a given index |

`EvmOracle` adds one function beyond the interface, `getDataForHeight`, which finds the index and chain head for a given source-network height by scanning backwards through the window.

## Who can write

On both networks, **only the owner of an oracle can add entries**. On Nimiq an `Update` not signed by the owner is rejected; on the EVM side `submit` carries `onlyOwner`. Reading, by contrast, is open to anyone on both networks, and the values needed to check an attestation independently are public on the source network.

What that division means for the guarantees the bridge offers is covered in [Security and trust model](/bridge/security-and-trust).
