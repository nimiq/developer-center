# Penalties

Validators are responsible for ensuring the security and stability of a blockchain network. They are rewarded for participating and penalized if they fail to contribute according to the consensus. Misbehaving always results in either losing the rewards or going to jail, where the validator gets locked up for a period and loses the rewards. The types of penalties are divided based on the severity of the misbehavior.

<br/>

Our blockchain deals with misbehavior based on the nature of the offense:

- A delay in block production constitutes a minor offense. In such cases, the associated slot is deactivated, and the rewards are burned. For more severe offenses like forking, double voting, or double proposals, the validator is jailed. All validator slots are deactivated for a set period, and rewards for these slots are burned.

<br/>

> 💡 Burned rewards are sent to the burned address: NQ07 0000 0000 0000 0000 0000 0000 0000 0000. Note that no one _can_ or _will_ use the funds sent to this address.

<br/>

### Block production delay

A delay in block production is categorized as a minor offense. Such delays can occur due to intentional or unintentional circumstances, such as unexpected internet connectivity issues. Determining the intent behind the delay can be challenging.

<br/>

Validators hold multiple slots and produce micro blocks with one slot at a time. As a consequence of delaying the block production, rewards for the corresponding slot are burned. The slot is added to the `punished_slots` set, which remains for the current batch and the next one, to account for reward distribution at the next batch. This set ensures accurate reward distribution during the upcoming batch.

<br/>

The misbehaving slot gets deactivated but can reactivate itself one block after committing the offense. While delaying block production is not considered a severe misbehavior due to replacing the missing block with a skip block, the rewards for the misbehaving slot are burned regardless as a penalty.

<br/>

### Jail

When a validator acts maliciously on purpose, it gets jailed. Getting jailed can happen for a variety of malicious behaviors, including:

- Creating a fork or continuing to produce on a fork
- Making a double proposal on Tendermint
- Casting more than one vote per slot on Tendermint proposals

<br/>

Any rational validator that witnesses one of these behaviors can report it by including a proof in a micro block. Once the proof that attests to the misbehavior is submitted, the validator is immediately jailed.

<br/>

As these are more severe offenses that interfere with the blockchain, the consequences are also more severe. When a validator is jailed:

- It is immediately removed from the `active_validators` set, and all its slots are marked as penalized in the `punished_slots` set in the staking contract.
- It gets immediately locked for 8 epochs, which means it cannot participate in the consensus during that period and inhibits it from withdrawing its deposit.
- It loses its rewards for the jail period.

<br/>

While validators shift from active to jailed when proof of the offense is submitted, the staking contract sets are only updated at different periods. The `active_validators` set changes at every election block, where the validators list is renewed; the `punished_slots` set changes at every batch.

<br/>

The validator is marked as jailed, but as there is no replacement for its slots, it is still expected to participate in specific tasks, which is the case for voting in Tendermint proposals. Once the next election comes in, the malicious validator will not be considered for election for the following epochs.

<br/>

Once the validator is out of jail, it moves to the inactive state. Validators that have within their configuration the `automatic_reactivate` feature on they will reactivate upon release. Furthermore, even if the validator activates itself right after being released, it will only be considered again to participate in the consensus at the next epoch.

<br/>

If a validator wants to withdraw its deposit after being released, it can do so immediately if it does not reactivate. If the validator becomes active again, it must be inactive for a set of time that accounts for possible new misbehaviors.

<br/>

**Reporting window**

There is a reporting window for when validators can submit such proofs. From the block after the offense up to the end of the epoch after the next election block. The reporting window corresponds to the period a validator must be in the inactive state to be able to delete its account and withdraw its funds.

<br/>

**Impact on stakers**

The penalties also affect the validator's stakers, as the locking period for the staker's stake aligns with the validator's locking period. Stakers can either maintain their stake with their validator or remove it once the jail period ends if their stake remains inactive.