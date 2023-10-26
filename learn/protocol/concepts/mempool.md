# Mempool

### What is a mempool?

A mempool is a waiting list that keeps transactions on hold until validators add them to the blockchain. Before transactions are added to a block, they are gathered in the mempool once filtered, where validators choose which ones to add to the next block.

<br/>

Transactions are broadcasted among the network, and each validator has its own mempool. When a validator adds a transaction to the blockchain, the rest of the validators must remove that transaction from their mempool.

<br/>

Each block has a fixed amount of storage for transactions. Validators are incentivized to include as many transactions as possible in the block, as they are interested in receiving the fees. But at the same time, validators can produce empty blocks or blocks with fewer transactions than the storage holds. Our protocol doesn’t restrict the amount of transactions a block can hold, only that it has a ceiling.

<br/>

Users are incentivized to pay higher fees in order to get their transactions added to the blockchain faster. The result of a transaction being added to the mempool is to be then added to the block. The mempool serves to filter transactions and for validators to disregard invalid ones.

<br/>

# Albatross mempool

Our mempool is divided into two groups that hold different types of transactions:

- Transactions from the staking contract are added to a **control mempool**
- Transactions from basic, HTLC, and vesting accounts are added to a **regular mempool**

<br/>

Control transactions have priority over regular transactions, so they are first added to the block, followed by regular transactions.

<br/>

### How does a transaction is added to the mempool?

A verification process filters transactions before they are added to the mempool. This verification is made orderly, and validators follow the following order:

1. **Signature:** this proves the sender’s identity. If the signature isn’t valid, the transaction is disregarded.
2. **Validity window:** there is a range of blocks on which a transaction remains valid. After the validity window, the transaction is no longer valid, and validators can disregard it. This range dictates which block height the validity window starts on.
3. **Known transaction:**
   - upon a validator being offline for a period, there is a chance a validator will attempt to add a transaction in a block that was already added. Once the validator gets back online, he must download the history sync in order to receive all the transactions from the moment he went offline to the present. Only then can he check if the transaction he wants to include in the block wasn’t added already.
   - another possible scenario is when a transaction _x_ is made, received by all validator, and one validator includes it in a block, the transaction _x_ is now considered as a known transaction, meaning that the rest of the validators need to remove it from their own mempool.
4. **Balance:** once all the steps are verified, the validator check’s the user’s balance and all the pending transactions for that user in the mempool. The mempool needs to guarantee the sender has enough funds to at least pay the transaction fees.

<br/>

Note that if the first step returns an invalid signature, the transaction is immediately discarded, and verifying the following steps unnecessary as the first was already invalid. This means that if, for example, the signature is not valid, the rest of the steps do not need to be verified, and the transaction is immediately discarded.

<br/>

After the two mempools are fed with transactions respecting the verification process, they are kept on hold and will be added to a block by the elected block producer in the following way:

- Control transactions have priority over regular transactions.
- Transactions with higher fees have priority against transactions with lower fees (mind that this is not the rule. While high fees encourage validators to add the transaction to the block, nothing in the protocol prevents the validator from adding a transaction with low fees)
- New transactions have priority over older ones.

<br/>

Follows an illustration of how validators choose transactions to add to the block:

<p align="center">
  <img src="/assets/images/protocol/mempool1.png" alt="Alt Text" width="500" height="250">
</p>

<br/>

> 💡 Note that once the transactions are added to the micro block, they aren’t ordered. The order is made in the mempool.

<br/>

After a transaction is added, the user’s balance is updated, and the validators must update their mempool accordingly. Mind that each validator owns a mempool and broadcasts and verifies transactions constantly. Adding and deleting transactions from each mempool is a continuous process. Also, two validators may attempt to add the same transaction to different blocks. In this case, the first transaction to be added is the valid one, and the other validator must discard the respective transaction in his mempool.

<br/>

### How do transactions become invalid in the mempool?

Even after the verification process went through and after the transactions have been added to the mempool, transactions may not succeed in being included in a block, as they can become invalid when in the mempool. As transactions are included in the blockchain, validators first verify if:

- There are **expired transactions**. Similar to the verification step of the validity window, when adding a transaction to the mempool, transactions can expire when on hold. In this case, validators must discard the respective transaction.
- There is any **transaction already included** in a block. A validator might have included a transaction in a block that other validators haven’t detected, or a validator might disconnect from the network, and once reconnecting and downloading the history sync, other validators could already have included that transactions; in this case, as soon known a validator notices the respective transaction, he must discard the one already added.
- A **fork occurred** somewhere in the chain. Suppose a malicious validator forks the chain, and the following block producer elected is also malicious and produces on top of the fork. Eventually, a rational validator will be selected, and the blocks produced maliciously must be reverted. Based on this, as soon as a rational validator notices the fork, the blocks produced maliciously are longer valid. There are two ways to fix this:
  1. Transactions are adopted by other validators, and they include them in a block in the longest chain; validators with the respective transaction in their mempool can discard it.
  2. Transactions are reverted and must be readded to the mempool as they were added in the block produced maliciously.
- The user's **account balance** has changed between the time the transaction was added to the mempool and the time the transaction was about to be added to the block. Identical to verifying the user’s balance made before the transaction is added to the mempool, if the user's balance changes in this period, the transaction becomes invalid as the user's balance is insufficient. Validators must update the user's balance in their mempool.

<br/>

Note that once the transactions are added to the micro block, they aren’t ordered. The order is made in the mempool.
