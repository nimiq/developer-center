Defined in: @nimiq/core/types/wasm/web.d.ts:1324

Utility class providing methods to parse Hashed Time Locked Contract transaction data and proofs.

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1326

#### Returns

`void`

***

### dataToPlain()

> `static` **dataToPlain**(`data`): [`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1330

Parses the data of a Hashed Time Locked Contract creation transaction into a plain object.

#### Parameters

##### data

`Uint8Array`

#### Returns

[`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

***

### proofToPlain()

> `static` **proofToPlain**(`proof`): [`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1334

Parses the proof of a Hashed Time Locked Contract settlement transaction into a plain object.

#### Parameters

##### proof

`Uint8Array`

#### Returns

[`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)
