# Migration Technical Details

Nimiq is transitioning from a Proof-of-Work (PoW) to a Proof-of-Stake (PoS) blockchain. This transition is being carried out through a special hard fork, and will happen in three phases: validator registration, pre-staking, and activation.

Each phase operates within a specified block window, enabling transactions to be sent to the network at specific points within the PoW chain.

Our approach consists of targeting a specific block height within the PoW chain designated as the 'transition block.' At this block height, the blockchain state will be captured and used to generate the genesis block for the PoS chain. Instead of starting from block height 0, both chains will share the same block number.

The PoS chain starts once the conditions covered in this document are met.

## Validator Registration Phase

The transition begins by establishing the first validator list for the PoS blockchain within the PoW blockchain. This phase is open to all users, and being a miner is not a prerequisite for registering as a validator. Users must complete a series of transactions to indicate their willingness to become validators.

To become a validator, users need a validator account, a signing key, and a voting key. Additionally, users must pay a minimum deposit of 100 000 NIM. Any amount exceeding the deposit contributes to the validator's stake as long as it exceeds the minimum deposit for stakers of 100 NIM.

This phase involves a series of six transactions to register the validator keys and an additional one to confirm by paying the validator deposit. Users must complete the entire sequence of transactions to have their validator included in the PoS genesis block. NIM spent on incomplete registrations will be burned.

Nimiq provides a two-mode tool to generate validator keys and send formatted registration transactions to the blockchain. Please refer to [our guide](migration-validators) to learn how to use the tool and pre-register.

### Registration Transactions

- **Validator Registration:** The first 6 transactions contain the encoded validator keys. Each transaction must be sent from the account of the registering validator, and have a value of 1 Luna each.
- **Deposit Payment and Commitment:** The final step of this phase is to pay the validator deposit of 100 000 NIM and commit to the registration. Unlike the other six transactions, this one can be sent from any account, but the data field must include the registered validator's address to identify the validator.

The validator generation transactions include the following data:

| Type      | Data                                          |
| ----------| --------------------------------------------- |
| Sender    | Validator address                             |
| Recipient | Burn address                                  |
| Value     | 0.00001 NIM                                   |
| Data      | Validator keys encoded in 64 bytes, see below |
| Validity  | Registration block window                     |

Due to the 64-byte data limit of a regular Nimiq transaction, validator keys are split across six transactions. The initial transaction transmits both the signing key and the validator's address. Subsequent transactions are used to progressively send the remainder of the data, particularly the voting key. In addition, each transaction is numbered (1-6). This process ensures the secure transmission and reconstruction of the complete validator keys. Mind that only the public keys are included in these transactions. The private key components are meant to be stored safely.

The registration window takes place within a specific range of blocks. The count of validators and their deposits is made at the last block of this phase.

![Structure of validator registration transaction data](/assets/images/protocol/migration-txs.png)

## Pre-staking Phase

The pre-staking phase occurs within a specific range of blocks and is exclusive for staking. During this phase, validator registration transactions are not accepted anymore.

Users who wish to stake their NIM for the PoS chain launch can send a pre-stake transaction of a minimum of 100 NIM specifying which preregistered validator they want to stake with. Users can only stake for pre-registered validators. Attempting to stake with non-registered validators will result in the loss of the sent NIM. Please note that once the NIM are pre-staked for a pre-registered validator, unstaking is not possible in the PoW chain. Stake can only be recovered when the PoS chain begins.

For convenience, the Nimiq Wallet will feature an interface to facilite this process. Users can send one pre-stake transaction per address. This feature will provide users with the list of pre-registered validators, allow to select one and send their pre-staking transaction.

After the pre-staking phase, a clear overview of the registered validators and the total allocated stake will be provided.

## Activation Phase

Only pre-registered validators can participate in this phase. The activation phase serves two primary purposes:

- **Selecting the Transition Block:** Validators target a block height corresponding to the next PoS election block as the candidate block for the transition.
- **Executing the Transition:** If, at the candidate block's height, at least 80% of stake signals readiness for the transition, the candidate block becomes the transition block. A special activation tool captures and migrates the state of the PoW chain at the transition block, along with the transaction history, to generate the genesis block for the new PoS chain.

During this phase, validators send a transaction signaling their readiness. Unlike the previous two phases, the activation tool can be run before this phase begins, as migrating the entire transaction history is time-consuming. The readiness transaction is as follows:

| Type      | Data                    |
| --------- | ----------------------- |
| Sender    | Validator address       |
| Recipient | Burn address            |
| Value     | 0.00001 NIM             |
| Data      | Hash of the generated `GenesisConfig`             |
| Validity  | Activation block window |

An activation tool has been developed to facilitate the transition process. This tool scans the PoW chain for readiness transactions and selects the valid ones. Valid transactions come from pre-registered validators who have completed the registration process according to the abovementioned sequence. Additionally, the tool verifies the data field to ensure that the hash generated by the client matches the actual genesis config hash.

The activation tool activates at the candidate block - the block height aligned with an election block corresponding to the PoS chain’s structure. At this point, the tool scans and analyzes transactions sent to the burn address. The transition starts if at least 80% of the total stake is ready.

If the transition does not succeed within the initial activation window, a new one is opened until the 80% readiness target is achieved. The new activation window starts at the block immediately following the candidate block. Each activation window spans 1440 PoW blocks, equivalent to one day.

Once the 80% total stake readiness requirement is reached, the candidate block becomes the transition block. The activation tool captures the state of the PoW chain at this block, including all accounts, the first validator list, allocated stake, and transaction history, and generates the genesis block for the PoS chain. This block marks the beginning of the Nimiq PoS blockchain.

## Nimiq PoS

To ensure the integrity of this process, Nimiq suggests a waiting period of 10 confirmations before the PoS chain officially begins. This precaution is taken into consideration for potential block rebranching.
