# Block format

The Nimiq Proof-of-Stake consensus algorithm has micro and macro blocks. Validators produce micro blocks and propose macro blocks. Both types of blocks have different functions in the blockchain. Micro and macro blocks are divided into three sections: header, body, and justification.

<br/>

- Header: Contains data of the block itself and commitments to the body and state of the blockchain.
- Body: The part of the block where transactions or data regarding the staking contract is stored, depending on whether it is a micro or macro block.
- Justification: Includes necessary data to make the block valid according to the consensus rules and verify the block producer or proposer with its signature.

<br/>

### Micro Blocks

Micro blocks contain user transactions, and each micro block is produced and signed by a validator according to the validator selection. There is also another type of micro block, that is produced when there is a delay in the block production - a skip block. For a more detailed explanation of this type of micro block, check the documentation on skip blocks.

<br/>

Micro header:

| Data field     | Description                                                                                                                                                                                                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `version`      | The version number of the block. When the version number changes, it results in a hard fork.                                                                                                                                                                                                |
| `block_number` | The number of the block.                                                                                                                                                                                                                                                                    |
| `timestamp`    | The block's timestamp in Unix time with millisecond precision.                                                                                                                                                                                                                              |
| `parent_hash`  | The hash of the header of the immediately preceding block (either micro or macro).                                                                                                                                                                                                          |
| `seed`         | The seed of the block. This seed is the implementation of the <a href="https://signal.org/docs/specifications/xeddsa/#vxeddsa/" target="_blank">VXEdDSA</a> algorithm of the seed of the immediately preceding block (either micro or macro) using the validator key of the block producer. |
| `extra_data`   | Field containing arbitrary data.                                                                                                                                                                                                                                                            |
| `state_root`   | The root of the <a href="https://en.wikipedia.org/wiki/Merkle_tree" target="_blank">Merkle tree</a> of the blockchain state. It acts as a commitment to the state.                                                                                                                          |
| `body_root`    | The root of the Merkle tree of the body. It acts as a commitment to the body.                                                                                                                                                                                                               |
| `history_root` | The root of a Merkle Montain Range over all of the transactions that occurred in the current epoch.                                                                                                                                                                                         |

<br/>

Micro body:

| Data field     | Description                                                                                                                            |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `fork_proofs`  | This contains the fork proofs of this block. This field might be empty since forks don't occur in every block.                         |
| `transactions` | Contains all the transactions of the block. This field might be empty since it is possible to produce blocks without any transactions. |

<br/>

Micro justification:

| Data field             | Description                                                                                                         |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `Micro(Signature)`     | Block producer's signature.                                                                                         |
| `Skip(SkipBlockProof)` | Consists of the aggregated signatures of a skip block. It might be empty as skip blocks might not occur in a batch. |

Note that only one of those is added as justification. The block producer signs the block when the micro block is produced in the expected time. But when the micro block isn't produced in the expected time, a `SkipBlockProof` is added instead.

<br/>

<p align="center">
  <img src="/public/protocol/blockformat-1.png" alt="Alt Text" width="600" height="3000">
</p>

<br/>

### Macro Blocks

There are two types of macro blocks: election and checkpoint. A new validator list is elected in every election macro block, and the staking contract is updated accordingly. The checkpoint macro blocks serve to reduce the syncing time for new nodes. Macro blocks are produced with Tendermint, where a random validator is chosen to propose the new macro block. User transactions are not included in macro blocks.

<br/>

Macro header:

| Data field             | Description                                                                                                                                                                                           |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`              | The version number of the block. When the version number changes, it results in a hard fork.                                                                                                          |
| `block_number`         | The number of the block.                                                                                                                                                                              |
| `round`                | The round number the block was proposed in.                                                                                                                                                           |
| `timestamp`            | The block's timestamp in Unix time with millisecond precision.                                                                                                                                        |
| `parent_hash`          | The hash of the header of the immediately preceding block (either micro or macro).                                                                                                                    |
| `parent_election_hash` | The hash of the header of the preceding election macro block.                                                                                                                                         |
| `interlink`            | Hashes of the last blocks dividable by 2^x.                                                                                                                                                           |
| `seed`                 | The seed of the block. This seed is the implementation of the VXEdDSA algorithm of the seed of the immediately preceding block (either micro or macro) using the validator key of the block proposer. |
| `extra_data`           | Field containing arbitrary data.                                                                                                                                                                      |
| `state_root`           | The root of the Merkle tree of the blockchain state. It acts as a commitment to the state.                                                                                                            |
| `body_root`            | The root of the Merkle tree of the body. It acts as a commitment to the body.                                                                                                                         |
| `history_root`         | The root of a Merkle Montain Range over all of the transactions occurred in the current epoch.                                                                                                        |

<br/>

# Block format

Macro body:

| Data field        | Description                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `validators`      | Contains all the information regarding the next validator list. It includes thee validators public key, reward address, and range of slots. |
| `pk_tree_root`    | The root of a special Merkle tree over the validator's public keys. It is used in the nano-sync.                                            |
| `lost_reward_set` | It represents which slots had their reward slashed when the block was produced. It is used for reward distribution.                         |
| `disabled_set`    | It represents which slots aren't allowed to produce micro blocks or propose macro blocks. It is used for reward distribution as well.       |
| `transactions`    | The reward related transactions of this block.                                                                                              |

<br/>

Macro justification:

Checkpoint or election macro blocks contain a `TendermintProof` as justification.

| Data field | Description                                                             |
| :--------- | :---------------------------------------------------------------------- |
| `round`    | Round number where the block proposal was accepted.                     |
| `sig`      | Aggregated signatures of the validators that have signed the precommit. |

<br/>

The following figure demonstrates the structure of a macro block and how two macro blocks connect.

<br/>

<p align="center">
  <img src="/public/protocol/blockformat-2.png" alt="Alt Text" width="500" height="250">
</p>

<br/>

Note that several micro blocks are between an election macro block and a checkpoint macro block. Plus, all the macro blocks are connected to the parent election macro block.

<br/>

The following figure demonstrates how the connection between a macro block and a micro block is created.

<br/>

<p align="center">
  <img src="/public/protocol/blockformat-3.png" alt="Alt Text" width="500" height="250">
</p>

<br/>

Every block, macro or micro, is connected to the previous one by the parent hash and the random seed.

<br/>

### Blockchain format

The blockchain is divided into batches and epochs:

Batch - The interval between two macro blocks. A batch consists of several micro blocks, closing on a macro block.

Epoch - The interval between two election macro blocks marks an epoch. It starts with the first micro block after an election macro block and ends at an election macro block, including multiple micro blocks and checkpoint macro blocks in between.

<br/>

The following figure illustrates how the blockchain is divided.

<br/>

<p align="center">

  <img src="/public/protocol/blockformat-4.png" alt="Alt Text" width="650" height="325">
</p>

<br/>

The blockchain starts in epoch 0, with an election macro block which is the genesis block. The genesis block results from a hard fork on the Nimiq PoW blockchain. It is a hard-coded block, meaning that it wasn’t produced by validators and is part of the source code, unlike the rest of the blocks in the blockchain, which are produced and proposed by validators.

The genesis block has the same structure as an election macro block, with a few exceptions:

- The initial random seed is randomly generated by employing a random number generator.
- Both parent election hash and parent hash fields are empty since there isn't any block behind the genesis block.
