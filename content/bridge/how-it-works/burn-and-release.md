---
title: Burn and release
description: How wrapped NIM burned on an EVM network releases the NIM locked on Nimiq.
icon: i-tabler-arrow-left
navigation:
  title: Burn and release
  order: 4
---

# Burn and release

Moving NIM back to Nimiq takes four steps: [wNIM](/bridge#the-wrapped-token) is destroyed on the EVM network, the burn is given time to become unlikely to reverse, the relayer commits a record of it to the oracle on Nimiq, and the locked NIM is then released against a proof that the burn happened.

This is the same shape as [Lock and mint](/bridge/how-it-works/lock-and-mint) read backwards, but it is not the same process in reverse. Three things differ in ways that matter: what the wait is based on, what the relayer commits, and where the fee comes from.

[IMAGE PLACEHOLDER: bridge-burn-and-release.png. The four steps in sequence, visibly unlike the lock and mint image rather than it reversed, with the target's signature shown as a required input to the release.]

## 1. Burn wNIM

The user calls `burn` with three arguments: the 20-byte Nimiq address that should receive the NIM, the nonce that address will use on Nimiq, and the amount to destroy.

The address receiving the NIM is the **target**. The nonce belongs to the target, not to the caller and not to the burn, and this is the first place the two directions come apart. On the EVM side it is carried rather than checked: `burn` does not validate it, because the counter it has to match lives on Nimiq and the EVM network cannot read it. The check happens when the release is processed.

The contract destroys the caller's own tokens, so no approval or ownership check is involved beyond the caller holding the balance. Two rules are enforced before anything is burned. The amount must be greater than zero, and it must be a whole number of luna: wNIM carries 18 decimals while NIM resolves only to luna, so anything finer could be destroyed on the EVM network and never released on Nimiq. See [Units](/bridge/how-it-works/lock-and-mint#units) for the conversion.

A burn emits three events. Destroying the tokens emits the standard ERC-20 `Transfer` to the zero address, which is what marks the burn itself. The other two are the bridge's own, and the difference between them matters to anyone building on it.

The contract packs the burn into 136 bytes and passes them to `forward` on the oracle contract, which emits them as a `DataForwarded` event tagged with the bridge contract's own address. **This is what the relayer reads.** The packed bytes are the target address, the nonce, the amount, the EVM chain id and the Nimiq bridge account that is allowed to release the burn.

It also emits `TokensBurned`, carrying the same target, nonce, amount and chain id. Every burn emits it, and nothing in the bridge reads it: the relayer works from the forwarded record, and no check anywhere depends on the event. It exists for wallets and explorers, and it is the one they should watch. The target is an indexed parameter, so a wallet can filter for a single user instead of reading every record the forwarder has emitted, and the event sits on the bridge contract's own address, so it stays put if the bridge is later pointed at a new oracle.

### The nonce has to be right

A release is accepted only if its nonce is exactly one higher than the last nonce released to that target. Nothing earlier in the process checks this, so a burn made with the wrong nonce is accepted, destroys the wNIM, and then cannot be released.

The value to use is the target's stored nonce plus one, plus however many burns to that target have already been made but not yet released. The stored value is readable from any Nimiq node with `getBridgeNonce`, and the first release to an address that has never received one carries nonce 1. Counting the burns still in flight is left to whoever builds them.

::callout{icon="i-tabler-alert-triangle" color="warning"}
Two burns to the same target must not carry the same nonce. The stored counter advances when a release is processed, not when a burn happens, so reading it again before the first release has landed returns the same value as before. If two burns collide on a nonce, only one of them can ever be released and the NIM behind the other stays locked permanently.
::

A nonce that skips ahead fails differently but is also unrecoverable in practice: the release waits for a predecessor that does not exist, and every later release for that target waits behind it.

## 2. Wait for confirmations

The burn now waits, but not for the same reason the other direction waits.

Nimiq has macro blocks, which finalize a batch and make its transactions irreversible. An EVM network offers no equivalent guarantee, so there is no point at which the burn becomes final by rule. Instead the transfer waits a fixed number of blocks and treats the burn as settled once the chance of a reorganization removing it has become small enough.

That number is a setting on the relayer rather than a property of either contract. It defaults to 128 blocks and is configurable per deployment. Raising it makes a reorganization less likely to strand the bridge; lowering it makes transfers complete sooner.

The risk it manages is specific: if a burn were relayed and the NIM released, and the burn were then removed by a reorganization, wNIM would exist again while the NIM backing it had already been paid out.

## 3. The burn is committed to the Nimiq oracle

In the other direction, the relayer forwards macro block headers that Nimiq produces itself, continuously, whether or not anyone is bridging. Nothing equivalent exists here. An EVM network publishes no structure that Nimiq can verify a single burn against, so **the relayer builds one**: it collects `DataForwarded` events, arranges them into a Merkle tree of its own construction, and commits that tree's root to the oracle on Nimiq.

What goes into the tree is the **record**, which is the forwarding contract's address followed by the forwarded bytes. Each leaf is the record hashed twice with Blake2b rather than once. The second hash is not redundant: a single hash would let anyone forward a 64-byte record whose second half was the hash of a record they invented, and that invented record would then prove through it as though it were a leaf of the tree.

Leaves are ordered by block and then by log index within the block, and the tree is built over every record the relayer has ever seen rather than only the new ones. Each root therefore re-commits all the earlier records, which is what keeps a fresh proof available for an old burn.

Two consequences follow.

The forwarder is permissionless. Any contract can call `forward`, and the relayer commits every record it emits without inspecting it. What keeps an unrelated record from being released as a burn is the bridge contract on Nimiq, which accepts a record only if the source address in it is the one contract that bridge was configured to accept. The source is part of the record, so it is part of what the proof commits to.

And because the committed root is constructed rather than published, the proof needed to spend it is not something a Nimiq node can produce. It comes either from the relayer, which exposes the proofs it builds, or from reconstructing the same tree independently by observing the `DataForwarded` events. The [integration guide](/bridge/integration/burn-and-release) covers both.

Writing to the oracle is restricted to its owner, exactly as in the other direction. This is the point of trust in the architecture. The oracle cannot check that a root reflects real burns, so the bridge relies on the owner to commit honest ones. Everything after that is enforced by consensus rules, and anyone can rebuild the tree from the `DataForwarded` events and compare its root with the one committed. See [Security and trust model](/bridge/security-and-trust).

## 4. Release the NIM on Nimiq

The final step is a transaction sent from the bridge contract on Nimiq. Its sender data carries the record, a Merkle proof, the oracle index the proof is checked against, and a signature.

### Only the target can authorize it

That signature has to be the target's. A release of a burn naming some address can only be authorized by whoever controls that address, and no proof, however valid, substitutes for it. The target therefore has to be an ordinary key-controlled Nimiq account, because it has to be able to produce a signature at all.

[Lock and mint](/bridge/how-it-works/lock-and-mint) requires the same of its destination, and for the same reason: the nonce. A release consumes the target's nonce, and that nonce is a single sequence per address, so letting a third party choose when to spend it would let them block every later release to that address. Requiring the recipient's consent keeps the sequence under the control of the one account it belongs to.

What stays open is submission. The signed release is an ordinary transaction and anyone can broadcast it, so the target does not have to be online at the right moment or depend on the relayer to deliver it.

### The fee comes out of the burned amount

The target does not need to hold any NIM to receive a release, which is an advantage of this bridge architecture. There is nothing to fund, and an address that has never been used on Nimiq can receive one.

That works because the fee is subtracted from the burned amount rather than added on top of it. The target chooses the split when signing: the amount it receives plus the fee it pays must equal the burned amount exactly. The release must pay out something, so the fee is always strictly less than the amount burned.

### What the contract checks

The contract checks the following, and rejects the transaction if any of them fails:

| **Check** | **What it prevents** |
| --- | --- |
| The record parses under the bridge's chain configuration | Accepting a payload the bridge was not configured to read |
| The release is signed by the target named in the record | Anyone other than the recipient spending that recipient's nonce |
| The transaction value and fee add up to the burned amount | Releasing an amount other than the one destroyed |
| The transaction recipient equals the target | Redirecting a release to somebody other than the intended recipient |
| The record's source is the contract this bridge accepts | Releasing against a record forwarded by some other contract |
| The chain the burn came from is the one this bridge serves | Accepting a genuine burn made on a different network |
| The record names this bridge account | A second bridge with the same source contract, whose nonce counters start empty, releasing every past burn again |
| The nonce is exactly one higher than the last one released to that target | Replaying a burn, and releasing burns for an address out of order |
| The proof is no deeper than the configured maximum, counting the record tree and the rotation levels together | Forcing unbounded verification work with an artificially deep proof |
| The proof reconstructs the current value of the oracle slot the root was written to | Releasing against a burn the oracle never committed to |
| The contract holds enough balance | Releasing more than the bridge has locked |

Only then is the balance reduced by the whole burned amount, the nonce recorded against the target, and the release logged.

### A release either succeeds or is invalid

Nimiq normally admits a transaction that fails as a failed transaction, charging its fee and recording it in the history. A release is never handled that way. If any check above does not pass, the transaction is invalid, and a block that contains it is invalid too.

What this means in practice is that a failed release costs nothing. The bridge is not debited, no fee is paid by anyone, and nothing is recorded. The burn is untouched and the release can be corrected and submitted again.

The alternative would be exploitable twice over. If the bridge paid the fee for a release that failed, a target could sign many releases of a single burn and drain the bridge through their fees alone. And a failing release that carried no fee would cost nothing to produce, so blocks could be filled with them for free.

## Proofs, and how long one lasts

The oracle on Nimiq holds a fixed number of slots and reuses them. Writing to a slot does not overwrite what was there: the new value is the hash of the old value together with the one being written, so a slot commits to every value ever written to it. See [Oracles](/bridge/how-it-works/oracles) for how this is stored.

A proof runs from the leaf up through the relayer's record tree to the root that was committed, and then through each value written to that slot since, ending at the value the slot holds now. Every rotation of the buffer adds another step, and the contract caps the total: the tree levels and the rotation levels together must stay within the configured maximum.

So an individual proof does age. The burn behind it does not. The relayer builds its tree over every record it has ever seen, so each new root commits to all the earlier records again, and a fresh proof against the newest root is always available. That is what a release should be built from. A proof that ends in an older slot can be made stale by the next oracle update.

In practice something shorter binds first. A signed release is an ordinary Nimiq transaction, so it expires with the protocol's transaction validity window, about two hours, long before its slot is written again. A release that does not land inside that window is rebuilt and signed again, which is the same work as refreshing the proof.
