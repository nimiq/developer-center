---
title: Bridge
description: How NIM moves between Nimiq and EVM-compatible networks, backed one to one.
icon: i-tabler-building-bridge
navigation:
  title: Home
  order: 1
---

# Bridge

A bridge connects two blockchain networks that have no way of communicating with each other, so that an asset held on one can be used on the other. The Nimiq bridge does this for NIM, connecting Nimiq to any EVM-compatible network.

A network is EVM-compatible when it runs the Ethereum Virtual Machine, the environment Ethereum uses to execute contracts. Ethereum defines it and other networks have adopted it, so a contract written for one of them generally runs on the others without being rewritten. The same bridge contracts can therefore be deployed on any EVM-compatible network.

NIM is locked on Nimiq, and an equivalent amount of a token is created on the EVM network, backed one for one by the locked NIM. Destroying that token releases the original NIM.

Nothing is ever transferred between the two networks. The NIM stays on Nimiq for the entire time, and the token on the other side is a representation of it, not a copy of it that has traveled.

## Why bridge rather than convert

Bridging NIM and converting it into another asset are different things, and they solve different problems.

Converting means selling NIM and buying something else. The user stops holding NIM, takes on the price behavior of whatever they bought instead, and needs a counterparty or an exchange to trade with.

Bridging keeps the NIM. Every wNIM is backed by NIM locked in the bridge contract, so the position is unchanged: the same amount of the same asset, now usable somewhere it was not usable before. Bridging back returns the original NIM.

::callout{icon="i-tabler-info-circle" color="info"}
**wNIM is NIM, held somewhere else.** The same asset in a different place, not a second coin and not a derivative of NIM. Its name is NIM on an EVM network, or NIM on Polygon when the network is named. These pages shorten that to `wNIM` throughout, to match the code, where it is the symbol the contract declares and the name a wallet or a block explorer shows.
::

## The two contracts

Neither network can read the other's state. A contract on Nimiq has no way to see that something happened on an EVM network, and the reverse is equally true. Everything else follows from that limitation. The bridge closes the gap with two kinds of contracts, one of each on every network it connects.

A **bridge contract** holds the assets and enforces the rules of a transfer. An **oracle contract** sits on one network and holds a record of what happened on the other, so that contracts on its own network can read it. In blockchains generally, an oracle is anything that brings outside information onto a chain, more often a price feed. These oracles do that job for a much narrower purpose: the only outside information they carry is what happened on the other network of this bridge.

The oracle on the EVM network has a second job as well, carrying messages in the other direction, which [Oracles](/bridge/how-it-works/oracles) covers.

| | **Bridge contract** | **Oracle contract** |
| --- | --- | --- |
| **What it holds** | The locked NIM | Hashes |
| **What it does** | Locks, releases, mints and burns | Records what happened on the other network |
| **Who writes to it** | Users, by sending it a transaction | Its owner, for what it stores |
| **What it reads** | The oracle contract on its own network | Nothing |

**Each network has one of each.** There is a bridge contract and an oracle contract on Nimiq, and a bridge contract and an oracle contract on the EVM network. They are separate contracts sitting alongside each other, not one contained in the other. A bridge contract only ever reads the oracle on its own network, never the one across the gap.

[IMAGE PLACEHOLDER: bridge-home-contracts.png. Two networks side by side, each holding a bridge contract and an oracle contract as separate boxes of equal weight.]

**The bridge** is the whole system, while **the bridge contract** is one specific contract inside it.

Carrying information across the gap is the job of a third piece, the **relayer**. It is an off-chain process that watches both networks and writes into the oracle contracts. It holds no funds and cannot move any. [The round trip](/bridge/how-it-works/the-round-trip) covers how all of this is wired together.

## Lock, mint, burn, release

The bridge works on four operations, two in each direction.

**Lock and mint** makes NIM usable on the EVM network. A user locks NIM in the bridge contract on Nimiq, and once that is settled an equivalent amount of wNIM is minted on the EVM network.

**Burn and release** makes it usable on Nimiq again. A user burns wNIM on the EVM network, and once that is settled the equivalent NIM is released from the bridge contract on Nimiq.

Both directions require proof. Nothing is minted without proof that NIM was locked, and nothing is released without proof that wNIM was burned. That proof is what the oracle contracts exist to make possible.

**The bridge moves a user's own funds between their own addresses.** Both directions require the address receiving the funds to authorize the final step, and the ordering rules assume that whoever starts a transfer is the one who completes it, so sending to somebody else through the bridge is not a supported use. Naming an address the user does not control, such as an exchange deposit address, leaves the transfer stuck and the funds unrecoverable.

## The wrapped token

An EVM network has no concept of NIM. Its contracts and tooling work with assets that exist on that network, and NIM is native to Nimiq, so there is nothing there for an EVM network to recognize or hold. That is what wrapping solves. Rather than trying to move NIM somewhere it cannot exist, the bridge creates a token that is native to the EVM network, following the same token standard as any other asset there, and backs it with NIM locked on Nimiq.

The token is not a separate contract. The bridge contract on the EVM network is itself the token, declaring the ERC-20 name `WrappedNIM` and the symbol `wNIM`, and it exists only as the counterpart to locked NIM. Every wNIM in circulation corresponds to one NIM held in a bridge contract on Nimiq. Minting creates a new token, but not new value, in the way that a cloakroom ticket is newly issued while the coat it stands for is merely being held.

Once minted, wNIM is an ordinary token on its network and can be held, sent or used like any other. The main difference is that burning it releases the NIM behind it.

## Bridge instances

Each bridge instance is configured at creation for the network it serves.

More than one bridge can exist at the same time. There can be bridges to several different networks, and there can be several independent bridges to the same network. Anyone can deploy their own rather than using an existing one, and bridges deployed by different operators have no connection to each other: each holds its own locked NIM and issues its own wrapped token.

## Where to go next

- [The round trip](/bridge/how-it-works/the-round-trip): how the parts connect, what a proof is here, and how a transfer travels in each direction.
- [Security and trust model](/bridge/security-and-trust): what the bridge assumes, who is trusted for what, and what anyone can check independently.
