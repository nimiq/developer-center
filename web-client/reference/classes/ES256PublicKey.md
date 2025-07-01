[@nimiq/core](../globals.md) / ES256PublicKey

# Class: ES256PublicKey

Defined in: @nimiq/core/types/wasm/web.d.ts:1163

The non-secret (public) part of an ES256 asymmetric key pair that is typically used to digitally verify or encrypt data.

## Constructors

### Constructor

> **new ES256PublicKey**(`bytes`): `ES256PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1207

Creates a new public key from a byte array.

Compatible with the `-7` COSE algorithm identifier.

## Example

```javascript
// Create/register a credential with the Webauthn API:
const cred = await navigator.credentials.create({
  publicKey: {
    pubKeyCredParams: [{
      type: 'public-key',
      alg: -7, // ES256 = ECDSA over P-256 with SHA-256
    }],
    // ...
  },
})

// Then create an instance of ES256PublicKey from the credential response:
const publicKey = new Nimiq.ES256PublicKey(new Uint8Array(cred.response.getPublicKey()))
```

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`ES256PublicKey`

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1165

#### Returns

`string`

***

### compare()

> **compare**(`other`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1236

Compares this public key to the other public key.

Returns -1 if this public key is smaller than the other public key, 0 if they are equal,
and 1 if this public key is larger than the other public key.

#### Parameters

##### other

`ES256PublicKey`

#### Returns

`number`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1229

Returns if this public key is equal to the other public key.

#### Parameters

##### other

`ES256PublicKey`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1164

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1211

Serializes the public key to a byte array.

#### Returns

`Uint8Array`

***

### toAddress()

> **toAddress**(): [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1225

Gets the public key's address.

#### Returns

[`Address`](Address.md)

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1221

Formats the public key into a hex string.

#### Returns

`string`

***

### verify()

> **verify**(`signature`, `data`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1169

Verifies that a signature is valid for this public key and the provided data.

#### Parameters

##### signature

[`ES256Signature`](ES256Signature.md)

##### data

`Uint8Array`

#### Returns

`boolean`

***

### deserialize()

> `static` **deserialize**(`bytes`): `ES256PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1175

Deserializes a public key from a byte array.

Throws when the byte array contains less than 33 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`ES256PublicKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `ES256PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1217

Parses a public key from its hex representation.

Throws when the string is not valid hex format or when it represents less than 33 bytes.

#### Parameters

##### hex

`string`

#### Returns

`ES256PublicKey`

***

### fromRaw()

> `static` **fromRaw**(`raw_bytes`): `ES256PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1183

Deserializes a public key from its raw representation.

#### Parameters

##### raw\_bytes

`Uint8Array`

#### Returns

`ES256PublicKey`

***

### fromSpki()

> `static` **fromSpki**(`spki_bytes`): `ES256PublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:1179

Deserializes a public key from its SPKI representation.

#### Parameters

##### spki\_bytes

`Uint8Array`

#### Returns

`ES256PublicKey`
