---
links:
  - bgColor: green
    icon: i-nimiq:cubes
    title: Blockchain Structure
    description: Everything about micro and macro blocks
    href: 'protocol/protocol/block-format'
    layout: lg
  - title: Validators and Stakers
    description: Explore the pillars of Albatross PoS
    href: 'protocol/protocol/validators/validators'
  - title: Slots
    description: Learn how slots are assigned to validators
    href: 'protocol/protocol/validators/slots'
  - title: Staking Contract
    description:  The repository of data for validators, stakers, and staking
    href: 'protocol/validators/staking-contract'
---

# Nimiq Proof-of-Stake

Welcome to the Nimiq Proof-of-Stake documentation! Introducing our new consensus protocol, Albatross. This page provides a brief yet comprehensive overview of our protocol and its unique features.{.nq-subline}

<NqGrid f-my-xl :cards="$frontmatter.links"  />

## Validators and Stakers

[Validators](/protocol/protocol/validators/validators.md) play a crucial role in the Proof-of-Stake consensus mechanism as block producers. In our algorithm, we assume that out of 3f+1 validators, at maximum f are malicious. This assumption ensures a valid and accurate performance of the blockchain, even if up to f validators fail to respond or act maliciously. They signal their participation by allocating stake, increasing their chances of being elected. The stake amount influences the number of slots assigned to a validator. [Slots](/protocol/protocol/validators/slots.md) determine block producers, with random selection ensuring fairness.

Any node in Nimiq's network can propose to be a validator by staking its coins as a deposit. The higher the stake a node has, the higher the chances of getting selected to produce blocks and be a part of the validator list. They get selected according to the validator selection rules. We have 512 slots per batch ready to produce blocks.

Participants lacking the resources or expertise to become validators can delegate funds as [stakers](/protocol/protocol/validators/stakers.md). Validators produce and validate blocks on behalf of stakers, who receive rewards even if offline. Validator rewards for stakers are processed off-chain. Stakers face the same punishment of their validator in case of misbehavior.

## Blockchain Structure

### Epochs and Batches

The Nimiq PoS blockchain is organized into [epochs and batches](/protocol/protocol/block-format.md#blockchain-format). An epoch, comprising multiple batches, ends with a closing election macro block. While validators remain constant within an epoch, the election macro block selects new validators for the next epoch.

### Micro Blocks

Produced by selected validators, [micro blocks](/protocol/protocol/block-format.md#micro-blocks) contain user transactions. A skip block may replace a delayed micro block, signed by over two-thirds of validators in the current epoch.

### Macro Blocks

After a set number of micro blocks, a [macro block](/protocol/protocol/block-format.md#macro-blocks) finalizes the batch. Randomly proposed by a leader, macro blocks undergo a two-step voting process. Election blocks provide periodic finality, renewing the validator set, while checkpoint blocks retain the validator set.

## Dealing with Malicious Behavior

Validators earn rewards for contributions and face [punishments](/protocol/protocol/punishments.md#block-production-delay) for consensus violations, varying by severity. Minor offenses lead to deactivation of the responsible slot and burned rewards. Severe offenses result in a [jail](/protocol/protocol/punishments.md#jail) state, where the validator, including all slots, is locked for an extended period, with burned rewards and an inability to be re-elected. The jailing period also affects stakers, as their stake is locked for the duration of the jailing period.
