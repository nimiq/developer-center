[@nimiq/core](../globals.md) / Commitment

# Class: Commitment

Defined in: @nimiq/core/types/wasm/web.d.ts:1034

A cryptographic commitment to a [RandomSecret](RandomSecret.md). The commitment is public, while the secret is, well, secret.

## Constructors

### Constructor

> **new Commitment**(`bytes`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1062

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

Defined in: @nimiq/core/types/wasm/web.d.ts:1082

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1081

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1036

#### Returns

`string`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1080

Returns if this commitment is equal to the other commitment.

#### Parameters

##### other

`Commitment`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1035

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1066

Serializes the commitment to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1076

Formats the commitment into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`random_secret`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1040

Derives a commitment from an existing random secret.

#### Parameters

##### random\_secret

[`RandomSecret`](RandomSecret.md)

#### Returns

`Commitment`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1056

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

Defined in: @nimiq/core/types/wasm/web.d.ts:1050

Parses a commitment from a Commitment instance, a hex string representation, or a byte array.

Throws when a Commitment cannot be parsed from the argument.

#### Parameters

##### commitment

`string` | `Uint8Array` | `Commitment`

#### Returns

`Commitment`

***

### fromHex()

> `static` **fromHex**(`hex`): `Commitment`

Defined in: @nimiq/core/types/wasm/web.d.ts:1072

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

Defined in: @nimiq/core/types/wasm/web.d.ts:1044

Sums up multiple commitments into one aggregated commitment.

#### Parameters

##### commitments

(`string` \| `Uint8Array` \| `Commitment`)[]

#### Returns

`Commitment`
