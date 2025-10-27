[@nimiq/core](../globals.md) / KeyPair

# Class: KeyPair

Defined in: @nimiq/core/types/wasm/web.d.ts:1349

A keypair represents a private key and its respective public key.
It is used for signing data, usually transactions.

## Constructors

### Constructor

> **new KeyPair**(`private_key`, `public_key`): `KeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1372

#### Parameters

##### private\_key

[`PrivateKey`](PrivateKey.md)

##### public\_key

[`PublicKey`](PublicKey.md)

#### Returns

`KeyPair`

## Properties

### privateKey

> `readonly` **privateKey**: [`PrivateKey`](PrivateKey.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1396

Gets the keypair's private key.

***

### publicKey

> `readonly` **publicKey**: [`PublicKey`](PublicKey.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1400

Gets the keypair's public key.

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1351

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1350

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1376

Serializes the keypair to a byte array.

#### Returns

`Uint8Array`

***

### sign()

> **sign**(`data`): [`Signature`](Signature.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1380

Signs arbitrary data, returns a signature object.

#### Parameters

##### data

`Uint8Array`

#### Returns

[`Signature`](Signature.md)

***

### signTransaction()

> **signTransaction**(`transaction`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1384

Signs a transaction and sets the signature proof on the transaction object.

#### Parameters

##### transaction

[`Transaction`](Transaction.md)

#### Returns

`void`

***

### toAddress()

> **toAddress**(): [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1388

Gets the keypair's address.

#### Returns

[`Address`](Address.md)

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1392

Formats the keypair into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`private_key`): `KeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1359

Derives a keypair from an existing private key.

#### Parameters

##### private\_key

[`PrivateKey`](PrivateKey.md)

#### Returns

`KeyPair`

***

### deserialize()

> `static` **deserialize**(`bytes`): `KeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1371

Deserializes a keypair from a byte array.

Throws when the byte array contains less than 64 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`KeyPair`

***

### fromHex()

> `static` **fromHex**(`hex`): `KeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1365

Parses a keypair from its hex representation.

Throws when the string is not valid hex format or when it represents less than 64 bytes.

#### Parameters

##### hex

`string`

#### Returns

`KeyPair`

***

### generate()

> `static` **generate**(): `KeyPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1355

Generates a new keypair from secure randomness.

#### Returns

`KeyPair`
