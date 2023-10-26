# Forks and upgrades

Every blockchain has a protocol built in. If a change in the protocol occurs, it’s called a fork. Thus, a fork refers to any change or upgrade in a blockchain protocol. There are two types of forks: soft forks and hard forks. In this document, we consider forks as upgrades, not as malicious behaviors from any node.

<br/>

A **hard fork** is a non-backward compatible change in a blockchain protocol. This type of change requires all nodes to upgrade to the latest version of the protocol. If some nodes continue to use the old rules of the protocol, the chain splits in two, and a new independent chain is created. In order to continue in the chain upgraded, nodes must accept the new rules.

<br/>

Ultimately, a hard fork may lead to a chain split, diverging a chain into two independent blockchains, which is the case of Bitcoin and Bitcoin Cash. The block size in Bitcoin has a maximum threshold, but a set of nodes decided to increase the block size. Consequently, this resulted in a chain split that led to a new blockchain - Bitcoin Cash.

<br/>

A **soft fork** is a backward-compatible change in a blockchain protocol. Such change doesn't require approval by all the nodes, and the protocol still operates for nodes who assume the old rules and those who assume the new ones. When nodes adopt the upgrade, the blocks produced with the old rules become invalid, but nodes that didn't upgrade their version to the new rules recognize the new blocks as valid. If more than half of the blockchain nodes don’t accept the new rules, no fork occurs. But in contrast, the fork will persist if more than half of the nodes accept the new rules.

<br/>

Retaking the Bitcoin example, if a set of nodes decided to decrease the block size rather than increase it, it would result in a soft fork.

<br/>

### Nimiq’s switch from proof-of-work to proof-of-stake

The Nimiq PoS protocol is the result of a hard fork from a proof-of-work mechanism to a proof-of-stake model. The process was introduced with a soft fork in the Nimiq 1.0 blockchain and a hard fork with three phases in the PoS blockchain. For a detailed explanation of the hard fork, check our [blog post](https://www.nimiq.com/blog/nimiq-20-albatross-hard-fork-preparations/).

<br/>

### Upgrades

In this section, we explore possible upgrades in the PoS consensus protocol and how validators upgrade to a new version. The novel protocol is inspired by the PBFT algorithm. This algorithm chooses consistency over availability, reducing the possibility of a chain split. Since we also choose consistency over availability, it is reasonable to encourage validators to accept upgrades so we can get a consistent validator list. Our protocol introduces upgrades during macro block proposals, where a validator proposes a new version.

<br/>

Any upgrade can only be considered if most validators signal their intention to upgrade their software version. Besides signing the macro block proposal, they must signal their intention in a previous step to upgrade to the new rules. We also consider validators that signal their intent but don't sign the upgrade proposal.

<br/>

To prevent proposing an upgrade and don't get enough votes, the protocol follows these directions:

1. A new client software on-chain proposes an upgrade.
2. The validators that download the new client software gossip their intention to upgrade on-chain.
3. At this point, during the macro block proposal, the leader evaluates if more than 2/3 of validators have signaled their intention to upgrade:
   1. If they signal their intention to upgrade, the macro block leader proposes a block with a new version.
   2. If they didn’t signal their intention to upgrade, the macro block leader proposes a block with the old version.
4. If the macro block leader doesn’t get more than 2/3 of the validators to support the upgrade, a new macro block leader is elected to propose the block, and the new leader proposes a block with the old version rules.
5. If it gets more than 2/3 of the validators to sign the upgrade proposal, the block is produced, and the blockchain is upgraded.

<br/>

We encourage validators to signal their desire for a new version to obtain a solid preview if the blockchain upgrade will happen or not. Our protocol prevents disruptions and enables validators to accept or decline upgrades. If rational validators don't agree with the new rules, they can get considered malicious in the new version.

<br/>

Note that some validators may signal their intention but not sign the proposal for the upgrade. Validators that don’t accept the new version get automatically unstaked, and a new validator list is sampled according to the validator list selection.

<br/>

As a new validator list is sampled, the risk of increasing the fraction of malicious validators is high. Considering and preventing this from happening, we must ensure a validator list with fewer malicious validators pre-upgrade to ensure our security assumption that out of 3*f*+1 validators, at maximum _f_ are malicious post-upgrade. Ultimately, any upgrade can only proceed safely if we reach _f_ as the maximum of malicious validators post-upgrade.
