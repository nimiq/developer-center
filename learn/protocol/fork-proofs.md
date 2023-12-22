# Fork proofs

A fork in the blockchain occurs when two blocks are produced at the same block height, resulting in a split in the chain. Malicious validators create forks, mostly to attempt a double-spend attack, and are considered a punishable behavior. We consider both initiating a fork and persisting in producing one as punishable.

<br/>

While we cannot prevent a validator from forking the chain nor acting maliciously by continuing on a fork, we can [punish](penalties.md) such validators. Rational validators would not arbitrarily create a split in the chain, as it is not in their interest to lose their rewards.

<br/>

In Albatross, a malicious validator can only attempt to fork the chain within the micro block production. Micro blocks are produced and signed by one validator at each block height. Whereas macro blocks, produced under the Tendermint algorithm, provide finality, as at least 2*f*+1 validators agreed upon them.

<br/>

Validators produce micro blocks using their slots. When a validator forks the chain, it is the misbehaving slot that gets punished. While a validator may hold multiple slots, only the slot that forked the chain will be penalized.

<br/>

Forks can end in two ways:

- The next block in the chain is a macro block, produced according to the Tendermint algorithm. In this case, at least 2*f*+1 validators must agree on the block proposal before it is added to the blockchain; thus, there is no way for two macro blocks to be produced.
- The next block producer is a rational validator that follows the consensus rules. Rational validators would not produce or continue on a fork, as they know it would result in getting their rewards slashed.

Either way, validators can submit a **fork proof** to attest to the split upon noticing a fork in the chain. Validators submit a fork proof that will include the two blocks with the same block height and signed by the same validator, proving the fork occurred.

<br/>

image

<br/>

Consider the illustration above. The upper chain is the canonical chain. At block height 4, the validator produces two blocks with the same block number. But, at block height 5, the validator selected to produce the block notices the fork and ends it by choosing the chain to produce it, producing a single block and thus ending the fork. At block height 5, the validator can also submit a fork proof attesting the fork of the previous block height.

<br/>

Fork proofs are optional to submit. Although including a fork proof is generally considered good practice, validators are not required to submit them. Validators can submit a fork proof from the moment they witness it up to the latest micro block at the end of the next batch; thus, there is a period of one batch to include such a proof. This period for submitting fork proofs allows the resulting punishment to be considered in the reward distribution.

<br/>

### **Fork proof**

A validator includes a fork proof in a micro block to prove that a malicious validator forked the blockchain. Validators can submit either one proof or several ones, depending if the chain had a single split or if several malicious validators continued to build on it. Note that validators have an entire batch to include such proofs.

<br/>

Using the illustration below as a reference, we consider several validators have continued to build on the fork that started at block height 4 and ended at block height 8. There were 4 blocks produced in double, so 4 fork proofs must be included until the end of the next batch.

<br/>

<p align="center">
  <img src="/assets/images/protocol/fork-proof-1.png" alt="Alt Text" width="500" height="250">
</p>

<br/>

As validators sign the blocks they have produced, these signatures can prove that a validator has misbehaved. The fork proof consists of the header of each micro block, the corresponding justification, and the validator address of the validator in question. While the headers of the same block and both equal signatures prove two blocks at the same block height, including the validator address reinforces which validator has committed the offense.

<br/>

Based on the figure above, when submitting a fork proof for block 4, the validator must include the headers and justification from that block, along with the malicious validator address. Note that both headers and justification must match.

<br/>

| Data             | Description                                    |
| ---------------- | ---------------------------------------------- |
| `validator_address`  | Address of the offending validator.        |
| `header1`        | The micro block header of block 1              |
| `header2`        | The micro block header of block 2              |
| `justification1` | The signature of the block producer of block 1 |
| `justification2` | The signature of the block producer of block 2 |


<br/>

### Continuing on a fork

According to our consensus algorithm security assumption, given the validator list of 3𝑓+1, we have at most 𝑓 malicious validators. The probability of _d_ slots being owned by malicious validators decreases one-third in every block produced after forking the chain, following the next equation:

<br/>

$P(d)=(\frac{1}{3})^d$

<br/>

As indicated in the table below, the probability declines rapidly:

<p align="center">
  <img src="/assets/images/protocol/fork-probability.png" alt="Alt Text" width="400" height="250">
</p>
