# History Macro Sync

Performing the history macro sync relies on a peer-to-peer request, which means that a node can only use this syncing method by requesting data from another history node. To synchronize, the requesting node must gather data from multiple peers to assemble a complete copy of the blockchain, as is required for history nodes. This process demands time and computational resources, as the node must download the macro chain and all of the history items within, starting from the genesis block.

<br/>

When the node first connects to the network, it starts at the genesis block. The history macro sync consists of downloading all the election blocks from genesis up to the most recent one, plus the last checkpoint block if any.

<br/>

The history macro sync consists of requesting 3 layers of data:

1. Macro chain: consists of all the epochs since the genesis block plus the latest batch and gives the node the view of how long the chain is
2. Batch set: consists of the last checkpoint block of a batch and the number of history items within the batch
3. History chunks: consists of a set amount of history items that the node will verify and download to its chain

<br/>

**Requesting the macro chain**

- The syncing node provides the locators it knows; as the node is syncing with the network for the first time, it will most likely give the genesis block's hash as a locator. It also will provide the maximum number of epochs it wants to receive. This is particularly interesting for nodes that are out of sync and know they have missed a number of epochs.
- As a response, the node receives a set of hashes of all the epochs up to the most recent one, plus the hash of the latest checkpoint block.

<br/>

Note that the node receives the hashes and not the blocks. To receive the blocks, the node uses the hashes it received for the following request.

<br/>

**Requesting the batch set**

- The syncing node requests data from many nodes. In this request, the node wants to receive the blocks of a batch. It provides the hash of the epoch it has received, and one request equals receiving one election block
- As a response, it gets the corresponding election block, a set of batches that includes the checkpoint blocks within the epoch, and the total number of history items of the epoch; the syncing node must request the batch set for all the election block hashes it has received

<br/>

Based on the total number of history items across all epochs, the syncing node knows how many history items it has to fetch in the following request.

<br/>

**Requesting history chunks**

A history chunk consists of a set number of history items. To be up to date with the macro chain as the rest of the history nodes in the network, syncing nodes must download all of them. The new one can be made using the data received on the previous requests.

<br/>

- Towards receiving as many history chunks as optimally as possible, the node can request the first chunk of an epoch to one node, the second chunk to another, and so on by providing:
  1. the epoch number of the epoch the nodes to fetch the history items from
  2. a chunk index within the epoch; if the index of the chunk is 0, it receives history items from 0 to 999
  3. the closing macro block of the respective chunk; can be either an election or a checkpoint block

<br/>

As mentioned, this process can be made with many history nodes. We gather the history items into chunks to avoid the time-consuming process of downloading item by item. Plus, requesting chunks from multiple nodes makes the process practical and accelerated. The syncing node makes this request continuously until it reaches the most recent history item. Mind that as the chain progresses, it might be required for the syncing node to re-request some of the requests mentioned above.

<br/>

Note that this is an extensive process. The syncing node must fetch data from as many nodes as possible to reach the endpoint faster and have a decentralized, thus consensual response that can prove the chain's integrity. Relying on a single node could result in receiving inaccurate data.

<br/>

After computing all the history, the node can calculate its history root and compare it against the latest macro block it owns, attesting to its macro chain's validity.
