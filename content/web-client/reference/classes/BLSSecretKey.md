[@nimiq/core](../globals.md) / BLSSecretKey

# Class: BLSSecretKey

Defined in: @nimiq/core/types/wasm/web.d.ts:807

The secret part of the BLS keypair.
This is specified in the config file, and is used by Validators to vote.

## Constructors

### Constructor

> **new BLSSecretKey**(`bytes`): `BLSSecretKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:825

Creates a new private key from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSSecretKey`

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:809

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:808

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:829

Serializes the private key to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:833

Formats the private key into a hex string.

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`bytes`): `BLSSecretKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:813

Deserializes a private key from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSSecretKey`

***

### fromHex()

> `static` **fromHex**(`hex`): `BLSSecretKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:817

Parses a private key from its hex representation.

#### Parameters

##### hex

`string`

#### Returns

`BLSSecretKey`

***

### generate()

> `static` **generate**(): `BLSSecretKey`

Defined in: @nimiq/core/types/wasm/web.d.ts:821

Generates a new private key from secure randomness.

#### Returns

`BLSSecretKey`
