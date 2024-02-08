# Security analysis

According to its definition, a blockchain is a decentralized system maintained by multiple participants on the network responsible for securing, recording, and keeping track of data. In a proof-of-stake blockchain, blocks are created by validators that proposed themselves to do such work.

Primarily, we point out a few considerations about the protocol for a consistent understanding of the document:

- Our protocol is inspired by the PBFT algorithm, with several modifications. The main security assumption of our consensus algorithm is that the validator list is composed of 3*f*+1 validators, most _f_ being malicious. This means the network can start failing if the number of malicious validators reaches a higher number.
- Micro blocks are produced, and macro blocks are proposed by validators. Validators are chosen randomly, according to the validator selection. We can't predict which type of validator will be selected to produce or propose the next block.
- Micro blocks contain transactions.
- At every election macro block, a new validator list is elected to produce the blocks of the following epoch.
- Micro blocks can be tampered with, and validators may attempt to delay the block production or create a fork in the chain, trying for a double-spend attack.
- Adding a skip block requires at least two-thirds of signatures from the validator list.
- After being noticed, a fork proof is submitted at any block within the same batch or the following.
- Macro blocks have finality and thus are forkless.

In a decentralized network, data is secure and verified by many nodes that don't necessarily need to know each other. Plus, the existence of many nodes suggests all kinds of behaviors in the network. Nodes are incentivized to work by the blockchain rules and rewarded for it. But some nodes may want to tamper maliciously for their profit.

This document will cover the security analysis of the Nimiq PoS blockchain, presenting the type of actors that can participate in the consensus and its adversaries. We also describe how we handle a possible network partition and, by the end, the finality of blocks based on probabilities and transaction censorship.

As a novel blockchain, providing security is crucial. Therefore, how do we ensure security?

## Adversarial model

A proof-of-stake blockchain relies on validators to produce blocks. Yet, many types of actors might propose as validators: altruistic, honest, rational, and malicious. Both altruistic and honest validators follow the protocol according to the rules. As this is a security analysis, we focus on adversaries that might want to tamper with the blockchain for their benefit, namely, the rational and malicious validators.

Rational validators only follow the protocol for their benefit. This means they will follow the blockchain rules because they get rewarded for their work. But, if many rational validators put their coin as stake together, as in a staking pool, they can attempt to control the block production in their favor. On the other hand, malicious validators deviate from the blockchain rules, trying to tamper with the network by misbehaving.

### Adversaries

We define attacks by adversaries types. An adversary is a malicious individual who attempts to corrupt the expected behavior of the blockchain, such as creating invalid blocks, delaying block production, or forking the chain.

In Nimiq Proof-of-Stake, the probability of an adversary with 1/4 of the total stake controlling more than 1/3 of the validator list is nearly insignificant, as shown in the table below with a validator list with _n_ validators.

![Alt Text](/assets/images/protocol/adversary_probability.png)

**Static adversary**: an adversary that chooses to corrupt a set of fixed nodes in advance but later cannot change which nodes have been corrupted.

A rational adversary wouldn’t tamper with the block production, as by doing so, it would lose the rewards of the batch. But, if a rational adversary could control _f_ validators, it could collude to attack the chain. However, a malicious adversary would tamper with the chain for its benefit, but it needs to control _f_ validators prior.

**Adaptive adversary**: an adversary that selects a set of nodes to corrupt as the protocol is being executed.

An adaptive adversary can corrupt the block production by finding the identity of the following validator slot and corrupting it. The adversary wouldn’t allow the block to be produced by corrupting the validator slot, stopping the protocol from running normally. Validator slots are selected in the production of the previous block. There is also no communication between validators whenever a validator is selected. This case only needs to be considered if the adversary can control _f_ validators. If more than _f_ validators are corrupted, the chain is compromised.

Another way to corrupt the block production is for the adversary to wait its turn, not produce the block but find out who the next slot owner is. The issue here is that it has a timeframe to act because there is a timeout to produce the block. Otherwise, the rest of the list can add a skip block instead, and the malicious validator gets punished. The adversary would have to act in a short timeframe to achieve an attack.

It is essentially the approach beforehand or during the execution that differentiates these two adversaries.

## Network partition

According to the CAP theorem, any distributed network can provide only two of these three guarantees:

- Consistency: when the network splits, the protocol stops running until the whole network is connected in order to achieve consistency.
- Availability: when the network splits, the protocol always returns data, even if the data is not up to date, preserving availability.
- Partition tolerance: the protocol runs according to the consensus rules, even if some data is delayed.

When the network breaks or splits in half, one of the three guarantees must be followed: consistency or availability. Consistency preserves the consensus rules, while availability doesn’t.

A protocol that chooses consistency over availability stops running when data can’t be gossiped among all the nodes in the network, as, for example, a new block has been produced. Whereas a protocol that chooses availability over consistency always returns data, even if the data is inexistent.

As in the PBFT protocol, our protocol favors consistency over availability. When a partition occurs, the network eventually stops as validators can’t communicate with each other, and the blocks produced can't be gossiped about.

If any disruption or split happens in the network, the protocol may continue to operate for a few blocks. Our protocol enables some blocks to be produced, and as soon as consistency is not being achieved, it stops. The following figure represents a simple example of a split network. If half A holds 2*f*+1 rational validators, in this case, three rational validators, they can produce valid blocks.

<!-- TODO: Image not found -->
<!-- ![Alt Text](/assets/images/protocol/network_partition.png) -->

Once the operation returns to normal, the other half accepts the blocks produced, and the network goes back to operating as a whole.

## Probabilistic finality

Probabilistic finality refers to the finality of a block. In Nimiq PoS, macro blocks are produced with Tendermint and thus are final once two-thirds of the validator list agree upon the block proposal. If the first proposal doesn’t get approved, another validator is selected randomly to propose another macro block and so on.

In micro blocks, finality can be achieved after six blocks are produced. The probability of _n_ validator slots being owned by malicious validators decreases one-third in every block produced after forking the chain, following the next equation.

![Alt Text](https://render.githubusercontent.com/render/math?math=P(d)=(\frac{1}{3})^d)

The probability decreases rapidly, as shown in the following table:

![Alt Text](/assets/images/protocol/probability.png)

We also consider forks in micro blocks. According to the chain selection, the main chain is the chain with:

1. The chain with most macro blocks.
2. The chain with the most blocks.

The following figure illustrates a chain. According to the table above and the chain's figure, at block 7, we can state that block 1 is final. Also, a fork occurred in block 8, and in this case, if the following validator is rational, it would not build or continue to produce on a fork. After noticing the fork and submitting a fork proof, it would choose which chain to produce, according to the chain selection rules.

<!-- TODO: Image not found -->
<!-- ![fork in finality.png](/assets/images/protocol//fork_in_finality.png) -->

Note that only a malicious validator would create or build on a fork, given that validators that misbehave get their rewards slashed. Additionally, if the following validators come upon to be malicious after the fork occurred, the fork ends at the next macro block.

## Transaction censorship

Blockchains assume security with many features, one of them being immutability. Immutable means that was is recorded in a block doesn’t get to be changed. If a transaction is published in a block, it stays in the block, one of the main priorities in a decentralized network.

Unconfirmed transactions stay in the mempool until a validator includes them in the blockchain. Once the transaction is included in a block, it can't be reverted. Validators can gossip transactions among the network. As long as a rational validator views the transaction in the mempool, the expected is to be included in a block. Thus, a transaction won't be censored as long as a rational validator is within the validator list.
