[@nimiq/core](../globals.md) / PlainMacroBlock

# Interface: PlainMacroBlock

Defined in: @nimiq/core/types/wasm/web.d.ts:558

JSON-compatible and human-readable format of blocks.

## Extends

- [`PlainBlockCommonFields`](PlainBlockCommonFields.md)

## Properties

### batch

> **batch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:510

The batch number that the block is in.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`batch`](PlainBlockCommonFields.md#batch)

***

### bodyHash

> **bodyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:551

The root of the Merkle tree of the body, in HEX format. It acts as a commitment to the body.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`bodyHash`](PlainBlockCommonFields.md#bodyhash)

***

### epoch

> **epoch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:514

The epoch number that the block is in.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`epoch`](PlainBlockCommonFields.md#epoch)

***

### extraData

> **extraData**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:543

The extra data of the block, in HEX format. Up to 32 raw bytes.

In the genesis block, it encodes the initial supply as a big-endian `u64`.

No planned use otherwise.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`extraData`](PlainBlockCommonFields.md#extradata)

***

### hash

> **hash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:498

The block\'s unique hash, used as its identifier, in HEX format.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`hash`](PlainBlockCommonFields.md#hash)

***

### height

> **height**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:506

The block\'s block height, also called block number.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`height`](PlainBlockCommonFields.md#height)

***

### historyHash

> **historyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:555

A Merkle root over all of the transactions that happened in the current epoch, in HEX format.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`historyHash`](PlainBlockCommonFields.md#historyhash)

***

### isElectionBlock

> **isElectionBlock**: `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:562

If true, this macro block is an election block finalizing an epoch.

***

### network

> **network**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:522

The network that this block is valid for.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`network`](PlainBlockCommonFields.md#network)

***

### prevElectionHash

> **prevElectionHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:570

The hash of the header of the preceding election macro block, in HEX format.

***

### prevHash

> **prevHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:530

The hash of the header of the immediately preceding block (either micro or macro), in HEX format.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`prevHash`](PlainBlockCommonFields.md#prevhash)

***

### round

> **round**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:566

The round number this block was proposed in.

***

### seed

> **seed**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:535

The seed of the block. This is the BLS signature of the seed of the immediately preceding
block (either micro or macro) using the validator key of the block producer.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`seed`](PlainBlockCommonFields.md#seed)

***

### size

> **size**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:502

The block\'s on-chain size, in bytes.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`size`](PlainBlockCommonFields.md#size)

***

### stateHash

> **stateHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:547

The root of the Merkle tree of the blockchain state, in HEX format. It acts as a commitment to the state.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`stateHash`](PlainBlockCommonFields.md#statehash)

***

### timestamp

> **timestamp**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:518

The timestamp of the block. It follows the Unix time and has millisecond precision.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`timestamp`](PlainBlockCommonFields.md#timestamp)

***

### version

> **version**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:526

The protocol version that this block is valid for.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields.md).[`version`](PlainBlockCommonFields.md#version)
