# Overview

::: info

🚧 Work in Progress 🚧
Our documentation is an ongoing project, a dynamic reflection of the evolving blockchain. As we actively update its content, please note that the information provided may undergo changes.

:::

<br/>

Welcome to the Nimiq Proof-of-Stake documentation. Introducing our new consensus protocol, Albatross. This page provides a brief yet comprehensive overview of our protocol and its unique features. Covering key aspects, we provide essential insights into Nimiq's Proof-of-Stake.

<br/>

## **Validators and Stakers**

Validators play a crucial role in the Proof-of-Stake consensus mechanism as block producers. In our algorithm, we assume that out of 3f+1 validators, at maximum f are malicious. This assumption ensures a valid and accurate performance of the blockchain, even if up to f validators fail to respond or act maliciously. They signal their participation by allocating stake, increasing their chances of being elected. The stake amount influences the number of slots assigned to a validator. Slots determine block producers, with random selection ensuring fairness.

<br/>

Any node in Nimiq’s network can propose to be a validator by staking its coins as a deposit. The higher the stake a node has, the higher the chances of getting selected to produce blocks and be a part of the validator list. They get selected according to the validator selection rules. We have 512 slots per batch ready to produce blocks.

<br/>

Participants lacking the resources or expertise to become validators can delegate funds as stakers. Validators produce and validate blocks on behalf of stakers, who receive rewards even if offline. Stakers face penalties if their validator misbehaves, but their stake is secure. Validator rewards for stakers are processed off-chain.

<br/>

## **Blockchain Structure**

### **Epochs and Batches**

The Nimiq PoS blockchain is organized into epochs and batches. An epoch, comprising multiple batches, ends with a closing election macro block. While validators remain constant within an epoch, the election macro block selects new validators for the next epoch.

<br/>

### **Micro Blocks**

Produced by selected validators, micro blocks contain user transactions. A skip block may replace a delayed micro block, signed by over two-thirds of validators in the current epoch.

<br/>

### **Macro Blocks**

After a set number of micro blocks, a macro block finalizes the batch. Randomly proposed by a leader, macro blocks undergo a two-step voting process. Election blocks provide periodic finality, renewing the validator set, while checkpoint blocks retain the validator set.

<br/>

## **Dealing with Malicious Behavior**

Validators face rewards for contributions and penalties for consensus violations, varying by severity. Minor offenses lead to deactivation of the responsible slot and burned rewards. Severe offenses result in a jail state, where the validator, including all slots, is locked for an extended period, with burned rewards and an inability to be re-elected. The jailing period also affects stakers, as their stake is locked for the duration of the jailing period.
