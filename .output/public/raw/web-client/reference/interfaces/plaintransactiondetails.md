# PlainTransactionDetails

> @nimiq/core / PlainTransactionDetails

[@nimiq/core](../globals) / PlainTransactionDetails

# Interface: PlainTransactionDetails

Defined in: @nimiq/core/types/wasm/web.d.ts:569

JSON-compatible and human-readable format of transactions, including details about its state in the
blockchain. Contains all fields from [PlainTransaction](PlainTransaction), plus additional fields such as
`blockHeight` and `timestamp` if the transaction is included in the blockchain.

## Extends

- [`PlainTransaction`](PlainTransaction)

## Properties

### blockHeight?

> `optional` **blockHeight**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:572

---

### confirmations?

> `optional` **confirmations**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:573

---

### data

> **data**: [`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData)

Defined in: @nimiq/core/types/wasm/web.d.ts:540

The `data` field of a transaction serves different purposes based on the transaction's recipient type.
For transactions to "basic" address types, this field can contain up to 64 bytes of unstructured data.
For transactions that create contracts or interact with the staking contract, the format of this field
must follow a fixed structure and defines the new contracts' properties or how the staking contract is
changed.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`data`](PlainTransaction#data)

---

### executionResult?

> `optional` **executionResult**: `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:571

---

### fee

> **fee**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:510

The transaction's fee in luna (NIM's smallest unit).

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`fee`](PlainTransaction#fee)

---

### feePerByte

> **feePerByte**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:514

The transaction's fee-per-byte in luna (NIM's smallest unit).

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`feePerByte`](PlainTransaction#feeperbyte)

---

### flags

> **flags**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:527

Any flags that this transaction carries. `0b1 = 1` means it's a contract-creation transaction, `0b10 = 2`
means it's a signalling transaction with 0 value.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`flags`](PlainTransaction#flags)

---

### format

> **format**: `"basic"` | `"extended"`

Defined in: @nimiq/core/types/wasm/web.d.ts:487

The transaction's format. Nimiq transactions can have one of two formats: "basic" and "extended".
Basic transactions are simple value transfers between two regular address types and cannot contain
any extra data. Basic transactions can be serialized to less bytes, so take up less place on the
blockchain. Extended transactions on the other hand are all other transactions: contract creations
and interactions, staking transactions, transactions with exta data, etc.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`format`](PlainTransaction#format)

---

### network

> **network**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:522

The network name on which this transaction is valid.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`network`](PlainTransaction#network)

---

### proof

> **proof**: [`PlainTransactionProof`](../type-aliases/PlainTransactionProof)

Defined in: @nimiq/core/types/wasm/web.d.ts:546

The `proof` field contains the signature of the eligible signer. The proof field's structure depends on
the transaction's sender type. For transactions from contracts it can also contain additional structured
data before the signature.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`proof`](PlainTransaction#proof)

---

### recipient

> **recipient**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:500

The transaction's recipient address in human-readable IBAN format.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`recipient`](PlainTransaction#recipient)

---

### recipientType

> **recipientType**: `"basic"` | `"vesting"` | `"htlc"` | `"staking"`

Defined in: @nimiq/core/types/wasm/web.d.ts:505

The account type of the transaction's recipient. "basic" are regular private-key controlled accounts,
"vesting" and "htlc" are contracts, and "staking" is the staking contract.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`recipientType`](PlainTransaction#recipienttype)

---

### sender

> **sender**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:491

The transaction's sender address in human-readable IBAN format.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`sender`](PlainTransaction#sender)

---

### senderData?

> `optional` **senderData**: [`PlainTransactionSenderData`](../type-aliases/PlainTransactionSenderData)

Defined in: @nimiq/core/types/wasm/web.d.ts:532

The `sender_data` field serves a purpose based on the transaction's sender type.
It is currently only used for extra information in transactions from the staking contract.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`senderData`](PlainTransaction#senderdata)

---

### senderType

> **senderType**: `"basic"` | `"vesting"` | `"htlc"` | `"staking"`

Defined in: @nimiq/core/types/wasm/web.d.ts:496

The account type of the transaction's sender. "basic" are regular private-key controlled accounts,
"vesting" and "htlc" are contracts, and "staking" is the staking contract.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`senderType`](PlainTransaction#sendertype)

---

### size

> **size**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:551

The transaction's serialized size in bytes. It is used to determine the fee-per-byte that this
transaction pays.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`size`](PlainTransaction#size)

---

### state

> **state**: [`TransactionState`](../type-aliases/TransactionState)

Defined in: @nimiq/core/types/wasm/web.d.ts:570

---

### timestamp?

> `optional` **timestamp**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:574

---

### transactionHash

> **transactionHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:479

The transaction's unique hash, used as its identifier. Sometimes also called `txId`.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`transactionHash`](PlainTransaction#transactionhash)

---

### valid

> **valid**: `boolean`

Defined in: @nimiq/core/types/wasm/web.d.ts:556

Encodes if the transaction is valid, meaning the signature is valid and the `data` and `proof` fields
follow the correct format for the transaction's recipient and sender type, respectively.

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`valid`](PlainTransaction#valid)

---

### validityStartHeight

> **validityStartHeight**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:518

The block height at which this transaction becomes valid. It is then valid for 7200 blocks (~2 hours).

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`validityStartHeight`](PlainTransaction#validitystartheight)

---

### value

> **value**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:506

#### Inherited from

[`PlainTransaction`](PlainTransaction).[`value`](PlainTransaction#value)
