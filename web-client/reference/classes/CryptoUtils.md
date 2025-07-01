Defined in: @nimiq/core/types/wasm/web.d.ts:1132

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1134

#### Returns

`void`

***

### computeHmacSha512()

> `static` **computeHmacSha512**(`key`, `data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1144

Computes a 64-byte [HMAC]-SHA512 hash from the input key and data.

[HMAC]: https://en.wikipedia.org/wiki/HMAC

#### Parameters

##### key

`Uint8Array`

##### data

`Uint8Array`

#### Returns

`Uint8Array`

***

### computePBKDF2sha512()

> `static` **computePBKDF2sha512**(`password`, `salt`, `iterations`, `derived_key_length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1150

Computes a [PBKDF2]-over-SHA512 key from the password with the given parameters.

[PBKDF2]: https://en.wikipedia.org/wiki/PBKDF2

#### Parameters

##### password

`Uint8Array`

##### salt

`Uint8Array`

##### iterations

`number`

##### derived\_key\_length

`number`

#### Returns

`Uint8Array`

***

### getRandomValues()

> `static` **getRandomValues**(`length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1138

Generates a secure random byte array of the given length.

#### Parameters

##### length

`number`

#### Returns

`Uint8Array`

***

### otpKdf()

> `static` **otpKdf**(`message`, `key`, `salt`, `iterations`): `Promise`\<`Uint8Array`\>

Defined in: @nimiq/core/types/wasm/web.d.ts:1158

Encrypts a message with an [OTP] [KDF] and the given parameters.
The KDF uses Argon2d for hashing.

[OTP]: https://en.wikipedia.org/wiki/One-time_pad
[KDF]: https://en.wikipedia.org/wiki/Key_derivation_function

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

`Promise`\<`Uint8Array`\>
