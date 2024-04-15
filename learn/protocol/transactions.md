# Transactions

Transactions serve as the means to interact with the blockchain. A transaction modifies the state of the blockchain in accordance with the established rules. These transactions are stored in the [micro block](block-format.md#micro-blocks) body. The Nimiq blockchain features four types of [accounts](accounts.md) tailored to serve distinct purposes and thus enable a node to send and receive transactions:

- Basic account
- HTLC contract
- Vesting contract
- [Staking contract](validators/staking-contract.md)

###

Once transactions are sent, they are temporarily held in the mempool, where they remain until a validator includes them in the blockchain. The transaction is included once the validator confirms and validates the transaction.

The blockchain includes 2 mempools catered to different purposes:

- **Regular mempool** includes Basic, HTLC, and Vesting transactions
- **Control mempool** includes transactions associated with the staking contract, which are prioritized over regular mempool transactions.

###

Transactions cannot have the same sender and recipient, except for staking-related transactions, where validators and stakers can send a transaction from the staking contract to the staking contract.

## Transaction data

| Data field | Description |
| --- | --- |
| `sender` | The sender's address. |
| `sender_type` | The type of account of the sender. |
| `sender_data` | The sender_data field serves a purpose based on the transaction's sender_type. It is currently only used for extra information in transactions from the staking contract. |
| `recipient` | The recipient’s address. |
| `recipient_type` | The type of account of the sender. |
| `recipient_data` | The recipient_data field serves a purpose based on the transaction's recipient_type. It is currently only used for extra information in transactions from the staking contract, but also HTLCs and vesting contracts. |
| `value` | Amount of NIM to transfer. This field can be zero for transactions without any value. In such cases, the data to transact is filled in the data field. |
| `fee` | Fees for the transaction. The sender pays fees of their choice. Fees are part of the rewards, ensuring validators are rewarded for their work. |
| `validity_start_height` | The expiration date for a specific transaction. Validators has a window of x blocks to upload the transaction. If included after that window, the transaction is disregarded. |
| `network_id` | Specifies the ID of the network. When the sender sends a transaction, they must include the particular network to which the transaction is sent. |
| `flags` | A flag signaling the type of transaction. There are two types of flags: contract creation and signaling. |
| `proof` | The information above is hashed and calculated with the sender’s private key, resulting in the proof of the transaction. This proof authenticates the sender of the transaction.|

A transaction must be valid. Once the transaction is validated, the boolean variable `valid` is set to `true`. This way, anyone can verify the transaction has been authenticated.

## Failing transactions

The validator's responsibility is to ensure that senders have enough balance (at least to pay the transaction fees) to send a transaction before the transaction enters the mempool. Once the validator establishes that the sender has sufficient funds to cover the transaction fees, the transaction is considered valid and is then added to the mempool.

Hence, when a validator includes a transaction to the micro block, it may succeed or fail, depending on the sender’s balance:

- **Succeed**: the sender has enough funds to cover both the transaction value and fees, and the user’s balance is updated.
- **Failed**: the sender has insufficient funds to pay out the transaction value but transaction fees can be deducted.

###

Let's consider a scenario where Alice, with 100 NIM in her balance, sends two transactions. In the first transaction (transaction 1), she intends to send 80 NIM to Bob. Following the succeed-fail principle mentioned above, transaction 1 succeeds. However, immediately after, Alice attempts to send 50 NIM to Charlie in transaction 2, which fails due to insufficient balance. Both transactions are recorded in the blockchain. Transaction 1 is logged as a successful transaction, whereas transaction 2 is marked as fail. Our protocol accommodates failed transactions, deducting the associated fees even in cases of failure.
