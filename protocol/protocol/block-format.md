# Block Format

In the Nimiq PoS blockchain, blocks are categorized into **microblocks** and **macroblocks**. Each type has a different role in maintaining the blockchain:

- **Micro Blocks**: include user-generated transactions and are produced and signed by a validator according to the validator selection process. If a validator fails to produce a micro block on time, a [skip block](/protocol/protocol/validators/skip-blocks.md) is produced instead.
- **Macro Blocks**: these do not contain user transactions, ensure finality, and are produced using the Tendermint consensus algorithm. There are two types: election and checkpoint.

## Micro Blocks

Micro blocks are the blocks for including transactions on the Nimiq PoS blockchain. A validator, randomly selected through a [VRF based process](/protocol/protocol/verifiable-random-functions.md) that ensures randomness and decentralization, produces a new micro block. If a validator fails to produce a block, the remaining validators can agree on a skip block to maintain the blockchain's continuity. The structure of a micro block is divided into three parts: **header**, **body**, and **justification**.

### Micro Header

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `network` | `NetworkId` | The network ID associated with the block, such as Mainnet or Testnet |
| `version` | `u16` | The block's version number. A change in the version number implies a hard fork. It can currently only be 1. |
| `block_number` | `u32` | The number of the block, representing its height in the blockchain |
| `timestamp` | `u64` | The block's Unix creation timestamp in milliseconds, indicating when the block was produced |
| `parent_hash` | `Blake2bHash` | The hash of the preceding block's header (micro or macro). This ensures a direct link to its predecessor |
| `seed` | `VrfSeed` | The output of the VxEdsa VRF function derived from the seed of the previous block, using the validator key of the block producer |
| `extra_data` | `Vec<u8>` | Data that can be freely chosen by the producing validator, the default client leaves it empty |
| `state_root` | `Blake2bHash` | The root of the Merkle tree representing the blockchain state, acting as a commitment to the current state |
| `body_root` | `Blake2sHash` | The hash of the block's body, serving as a commitment to its content |
| `diff_root` | `Blake2bHash` | The root of the trie diff tree proof, authenticating the state changes between blocks |
| `history_root` | `Blake2bHash` | The root of a Merkle Mountain Range covering all transactions in the current epoch up until the current block |

### Micro Body

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `equivocation_proofs` | `Vec<EquivocationProof>` | A vector containing equivocation proofs for this block. This field may be empty if no such proofs exist or if the block producer chooses not to include any |
| `transactions` | `Vec<ExecutedTransaction>` | A vector containing the transactions for this block. It may be empty if there are no transactions available for inclusion or if the block producer chooses not to include any |

### Micro Justification

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `Micro(Ed25519Signature)` | `Ed25519Signature` | The block producer's signature. This is used as the justification when the block is produced within the expected time |
| `Skip(SkipBlockProof)` | `SkipBlockProof` | Contains the aggregated BLS signatures of validators for a skip block. Used as justification when the block isn't produced within the expected time |

Only one of these fields is used at a time as justification, depending on whether the block is produced within the expected timeframe or not.

### Skip Blocks

When a micro block is not produced within the expected timeframe, the remaining elected validators step in and create a skip block in the expected micro block’s place. Unlike a regular micro block, a skip block does not include transactions and is agreed and signed by over two-thirds of the validators of the current epoch. This block replaces the micro block, thus ‘skipping’ past it. For detailed information, refer to the [skip blocks documentation](/protocol/protocol/validators/skip-blocks.md).

## Macro Blocks

There are two types of macro blocks: **election** and **checkpoint**, each serving a specific role. Election macro blocks update the validator list, defining which validators will participate in the next epoch; these blocks also close epochs. Checkpoint macro blocks finalize transactions and close batches but do not change the validator list.

Macro blocks need consensus of 2/3 the validator [slots](/protocol/protocol/validators/slots.md) to be confirmed, ensuring finality and cementing the state of the blockchain at regular intervals. The structure of a macro block is divided into three parts: **header**, **body**, and **justification**.

### Macro Header

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `network` | `NetworkId` | The network ID associated with the block, such as Mainnet or Testnet |
| `version` | `u16` | The block's version number. Changing this implies a hard fork |
| `block_number` | `u32` | The number of the block, representing its height in the blockchain |
| `round` | `u32` | The specific Tendermint round in which this block was proposed |
| `timestamp` | `u64` | The Unix creation timestamp (in milliseconds) indicating when the block was produced |
| `parent_hash` | `Blake2bHash` | The hash of the preceding block's header (can only be a micro block) |
| `parent_election_hash` | `Blake2bHash` | The hash of the header from the previous election macro block |
| `interlink` | `Option<Vec<Blake2bHash>>` | A vector of hashes linking to previous election blocks with epoch numbers ending in *n* zeros in binary representation. This allows nodes to verify past blocks efficiently without needing to traverse the entire chain |
| `seed` | `VrfSeed` | The output of the VxEdsa VRF function derived from the seed of the previous block, using the validator key of the block producer |
| `extra_data` | `Vec<u8>` | Data that can be freely chosen by the producing validator, the default client leaves it empty |
| `state_root` | `Blake2bHash` | The Merkle root representing the blockchain state, acting as a commitment to the current state |
| `body_root` | `Blake2sHash` | The hash of the block body, serving as a commitment to its content |
| `diff_root` | `Blake2bHash` | The root of the trie diff tree proof, which authenticates the state transitions or changes between blocks |
| `history_root` | `Blake2bHash` | The root of a Merkle Mountain Range covering all transactions that occurred in the current epoch up until this block |
| `validators` | `Option<Validators>` | Information about the upcoming validator list. Present only in election macro blocks. The `Validators` struct contains a list of validators ordered by their slots and a mapping of validator addresses to their slot range. |
| `next_batch_initial_punished_set` | `BitSet` | A bitset representing validator slots that are banned from producing blocks in the next batch due to misbehavior |

### Macro Body

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `transactions` | `Vec<RewardTransaction>` | Contains the reward transactions of this block, distributing block rewards and transaction fees of the current batch to validators. Macro blocks do not include user-generated transactions. |

### Macro Justification

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `round` | `u32` | The specific tendermint round in which the block was accepted. This is used to verify that the signature corresponds to the correct round |
| `sig` | `MultiSignature` | The aggregated BLS signature of the validators’ precommit votes for the block, confirming validator consensus |

## Relation Between Micro and Macro Blocks
Micro and macro blocks are interconnected. This connection ensures blockchain continuity and finality. This section focuses on how these block types interact.

**Block Connections**
All blocks are sequentially linked by the parent hash, forming a continuous chain: and every checkpoint macro block points to its election macro block by the parent election hash. The following diagram illustrates the connection between micro and macro blocks. Each block is directly connected to its predecessor through the parent hash.

<img class="object-contain max-h-[max(80vh,220px)]" src="/assets/images/protocol/macro-micro.png" alt="macro and micro block connection" />

*Note: This diagram is a simplified representation. The actual blockchain includes a fixed number of blocks per batch and epoch, which this diagram does not reflect.*

- **Parent Hash**: Links each block to its direct predecessor.
- **Election Parent Hash**: Connects checkpoint macro blocks to their preceding election macro block.

## Blockchain Format

The Nimiq blockchain is structured into several subsets of blocks called epochs and batches.

- **Batches**: A batch consists of 59 **micro blocks** produced one after the other. Each batch ends with a **checkpoint** macro block, which finalizes the transactions included in the preceding micro blocks. Since the micro blocks are supposed to be spaced 1 second apart, a batch is expected to take 1 minute.
- **Epochs**: An epoch is a set of 1440 batches together. Each epoch ends with an **election** macro block, which not only finalizes the transactions in the preceding batch but also updates the validator list of the entire epoch. Since a batch is expected to take about 1 minute, 1440 batches are expected to take 12 hours.

<img class="object-contain max-h-[max(300px)]" src="/assets/images/protocol/block-struct-3.png" alt="blockchain structure" />

## Block Finality

Block finality in the Nimiq PoS blockchain ensures that all transactions within the finalized blocks are permanent and cannot be reversed. This is achieved through a balance of micro block production and periodic macro block consensus. While micro blocks add transactions to the chain, these transactions only reach finality when confirmed by a macro block. Macro blocks, produced at regular intervals using Tendermint consensus, finalize the state of all preceding micro blocks in a batch.
