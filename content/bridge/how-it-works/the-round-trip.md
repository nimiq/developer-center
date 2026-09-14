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

[IMAGE PLACEHOLDER: bridge-components.png. Two networks side by side. On each, a bridge contract and an oracle contract drawn as separate contracts sitting next to each other, not one inside the other. Between the two networks, outside both, the relayer, connected to each.]

## How the parts connect

Each network holds a [bridge contract and an oracle contract](/bridge#the-two-contracts). A relayer runs off-chain between the two.

On the EVM network the bridge contract is also [wNIM](/bridge#the-wrapped-token), so minting and burning act on the same contract that verifies proofs. The relayer holds no funds and can move none, despite being the only component that crosses between networks. Neither network can read the other's state.

**Bridge contract to oracle: same network, direct read.** On a mint or a release, the bridge contract retrieves the entry the proof names from the [oracle](/bridge/how-it-works/oracles) on its own network and verifies the proof against it. Nothing sits between them.

**Relayer to oracle: across networks, write only.** An event on one network causes the relayer to write an entry into the oracle on the other network. It never writes to the oracle on the network where the event occurred, which already has the information.

The relayer therefore sits between the two networks, not between a bridge contract and its oracle:

```text
lock on Nimiq  ── relayer ──▶  EVM oracle    ◀── reads ──  EVM bridge
EVM burn       ── relayer ──▶  Nimiq oracle  ◀── reads ──  Nimiq bridge
```

## What a proof is here

The proofs both directions rely on are Merkle proofs. A [Merkle tree](/protocol/storage/merkle-trees) is a tree-like structure that stores accounts and transactions, condensing a whole set of them into a single value called a root.

That property is what makes this design possible. An oracle has to hold only one small value per entry, and a proof against it can still show that one specific transaction was part of the much larger set that value summarizes. Without it, each network would have to store the other's transactions to check anything.

## Nimiq to the EVM network

The user sends NIM to the bridge contract on Nimiq, naming the address that should receive wNIM. That NIM is now locked and stays locked.

Once the transaction is final, the relayer commits a record covering it to the oracle on the EVM network. wNIM can then be minted against a proof that the lock happened, and it is minted to the address named in the original transaction.

For the holder this is the point where NIM becomes wNIM in every practical sense: the same amount, no longer spendable on Nimiq, now spendable on the EVM network.

[Lock and mint](/bridge/how-it-works/lock-and-mint) covers this in full.

## The EVM network to Nimiq

To get the NIM back, the user burns their wNIM, naming the Nimiq address that should receive it. Burning destroys the wNIM and makes the locked NIM available again.

Once the burn is unlikely to be reversed, the relayer commits a record of it to the oracle on Nimiq. The locked NIM is then released against a proof that the burn happened.

[Burn and release](/bridge/how-it-works/burn-and-release) covers this in full.

## What holds throughout

At every point in a round trip, wNIMs in circulation are backed 1:1 by NIM locked in the bridge contract. Minting requires proof of a lock that has already been finalized, and release requires proof of a burn that has already happened. Neither side can run ahead of the other.

The checks that maintain this are listed on the two flow pages. What it means for the guarantees the bridge offers, and how anyone can confirm it independently, is covered in [Security and trust model](/bridge/security-and-trust).
