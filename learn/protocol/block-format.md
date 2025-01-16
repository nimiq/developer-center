# Block Format

In the Nimiq PoS blockchain, blocks are categorized into **microblocks** and **macroblocks**. Each type has a different role in maintaining the blockchain:

- **Micro Blocks**: include user-generated transactions and are produced and signed by a validator according to the validator selection process. If a validator fails to produce a micro block on time, a [skip block](/learn/protocol/validators/skip-blocks.md) is added.
- **Macro Blocks**: these do not contain user transactions, ensure finality, and are produced using the Tendermint consensus algorithm. There are two types: election and checkpoint.

## Micro Blocks

Micro blocks are the blocks for processing transactions on the Nimiq PoS blockchain. A validator, randomly selected through a [VRF based process](/learn/protocol/verifiable-random-functions.md) that ensures randomness and decentralization, produces a new micro block. If a validator fails to produce a block, the remaining validators can agree on a skip block to maintain the blockchain's continuity. The structure of a micro block is divided into three parts: **header**, **body**, and **justification**.

### Micro Header

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `network` | `NetworkId` | The network ID associated with the block, such as Mainnet or Testnet |
| `version` | `u16` | The block's version number. A change in the version number implies a hard fork |
| `block_number` | `u32` | The number of the block, representing its height in the blockchain |
| `timestamp` | `u64` | The block's Unix time in milliseconds, indicating when the block was produced |
| `parent_hash` | `Blake2bHash` | The hash of the preceding block's header (micro or macro). This ensures a direct link to its predecessor |
| `seed` | `VrfSeed` | The BLS signature derived from the seed of the previous block, using the validator key of the block producer |
| `extra_data` | `Vec<u8>` | Space reserved for arbitrary data (currently unused) |
| `state_root` | `Blake2bHash` | The root of the Merkle tree representing the blockchain state, acting as a commitment to the current state |
| `body_root` | `Blake2sHash` | The root of the Merkle tree representing the body of the block, serving as a commitment to its content |
| `diff_root` | `Blake2bHash` | The root of the trie diff tree proof, authenticating the state changes between blocks |
| `history_root` | `Blake2bHash` | The root of a Merkle Mountain Range covering all transactions in the current epoch |
| `cached_hash` | `Option<Blake2bHash>` | The cached hash of the block header, stored temporarily for performance optimization and not transmitted over the network |

### Micro Body

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `equivocation_proofs` | `Vec<EquivocationProof>` | A vector containing equivocation proofs for this block. This field may be empty if no such proofs exist in the block |
| `transactions` | `Vec<ExecutedTransaction>` | A vector containing the transactions for this block. It may be empty in blocks without any transactions, as in skip blocks |

### Micro Justification

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `Micro(Ed25519Signature)` | `Ed25519Signature` | The block producer's signature. This is used as the justification when the block is produced within the expected time |
| `Skip(SkipBlockProof)` | `SkipBlockProof` | Contains the aggregated signatures of validators for a skip block. Used as justification when the block isn't produced within the expected time |

Only one of these fields is used at a time as justification, depending on whether the block is produced within the expected timeframe or not.

### Skip Blocks

When a micro block is not produced within the expected timeframe, the validator list steps in and creates a skip block in the expected micro block’s place. Unlike a regular micro block, a skip block does not include transactions and is agreed and signed by over two-thirds of the validators of the current epoch. This block replaces the micro block, thus ‘skipping’ past it. For detailed information, refer to the [skip blocks documentation](/learn/protocol/validators/skip-blocks.md).

## Macro Blocks

Macro blocks come in two types—**election** and **checkpoint**—each serving a specific role. Election macro blocks are used to update the validator list, defining which validators will participate in the next epoch. Checkpoint macro blocks finalize transactions but do not change validator list.

Macro blocks need +2/3 of consensus from the validator list to be confirmed, ensuring finality and cementing the state of the blockchain at regular intervals. The structure of a macro block is divided into three parts: **header**, **body**, and **justification**.

### Macro Header

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `network` | `NetworkId` | The network ID associated with the block, such as Mainnet or Testnet |
| `version` | `u16` | The block's version number. Changing this implies a hard fork |
| `block_number` | `u32` | The number of the block, representing its height in the blockchain |
| `round` | `u32` | The specific round in which this block was proposed |
| `timestamp` | `u64` | The Unix timestamp (in milliseconds) indicating when the block was produced |
| `parent_hash` | `Blake2bHash` | The hash of the preceding block's header (can be either micro or macro) |
| `parent_election_hash` | `Blake2bHash` | The hash of the header from the previous election macro block |
| `interlink` | `Option<Vec<Blake2bHash>>` | A vector of hashes linking to previous macro blocks at defined intervals. This allows nodes to verify past blocks efficiently without needing to traverse the entire chain |
| `seed` | `VrfSeed` | The BLS signature derived from the seed of the previous block, using the validator key of the block proposer |
| `extra_data` | `Vec<u8>` | Space reserved for arbitrary data (currently unused) |
| `state_root` | `Blake2bHash` | The Merkle root representing the blockchain state, acting as a commitment to the current state |
| `body_root` | `Blake2sHash` | The Merkle root representing the body of the block, serving as a commitment to its content |
| `diff_root` | `Blake2bHash` | The root of the trie diff tree proof, which authenticates the state transitions or changes between blocks |
| `history_root` | `Blake2bHash` | The root of a Merkle Mountain Range covering all transactions that occurred in the current epoch |
| `validators` | `Option<Validators>` | Information about the upcoming validator list. Present only in election macro blocks |
| `next_batch_initial_punished_set` | `BitSet` | A bitset representing validator slots that are banned from producing blocks in the next batch due to misbehavior |
| `cached_hash` | `Option<Blake2bHash>` | A cached hash of the block header, used to optimize performance. Not transmitted over the network |

### Macro Body

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `transactions` | `Vec<RewardTransaction>` | Contains the reward-related transactions of this block, distributing rewards to validators |

### Macro Justification

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| `round` | `u32` | The specific round in which the block was accepted. This is used to verify that the signature corresponds to the correct round |
| `sig` | `MultiSignature` | The aggregated signature of the validators’ precommit votes for the block, confirming validator consensus |

The figure below illustrates how a macro block and a micro block are linked. Each block, whether macro or micro, is directly connected to its predecessor through the **parent hash** and the **random seed**.

<img class="object-contain max-h-[max(80vh,220px)]" src="/assets/images/protocol/macro-micro.png" alt="macro and micro block connection" />

## Blockchain Format

The Nimiq blockchain is structured into several subsets of blocks called epochs and batches.

- **Batches**: A batch consists of a fixed number of **micro blocks** produced one after the other. Each batch ends with a **checkpoint** macro block, which finalizes the transactions included in the preceding micro blocks.
- **Epochs**: An epoch is a set of multiple batches together. Each epoch ends with an **election** macro block, which not only finalizes the transactions in the preceding batch but also updates the validator list of the entire epoch.

<img class="object-contain max-h-[max(300px)]" src="/assets/images/protocol/block-struct-3.png" alt="blockchain structure" />

## Block Finality

Block finality in the Nimiq PoS blockchain ensures that all transactions within the finalized blocks are permanent and cannot be reversed. This is achieved through a balance of micro block production and periodic macro block consensus. While micro blocks add transactions to the chain, these transactions only reach finality when confirmed by a macro block. Macro blocks, produced at regular intervals using Tendermint consensus, finalize the state of all preceding micro blocks in a batch.