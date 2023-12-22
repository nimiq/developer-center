# History Macro Sync

The history macro sync is exclusive to history nodes. The syncing node requests data from other history nodes to assemble a complete copy of the blockchain. This process demands time and computational resources, as the node must download the entire chain and all of the history items within.

<br/>

When the syncing node first connects to the network, it starts at the genesis block. The history macro sync consists involves the sequential request of 3 layers of data:

1. Macro chain: consists of all the epochs since the genesis block plus the latest batch and gives the node an overview of the chain length.
2. Batch set: consists of the checkpoint blocks of all batches since genesis along with the count of history items in each batch.
3. History chunks: consists of a set amount of history items that the node will verify and download to its chain.

<br/>

**Requesting the macro chain**

The syncing node initiates by sending the genesis block's hash to a history node, specifying the desired quantity of election blocks. The history node responds with hashes of all election macro blocks since the genesis block and the latest checkpoint block, if any.


<br/>

**Requesting the batch set**

The node requests batch sets for each epoch using received election block hashes. Providing the hash of an election block, the node obtains the election block itself and a vector of checkpoint blocks within that epoch, including the count of history items per batch. This process repeats from the genesis block to the most recent checkpoint block. Based on the total number of history items, the syncing node knows how many history items it has to fetch in the following request.

<br/>

**Requesting history chunks**

TThe syncing node requests and incorporates history chunks from multiple history nodes since the genesis block. Each history chunk, consisting of a set number of history items, is fetched by specifying the epoch number, chunk index, and the closing macro block. The node repeats this request until it reaches the most recent history item.

<br/>

- Towards receiving as many history chunks as optimally as possible, the node can request the first chunk of an epoch to one node, the second chunk to another, and so on by providing:
  1. the epoch number of the epoch the node wants to fetch the history items from
  2. a chunk index within the epoch; if the index of the chunk is 0, it receives history items from 0 to 999
  3. the closing macro block of the respective chunk; can be either an election or a checkpoint block

<br/>

As mentioned, this process can be made with many history nodes. History items are aggregated into chunks to avoid the time-consuming process of downloading item by item. Plus, requesting chunks from multiple nodes makes the process practical and accelerated. The syncing node makes this request continuously until it reaches the most recent history item. Mind that as the chain progresses, it might be required for the syncing node to re-request some of the requests mentioned above.

<br/>

Note that this is an extensive process. The syncing node must fetch data from as many nodes as possible to reach the endpoint faster and have a decentralized, thus consensual response that can prove the chain's integrity. Relying on a single node could result in receiving inaccurate data.

<br/>

After computing all the history, the node can calculate its history root and compare it against its latest macro block, attesting to the macro chain's validity.