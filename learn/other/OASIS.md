# OASIS

Requirements - For a better understanding of the following document, you need to have some knowledge about:

<details>
  <summary>Smart contracts</summary>
  
  - [https://en.wikipedia.org/wiki/Smart_contract](https://en.wikipedia.org/wiki/Smart_contract)
  - [https://www.investopedia.com/terms/s/smart-contracts.asp](https://www.investopedia.com/terms/s/smart-contracts.asp)
  - [https://www.youtube.com/watch?v=csS1mZFuNSY&ab_channel=Computerphile](https://www.youtube.com/watch?v=csS1mZFuNSY&ab_channel=Computerphile)

</details>

<details>
  <summary>Digital signatures</summary>
  
  - [https://www.youtube.com/watch?v=s22eJ1eVLTU&ab_channel=Computerphile](https://www.youtube.com/watch?v=s22eJ1eVLTU&ab_channel=Computerphile)
  - [https://en.wikipedia.org/wiki/Digital_signature](https://en.wikipedia.org/wiki/Digital_signature)
  - [https://en.wikipedia.org/wiki/Public-key_cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)

</details>

<details>
  <summary>Hash functions</summary>
  
  - [https://en.wikipedia.org/wiki/Cryptographic_hash_function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
  - [https://www.youtube.com/watch?v=b4b8ktEV4Bg&ab_channel=Computerphile](https://www.youtube.com/watch?v=b4b8ktEV4Bg&ab_channel=Computerphile)
  - [https://www.browserling.com/tools/sha2-hash](https://www.browserling.com/tools/sha2-hash)

</details>

<details>
  <summary>Elliptic-curve cryptography</summary>
  
  - [https://en.wikipedia.org/wiki/Elliptic-curve_cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)
  - [https://www.youtube.com/watch?v=NF1pwjL9-DE&ab_channel=Computerphile](https://www.youtube.com/watch?v=NF1pwjL9-DE&ab_channel=Computerphile)

</details>

<br/>

OASIS is a protocol that enables an atomic swap between on and off-chain assets through the implementation of two HTLCs. Despite having several use cases, we describe in this document what a HTLC is, how it is implemented in atomic swaps, followed by how Nimiq OASIS covers an atomic swap between fiat and crypto.

<br/>

### **HTLC - Hashed Timelock Contract**

A HTLC is a conditional payment implemented by a script in the blockchain. It's a smart contract that enables a party to transact assets to another party without relying on a third one. Hence, it's a contract between two parties: a sender and a recipient.

<br/>

To start the transaction, both sender and recipient must exchange their public keys. By doing so, they can later prove each other identity. Once the public keys are exchanged, the sender generates a HTLC and sends its assets to the contract, locking it with a hashlock and a timelock. These locks are the primitives of the contract, along with the digital signatures of both parties, which serve as a key to unlock the assets. As soon as the funds are locked in the contract, the recipient must provide the sender’s public key to redeem the funds. The transaction only occurs if the script is satisfied given the primitives. Therefore, if the conditions aren't achieved, the funds are sent automatically back to the sender.

<br/>

**Digital signature** - A primitive that locks the funds until a signature is verified. The sender generates a key pair: a private key and a public key. Then, he sends his public key to the recipient. The recipient must provide the sender's public key to redeem the funds. This authenticates both sender and recipient, as to unlock the transaction, the public key must correspond to the private key.

**Hashlock** - a primitive that locks the funds until a valid piece of data is revealed. To create a hashlock, the sender generates a secret called the _preimage_. Then, he hashes it through a cryptographic hash function. The function takes as input a piece of binary data of variable size - the preimage - and hashes it into a fixed-sized output called the _image_. The sender uses the image to lock the funds as a hashlock, and the recipient must provide the correspondent preimage to unlock the funds.

**Timelock** - a primitive that runs as a mechanism that locks the funds in the contract for a period of time, agreed between the sender and recipient. If both parties agree on 60 minutes timeframe, the recipient has 60 minutes to redeem the funds. Once the time elapses, the recipient can still redeem the funds, but the sender can also reclaim the funds back.

<br/>

![AND-OR.png](/assets/images/protocol/oasis-AND-OR.png)

<br/>

This is an example of a script of a HTLC. If the root node evaluates to true, the script becomes satisfied. If one of the following conditions is true, the funds can be claimed.

<br/>

- Condition 1: if the sender's public key is valid and the preimage of the hashlock is correct, then the funds can be claimed.
- Condition 2: if the recipient's public key is valid and the timelock has elapsed, then the funds can be refunded by the sender.

<br/>

HTLC's have several use cases, but, in this instance, they are used to implement the OASIS protocol, which allows parties who don't trust each other to exchange assets. They are the starting point for atomic swaps, which we will explore next.

<br/>

### **ATOMIC SWAP**

Atomic swap is a transactional protocol used to exchange assets between different blockchains. The word "atomic" relates to the transaction result: either the swap occurs entirely, or it doesn't occur at all.

<br/>

The agreement allows cross-chain transactions between two parties to exchange their assets. Both parties generate a HTLC in their respective blockchains, one in each network. The same hashlock connects the two HTLCs, so the same preimage is used to unlock the funds from both contracts.

<br/>

Let's imagine that Alice and Bob want to swap BTC for NIM, respectively. They each need an address in each blockchain to achieve the swap, totaling four addresses.

<br/>

Here's how they would proceed to an atomic swap:

1. Firstly, Alice and Bob exchange their public keys and decide on the amount to swap. They also agree on the duration of the timelock.
2. Then, she picks a secret that will be the preimage to unlock the hashlock. At this moment, only Alice knows the secret.
3. Alice creates a HTLC in the BTC blockchain, sends her amount of BTC to the contract, and locks the funds with the agreed timelock and the hashlock.
4. Alice gives Bob the transaction ID, and he requests the transaction information from the Bitcoin blockchain, and the network provides it.
5. At this moment, Bob will verify the address from the script, the script itself, and then knows that the transaction is valid.
6. Bob creates a HTLC in the Nimiq blockchain, sends his NIM to the contract, and locks the funds using the same hash of Alice's hashlock and a shorter timelock. This prevents Alice from waiting until the last minute to retrieve hers and Bob's HTLC. With the shorter timelock, he always has enough time to claim Alice's HTLC.
7. Bob sends the transaction ID to Alice. Alice requests from Nimiq's network the transaction information, and the network provides it.
8. At this point, Alice verifies if Bob's HTLC is valid. Alice then sends a transaction to Nimiq's blockchain containing her signature and the preimage to the hashlock to claim Bob's HTLC. By doing so, the preimage becomes public.
9. Bob can claim his BTC in the Bitcoin network after that, with his signature and the preimage that he now knows.
10. The swap is complete!

<br/>

![Atomic Swap.png](/assets/images/protocol/atomic-swap.png)

<br/>

Possible failures of the swap:

- If Alice and Bob disagree with any parameter set up, the swap doesn't happen, and they can walk away.
- If Alice misses any specification of the HTLC, as if she doesn't send the correct amount of BTC or the time of the timelock is incorrect, Bob can walk away from the swap.
- If Bob doesn't create his HTLC or misses any contract agreement, Alice waits until the timelock expires, sends a transaction to the BTC network, and requests her funds back.
- If by any chance Alice doesn't claim Bob's funds, both wait until the timelock elapses, and they both can ask back their funds in the respective blockchains.

<br/>

This ease of executing transactions inspired Nimiq to create its kind of atomic exchange, but with Nimiq OASIS the exchange takes place between fiat and cryptocurrency.

<br/>

### **OASIS**

The core of OASIS is using the atomic swap protocol as a principle, enabling transactions between on-chain assets, in the blockchain and off-chain assets, outside the blockchain. It combines a HTLC and a HTLA - a hashed timelock agreement.

<br/>

A HTLA is an agreement that uses the same primitives as a HTLC. The HTLA can be implemented by any entity that can act as an escrow party for the agreement, the same way as the blockchain acts as an escrow party of the HTLC.

<br/>

The OASIS Bank is the escrow party of the off-chain assets, allowing the implementation of the HTLA. The bank is what enables the swap between on- and off-chain assets. The exchanging parties must each have a SEPA-Instant-supported bank account in a fiat and crypto swap.

<br/>

Taking Alice and Bob as an example again, they want to exchange NIM for EUR, respectively. They will each need an address in Nimiq's blockchain and a bank account that supports SEPA-Instant transfers. Let's see how, in this case, they would proceed:

**A.** Alice and Bob agree on the amount to exchange, the duration of the timelock, and swap their public keys.

**B.** Assuming that Alice initiates the protocol, she will pick a preimage that will unlock the funds of both parties. The preimage is the key to the hashlock. At this point, only she knows the secret key.

**C.** Now that everything is set up, Alice creates a HTLC in the Nimiq blockchain, sending the agreed amount of NIM to the contract and locking the funds with the timelock, the hashlock, and Bob as the recipient.

**D.** Alice hands Bob the transaction ID.

**E.** Using the transaction ID, Bob confirms the contract parameters in Nimiq's blockchain.

**F.** Now Bob sets his part of the swap, creating an OASIS HTLC (a HTLA) in the bank, sending the funds into the contract, and locking it with the EUR amount agreed by them, a shorter timelock, the same hashlock as Alice's HTLC and Alice as the recipient.

**G.** Bob gives Alice the transaction ID.

**H.** Alice verifies the HTLA using the transaction ID and confirms the parameters with the bank. At this moment, the swap is set up, both parties have locked their assets, and have validated all the parameters.

**I.** Alice, the secret owner, sends a transaction to redeem Bob's OASIS HTLC, in the OASIS Bank, with her signature and the preimage to the hashlock. This proves to the OASIS Bank that Alice is the designated recipient. Now OASIS Bank transfers the funds to Alice's bank account and has the preimage of the hashlock, turning it public.

**J.** Bob now asks the bank for the secret and sends a transaction to Nimiq's blockchain to redeem Alice's HTLC. The network approves it and sends the assets to Bob's address.

**K.** The swap is complete!

<br/>

![1.png](/assets/images/protocol/oasis-1.png)

![2.png](/assets/images/protocol/oasis-2.png)

![3.png](/assets/images/protocol/oasis-3.png)

![4.png](/assets/images/protocol/oasis-4.png)

![5.png](/assets/images/protocol/oasis-5.png)

<br/>

This is an implementation of Nimiq OASIS to achieve an atomic swap, but in this instance, between on- and off-chain assets, in an easy and decentralized way. In the future, it will also be possible to exchange other assets such as stocks certificates, web domains, and many more.
