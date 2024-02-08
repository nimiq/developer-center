# Slots

Validators are selected from the validator set to integrate the following validator list based on their initial stake. Validators that have deposited a higher stake increase their chances of being selected for the upcoming epoch. At the end of an epoch, the block leader proposes a new validator list in the election macro block, including the group of validators eligible to participate in the consensus.

Upon selection, validators are assigned a certain number of slots, which serve as the means to produce blocks. The allocation of slots to a validator depends on the NIM they have deposited in the staking contract. Validators participate in the consensus process by producing micro blocks, proposing and voting for macro blocks, attesting to malicious behavior from other validators, and thus, ensuring an agreement on the current blockchain state.

Validators use their slots in the following way:

- One slot is used to produce one micro block
- One slot is used to propose a macro block
- All validators’ slots are used to vote for a macro block proposal or a [skip block](/learn/protocol/skip-blocks.md)

![Alt Text](/assets/images/protocol/slots.png)

Due to the redistribution of the slot owner list with every micro block, it is impossible to anticipate which validator will be responsible for producing the next block. The same validator may end up producing three consecutive blocks if the range is extensive. For instance, based on the above figure, if slots 151, 170, and 237 were chosen to produce the following three blocks, the resulting range would correspond to validator 4.

Note that whether a validator signs a block with slot x or y, it uses its validator key. Validators don’t have keys per slot but keys per validator.

## Validators list selection

The list of validators for the next epoch is initially chosen in the election block that closes the previous epoch. The block leader generates this list using entropy from the vrf seed of the previous block. The new list contains the validators for the new epoch, along with the distribution of slots for each validator, given a range.

## Slow owner selection

Subsequently, to select the producer of the first block of the epoch, the entropy of the vrf seed of the previous block is used to shuffle the validator list. This slot owner list is randomly generated for every micro block, determining the producer of the upcoming micro block.

## Random seed generation

The vrf seed serves two purposes for validator selection: providing the randomness needed to select validators based on their stake and determining the slot owners for block production. The initial random seed is generated from an external source at the genesis block. Subsequently, for generating random seeds for subsequent blocks, the protocol relies on the [VXEDdSA](https://www.signal.org/docs/specifications/xeddsa/#vxeddsa) algorithm implemented as a verifiable random function. In addition to producing and proposing blocks, validators are also responsible for generating the random seed included in every block. The random seed from the election macro block is used to generate the validator list for the epoch, while the random seed from the previous block is used to reallocate slots and elect the slot owner for each micro block.
