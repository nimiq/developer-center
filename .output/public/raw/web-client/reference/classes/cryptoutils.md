# CryptoUtils

> @nimiq/core / CryptoUtils

[@nimiq/core](../globals) / CryptoUtils

# Class: CryptoUtils

Defined in: @nimiq/core/types/wasm/web.d.ts:1136

## Methods

### [dispose]()

> **[dispose]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1139

#### Returns

`void`

---

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1138

#### Returns

`void`

---

### computeHmacSha512()

> `static` **computeHmacSha512**(`key`, `data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1149

Computes a 64-byte <span>

HMAC

</span>

-SHA512 hash from the input key and data.

#### Parameters

##### key

`Uint8Array`

##### data

`Uint8Array`

#### Returns

`Uint8Array`

---

### computePBKDF2sha512()

> `static` **computePBKDF2sha512**(`password`, `salt`, `iterations`, `derived_key_length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1155

Computes a <span>

PBKDF2

</span>

-over-SHA512 key from the password with the given parameters.

#### Parameters

##### password

`Uint8Array`

##### salt

`Uint8Array`

##### iterations

`number`

##### derived_key_length

`number`

#### Returns

`Uint8Array`

---

### getRandomValues()

> `static` **getRandomValues**(`length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1143

Generates a secure random byte array of the given length.

#### Parameters

##### length

`number`

#### Returns

`Uint8Array`

---

### otpKdf()

> `static` **otpKdf**(`message`, `key`, `salt`, `iterations`): `Promise`<`Uint8Array`<`ArrayBufferLike`>>

Defined in: @nimiq/core/types/wasm/web.d.ts:1163

Encrypts a message with an <span>

OTP

</span>

 <span>

KDF

</span>

 and the given parameters.
The KDF uses Argon2d for hashing.

#### Parameters

##### message

`Uint8Array`

##### key

`Uint8Array`

##### salt

`Uint8Array`

##### iterations

`number`

#### Returns

`Promise`<`Uint8Array`<`ArrayBufferLike`>>
