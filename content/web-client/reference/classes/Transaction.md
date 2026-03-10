[@nimiq/core](../globals.md) / Transaction

# Class: Transaction

Defined in: @nimiq/core/types/wasm/web.d.ts:1981

Transactions describe a transfer of value, usually from the sender to the recipient.
However, transactions can also have no value, when they are used to _signal_ a change in the staking contract.

Transactions can be used to create contracts, such as vesting contracts and HTLCs.

Transactions require a valid signature proof over their serialized content.
Furthermore, transactions are only valid for 2 hours after their validity-start block height.

## Constructors

### Constructor

> **new Transaction**(`sender`, `sender_type`, `sender_data`, `recipient`, `recipient_type`, `recipient_data`, `value`, `fee`, `flags`, `validity_start_height`, `network_id`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2015

Creates a new unsigned transaction that transfers `value` amount of luna (NIM's smallest unit)
from the sender to the recipient, where both sender and recipient can be any account type,
and custom extra data can be added to the transaction.

### Basic transactions
If both the sender and recipient types are omitted or `0` and both data and flags are empty,
a smaller basic transaction is created.

### Extended transactions
If no flags are given, but sender type is not basic (`0`) or data is set, an extended
transaction is created.

### Contract creation transactions
To create a new vesting or HTLC contract, set `flags` to `0b1` and specify the contract
type as the `recipient_type`: `1` for vesting, `2` for HTLC. The `data` bytes must have
the correct format of contract creation data for the respective contract type.

### Signaling transactions
To interact with the staking contract, signaling transaction are often used to not
transfer any value, but to simply _signal_ a state change instead, such as changing one's
delegation from one validator to another. To create such a transaction, set `flags` to `
0b10` and populate the `data` bytes accordingly.

The returned transaction is not yet signed. You can sign it e.g. with `tx.sign(keyPair)`.

Throws when an account type is unknown, the numbers given for value and fee do not fit
within a u64 or the networkId is unknown. Also throws when no data or recipient type is
given for contract creation transactions, or no data is given for signaling transactions.

#### Parameters

##### sender

[`Address`](Address.md)

##### sender\_type

`number`

##### sender\_data

`Uint8Array`\<`ArrayBufferLike`\>

##### recipient

[`Address`](Address.md)

##### recipient\_type

`number`

##### recipient\_data

`Uint8Array`\<`ArrayBufferLike`\>

##### value

`bigint`

##### fee

`bigint`

##### flags

`number`

##### validity\_start\_height

`number`

##### network\_id

`number`

#### Returns

`Transaction`

## Properties

### data

> **data**: `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2128

The transaction's data as a byte array.

***

### fee

> `readonly` **fee**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:2108

The transaction's fee in luna (NIM's smallest unit).

***

### feePerByte

> `readonly` **feePerByte**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2112

The transaction's fee per byte in luna (NIM's smallest unit).

***

### flags

> `readonly` **flags**: [`TransactionFlag`](../enumerations/TransactionFlag.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2124

The transaction's flags: `0b1` = contract creation, `0b10` = signaling.

***

### format

> `readonly` **format**: [`TransactionFormat`](../enumerations/TransactionFormat.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2084

The transaction's [TransactionFormat](../enumerations/TransactionFormat.md).

***

### networkId

> `readonly` **networkId**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2120

The transaction's network ID.

***

### proof

> **proof**: `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2136

The transaction's signature proof as a byte array.

***

### recipient

> `readonly` **recipient**: [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2096

The transaction's recipient address.

***

### recipientType

> `readonly` **recipientType**: [`AccountType`](../enumerations/AccountType.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2100

The transaction's recipient [AccountType](../enumerations/AccountType.md).

***

### sender

> `readonly` **sender**: [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2088

The transaction's sender address.

***

### senderData

> `readonly` **senderData**: `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2132

The transaction's sender data as a byte array.

***

### senderType

> `readonly` **senderType**: [`AccountType`](../enumerations/AccountType.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2092

The transaction's sender [AccountType](../enumerations/AccountType.md).

***

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2140

The transaction's byte size.

***

### validityStartHeight

> `readonly` **validityStartHeight**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2116

The transaction's validity-start height. The transaction is valid for 2 hours after this block height.

***

### value

> `readonly` **value**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:2104

The transaction's value in luna (NIM's smallest unit).

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:1984

#### Returns

`string`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1983

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:1982

#### Returns

`void`

***

### getContractCreationAddress()

> **getContractCreationAddress**(): [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2047

Returns the address of the contract that is created with this transaction.

#### Returns

[`Address`](Address.md)

***

### hash()

> **hash**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:2030

Computes the transaction's hash, which is used as its unique identifier on the blockchain.

#### Returns

`string`

***

### isValidAt()

> **isValidAt**(`block_height`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:2043

Tests if the transaction is valid at the specified block height.

#### Parameters

##### block\_height

`number`

#### Returns

`boolean`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2055

Serializes the transaction to a byte array.

#### Returns

`Uint8Array`

***

### serializeContent()

> **serializeContent**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2051

Serializes the transaction's content to be used for creating its signature.

#### Returns

`Uint8Array`

***

### sign()

> **sign**(`key_pair`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2026

Signs the transaction with the provided key pair. Automatically determines the format
of the signature proof required for the transaction.

### Limitations
- HTLC redemption is not supported and will throw.
- For transaction to the staking contract, both signatures are made with the same keypair,
  so it is not possible to interact with a staker that is different from the sender address
  or using a different cold or signing key for validator transactions.

#### Parameters

##### key\_pair

[`KeyPair`](KeyPair.md)

#### Returns

`void`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:2059

Serializes the transaction into a HEX string.

#### Returns

`string`

***

### toPlain()

> **toPlain**(`genesis_block_number?`, `genesis_timestamp?`): [`PlainTransaction`](../interfaces/PlainTransaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2063

Creates a JSON-compatible plain object representing the transaction.

#### Parameters

##### genesis\_block\_number?

`number`

##### genesis\_timestamp?

`bigint`

#### Returns

[`PlainTransaction`](../interfaces/PlainTransaction.md)

***

### verify()

> **verify**(`network_id?`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2039

Verifies that a transaction has valid properties and a valid signature proof.
Optionally checks if the transaction is valid on the provided network.

**Throws with any transaction validity error.** Returns without exception if the transaction is valid.

Throws when the given networkId is unknown.

#### Parameters

##### network\_id?

`number`

#### Returns

`void`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2067

Deserializes a transaction from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Transaction`

***

### fromAny()

> `static` **fromAny**(`tx`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2074

Parses a transaction from a Transaction instance, a plain object, a hex string
representation, or a byte array.

Throws when a transaction cannot be parsed from the argument.

#### Parameters

##### tx

`string` | [`PlainTransaction`](../interfaces/PlainTransaction.md) | `Uint8Array`\<`ArrayBufferLike`\> | `Transaction`

#### Returns

`Transaction`

***

### fromPlain()

> `static` **fromPlain**(`plain`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2080

Parses a transaction from a plain object.

Throws when a transaction cannot be parsed from the argument.

#### Parameters

##### plain

[`PlainTransaction`](../interfaces/PlainTransaction.md)

#### Returns

`Transaction`
