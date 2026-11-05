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

An oracle holds no funds and moves nothing. It stores hashes, and it knows nothing about who is bridging what. Every transfer, in either direction, ultimately succeeds or fails on whether its proof reconciles against one of these two contracts.

There are two of them, one per network, and they are not the same contract written twice. They share a storage construction and differ in everything else: what they hold, how often it is written, what their index means, and how much they understand about what they are storing.

## How an oracle works

Both oracles are a **ring buffer of Merkle nodes**.

Each has a fixed number of slots, and a **global index** that counts upward for the life of the contract. The index of a write determines its slot, as the index modulo the number of slots, so slots are reused in order and the index itself is never reset.

Writing does not replace what a slot holds. The new value is hashed together with the value already there:

```text
buffer[i mod n] = H(buffer[i mod n] ++ new value)
```

A slot therefore commits to every value ever written to it, not only the most recent one. This single property is what the retention behavior of the whole bridge follows from.

### Proofs grow, and nothing is discarded

Because a slot keeps a commitment to its whole history, a proof against an old write still resolves. It has to account for what came after it: the proof ends at the value the slot holds now, so it carries one additional node for each time the slot was written since.

Nothing is ever thrown away, so no amount of delay can make a transfer unprovable. A fixed number of slots usually means eviction, where old entries are dropped and a proof built against one becomes worthless.

What grows instead is the cost, and it grows at a steady rate. A proof picks up one extra node each time the buffer rotates. On the EVM network a header arrives about every minute and there are 1024 slots, so a rotation takes roughly 17 hours.

| **Minted after** | **Cost of the proof** |
| --- | --- |
| Under 17 hours | Nothing extra. The proof is as short as it can be |
| A year | About 513 extra nodes, on the order of a million gas to verify |
| About 7.5 years | It no longer fits. The mint exceeds Polygon's 128 KB transaction limit |

This is an accepted limitation rather than an open problem. It affects only locks left unminted, and minting promptly avoids it entirely.

### What the window bounds

Both contracts report the oldest index that can still be read back directly, and how far the writing has got. The range between them is the window. They count the upper end differently, which the sections below cover.

That range is where a slot holds exactly the value written at its index, with nothing folded in on top. Inside it, reading an index gives back the value written at that index. Outside it, the index still names its slot and the slot still holds a value, but that value now commits to later writes as well.

So the window describes how much can be read back directly, not how long a proof remains usable.

[IMAGE PLACEHOLDER: bridge-oracle-in-context.png. One oracle at close range, with the relayer writing in, the bridge contract and the public reading out, and a stored block hash matched against the same hash on a block explorer.]

## The Nimiq oracle

`OracleContract` is an account type on Nimiq, alongside the basic, HTLC, vesting and staking types. Its own code describes it as "essentially a hash storage", and that is the whole of it: it stores values the relayer gives it and does not interpret them.

```rust
pub struct OracleContract {
    /// The owner of the contract, the only address that can interact with it.
    pub owner: Address,
    /// When the contract is created, a deposit is required.
    pub balance: Coin,
    /// The number of hashes that can be stored.
    pub hash_count: u16,
    /// The hash algorithm of every stored value, fixed at creation.
    pub hash_algorithm: HashType,
    /// Ring buffer storage for hashes.
    pub hashes: Vec<AnyHash>,
    /// The latest written global index. It never wraps.
    pub latest_index: Option<u64>,
}
```

The number of slots is `hash_count`, fixed when the contract is created, never changed afterward, and not permitted to be zero. It also determines the deposit the contract requires.

`hash_algorithm` is fixed at creation as well, and for the same kind of reason the capacity is: a contract that depends on this oracle, such as a bridge, can check which hash function it uses before a single value has been written to it. Every value an update carries has to match it.

Before the first write the contract holds no hashes and `latest_index` is `None`. The first write resizes the buffer to `hash_count` zero hashes and starts the index at 0.

`latest_index` is **the index of the last value written**, so it is itself a valid index that can be read. `earliest_index` reports the oldest index whose slot has not been written again.

Reading a slot with `getEntry` returns the current value of the slot an index was written to. It gives back a value for **any** index that has been written, inside the window or not, and nothing at all only for an index that has not been reached yet. The same lookup inside consensus is what a release proof is checked against.

**Writing** is done with a signaling transaction carrying an `Update`, which is rejected unless it is signed by the contract owner. An update may carry several values at once, and no update may carry more than `hash_count` of them, the first update included. An update carrying none is accepted and changes nothing. A second operation, `ChangeOwner`, transfers ownership in a single step.

**Reading** is open to anyone, through RPC methods that each have a matching `nimiq-client` subcommand:

| Method | Returns |
| --- | --- |
| `getOwner` | The address currently allowed to write |
| `getLatestIndex` | The index of the last value written |
| `getEarliestIndex` | The oldest index still read back directly |
| `getWindowSize` | The number of slots, `hash_count` |
| `getLatestData` | The value of the slot written last |
| `getEntry` | The value of the slot a given index was written to |

## The EVM oracle

`EvmOracle` is a standalone Solidity contract, deployed separately from the bridge contract that reads it. Its public surface is declared in an `IOracle` interface, which the bridge contract compiles against.

Unlike the Nimiq oracle, this one knows what it is storing. It holds **Nimiq macro block headers**, and it checks each one before storing it.

It has two jobs, and neither of them is specific to the bridge. It knows Nimiq's header format and it carries bytes outward for whoever calls it, but it knows nothing about transfers, wNIM or who is bridging. The same pair of oracles could serve a different pair of contracts without being changed.

### What it stores and what it checks

A submitted header is the content serialization of a Nimiq macro block header. The contract stores its block hash, computed with Blake2b, in the ring buffer. It keeps the header's height alongside, which the Nimiq oracle has no equivalent of, and which is why height-based lookups exist only on this side.

Before storing anything it checks that the header follows from the one before it:

- the Nimiq network id in the header is the one this oracle serves
- the height is exactly one batch above the last stored header, so headers cannot be skipped, reordered or replayed
- the timestamp has not gone backwards
- the parent election hash matches the last election block the oracle saw
- the protocol version is either the current one, or one higher and on an election block
- a header format is on record for that version, and the header's length matches it exactly

The chain is rooted at an **anchor** election block, fixed when the contract is deployed. The anchor is not stored as a header; the first header's parent election hash has to be the anchor's hash. A deployment has to choose an anchor at or before the creation of the Nimiq bridge account it serves, because a lock in a block before the anchor can never be proved.

These checks catch a relayer that is broken, out of order or pointed at the wrong network. They do not verify the validators' signatures on a header, so a submission is not proof that a block exists. See [Security and trust model](/bridge/security-and-trust).

### Header formats are per protocol version

A Nimiq macro header's layout can change with a protocol version, and the oracle has to read fields out of it by byte offset. So the layout of each version is on record in the contract, as a `HeaderFormat` giving the total length and the offset of each field the contract or its consumers read.

The owner sets the next version's format before that version activates on Nimiq. Once the oracle has stored a header of a given version, the fields it checked itself are fixed and cannot be changed. The two roots it never reads, the state root and the history root, stay correctable, because a consumer reads those and the oracle has no stake in them.

`versionStart` reports the height of the first stored header of a version, which is how a consumer knows which format applies to a given block.

### Writing and reading

**Writing** is done with `submit(bytes header)`, which carries an `onlyOwner` modifier and takes one header at a time. `submitMany` takes several consecutive headers in one call, for a backlog after an outage, and is atomic: if any header in the batch is rejected, none of them is stored.

Ownership transfer is deliberately two steps: the current owner nominates a successor with `transferOwnership`, and the successor must call `acceptOwnership` to take over. A single-step transfer to an address that could not act would leave the contract unable to accept new headers.

The number of slots is `WINDOW_SIZE`, a constant of 1024, rather than chosen at creation as on Nimiq.

`nextIndex` is **the index the next header will be written at**, which is also the number of headers written so far. The last valid index is `nextIndex - 1`. This is the opposite convention to the Nimiq contract, where the equivalent value is itself a readable index.

**Reading** is open to anyone, through view functions callable directly or from a block explorer:

| Function | Returns |
| --- | --- |
| `nextIndex` | The index the next header goes to, and the number written so far |
| `earliestIndex` | The oldest index still read back directly |
| `windowSize` | The number of slots, 1024 |
| `latestData` | The value of the slot written last |
| `latestHeight` | The height of the last header stored |
| `getEntry` | The height and current slot value for an index inside the window |
| `entryAt` | The current value of the slot an index was written to |
| `headerFormat` | The field layout of a protocol version |
| `versionStart` | The height a protocol version's first stored header had |

The difference between `getEntry` and `entryAt` matters when building a proof. `getEntry` is bounded to the window and reverts with `EvmOracle: index too old` below it. `entryAt` reverts only for an index that has not been written yet, which makes it the one a mint proof resolves against.

One function sits outside the interface: `getDataForHeight` returns the index and slot value for a given Nimiq height. Because submissions are strictly one batch apart, the index is computed from the height rather than searched for.

### The outbound forwarder

The EVM oracle carries one function that has nothing to do with storing headers. `forward` takes a byte string, emits it as a `DataForwarded` event tagged with the caller's address, and stores nothing.

This is the EVM network's only way to say something that Nimiq will hear. It is **permissionless**: any contract can call it, the owner is not involved, and the data is never inspected. The length is capped, and that is the only restriction.

The relayer commits every record the forwarder emits, so the filtering happens at the far end. The bridge contract on Nimiq accepts a record only if the source address tagged onto it is the one contract that bridge was configured to accept. [Burn and release](/bridge/how-it-works/burn-and-release) covers how a burn travels this path.

## Who can write

On both networks, **only the owner of an oracle can write to it**. On Nimiq an `Update` not signed by the owner is rejected; on the EVM side `submit` carries `onlyOwner`. The forwarder is the one exception, and it stores nothing.

Reading, by contrast, is open to anyone on both networks, and the values needed to check an attestation independently are public on the source network.

What that division means for the guarantees the bridge offers is covered in [Security and trust model](/bridge/security-and-trust).
