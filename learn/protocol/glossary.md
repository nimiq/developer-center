# Glossary Nimiq PoS

### **Account**

An account consists of a unique address and the respective balance. Our blockchain offers 4 types of accounts: basic accounts, vesting accounts, HTLC accounts, and staking accounts. Each account has a corresponding key.

### **Address**

The identifier of an account.

### **Aggregated signature**

The outcome of calculating multiple signatures into a single signature. Aggregating signatures reduces the amount of data that several single signatures hold. Signature aggregation is used for signing skip blocks and aggregating votes for Tendermint voting.

### **Albatross**

Nimiq proof-of-stake algorithm. It is an algorithm inspired by the BFT protocol, assuming that 3*f*+1 validators, at maximum *f*, are malicious. Nimiq PoS protocol achieves probabilistic finality by combining micro blocks and macro blocks. Micro blocks are produced and signed by a single validator, while macro blocks mark the end of an epoch and are produced using Tendermint, which ensures finality as they are agreed upon by at least 2f+1 validators.

### **BLS signature**

The BLS signature scheme uses bilinear pairing and elliptic curve cryptography and has many valuable features. In Nimiq PoS, BLS is used for signature aggregation, allowing n signatures to be combined into a single signature, significantly decreasing the required data. Validators generate a public and private key, and each validator uses their private key to produce a signature. BLS signatures allow for efficient signature aggregation, resulting in substantial space savings.

### **Batch**

The interval between two macro blocks, election or checkpoint macro blocks. A batch consists of several micro blocks, closing on a macro block.

### **Block**

A block contains a set of transactions and data attesting to the transactions’ validity. Our blockchain holds 2 types of blocks: micro blocks and macro blocks. Validators are responsible for gathering and adding data to a block based on consensus rules. The block's validity is determined by the data contained within it, and it is added to the blockchain once the network verifies it.

### **Block number**

Block number and block height can be used interchangeably. The block number refers to the block’s position relative to the blockchain, starting at block 0 - the genesis block. The block number of 9 is the ninth block after the genesis block.

### **Body**

Part of the structure of a block. The body contains the block transactions and fork proofs in a micro block, but it can be empty as no transactions or fork proofs may have occurred. In a macro block, data such as punishment sets and validator data are stored in the body.

### **Checkpoint block**

A type of macro block. These blocks mark the end of a batch and maintain the same list of validators selected in the election macro block.

### **Coinbase**

Given our supply formula, the coinbase is the number of new coins printed at the end of a batch.

### **Commitment**

A commitment is a cryptographic primitive that enables a node to commit to a value without revealing it, resulting in less data to the endpoint. The value on which the node committed remains private, but its accuracy can be proven without revealing the value itself. The value is part of the proof, and nodes can verify that the value matches the commitment. In our consensus algortihm, the blockchain uses commitments in three areas: commitments to specific parts of the blockchain, such as transactions in a block and accounts in the current state, state commitments as input to the zero-knowledge proofs in the light sync, and commitments to secret values in our multi-sig scheme. Ultimately, using commitments enables data compaction by using hashes and Merkle trees. For instance, it allows light clients to sync without downloading the entire blockchain while preserving the integrity of the blockchain.

### **Compressed signature**

A compressed signature is a compacted version of a typical digital signature generated from a full signature. The compressed signature provides the same level of security as a full signature while decreasing the storage space of one.

### **Consensus algorithm**

A type of algorithm used to reach an agreement between nodes in a shared state. Nimiq PoS is a consensus algorithm where validators work together to follow the consensus rules, providing accuracy and consistency.

### **Disabled slot set**

A set of slots not eligible to produce blocks due to misbehaving. This is one of the three punishment sets in the staking contract. Validators must send an unpark transaction referring to their disabled slot to resume the block production. We include a disabled set for the previous epoch and another one for the current epoch, as it affects the rewards distribution for a batch; thus, they get their rewards burned.

### **Election block**

A type of macro block. These blocks mark the end of an epoch and is where a new validator list/set is selected from the potential validator set, to integrate the staking contract of the upcoming epoch.

### Entropy

The measure of unpredictability of a random value. Using the entropy of the random seed present in a block, the process involves hashing and generating a new random seed. The more random the value, the higher the entropy. Thus, by taking the entropy of a random seed, a random, unpredictable, and secure value can be produced.

### **Epoch**

The time between two election macro blocks mark an epoch. An epoch starts with the first micro block after an election macro block and ends at an election macro block, including all the micro blocks and checkpoint macro blocks in between.

### **Fork**

A split in the blockchain produced by a malicious validator. A malicious validator can fork the chain by producing two blocks at the same block height, attempting for a double-spend attack.

### **Genesis block**

The designation of the first block in the blockchain - also known as block 0. Developers code it, and validators produce the following blocks. The genesis block determines the initial state of the blockchain, and it's hardcoded by developers. Validators produce the subsequent blocks preceding it according to the rules stated in the genesis block.

### **Header**

Part of the structure of a block. The block’s header contains general data about the block, such as the block number, the timestamp, and the version. Headers include required data to the consensus and commitments to the block. It also connects the current block to the previous one.

### **Inactive validator**

A validator becomes inactive in two cases: when they send a retire transaction or fail to send an unpark transaction before the end of the current epoch after misbehaving. Validators must first become inactive to exit the staking contract. When a validator is inactive, they are not eligible to produce or propose blocks or vote. They are not considered for validator selection, even if they remain in the staking contract.

### **Inherent**

An inherent is a type of data that is intrinsic to the block. Unlike transactions, inherents are applied at specific times and serve different purposes, depending on their type. Inherents can be used to differentiate between a checkpoint block and an election block, for instance.

### **Jailing**

Jailing refers to the validator state characterized by incurring severe penalties, for actions such as forking or continuing on a fork. When a validator is in a jailed state, it is temporarily locked and cannot be re-elected during this period. Additionally, all the validator’s rewards are burned.

### **Justification**

Part of the structure of a block. In micro blocks, the justification contains the information and signature of the validator who produced the block. Whereas in macro blocks, the justification consists of a round of signatures produced through the Tendermint protocol.

### Leader

The proposer selected to make a Tendermint proposal.

### **Lost reward set**

A set of validators that are not eligible to receive the batch rewards due to misbehavior. The lost reward set applies to the current and previous batches, as rewards are distributed with one batch delay to take into account possible misbehaviors.

### **Luna**

The smallest unit of NIM.

### **Macro block**

There are two types of macro blocks: checkpoint macro blocks and election macro blocks. A checkpoint block marks the end of a batch, and the election macro block marks the end of an epoch, where validators are chosen from the validator set. Macro blocks are produced with Tendermint and provide finality as they are constructed upon the agreement of at least 2f+1 validators.

### **Malicious validator**

A validator that intentionally misbehaves, attempting to interfere with the standard consensus of the blockchain.

### **Mempool**

A database where transactions are kept on hold until a validator includes them in a block. Once a validator includes it in a block, a transaction is considered verified and valid.

### **Micro block**

A type of block produced by one validator at a time. Micro blocks include transactions but may also include fork proofs and skip block proofs.

### **NIM**

Nimiq’s native cryptocurrency.

### **Parked validator**

A validator that cannot produce or propose blocks during the current epoch due to misbehavior. To become active again, a parked validator must send an unpark transaction. If a parked validator fails to do so by the end of the epoch, they will be deemed inactive.

### Potential validator

A validator who has staked coins to participate in the consensus but has not yet been included in the staking contract.

### **Proof-of-stake**

A blockchain model where nodes put their tokens as a deposit and get allowed to validate transactions in the blockchain. Nodes are elected proportionally by their stake. A higher deposit increases the probability of a node being selected as a validator.

### **Punishment set**

A set of punishments that consists of the parked set, lost reward set, and disabled slot set. A validator that misbehaves is punished and added to these three sets, disabling it from producing or proposing blocks and affecting the rewards to receive.

### **Random seed**

A seed is present in every block. Random seeds are used in the validator selection to create a random and secure value. The initial random seed is generated at the genesis block, and the subsequent random seeds are generated by implementing the VXEDdSA algorithm instantiated as a verifiable random function.

### **Signature**

A digital signature that authenticates a message by comprising three functions: generate, sign and verify. A node’s private key and a particular message generate a signature. The signature is then verified, given the signature and the node’s public key.

### **Slot**

A validator receives *x* slots when selected to participate in the consensus, distributed in a range. Validators use their slots to produce, propose and sign blocks. The number of slots a validator gets depends on the amount of stake they have deposited in the staking contract.

### Slot owner

The slot selected to produce the current micro block.

### **Skip block**

A type of micro block that doesn’t include the standard micro block data (doesn’t contain transactions) and that is produced in place of a microblock when the slot owner delays the production of the block. Any validator from the validator list can add this block to the chain, which must include a skip block proof.

### **Staker**

A node that doesn’t have the time or resources to be a validator, or chooses not to, can delegate its coins to a validator. Validators then validate blocks on behalf of the staker by using the staker’s coins as joined collateral.

### **Staking**

To lock a deposit in the staking contract. Either a validator stakes its deposit to the staking contract, or a staker does.

### **Staking contract**

A special contract that deals with functions regarding validators, stakers, and staking. The staking contract gathers all the contract data in a single location, keeping track of the validators' balance, validators' list, punishments, and rewards.

### **Supply**

Based on the supply formula, the supply is the number of coins in the blockchain at any given moment. The blockchain has a maximum supply of 21 Billion NIM.

### **Tendermint**

An algorithm implemented to produce macro blocks. Validators are selected as round leaders. The rest of the validator list either agrees on the block proposal or starts a new round with a new leader until the supermajority accepts a block proposal.

### **Transaction**

Activity or request recorded in the blockchain that alters its state. Most transactions send a value from a sender to a recipient that can be either a node, a validator, or contract transactions.

### **Transaction fees**

A small fee charged in transactions. The transaction fees of a batch are calculated at the end of the batch and divided among the validators as part of the rewards.

### **Validator**

Or active validator. Validators are selected to participate in the consensus for each epoch based on the stake they have deposited in the staking contract. The higher the stake, the greater the likelihood of being selected as a validator for the upcoming epoch. Once included in the staking contract, validators can validate blocks, participate in the consensus process, and receive rewards for their efforts.

### Validator list

List of the active validators for the current epoch.

### V**alidator set**

List of all the active and potential validators.
