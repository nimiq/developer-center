# Equivocation Proofs

An equivocation refers to malicious behavior by a validator that contradicts the consensus, such as producing two blocks at the same block height or signing two different proposals within the same Tendermint aggregation.

An equivocation proof proves that a validator misbehaved. The offending validator is automatically jailed as soon as the equivocation proof is added to the blockchain. Validators enter an 8-epoch jail, lose their rewards, and the ability to produce blocks during the jail period. Honest validators refrain from any misbehavior, as it is not in their interest to lose rewards or be restrained from block production.

Validators can submit proofs attesting to malicious behavior. While submitting these proofs is considered good practice, it is optional for validators. They can submit any proof from the moment they witness an offense up to the last micro block at the end of the next epoch. The reporting window, spanning almost two epochs, provides sufficient time for validators to identify, address, and submit proofs of malicious behavior to be included in the blockchain.

Validators can misbehave in three ways:

- Fork the chain
- Proposing different macro blocks in the same round
- Voting twice in the same round and step

### Fork Proofs

A fork occurs when a malicious validator generates two micro blocks at the same block height, aiming to create a chain split or attempt double spending.

The fork concludes once an honest validator is chosen as the subsequent block producer. Block production then resumes according to the consensus (one micro block per block height), and any validator can submit a fork proof attesting to the malicious behavior of the previous validator.

Forks may also end if the next block is a macro block. Although a malicious validator may attempt to propose 2 blocks at the same block height (refer to the double proposal proof below), the consensus requirement dictates that more than 2/3 of validators must agree on a block proposal before it is added to the blockchain; thus, there is no way to continue a fork.

::: code-group

```rust
pub struct ForkProof {
    validator_address: Address,
    header1: MicroHeader,
    header2: MicroHeader,
    justification1: SchnorrSignature,
    justification2: SchnorrSignature,
}
```

:::

The offending validator address, two micro headers from the same block height and the respective signatures are enough to prove the malicious behavior.

### Double Proposal Proofs

Macro blocks are produced using the Tendermint algorithm. A validator, selected as the round leader, proposes a macro block and gossips its proposal. Malicious validators may attempt to propose two different macro headers at the same block height, round and step.

Honest validators vote for one proposal per round; therefore, receiving more than one proposal from the same validator for the same block indicates misbehavior from a malicious validator. Double proposal proofs serve to identify and punish a validator if it attempts to sign conflicting blocks, demonstrating malicious behavior.

::: code-group

```rust
pub struct DoubleProposalProof {
    validator_address: Address,
    header1: MacroHeader,
    header2: MacroHeader,
    justification1: SchnorrSignature,
    justification2: SchnorrSignature,
}
```

:::

The offending validator address, two macro headers from the same round and the respective signatures are enough to prove the malicious behavior.

### Double Vote Proofs

Validators are expected to vote block or _nil_ for a single Tendermint proposal per round and step. Voting for different proposals at the same block height, round, and step is considered a double vote, disrupting Tendermint's voting principle. The double vote proof is used to identify and punish validators for their misbehavior.

::: code-group

```rust
pub struct DoubleVoteProof {
    validator_address: Address,
    tendermint_id: TendermintIdentifier,
    proposal_hash1: Option<Blake2sHash>,
    proposal_hash2: Option<Blake2sHash>,
    signature1: AggregateSignature,
    signature2: AggregateSignature,
    signers1: BitSet,
    signers2: BitSet,
}
```

:::

The proof serves to identify the malicious validator, pointing the block height, round, and step at which the double voting occurred, along with the two proposal hashes. Validators combine their signatures into a single aggregate signature. However, aggregate signatures cannot be verified without knowing who voted. To verify the signature, the bitset of signers is included. This bitset identifies the validators who participated in signing the specific proposals, thus also pinpointing and confirming instances of double voting by a malicious validator.
