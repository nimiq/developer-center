# Rewards

Validators stake a minimum deposit to participate in block production. Following consensus rules yields rewards; failing results in [penalties](/learn/protocol/penalties.md) and loss of rewards.

Validators receive rewards under these conditions:

- Producing a micro block on time
- Avoiding creating or building on forks
- Voting once per slot for each Tendermint proposal
- Broadcasting Tendermint proposals on time

Validators receive rewards proportional to their total stake. Validators with a higher total stake earn higher rewards. Users who cannot become validators can delegate their NIM to a validator, increasing the validator's total stake and potential rewards. While validators receive their rewards on-chain, they distribute rewards to stakers off-chain. Validators handle the distribution of these rewards according to their arrangements with their stakers.

### Reward distribution

Validators receive rewards to their reward address every batch. However, the distribution of rewards for a batch occurs at the end of the following batch. This delay is necessary to prevent malicious validators from attempting any offense in the last block of a batch. With this delay, there is sufficient time to submit an equivocation proof on the malicious validator.

For minor offenses, such as delaying block production, validators lose the rewards for the affected slot. For severe misbehavior, like equivocations, the rewards for all slots are burned. This affects stakers too, as the validator does not receive rewards for at least 8 epochs if jailed, regardless of any arrangements made with their stakers.

The reward distribution is proportional to the total stake and is evenly distributed per slot. This means a validator with 15 slots receives fewer rewards than one with 50. Also, if a validator with 15 slots delays block production, it will only receive rewards for 14 of its 15 slots, but if it attempts to broadcast a double proposal, it does not receive any rewards for at least 8 epochs.

### Reward calculation

The rewards comprise the coinbase and transaction fees. The coinbase represents the coins printed at the end of each batch, while transaction fees encompass the total fees from transactions within the batch.

In Albatross, both the coinbase and transaction fees fluctuate. In contrast to Bitcoin's fixed coinbase, which decreases by around 50% every four years, our coinbase varies over time as new coins are printed per batch rather than per block.

To calculate the coinbase, we have a formula that predicts the supply at any given time, given three parameters:

- Initial supply: the supply that Nimiq PoS will start with, denoted by *S₀*
- Initial velocity: a constant parameter that determines the number of NIM created initially by unit of time represented by *V₀*
- Decay: a constant that dictates the percentage of the velocity decrease, denoted by *β*

The supply formula is the following:

$S(t)=S_0+\frac{V_0}{\beta}(1-2^{-\beta t})$

Additionally, 𝑡 is the time elapsed since the genesis block. The formula is hard-coded and returns the supply of the coinbase at any given time in seconds, and it is distributed in Lunas (1 NIM = 100 000 Lunas).

Essentially, the coinbase is calculated by subtracting the supply calculated in the blockchain at any given time from the previous supply, which is the total amount of NIM at the end of the last batch.
