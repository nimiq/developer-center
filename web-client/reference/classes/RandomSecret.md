Defined in: @nimiq/core/types/wasm/web.d.ts:1801

A random secret that proves a [Commitment](Commitment.md) for signing multisignature transactions.
It is supposed to be kept secret (similar to a private key).

## Constructors

### Constructor

> **new RandomSecret**(`bytes`): `RandomSecret`

Defined in: @nimiq/core/types/wasm/web.d.ts:1821

Creates a new random secret from a byte array.

Throws when the byte array is not exactly 32 bytes long.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`RandomSecret`

## Properties

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1841

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1840

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1803

#### Returns

`string`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1839

Returns if this random secret is equal to the other random secret.

#### Parameters

##### other

`RandomSecret`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1802

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1825

Serializes the random secret to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1835

Formats the random secret into a hex string.

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`bytes`): `RandomSecret`

Defined in: @nimiq/core/types/wasm/web.d.ts:1815

Deserializes a random secret from a byte array.

Throws when the byte array contains less than 32 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`RandomSecret`

***

### fromAny()

> `static` **fromAny**(`secret`): `RandomSecret`

Defined in: @nimiq/core/types/wasm/web.d.ts:1809

Parses a random secret from a RandomSecret instance, a hex string representation, or a byte array.

Throws when a RandomSecret cannot be parsed from the argument.

#### Parameters

##### secret

`string` | `Uint8Array` | `RandomSecret`

#### Returns

`RandomSecret`

***

### fromHex()

> `static` **fromHex**(`hex`): `RandomSecret`

Defined in: @nimiq/core/types/wasm/web.d.ts:1831

Parses a random secret from its hex representation.

Throws when the string is not valid hex format or when it represents less than 32 bytes.

#### Parameters

##### hex

`string`

#### Returns

`RandomSecret`
