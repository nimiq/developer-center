[@nimiq/core](../globals.md) / ES256Signature

# Class: ES256Signature

Defined in: @nimiq/core/types/wasm/web.d.ts:1356

An ES256 Signature represents a cryptographic proof that an ES256 private key signed some data.
It can be verified with the private key's public key.

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1360

#### Returns

`string`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1359

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1358

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1380

Serializes the signature to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1384

Formats the signature into a hex string.

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`bytes`): `ES256Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1366

Deserializes an ES256 signature from a byte array.

Throws when the byte array contains less than 64 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`ES256Signature`

***

### fromAsn1()

> `static` **fromAsn1**(`bytes`): `ES256Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1370

Parses an ES256 signature from its ASN.1 representation.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`ES256Signature`

***

### fromHex()

> `static` **fromHex**(`hex`): `ES256Signature`

Defined in: @nimiq/core/types/wasm/web.d.ts:1376

Parses an ES256 signature from its hex representation.

Throws when the string is not valid hex format or when it represents less than 64 bytes.

#### Parameters

##### hex

`string`

#### Returns

`ES256Signature`
