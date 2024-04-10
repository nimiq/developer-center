# Migration

Nimiq is transitioning from a Proof-of-Work (PoW) to a Proof-of-Stake (PoS) blockchain. This transition is being carried out through a special hard fork, and it will happen in three phases: registration, pre-stake, and activation.

Each phase operates within a specified block window, enabling transactions to be sent to the network at specific chain points - all within the PoW chain.

Our approach consists of targeting a specific block height within the PoW chain designated as the 'transition block.' At this block height, blockchain state will be captured and used to generate the genesis block for the PoS chain. Instead of starting from block height 0, both chains will share the same block number.

The PoS chain starts once the conditions covered in the document are fulfilled.

## Registration phase

The transition begins by establishing the first validator list for the PoS blockchain within the PoW chain. This phase is open to all users. Being a miner is not a prerequisite to enlisting as a validator. Users who wish to participate must indicate their willingness to become validators via a transaction.

To become a validator, users must have three essential components: a validator account, a signing key, and a voting key. Additionally, the user must pay the validator minimum deposit. If a validator chooses to contribute an amount exceeding the specified deposit during the registration phase, any excess will be subject to burning.

This phase involves a series of six transactions to generate the validator account and an additional one to confirm and pay the deposit for the validator. Users must complete the entire sequence of transactions, and failing to do so means the validator won’t be registered, and the entire deposit will be burned.

To facilitate this process, Nimiq is developing a two-mode tool. This tool allows users to generate and send validator registration transactions to the blockchain. Users can either use our tool or send the transactions manually. Please refer to our guide to learn how to use our tools or how to execute the transactions manually.

### Registration transactions

- **Validator generation:** The first 6 transactions contain the encoded validator keys. Each transaction must be sent from the same account of the registering validator, and they include the charge of a nominal fee.
- **Deposit payment and commitment:** The last step is to pay the validator's deposit and commit the registration. Unlike the other six transactions, this one can be sent by any account, where the data field must include the registered validator's address to identify the validator.

The validator generation transactions include the following data:

| Sender | Validator address |
| --- | --- |
| Recipient | Burn address |
| Value | Fee |
| Data | Validator keys encoded in 64 bytes |
| Validity Window | Registration |

A nominal fee is charged as an anti-spam mechanism to avoid overloading the network with registration transactions.

Due to the limited data capacity of a regular Nimiq PoW transaction of 64 bytes, our validator keys, which are larger in size, are serialized and distributed across six transactions. The initial transaction transmits both the signing key and the validator's address. Subsequent transactions are used to progressively send the remainder of the data, particularly the voting key. This serialization process ensures the secure transmission and reconstruction of the complete validator keys. Mind that only the public key is included in the data field of the transaction. The private key component is meant to be stored safely.

The registration window takes place within a specific range of blocks. The count of validators and corresponding deposits is made at the last block of this phase.

![Alt text](/assets/images/protocol/migration-txs.png)

## Pre-stake phase

The pre-stake phase occurs within a specific range of blocks and is exclusive for staking. During this phase, registration transactions are not accepted.

Users wishing to stake their NIM can send a pre-stake transaction specifying which preregistered validator they want to stake. A user can only stake for pre-registered validators. Attempting to stake with non-pre-registered validators will result in losing the staked NIM. Please note that once the NIM is staked for a preregistered validator, unstaking is not possible. There is no way to recover the stake until the PoS chain begins.

For convenience, the Nimiq wallet will feature a button facilitating the process. Users can send one pre-stake transaction per address. This feature will provide access to a public list of pre-registered validators. After the pre-stake phase, a clear overview of the validators and the total allocated stake will be provided.

## Activation phase

Only preregistered validators can participate in this phase. The activation phase serves two primary purposes:

- **Selecting the Transition Block:** Validators target a block with a height corresponding to the next election block as the candidate block for the transition.
- **Executing the Transition:** If, at the candidate block's height, there is at least 80% of the stake ready for the transition, the candidate block becomes the transition block. An activation tool takes charge of capturing the state of the transition block and generating the genesis block for the new PoS chain.

During this phase, validators send a transaction signaling their readiness. The readiness transaction is as follows:

| Sender | Validator address |
| --- | --- |
| Recipient | Burn address |
| Value | Fee |
| Data | Ready |
| Validity Window | Activation |

A migration tool has been developed to facilitate the transition process. This tool scans readiness transactions and selects the valid ones. Valid transactions come from preregistered validators who have completed the registration process according to the abovementioned sequence.

The migration tool activates at the candidate block - the block height aligned with the closest election block corresponding to the PoS chain’s structure. At this point, the tool scans and analyzes transactions sent to the burn address. The transition starts if at least 80% of the total stake is ready.

If the transition does not succeed within the initial activation window, a new one is opened until the 80% readiness target is achieved. The new activation window starts at the block immediately following the candidate block. Each activation window spans 1140 PoW blocks, equivalent to one day.

Once the 80% total stake readiness requirement is reached, the candidate block turns into the transition block. The migration tool captures the state of this block, including the first validator list and allocated stake, and generates the genesis block of the PoS chain. This block marks the beginning of the Nimiq PoS blockchain.

## Nimiq PoS

To ensure the integrity of this process, Nimiq suggests a waiting period of 10 confirmations before the PoS chain officially begins. This precaution is taken into consideration for potential block rebranching.
