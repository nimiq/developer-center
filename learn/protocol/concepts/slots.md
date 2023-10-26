# Slots

Validators produce and validate blocks in proof-of-stake blockchains. In the Albatross algortihm, each validator receives _x_ slots that will qualify it to participate in the consensus, thus validating blocks. Slots allow validators to produce, propose and sign blocks. The slots are a sort of ticket each validator receives when selected to be in the staking contract. The number of slots a validator gets differs on how much stake validators have staked.

<br/>

At every epoch, a new set of validators is elected to produce, propose, sign and receive rewards. Validators are selected from a list where they have staked their deposit as an incentive to be elected. They can be chosen as part of the validators list for the next epoch from that list.

<br/>

The mechanism for choosing validators is based on their deposit in the staking contract. Therefore, a validator who made a high deposit is more likely to be selected than a validator who made a smaller deposit. Likewise, the amount of slots allocated to each validator also depends on your initial stake. Validators who staked a high stake will receive more slots than those who stake a lower stake.

<br/>

After the validators are selected to be part of the staking contract, they receive slots for two purposes:

- Validators receive a range of slots that enable them to be part of the consensus, vote, and receive rewards for their work. This range of slots of multiple validators results in the validator list of an epoch.
- A reallocation of the above slot range is done to dictate the order that slot owners must follow to produce micro blocks and propose macro blocks.

<br/>

A random seed is used to generate both. The validator list changes at every epoch via macro block proposal, while the reallocation of slot owners happens at every micro block.

<br/>

**Random seed generation**

The initial random seed will be generated at the genesis block given an outside source. Afterward, to generate a random seed for the subsequent blocks, the protocol will lean on the [VXEDdSA](https://www.signal.org/docs/specifications/xeddsa/#vxeddsa) algorithm instantiated as a verifiable random function. Besides producing and proposing blocks, slot owners generate this random seed present in every block. The random seed of the election macro block is used to generate the validator list for the epoch. However, to reallocate the slots and elect the slot owner of each micro block, the random seed used is the one from the previous block.

<br/>

**Validator list**

A new validator list is elected from the active validator set in each epoch. The active validator set is in the staking contract, where the information of the validators is located, such as their addresses and balances. To create the list, we get the validators' addresses, their balances, and the random seed of the election block. Validators are then randomly sampled, proportionally to their balance, using the [Alias method](https://en.wikipedia.org/wiki/Alias_method). The distribution ends when the list completes 512 slots.

<br/>

Lastly, the addresses are ordered alphabetically, creating a slot range for the validators that compresses the validator list. The following figure illustrates hypothetically how the validator slot list is saved, how the validators are ordered, and the range of validator slots each validator owns:

<br/>

<p align="center">
    <img src="/assets/images/protocol/slots.png" alt="Alt Text" width="250" height="125">
</p>

<br/>

**Slot owner list**

A new slot owner list is generated in each block by randomly shuffling the validator list. We generate a random order for the slot owners given the random seed from the previous block and the validator list, resulting in a neat distribution of the validators that will produce or propose the next block. If the first slot owner of the list doesn't produce a micro block or propose a macro block in time, the following slot owner is selected to do so. If the next slot owner doesn't produce or propose in time, another slot owner is selected, and so on.

<br/>

As the slot owner list is reallocated at every micro block, there is no way to predict who will produce the following block, as it can be the same validator for three blocks in a row if the range is wide. For instance, based on figure 1, if slots 151, 170, and 237 were chosen to produce the following three blocks of a batch, the range would fall into validator 4.
