# Staking Contract

The staking contract is a special contract serving as a central repository for the data related to validators, stakers, and the staking process. It is initially hardcoded at the genesis block, and thereon, any modification in the balances or state of validators and stakers is updated at every block by validators. Any node on Nimiq's blockchain with a wallet and stake can propose to become a validator or a staker.

The **staking contract** includes three fields:

::: code-group

```rust
pub struct StakingContract {
    pub balance: Coin,
    pub active_validators: BTreeMap<Address, Coin>,
    pub punished_slots: PunishedSlots,
}
```

:::

## Balance

The `balance` field represents the total amount of coins staked within the `StakingContract`. This includes not only the validators' deposits but also the coins delegated by the stakers.

## Active validators

Validators marked as active. All the validator nodes in the network that *can* be elected as block producers for upcoming epochs, as well as the ones that are actively participating in the block production.

This set is stored in a binary tree map that efficiently organizes active validators and their corresponding balances. This structure ensures that only eligible validators, those qualified to receive slots, are included. In cases of misbehavior, validators can either be deactivated or jailed based on the severity of their offense, leading to their removal from this set. Nonetheless, a validator can be excluded from this set and continue to participate in block production until the epoch concludes, as there is no mid-epoch voting process to substitute the validator slots necessary for the consensus.

## Punished slots

The slots marked as punished. Depending on the nature of their misbehavior, validators may have either one slot or all slots marked as punished. The `punished_slots` set keeps track of these punished slots for both the current and previous batch.

In the reward distribution phase, the staking contract cross-verifies slots from the previous batch's `punished_slots` to identify and burn rewards linked to those specific slots. Additionally, at every macro block, the staking contract determines the block producers for the next batch. Slots marked as punished are excluded from consideration in the selection of block producers for subsequent batches.

## Staking contract account

The staking contract is part of the AccountsTrie and serves as a subtrie containing different account types, each responsible for storing specific staking-related data. The distinct path to each account simplifies navigation within the staking contract subtrie, enabling an easy access to various pieces of information. The subtrie follows the outlined format:

![Alt Text](/assets/images/protocol/staking-contract-path.png)
