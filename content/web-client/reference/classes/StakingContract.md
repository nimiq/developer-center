[@nimiq/core](../globals.md) / StakingContract

# Class: StakingContract

Defined in: @nimiq/core/types/wasm/web.d.ts:1959

Utility class providing methods to parse Staking Contract transaction data and proofs.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1962

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1961

#### Returns

`void`

***

### dataToPlain()

> `static` **dataToPlain**(`data`): [`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1966

Parses the data of a Staking Contract incoming transaction into a plain object.

#### Parameters

##### data

`Uint8Array`

#### Returns

[`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

***

### proofToPlain()

> `static` **proofToPlain**(`proof`): [`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1970

Parses the proof of a Staking Contract outgoing transaction into a plain object.

#### Parameters

##### proof

`Uint8Array`

#### Returns

[`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)
