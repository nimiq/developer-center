# PlainMicroBlock

> @nimiq/core / PlainMicroBlock

[@nimiq/core](../globals) / PlainMicroBlock

# Interface: PlainMicroBlock

Defined in: @nimiq/core/types/wasm/web.d.ts:248

JSON-compatible and human-readable format of blocks.

## Extends

- [`PlainBlockCommonFields`](PlainBlockCommonFields)

## Properties

### batch

> **batch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:185

The batch number that the block is in.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`batch`](PlainBlockCommonFields#batch)

---

### bodyHash

> **bodyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:226

The root of the Merkle tree of the body, in HEX format. It acts as a commitment to the body.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`bodyHash`](PlainBlockCommonFields#bodyhash)

---

### epoch

> **epoch**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:189

The epoch number that the block is in.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`epoch`](PlainBlockCommonFields#epoch)

---

### extraData

> **extraData**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:218

The extra data of the block, in HEX format. Up to 32 raw bytes.

In the genesis block, it encodes the initial supply as a big-endian `u64`.

No planned use otherwise.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`extraData`](PlainBlockCommonFields#extradata)

---

### hash

> **hash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:173

The block's unique hash, used as its identifier, in HEX format.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`hash`](PlainBlockCommonFields#hash)

---

### height

> **height**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:181

The block's block height, also called block number.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`height`](PlainBlockCommonFields#height)

---

### historyHash

> **historyHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:230

A Merkle root over all of the transactions that happened in the current epoch, in HEX format.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`historyHash`](PlainBlockCommonFields#historyhash)

---

### network

> **network**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:197

The network that this block is valid for.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`network`](PlainBlockCommonFields#network)

---

### prevHash

> **prevHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:205

The hash of the header of the immediately preceding block (either micro or macro), in HEX format.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`prevHash`](PlainBlockCommonFields#prevhash)

---

### seed

> **seed**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:210

The seed of the block. This is the BLS signature of the seed of the immediately preceding
block (either micro or macro) using the validator key of the block producer.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`seed`](PlainBlockCommonFields#seed)

---

### size

> **size**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:177

The block's on-chain size, in bytes.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`size`](PlainBlockCommonFields#size)

---

### stateHash

> **stateHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:222

The root of the Merkle tree of the blockchain state, in HEX format. It acts as a commitment to the state.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`stateHash`](PlainBlockCommonFields#statehash)

---

### timestamp

> **timestamp**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:193

The timestamp of the block. It follows the Unix time and has millisecond precision.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`timestamp`](PlainBlockCommonFields#timestamp)

---

### version

> **version**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:201

The protocol version that this block is valid for.

#### Inherited from

[`PlainBlockCommonFields`](PlainBlockCommonFields).[`version`](PlainBlockCommonFields#version)
