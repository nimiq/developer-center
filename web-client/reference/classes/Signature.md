[@nimiq/core](../globals.md) / Signature

# Class: Signature

Defined in: @nimiq/core/types/wasm/web.d.ts:1846

An Ed25519 Signature represents a cryptographic proof that a private key signed some data.
It can be verified with the private key's public key.

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1849

#### Returns

`string`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1848

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1859

Serializes the signature to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1877

Formats the signature into a hex string.

#### Returns

`string`

***

### create()

> `static` **create**(`private_key`, `public_key`, `data`): `Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1863

Create a signature from a private key and its public key over byte data.

#### Parameters

##### private\_key

[`PrivateKey`](PrivateKey.md)

##### public\_key

[`PublicKey`](PublicKey.md)

##### data

`Uint8Array`

#### Returns

`Signature`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1855

Deserializes an Ed25519 signature from a byte array.

Throws when the byte array contains less than 64 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Signature`

***

### fromAsn1()

> `static` **fromAsn1**(`bytes`): `Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1867

Parses an Ed25519 signature from its ASN.1 representation.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Signature`

***

### fromHex()

> `static` **fromHex**(`hex`): `Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1873

Parses an Ed25519 signature from its hex representation.

Throws when the string is not valid hex format or when it represents less than 64 bytes.

#### Parameters

##### hex

`string`

#### Returns

`Signature`
