# ZKP and SNARKs

Nimiq supports several types of users, namely light nodes, nodes native to the web. Although these nodes can't validate blocks, they can synchronize to the network by requesting a proof of the current state of the blockchain. Nimiq’s developers and researchers decided to implement recursive SNARKs to enable this functionality.

<br/>

To better understand recursive SNARKs, we explain zero-knowledge proofs, SNARKs, and recursive SNARKs. We also explain how these proofs are generated and allow a light node to connect to the network with a small proof that is easy to verify.

<br/>

### Zero-knowledge proofs

A zero-knowledge proof is a mathematical protocol developed to prove a statement without revealing the secret behind the statement. It occurs between two parties: a prover and a verifier. The prover knows a secret and creates a statement about the secret. The verifier can request a proof from the prover, and such proof enables the verification that the prover’s statement is true.

<br/>

**An example of a zero-knowledge proof from [Computerphile’s](https://www.youtube.com/watch?v=HUs1bH85X9I) video:**

Let’s imagine that Alice wants to prove to Bob she holds a red card that she took from a 52 deck of cards. Alice is the prover, and Bob is the verifier. Alice knows which card she took, and its suit and index are the secret. Bob only needs to verify that she took a red card. He doesn’t need to know the secret to verify Alice’s statement. Mind that, to prove such statement, Alice has to commit to telling the truth, or the experiment isn't accurate.

<br/>

To prove to Bob that Alice took a red card from a 52 deck of cards, she shows Bob 26 black cards from that deck of cards.

<br/>

Now Bob can verify that Alice is telling the truth. Bob knows that a deck of cards contains 26 red cards and 26 black cards. So, he can verify that Alice is saying the truth, even though he doesn’t know which red card Alice is holding.

<br/>

Zero-knowledge proofs have three main properties:

- Correctness: The protocol runs accurately if both parties are honest. Alice can only commit to a true statement. If she didn’t take a red card, she couldn't state that she had taken the red card. Also, Bob couldn’t say he saw a red card if Alice didn’t lay down 26 black cards.
- Soundness: The prover can only make a statement about a secret he knows to be true. If Alice didn’t know that a deck of cards has 26 red cards and 26 black cards, she couldn’t state that she holds a red card and lay the 26 black cards to prove her statement.
- Zero-knowledge: No information about the secret is revealed. The secret remains secret. Alice does not need to reveal the secret to Bob to prove her claim.

<br/>

Above is an example of a zero-knowledge proof with an interaction between two parties, Alice and Bob. But it’s also possible to prove statements without having back-and-forth communication, and here is where SNARKs appear.

<br/>

### SNARKs and recursive SNARKs

SNARK stands for succinct non-interactive argument of knowledge, and a recursive SNARK is a proof of a SNARK. SNARKs are a new form of zero-knowledge proof without interaction between parties. They are succinct, meaning the verifier can quickly verify a proof with a simple request to the prover.

<br/>

SNARKs function with circuits. Circuits refer to the functions or algorithms that allow a statement to be proven. These circuits can be implemented in blockchains to enable users to connect to the network, allowing them to verify the state of the blockchain.

<br/>

In Nimiq PoS consensus algorithm, we use recursive SNARKs to prove the current state of the blockchain with a small proof, constant in size, and easy to verify.

<br/>

### Recursive SNARKs implementation

Validators are responsible for producing new blocks according to consensus rules. Validators are a type of node, but not all nodes in the blockchain can produce blocks. Every node that wants to verify the current state of Nimiq’s blockchain, own a wallet, or access one of our applications, is a browser node, specifically a light node.

<br/>

light nodes can:

- Synchronize to the network by requesting a proof of the current state of the blockchain.
- Push blocks into the chain, so they can keep following the chain.
- Push macro blocks in order to synchronize to the latest macro block.
- Store blocks.
- Store essential data so the light node can be part of the network.
- Verify Merkle's proofs.

<br/>

**Why use recursive SNARKs?**

The main purpose of this implementation is to allow light nodes to connect to the blockchain easily without downloading the entire software. We can prove the current state of the blockchain by proving that validators have produced the blocks according to the consensus rules.

<br/>

Although SNARKs return a small and easy to verify proof for a user like a light node, they consume a lot of computational resources to be generated. As a result, we decided to implement recursive SNARKs enabling us to prove the previous proof constantly and, in our case, to prove the validity of the last epoch with a proof produced in the current one. This way, we create a chain of recursive SNARKS.

<br/>

Consequently, the proof remains the same size, independently of the size of the blockchain. The proof will be the same size if a light node requests the proof of the interval between the genesis block and the third macro block or the interval between the genesis block and the fiftieth macro block.

<br/>

Validators produce a proof at each election macro block. Since the validators list remains the same in each epoch, it’s plausible to skip proofs of the batches within an epoch. Each election macro block contains a proof that proves that the last epoch was correctly constructed.

<br/>

The light node synchronizes to the chain by requesting a proof that returns:

- The last election macro block.
- The proof that the chain is valid between the genesis block to the most recent election macro block.

<br/>

With this proof, the light node is able to verify that the chain is valid between the genesis block and the most recent election macro block. Finally, the light node only needs to verify the micro and the checkpoint macro blocks produced after the election macro block.

<br/>

Circuits are what allow the setup of these proofs, with a single interaction between the light node and the network. These circuits work by pairing two keys: a verifying key and a proving key. They work similarly to public and private keys. The verifying key is in the light node's database, and it concedes the means to connect to the network. The proving key is part of Nimiq’s software and is used in combination with the verification key so that the light node connects to the network. Thus, by handing the verifying key, light nodes can make the request and verify the current state of the blockchain.

<br/>

To understand the technical part of circuits, check our GitHub [repository](https://github.com/nimiq/core-rs-albatross/tree/albatross/nano-zkp).
