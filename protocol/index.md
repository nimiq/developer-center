---
links:
  - bgColor: green
    icon: i-nimiq:cubes
    title: Blockchain Structure
    description: Everything about micro and macro blocks
    href: '../protocol/consensus/block-format'
    span: half
  - title: Staking Contract
    bgColor: blue
    icon: i-tabler:settings
    description: The repository of data for validators, stakers, and staking
    href: '../protocol/validators/staking-contract'
    span: half
  - title: Validators
    description: Explore the pillars of Albatross PoS
    href: '../protocol/validators/validators'
  - title: Slots
    description: Learn how slots are assigned to validators
    href: '../protocol/validators/slots'
  - title: Stakers
    description: Learn about delegation and staking participation
    href: '../protocol/validators/stakers'

nimiqFeatures:
  features:
    - title: High Throughput
      description: Achieve 1000+ TPS with lightning-fast 1-second block separation for optimal performance
      icon: i-nimiq:duotone-speedmeter
      iconBgColor: bg-gradient-green
    - title: Energy Efficient
      description: Reduced power consumption compared to traditional Proof-of-Work blockchain systems
      icon: i-nimiq:duotone-network
      iconBgColor: bg-gradient-blue
    - title: Secure
      description: Robust Byzantine fault tolerance with proven 3f+1 assumption for maximum security
      icon: i-nimiq:verified
      iconBgColor: bg-purple
    - title: Scalable
      description: Dynamic validator set with periodic rotation maintains active validator participation
      icon: i-nimiq:duotone-incognito
      iconBgColor: bg-gradient-orange

securityFeatures:
  - title: Liveness
    description: Network continues operating even with f faulty validators
    icon: i-nimiq:duotone-network
    iconBgColor: bg-green
  - title: Safety
    description: Consensus cannot be reached on conflicting blocks
    icon: i-nimiq:verified
    iconBgColor: bg-blue
  - title: Finality
    description: Once consensus is reached, it cannot be reversed
    icon: i-tabler:lock
    iconBgColor: bg-purple
---

# Nimiq Proof-of-Stake

Welcome to the Nimiq Proof-of-Stake documentation! This section introduces our consensus protocol, Albatross, and provides a comprehensive overview of our protocol's unique features.

<NqGrid f-my-xl :cards="$frontmatter.links"  />

## What is Albatross?

Albatross is Nimiq's innovative Proof-of-Stake consensus algorithm designed for speed, security, and efficiency. Unlike traditional PoS systems, Albatross combines the best of Byzantine Fault Tolerance (BFT) protocols with probabilistic finality, achieving thousands of transactions per second while maintaining robust security guarantees.

<NimiqFeatures bg-neutral-0 v-bind="$frontmatter.nimiqFeatures" />

## Validators and Stakers

[Validators](/protocol/validators/validators) play a crucial role in the Proof-of-Stake consensus mechanism as block producers. In our algorithm, we assume that out of 3*f*+1 validators, at most *f* are malicious. This assumption ensures valid and accurate performance of the blockchain, even if up to *f* validators fail to respond or act maliciously. Validators signal their participation by allocating stake, which increases their chances of being elected. The stake amount influences the number of slots assigned to a validator. [Slots](/protocol/validators/slots) determine block producers, with random selection ensuring fairness.

Any node in Nimiq's network can propose to become a validator by staking coins as a deposit. The higher the stake a node has, the higher the chances of being selected to produce blocks and joining the validator list. Validators are selected according to the validator selection rules. We have 512 slots per batch ready to produce blocks.

Participants lacking the resources or expertise to become validators can delegate funds as [stakers](/protocol/validators/stakers). Validators produce and validate blocks on behalf of stakers, who receive rewards even when offline. Validator rewards for stakers are processed off-chain. Stakers face the same punishment as their validator in case of misbehavior.

## Blockchain Structure

### Epochs and Batches

The Nimiq PoS blockchain is organized into [epochs and batches](/protocol/consensus/block-format#blockchain-format). An epoch, comprising multiple batches, ends with a closing election macro block. While validators remain constant within an epoch, the election macro block selects new validators for the next epoch.

### Micro Blocks

Produced by selected validators, [micro blocks](/protocol/consensus/block-format#micro-blocks) contain user transactions. A [skip block](validators/skip-blocks) may replace a delayed micro block, signed by over two-thirds of validators in the current epoch.

### Macro Blocks

After a set number of micro blocks, a [macro block](/protocol/consensus/block-format#macro-blocks) finalizes the batch. Randomly proposed by a leader, macro blocks undergo a two-step voting process. Election blocks provide periodic finality, renewing the validator set, while checkpoint blocks retain the validator set.

## Consensus Mechanism

### Tendermint Integration

Albatross uses Tendermint for macro block consensus, ensuring Byzantine fault tolerance. The process involves:

1. **Proposal Phase**: A leader validator proposes a macro block
2. **Pre-vote Phase**: Validators vote on the proposal
3. **Pre-commit Phase**: Validators commit to the final decision
4. **Finality**: 2f+1 validators must agree for consensus out of a maximum of 512 available slots

### Skip Block Protocol

When a validator fails to produce a micro block on time, any validator can produce a skip block. This ensures network continuity and prevents malicious validators from halting the network.

## Dealing with Malicious Behavior

Validators earn rewards for contributions and face [punishments](/protocol/consensus/punishments) for consensus violations, with severity varying by offense type. Minor offenses lead to deactivation of the responsible slot and burned rewards. Severe offenses result in a [jail](/protocol/consensus/punishments#jail) state, where the validator, including all slots, is locked for an extended period, with burned rewards and an inability to be re-elected. The jailing period also affects stakers, as their stake is locked for the duration of the jailing period.

### Punishment Types

| Offense Type | Consequence | Duration | Validator Status |
|----------------|-------------|----------|------------------|
| **Block Delay** | Slot deactivation + reward burning | Temporary | Slot suspended |
| **Equivocation** | Jail state + all rewards burned | 8 epochs | Fully locked |

## Network Security

<NimiqFeatures :features="$frontmatter.securityFeatures" />

## Getting Started

Ready to dive deeper into the Nimiq protocol? Explore these key areas:

- **[Block Format](/protocol/consensus/block-format)**: Understand how blocks are structured
- **[Validators](/protocol/validators/validators)**: Learn about becoming a validator
- **[Staking Contract](/protocol/validators/staking-contract)**: The central hub for validator and staker data
- **[Network Sync](/protocol/node-sync/)**: Learn about different synchronization methods

## Technical Resources

- **[RPC](/rpc/index)**: Integrate with the blockchain
- **[Web Client](/web-client/index)**: Build browser-based applications
