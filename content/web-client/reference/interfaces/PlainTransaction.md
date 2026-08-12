[@nimiq/core](../globals.md) / PlainTransaction

# Interface: PlainTransaction

Defined in: @nimiq/core/types/wasm/web.d.ts:414

JSON-compatible and human-readable format of transactions. E.g. addresses are presented in their human-readable
format and address types and the network are represented as strings. Data and proof are serialized as an object
describing their contents (not yet implemented, only the `{ raw: string }` fallback is available).

## Extended by

- [`PlainTransactionDetails`](PlainTransactionDetails.md)

## Properties

### data

> **data**: [`PlainTransactionRecipientData`](../type-aliases/PlainTransactionRecipientData.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:479

The `data` field of a transaction serves different purposes based on the transaction\'s recipient type.
For transactions to \"basic\" address types, this field can contain up to 64 bytes of unstructured data.
For transactions that create contracts or interact with the staking contract, the format of this field
must follow a fixed structure and defines the new contracts\' properties or how the staking contract is
changed.

***

### fee

> **fee**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:449

The transaction\'s fee in luna (NIM\'s smallest unit).

***

### feePerByte

> **feePerByte**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:453

The transaction\'s fee-per-byte in luna (NIM\'s smallest unit).

***

### flags

> **flags**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:466

Any flags that this transaction carries. `0b1 = 1` means it\'s a contract-creation transaction, `0b10 = 2`
means it\'s a signalling transaction with 0 value.

***

### format

> **format**: `"basic"` \| `"extended"`

Defined in: @nimiq/core/types/wasm/web.d.ts:426

The transaction\'s format. Nimiq transactions can have one of two formats: \"basic\" and \"extended\".
Basic transactions are simple value transfers between two regular address types and cannot contain
any extra data. Basic transactions can be serialized to less bytes, so take up less place on the
blockchain. Extended transactions on the other hand are all other transactions: contract creations
and interactions, staking transactions, transactions with extra data, etc.

***

### network

> **network**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:461

The network name on which this transaction is valid.

***

### proof

> **proof**: [`PlainTransactionProof`](../type-aliases/PlainTransactionProof.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:485

The `proof` field contains the signature of the eligible signer. The proof field\'s structure depends on
the transaction\'s sender type. For transactions from contracts it can also contain additional structured
data before the signature.

***

### recipient

> **recipient**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:439

The transaction\'s recipient address in human-readable IBAN format.

***

### recipientType

> **recipientType**: `"vesting"` \| `"htlc"` \| `"basic"` \| `"staking"`

Defined in: @nimiq/core/types/wasm/web.d.ts:444

The account type of the transaction\'s recipient. \"basic\" are regular private-key controlled accounts,
\"vesting\" and \"htlc\" are contracts, and \"staking\" is the staking contract.

***

### sender

> **sender**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:430

The transaction\'s sender address in human-readable IBAN format.

***

### senderData?

> `optional` **senderData**: [`PlainTransactionSenderData`](../type-aliases/PlainTransactionSenderData.md)

Defined in: @nimiq/core/types/wasm/web.d.ts:471

The `sender_data` field serves a purpose based on the transaction\'s sender type.
It is currently only used for extra information in transactions from the staking contract.

***

### senderType

> **senderType**: `"vesting"` \| `"htlc"` \| `"basic"` \| `"staking"`

Defined in: @nimiq/core/types/wasm/web.d.ts:435

The account type of the transaction\'s sender. \"basic\" are regular private-key controlled accounts,
\"vesting\" and \"htlc\" are contracts, and \"staking\" is the staking contract.

***

### size

> **size**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:490

The transaction\'s serialized size in bytes. It is used to determine the fee-per-byte that this
transaction pays.

***

### transactionHash

> **transactionHash**: `string`

Defined in: @nimiq/core/types/wasm/web.d.ts:418

The transaction\'s unique hash, used as its identifier. Sometimes also called `txId`.

***

### validityStartHeight

> **validityStartHeight**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:457

The block height at which this transaction becomes valid. It is then valid for 7200 blocks (~2 hours).

***

### value

> **value**: `number`

Defined in: @nimiq/core/types/wasm/web.d.ts:445
