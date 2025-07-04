[@nimiq/core](../globals.md) / PartialSignature

# Class: PartialSignature

Defined in: @nimiq/core/types/wasm/web.d.ts:1403

A partial signature is a signature of one of the co-signers in a multisig.
Combining all partial signatures yields the full signature (combining is done through summation).

## Constructors

### Constructor

> **new PartialSignature**(`bytes`): `PartialSignature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1423

Creates a new partial signature from a byte array.

Throws when the byte array is not exactly 32 bytes long.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`PartialSignature`

## Properties

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1444

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1443

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1405

#### Returns

`string`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1442

Returns if this partial signature is equal to the other partial signature.

#### Parameters

##### other

`PartialSignature`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1404

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1428

Serializes the partial signature to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1438

Formats the partial signature into a hex string.

#### Returns

`string`

***

### create()

> `static` **create**(`own_private_key`, `own_public_key`, `own_commitment_pairs`, `other_public_keys`, `other_commitments`, `data`): `PartialSignature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1424

#### Parameters

##### own\_private\_key

[`PrivateKey`](PrivateKey.md)

##### own\_public\_key

[`PublicKey`](PublicKey.md)

##### own\_commitment\_pairs

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`CommitmentPair`](CommitmentPair.md))[]

##### other\_public\_keys

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PublicKey`](PublicKey.md))[]

##### other\_commitments

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`Commitment`](Commitment.md))[][]

##### data

`Uint8Array`

#### Returns

`PartialSignature`

***

### deserialize()

> `static` **deserialize**(`bytes`): `PartialSignature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1417

Deserializes a partial signature from a byte array.

Throws when the byte array contains less than 32 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`PartialSignature`

***

### fromAny()

> `static` **fromAny**(`secret`): `PartialSignature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1411

Parses a partial signature from a PartialSignature instance, a hex string representation, or a byte array.

Throws when a PartialSignature cannot be parsed from the argument.

#### Parameters

##### secret

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `PartialSignature`

#### Returns

`PartialSignature`

***

### fromHex()

> `static` **fromHex**(`hex`): `PartialSignature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1434

Parses a partial signature from its hex representation.

Throws when the string is not valid hex format or when it represents less than 32 bytes.

#### Parameters

##### hex

`string`

#### Returns

`PartialSignature`
