# Hash

> @nimiq/core / Hash

[@nimiq/core](../globals) / Hash

# Class: Hash

Defined in: @nimiq/core/types/wasm/web.d.ts:1278

## Methods

### [dispose]()

> **[dispose]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1281

#### Returns

`void`

---

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1280

#### Returns

`void`

---

### computeBlake2b()

> `static` **computeBlake2b**(`data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1289

Computes a 32-byte <span>

Blake2b

</span>

 hash from the input data.

Blake2b is used for example to compute a public key's address.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

---

### computeNimiqArgon2d()

> `static` **computeNimiqArgon2d**(`password`, `salt`, `iterations`, `derived_key_length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1314

Computes an <span>

Argon2d

</span>

 hash with some Nimiq-specific parameters.

`iterations` specifies the number of iterations done in the hash
function. It can be used to control the hash computation time.
Increasing this will make it harder for an attacker to brute-force the
password.

`derived_key_length` specifies the number of bytes that are output.

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

### computeNimiqArgon2id()

> `static` **computeNimiqArgon2id**(`password`, `salt`, `iterations`, `derived_key_length`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1327

Computes an <span>

Argon2id

</span>

 hash with some Nimiq-specific parameters.

`iterations` specifies the number of iterations done in the hash
function. It can be used to control the hash computation time.
Increasing this will make it harder for an attacker to brute-force the
password.

`derived_key_length` specifies the number of bytes that are output.

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

### computeSha256()

> `static` **computeSha256**(`data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1295

Computes a 32-byte <span>

SHA256

</span>

 hash from the input data.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

---

### computeSha512()

> `static` **computeSha512**(`data`): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1301

Computes a 64-byte <span>

SHA512

</span>

 hash from the input data.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
