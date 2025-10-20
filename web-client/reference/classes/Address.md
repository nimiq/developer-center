[@nimiq/core](../globals.md) / Address

# Class: Address

Defined in: @nimiq/core/types/wasm/web.d.ts:613

An object representing a Nimiq address.
Offers methods to parse and format addresses from and to strings.

## Constructors

### Constructor

> **new Address**(`bytes`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:616

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Address`

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:615

#### Returns

`string`

***

### compare()

> **compare**(`other`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:669

Compares this address to the other address.

Returns -1 if this address is smaller than the other address, 0 if they are equal,
and 1 if this address is larger than the other address.

#### Parameters

##### other

`Address`

#### Returns

`number`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:662

Returns if this address is equal to the other address.

#### Parameters

##### other

`Address`

#### Returns

`boolean`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:614

#### Returns

`void`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:658

Returns the byte representation of the address.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:654

Formats the address into hex format.

#### Returns

`string`

***

### toPlain()

> **toPlain**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:646

Formats the address into a plain string format.

#### Returns

`string`

***

### toUserFriendlyAddress()

> **toUserFriendlyAddress**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:650

Formats the address into user-friendly IBAN format.

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:620

Deserializes an address from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Address`

***

### fromAny()

> `static` **fromAny**(`addr`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:626

Parses an address from an Address instance, a hex string representation, or a byte array.

Throws when an address cannot be parsed from the argument.

#### Parameters

##### addr

`string` | `Address` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`Address`

***

### fromPublicKeys()

> `static` **fromPublicKeys**(`public_keys`, `num_signers`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:642

Computes the multisig address of a list of signer public keys.

#### Parameters

##### public\_keys

(`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| [`PublicKey`](PublicKey.md))[]

##### num\_signers

`number`

#### Returns

`Address`

***

### fromString()

> `static` **fromString**(`str`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:632

Parses an address from a string representation, either user-friendly or hex format.

Throws when an address cannot be parsed from the string.

#### Parameters

##### str

`string`

#### Returns

`Address`

***

### fromUserFriendlyAddress()

> `static` **fromUserFriendlyAddress**(`str`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:638

Parses an address from its user-friendly string representation.

Throws when an address cannot be parsed from the string.

#### Parameters

##### str

`string`

#### Returns

`Address`
