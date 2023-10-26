# State Live Sync

Full and history nodes must be in sync with the blockchain’s state. The state sync is the second component full nodes use, after the light macro sync, and is the component that allows the full nodes to sync with the blockchain’s state and maintain its integrity.

<br/>

The state consists of all the accounts and corresponding balances. We store the accounts in the accounts tree or state tree. Nodes fetch parts of the state tree present in every block to build their state tree and add it to their local storage.

<br/>

The blockchain state refers to the accounts tree or the most up-to-date state of the accounts and balances on the network. The accounts tree is where all the accounts and respective balances are stored. A Merkle (more precisely, a _[Merkle-Radix-Tree](https://en.wikipedia.org/wiki/Radix_tree)_) tree is used to calculate the state root stored at every block's header, and each account is a leaf node of the tree. We use Merkle Radix Tree to store several data in the blocks:

- **History tree**: contains the transactions hashes of the transactions within an epoch.
- **Body tree**: The body root of the tree, acting as a commitment to the block's body.
- **State tree**: The state root of the state tree that proves the current state of the blockchain.

<br/>

The Merkle Radix Tree stores accounts and their corresponding balances in the bottom layer. Leaf nodes in the tree represent the hashes of the accounts, and these leaf node hashes are combined through hashing to create parent or inner nodes. Parent nodes in the tree can have either one child, known as an "only child" node, or multiple children. "Only child" nodes are merged with their parent nodes, optimizing space. Combining adjacent nodes and creating parent nodes is repeated gradually until only one hash value is left, known as the state root. This state root, stored as a single hash value, serves as a proof of integrity for all the data in the accounts tree. Merkle Radix Trees allows for efficient storage and verification of accounts and balances in the blockchain while optimizing space by resulting in a single hash value representing the entire tree.

<br/>

Hash values are propagated up the tree from lower to higher levels until the state root is reached. The state root serves as a summary or fingerprint of the entire tree, allowing for easy detection of unauthorized modifications and efficient data integrity verification stored in the block’s header. The following accounts tree illustrates how 8 accounts are stored in the state root:

<p align="center">

  <img src="/protocol/accounts-tree-1.png" alt="Alt Text" width="500" height="250">
</p>

<br/>

> 💡 This figure is merely illustrative as we hold multiple accounts in the accounts tree.

<br/>

Following the above figure, account 3 has a leaf node that holds the account and the account's hash. The node above is its parent node which includes its children's hash (including data on accounts 1 and 2, their leaf nodes, and parent nodes). The second inner node is the parent of the first inner node, which is the parent of the leaf node.

<br/>

### State sync

Syncing with the blockchain state involves asking the network peers for chunks of their state tree to build a partial tree. A chunk is a fixed amount of state items. Adding chunks to a partial tree while the blockchain progresses enables the entire node to agree with all the peers on the current state.

<br/>

This synchronization component is exclusively used by full nodes, as light nodes are not required to know the entire state of the blockchain. Similarly, history nodes do not need to build a partial tree as they already own the complete history of the blockchain.

<br/>

### Partial tree

The nodes request chunks instead of the whole state tree because of the time it would take to download the state tree. Blocks are added to the blockchain quickly, so the state tree would no longer be up-to-date by the time the node had finished downloading the whole state tree.

<br/>

Nodes can request one chunk at a time. They use data they know to make a request, and for the subsequent request, they use the data received in the previous one until they are up-to-date and the full node’s tree matches the network state tree. At the end of the syncing process, the full node can verify if it is up-to-date by comparing its state root against the current block state root.

<br/>

The request consists as follows:

| Data      | Data type  | Description                                |
| --------- | ---------- | ------------------------------------------ |
| start_key | KeyNibbles | The latest part of the tree the node knows |
| limit     | u32        | The maximum size of the chunk              |

For the first request, the `start_key` consists of the latest part of the tree the node knows. This can be the data from the last election block. The node uses the response data for subsequent requests to make the new request.

<br/>

The response consists as follows:

| Data         | Data type   | Description                                       |
| ------------ | ----------- | ------------------------------------------------- |
| block_number | u32         | The current block number                          |
| block_hash   | Blake2bHash | The current block hash                            |
| chunk        | TrieChunk   | The chunk includes the end_key, items, and proof. |

As the node needs the response to use it to make the following request, nodes can only make one request at a time. The `end_key` becomes the `start_key` for the subsequent request.

<br/>

When building the partial tree, the node needs to keep track of the chunks associated with each block to detect any mismatched chunks. This can happen due to malicious behavior from validators, and blocks may have to be reverted. If a block is reverted, the node updates the affected chunk in its tree before downloading and adding new chunks. This approach ensures that the node is building a valid tree.

<br/>

> 💡 The following figure is merely illustrative. Clients can't state sync with just two state trees.

<br/>

<p align="center">

  <img src="/protocol/accounts-tree-2.png" alt="Alt Text" width="700" height="350">
</p>

<br/>

For example, let's consider Alice, who collects chunk 1 from block 35670 for her partial tree, which includes accounts 1 and 2. In the subsequent block 35671, a transaction occurs between accounts 2 and 3. Although Alice did not download any chunks containing account 3 in block 35670, this transaction affected the chunk she downloaded. This is because even though account 3 is not included in chunk 1, it impacts the balance of account 2.

<br/>

The partial tree is built in the following sequence:

1. For the first request, Alice receives a chunk and applies it to its tree.
2. For the following requests, for every new block, Alice first verifies the chunk of her tree against the chunk from the new block and updates her chunks accordingly.
3. After updating the chunk in her partial tree, Alice can request new chunks for the current block and apply them to her partial tree.
4. Alice repeats this process until her tree is complete and she is up-to-date with the blockchain’s state.
