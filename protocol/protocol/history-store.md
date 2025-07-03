# History Store

The History Store is a component of the blockchain that is responsible for recording and maintaining all transactions that have occurred on the blockchain. This system ensures the integrity and traceability of transactions, serving as both a record-keeping and indexing tool. It allows easy retrieval of transactions, such as locating all transactions associated with a specific address

### Transaction Lifecycle

1. **Transaction submission:** A user creates a transaction and sends it to the network. The transaction is then placed into the validator’s [mempool](/protocol/protocol/mempool.md). The mempool temporarily holds pending transactions before they are included in a block.
2. **Transaction validation:** Validators check the validity store to ensure the transaction has not already been included in a block within the validity window. This prevents duplicate transactions.
3. **Block inclusion:** If the transaction is valid, a validator includes it in a new block. Once the block is validated, it is added to the blockchain, officially recording the transaction.
4. **Recording in the History Store:** After a block is added to the blockchain, its transactions are moved to the History Store, becoming historic transactions. These transactions are stored in [MMR](/protocol/protocol/merkle-trees.md#merkle-mountain-range) trees, allowing for efficient inclusion proofs.

### History Store

The History Store is responsible for keeping track of all transactions that have occurred on the blockchain. It ensures that these transactions are stored to allow for efficient proof and retrieval. The History Store includes:

1. **History trees (MMRs):** These trees store the hashes of transactions for each epoch in an MMR structure. They provide a way to prove that a transaction has been included in the blockchain.
2. **Historic transactions:** These are detailed records of transactions, indexed by their epoch number and leaf index. They include additional data, such as block numbers and timestamps, that enable efficient retrieval.
3. **Last leaf index table:** This table keeps track of the last leaf index for each block number, facilitating efficient updates to the MMR.
4. **Validity store:** This component tracks transactions within the validity window and prevents duplicates. Both full and history nodes use it to manage transactions' validity before they are recorded as historic transactions.
5. **Indexing system:** When combined with the indexing system (see below), the History Store enables fast retrieval of specific transactions, allowing nodes to easily query transactions by details such as transaction hash, sender, or recipient.

A historic transaction is a representation of a transaction that has already been included in a block. It contains additional information such as the block number, timestamp, and data about the transaction, providing a clear record of when and where each transaction occurred. This distinction is important for tracking and verifying the transaction history accurately.

The History Store is connected to each new block through the history tree root, which is updated with every new block. This root can be verified to ensure the integrity of the transaction history.

### Validity Store and Validity Window

The validity store is a subcomponent of the history store used by both full and history nodes to track transactions within the validity window. The validity window is a range of blocks within which a transaction must be included to be considered valid. This mechanism prevents duplicate transactions by ensuring that any given transaction can only be included once within the validity window.

### History Store Index

The History Store indexing system was created to enable fast and efficient retrieval of specific transactions from the History Store. While the History Store itself is responsible for recording and maintaining all transactions on the blockchain, the indexing component allows history nodes quick access to this data.

Unlike history nodes, full nodes store only one epoch of blockchain data at a time by default, so they do not require the complex indexing functionality that history nodes use. The indexing system maps transaction hashes to their corresponding locations in the History Store, linking them to specific epoch numbers and leaf indices within the MMR trees. This structure allows for the swift identification and retrieval of transactions, even within large datasets.

History nodes use this indexing system mainly to serve clients seeking their transaction history, providing efficient retrieval and accurate proof of inclusion. Thanks to the transaction history and indexes maintained by these nodes, the system also supports detailed queries, such as retrieving transactions by sender or recipient address.

### Syncing and Building the History

When a node syncs with the network using the [History Macro Sync](/protocol/protocol/sync-protocol/history-macro-sync.md) protocol, it downloads the history for each epoch, which is essential for reconstructing the transaction history up to the blockchain's current state. As the node processes and verifies each macro block, it builds its local History Store by storing historic transactions, organizing them into MMR trees, and updating relevant records.

After syncing, the node compares the root of its constructed history tree with the root provided by the current block in the blockchain. If the roots match, it confirms that the node's History Store is accurate and fully synchronized with the network.
