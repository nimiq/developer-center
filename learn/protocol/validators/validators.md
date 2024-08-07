# Validators

Validators are the block producers of PoS blockchains. They are responsible for processing and validating transactions, block validation, and maintaining the integrity of the network. Their primary function is to preserve the network's consensus by agreeing on the current state.

Validators are rewarded for maintaining the consensus and participating in the network through transaction fees and block rewards. Any attempt to disrupt or infringe on the consensus results in [penalties](/learn/protocol/penalties.md) for the malicious validator.

To become a validator in the Nimiq blockchain network, a node must possess a Nimiq wallet and create a validator node. Our blockchain imposes a minimum deposit requirement of 100 000 NIM. This minimum deposit prevents the validator from getting offline, delaying the block production, or acting maliciously. Furthermore, validator accounts are heavy on data, so the minimum deposit prevents someone from creating a validator account with 10 NIM and forgetting about it.

Each validator has its account. Once it sends a transaction to create an account in the staking contract as a validator, the validator receives the following object:

| Data | Type | Description |
| --- | --- | --- |
| `address` | `Address` | The address and identifier of the validator, which can be used for signing create, update, and delete transactions. |
| `signing_public_key` | `SchnorrPublicKey` | The validator uses the key for signing blocks, as well as signing retire and reactivate transactions. |
| `voting_public_key` | `BlsPublicKey` | The key used by the validator for voting for casting votes on skip blocks and macro block proposals. |
| `reward_address` | `Address` | The designated address where the validator's rewards are directed. |
| `signal_data` | `Option<Blake2bHash>` | An optional data field that facilitates coordination among validators for chain upgrades or other necessary activities through signaling. |
| `total_stake` | `Coin` | The cumulative stake held by the validator, including deposits from its stakers. |
| `deposit` | `Coin` | The initial deposit made by the validator, which can decrease over time due to fees from failing transactions. |
| `num_stakers` | `u64` | The number of stakers delegating to this validator. |
| `inactive_from` | `Option<u32> `| An optional field that indicates whether the validator is marked as inactive. If it is, it includes the block height at which the validator transitioned into an inactive state. A validator can only effectively become inactive during the next election block. Therefore, this field may contain a future block height. |
| `jailed_from` | `Option<u32>` | An optional field that indicates if the validator is jailed. If it is, it includes the block height at which the validator became jailed. Jailing takes effect immediately to prevent the validator and its stakers from withdrawing their total balance. |
| `retired` | `bool` | A flag that indicates whether the validator is in the retired state or not. |

### Transactions

Validators send transactions to update data or change their state deliberately. Receipts are issued authenticating the transaction. Also all the following transactions can be reverted in case of one or more blocks are reverted.

![Alt Text](/assets/images/protocol/validator-state.png)

| Transaction | Description | Starting point | Type of transaction |
| --- | --- | --- | --- |
| Create | Creates a new validator and places it in the active state. It will be eligible for the next election block | Immediately | Incoming |
| Update | Updates the information about a validator (signing key, voting key, rewards address and/or signal data) | Immediately | Incoming |
| Deactivate | Temporarily deactivates a validator and moves it to the inactive state. This action is reversible | Immediately | Incoming |
| Reactivate | Reactivates a validator that has been deactivated; if the validator is jailed, it cannot reactivate | Immediately | Incoming |
| Retire | Transitions a validator into retirement. To delete afterward, retirement must last the reporting window time | Immediately | Incoming |
| Delete | Deletes a validator after the retired state. | After the cooldown period | Outgoing |

- Deactivating the validator can be voluntary or a consequence from delaying the block production. Validators can enable the `automatic_reactivate` feature in their configuration to reactivate automatically upon deactivation at the next block. The activation of this feature is optional and can be turned on or off by the validator.
- Retire is a one-way state; once retired, a validator cannot return to an active state. Retiring the validator is also a prerequisite for deleting it. Validators follow a two-step process to unstake or delete their validator: first, they retire and wait for a cooldown period, and then proceed to delete their validator.
- Jailed validators cannot reactivate until the end of the jailing time. If the `automatic_reactivate` feature is not activated, manual reactivation is required.
- After a validator sends the "delete" transaction, following a cooldown period in the retired state, its address is moved to a tombstone. This process is implemented to account for stakers who may have delegated their coins to the validator. The validator's address remains in the deleted state, residing in the tombstone, until all stakers successfully remove their stake from the validator.

| State | Description |
| --- | --- |
| Active | The validator is marked as active and is either available for selection or is already actively participating in the consensus process |
| Inactive | The validator is marked as inactive, either by choice or due to misbehavior. While marked as inactive in the staking contract and removed from the `active_validators` set, the validator may still be involved until the end of the epoch where the validator list is renewed at the next election block |
| Jailed | The validator has been penalized for violating the network's rules. They cannot participate in the consensus process or earn rewards for 8 epochs. See [jail](/learn/protocol/penalties.md#jail) |
| Retired | The validator has withdrawn their stake from the network after waiting for the reporting window time (spans from the block following the offense to the end of the epoch after the next election block). Once retired, the validator can only delete its validator |

The jailed state deactivates the validator and all of its slots, but as opposed to the inactive state, it is not a deliberate action, and becoming jailed is triggered in an inherent by an equivocation proof reported by any validator.
