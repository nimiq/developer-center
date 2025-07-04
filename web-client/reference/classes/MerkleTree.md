[@nimiq/core](../globals.md) / MerkleTree

# Class: MerkleTree

Defined in: @nimiq/core/types/wasm/web.d.ts:1391

The Merkle tree is a data structure that allows for efficient verification of the membership of an element in a set.

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1393

#### Returns

`void`

***

### computeRoot()

> `static` **computeRoot**(`values`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1397

Computes the root of a Merkle tree from a list of Uint8Arrays.

#### Parameters

##### values

`Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`Uint8Array`
