Defined in: @nimiq/core/types/wasm/web.d.ts:680

A BLS keypair
It is used by validators to vote during Tendermint rounds.
This is just a wrapper around our internal BLS structs

## Constructors

### Constructor

> **new BLSKeyPair**(`secret_key`, `public_key`): `BLSKeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:694

#### Parameters

##### secret\_key

[`BLSSecretKey`](BLSSecretKey.md)

##### public\_key

[`BLSPublicKey`](BLSPublicKey.md)

#### Returns

`BLSKeyPair`

## Properties

### publicKey

> `readonly` **publicKey**: [`BLSPublicKey`](BLSPublicKey.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:710

Gets the keypair's public key.

***

### secretKey

> `readonly` **secretKey**: [`BLSSecretKey`](BLSSecretKey.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:706

Gets the keypair's secret key.

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:681

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:698

Serializes to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:702

Formats the keypair into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`private_key`): `BLSKeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:689

Derives a keypair from an existing private key.

#### Parameters

##### private\_key

[`BLSSecretKey`](BLSSecretKey.md)

#### Returns

`BLSKeyPair`

***

### deserialize()

> `static` **deserialize**(`bytes`): `BLSKeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:693

Deserializes a keypair from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`BLSKeyPair`

***

### generate()

> `static` **generate**(): `BLSKeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:685

Generates a new keypair from secure randomness.

#### Returns

`BLSKeyPair`
