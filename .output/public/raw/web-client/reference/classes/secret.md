# Secret

> @nimiq/core / Secret

[@nimiq/core](../globals) / Secret

# Abstract Class: Secret

Defined in: @nimiq/core/lib/index.d.ts:175

## Extends

- `Serializable`

## Extended by

- [`Entropy`](Entropy)

## Constructors

### Constructor

> **new Secret**(`type`, `purposeId`): `Secret`

Defined in: @nimiq/core/lib/index.d.ts:183

#### Parameters

##### type

[`Type`](../@nimiq/namespaces/Secret/enumerations/Type)

##### purposeId

`number`

#### Returns

`Secret`

#### Overrides

`Serializable.constructor`

## Properties

### ENCRYPTION_CHECKSUM_SIZE

> `static` **ENCRYPTION_CHECKSUM_SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:181

---

### ENCRYPTION_CHECKSUM_SIZE_V3

> `static` **ENCRYPTION_CHECKSUM_SIZE_V3**: `number`

Defined in: @nimiq/core/lib/index.d.ts:182

---

### ENCRYPTION_KDF_ROUNDS

> `static` **ENCRYPTION_KDF_ROUNDS**: `number`

Defined in: @nimiq/core/lib/index.d.ts:180

---

### ENCRYPTION_SALT_SIZE

> `static` **ENCRYPTION_SALT_SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:179

---

### SIZE

> `static` **SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:178

## Accessors

### encryptedSize

#### Get Signature

> **get** **encryptedSize**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:196

Returns the serialized size of this object when encrypted.

##### Returns

`number`

## Methods

### compare()

> **compare**(`o`): `number`

Defined in: @nimiq/core/lib/index.d.ts:97

Compares this object to another object.

Returns a negative number if `this` is smaller than o, a positive number if `this` is larger than o, and zero if equal.

#### Parameters

##### o

`Serializable`

#### Returns

`number`

#### Inherited from

`Serializable.compare`

---

### equals()

> **equals**(`o`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:91

Checks for equality with another Serializable.

#### Parameters

##### o

`unknown`

#### Returns

`boolean`

#### Inherited from

`Serializable.equals`

---

### exportEncrypted()

> **exportEncrypted**(`key`): `Promise`<[`SerialBuffer`](SerialBuffer)>

Defined in: @nimiq/core/lib/index.d.ts:192

Encrypts the Secret with a password.

#### Parameters

##### key

`Uint8Array`

#### Returns

`Promise`<[`SerialBuffer`](SerialBuffer)>

---

### serialize()

> `abstract` **serialize**(`buf?`): [`SerialBuffer`](SerialBuffer)

Defined in: @nimiq/core/lib/index.d.ts:98

#### Parameters

##### buf?

[`SerialBuffer`](SerialBuffer)

#### Returns

[`SerialBuffer`](SerialBuffer)

#### Inherited from

`Serializable.serialize`

---

### toBase64()

> **toBase64**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:106

Formats the object into a base64 string.

#### Returns

`string`

#### Inherited from

`Serializable.toBase64`

---

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:110

Formats the object into a hex string.

#### Returns

`string`

#### Inherited from

`Serializable.toHex`

---

### toString()

> **toString**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:102

Formats the object into a hex string.

#### Returns

`string`

#### Inherited from

`Serializable.toString`

---

### exportEncrypted()

> `static` **exportEncrypted**(`secret`, `key`): `Promise`<[`SerialBuffer`](SerialBuffer)>

Defined in: @nimiq/core/lib/index.d.ts:188

#### Parameters

##### secret

`Secret` | `PrivateKey`

##### key

`Uint8Array`

#### Returns

`Promise`<[`SerialBuffer`](SerialBuffer)>

---

### fromEncrypted()

> `static` **fromEncrypted**(`buf`, `key`): `Promise`<[`Entropy`](Entropy) | `PrivateKey`>

Defined in: @nimiq/core/lib/index.d.ts:187

Decrypts a Secret from an encrypted byte array and its password.

#### Parameters

##### buf

[`SerialBuffer`](SerialBuffer)

##### key

`Uint8Array`

#### Returns

`Promise`<[`Entropy`](Entropy) | `PrivateKey`>
