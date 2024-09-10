# Migration Technical Details

Nimiq is transitioning from a Proof-of-Work (PoW) to a Proof-of-Stake (PoS) blockchain. This transition is being carried out through a special hard fork, and will happen in three phases: validator registration, pre-staking, and activation.

Each phase operates within a specified block window, enabling transactions to be sent to the network at specific points within the PoW chain.

Our approach consists of targeting a specific block height within the PoW chain designated as the *transition block*. At this block height, the blockchain state will be captured and used to generate the "genesis block" for the PoS chain. Instead of starting from block height 0, the PoS chain will start from the same block number as the transition block, if the conditions covered in this document are met.

<Callout type="info">

Quotes are used around "genesis block" because it refers to the first block of the PoS chain, though not block 0, as is typical for a genesis block. It is also called the transition block since it marks the shift from PoW to PoS.

</Callout>

## Validator Registration Phase

The transition begins by establishing the first validator list for the PoS blockchain within the PoW blockchain. This phase is open to all users, and being a miner is not a prerequisite for registering as a validator. Users must complete a series of transactions to indicate their willingness to become validators.

To become a validator, users need a validator account, a signing key, and a voting key. Additionally, users must pay a minimum deposit of 100 000 NIM. Any amount exceeding the deposit contributes to the validator's stake as long as it exceeds the minimum deposit for stakers of 100 NIM.

This phase involves a series of six transactions to register the validator keys and an additional one to confirm by paying the validator deposit. Users must complete the entire sequence of transactions to have their validator included in the PoS "genesis" block. NIM spent on incomplete registrations will be burned.

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

Users who wish to stake their NIM for the PoS chain launch can send a pre-stake transaction of a minimum of 100 NIM specifying which preregistered validator they want to stake with. Users can only stake for pre-registered validators. Attempting to stake with non-registered validators will result in the loss of the sent NIM. Please note that once NIMs are pre-staked for a pre-registered validator, unstaking is not possible in the PoW chain. Stake can only be recovered when the PoS chain begins.

For convenience, the Nimiq Wallet will feature an interface to facilitate this process. Users can send one pre-stake transaction per address. This feature will provide users with the list of pre-registered validators, allow to select one and send their pre-staking transaction.

After the pre-staking phase, a clear overview of the registered validators and the total allocated stake will be provided.

## Activation Phase

Only pre-registered validators can participate in this phase. The activation phase serves the purpose of executing the transition. At the first candidate block's height (block 3 456 000), if at least 80% of the total stake signals readiness for the transition, the candidate block becomes the transition block. A special activation tool captures and migrates the state of the PoW chain at the transition block, including the transaction history, to generate the "genesis block" for the new PoS chain.

The Activation Phase follows a specific sequence of events:
1. The candidate block is mined at block height 3 456 000, which opens the first activation window.
2. The network waits for 10 confirmations to prevent block reversion.
3. After 10 block confirmations, registered validators capture the state at block 3 456 000 and start generating the PoS "genesis" block.
   Validators generate the "genesis" block deterministically. The resulting block hash should be the same across all validators.
5. After generating the "genesis" block, validators send their readiness transaction, which includes the block hash in the data field.
6. The activation tool monitors readiness transactions within a 24 hour window.
7. If 80% of the total stake (represented by registered validators) signals that they are ready, by sending readiness transactions within 24 hours, the PoS chain starts at block height 3 456 000. If the threshold is not reached, the process automatically moves to the next activation window.
8. If the 80% readiness threshold is not met within the first 24 hours, a new activation window begins, starting with a new candidate block at the block immediately following 1440 blocks or 24 hours from the first candidate block.
9. In subsequent activation windows, the same exact process is repeated. Select a new candidate block 24 hours apart from the previous one by opening a new activation window until the PoS chain starts
10. Once 80% readiness is reached, the PoS client starts, and the once candidate block becomes the transition block, marking the start of the Nimiq PoS blockchain.

#### Readiness and Activation Tool

During the activation phase, validators send a transaction signaling their readiness. Pre-registered validators are encouraged to run the activation tool before the phase begins, as migrating the entire transaction history is time-consuming. An activation tool has been developed to facilitate this process. The tool migrates the history and scans the PoW chain for readiness transactions selecting the valid ones, which come from pre-registered validators who have completed the registration process. The tool also verifies the `data` field to ensure the genesis hash that validators signaled readiness for, matches the candidate transition block generated.

The readiness transaction is as follows:

| Type      | Data                                  |
| --------- | ------------------------------------- |
| Sender    | Validator address                     |
| Recipient | Burn address                          |
| Value     | 0.00001 NIM                           |
| Data      | Hash of the generated `GenesisConfig` |
| Validity  | Activation block window               |

#### Transition Block

The `GenesisConfig` is generated after the candidate block is mined. If the pre-registered validators run the tool before the activation window starts, the tool will have already migrated most of the history by the time the candidate block is mined. After the candidate block is mined and the network reaches 80% readiness, the tool migrates the final part of the history and generates the "genesis" block, which becomes the candidate transition block for the PoS chain.

The activation process activates at the candidate block. At this point, the tool scans and analyzes transactions sent to the PoW chain. The transition starts if at least 80% of the total stake is ready for the specified candidate transition block.

#### Failing 80% of Readiness

If the transition does not succeed within the initial activation window, a new one opens immediately. Each new window starts at the block following the first 24 hours and spans 1 440 PoW blocks (24 hours), repeating until the 80% readiness target is achieved.

## Nimiq PoS

Once 80% readiness is achieved, the PoS chain begins. Any subsequent transaction included in the PoW chain after the candidate transition block is not considered part of the PoS chain. From this point forward, the network operates entirely under the PoS consensus mechanism.
