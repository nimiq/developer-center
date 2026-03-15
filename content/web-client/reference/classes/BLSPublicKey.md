[@nimiq/core](../globals.md) / BLSPublicKey

# Class: BLSPublicKey

Defined in: @nimiq/core/types/wasm/web.d.ts:714

The public part of the BLS keypair.
This is specified in the staking contract to verify votes from Validators.

## Constructors

### Constructor

> **new BLSPublicKey**(`bytes`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:728

Creates a new public key from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSPublicKey`

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:716

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:715

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:732

Serializes the public key to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:740

Formats the public key into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`secret_key`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:720

Derives a public key from an existing private key.

#### Parameters

##### secret\_key

[`BLSSecretKey`](BLSSecretKey.md)

#### Returns

`BLSPublicKey`

***

### deserialize()

> `static` **deserialize**(`bytes`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:724

Deserializes a public key from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSPublicKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `BLSPublicKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:736

Parses a public key from its hex representation.

#### Parameters

##### hex

`string`

#### Returns

`BLSPublicKey`
