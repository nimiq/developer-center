Defined in: @nimiq/core/lib/index.d.ts:206

## Extends

- [`Secret`](Secret.md)

## Constructors

### Constructor

> **new Entropy**(`arg`): `Entropy`

Defined in: @nimiq/core/lib/index.d.ts:213

Creates a new Entropy from a byte array.

#### Parameters

##### arg

`Uint8Array`

#### Returns

`Entropy`

#### Overrides

[`Secret`](Secret.md).[`constructor`](Secret.md#constructor)

## Properties

### ENCRYPTION\_CHECKSUM\_SIZE

> `static` **ENCRYPTION\_CHECKSUM\_SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:181

#### Inherited from

[`Secret`](Secret.md).[`ENCRYPTION_CHECKSUM_SIZE`](Secret.md#encryption_checksum_size)

***

### ENCRYPTION\_CHECKSUM\_SIZE\_V3

> `static` **ENCRYPTION\_CHECKSUM\_SIZE\_V3**: `number`

Defined in: @nimiq/core/lib/index.d.ts:182

#### Inherited from

[`Secret`](Secret.md).[`ENCRYPTION_CHECKSUM_SIZE_V3`](Secret.md#encryption_checksum_size_v3)

***

### ENCRYPTION\_KDF\_ROUNDS

> `static` **ENCRYPTION\_KDF\_ROUNDS**: `number`

Defined in: @nimiq/core/lib/index.d.ts:180

#### Inherited from

[`Secret`](Secret.md).[`ENCRYPTION_KDF_ROUNDS`](Secret.md#encryption_kdf_rounds)

***

### ENCRYPTION\_SALT\_SIZE

> `static` **ENCRYPTION\_SALT\_SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:179

#### Inherited from

[`Secret`](Secret.md).[`ENCRYPTION_SALT_SIZE`](Secret.md#encryption_salt_size)

***

### PURPOSE\_ID

> `static` **PURPOSE\_ID**: `number`

Defined in: @nimiq/core/lib/index.d.ts:208

***

### SIZE

> `static` **SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:207

#### Overrides

[`Secret`](Secret.md).[`SIZE`](Secret.md#size)

## Accessors

### encryptedSize

#### Get Signature

> **get** **encryptedSize**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:196

Returns the serialized size of this object when encrypted.

##### Returns

`number`

#### Inherited from

[`Secret`](Secret.md).[`encryptedSize`](Secret.md#encryptedsize)

***

### serializedSize

#### Get Signature

> **get** **serializedSize**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:241

Returns the serialized size of this Entropy.

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

[`Secret`](Secret.md).[`compare`](Secret.md#compare)

***

### equals()

> **equals**(`o`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:249

Checks for equality with another Entropy.

#### Parameters

##### o

`unknown`

#### Returns

`boolean`

#### Overrides

[`Secret`](Secret.md).[`equals`](Secret.md#equals)

***

### exportEncrypted()

> **exportEncrypted**(`key`): `Promise`\<[`SerialBuffer`](SerialBuffer.md)\>

Defined in: @nimiq/core/lib/index.d.ts:192

Encrypts the Secret with a password.

#### Parameters

##### key

`Uint8Array`

#### Returns

`Promise`\<[`SerialBuffer`](SerialBuffer.md)\>

#### Inherited from

[`Secret`](Secret.md).[`exportEncrypted`](Secret.md#exportencrypted)

***

### overwrite()

> **overwrite**(`entropy`): `void`

Defined in: @nimiq/core/lib/index.d.ts:245

Overwrites this Entropy's bytes with a replacement in-memory

#### Parameters

##### entropy

`Entropy`

#### Returns

`void`

***

### serialize()

> **serialize**(`buf?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:237

Serializes the Entropy to a byte array.

#### Parameters

##### buf?

[`SerialBuffer`](SerialBuffer.md)

#### Returns

[`SerialBuffer`](SerialBuffer.md)

#### Overrides

[`Secret`](Secret.md).[`serialize`](Secret.md#serialize)

***

### toBase64()

> **toBase64**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:106

Formats the object into a base64 string.

#### Returns

`string`

#### Inherited from

[`Secret`](Secret.md).[`toBase64`](Secret.md#tobase64)

***

### toExtendedPrivateKey()

> **toExtendedPrivateKey**(`password?`, `wordlist?`): [`ExtendedPrivateKey`](ExtendedPrivateKey.md)

Defined in: @nimiq/core/lib/index.d.ts:221

Derives an ExtendedPrivateKey from the Entropy.

#### Parameters

##### password?

`string`

##### wordlist?

`string`[]

#### Returns

[`ExtendedPrivateKey`](ExtendedPrivateKey.md)

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:110

Formats the object into a hex string.

#### Returns

`string`

#### Inherited from

[`Secret`](Secret.md).[`toHex`](Secret.md#tohex)

***

### toMnemonic()

> **toMnemonic**(`wordlist?`): `string`[]

Defined in: @nimiq/core/lib/index.d.ts:225

Converts the Entropy into a mnemonic.

#### Parameters

##### wordlist?

`string`[]

#### Returns

`string`[]

***

### toString()

> **toString**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:102

Formats the object into a hex string.

#### Returns

`string`

#### Inherited from

[`Secret`](Secret.md).[`toString`](Secret.md#tostring)

***

### deserialize()

> `static` **deserialize**(`buf`): `Entropy`

Defined in: @nimiq/core/lib/index.d.ts:229

Deserializes an Entropy object from a byte array.

#### Parameters

##### buf

[`SerialBuffer`](SerialBuffer.md)

#### Returns

`Entropy`

***

### exportEncrypted()

> `static` **exportEncrypted**(`secret`, `key`): `Promise`\<[`SerialBuffer`](SerialBuffer.md)\>

Defined in: @nimiq/core/lib/index.d.ts:188

#### Parameters

##### secret

[`Secret`](Secret.md) | `PrivateKey`

##### key

`Uint8Array`

#### Returns

`Promise`\<[`SerialBuffer`](SerialBuffer.md)\>

#### Inherited from

[`Secret`](Secret.md).[`exportEncrypted`](Secret.md#exportencrypted-2)

***

### fromEncrypted()

> `static` **fromEncrypted**(`buf`, `key`): `Promise`\<`Entropy` \| `PrivateKey`\>

Defined in: @nimiq/core/lib/index.d.ts:187

Decrypts a Secret from an encrypted byte array and its password.

#### Parameters

##### buf

[`SerialBuffer`](SerialBuffer.md)

##### key

`Uint8Array`

#### Returns

`Promise`\<`Entropy` \| `PrivateKey`\>

#### Inherited from

[`Secret`](Secret.md).[`fromEncrypted`](Secret.md#fromencrypted)

***

### fromHex()

> `static` **fromHex**(`hex`): `Entropy`

Defined in: @nimiq/core/lib/index.d.ts:233

Deserializes an Entropy object from a hex string.

#### Parameters

##### hex

`string`

#### Returns

`Entropy`

***

### generate()

> `static` **generate**(): `Entropy`

Defined in: @nimiq/core/lib/index.d.ts:217

Generates a new Entropy object from secure randomness.

#### Returns

`Entropy`
