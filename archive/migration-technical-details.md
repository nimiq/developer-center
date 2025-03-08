# Migration Technical Details

Nimiq is transitioning from a Proof-of-Work (PoW) to a Proof-of-Stake (PoS) blockchain. This transition is being carried out through a special hard fork, and will happen in three phases: validator registration, pre-staking, and activation.

Each phase operates within a specified block window, enabling transactions to be sent to the network at specific points within the PoW chain.

Our approach consists of targeting a specific block height within the PoW chain designated as the *transition block*. At this block height, the blockchain state will be captured and used to generate the "genesis block" for the PoS chain. Instead of starting from block height 0, the PoS chain will start from the same block number as the transition block, if the conditions covered in this document are met.

> [!NOTE]
> Quotes are used around "genesis block" because it refers to the first block of the PoS chain, though not block 0, as is typical for a genesis block. It is also called the transition block since it marks the shift from PoW to PoS.

## Validator Registration Phase

The transition begins by establishing the first validator list for the PoS blockchain within the PoW blockchain. This phase is open to all users, and being a miner is not a prerequisite for registering as a validator. Users must complete a series of transactions to indicate their willingness to become validators.

To become a validator, users need a validator account, a signing key, and a voting key. Additionally, users must pay a minimum deposit of 100 000 NIM. Any amount exceeding the deposit contributes to the validator's stake as long as it exceeds the minimum deposit for stakers of 100 NIM.

This phase involves a series of six transactions to register the validator keys and an additional one to confirm by paying the validator deposit. Users must complete the entire sequence of transactions to have their validator included in the PoS "genesis" block. NIM spent on incomplete registrations will be burned.

Nimiq provides a two-mode tool to generate validator keys and send formatted registration transactions to the blockchain. Please refer to [our guide](validator-registration) to learn how to use the tool and pre-register.

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

The Pre-Staking phase occurs within a specific range of blocks and is exclusive for staking. During this phase, validator registration transactions are no longer accepted.

Users who wish to stake their NIM for the PoS chain launch can send a pre-stake transaction of a minimum of 100 NIM, specifying which pre-registered validator they want to stake with. Any attempt to stake with non-registered validators or incorrect transaction details will result in the loss of the sent NIM. It is critical to follow the instructions exactly to avoid losing funds. Please note that once NIMs are pre-staked for a pre-registered validator, unstaking is not possible in the PoW chain. The stake can only be accessed once the PoS chain begins.

Pre-staking can be done through the [Nimiq Wallet](https://wallet.nimiq.com/), which features an interface specifically designed to facilitate this. The Nimiq Wallet will provide users with a list of pre-registered validators and pools, allow them to select one, and send their pre-staking transaction. Every Address can only pre-stake for one pre-registered validator.

After the pre-staking phase, a clear overview of the registered validators and the total allocated stake will be provided.

## Activation Phase

Only pre-registered validators can participate in this phase. The activation phase serves the purpose of executing the transition, planned to start approximately on **November 19th, 2024**. At the first candidate block's height (block 3'456'000), if at least 80% of the total stake signals readiness for the transition, the candidate block becomes the transition block. A special activation tool captures and migrates the state of the PoW chain at the transition block, including the transaction history, to generate the "genesis block" for the new PoS chain.

The activation phase follows a specific sequence of events, outlined in the following list. The overall process will be explained in more detail afterward.
1. **3 days** before November 19th, validators running the activation tool will begin sending automatic **online transactions** every hour before the first candidate block is mined to signal their online status.
2. The candidate block is mined at the block height 3'456'000, officially opening the first activation window.
3. The network waits for 10 confirmations after the candidate block to prevent block reversion.
4. After the 10 confirmations, pre-registered validators capture the state at block 3,456,000 and begin generating the PoS "genesis" block. Validators generate the "genesis" block deterministically. The block hash generated should be the same across all validators.
5. After generating the "genesis" block, validators send their readiness transactions, which include the block hash in the data field.
6. The activation tool monitors readiness transactions within a 24-hour window.
7. If 80% of the total stake (represented by registered validators) sends readiness transactions within 24 hours, the PoS chain starts at block height 3,456,000, disregarding any blocks mined after this point.
8. If the 80% readiness threshold is not met within the first 24 hours, a new activation window begins, starting with a new candidate block 1,440 PoW blocks (~24 hours) after the first.
9. Validators who do not send readiness transactions by the **5th activation window** will no longer be considered part of the readiness voting process and will be deactivated from the first epoch of the PoS chain. This process ensures that inactive validators are removed from consideration to the required threshold.
10. The activation windows will continue every 24 hours until 80% readiness is achieved. Validators who fail to signal readiness in subsequent windows will be progressively removed until the required threshold is reached, ensuring that only active validators participate in the PoS chain when it starts.
11. Once 80% readiness is reached, the PoS client starts, and the once-candidate block becomes the transition block, marking the start of the Nimiq PoS blockchain.

### Online Transactions and Monitoring

To ensure a smooth activation, pre-registered validators are encouraged to run the activation tool at least 3 days before November 19th. Once the tool is launched, it will send automatic online transactions every hour (costing 1 Luna each) starting 3 days before the first candidate block is mined to signal that the validator is online. These transactions continue until the validator sends the readiness transaction at block height 3'456'000. Validators who run the tool earlier will only start sending these automatic online transactions 3 days before activation.

The purpose of these online transactions is to allow Team Nimiq to monitor which validators are online and ready for the transition. Validators will receive 100 Luna from Team Nimiq to cover the cost of these online and readiness transactions. These transactions help ensure all validators are ready and provide the team with a way to contact those who haven’t shown they are prepared.

### Readiness Transactions

Once the first activation window opens, validators send a transaction signaling their readiness. Pre-registered validators are encouraged to run the activation tool before the phase begins, as migrating the entire transaction history is time-consuming. An activation tool has been developed to facilitate this process. The tool migrates the history and scans the PoW chain for readiness transactions, selecting the valid ones that come from pre-registered validators who have completed the registration process. The tool also verifies the `data` field to ensure the genesis hash that validators signaled readiness for matches the candidate transition block generated.

The readiness transaction is as follows:

| Type      | Data                                  |
| --------- | ------------------------------------- |
| Sender    | Validator address                     |
| Recipient | Burn address                          |
| Value     | 0.00001 NIM                           |
| Data      | Hash of the generated `GenesisConfig` |
| Validity  | Activation block window               |

### Transition Block

The `GenesisConfig` is generated after the candidate block is mined. If the pre-registered validators run the tool before the activation window starts, the tool will have already migrated most of the history by the time the candidate block is mined. After the candidate block is mined and the network reaches 80% readiness, the tool migrates the final part of the history and generates the "genesis" block, which becomes the candidate transition block for the PoS chain.

The activation process activates at the candidate block. At this point, the tool scans and analyzes transactions sent to the PoW chain. The transition starts if at least 80% of the total stake is ready for the specified candidate transition block.

### Ensuring Migration Completion

If the transition does not succeed in the initial activation window, a new window opens immediately, starting from the block after 1,440 PoW blocks (~24 hours). This process repeats every 24 hours until the 80% readiness threshold is reached, or until the 5th window, at which point unready validators will be marked as inactive and will not count towards the 80% readiness threshold.

#### Process Breakdown:

- **First Activation Window**: The process begins on November 19th with the first activation window. This window lasts 24 hours, during which validators must send readiness transactions to reach the 80% readiness threshold.
- **Subsequent Windows (2–5)**: If the 80% threshold is not met during the first window, new activation windows will open every 24 hours, starting with a new candidate block. This process continues for up to 5 windows. Readiness can be achieved in any of these windows, in which case the PoS chain will start immediately.
- **Evaluation at the End of Window 5**: If readiness is still not achieved by the end of the 5th window, validators who have not sent their readiness transactions will be marked as inactive and won't be considered for the 80% readiness threshold. This ensures that only active validators are considered for the migration.
- **Window 6 and Onward**: Starting from window 6, we expect to reach 80% readiness more quickly, as unready validators will have been marked as inactive. This allows the migration process to progress faster, ensuring the PoS chain can launch as soon as possible.

This process guarantees the migration will succeed by excluding inactive validators, ensuring that only active participants contribute to the readiness threshold. By marking unready validators as inactive, the system ensures that the PoS chain can start efficiently. This mechanism is designed to secure completion of the migration, even if initial readiness is not achieved.

## Nimiq PoS

Once 80% readiness is achieved, the PoS chain begins. Any subsequent transaction included in the PoW chain after the candidate transition block is not considered part of the PoS chain. From this point forward, the network operates entirely under the PoS consensus mechanism.
