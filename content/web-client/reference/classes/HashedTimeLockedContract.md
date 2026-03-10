[@nimiq/core](../globals.md) / HashedTimeLockedContract

# Class: HashedTimeLockedContract

Defined in: @nimiq/core/types/wasm/web.d.ts:1332

Utility class providing methods to parse Hashed Time Locked Contract transaction data and proofs.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1335

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1334

#### Returns

`void`

***

### dataToPlain()

> `static` **dataToPlain**(`data`): [`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1339

Parses the data of a Hashed Time Locked Contract creation transaction into a plain object.

#### Parameters

##### data

`Uint8Array`

#### Returns

[`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

***

### proofToPlain()

> `static` **proofToPlain**(`proof`): [`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1343

Parses the proof of a Hashed Time Locked Contract settlement transaction into a plain object.

#### Parameters

##### proof

`Uint8Array`

#### Returns

[`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)
