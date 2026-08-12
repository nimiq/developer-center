[@nimiq/core](../globals.md) / CommitmentPair

# Class: CommitmentPair

Defined in: @nimiq/core/types/wasm/web.d.ts:1196

A structure holding both a random secret and its corresponding public commitment.
This is similar to a `KeyPair`.

## Constructors

### Constructor

> **new CommitmentPair**(`random_secret`, `commitment`): `CommitmentPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1227

#### Parameters

##### random\_secret

[`RandomSecret`](RandomSecret.md)

##### commitment

[`Commitment`](Commitment.md)

#### Returns

`CommitmentPair`

## Properties

### commitment

> `readonly` **commitment**: [`Commitment`](Commitment.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1236

***

### secret

> `readonly` **secret**: [`RandomSecret`](RandomSecret.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:1237

***

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1238

***

### SIZE

> `readonly` `static` **SIZE**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:1239

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1199

#### Returns

`string`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1198

#### Returns

`void`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:1213

Returns if this commitment pair is equal to the other commitment pair.

#### Parameters

##### other

`CommitmentPair`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1197

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:1231

Serializes the commitment pair to a byte array.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1235

Formats the commitment pair into a hex string.

#### Returns

`string`

***

### derive()

> `static` **derive**(`random_secret`): `CommitmentPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1203

Derives a commitment pair from an existing random secret.

#### Parameters

##### random\_secret

[`RandomSecret`](RandomSecret.md)

#### Returns

`CommitmentPair`

***

### deserialize()

> `static` **deserialize**(`bytes`): `CommitmentPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1209

Deserializes a commitment pair from a byte array.

Throws when the byte array contains less than 32 bytes.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`CommitmentPair`

***

### fromAny()

> `static` **fromAny**(`pair`): `CommitmentPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1219

Parses a commitment pair from a CommitmentPair instance, a hex string representation, or a byte array.

Throws when a CommitmentPair cannot be parsed from the argument.

#### Parameters

##### pair

`string` | `Uint8Array`\<`ArrayBufferLike`\> | `CommitmentPair`

#### Returns

`CommitmentPair`

***

### fromHex()

> `static` **fromHex**(`hex`): `CommitmentPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1225

Parses a commitment pair from its hex representation.

Throws when the string is not valid hex format or when it represents less than 32 bytes.

#### Parameters

##### hex

`string`

#### Returns

`CommitmentPair`

***

### generate()

> `static` **generate**(): `CommitmentPair`

Defined in: @nimiq/core/types/wasm/web.d.ts:1226

#### Returns

`CommitmentPair`
