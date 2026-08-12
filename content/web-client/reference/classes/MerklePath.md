[@nimiq/core](../globals.md) / MerklePath

# Class: MerklePath

Defined in: @nimiq/core/types/wasm/web.d.ts:1519

A Merkle path consisting of a sequence of hashes that can be used to verify the inclusion of a leaf in a Merkle tree.

## Properties

### hashes

> `readonly` **hashes**: `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: @nimiq/core/types/wasm/web.d.ts:1538

Returns the hashes in the Merkle path.

***

### length

> `readonly` **length**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1542

Returns the length of the Merkle path.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1522

#### Returns

`void`

***

### computeRoot()

> **computeRoot**(`leaf`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1526

Computes the Merkle root of the path given a leaf hash.

#### Parameters

##### leaf

`Uint8Array`

#### Returns

`Uint8Array`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1521

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1534

Serializes the Merkle path into a byte array.

#### Returns

`Uint8Array`

***

### deserialize()

> `static` **deserialize**(`data`): `MerklePath`

Defined in: @nimiq/core/types/wasm/web.d.ts:1530

Deserializes a Merkle path from a byte array.

#### Parameters

##### data

`Uint8Array`

#### Returns

`MerklePath`
