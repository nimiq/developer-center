[@nimiq/core](../globals.md) / Transaction

# Class: Transaction

Defined in: @nimiq/core/types/wasm/web.d.ts:2262

Transactions describe a transfer of value, usually from the sender to the recipient.
However, transactions can also have no value, when they are used to _signal_ a change in the staking contract.

Transactions can be used to create contracts, such as vesting contracts and HTLCs.

Transactions require a valid signature proof over their serialized content.
Furthermore, transactions are only valid for 2 hours after their validity-start block height.

## Constructors

### Constructor

> **new Transaction**(`sender`, `sender_type`, `sender_data`, `recipient`, `recipient_type`, `recipient_data`, `value`, `fee`, `flags`, `validity_start_height`, `network_id`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2325

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

Defined in: @nimiq/core/types/wasm/web.d.ts:2369

The transaction's data as a byte array.

***

### fee

> `readonly` **fee**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:2373

The transaction's fee in luna (NIM's smallest unit).

***

### feePerByte

> `readonly` **feePerByte**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2377

The transaction's fee per byte in luna (NIM's smallest unit).

***

### flags

> `readonly` **flags**: [`TransactionFlag`](../enumerations/TransactionFlag.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2383

The transaction's flags: `0b1` = contract creation, `0b10` = signaling.
Bit patterns outside the known variants collapse to `None`.
Inspect `toPlain().flags` for the raw value.

***

### format

> `readonly` **format**: [`TransactionFormat`](../enumerations/TransactionFormat.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2387

The transaction's [TransactionFormat](../enumerations/TransactionFormat.md).

***

### networkId

> `readonly` **networkId**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2391

The transaction's network ID.

***

### proof

> **proof**: `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2395

The transaction's signature proof as a byte array.

***

### recipient

> `readonly` **recipient**: [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2399

The transaction's recipient address.

***

### recipientType

> `readonly` **recipientType**: [`AccountType`](../enumerations/AccountType.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2403

The transaction's recipient [AccountType](../enumerations/AccountType.md).

***

### sender

> `readonly` **sender**: [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2407

The transaction's sender address.

***

### senderData

> `readonly` **senderData**: `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2411

The transaction's sender data as a byte array.

***

### senderType

> `readonly` **senderType**: [`AccountType`](../enumerations/AccountType.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2415

The transaction's sender [AccountType](../enumerations/AccountType.md).

***

### serializedSize

> `readonly` **serializedSize**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2419

The transaction's byte size.

***

### validityStartHeight

> `readonly` **validityStartHeight**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:2423

The transaction's validity-start height. The transaction is valid for 2 hours after this block height.

***

### value

> `readonly` **value**: `bigint`

Defined in: @nimiq/core/types/wasm/web.d.ts:2427

The transaction's value in luna (NIM's smallest unit).

## Methods

### \_\_getClassname()

> **\_\_getClassname**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:2265

#### Returns

`string`

***

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2264

#### Returns

`void`

***

### free()

> **free**(): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2263

#### Returns

`void`

***

### getContractCreationAddress()

> **getContractCreationAddress**(): [`Address`](Address.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2286

Returns the address of the contract that is created with this transaction.

#### Returns

[`Address`](Address.md)

***

### hash()

> **hash**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:2290

Computes the transaction's hash, which is used as its unique identifier on the blockchain.

#### Returns

`string`

***

### isValidAt()

> **isValidAt**(`block_height`): `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:2294

Tests if the transaction is valid at the specified block height.

#### Parameters

##### block\_height

`number`

#### Returns

`boolean`

***

### serialize()

> **serialize**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2329

Serializes the transaction to a byte array.

#### Returns

`Uint8Array`

***

### serializeContent()

> **serializeContent**(): `Uint8Array`

Defined in: @nimiq/core/types/wasm/web.d.ts:2333

Serializes the transaction's content to be used for creating its signature.

#### Returns

`Uint8Array`

***

### sign()

> **sign**(`key_pair`, `inner_key_pair`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2346

Signs the transaction with the provided key pair. Automatically determines the format
of the signature proof required for the transaction.

For transactions to the staking contract (in-staking transactions), you can optionally provide
an inner key pair that represents the staker or validator. This way the staker/validator and sender
of a transaction can be different key pairs (addresses). If no inner key pair is provided, the outer
key pair is used for both signatures.

### Limitations
- HTLC redemption is not supported and will throw.

#### Parameters

##### key\_pair

[`KeyPair`](KeyPair.md)

##### inner\_key\_pair

[`KeyPair`](KeyPair.md)

#### Returns

`void`

***

### toHex()

> **toHex**(): `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:2350

Serializes the transaction into a HEX string.

#### Returns

`string`

***

### toPlain()

> **toPlain**(`genesis_block_number?`, `genesis_timestamp?`): [`PlainTransaction`](../interfaces/PlainTransaction.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:2354

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

> **verify**(`protocol_version`, `network_id?`): `void`

Defined in: @nimiq/core/types/wasm/web.d.ts:2365

Verifies that a transaction has valid properties and a valid signature proof for the
provided `protocol_version`.
Optionally checks if the transaction is valid on the provided network.

**Throws with any transaction validity error.** Returns without exception if the transaction is valid.

A `protocol_version` of `0` is accepted for backwards-compatible pre-upgrade validation.
Throws when the given networkId is unknown.

#### Parameters

##### protocol\_version

`number`

##### network\_id?

`number`

#### Returns

`void`

***

### deserialize()

> `static` **deserialize**(`bytes`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2269

Deserializes a transaction from a byte array.

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`Transaction`

***

### fromAny()

> `static` **fromAny**(`tx`): `Transaction`

Defined in: @nimiq/core/types/wasm/web.d.ts:2276

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

Defined in: @nimiq/core/types/wasm/web.d.ts:2282

Parses a transaction from a plain object.

Throws when a transaction cannot be parsed from the argument.

#### Parameters

##### plain

[`PlainTransaction`](../interfaces/PlainTransaction.md)

#### Returns

`Transaction`
