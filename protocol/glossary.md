# Glossary Nimiq PoS

## Account

An account consists of a unique address and the respective balance. Our blockchain offers 4 types of accounts: basic accounts, vesting accounts, HTLC accounts, and staking accounts. Each account has a corresponding key.

## Address

The identifier of an account.

## Aggregated Signature

The outcome of calculating multiple signatures into a single signature. Aggregating signatures reduces the amount of data that several single signatures hold. Signature aggregation is used for signing [skip blocks](#skip-block) and aggregating votes for [Tendermint](#tendermint) voting.

## Albatross

Nimiq Proof-of-Stake algorithm. It is an algorithm inspired by the BFT protocol, assuming that 3*f*+1 validators, at maximum *f*, are malicious. Nimiq PoS protocol achieves probabilistic finality by combining [micro blocks](#micro-block) and [macro blocks](#macro-block). Micro blocks are produced and signed by a single validator, while macro blocks mark the end of an epoch and are produced using Tendermint, which ensures finality as they are agreed upon by at least 2f+1 validators.

## BLS Signature

The BLS signature scheme uses bilinear pairing and elliptic curve cryptography and has many valuable features. In Nimiq PoS, BLS is used for signature aggregation, allowing *n* signatures to be combined into a single signature, significantly decreasing the required data. Validators generate a public and private key, and each validator uses their private key to produce a signature. BLS signatures allow for efficient signature aggregation, resulting in substantial space savings.

## Batch

The interval between two macro blocks, [election](#election-block) or [checkpoint](#checkpoint-block) macro blocks. A batch consists of several micro blocks, closing on a macro block.

## Block

A block contains a set of transactions and data attesting to the transactions' validity. Our blockchain holds 2 types of blocks: micro blocks and macro blocks. Validators are responsible for gathering and adding data to a block based on consensus rules. The block's validity is determined by the data contained within it, and it is added to the blockchain once the network verifies it.

## Block Number

Block number and block height can be used interchangeably. The block number refers to the block's position relative to the blockchain, starting at block 0 - the [genesis block](#genesis-block). The block number of 9 is the ninth block after the genesis block.

## Body

Part of the structure of a block. The body contains the block's transactions and fork proofs in a micro block, but it can be empty if no transactions or [equivocation proofs](#equivocation-proof) have occurred. In a macro block, the body stores rewards related data.

## Checkpoint Block

A type of macro block that marks the end of a batch. Checkpoint blocks maintain the same list of validators that was selected in the previous election macro block and serve as a finality point for the blockchain state between epochs.

## Coinbase

Given our supply formula, the coinbase is the number of new coins printed at the end of a batch.

## Commitment

A commitment is a cryptographic primitive that enables a node to commit to a value without revealing it, resulting in less data to the endpoint. The value on which the node committed remains private, but its accuracy can be proven without revealing the value itself. The value is part of the proof, and nodes can verify that the value matches the commitment. In our consensus algorithm, the blockchain uses commitments in three areas: commitments to specific parts of the blockchain, such as transactions in a block and accounts in the current state, state commitments as input to the [zero-knowledge proofs](#zero-knowledge-proof-zkp) in the light sync, and commitments to secret values in our multi-sig scheme. Ultimately, using commitments enables data compaction by using hashes and Merkle trees. For instance, it allows light clients to sync without downloading the entire blockchain while preserving the integrity of the blockchain.

## Compressed Signature

A compressed signature is a compacted version of a typical digital signature generated from a full signature. The compressed signature provides the same level of security as a full signature while decreasing the storage space of one.

## Consensus Algorithm

A type of algorithm used to reach an agreement between nodes in a shared state. Nimiq PoS uses the Albatross consensus algorithm, which combines micro blocks for fast transaction processing with macro blocks for finality. Validators work together to follow the consensus rules, ensuring network security and maintaining a consistent blockchain state.

## Deposit

The initial amount of NIM that a validator must lock in the staking contract to become eligible for validator selection, which is 100'000 NIM. This is different from the stake amount and serves as a security deposit.

## Double Proposal
The act of submitting two different Tendermint proposals in the same round.

## Double Vote
The act of voting twice for the same block height, at the same round and step of Tendermint.

## Election Block

A type of macro block that marks the end of an epoch. Election blocks are where a new validator list is selected from the potential validator set and integrated into the staking contract for the upcoming epoch.

## Entropy

The measure of unpredictability of a random value. Using the entropy of the random seed present in a block, the process involves hashing and generating a new random seed. The more random the value, the higher the entropy. Thus, by using the entropy of a random seed, a random, unpredictable, and secure value can be produced.

## Epoch

The time between two election macro blocks marks an epoch. An epoch starts with a micro block after an election macro block and ends at an election macro block, including all the micro blocks and checkpoint macro blocks in between.

## Equivocation
An equivocation is when a validator acts maliciously against the consensus protocol. This can involve creating two blocks at the same height, proposing two Tendermint blocks for the same block height, or even voting twice for a proposal during the same round and step.

## Equivocation Proof
An equivocation proof provides evidence of a validator's misbehavior, leading to [jail](#jail) upon proof submission by any honest validator.

## Fork

A split in the blockchain produced by a malicious validator. A malicious validator can fork the chain by producing two blocks at the same block height, attempting for a double-spend attack.

## Fork Proof

Evidence that a validator has attempted to create a fork by producing multiple blocks at the same height. This proof is used to punish malicious validators.

## Genesis Block

The designation of the first block in the blockchain - also known as block 0. Developers code it, and validators produce the following blocks. The genesis block determines the initial state of the blockchain, and it's hardcoded by developers. Validators produce the subsequent blocks following it according to the rules hardcoded in the genesis block.

## Header

Part of the structure of a block. The block's header contains general data about the block, such as the block number, the timestamp, and the version. Headers include required data to the consensus and commitments to the block. It also connects the current block to the previous one.

## Inherent

An inherent is a type of data that is intrinsic to the block and automatically generated by the protocol rather than submitted by users. Unlike transactions, inherents are applied at specific times and serve different purposes, depending on their type. Examples include finalizing an epoch, validator set changes, and other protocol-specific data that helps maintain the blockchain's state and consensus rules.

## Jail

Going to jail refers to the validator's state characterized by incurring severe misbehavior for actions such as forking or continuing on a fork. When a validator is in a jailed state, it is locked for 8 epochs and cannot be re-elected during this lockup. Additionally, all the validator's rewards are burned.

## Justification

Part of the structure of a block. In micro blocks, the justification contains the information and signature of the validator who produced the block. Whereas in macro blocks, the justification consists of a round of signatures produced through the Tendermint protocol.

## Leader

The proposer selected to make a Tendermint proposal.

## Luna

The smallest unit of NIM.

## Macro Block

There are two types of macro blocks: checkpoint macro blocks and election macro blocks. A checkpoint macro block marks the end of a batch, while an election macro block marks the end of an epoch, where validators are chosen from the validator set. Macro blocks are produced using Tendermint and provide finality as they are build upon the agreement of at least 2f+1 validators.

## Malicious Validator

A validator that intentionally misbehaves, attempting to interfere with the standard consensus of the blockchain.

## Mempool

A database where transactions are kept on hold until a validator includes them in a block. Once a validator includes it in a block, a transaction is considered verified and valid.

## Merkle Tree

A tree data structure where each leaf node is a hash of a data block and each non-leaf node is a hash of its children. Merkle trees are used in Nimiq to efficiently verify data integrity and provide compact proofs that specific data is included in a larger dataset. Nimiq uses [Merkle Mountain Ranges](storage/merkle-trees#merkle-mountain-range) (MMRs) for transaction history and [Merkle Radix](storage/merkle-trees) tries for account state management.

## Micro Block

A type of block produced by one validator at a time. Micro blocks include transactions but may also include equivocation proofs and skip block proofs.

## NIM

Nimiq's native cryptocurrency.

## Potential Validator

A validator who has staked coins to participate in the consensus but has not yet been included in the block production.

## Proof-of-Stake

A blockchain model where nodes put their tokens as a deposit and get allowed to validate transactions in the blockchain. Nodes are elected proportionally by their stake. A higher deposit increases the probability of a node being selected as a validator.

## Random Seed

A seed is present in every block. Random seeds are used in the validator selection to create a random and secure value. The initial random seed is generated at the genesis block, and the subsequent random seeds are generated by implementing the VXEDdSA algorithm instantiated as a verifiable random function.

## Recursive ZKP

A zero-knowledge proof that can prove the validity of other zero-knowledge proofs. This allows for efficient verification of long chains of blocks by compressing multiple proofs into a single proof. More on [ZKP and Recursive SNARKs](zkp/ZKP-and-recursive-SNARKs).

## Signature

A digital signature that authenticates a message by comprising three functions: generate, sign and verify. A node's private key and a particular message generate a signature. The signature is then verified, given the signature and the node's public key.

## Slot

A validator receives *x* slots when selected to participate in the consensus, distributed in a range. Validators use their slots to produce, propose and sign blocks. The number of slots a validator gets depends on the amount of stake they have deposited in the staking contract.

## Slot Owner

The slot selected to produce the current micro block.

## Slot Range

The continuous range of slot numbers assigned to a validator. Validators receive slots in sequential ranges, and the size of the range corresponds to their stake amount.

## Skip Block

A type of micro block that doesn't include the standard micro block data (doesn't contain transactions) and that is produced in place of a micro block when the slot owner delays the production of the block. Any validator from the validator list can add this block to the chain, which must include a skip block proof.

## Skip Block Proof

Evidence that a skip block is legitimate and was produced due to a validator's failure to produce a block on time. This proof is required to validate skip blocks and must contain signatures from at least 2*f*+1 validators to be considered valid.

## Staker

A node that doesn't have the time or resources to be a validator, or chooses not to, can delegate its coins to a validator. Validators then validate blocks on behalf of the staker by using the staker's coins as joined collateral.

## Staking

To lock a deposit in the staking contract. Either a validator stakes its deposit to the staking contract, or a staker does.

## Staking Contract

A special contract that deals with functions regarding validators, stakers, and staking. The staking contract gathers all the contract data in a single location, keeping track of the validators' balance, validators' list, punishments, and rewards.

## Supermajority

Supermajority means that at least 2/3 of the total validator voting power must agree on a decision for it to be considered final and valid.

## Supply

Based on the supply formula, the supply is the number of coins in the blockchain at any given moment. The blockchain has a maximum supply of 21 Billion NIM.

## Tendermint

Tendermint is a Byzantine Fault Tolerant (BFT) consensus algorithm used to produce macro blocks. It operates in rounds where validators are selected as proposers based on VRF-based slot assignment. Each round consists of three phases: Propose, Prevote, and Precommit. Validators must reach 2*f*+1 consensus ([supermajority](#supermajority)) at each phase. If consensus isn't reached, the round times out and a new round begins with a new proposer. The algorithm includes a locking mechanism to ensure safety and liveness even with network partitions.

## Transaction

A data structure that represents an activity or request recorded in the blockchain that alters its state. Most transactions transfer NIM from a sender to a recipient, which can be another account, a validator, or a smart contract. Transactions are user-generated included in micro blocks.

## Transaction Fees

A small fee charged in transactions. The transaction fees of a batch are calculated at the end of the batch and divided among the validators as part of the rewards.

## Validator

An active validator is a node that has been selected to participate in the consensus for each epoch based on the stake deposited in the staking contract. The higher the stake, the greater the likelihood of being selected as a validator for the upcoming epoch. Once selected, validators can produce micro blocks, participate in macro block consensus, and receive rewards for their efforts.

## Validator List

List of the active validators for the current epoch.

## Validator Set

List of all the active and potential validators.

## Zero-Knowledge Proof (ZKP)

A cryptographic method that allows one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself. In Nimiq, ZKPs are used for light and full client synchronization.
