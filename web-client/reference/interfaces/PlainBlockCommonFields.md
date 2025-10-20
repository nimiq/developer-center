[@nimiq/core](../globals.md) / PlainBlockCommonFields

# Interface: PlainBlockCommonFields

Defined in: @nimiq/core/types/wasm/web.d.ts:26

JSON-compatible and human-readable format of blocks.

## Extended by

- [`PlainMacroBlock`](PlainMacroBlock.md)
- [`PlainMicroBlock`](PlainMicroBlock.md)

## Properties

### batch

> **batch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:42

The batch number that the block is in.

***

### bodyHash

> **bodyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:83

The root of the Merkle tree of the body, in HEX format. It acts as a commitment to the body.

***

### epoch

> **epoch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:46

The epoch number that the block is in.

***

### extraData

> **extraData**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:75

The extra data of the block, in HEX format. Up to 32 raw bytes.

In the genesis block, it encodes the initial supply as a big-endian `u64`.

No planned use otherwise.

***

### hash

> **hash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:30

The block\'s unique hash, used as its identifier, in HEX format.

***

### height

> **height**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:38

The block\'s block height, also called block number.

***

### historyHash

> **historyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:87

A Merkle root over all of the transactions that happened in the current epoch, in HEX format.

***

### network

> **network**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:54

The network that this block is valid for.

***

### prevHash

> **prevHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:62

The hash of the header of the immediately preceding block (either micro or macro), in HEX format.

***

### seed

> **seed**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:67

The seed of the block. This is the BLS signature of the seed of the immediately preceding
block (either micro or macro) using the validator key of the block producer.

***

### size

> **size**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:34

The block\'s on-chain size, in bytes.

***

### stateHash

> **stateHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:79

The root of the Merkle tree of the blockchain state, in HEX format. It acts as a commitment to the state.

***

### timestamp

> **timestamp**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:50

The timestamp of the block. It follows the Unix time and has millisecond precision.

***

### version

> **version**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:58

The protocol version that this block is valid for.
