# Mempool

## What is a mempool?

A mempool is a waiting list that keeps [transactions](transactions.md) on hold until validators add them to the blockchain. Transactions, once filtered, are gathered in the mempool before being selected by validators for inclusion in the next block.

Transactions are broadcasted among the network, and each validator maintains its own mempool. Upon a validator adding a transaction to the blockchain, other validators must remove that transaction from their respective mempools.

Every block has a predetermined storage capacity for transactions. Validators are motivated to maximize the number of transactions in a block, as they seek to receive transaction fees. However, validators also have the option to produce empty blocks or blocks with fewer transactions than the storage allows. Our protocol imposes no restriction on the quantity of transactions a block can contain, only that it has a ceiling.

Users are encouraged to offer higher fees to accelerate the addition of their transactions to the blockchain. The result of a transaction being added to the mempool is to be then added to the block. The mempool serves the dual purpose of filtering transactions and enabling validators to disregard invalid ones.

The blockchain mempool is divided into two groups that hold different types of transactions:

- Transactions from the [staking contract](validators/staking-contract.md) are added to a **control mempool**
- Transactions from basic, HTLC, and vesting [accounts](accounts.md) are added to a **regular mempool**

Control transactions have priority over regular transactions, so they are first added to the block, followed by regular transactions.

## How does a transaction is added to the mempool?

A verification process filters transactions before they are added to the mempool. This verification is made orderly, and validators follow the following order:

- **Signature:** This serves as proof of the sender’s identity. If the signature is not valid, the transaction is disregarded.
- **Validity Window:** A specific range of blocks during which a transaction remains valid. After this validity window, the transaction becomes invalid, and validators can disregard it. The starting block height of this window is determined by the specified range.
- **Known Transaction:**
    - In the event of a validator being offline for a period, there's a possibility that upon return, they may attempt to add a transaction to a block that has already been added. To address this, when the validator comes back online, they must download the history sync to receive all transactions from the moment they went offline to the present. Only then can they verify if the transaction they want to include in the block hasn’t already been added.
    - Another scenario involves a transaction *x* being made, received by all validators, and one validator includes it in a block. The transaction *x* is now considered a known transaction, necessitating the other validators to remove it from their individual mempools.
- **Balance:** After verifying all necessary steps, the validator checks the user’s balance and all pending transactions for that user in the mempool. The mempool must ensure that the sender has adequate funds to cover at least the transaction fees.

###

Note that if the first step returns an invalid signature, the transaction is immediately discarded, and verifying the following steps unnecessary as the first was already invalid. This means that if, for example, the signature is not valid, the rest of the steps do not need to be verified, and the transaction is immediately discarded.

After the two mempools are fed with transactions respecting the verification process, they are kept on hold and will be added to a block by the elected block producer in the following way:

- Control transactions have priority over regular transactions.
- Transactions with higher fees have priority against transactions with lower fees (mind that this is not the rule. While high fees encourage validators to add the transaction to the block, nothing in the protocol prevents the validator from adding a transaction with low fees)
- New transactions have priority over older ones.

![mempool](/assets/images/protocol/mempool.png)

<Callout type='info'>

Note that once the transactions are added to the micro block, they aren’t ordered. The order is made in the mempool.

</Callout>

After a transaction is added, the user’s balance is updated, and the validators must update their mempool accordingly. Mind that each validator owns a mempool and broadcasts and verifies transactions constantly. Adding and deleting transactions from each mempool is a continuous process. Also, two validators may attempt to add the same transaction to different blocks. In this case, the first transaction to be added is the valid one, and the other validator must discard the respective transaction in his mempool.

## How do transactions become invalid in the mempool?

Even after the verification process went through and after the transactions have been added to the mempool, transactions may not succeed in being included in a block, as they can become invalid when in the mempool. As transactions are included in the blockchain, validators first verify if:

1. There are **expired transactions**. Similar to the verification step of the validity window, when adding a transaction to the mempool, transactions can expire when on hold. In this case, validators must discard the respective transaction.
2. There is any **transaction already included** in a block. A validator might have included a transaction in a block that other validators haven’t detected, or a validator might disconnect from the network, and once reconnecting and downloading the history sync, other validators could already have included that transactions; in this case, as soon known a validator notices the respective transaction, he must discard the one already added.
3. A **fork occurred** somewhere in the chain. Suppose a malicious validator forks the chain, and the following block producer elected is also malicious and produces on top of the fork. Eventually, a rational validator will be selected, and the blocks produced maliciously must be reverted. Based on this, as soon as a rational validator notices the fork, the blocks produced maliciously are longer valid.
There are two ways to fix this: (1) transactions are adopted by other validators, and they include them in a block in the longest chain;validators with the respective transaction in their mempool can discard it, and (2) transactions are reverted and must be re-added to the mempool as they were added in the block produced maliciously.
4. The user's **account balance** has changed between the time the transaction was added to the mempool and the time the transaction was about to be added to the block. Identical to verifying the user’s balance made before the transaction is added to the mempool, if the user's balance changes in this period, the transaction becomes invalid as the user's balance is insufficient. Validators must update the user's balance in their mempool.
