---
title: The round trip
description: How the parts connect, and how a transfer travels in each direction.
icon: i-tabler-refresh
navigation:
  title: The round trip
  order: 1
---

# The round trip

NIM does not move between networks. It is locked on one side and represented on the other, and the representation is destroyed to get the original back. A full round trip is four operations across two networks, and the NIM involved never leaves Nimiq at any point.

This section covers how these operations work: how the parts connect, what a proof is here, and how a transfer travels in each direction.

[IMAGE PLACEHOLDER: bridge-components.png. Both networks with their two contracts and the relayer between them, drawn so that the continuous header feed in one direction and the single triggered hop in the other are visibly different.]

## How the parts connect

Each network holds a [bridge contract and an oracle contract](/bridge#the-two-contracts). A relayer runs off-chain between the two.

On the EVM network the bridge contract is also [wNIM](/bridge#the-wrapped-token), so minting and burning act on the same contract that verifies proofs. Neither network can read the other's state. That inability is the gap the bridge exists to work around.

The relayer holds no funds and can move none, despite being the only component that crosses between networks. It never sends a bridge transaction at all, so it cannot complete a transfer on anyone's behalf and cannot forge one. It can, however, stop: nothing moves without the oracle updates it writes, so a relayer that stops running brings the bridge to a halt. That makes it liveness infrastructure, something the bridge needs in order to make progress. What it is trusted for, and what the oracle keys it holds could do, is covered in [Security and trust model](/bridge/security-and-trust).

**A bridge contract reads the oracle on its own network.** On a mint or a release, it retrieves the value the proof names from the [oracle](/bridge/how-it-works/oracles) beside it and verifies the proof against it. Nothing sits between them, and a bridge contract never reads the oracle across the gap.

**The EVM bridge contract also writes to its own oracle.** Burning wNIM changes the bridge contract's own state, and Nimiq cannot see that state. The burn has to be announced instead, somewhere the relayer is listening, and the oracle's **forwarder** is where announcements are made.

Any contract can hand the forwarder a message, and it emits that message as an event tagged with the address of whoever handed it over. The tag is set by the network rather than chosen by the sender, so nothing can claim to come from the bridge unless it does. The oracle keeps no copy and never reads what it is given, so the same forwarder serves anything that needs to speak to Nimiq rather than only the bridge. Deciding which announcements matter is left to the far end.

**The relayer writes across the gap, never back to the network it read from.** The oracle it writes into is on the other network, the side that lacks the information.

### The two directions are not mirrored

The relayer does the same kind of thing in both directions, but not on the same terms.

| | **Nimiq to the EVM network** | **The EVM network to Nimiq** |
| --- | --- | --- |
| **What the relayer commits** | Macro block headers that Nimiq produces | A Merkle tree root over burn records, which the relayer builds itself |
| **What triggers it** | Nothing. It runs continuously, header after header | A burn, picked up from the oracle's forwarder events |
| **Relationship to a transfer** | A transfer waits for the feed to pass over it | A transfer causes the commit |

In one direction the relayer forwards something the source network already published, on a schedule of its own, whether or not anyone is bridging. In the other, there is nothing published to forward, because an EVM network produces no structure Nimiq can verify a single burn against, so the relayer builds one.

That difference is the source of most of what else differs between the two flow pages, including what has to be trusted. [Security and trust model](/bridge/security-and-trust) covers that.

## What a proof is here

The proofs both directions rely on are Merkle proofs. A [Merkle tree](/protocol/storage/merkle-trees) is a tree-like structure that stores accounts and transactions, condensing a whole set of them into a single value called a root.

That property is what makes this design possible. An oracle has to hold only one small value per write, and a proof against it can still show that one specific transaction was part of the much larger set that value summarizes. Without it, each network would have to store the other's transactions to check anything.

Both directions also finish the same way. An oracle slot does not hold only the value written to it; it holds a hash of everything ever written to that slot. So the last leg of every proof walks from the committed value to what the slot holds now.

## Nimiq to the EVM network

The user sends NIM to the bridge contract on Nimiq, naming the EVM address that should receive wNIM, the **destination**. That NIM is now locked and stays locked.

Once the transaction is final, a macro block header covering it reaches the oracle on the EVM network through the ongoing feed. wNIM can then be minted against a proof that the lock happened, and it is minted to the destination named in the original transaction.

The destination has to authorize the mint, either by sending it or by signing it. For the holder this is the point where NIM becomes wNIM in every practical sense: the same amount, no longer spendable on Nimiq, now spendable on the EVM network. [Lock and mint](/bridge/how-it-works/lock-and-mint) covers this in full.

## The EVM network to Nimiq

To get the NIM back, the user burns their wNIM, naming the Nimiq address that should receive it, the **target**. Burning destroys the wNIM and makes the locked NIM available again.

Once the burn is unlikely to be reversed, the relayer commits a record of it to the oracle on Nimiq. The locked NIM is then released against a proof that the burn happened, and the target has to authorize the release by signing it. [Burn and release](/bridge/how-it-works/burn-and-release) covers this in full.

## What holds throughout

At every point in a round trip, wNIM in circulation is backed 1:1 by NIM locked in the bridge contract. Minting requires proof of a lock that has already been finalized, and release requires proof of a burn that has already happened. Neither side can run ahead of the other.

The checks that maintain this are listed on the two flow pages. What it means for the guarantees the bridge offers, and how anyone can confirm it independently, is covered in [Security and trust model](/bridge/security-and-trust).
