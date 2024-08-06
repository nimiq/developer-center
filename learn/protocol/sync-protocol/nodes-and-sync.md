# Nodes and Sync

A node is a connection point in a network that communicates and shares information with other nodes. The more nodes in a network, the more reliable it becomes. Depending on the type of client, nodes store different types of data.

The blockchain features three types of nodes: light nodes, full nodes, and history nodes, each serving a distinct purpose in the network. Nimiq PoS offers four syncing mechanisms combined in different ways to facilitate syncing to the network, relying on a peer-to-peer request system. This approach caters to the specific needs of each node type.

Syncing starts at the genesis block, the first block in the blockchain. By accommodating various nodes and sync mechanisms, the blockchain can deliver users a reliable and efficient network.

Running a node contributes to decentralization. To enhance synchronization, nodes should connect with a minimum of 3 peers through a peer-to-peer request, avoiding reliance on a single node. Relying on a single node can have a faulty outcome as it may lead the node to follow an incorrect chain.

## Light nodes

Light nodes, the most compact and rapid node type to sync within the blockchain, can seamlessly operate in a client's browser, whether on a computer or smartphone. Despite their minimalistic design, these nodes can perform basic functions, including verifying blockchain transactions and send and receive transactions. Light nodes can skip most of the chain as they don't need to store the entire state. They only require storage for the latest election block, facilitated with a zero-knowledge proof, and the subsequent micro block headers. This approach significantly minimizes the storage impact of transactions.

Light nodes rely on full or history nodes to sync through two mechanisms:

- [Light Macro Sync](light-macro-sync.md)
- [Block Live Sync](block-live-sync.md)

## Full nodes

Full nodes are an essential component of our blockchain, providing high levels of reliability and security to the network. While full nodes may skip most of the blockchain when syncing and don’t hold a copy of the entire blockchain, they are qualified of generating zero-knowledge proofs, producing blocks, validating transactions, and pruning old data reducing the amount of data in their database.

Full nodes rely on full or history nodes to sync through two mechanisms:

- [Light Macro Sync](light-macro-sync.md)
- [State Live Sync](state-live-sync.md)

## History nodes

History nodes play a crucial role within a blockchain network by maintaining all data from the genesis block onward. These nodes, requiring substantial storage capacity and computational power, are vital for maintaining the network's integrity.

Their primary functions include storing the entire blockchain history, contributing to the synchronization of various node types and reinforcing the network's security and reliability. Moreover, history nodes can generate zero-knowledge proofs to assist light and full nodes to sync, or be validators and validate blocks.

History nodes rely on other history nodes to sync through two mechanisms:

- [History Macro Sync](history-macro-sync.md)
- [Block Live Sync](block-live-sync.md)

## Other nodes

In addition to the node types outlined, Nimiq PoS also features [prover nodes](/learn/protocol/prover-node.md) and [validator nodes](/learn/protocol/validators/validators.md):

- Prover nodes play a crucial role in blockchain networks by generating zero-knowledge proofs that allow both light and full nodes to sync. While zero-knowledge proofs are small and easy to verify, generating them requires significant computational resources. Prover nodes are, therefore, responsible for generating these proofs and must have the necessary resources.
- Validator nodes are the block producers. Any node in the network that desires to participate in the consensus and produce blocks can propose as a validator, and depending on the amount of NIM staked, they can increase their voting power.
