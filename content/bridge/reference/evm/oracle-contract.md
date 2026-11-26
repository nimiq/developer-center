---
title: Oracle contract on the EVM network
description: The state, functions, revert messages and events of the oracle contract on the EVM network.
icon: i-tabler-file-code
navigation:
  title: Oracle contract
  order: 2
---

# Oracle contract (EVM)

`EvmOracle` is the oracle contract on the EVM network. It records every Nimiq macro block header, in order, after checking that each one follows from the one before it, and the [bridge contract](/bridge/reference/evm/bridge-contract) checks every mint proof against it. It also forwards data from the EVM network to Nimiq. It is deployed separately from the bridge contract, which reads it through the `IOracle` interface. To understand how the oracle works and why it is built this way, read [Oracles](/bridge/how-it-works/oracles#the-evm-oracle).

## State

| Variable | Type | Description |
| --- | --- | --- |
| `WINDOW_SIZE` | `uint256` | The number of slots, 1024. A constant |
| `MAX_FORWARD_DATA_LENGTH` | `uint256` | The most data `forward` accepts, 3,584 bytes. A constant |
| `anchorHeight` | `uint32` | The height of the anchor election block. Fixed at deployment |
| `blocksPerBatch` | `uint32` | Nimiq blocks per batch, the distance between two macro headers. Fixed at deployment |
| `batchesPerEpoch` | `uint16` | Nimiq batches per epoch, which locates election blocks. Fixed at deployment |
| `networkId` | `uint8` | The Nimiq network id every header must carry. Fixed at deployment |
| `owner` | `address` | The only account that can submit headers, set header formats and transfer ownership |
| `pendingOwner` | `address` | The nominated owner, or the zero address |
| `nextIndex` | `uint256` | The index the next header is written at, which is also the number of headers written |
| `latestHeight` | `uint32` | The height of the last header written. The anchor's height before the first |
| `latestTimestamp` | `uint64` | The timestamp of the last header written, in milliseconds. The anchor's before the first |
| `latestVersion` | `uint16` | The protocol version of the last header written. The anchor's before the first |
| `latestElectionHash` | `bytes32` | The hash of the last election block, the anchor or the last election header written |

Each one has a public getter of the same name.

## Indices and slots

Headers are numbered in the order they are written, starting at 0. That number is the header's **index**. The oracle has 1024 slots and fills them in turn. Header 0 goes to slot 0, header 1023 to slot 1023, and header 1024 starts again at slot 0. The slot does not hold the block hash itself. It becomes `blake2b256(previous value ++ blockHash)`, starting from zero, so it commits to every block hash ever written to it. The block hash is in the `Submitted` event for that index.

The headers are exactly one batch apart, so index `i` always holds the header at height `anchorHeight + (i + 1) × blocksPerBatch`.

The window is the range from `earliestIndex` up to, but not including, `nextIndex`. Unlike `latest_index` on the [Nimiq oracle](/bridge/reference/nimiq/oracle-contract#indices-and-slots), `nextIndex` is not itself a written index.

### Rebuilding a ring segment

A mint proof for index `i` carries a ring segment that ends at the slot's current value. It can be rebuilt from `Submitted` events, which are indexed by `index`:

1. The first value is the slot's value before `i`. That is `newEntry` of the event for `i - 1024`, or zero if `i` is below 1024.
2. The values after it are `blockHash` of the events for `i + 1024`, `i + 2048` and so on, up to the last index written.

## Deploying

```solidity
constructor(
    bytes memory _anchorHeader,
    HeaderFormat memory _anchorFormat,
    uint32 _blocksPerBatch,
    uint16 _batchesPerEpoch,
    uint8 _networkId
)
```

| Parameter | Description |
| --- | --- |
| `_anchorHeader` | The content serialization of the anchor election block's header |
| `_anchorFormat` | The [header format](#header-formats) of the anchor's protocol version |
| `_blocksPerBatch` | Blocks per batch. 60 on mainnet and testnet |
| `_batchesPerEpoch` | Batches per epoch. 720 on mainnet and testnet |
| `_networkId` | The Nimiq network id |

The constructor reads the anchor's height, timestamp and version from its header, and records its hash as the last election hash. The anchor itself is not stored as a header. The deploying account becomes the owner.

The anchor must be an [election block](/protocol/glossary#election-block) at or before the creation of the Nimiq bridge contract the oracle serves, because a lock in a block before the anchor can never be proven.

| Message | Cause |
| --- | --- |
| `EvmOracle: blake2f unavailable` | The chain has no EIP-152 `blake2f` precompile |
| `EvmOracle: zero batch length`, `EvmOracle: zero epoch length` | `_blocksPerBatch` or `_batchesPerEpoch` is 0 |
| `EvmOracle: header too short`, `EvmOracle: wrong header length` | The anchor header is not the length its format gives |
| `EvmOracle: wrong network` | The anchor header's network id is not `_networkId` |
| `EvmOracle: header format too short`, `EvmOracle: header field out of bounds`, `EvmOracle: header fields overlap` | `_anchorFormat` is not a valid format |

## Header formats

The oracle reads fields out of a header by byte offset, and the layout can change with a protocol version. Each version's layout is on record as a `HeaderFormat`:

```solidity
struct HeaderFormat {
    uint16 headerLength;
    uint16 blockNumber;
    uint16 timestamp;
    uint16 parentElectionHash;
    uint16 stateRoot;
    uint16 historyRoot;
}
```

`headerLength` is the exact length of a header of that version. The other fields are byte offsets into it. `blockNumber` is 4 bytes and `timestamp` 8, both big-endian, and the rest are 32-byte hashes. Every version starts with the network id (1 byte) and the version (2 bytes), so a header's version can be read before its format is known.

`setHeaderFormat(uint16 version, HeaderFormat format)` sets a format. Only the owner can call it.

- For the version after `latestVersion`, it sets the format, and the format can be corrected freely until the first header of that version is written.
- For `latestVersion` and older versions the oracle has a format for, only `stateRoot` and `historyRoot` can be corrected. The oracle never reads those two, and a consumer such as the bridge contract does.

`headerFormat(uint16 version)` returns a version's format. `versionStart(uint16 version)` returns the height of the first header of that version written, or 0 for the anchor's version and for a version not reached yet.

| Message | Cause |
| --- | --- |
| `EvmOracle: unsupported header version` | The oracle has no format for that version |
| `EvmOracle: checked fields are fixed` | The change touches `headerLength`, `blockNumber`, `timestamp` or `parentElectionHash` of a version already in use |
| `EvmOracle: not the next version` | The version is more than one above `latestVersion` |
| `EvmOracle: header format too short`, `EvmOracle: header field out of bounds`, `EvmOracle: header fields overlap` | The format is not valid |

Setting a format emits `HeaderFormatSet`.

## Submitting headers

```solidity
function submit(bytes calldata header) external;
function submitMany(bytes[] calldata headers) external;
```

Only the owner can call them. `submit` writes one header, the content serialization of the next Nimiq macro block header. `submitMany` writes several consecutive headers in one call, and is atomic. If any header is rejected, none is written.

Each header is checked in this order:

| Message | Cause |
| --- | --- |
| `EvmOracle: caller is not the owner` | The caller is not the owner |
| `EvmOracle: header too short` | The header is shorter than its 3-byte prefix |
| `EvmOracle: version changes only by one, on an election block` | The version is neither `latestVersion` nor, on an election block, one higher |
| `EvmOracle: unsupported header version` | The oracle has no format for the header's version yet |
| `EvmOracle: wrong header length` | The header is not the length its format gives |
| `EvmOracle: wrong network` | The header's network id is not `networkId` |
| `EvmOracle: not the next macro block` | The height is not exactly one batch above `latestHeight` |
| `EvmOracle: timestamp decreased` | The timestamp is earlier than `latestTimestamp` |
| `EvmOracle: wrong parent election hash` | The parent election hash is not `latestElectionHash` |

A header whose version has no format yet is rejected and can be submitted again once the owner sets the format, with no gap in the chain.

When a header is written:

- Its slot gets the new value, and its height is recorded with it.
- `nextIndex`, `latestHeight`, `latestTimestamp` and `latestVersion` are updated.
- On an election block, its hash becomes `latestElectionHash`.
- On the first header of a new version, its height becomes that version's `versionStart`.
- `Submitted` is emitted.

## Ownership

Ownership is transferred in two steps.

| Function | Who can call it | Effect |
| --- | --- | --- |
| `transferOwnership(address newOwner)` | Owner | Nominates `newOwner`. Reverts with `EvmOracle: zero newOwner` for the zero address |
| `acceptOwnership()` | Nominated owner | Makes the caller the owner. Reverts with `EvmOracle: caller is not pendingOwner` for anyone else |

There is no function to renounce ownership.

## Read functions

Anyone can call these.

| Function | Returns | Reverts |
| --- | --- | --- |
| `entryAt(uint256 index)` | The current value of the slot `index` was written to, inside the window or not | `EvmOracle: index not written yet` |
| `getEntry(uint256 index)` | The height and current slot value for an index inside the window | `EvmOracle: index too old`, `EvmOracle: index too large`, `EvmOracle: no header stored yet` |
| `getDataForHeight(uint32 height)` | The index and current slot value for the header at `height`, inside the window | `EvmOracle: height not found`, `EvmOracle: not a macro block` |
| `earliestIndex()` | The oldest index inside the window | `EvmOracle: no header stored yet` |
| `latestData()` | The value of the slot written last | `EvmOracle: no header stored yet` |
| `windowSize()` | 1024 | |

A mint proof resolves against `entryAt`, because it is the one that [answers for an index outside the window](/bridge/how-it-works/oracles#writing-and-reading).

## The forwarder

```solidity
function forward(bytes calldata data) external;
```

`forward` emits `data` in a `DataForwarded` event, tagged with the caller's address. Anyone can call it, it stores nothing, and it never reads `data`. It reverts with `EvmOracle: forward data too long` if `data` is longer than 3,584 bytes, so that a record and its longest proof still fit a Nimiq release.

The relayer commits every `DataForwarded` event to Nimiq. The Nimiq bridge contract accepts only records whose source is the contract it was [configured](/bridge/reference/nimiq/chain-config) to accept.

## Events

| Event | Emitted on | Fields |
| --- | --- | --- |
| `Submitted` | Every header written | `index` (indexed), `height` (indexed), `blockHash`, `newEntry` |
| `HeaderFormatSet` | Deployment, and every `setHeaderFormat` | `version` (indexed), `format` |
| `OwnershipTransferStarted` | `transferOwnership` | `currentOwner` (indexed), `pendingOwner` (indexed) |
| `OwnerChanged` | Deployment, and `acceptOwnership` | `oldOwner` (indexed), `newOwner` (indexed) |
| `DataForwarded` | Every `forward` | `source` (indexed), `data` |

`blockHash` in `Submitted` is the header's block hash, `blake2b256(header)`, and `newEntry` is the slot's new value.
