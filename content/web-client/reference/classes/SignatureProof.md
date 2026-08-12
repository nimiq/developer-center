[@nimiq/core](../globals.md) / SignatureProof

# Class: SignatureProof

Defined in: @nimiq/core/types/wasm/web.d.ts:2109

A signature proof represents a signature together with its public key and the public key's merkle path.
It is used as the proof for transactions.

## Properties

### merklePath

> `readonly` **merklePath**: [`MerklePath`](MerklePath.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2154

The embedded merkle path.

***

### publicKey

> `readonly` **publicKey**: [`PublicKey`](PublicKey.md) \| [`ES256PublicKey`](ES256PublicKey.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2158

The embedded public key.

***

### signature

> `readonly` **signature**: [`ES256Signature`](ES256Signature.md) \| [`Signature`](Signature.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2162

The embedded signature.

***

### ES256\_SINGLE\_SIG\_SIZE

> `readonly` `static` **ES256\_SINGLE\_SIG\_SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2150

***

### SINGLE\_SIG\_SIZE

> `readonly` `static` **SINGLE\_SIG\_SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2163

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2112

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2111

#### Returns

`void`

***

### isSignedBy()

> **isSignedBy**(`sender`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:2120

Checks if the signature proof is signed by the provided address.

#### Parameters

##### sender

[`Address`](Address.md)

#### Returns

`boolean`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2129

Serializes the proof to a byte array, e.g. for assigning it to a `transaction.proof` field.

#### Returns

`Uint8Array`

***

### toPlain()

> **toPlain**(): [`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2137

Creates a JSON-compatible plain object representing the signature proof.

#### Returns

[`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

***

### verify()

> **verify**(`data`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:2141

Verifies the signature proof against the provided data.

#### Parameters

##### data

`Uint8Array`

#### Returns

`boolean`

***

### deserialize()

> `static` **deserialize**(`bytes`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:2116

Deserializes a signature proof from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`SignatureProof`

***

### multiSig()

> `static` **multiSig**(`signer_key`, `public_keys`, `signature`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:2125

Creates a Ed25519/Schnorr signature proof for a multi-sig signature.
The public keys can also include ES256 keys.

#### Parameters

##### signer\_key

[`PublicKey`](PublicKey.md)

##### public\_keys

([`PublicKey`](PublicKey.md) \| [`ES256PublicKey`](ES256PublicKey.md))[]

##### signature

[`Signature`](Signature.md)

#### Returns

`SignatureProof`

***

### singleSig()

> `static` **singleSig**(`public_key`, `signature`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:2133

Creates a Ed25519/Schnorr signature proof for a single-sig signature.

#### Parameters

##### public\_key

[`PublicKey`](PublicKey.md)

##### signature

[`Signature`](Signature.md)

#### Returns

`SignatureProof`

***

### webauthnMultiSig()

> `static` **webauthnMultiSig**(`signer_key`, `public_keys`, `signature`, `authenticator_data`, `client_data_json`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:2145

Creates a Webauthn signature proof for a multi-sig signature.

#### Parameters

##### signer\_key

[`PublicKey`](PublicKey.md) | [`ES256PublicKey`](ES256PublicKey.md)

##### public\_keys

([`PublicKey`](PublicKey.md) \| [`ES256PublicKey`](ES256PublicKey.md))[]

##### signature

[`ES256Signature`](ES256Signature.md) | [`Signature`](Signature.md)

##### authenticator\_data

`Uint8Array`

##### client\_data\_json

`Uint8Array`

#### Returns

`SignatureProof`

***

### webauthnSingleSig()

> `static` **webauthnSingleSig**(`public_key`, `signature`, `authenticator_data`, `client_data_json`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:2149

Creates a Webauthn signature proof for a single-sig signature.

#### Parameters

##### public\_key

[`PublicKey`](PublicKey.md) | [`ES256PublicKey`](ES256PublicKey.md)

##### signature

[`ES256Signature`](ES256Signature.md) | [`Signature`](Signature.md)

##### authenticator\_data

`Uint8Array`

##### client\_data\_json

`Uint8Array`

#### Returns

`SignatureProof`
