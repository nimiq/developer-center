---
title: Security and trust model
description: What the bridge assumes, who is trusted for what, and what anyone can verify independently.
icon: i-tabler-shield-lock
navigation:
  title: Security and Trust
  order: 6
---

# Security and trust model

The bridge never trusts the party that moves value. Every redemption is checked on the network that pays it out: by consensus rules on Nimiq, and by contract code on the EVM network. What the bridge does trust is the attestations written into its oracles, the record each network holds of what happened on the other. The design keeps that trust as small as it can be made, but does not remove it.

## Assumptions

The guarantees below hold as long as the following are true:

- **The oracle owners attest honestly.** Each oracle is written by its owner, and the oracle cannot fully check what it is given.
- **Nimiq macro blocks are final.** A lock is only provable once a [macro block](/protocol/consensus/block-format) has made it irreversible.
- **The EVM network does not reorganize deeper than the confirmation depth.** A burn is relayed once it is a set number of blocks deep, 128 by default, because an EVM network has [no point at which a burn becomes final](/bridge/how-it-works/burn-and-release#_2-wait-for-confirmations).

## Guarantees

These hold without trusting anyone, the bridge operator included.

**Verification is enforced by each network.** The checks on a Nimiq release are consensus rules at the account layer: validators cannot skip them, and a block that contains a release failing any of them is invalid. The checks on an EVM mint are contract code, enforced the same way for every caller.

**Nobody redeems a transfer without the recipient's consent.** A mint needs the destination's own call or its signed authorization, and a release needs the target's signature. Neither the relayer nor the oracle owners can give that consent. Submission is open, though: a redemption the recipient has signed can be submitted by anyone.

**Redemption does not depend on the operator.** Mint and release check proofs against public data. A recipient can rebuild any proof from the oracles' public histories without the relayer's help. What does depend on an oracle owner is getting new state attested in the first place.

**Value is conserved.** A release debits the bridge contract on Nimiq by exactly the burned amount, and the total released can never exceed the total burned. A mint requires proof of a finalized lock addressed to the Nimiq bridge contract. As a result, wNIM in circulation never exceeds the NIM locked behind it. The two are not always equal: while a transfer is in flight, NIM can be locked before its wNIM is minted, and wNIM burned before its NIM is released.

**A release succeeds or is invalid.** A release that fails any check is never [included as a failed transaction](/bridge/how-it-works/burn-and-release#a-release-either-succeeds-or-is-invalid), so the bridge contract is never debited for a failure and nobody pays a fee for one.

**The forwarder is neutral.** Any contract can send data through the EVM oracle's forwarder, and the relayer commits all of it. The bridge contract on Nimiq accepts a record only if it comes from the one source contract that bridge was created to accept, so nothing else forwarded can be released as a burn.

## Trusted roles

The bridge has a small number of trusted roles. Each one is listed here with what it is trusted for and the worst it could do.

| Role | Trusted for | Worst case if dishonest or compromised |
| --- | --- | --- |
| **Nimiq oracle owner** | Committing honest roots of the relayer's record tree | Releases NIM against burns that never happened, up to the NIM locked in the bridge contract. Or deletes the oracle, after which no NIM can ever be released from that bridge contract |
| **EVM oracle owner** | Submitting real Nimiq macro block headers, and the header format of each protocol version | Mints wNIM that no lock backs, with no upper limit |
| **EVM bridge contract owner** | Pointing the bridge contract at the right oracle, Nimiq bridge account and network, and setting how locks are read for each protocol version | Points the bridge contract at an oracle it controls, which gives it the same reach as the EVM oracle owner |
| **Creator of the Nimiq bridge and oracle contracts** | Setting the creation parameters, which can never be changed afterward | A wrong parameter can leave the bridge unable to release, or reading burns incorrectly. Creation checks reject the known mistakes |
| **Relayer** | Liveness only | Stops, and transfers stall until it resumes. Nothing is lost |

### Oracle owners

There is one owner key per direction, and both can belong to the same operator. The relayer holds both keys, because writing to the oracles is its job.

The owners are the point of trust because neither oracle can fully check what it is given. The EVM oracle [checks that each header follows from the one before it](/bridge/how-it-works/oracles#what-it-stores-and-what-it-checks), but it does not verify the validators' signatures, so a header it accepts is not proof that the block exists. The Nimiq oracle cannot check that a root reflects real burns at all, because the record tree behind it is built by the relayer rather than published by the EVM network.

The interfaces on both networks allow an oracle to be owned by a threshold or multisig arrangement rather than a single key.

### The EVM bridge contract owner

The bridge contract on the EVM network has an owner with real powers. It can change which oracle the contract reads, which Nimiq bridge account and network it accepts locks from, and the parser it uses to read a lock for each protocol version. Pointing the contract at a different oracle is equivalent to owning the oracle, and so is installing a dishonest lock parser.

The bridge contract on Nimiq also has an `owner` field, but it carries no authority. Consensus never checks it.

### What needs permission

| Operation | Network | Who can perform it |
| --- | --- | --- |
| Write to the oracle (`Update`) | Nimiq | Oracle owner |
| Transfer oracle ownership (`ChangeOwner`) | Nimiq | Oracle owner |
| Submit headers (`submit`, `submitMany`) | EVM | Oracle owner |
| Set a header format (`setHeaderFormat`) | EVM | Oracle owner |
| Transfer oracle ownership (`transferOwnership`) | EVM | Oracle owner |
| `setOracle`, `setNimiqBridgeAddress`, `setNimiqNetworkId`, `setLockParser` | EVM | Bridge contract owner |
| Lock NIM | Nimiq | Anyone |
| Burn wNIM | EVM | Any holder |
| Send data through the forwarder (`forward`) | EVM | Any contract |
| Submit a mint or a release | Both | Anyone, with the recipient's consent |

No role can release NIM or mint wNIM directly. Every redemption goes through the same checks, whoever submits it.

## If an owner attests falsely

A dishonest or compromised owner is a **safety** failure: value can be taken. The exposure is different on each side.

**On Nimiq, the loss is bounded.** A Nimiq oracle owner who commits a fabricated root can have NIM released against burns that never happened. Every other check still applies, including the nonce and the format of the record, and the most that can be released is what the bridge contract holds.

**On the EVM network, it is not.** An EVM oracle owner who submits a fabricated header that passes the oracle's checks can have wNIM minted against locks that never happened, and minting creates new tokens rather than drawing on a balance. The EVM bridge contract owner has the same reach, by pointing the contract at an oracle it controls.

A fabricated header is detectable at once. Its hash is not the hash of any Nimiq block, and anyone running a Nimiq node can compare the two. The bridge cannot prevent either attack, but both are visible to anyone who checks, which is the purpose of [independent verification](#what-anyone-can-verify).

## If the relayer or an owner stops

An oracle owner or relayer that stops working is a **liveness** failure: transfers stall, but nothing is lost.

The EVM oracle accepts headers only in order, so none can be skipped: when the relayer resumes, it submits the headers it missed. The Nimiq oracle needs no backlog, because the next root the relayer commits covers every burn it has seen. Transfers made during the outage complete once the relayer catches up.

A proof that has already been obtained [does not expire](/bridge/how-it-works/oracles#proofs-grow-and-nothing-is-discarded) while the bridge waits. A signed release does expire, after the Nimiq transaction validity window of about two hours, and is then signed again against a fresh proof.

### If the Nimiq oracle is deleted

The Nimiq oracle owner can also delete the oracle, by withdrawing its deposit. A bridge contract on Nimiq cannot switch to another oracle, so once its oracle is deleted, the NIM locked in it stays there and can never be released.

The bridge contract still accepts locks after its oracle is deleted, because a lock does not involve the oracle. wNIM can still be minted on the EVM network against such a lock, but it can never be bridged back.

## What anyone can verify

Every attestation can be recomputed from public data. None of these checks needs a key or any permission.

- **Every header in the EVM oracle.** For every header it stores, the oracle emits a `Submitted` event with the header's block hash, which has to equal the hash of the Nimiq block at that height. A Nimiq node can confirm this for every entry.
- **Every root in the Nimiq oracle.** The record tree can be rebuilt by replaying the `DataForwarded` events emitted on the EVM network, in order, and its root compared with the one committed.
- **Every header format.** The format on record for each protocol version can be compared with the header layout defined in the Nimiq node software.
- **The backing.** wNIM in circulation can be compared with the NIM held by the bridge contract on Nimiq, and every mint can be matched to the lock it names.

### Oracle verifier

`oracle-verifier` is a program that runs these checks continuously. It recomputes every value the oracle owners attest, and it pairs every mint with the lock behind it, so it raises an alarm for a mint that no lock backs even when the bridge still holds enough NIM to cover it. It reads only public data, so anyone can run it, not only the bridge operator, and independent parties are encouraged to.

## What the user is responsible for

The bridge checks every transfer, but four things are up to the user.

- **Bridging to themselves.** Whoever starts a transfer must also be the one who redeems it, holding both the source key and the destination key. This holds in both directions. To pay someone else, the user bridges to themselves first, then sends wNIM or NIM normally on the destination network.
- **Using each nonce once.** If two transfers to the same recipient carry the same nonce, only one of them can be redeemed, and the value of the other is lost. This applies to the [mint nonce](/bridge/how-it-works/lock-and-mint#the-nonce-is-sequential) and the [release nonce](/bridge/how-it-works/burn-and-release#the-nonce-has-to-be-right) alike.
- **Signing only for their own locks.** Anyone can lock a small amount carrying a user's next nonce and ask the user to authorize its mint. If the user signs, that nonce is consumed, and the user's own pending lock can never be minted.
- **Naming a destination that can consent.** A lock that names an address whose owner [cannot authorize the mint](/bridge/how-it-works/lock-and-mint#the-destination-must-be-an-address-the-user-controls), such as an exchange deposit address, is never mintable.

## Known limitations

**A reorganization of the EVM network deeper than the confirmation depth.** It can undo a burn after the NIM behind it has already been released. A higher confirmation depth makes this less likely but cannot rule it out. The relayer re-checks the last block it processed on every cycle and raises an alarm if that block has changed.

**A compromised oracle owner.** The loss is [bounded on Nimiq and unbounded on the EVM network](#if-an-owner-attests-falsely). Every attested value can be [recomputed by anyone](#what-anyone-can-verify), so a false attestation is visible to whoever checks.

**A deleted oracle.** The Nimiq oracle owner can [delete the oracle](#if-the-nimiq-oracle-is-deleted). The NIM locked in its bridge contract then stays there and cannot be released, including NIM locked after the deletion.
