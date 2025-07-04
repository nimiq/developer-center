[@nimiq/core](../globals.md) / ExtendedPrivateKey

# Class: ExtendedPrivateKey

Defined in: @nimiq/core/lib/index.d.ts:113

## Extends

- `Serializable`

## Constructors

### Constructor

> **new ExtendedPrivateKey**(`key`, `chainCode`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:120

Creates an ExtendedPrivateKey from a private key and chain code.

#### Parameters

##### key

`PrivateKey`

##### chainCode

`Uint8Array`

#### Returns

`ExtendedPrivateKey`

#### Overrides

`Serializable.constructor`

## Properties

### CHAIN\_CODE\_SIZE

> `static` **CHAIN\_CODE\_SIZE**: `number`

Defined in: @nimiq/core/lib/index.d.ts:114

## Accessors

### chainCode

#### Get Signature

> **get** **chainCode**(): `Uint8Array`

Defined in: @nimiq/core/lib/index.d.ts:168

Returns the chain code of this ExtendedPrivateKey.

##### Returns

`Uint8Array`

***

### privateKey

#### Get Signature

> **get** **privateKey**(): `PrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:164

Returns the private key of this ExtendedPrivateKey.

##### Returns

`PrivateKey`

***

### serializedSize

#### Get Signature

> **get** **serializedSize**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:156

Returns the serialized size of this ExtendedPrivateKey.

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

***

### derive()

> **derive**(`index`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:128

Derives a child ExtendedPrivateKey from the current key at the provided index.

#### Parameters

##### index

`number`

#### Returns

`ExtendedPrivateKey`

***

### derivePath()

> **derivePath**(`path`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:136

Derives a child ExtendedPrivateKey from the current key at the provided path.

#### Parameters

##### path

`string`

#### Returns

`ExtendedPrivateKey`

***

### equals()

> **equals**(`o`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:160

Checks for equality with another ExtendedPrivateKey.

#### Parameters

##### o

`unknown`

#### Returns

`boolean`

#### Overrides

`Serializable.equals`

***

### serialize()

> **serialize**(`buf?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:152

Serializes the ExtendedPrivateKey to a byte array.

#### Parameters

##### buf?

[`SerialBuffer`](SerialBuffer.md)

#### Returns

[`SerialBuffer`](SerialBuffer.md)

#### Overrides

`Serializable.serialize`

***

### toAddress()

> **toAddress**(): `Address`

Defined in: @nimiq/core/lib/index.d.ts:172

Returns the address related to this ExtendedPrivateKey.

#### Returns

`Address`

***

### toBase64()

> **toBase64**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:106

Formats the object into a base64 string.

#### Returns

`string`

#### Inherited from

`Serializable.toBase64`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:110

Formats the object into a hex string.

#### Returns

`string`

#### Inherited from

`Serializable.toHex`

***

### toString()

> **toString**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:102

Formats the object into a hex string.

#### Returns

`string`

#### Inherited from

`Serializable.toString`

***

### derivePathFromSeed()

> `static` **derivePathFromSeed**(`path`, `seed`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:140

Derives an ExtendedPrivateKey from a seed and a derivation path.

#### Parameters

##### path

`string`

##### seed

`Uint8Array`

#### Returns

`ExtendedPrivateKey`

***

### deserialize()

> `static` **deserialize**(`buf`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:144

Deserializes an ExtendedPrivateKey from a byte array.

#### Parameters

##### buf

[`SerialBuffer`](SerialBuffer.md)

#### Returns

`ExtendedPrivateKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:148

Deserializes an ExtendedPrivateKey from a hex string.

#### Parameters

##### hex

`string`

#### Returns

`ExtendedPrivateKey`

***

### generateMasterKey()

> `static` **generateMasterKey**(`seed`): `ExtendedPrivateKey`

Defined in: @nimiq/core/lib/index.d.ts:124

Generates the master ExtendedPrivateKey from a seed.

#### Parameters

##### seed

`Uint8Array`

#### Returns

`ExtendedPrivateKey`

***

### isValidPath()

> `static` **isValidPath**(`path`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:132

Tests if a HD derivation path is valid.

#### Parameters

##### path

`string`

#### Returns

`boolean`
