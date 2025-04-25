# Validators

Validators are the block producers of PoS blockchains. They are responsible for processing and validating transactions, block validation, and maintaining the integrity of the network. Their primary function is to preserve the network's consensus by agreeing on the current state. By maintaining consensus and actively participating in the network, validators earn rewards in the form of transaction fees and block rewards.

However, any attempt to undermine the consensus, such as through misbehavior or malicious actions, results in punishments, including burning their rewards and/or jailing, effectively removing them from network participation for a defined period.

To become a validator in the Nimiq blockchain, a node must have a Nimiq wallet and create a validator node. A minimum deposit of 100 000 NIM is required to ensure the validator remains active, prevent block production delays, and discourage malicious behavior. This deposit also discourages the creation of validator accounts that could be abandoned and take up unnecessary network resources.

Each validator has its own account. Once the node sends a transaction to create an account in the staking contract as a validator, the following data is associated with the validator:

| Data | Type | Description |
| --- | --- | --- |
| `address` | `Address` | The unique address of the validator, used for creating, updating, or deleting the validator |
| `signing_key` | `SchnorrPublicKey` | Key used to sign micro blocks |
| `voting_key` | `BlsPublicKey` | Key used for voting on skip blocks and macro blocks |
| `reward_address` | `Address` | Address where block rewards are sent |
| `signal_data` | `Option<Blake2bHash>` | Optional field for chain upgrades or other coordination among validators |
| `total_stake` | `Coin` | Total stake assigned, including validator’s deposit and stakers’ delegated funds |
| `deposit` | `Coin` | The validator's own deposit; can be decreased by fees from failed transactions (see [transactions](https://www.nimiq.com/developers/learn/protocol/transactions)) |
| `num_stakers` | `u64` | Number of stakers delegating to this validator |
| `inactive_from` | `Option<u32>` | Block height at which the validator becomes inactive |
| `jailed_from` | `Option<u32>` | Block height at which the validator was jailed. Takes immediate effect to prevent fund removal |
| `retired` | `bool` | Indicates if the validator is retired, in which case it can only delete |

## Transactions

Validators interact with the network by sending various transactions, each designed to manage their status, update data, or change their state deliberately. These transactions include creating a new validator, updating its details, and managing states such as deactivation, reactivation, or retirement. Receipts are issued to authenticate each transaction, ensuring transparency and security. Additionally, if one or more blocks are reverted, these transactions can also be reverted. Below, we describe each transaction and its impact on the validator’s lifecycle.

### Create

Creates a new validator with an initial deposit that equals the validator's stake. The deposit is locked in the contract and can only be retrieved by deleting the validator. Validators must provide a signing key, voting key, reward address, and optional signal data.

### Update

Allows the validator to update details such as the signing key, voting key, reward address, and signal data. The validator must be active to apply these changes.

### Deactivate

This transaction moves the validator to an inactive state, where it no longer participates in block validation. Deactivation is scheduled to take effect at the next [election block](https://www.nimiq.com/developers/learn/protocol/block-format#macro-blocks), meaning that the validator continues to be active until the next scheduled election. Deactivation is a necessary step before a validator can be retired or deleted.

Moreover, if a validator remains offline for an extended period, it is deactivated and loses any rewards for the time it remains inactive.

### Jail

A validator is jailed immediately after an equivocation proof is submitted accounting for the misbehavior, such as double-signing blocks or attempting to fork the chain. The jailing process also deactivates the validator if it is not already inactive. The validator remains jailed until the jailing period is served, ensuring it cannot participate or tamper with its funds during this time.

### Reactivate

A validator can send this transaction to reactivate from the inactive state. Once the punishment period has ended (whether penalized for delaying block production or jailed), or if the validator is inactive for other reasons, this transaction reactivates the validator. The validator must meet certain conditions to be reactivated:

- Must be inactive
- Must not be retired
- Must not be jailed at the time of reactivation

Reactivation restores the validator's ability to participate in block validation and earn rewards. Note that this transaction is unnecessary if the validator has the `automatic_reactivate` setting enabled.

### Retire

Retiring a validator is an irreversible action that prevents further participation. It is the first step in the process of deleting a validator. Once a validator is retired, it cannot be reactivated. Retirement involves transitioning the validator to an inactive state, if it is still active, and preparing it for eventual deletion.

### Delete

This transaction permanently removes a retired validator from the network and returns the validator's deposit. A validator can only be deleted after completing a cooldown period and if all delegations have been withdrawn. If there are still stakers, a tombstone record is created to track the remaining stake until all stakers withdraw their funds. Tombstones ensure that stakers can retrieve their stake even after the validator is no longer active, safeguarding the network’s economic integrity.

### Additional Considerations

1. **Jailing:** Even when jailed, validators must continue participating in specific votes (skip blocks and macro blocks) to fulfill the 512 votes requirement and maintain network stability
2. **State Transition Delays:** Most state changes, especially those involving deactivation and reactivation, align with election blocks to prevent disruption during the epoch
3. **Finality on Retirement:** Once a validator enters the retired state, it cannot revert to any other state except deletion, ensuring a straightforward exit process from active validation.

### Punishments

If a validator delays block production, the **penalty** is the burning of rewards for that specific block, reducing the validator's earnings. For more severe offenses, validators face **jailing**, which locks them out of participation for a defined period. During this lock-up period, validators cannot participate in block validation, though they may still be required to participate in voting until the end of the epoch. Validators can only return to active status once the jailing period is served. For more detailed information on punishments, refer to [Nimiq's punishments documentation](https://www.nimiq.com/developers/learn/protocol/punishments).

## States

<img class="object-contain max-h-[max(80vh,220px)]" src="/assets/images/protocol/validator-state.png" alt="validators states" />

**Active:** Actively participating in block validation and earning rewards

**Inactive:** Temporarily not participating in validation but can be reactivated

**Jailed:** Punished for severe misbehavior, temporarily banned from block production, but may still need to participate in voting (skip blocks and macro blocks)

**Retired:** Marked for permanent inactivity and pending deletion

**Deleted:** Permanently removed from the network, but if there are stakers still associated with the validator, a tombstone is created to manage the remaining stake and stakers until they are cleared

## Validator Exit Process

Removing a validator is a process that ensures the network has time to detect and report any misbehavior.  
The following table outlines each transaction involved and the conditions under which they take effect:

| **Transaction** | **Description** | **Effective Timing** | **Notes** |
| --- | --- | --- | --- |
| **Deactivate** | Marks the validator as inactive. | Takes effect at the start of the next epoch. | Validator cannot be elected in the next epoch. Triggers the reporting window, which lasts until the end of the next epoch (current + 1). |
| **Retire** | Marks the validator as retired. Required before deletion. | Can be submitted after the reporting window ends. | **Irreversible.** Once retired, validator cannot return to active state. |
| **Delete** | Deletes the validator and returns the 100'000 NIM deposit. | After retirement and once all funds are withdrawn. | Only allowed after the reporting window ends. If stake remains, a tombstone record manages withdrawals. |

::: info Note
If the validator has active stakers at the time of deletion, a tombstone is created to allow those stakers to update their validator or withdraw their funds.
:::
