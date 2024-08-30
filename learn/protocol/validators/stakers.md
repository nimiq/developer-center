# Stakers

A staker delegates its NIM to a validator, which validates blocks on its behalf. Validators handle the reward distribution off-chain. This document explains how the staking process works, the functions available to stakers, and the conditions and rules that govern these states.

<div class="columns">

<div>

### Stake states

**Active**: Funds actively participating in staking

**Inactive**: Funds temporarily inactive, not actively participating, awaiting either reactivation or retirement

**Retired**: Funds permanently marked for withdrawal, not participating in staking anymore

**Removed**: Funds completely withdrawn from the staking contract

</div>

<div>

### Balances

**Active balance**: The portion of the staker's funds currently used by the validator as stake

**Inactive balance**: The portion of the staker's funds that is not currently being used as stake and is locked for a period or inactive

**Retired balance**: The portion of the staker's funds that exists but is ready to be removed from the staking contract

**Non-retired balance**: The sum of the active and inactive balances

**Total balance**: The sum of the active, inactive, and retired balances

</div>

</div>

### State transitions

| From State | To State | Conditions/Notes |
| --- | --- | --- |
| Active | Inactive | During this period, funds are locked and cannot be moved or withdrawn. The lock-up period accounts for any potential misbehavior by a validator. The released block is the block at which this period ends, and the staker funds are fully released if no jailing occurs |
| Inactive | Active | Immediate transition |
| Inactive | Retired | Can retire a specific amount if leaving a balance greater than the minimum stake in active + inactive. To retire all, move all active + inactive to retired |
| Retired | Removed | Remove all funds in the retired balance; partial removal is not allowed. Funds can only be removed after they have been retired |

Stakers must wait through the reporting window or the remaining jail period of the validator, whichever is longer, to inactivate their funds. The inactive balance can only be released after the lock-up period or the validator's jail period has passed. If the validator is not jailed, stakers must wait for one epoch of reporting window counting from the next election block.

**Examples**

- Suppose a validator has a remaining jail period of 3 epochs and the reporting window is 2 epochs. In that case, the staker must wait for 3 epochs (the longer period) before the funds are released.
- If 1 epoch remains of the jailing period while the reporting window can last up to 2 epochs, the staker must wait for the full reporting window period before the funds are released, as the longest release block prevails.

### Transactions

**Create Staker**

Creates a new staker with a specified address and optional delegation. If no validator is added, the staker is not actively delegating its stake to a validator and thus is not eligible to receive rewards. The initial stake (minimum 100 NIM) is placed in the active balance.

**Add Stake**

Adds coins to the staker’s active balance from any external address. The resulting non-retired funds must meet the minimum stake requirements.

**Set Active Stake**

Sets the desired active stake, which automatically adjusts the inactive balance accordingly. For example, if a staker has 500 NIM and sets the active stake to 300 NIM, the inactive stake will be adjusted to 200 NIM. The inactive balance then becomes locked to account for potential validator misbehavior.

**Update Staker**

Updates the validator address to which the stake is delegated. This process involves several steps:

1. The staker must set the active stake to 0, making all non-retired funds inactive
2. The staker must wait for the inactive balance to be released, which involves waiting for the required period
3. Once the inactive funds are released, the staker can update the validator address
4. Finally, the staker needs to return the inactive stake to active as desired

Alternatively, stakers have an option in their configuration to activate a setting that automatically reactivates their stake after the reporting window time when executing this transaction.

**Retire Stake**

Moves funds from inactive to retired balance, making them eligible for withdrawal. Only inactive funds released (post lock-up period) can be retired. A staker can either retire all the non-retired stake or leave at least the minimum stake in the non-retired balance; otherwise, the transaction fails.

**Remove Stake**

Withdraws the retired balance from a staker's account, removing it from the staking contract. The transaction must remove the entire retired balance; partial removals are not allowed. If the total balance drops to zero, the staker's account is deleted.

Transactions to activate, inactivate, and update stakes only take effect at the next election block. This is because validator balances, which include staker balances, cannot be changed during an epoch. For update and set active stake transactions, the reporting window time begins when the transaction is sent, but the changes to the funds are only reflected in the validator's balance at the next election block.

### Invariants

There is a set of invariants or rules that ensure the transactions mentioned above don't fail. The following table outlines these key invariants and the transactions they affect:

| Invariant | Description | Affected Transactions |
| --- | --- | --- |
| Minimum stake for non-retired balances | Active + inactive balances must be equal to or greater than the minimum stake if the non-retired balance is not zero | Create Staker, Add Stake, Set Active Stake, Retire Stake |
| Minimum stake for total balances | Total balance (active + inactive + retired) must be equal to or greater than the minimum stake if the total balance is not zero | Create Staker, Add Stake, Retire Stake |
| Inactive balance and block height association | An associated block height is required for any inactive balance | Set Active Stake, Update Staker, Retire Stake |
| Validator lock periods | Inactive funds are subject to lock periods based on validator status. If the validator is jailed, the longest period between the reporting window and the jail period applies | Set Active Stake, Update Staker, Retire Stake |

### Edge cases

**Resetting the reporting window**: When a staker updates their inactive stake, the reporting window counter resets. For example, if there were 5 blocks left, it would reset at the next election block plus one epoch. This ensures that any potential misconduct by the validator during the initial period is still accounted for, maintaining the integrity of the staking process.

**Immediate inactivation and** **retirement without a validator**: If a staker does not have a validator associated with them and wants to inactivate and retire their stake, they can do so immediately. Without an associated validator, there is no lock on their funds.

**Removing stake requirements**: A staker can only remove their stake by completely withdrawing all the funds in the retired balance. The staker must first move all desired stake from active to inactive, then retire it before they can remove it. Partial removal from the retired balance is not allowed. However, a staker can retire a specific amount and leave a balance greater than the minimum stake in the non-retired states.

**Waiting period with validator in tombstone**: If a validator is in a tombstone, the staker still needs to wait the reporting window to inactivate their stake.

**Updating staker with jailed validator**: If a staker updates their delegation (with inactive funds) to a new validator that is jailed, they can still convert their funds to active. However, the system treats these funds as if they were attached to the validator when the jailing occurred, so the staker must wait for the release (the longer between the reporting window or the jailed period). The staker’s funds will be considered jailed even if they were inactive when the validator misbehaved.

**Adding stake with zero balance**: If the staker's active and inactive balances are zero and the staker sends an add stake transaction, they must add more than the minimum stake; otherwise, the invariant is violated.
