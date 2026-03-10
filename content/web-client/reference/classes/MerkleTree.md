[@nimiq/core](../globals.md) / MerkleTree

# Class: MerkleTree

Defined in: @nimiq/core/types/wasm/web.d.ts:1405

The Merkle tree is a data structure that allows for efficient verification of the membership of an element in a set.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1408

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1407

#### Returns

`void`

***

### computeRoot()

> `static` **computeRoot**(`values`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1412

Computes the root of a Merkle tree from a list of Uint8Arrays.

#### Parameters

##### values

`Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`Uint8Array`
