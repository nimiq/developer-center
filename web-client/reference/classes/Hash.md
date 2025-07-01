Defined in: @nimiq/core/types/wasm/web.d.ts:1271

## Methods

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1273

#### Returns

`void`

***

### computeBlake2b()

> `static` **computeBlake2b**(`data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1281

Computes a 32-byte [Blake2b] hash from the input data.

Blake2b is used for example to compute a public key's address.

[Blake2b]: https://en.wikipedia.org/wiki/BLAKE_(hash_function)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

***

### computeNimiqArgon2d()

> `static` **computeNimiqArgon2d**(`password`, `salt`, `iterations`, `derived_key_length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1306

Computes an [Argon2d] hash with some Nimiq-specific parameters.

`iterations` specifies the number of iterations done in the hash
function. It can be used to control the hash computation time.
Increasing this will make it harder for an attacker to brute-force the
password.

`derived_key_length` specifies the number of bytes that are output.

[Argon2d]: https://en.wikipedia.org/wiki/Argon2

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

### computeNimiqArgon2id()

> `static` **computeNimiqArgon2id**(`password`, `salt`, `iterations`, `derived_key_length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1319

Computes an [Argon2id] hash with some Nimiq-specific parameters.

`iterations` specifies the number of iterations done in the hash
function. It can be used to control the hash computation time.
Increasing this will make it harder for an attacker to brute-force the
password.

`derived_key_length` specifies the number of bytes that are output.

[Argon2id]: https://en.wikipedia.org/wiki/Argon2

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

### computeSha256()

> `static` **computeSha256**(`data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1287

Computes a 32-byte [SHA256] hash from the input data.

[SHA256]: https://en.wikipedia.org/wiki/SHA-2

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

***

### computeSha512()

> `static` **computeSha512**(`data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1293

Computes a 64-byte [SHA512] hash from the input data.

[SHA512]: https://en.wikipedia.org/wiki/SHA-2

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
