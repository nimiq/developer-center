# SignatureProof

> @nimiq/core / SignatureProof

[@nimiq/core](../globals) / SignatureProof

# Class: SignatureProof

Defined in: @nimiq/core/types/wasm/web.d.ts:1904

A signature proof represents a signature together with its public key and the public key's merkle path.
It is used as the proof for transactions.

## Properties

### publicKey

> `readonly` **publicKey**: [`PublicKey`](PublicKey) | [`ES256PublicKey`](ES256PublicKey)

Defined in: @nimiq/core/types/wasm/web.d.ts:1954

The embedded public key.

---

### signature

> `readonly` **signature**: [`ES256Signature`](ES256Signature) | [`Signature`](Signature)

Defined in: @nimiq/core/types/wasm/web.d.ts:1950

The embedded signature.

---

### ES256_SINGLE_SIG_SIZE

> `readonly` `static` **ES256_SINGLE_SIG_SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1946

---

### SINGLE_SIG_SIZE

> `readonly` `static` **SINGLE_SIG_SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1945

## Methods

### [dispose]()

> **[dispose]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1907

#### Returns

`void`

---

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1906

#### Returns

`void`

---

### isSignedBy()

> **isSignedBy**(`sender`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1932

Checks if the signature proof is signed by the provided address.

#### Parameters

##### sender

[`Address`](Address)

#### Returns

`boolean`

---

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1936

Serializes the proof to a byte array, e.g. for assigning it to a `transaction.proof` field.

#### Returns

`Uint8Array`

---

### toPlain()

> **toPlain**(): [`PlainTransactionProof`](../type-aliases/PlainTransactionProof)

Defined in: @nimiq/core/types/wasm/web.d.ts:1940

Creates a JSON-compatible plain object representing the signature proof.

#### Returns

[`PlainTransactionProof`](../type-aliases/PlainTransactionProof)

---

### verify()

> **verify**(`data`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1928

Verifies the signature proof against the provided data.

#### Parameters

##### data

`Uint8Array`

#### Returns

`boolean`

---

### deserialize()

> `static` **deserialize**(`bytes`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:1944

Deserializes a signature proof from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`SignatureProof`

---

### multiSig()

> `static` **multiSig**(`signer_key`, `public_keys`, `signature`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:1916

Creates a Ed25519/Schnorr signature proof for a multi-sig signature.
The public keys can also include ES256 keys.

#### Parameters

##### signer_key

[`PublicKey`](PublicKey)

##### public_keys

([`PublicKey`](PublicKey) | [`ES256PublicKey`](ES256PublicKey))<span>



</span>



##### signature

[`Signature`](Signature)

#### Returns

`SignatureProof`

---

### singleSig()

> `static` **singleSig**(`public_key`, `signature`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:1911

Creates a Ed25519/Schnorr signature proof for a single-sig signature.

#### Parameters

##### public_key

[`PublicKey`](PublicKey)

##### signature

[`Signature`](Signature)

#### Returns

`SignatureProof`

---

### webauthnMultiSig()

> `static` **webauthnMultiSig**(`signer_key`, `public_keys`, `signature`, `authenticator_data`, `client_data_json`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:1924

Creates a Webauthn signature proof for a multi-sig signature.

#### Parameters

##### signer_key

[`PublicKey`](PublicKey) | [`ES256PublicKey`](ES256PublicKey)

##### public_keys

([`PublicKey`](PublicKey) | [`ES256PublicKey`](ES256PublicKey))<span>



</span>



##### signature

[`ES256Signature`](ES256Signature) | [`Signature`](Signature)

##### authenticator_data

`Uint8Array`

##### client_data_json

`Uint8Array`

#### Returns

`SignatureProof`

---

### webauthnSingleSig()

> `static` **webauthnSingleSig**(`public_key`, `signature`, `authenticator_data`, `client_data_json`): `SignatureProof`

Defined in: @nimiq/core/types/wasm/web.d.ts:1920

Creates a Webauthn signature proof for a single-sig signature.

#### Parameters

##### public_key

[`PublicKey`](PublicKey) | [`ES256PublicKey`](ES256PublicKey)

##### signature

[`ES256Signature`](ES256Signature) | [`Signature`](Signature)

##### authenticator_data

`Uint8Array`

##### client_data_json

`Uint8Array`

#### Returns

`SignatureProof`
