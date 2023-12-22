# Staking Contract

The staking contract is a special contract serving as a central repository for the data related to validators, stakers, and the staking process. It is initially hardcoded at the genesis block, and thereon, any modification in the balances or state of validators and stakers is updated in the staking contract by validators. Any node on Nimiq's blockchain with a wallet and stake can propose to become a validator or a staker.

<br/>

The **staking contract** includes three fields:

```rust
pub struct StakingContract {
    pub balance: Coin,
    pub active_validators: BTreeMap<Address, Coin>,
    pub punished_slots: PunishedSlots,
}
```

### Balance

The `balance` field represents the total amount of coins staked within the `StakingContract`. This includes not only the validators' deposits but also the coins delegated by the stakers.

<br/>

### Active validators

The elected and active validators for each epoch. The use of a binary tree map efficiently organizes active validators and their corresponding balances. This structure ensures that only eligible validators, those qualified to receive slots, are included. In cases of misbehavior, validators can either be deactivated or jailed based on the severity of their offense, leading to their removal from the `active_validators` set.

<br/>

### Punished slots

The slots marked as punished. Depending on the nature of their misbehavior, validators may have either one slot or all slots marked as punished. The `punished_slots` set keeps track of these penalized slots for both the current and previous batch.

<br/>

In the reward distribution phase, the staking contract cross-verifies slots from the previous batch's `punished_slots` to identify and burn rewards linked to those specific slots. Additionally, at every macro block, the staking contract determines the block producers for the next batch. Slots marked as punished are excluded from consideration in the selection of block producers for the subsequent batch.

<br/>

### Staking contract account

The staking contract is part of the AccountsTrie and serves as a subtrie containing different account types, each responsible for storing specific staking-related data. The distinct path to each account simplifies navigation within the staking contract subtrie, enabling an easy access to various pieces of information. The subtrie follows the outlined format:

<p align="center">
  <img src="/assets/images/protocol/staking-contract-path.png" alt="Alt Text" width="800" height="400">
</p>