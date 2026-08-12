[@nimiq/core](../globals.md) / Commitment

# Class: Commitment

Defined in: @nimiq/core/types/wasm/web.d.ts:1127

A cryptographic commitment to a [RandomSecret](RandomSecret.md). The commitment is public, while the secret is, well, secret.

## Constructors

### Constructor

> **new Commitment**(`bytes`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1162

Creates a new commitment from a byte array.

Throws when the byte array is not exactly 32 bytes long.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Commitment`

## Properties

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1188

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1189

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1130

#### Returns

`string`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1129

#### Returns

`void`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1144

Returns if this commitment is equal to the other commitment.

#### Parameters

##### other

`Commitment`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1128

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1166

Serializes the commitment to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1187

Formats the commitment into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`random_secret`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1134

Derives a commitment from an existing random secret.

#### Parameters

##### random\_secret

[`RandomSecret`](RandomSecret.md)

#### Returns

`Commitment`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1140

Deserializes a commitment from a byte array.

Throws when the byte array contains less than 32 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Commitment`

***

### fromAny()

> `static` **fromAny**(`commitment`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1150

Parses a commitment from a Commitment instance, a hex string representation, or a byte array.

Throws when a Commitment cannot be parsed from the argument.

#### Parameters

##### commitment

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `Commitment`

#### Returns

`Commitment`

***

### fromHex()

> `static` **fromHex**(`hex`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1156

Parses a commitment from its hex representation.

Throws when the string is not valid hex format or when it represents less than 32 bytes.

#### Parameters

##### hex

`string`

#### Returns

`Commitment`

***

### sum()

> `static` **sum**(`commitments`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1172

Sums up multiple commitments into one aggregated commitment.

Attention: This is a simple summation, not a MuSig2 aggregation! For MuSig2 aggregation, use [Commitment.sumMuSig2](#summusig2).

#### Parameters

##### commitments

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `Commitment`)[]

#### Returns

`Commitment`

***

### sumMuSig2()

> `static` **sumMuSig2**(`public_keys`, `commitment_groups`, `data`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1183

Aggregates commitments into one aggregated commitment using the MuSig2 scheme.

- Each commitment group must correspond to the public key at the same index in the `publicKeys` array.
- The number of commitment groups and public keys must be the same.
- Each commitment group must contain exactly `MUSIG2_PARAMETER_V = 2` commitments.
- The `data` parameter is the same data that will be signed using the aggregated commitment, e.g. the serialized content of a transaction.

Returns the aggregated commitment.

#### Parameters

##### public\_keys

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PublicKey`](PublicKey.md))[]

##### commitment\_groups

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `Commitment`)[][]

##### data

`Uint8Array`

#### Returns

`Commitment`
