[@nimiq/core](../globals.md) / PublicKey

# Class: PublicKey

Defined in: @nimiq/core/types/wasm/web.d.ts:1727

The non-secret (public) part of an asymmetric key pair that is typically used to digitally verify or encrypt data.

## Constructors

### Constructor

> **new PublicKey**(`bytes`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1763

Creates a new public key from a byte array.

Throws when the byte array is not exactly 32 bytes long.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`PublicKey`

## Properties

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1794

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1793

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1729

#### Returns

`string`

***

### compare()

> **compare**(`other`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1792

Compares this public key to the other public key.

Returns -1 if this public key is smaller than the other public key, 0 if they are equal,
and 1 if this public key is larger than the other public key.

#### Parameters

##### other

`PublicKey`

#### Returns

`number`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1785

Returns if this public key is equal to the other public key.

#### Parameters

##### other

`PublicKey`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1728

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1767

Serializes the public key to a byte array.

#### Returns

`Uint8Array`

***

### toAddress()

> **toAddress**(): [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1781

Gets the public key's address.

#### Returns

[`Address`](Address.md)

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1777

Formats the public key into a hex string.

#### Returns

`string`

***

### verify()

> **verify**(`signature`, `data`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1743

Verifies that a signature is valid for this public key and the provided data.

#### Parameters

##### signature

[`Signature`](Signature.md)

##### data

`Uint8Array`

#### Returns

`boolean`

***

### derive()

> `static` **derive**(`private_key`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1733

Derives a public key from an existing private key.

#### Parameters

##### private\_key

[`PrivateKey`](PrivateKey.md)

#### Returns

`PublicKey`

***

### deserialize()

> `static` **deserialize**(`bytes`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1749

Deserializes a public key from a byte array.

Throws when the byte array contains less than 32 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`PublicKey`

***

### fromAny()

> `static` **fromAny**(`key`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1739

Parses a public key from a PublicKey instance, a hex string representation, or a byte array.

Throws when an PublicKey cannot be parsed from the argument.

#### Parameters

##### key

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `PublicKey`

#### Returns

`PublicKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1773

Parses a public key from its hex representation.

Throws when the string is not valid hex format or when it represents less than 32 bytes.

#### Parameters

##### hex

`string`

#### Returns

`PublicKey`

***

### fromRaw()

> `static` **fromRaw**(`raw_bytes`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1757

Deserializes a public key from its raw representation.

#### Parameters

##### raw\_bytes

`Uint8Array`

#### Returns

`PublicKey`

***

### fromSpki()

> `static` **fromSpki**(`spki_bytes`): `PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1753

Deserializes a public key from its SPKI representation.

#### Parameters

##### spki\_bytes

`Uint8Array`

#### Returns

`PublicKey`
