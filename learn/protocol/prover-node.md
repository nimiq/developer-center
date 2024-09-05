# Prover node

A prover node is a particular type of node that generates zero-knowledge proofs (zkp). A zero-knowledge proof is a method of proving a statement between two parties - a prover and a verifier. Read [this post](ZKP-and-recursive-SNARKs.md) for a detailed description of zero-knowledge proofs.

The blockchain uses zero-knowledge proofs to:

- Facilitate light nodes and full nodes to [sync](sync-protocol/light-macro-sync.md) with the blockchain
- Enable nodes to reconnect with the blockchain faster
- Secure the network

Zero-knowledge proofs prove the chain’s integrity from the genesis block to the latest election macro block in a small proof, which makes it easy for the node receiving it to verify. The proof size remains the same regardless of whether the node requests a proof from the genesis block or the latest macro block.

From the verifier side, receiving and verifying a zero-knowledge proof is a fast process, but generating such proof takes significant computational power and space from the prover node side. Generating these proofs takes time but verifying them is a quick process.

## Prover component

Each node in the network has a particular component within its configuration - the [zkp component](https://github.com/nimiq/core-rs-albatross/blob/ac50167e912b8e36223675495eed1ecd9e226b1c/zkp-component/src/zkp_component.rs). The component allows nodes to perform multiple tasks such as proof storage, proof of network communication, thus requests and gossip, and optionally proof generation.

But not all nodes need or want to be prover nodes. Being a validator takes considerable computational power, and so does being a prover node. But oppositely to validators, there is no incentive to generate these proofs aside from making the network a more secure and reliable environment.

The prover node component is within the node's configuration, but the feature is disabled by default. Nodes must activate the feature `is_prover_active: bool` to have the ability to generate a proof. Whenever a node wants to generate a proof, it has to set this feature to `true`.

## Database

The zkp component also holds a database that allows nodes to store zero-knowledge proofs, preventing losing access to them in the future. The database can be enabled or disabled according to the node choice. Activating the database will allow the node to reconnect from the last zkp in its database.

If a synced node loses connection, it can reconnect by providing the block number of the last zero-knowledge proof stored in its database. But if it doesn't have its database active and loses connection when reconnecting, it will have to resync from the start of the chain, thus from the genesis block, as it can't fetch old proofs.

## Implementation of a zero-knowledge proof

Zero-knowledge proofs are generated based on three conditions - correctness, soundness, and zero-knowledge. Therefore, by respecting these conditions, the proof attests to the validity of the block production from the genesis block to the respective election block.

There is a possible delay in the zero-knowledge proof generation, where a new election block comes in while the prover node is still generating the proof for the previous election block. Considering this delay, prover nodes provide the latest proof available.

When nodes first sync to the chain, they start at block 0 or genesis block, which is an election block. The genesis block comes with a null proof as it doesn’t contain any element to enable zero-knowledge proof generation. Prover nodes generate these proofs at every election block after the PoS genesis block.

## Generating a zero-knowledge proof

The process of generating such proofs is resource-intensive and time-consuming, as it is, for instance, for a history node or a validator node. The prover node generates the proof, stores it in its memory, and propagates it among the network. Note that a zkp can only be generated if it has the feature`is_prover_node: true`.

The proof consists of the last election block number and the proof itself, as follows:

```rust
pub struct ZKProof {
    pub block_number: u32,
    pub proof: Option<Proof<MNT6_753>>,
}
```

- The `block_number` consists of the most recent election block. This number must be greater than the node's number in the request.
- The `proof` consists of the zero-knowledge proof generated using a construction based on the MNT4-753 and MNT6-753 elliptic curves.

In case of a first connection with the network, the node provides the `block_number` 0 as the most recent proof, despite the genesis block having no proof attached to it.

In the case of a node that was synced and had a zero-knowledge proof for election block 43200 in its database, the resync method would differ. If it gets disconnected by chance, when reconnecting again, this node can try to resync with the chain by requesting a zkp more recent than block 43200. However, if this same node hadn't activated the database feature, it would be unable to resync from the same point and have to sync from the genesis block.

Mind that both cases depend on the type of node syncing, as sync with a zero-knowledge proof only applies to light nodes and full nodes.

## Requesting a zero-knowledge proof

The requesting node, rather than downloading and verifying all election macro blocks since the genesis block, can verify the chain's validity with a zero-knowledge proof upon request. Once a node receives a proof, it first verifies it and then stores it using the zkp component and enabling the database feature.

Whether a node is syncing for the first time or reconnecting to the network, it must request proof to be up-to-date. The request looks as follows:

```rust
pub struct RequestZKP {
    pub(crate) block_number: u32,
    pub(crate) request_election_block: bool,
}
```

- The `block_number` expected is the last election block the node knows of.
- If the `request_election_block` is `true`, the node expects to receive the complete election block; if set to `false`, the node expects to receive the most recent election block number and the proof.

### Syncing to the blockchain:

1. node connects to the network
2. node requests a zkp by providing the genesis block as `block_number`
3. node verifies the zkp
4. node stores the zkp
5. node continues the syncing process

### Resyncing to the blockchain:

1. node reconnects to the network
2. node requests a zkp by providing the `block_number` of the latest zkp in its database
3. node verifies the zkp
4. node stores the zkp
5. node continues the syncing process

#### See also

To complete the prover node setup, you'll need the proving keys. For detailed instructions on how to download and configure the proving keys, please refer to the [prover node setup guide](/build/set-up-your-own-node/prover-node-guide.md).
