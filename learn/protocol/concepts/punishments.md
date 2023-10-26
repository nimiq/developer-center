# Punishments

In Nimiq Proof-of-Stake, we consider two types of misbehaving: when a validator creates or builds on a fork and when a validator delays the block production. Misbehavior always results in the punishment of the validator in question. We consider these validators malicious, as no rational validator profits from getting punished.

<br/>

Misbehaviors are only taken into account during micro block production. Macro blocks are produced upon the agreement of at least 2*f*+1 validators; therefore, these blocks are considered final once pushed into the chain, as they were assembled based on a consensus among the supermajority of the validator list.

<br/>

Malicious validators are punished in three ways:

- forbidden to produce or propose blocks
- burning their rewards
- getting banned from being selected to further epochs

<br/>

> 💡 Burned rewards are sent to the burned address: NQ07 0000 0000 0000 0000 0000 0000 0000 0000. Note that no one _can_ or _will_ use the funds sent to this address.

<br/>

The latter punishment only happens if the malicious validator does not signal its interest in coming back and to get back on participating in the consensus rationally. Also, note that validators cannot produce or propose blocks but can participate in voting for macro block proposals.

<br/>

In order to keep track of which validators are malicious when they misbehave and monitor which ones will have their rewards burned, the staking contract includes a set of punishments for rewards distribution consideration and validator selection. When a malicious validator misbehaves, it will be added to the punishment sets immediately, but it only will take effect from the batch following the misbehavior.

<br/>

Additionally, when a malicious validator delays the block production and a skip block is added in its place instead, the malicious validator is included in the punishment sets immediately. But, when a malicious validator creates two blocks at the same block height, thus creating a fork, the validator will only be included in the punishment sets once a rational validator submits a fork proof attesting the malicious validator's misbehavior.

<br/>

### **Lost reward**

This set determines which slots are not eligible to receive rewards, thus getting their rewards burned. The lost reward set is exclusive to the slots instead of the validator itself. Also, this set is referenced twice, considering the current and previous batches, and it only concerns the rewards.

<br/>

The malicious validator gets clear from this batch automatically the batch right after its misbehavior, but note that this does not necessarily mean this is the only set that considers not receiving rewards. This set is exclusive for burning rewards and not distributing them for not producing any blocks.

<br/>

The reward distribution is made with one batch delay due to the procedure of submitting fork proofs. Fork proofs can be submitted from any validator that notices it from the block after the fork up to the end of the subsequent batch. For that reason, as creating a fork is a malicious behavior, slashing the rewards concerns the current and previous batches. Therefore, validators added to the current lost reward will certainly be included in the last lost reward set of the following batch.

<br/>

For instance, if a malicious validator forks the chain during a batch, and during the same batch, a rational validator includes a fork proof attesting the validator’s misbehavior, the malicious validator receives the rewards for this same batch and only will get its rewards burned in the following one.

<br/>

### **Disabled slots**

This set determines which slots are not eligible to produce and propose blocks, and it is also exclusive to slots and not the validator. As the lost reward set, this is included in the staking contract with the current disabled slots and previous disabled slots.

<br/>

Validators included in the current disabled slots or the previous disabled slots don’t receive the rewards. Not receiving the rewards included in the disabled slot set is different from getting the rewards burned. This slot cannot be considered for reward distribution as a result of being restricted from producing or proposing any blocks within the respective batches.

<br/>

Validators included in the disabled slot set can only be cleared once the subject validator sends an unpark transaction, which will be explored further down the document. If the malicious validator does not send this transaction signaling its intention to return to participate in the consensus, it will be inactivated at the end of the epoch. This is connected to the following set, which can only be reverted once the validator sends this transaction.

<br/>

### **Parked set**

This set determines which validators are parked but not necessarily banned from the block production, thus considered during validator selection. Unlike the lost reward set and disabled slot, this set is for the validator and thus comprises all of its slots.

<br/>

When a validator gets punished, it is marked as parked. A parked validator is between the active and the inactive state. It means it has until the end of the epoch to signal its intention to become active and remove its slots from the disabled slot set.

<br/>

After a period of one epoch, the validator gets inactivated as it did not signal its intention to return and will not be considered for validator selection in the following epochs. This parking mechanism automatically removes offline validators and can differentiate a validator that was momentarily offline from a validator that remained offline.

<br/>

**Unpark transaction**

The unpark transaction allows a validator to signal it is online, can participate in the consensus, and removes its slots from the disabled slot set. This is the mechanism the validator has to prevent being removed from validator election for upcoming epochs.

<br/>

Parked validators have until the end of the epoch to send this transaction, otherwise will be automatically inactivated.

---

In the following figure, we explain three different scenarios where validators have misbehaved and how punishments are addressed:

<br/>

<p align="center">
  <img src="/public/protocol/punishments.png" alt="Alt Text" width="600" height="300">
</p>

<br/>

1. A malicious validator forked the chain at micro block A. Then, a validator submitted a fork proof at micro block B, and the malicious validator sent an unparking transaction at micro block C. Note that this occurrence happened during batch 1. Here is how the protocol handled the punishment:

- After the fork at micro block A, a validator submitted a fork proof at macro block B. At micro block B, the misbehaving slot is automatically added to the lost reward and disabled slot, and the validator gets parked. It is still able to produce blocks until the end of batch 1.
- Once it has sent an unparking transaction at micro block C, it got automatically cleared from the disabled set and parked set and became able again to produce blocks in the next batch.
- At macro block D, the entire lost reward set is cleared.
- In batch 2, it started to produce blocks, but it won't receive the rewards at the macro block H since it was in the lost reward set at batch 1.

<br/>

2. A validator misbehaved at micro block B, batch 1. This validator sent an unparking transaction at the micro block E, batch 2. Here is how the punishment proceeds:

- After the validator misbehaved at micro block B, the slot was added to the lost reward set and disabled slot, and the validator got parked.
- Once the new batch began - batch 2 - the slot got cleared from the lost reward set. But it won't produce blocks in batch 2 since it only got unparked during this batch, and it remains in the disabled set at macro block D.
- The validator sent an unparking transaction at the micro block E, and at that moment, it got cleared from the disabled set and parked set.
- The validator that misbehaved won't receive the rewards of batch 1 at macro block H but will receive the rewards of batch 2 at macro block L.

<br/>

3. A validator misbehaved at micro block B but never sent an unparking transaction.

- After a validator misbehaved at micro block B, it got its slot instantly added to the lost reward set and disabled set, and the validator got parked.
- At block D, the validator got cleared from the lost reward set automatically.
- This validator won't receive the rewards of batch 1 at macro block H or the rewards of the subsequent batches. Either it can produce blocks from the subsequent batch where it got parked.
- It remained parked until the end of the epoch at macro block L, getting inactivated.
