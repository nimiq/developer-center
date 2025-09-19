# Merkle Trees

In the context of blockchain, ensuring data security is paramount. Our blockchain uses a tree-like structure known as [Merkle Trees](https://en.wikipedia.org/wiki/Merkle_tree) to store accounts and transactions. This approach guarantees that every piece of data is encoded within these trees, ultimately resulting in a single value called the "root." This root value represents the entire dataset and acts as a commitment to the data being stored in the blocks.

We use two types of trees in our blockchain system:
- **Merkle Radix Tree**: stores accounts and balances
- **Merkle Mountain Range**: stores transactions

## Merkle Radix Tree
The Merkle Radix Tree is a data structure used in our blockchain system to store and manage accounts and balances efficiently. This tree organizes accounts and their corresponding balances within its leaf nodes, where each leaf node holds the hash of a single account.

Merkle Radix Trees are significantly different from standard Merkle Trees. Leaf nodes with similar prefixes are paired up, while leaf nodes with unique prefixes are called “only child” nodes. Parent nodes in the tree can have multiple children or just one child. When a parent node has only one child, it merges with that child node, optimizing space within the tree. Likewise, as parent nodes can have an only child node, parent nodes can also have up to 16 children. Below is a simplified illustration of a Merkle Radix Tree.

![Diagram of a Merkle Radix Tree showing merged branches](/assets/images/protocol/merkle.png)

When constructing the tree, nodes with similar prefixes are paired to form parent nodes, optimizing space by reducing the number of intermediate nodes. If a node does not have a sibling with a similar prefix, it becomes an "only child" node and is merged with its parent node, further optimizing space within the tree.

The process of merging adjacent nodes and creating parent nodes continues iteratively until a single hash value remains at the topmost layer of the tree. This hash value, known as the state root, represents the entire tree's integrity and serves as proof of the accounts' validity when stored in every block header.

## Merkle Mountain Range
A Merkle Mountain Range (MMR) is another type of Merkle Tree used in our blockchain, specifically for storing transactions. MMRs are optimized to handle large datasets by organizing transactions into a hierarchical set of trees, collectively forming what is referred to as a "mountain range.” In Nimiq, the root hash of the MMR, known as the "history root," is stored in every block header and is the cryptographic proof of the transaction history up to that point, providing an immutable record of transactions.

Transactions are hashed and stored as leaf nodes. As transactions are appended to the MMR, their hashes are combined and hashed together with adjacent leaf nodes to form intermediate hashes. These intermediate hashes are then recursively combined and hashed with other intermediate hashes and adjacent leaf nodes until reaching the topmost level of the tree structure.

MMRs are designed to efficiently append new transactions without restructuring the entire tree. When a new transaction occurs, its hash is appended to the MMR as a new leaf node, always added to the tree's rightmost part. As MMRs include a set of trees within, each tree hash root is called a “peak”. To calculate the final root of the tree, the peaks are hashed from the right, combining their hash values to construct the root hash. These peaks, representing the root hash values of individual trees within the MMR, also serve as reference points for subsets of transaction data. Note that due to the nature of the MMR, it is possible to have a sub-tree consisting of just one node. Below is a simplified illustration of an MMR with 3 sub-trees.

![Diagram of a Merkle Mountain Range with three peaks](/assets/images/protocol/mmr.png)

Unlike Merkle Radix Trees where accounts and balances undergo constant updates, MMRs do not require direct data updates. In case a block is reverted, transactions are deleted from the transaction history, and new transactions are appended as new blocks come in.

### Peaks-only Merkle Mountain Ranges

The "peaks-only MMR" is a special MMR variant in our blockchain that is exclusive to full nodes. Only the peaks of the MMR are stored, while all other intermediate nodes and leaf nodes are removed. This approach allows full nodes to store only the necessary data to prove the history root, significantly reducing storage requirements. They do not need to store the entire transaction history represented by the MMR, which is computationally heavy.

This special MMR serves as a lightweight and efficient solution for verifying the integrity of transaction data. By storing only the peak nodes, full nodes can significantly reduce the amount of data they need to retain while still being able to prove the correctness of transaction computations. Full nodes can compare the computed history root against the current block history root to verify the blockchain's integrity.
