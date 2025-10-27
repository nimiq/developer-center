[@nimiq/core](../globals.md) / VestingContract

# Class: VestingContract

Defined in: @nimiq/core/types/wasm/web.d.ts:2242

Utility class providing methods to parse Vesting Contract transaction data and proofs.

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2244

#### Returns

`void`

***

### dataToPlain()

> `static` **dataToPlain**(`data`, `tx_value`): [`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2248

Parses the data of a Vesting Contract creation transaction into a plain object.

#### Parameters

##### data

`Uint8Array`

##### tx\_value

`bigint`

#### Returns

[`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

***

### proofToPlain()

> `static` **proofToPlain**(`proof`): [`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2252

Parses the proof of a Vesting Contract claiming transaction into a plain object.

#### Parameters

##### proof

`Uint8Array`

#### Returns

[`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)
