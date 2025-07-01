Defined in: @nimiq/core/types/wasm/web.d.ts:494

JSON-compatible and human-readable format of blocks.

## Extended by

- [`PlainMacroBlock`](PlainMacroBlock.md)
- [`PlainMicroBlock`](PlainMicroBlock.md)

## Properties

### batch

> **batch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:510

The batch number that the block is in.

***

### bodyHash

> **bodyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:551

The root of the Merkle tree of the body, in HEX format. It acts as a commitment to the body.

***

### epoch

> **epoch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:514

The epoch number that the block is in.

***

### extraData

> **extraData**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:543

The extra data of the block, in HEX format. Up to 32 raw bytes.

In the genesis block, it encodes the initial supply as a big-endian `u64`.

No planned use otherwise.

***

### hash

> **hash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:498

The block\'s unique hash, used as its identifier, in HEX format.

***

### height

> **height**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:506

The block\'s block height, also called block number.

***

### historyHash

> **historyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:555

A Merkle root over all of the transactions that happened in the current epoch, in HEX format.

***

### network

> **network**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:522

The network that this block is valid for.

***

### prevHash

> **prevHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:530

The hash of the header of the immediately preceding block (either micro or macro), in HEX format.

***

### seed

> **seed**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:535

The seed of the block. This is the BLS signature of the seed of the immediately preceding
block (either micro or macro) using the validator key of the block producer.

***

### size

> **size**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:502

The block\'s on-chain size, in bytes.

***

### stateHash

> **stateHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:547

The root of the Merkle tree of the blockchain state, in HEX format. It acts as a commitment to the state.

***

### timestamp

> **timestamp**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:518

The timestamp of the block. It follows the Unix time and has millisecond precision.

***

### version

> **version**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:526

The protocol version that this block is valid for.
