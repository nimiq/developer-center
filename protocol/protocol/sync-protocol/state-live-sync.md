# State Live Sync

The state live sync method applies to both light nodes and full nodes. The state sync is the second component these nodes use, following their synchronization with the macro chain. After completing this synchronization process, the nodes are up-to-date.

The state of the blockchain consists of all the accounts and corresponding balances. The accounts are stored in the accounts tree or state tree. Nodes fetch parts of the state tree present in every block to build their state tree and add it to their local storage.

A Merkle tree (more precisely, a [Merkle-Radix-Tree](https://en.wikipedia.org/wiki/Radix_tree)) is used to store the accounts, with the account tree root stored in each block header, and each account functioning as a leaf node within the Merkle tree.

The Merkle Radix Tree efficiently stores accounts and their corresponding balances in the bottom layer. Leaf nodes in the tree represent the hashes of the accounts, and these leaf node hashes are combined through hashing to create parent or inner nodes. Parent nodes in the tree can have either one child, known as an "only child" node, or multiple children. "Only child" nodes are merged with their parent nodes, optimizing space. Combining adjacent nodes and creating parent nodes is repeated iteratively until only one hash value remains, known as the state root. This state root, stored as a single hash value, serves as proof of integrity for all the data within the accounts tree. Merkle Radix Trees allows for efficient storage and verification of accounts and balances in the blockchain while optimizing space by resulting in a single hash value representing the entire tree.

Hash values are propagated up the tree from lower to higher levels until the state root is reached. The state root serves as the fingerprint of the entire tree, allowing for easy detection of unauthorized modifications and efficient data integrity verification stored in the block’s header. The following accounts tree illustrates how 6 accounts are stored in the state root:

![merkle-tree](/assets/images/protocol/merkle.png)

> [!NOTE]
> This figure is merely illustrative as the accounts tree hold multiple accounts.

## State sync

Syncing with the blockchain state involves asking the network peers for chunks of their state tree to build a partial tree. A chunk is a fixed amount of state items. Adding chunks to a partial tree while the blockchain progresses enables the entire node to agree with all the peers on the current state.

This synchronization component is exclusively used by full nodes, as light nodes are not required to know the entire state of the blockchain. Similarly, history nodes do not need to build a partial tree as they already own the complete history of the blockchain.

## Partial tree

The nodes request chunks instead of the whole state tree because of the time it would take to download the state tree. Blocks are added to the blockchain quickly, so the state tree would no longer be up-to-date by the time the node had finished downloading the whole state tree.

Nodes can request one chunk at a time. They use data they know to make a request, and for the subsequent request, they use the data received in the previous one until they are up-to-date and the full node’s tree matches the network state tree. At the end of the syncing process, the full node can verify if it is up-to-date by comparing its state root against the current block state root.

The request consists as follows:

| Data      | Data type  | Description                                |
| --------- | ---------- | ------------------------------------------ |
| `start_key` | `KeyNibbles` | The latest part of the tree the node knows |
| `limit`     | `u32`        | The maximum size of the chunk              |

For the first request, the `start_key` consists of the latest part of the tree the node knows. This can be the data from the last election block. The node uses the response data for subsequent requests to make the new request.

The response consists as follows:

| Data         | Data type   | Description                                       |
| ------------ | ----------- | ------------------------------------------------- |
| `block_number` | `u32`         | The current block number                          |
| `block_hash`   | `Blake2bHash` | The current block hash                            |
| `chunk`        | `TrieChunk`   | The chunk includes the `end_key`, items, and proof. |

As the node needs the response to use it to make the following request, nodes can only make one request at a time. The `end_key` becomes the `start_key` for the subsequent request.

When building the partial tree, the node needs to keep track of the chunks associated with each block to detect any mismatched chunks. This can happen due to malicious behavior from validators, and blocks may have to be reverted. If a block is reverted, the node updates the affected chunk in its tree before downloading and adding new chunks. This approach ensures that the node is building a valid tree.

A partial tree is built in the following sequence:

1. For the first request, Alice receives a chunk and applies it to her tree.
2. For the following requests, for every new block, Alice first verifies the chunk of her tree against the chunk from the new block and updates her chunks accordingly.
3. After updating the chunk in her partial tree, Alice can request new chunks for the current block and apply them to her partial tree.
4. Alice repeats this process until her tree is complete and she is up-to-date with the blockchain’s state.
