[@nimiq/core](../globals.md) / BLSPublicKey

# Class: BLSPublicKey

Defined in: @nimiq/core/types/wasm/web.d.ts:716

The public part of the BLS keypair.
This is specified in the staking contract to verify votes from Validators.

## Constructors

### Constructor

> **new BLSPublicKey**(`bytes`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:729

Creates a new public key from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSPublicKey`

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:717

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:733

Serializes the public key to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:741

Formats the public key into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`secret_key`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:721

Derives a public key from an existing private key.

#### Parameters

##### secret\_key

[`BLSSecretKey`](BLSSecretKey.md)

#### Returns

`BLSPublicKey`

***

### deserialize()

> `static` **deserialize**(`bytes`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:725

Deserializes a public key from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSPublicKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:737

Parses a public key from its hex representation.

#### Parameters

##### hex

`string`

#### Returns

`BLSPublicKey`
