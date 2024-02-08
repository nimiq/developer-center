# Block format

The Nimiq Proof-of-Stake consensus algorithm has micro and macro blocks. Validators produce micro blocks and propose macro blocks. Both types of blocks have different functions in the blockchain. Micro and macro blocks are divided into three sections: header, body, and justification.

<br/>

- Header: Contains data of the block itself and commitments to the body and state of the blockchain.
- Body: The part of the block where transactions or data regarding the staking contract is stored, depending on whether it is a micro or macro block.
- Justification: Includes necessary data to make the block valid according to the consensus rules and verify the block producer or multi signature.

<br/>

### Micro Blocks

Micro blocks contain user transactions, and each micro block is produced and signed by a validator according to the validator selection. There is also another type of micro block, that is produced when there is a delay in the block production - a [skip block](skip-blocks.md).

<br/>

**Micro header**

| Data field | Description |
| --- | --- |
| `version` | The block’s version number. A change in the version number implies a hard fork. |
| `block_number` | The block’s number. |
| `timestamp` | The block's Unix time with millisecond precision. |
| `parent_hash` | The hash of the preceding block's header (micro or macro). |
| `seed` | The block’s seed. Derived from the preceding block's seed, utilizing the validator key of the block producer, following the algorithm specified in [VXEdDSA](https://signal.org/docs/specifications/xeddsa/#vxeddsa/) |
| `extra_data` | Field reserved for arbitrary data. |
| `state_root` | The root of the Merkle tree representing the blockchain state, acting as a commitment to its current state. |
| `diff_root` | The root of the trie diff tree proof, authenticating the output of the RequestChunk. |
| `body_root` | The root of the Merkle tree representing the body of the block, serving as a commitment to its content. |
| `history_root` | The root of a Merkle Mountain Range covering all transactions in the current epoch. |

<br/>

**Micro body**

| Data field | Description |
| --- | --- |
| `equivocation_proofs` | Equivocation proofs for this block. This field could be empty as equivocation proofs aren't present in every block. |
| `transactions` | Contains all the transactions of the block. This field might be empty in blocks without any transactions. (see [skip blocks](skip-blocks.md)). |

<br/>

**Micro justification**

| Data field | Description |
| --- | --- |
| `Micro(Signature)` | Block producer's signature. |
| `Skip(SkipBlockProof)` | Contains aggregated signatures for a skip block. This field might be empty as skip blocks might not occur in a batch. |

Note that only one of those is added as justification. The block producer signs the block when the micro block is produced within the expected time. But when the micro block isn't produced in the expected time, a `SkipBlockProof` is added instead.

<br/>

### Macro Blocks

There are two types of macro blocks: election and checkpoint. A new validator list is elected in every election macro block, and the staking contract is updated accordingly. Macro blocks are produced with Tendermint, where a random validator is chosen to propose the new macro block. User transactions are not included in macro blocks.

<br/>

**Macro header**

| Data field | Description |
| --- | --- |
| `version` | The block’s version number. A change in the version number implies a hard fork. |
| `block_number` | The block’s number. |
| `round` | The specific round where the block was proposed. |
| `timestamp` | The block's Unix time with millisecond precision. |
| `parent_hash` | The hash of the preceding block's header (micro or macro). |
| `parent_election_hash` | The hash of the header from the previous election macro block |
| `interlink` | A vector of hashes that establishes a connection to previous blocks divisible by 2^x, facilitating proof of a series of transactions. |
| `seed` | The block’s seed. Derived from the preceding block's seed (micro or macro), utilizing the validator key of the block producer, following the algorithm specified in [VXEdDSA](https://signal.org/docs/specifications/xeddsa/#vxeddsa/) |
| `extra_data` | Field reserved for arbitrary data. |
| `state_root` | The root of the Merkle tree representing the blockchain state, acting as a commitment to its current state. |
| `body_root` | The root of the Merkle tree representing the body of the block, serving as a commitment to its content. |
| `diff_root` | The root of the trie diff tree proof, authenticating the output of the RequestChunk. |
| `history_root` | The root of a Merkle Mountain Range covering all transactions in the current epoch. |

<br/>

**Macro body**

| Data field | Description |
| --- | --- |
| `validators` | Contains details of the upcoming validator set, including their public keys, reward addresses, and assigned slots. This field is present only when the macro block serves as an election block. |
| `next_batch_initial_punished_set` | A bitset denoting which slots are forbidden from producing micro blocks or proposing macro blocks in the subsequent batch following this macro block. This information is essential for nodes that don’t have the state as it's usually computed within the staking contract. |
| `transactions` | The reward related transactions of this block. |

<br/>

**Macro justification**

Checkpoint or election macro blocks contain a `TendermintProof` as justification.

| Data field | Description                                                             |
| :--------- | :---------------------------------------------------------------------- |
| `round`    | The specific round where the block was accepted.                         |
| `sig`      | Aggregated signatures of the validators that have signed precommit for the block. |

<br/>

The following figure demonstrates the connection between a macro block and a micro block. Every block, macro or micro, is connected to the previous one by the parent hash and the random seed.

<br/>

<p align="center">
  <img src="/assets/images/protocol/macro-micro.png" alt="Alt Text" width="500" height="250">
</p>

<br/>

### Blockchain format

The blockchain is divided into batches and epochs:

Batch: The interval between two macro blocks. A batch consists of several micro blocks, closing on a macro block.

Epoch: The interval between two election macro blocks marks an epoch. It starts with the first micro block after an election macro block and ends at an election macro block, including multiple micro blocks and checkpoint macro blocks in between.

<br/>

The following figure illustrates how the blockchain is divided.

<p align="center">

  <img src="/assets/images/protocol/block-struct-3.png" alt="Alt Text" width="1000" height="500">
</p>
