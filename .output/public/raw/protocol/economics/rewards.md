# Rewards

Validators stake a minimum deposit to participate in block production. Following consensus rules yields rewards; failing to do so results in [punishments](/protocol/consensus/punishments) and loss of rewards.

Validators receive rewards under these conditions:

- Producing a micro block on time
- Avoiding creating or building on forks
- Voting once per slot for each Tendermint proposal
- Broadcasting Tendermint proposals on time

Validators receive rewards proportional to their total stake. Validators with a higher total stake earn higher rewards. Users who cannot become validators can delegate their NIM to a validator, increasing the validator's total stake and potential rewards. While validators receive their rewards on-chain, they distribute rewards to stakers off-chain. Validators handle the distribution of these rewards according to their arrangements with their stakers.

### Reward distribution

Validators receive rewards to their reward address every batch. However, the distribution of rewards for a batch occurs at the end of the following batch. This delay is necessary to prevent malicious validators from attempting an offense in the last block of a batch. With this delay, there is sufficient time to submit an equivocation proof on the malicious validator.

For minor offenses, such as delaying block production, validators lose the rewards for the affected slot. For severe misbehavior, like equivocations, the rewards for all slots are burned. This also affects stakers, as the validator does not receive rewards for at least 8 epochs if jailed, regardless of any arrangements made with their stakers.

The reward distribution is proportional to the total stake and is evenly distributed per slot. This means a validator with 15 slots receives fewer rewards than one with 50 slots. Also, if a validator with 15 slots delays block production, it will only receive rewards for 14 of its 15 slots, but if it attempts to broadcast a double proposal, it does not receive any rewards for at least 8 epochs.

### Reward calculation

The rewards comprise the coinbase and transaction fees. The coinbase represents the coins printed at the end of each batch, while transaction fees encompass the total fees from transactions within the batch.

In Albatross, both the coinbase and transaction fees fluctuate. In contrast to Bitcoin's fixed coinbase, which decreases by around 50% every four years, our coinbase varies over time as new coins are printed per batch rather than per block.

To calculate the coinbase, we have a formula that predicts the supply at any given time, given three parameters:

- **Initial supply**: the supply that Nimiq will start with, denoted by *S₀*
- **Initial velocity**: a constant parameter that determines the number of NIM created initially per unit of time represented by *V₀*
- **Decay**: a constant that dictates the percentage by which the velocity decreases, denoted by *β*

The supply formula is the following:

<span className="katex">
<span className="katex-mathml">
<math xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow>
<mi>

S

</mi>

<mo stretchy="false">

(

</mo>

<mi>

t

</mi>

<mo stretchy="false">

)

</mo>

<mo>

=

</mo>

<msub>
<mi>

S

</mi>

<mn>

0

</mn>
</msub>

<mo>

+

</mo>

<mfrac>
<msub>
<mi>

V

</mi>

<mn>

0

</mn>
</msub>

<mi>

β

</mi>
</mfrac>

<mo stretchy="false">

(

</mo>

<mn>

1

</mn>

<mo>

−

</mo>

<msup>
<mn>

2

</mn>

<mrow>
<mo>

−

</mo>

<mi>

β

</mi>

<mi>

t

</mi>
</mrow>
</msup>

<mo stretchy="false">

)

</mo>
</mrow>

<annotation encoding="application/x-tex">

S(t)=S_0+\frac{V_0}{\beta}(1-2^{-\beta t})

</annotation>
</semantics>
</math>
</span>

<span className="katex-html" ariaHidden="true">
<span className="base">
<span className="strut" style="height:1em;vertical-align:-0.25em;">



</span>

<span className="mord,mathnormal" style="margin-right:0.05764em;">

S

</span>

<span className="mopen">

(

</span>

<span className="mord,mathnormal">

t

</span>

<span className="mclose">

)

</span>

<span className="mspace" style="margin-right:0.2778em;">



</span>

<span className="mrel">

=

</span>

<span className="mspace" style="margin-right:0.2778em;">



</span>
</span>

<span className="base">
<span className="strut" style="height:0.8333em;vertical-align:-0.15em;">



</span>

<span className="mord">
<span className="mord,mathnormal" style="margin-right:0.05764em;">

S

</span>

<span className="msupsub">
<span className="vlist-t,vlist-t2">
<span className="vlist-r">
<span className="vlist" style="height:0.3011em;">
<span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;">
<span className="pstrut" style="height:2.7em;">



</span>

<span className="sizing,reset-size6,size3,mtight">
<span className="mord,mtight">

0

</span>
</span>
</span>
</span>

<span className="vlist-s">

​

</span>
</span>

<span className="vlist-r">
<span className="vlist" style="height:0.15em;">
<span>



</span>
</span>
</span>
</span>
</span>
</span>

<span className="mspace" style="margin-right:0.2222em;">



</span>

<span className="mbin">

+

</span>

<span className="mspace" style="margin-right:0.2222em;">



</span>
</span>

<span className="base">
<span className="strut" style="height:1.3695em;vertical-align:-0.4811em;">



</span>

<span className="mord">
<span className="mopen,nulldelimiter">



</span>

<span className="mfrac">
<span className="vlist-t,vlist-t2">
<span className="vlist-r">
<span className="vlist" style="height:0.8884em;">
<span style="top:-2.655em;">
<span className="pstrut" style="height:3em;">



</span>

<span className="sizing,reset-size6,size3,mtight">
<span className="mord,mtight">
<span className="mord,mathnormal,mtight" style="margin-right:0.05278em;">

β

</span>
</span>
</span>
</span>

<span style="top:-3.23em;">
<span className="pstrut" style="height:3em;">



</span>

<span className="frac-line" style="border-bottom-width:0.04em;">



</span>
</span>

<span style="top:-3.4101em;">
<span className="pstrut" style="height:3em;">



</span>

<span className="sizing,reset-size6,size3,mtight">
<span className="mord,mtight">
<span className="mord,mtight">
<span className="mord,mathnormal,mtight" style="margin-right:0.22222em;">

V

</span>

<span className="msupsub">
<span className="vlist-t,vlist-t2">
<span className="vlist-r">
<span className="vlist" style="height:0.3173em;">
<span style="top:-2.357em;margin-left:-0.2222em;margin-right:0.0714em;">
<span className="pstrut" style="height:2.5em;">



</span>

<span className="sizing,reset-size3,size1,mtight">
<span className="mord,mtight">

0

</span>
</span>
</span>
</span>

<span className="vlist-s">

​

</span>
</span>

<span className="vlist-r">
<span className="vlist" style="height:0.143em;">
<span>



</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>

<span className="vlist-s">

​

</span>
</span>

<span className="vlist-r">
<span className="vlist" style="height:0.4811em;">
<span>



</span>
</span>
</span>
</span>
</span>

<span className="mclose,nulldelimiter">



</span>
</span>

<span className="mopen">

(

</span>

<span className="mord">

1

</span>

<span className="mspace" style="margin-right:0.2222em;">



</span>

<span className="mbin">

−

</span>

<span className="mspace" style="margin-right:0.2222em;">



</span>
</span>

<span className="base">
<span className="strut" style="height:1.0991em;vertical-align:-0.25em;">



</span>

<span className="mord">
<span className="mord">

2

</span>

<span className="msupsub">
<span className="vlist-t">
<span className="vlist-r">
<span className="vlist" style="height:0.8491em;">
<span style="top:-3.063em;margin-right:0.05em;">
<span className="pstrut" style="height:2.7em;">



</span>

<span className="sizing,reset-size6,size3,mtight">
<span className="mord,mtight">
<span className="mord,mtight">

−

</span>

<span className="mord,mathnormal,mtight" style="margin-right:0.05278em;">

β

</span>

<span className="mord,mathnormal,mtight">

t

</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>
</span>

<span className="mclose">

)

</span>
</span>
</span>
</span>



Additionally, t is the time elapsed since the genesis block. The formula is hard-coded and returns the supply of the coinbase at any given time in seconds, and it is distributed in Lunas (1 NIM = 100'000 Lunas).

Essentially, the coinbase is calculated by subtracting the supply calculated in the blockchain at any given time from the previous supply, which is the total amount of NIM at the end of the last batch.
