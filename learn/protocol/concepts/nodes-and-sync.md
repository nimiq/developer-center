# Nodes and Sync

A node is a device that connects to other nodes to form a network. Nodes communicate and share information. As the number of nodes in a network increases, the more reliable the network becomes. Nodes store distinct types of data, depending on their node type, but regardless of the type, all nodes work to maintain the network’s integrity.

<br/>

Our blockchain supports three types of nodes: light nodes, full nodes, and history nodes. Each of these nodes serves a different purpose in the network. Nodes use four types of syncing mechanisms combined differently to sync to the network, depending on the syncing type.

<br/>

All nodes in the network start at the genesis block, the first block in the blockchain hard-coded in the client’s software, and sync in order to reach consensus. By supporting different nodes and syncing mechanisms, our blockchain can provide users with a reliable and efficient network.

<br/>

Running a node contributes to decentralization. Nodes must sync with at least 3 peers rather than a single one. Relying on a single node can have a faulty outcome as it may lead the node to follow an incorrect chain. Connecting to at least 3 peers increases the likelihood of connecting to the canonical chain.

<br/>

### Light nodes

Light nodes are the smallest and fastest type of node in the blockchain, able to be run in the client’s browser, whether on a computer or smartphone. These have basic functionalities such as verifying blockchain transactions and sending, receiving, or holding NIM. They don’t need to know the state, so besides the complete macro blocks, they only need to store the micro block headers, which reduce a significant amount of transactions' storage.

<br/>

Light nodes can sync through full nodes and history nodes by requesting a zero-knowledge proof that proves the validity of the chain from the genesis block up to the most recent election block that has a proof. This syncing process is made by using the light macro sync. To download the micro headers, light nodes use the block live sync.

<br/>

### Full nodes

Full nodes are an essential component of our blockchain, providing high levels of reliability and security to the network. While full nodes may skip most of the blockchain when syncing and don’t hold a copy of the entire blockchain, they are still capable of generating zero-knowledge proofs, producing blocks, validating transactions, and pruning old data reducing the amount of data in their database.

<br/>

Full nodes rely on other full nodes or history nodes to sync, and after connecting to the macro chain using the light macro sync, they build their state tree as the chain progresses to meet the blockchain's current state using the state live sync mechanism. This process allows full nodes to maintain an up-to-date copy of the blockchain, ensuring the network remains secure and reliable.

<br/>

### History nodes

History nodes are essential components of a blockchain network, as they are responsible for storing all the data since the genesis block. These nodes play a critical role in maintaining the network's integrity and require high-capacity storage and high computational power. The primary function of history nodes is to provide several benefits to the network, such as generating zero-knowledge proofs and storing the entire history of the blockchain. Additionally, history nodes can assist all node types in syncing to the network and generate zero-knowledge proofs. By keeping the entire network history, history nodes promote security and reliability and contribute to a more resilient network.

<br/>

History nodes rely on other history nodes to sync, and they can provide all the historical data of the blockchain. History nodes use the history macro sync and the block live sync mechanisms to sync.

<br/>

Besides the type of nodes we describe, we also have **prover nodes** and **validator nodes:**

- Prover nodes play a crucial role in blockchain networks by generating zero-knowledge proofs that allow both light and full nodes to sync. While zero-knowledge proofs are small and easy to verify, generating them requires significant computational resources. Prover nodes are, therefore, responsible for generating these proofs and must have the resources needed to do so.
- Validator nodes are the block producers. Any node in the network that desires to participate in the consensus and produce blocks can propose as a validator and depending on the amount of NIM staked, they can increase their voting power.
