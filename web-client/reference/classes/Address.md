[@nimiq/core](../globals.md) / Address

# Class: Address

Defined in: @nimiq/core/types/wasm/web.d.ts:613

An object representing a Nimiq address.
Offers methods to parse and format addresses from and to strings.

## Constructors

### Constructor

> **new Address**(`bytes`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:617

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Address`

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:616

#### Returns

`string`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:615

#### Returns

`void`

***

### compare()

> **compare**(`other`): `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:670

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

Defined in: @nimiq/core/types/wasm/web.d.ts:663

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

Defined in: @nimiq/core/types/wasm/web.d.ts:659

Returns the byte representation of the address.

#### Returns

`Uint8Array`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:655

Formats the address into hex format.

#### Returns

`string`

***

### toPlain()

> **toPlain**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:647

Formats the address into a plain string format.

#### Returns

`string`

***

### toUserFriendlyAddress()

> **toUserFriendlyAddress**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:651

Formats the address into user-friendly IBAN format.

#### Returns

`string`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:621

Deserializes an address from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Address`

***

### fromAny()

> `static` **fromAny**(`addr`): `Address`

Defined in: @nimiq/core/types/wasm/web.d.ts:627

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

Defined in: @nimiq/core/types/wasm/web.d.ts:643

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

Defined in: @nimiq/core/types/wasm/web.d.ts:633

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

Defined in: @nimiq/core/types/wasm/web.d.ts:639

Parses an address from its user-friendly string representation.

Throws when an address cannot be parsed from the string.

#### Parameters

##### str

`string`

#### Returns

`Address`
