# Skip blocks

Our consensus protocol adapts to the presence of validators who intend to [act maliciously](penalties.md) and disrupt the standard behavior of the blockchain. A single validator is enough to delay block production. In Nimiq consensus algorithm, when a validator doesn't produce a micro block in the expected time, any validator can add a skip block to the chain.

<br/>

Despite the cause of the delay, which could be for various reasons such as the validator going offline or wanting to delay the block production purposely, including a skip block avoids a significant delay. Instead of waiting for the delayed validator, any active validator can produce a skip block in place of the expected micro block.

<br/>

A skip block is a [micro block](block-format.md#micro-blocks) with some differences: it doesn't hold transactions, and consequently, neither a body nor a body root; the VRF seed of this block is the entropy of the random seed of the previous block, as for a new seed to be generated would require a new block leader, and the skip block is leaderless.

<br/>

As for the justification, it attests that _x_ validator slots received and signed the skip block, and resuming the block production is unanimous among validators. The remainder data fields are similar to a micro block. The following images illustrate their differences:

<br/>

<p align="center">
    <img src="/assets/images/protocol/skip-block.png" alt="Alt Text" width="200" height="80">
</p>


Mind these differentiating aspects:

- What distinguishes a skip block from a micro block consists of the justification. The skip block is signed by multiple validators, whereas a micro block is signed by its block producer.
- The skip block proof includes the signatures of the validators that attest to the skip block. This takes the voting key of each validator slot to be calculated together to result in the aggregated signatures.
- The `timestamp` is the previous block timestamp plus the block producer timeout (approximately 10 seconds);
- Skip blocks have an empty body, as they don’t contain transactions or fork proofs, so the `body_root` of the block’s header is also empty.
- The `extra_data` field must be empty.
- Besides the [VRF seed](verifiable-random-functions.md), the entropy of that same seed is used to evenly apply skip blocks across all branches of a malicious fork, while avoiding interference with branching due to skip blocks.

<br/>

The chain resumes the expected performance once the skip block is added. This means that if the slot owner of the next block is also from the delayed validator, another skip block can be added by any active validator, preventing a significant delay. Mind that there is always a delay in the block production, even by adding a skip block, but adding a skip block will shorten the period of the chain without a block.

<br/>

The chain selection is not affected by skip blocks, unlike forks. Since skip blocks are canonical, the only way to attempt to build a second chain is with a fork. Skip blocks can be added at any point in a batch and can also be added multiple times during a batch.

<br/>

Note that when a validator doesn’t produce the micro block in the expected time, he will be added to the punishment set for attempting to delay the block production. Plus, the skip blocks get a slash inherent that confirms that the delayed validators didn't produce the micro block in the expected time. The slash inherent will then be used for the reward distribution at the end of the batch.

<br/>

**How the skip block is added to the chain:**

1. The elected validator doesn’t produce the micro block in the expected time
2. Any validator in the validator list, upon noticing the missing block, can produce a skip block without being elected to do so
3. The validator that produces the skip block broadcasts it to the rest of the validator list, and the skip block stays on hold
4. The rest of the validator list receives the info on the skip block and signs it
5. When the skip block receives at least 2*f*+1 signatures from the validator list, it’s then added to the chain with a proof in the justification of the block that consists of the aggregated signatures from the validators who signed the skip block (note that the skip block is only added if at least 2*f*+1 validators signed it)
6. After the block is added, the chain can resume standard production, which means:
   1. a validator is selected accordingly to the validator selection rules to produce the next micro block
   2. if the validator elected to produce the next micro block is also delaying the block production, a new skip block is added, and the process above is repeated

<br/>

There are only two outcomes for a delayed micro block:

- receive 2*f*+1 signatures to a skip block instead and, once added, resume the block production afterward
- wait to receive a micro block; if a validator doesn’t receive a skip block, it means that at least 2*f*+1 validators saw a micro block. The remainder should receive the micro block in the meantime
