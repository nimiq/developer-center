[@nimiq/core](../globals.md) / PrivateKey

# Class: PrivateKey

Defined in: @nimiq/core/types/wasm/web.d.ts:1894

The secret (private) part of an asymmetric key pair that is typically used to digitally sign or decrypt data.

## Constructors

### Constructor

> **new PrivateKey**(`bytes`): `PrivateKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1922

Creates a new private key from a byte array.

Throws when the byte array is not exactly 32 bytes long.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`PrivateKey`

## Properties

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1932

***

### PURPOSE\_ID

> `readonly` `static` **PURPOSE\_ID**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1931

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1933

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1896

#### Returns

`void`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1906

Returns if this private key is equal to the other private key.

#### Parameters

##### other

`PrivateKey`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1895

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1926

Serializes the private key to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1930

Formats the private key into a hex string.

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`bytes`): `PrivateKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1902

Deserializes a private key from a byte array.

Throws when the byte array contains less than 32 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`PrivateKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `PrivateKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1912

Parses a private key from its hex representation.

Throws when the string is not valid hex format or when it represents less than 32 bytes.

#### Parameters

##### hex

`string`

#### Returns

`PrivateKey`

***

### generate()

> `static` **generate**(): `PrivateKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1916

Generates a new private key from secure randomness.

#### Returns

`PrivateKey`
