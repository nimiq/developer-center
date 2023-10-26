# Overview

Nimiq Proof-of-Stake is the novel consensus protocol from Nimiq, inspired by speculative BFT algorithms. This document intends to provide a summary of our protocol and its features. We explain how and who produces blocks, the format of the blockchain, the behavior modes, and how we handle misbehaving validators.

<br/>

Nimiq PoS is a proof-of-stake blockchain that, instead of miners mining blocks, as in the Nimiq 1.0 blockchain, we have validators that produce and verify blocks. A recurring assumption of PBFT algorithms is taking into account the presence of malicious validators. In our algorithm, we assume that out of 3*f*+1 validators, at maximum _f_ are malicious. This assumption allows reaching a consensus among validators to ensure a valid and accurate performance of the blockchain, even if up to f validators fail to respond or act maliciously.

<br/>

### Validators

Any node in Nimiq’s network can propose to be a validator by staking its coins as a deposit. The higher the stake a node has, the higher the chances of getting selected to produce blocks and be a part of the validator list. They get selected according to the [validator selection](slots.md) rules. We have 512 validators per batch ready to produce blocks.

<br/>

### Block format

Our blockchain is composed of micro and macro blocks. Micro blocks are produced by validators and contain transactions, and macro blocks are proposed by validators and mark the end of a batch or epoch. Also, each micro block is produced by a validator, and macro blocks are proposed by a validator through the Tendermint protocol, and these latter blocks offer finality.

<br/>

There are two types of macro blocks: checkpoint and election. The validator list remains the same in a checkpoint macro block, and no election of validators occurs. In an election macro block, a new validator list is elected to produce the blocks of the next epoch. Ultimately, a batch is the time between two checkpoint macro blocks, and an epoch is the interval between two election macro blocks.

<br/>

### Behavior modes

We assume the presence of malicious validators, we consider two modes of behavior: optimistic mode and pessimistic mode.

<br/>

In the optimistic mode, validators don’t misbehave and produce blocks accordingly to the protocol rules. In this mode, block production occurs without delay or attempt to tamper with the chain.

<br/>

On the other hand, in the pessimistic mode, we consider malicious validators. This type of validator can tamper with the blockchain by:

- Delaying the block production
- Attempt to create a fork in the chain
- Produce invalid blocks

<br/>

Misbehaving validators get punished and get added to the punishment sets. In the pessimistic mode, the blockchain resumes its normal behavior in three ways:

- Invalid blocks are ignored.
- Once a rational validator adds a skip block in place of a micro block, the blockchain can resume its behavior.
- Forks are reverted once a rational validator submits a fork proof.

<br/>

### [Punishments](punishments.md)

Since our protocol assumes misbehaving validators, we structured measures to punish malicious acts:

1. When a malicious validator doesn’t produce the micro block in the expected time, a validator from the validator list can add a skip block, shortening the delay. If 2f+1 validators sign the skip block, this block is added, and the misbehaving validator gets punished.
2. If a malicious validator attempts to create a fork in the chain, as soon a rational validator notices the fork, it returns the block production according to the chain selection and submits a fork proof. Then, the misbehaving validator gets punished.

<br/>

Malicious validators get punished by being added to the punishment sets in the staking contract. It gets its rewards of the batch slashed at the next batch and disabled to produce blocks until it sends an unparked transaction.

<br/>

Note that skip blocks and forks can only occur in micro blocks since macro blocks are proposed via Tendermint, and if a proposal isn’t received in _t_ time, a new validator is elected. Plus, macro blocks have finality and thus are forkless.
