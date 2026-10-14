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

This is the same shape as [Lock and mint](/bridge/how-it-works/lock-and-mint) read backwards, but it is not the same process in reverse. Three things differ in ways that matter: what the wait is based on, what the relayer commits, and how the release is authorized.

[IMAGE: bridge-burn-and-release.png. The four steps in sequence, from a user burning wNIM on the EVM network through to receiving NIM on Nimiq. It should be visibly different from the lock and mint diagram rather than the same picture with the arrows reversed, since the wait and the committed record work differently in this direction.]

## 1. Burn wNIM

The user calls `burn` with three arguments: the 20-byte Nimiq address that should receive the NIM, a nonce, and the amount to destroy.

The nonce on this side is a counter, and it exists to stop a burn being claimed twice. Once submitted, a signed transaction is public, so anyone can copy it and send it again. Without something in the transaction that changes between attempts, the copy is as valid as the original and would release the NIM a second time.

The counter closes that. It is part of what the user signs, the bridge contract records it when a release is processed, and a resubmitted transaction then carries a value that no longer matches. Every Nimiq destination address has its own count, and a release is accepted only if it carries the next number in that address's sequence.

This is not the account nonce an EVM network uses to order an account's own transactions, and Nimiq has no equivalent of its own: ordinary Nimiq transactions are protected from replay by the [validity window](/protocol/storage/history-store#validity-store-and-validity-window) instead.

The contract destroys the caller's own tokens, so no approval or ownership check is involved beyond the caller holding the balance. It then emits a `TokensBurned` event carrying the destination address, the nonce and the amount. That event is the only record of the burn, and everything downstream is built from it.

Two rules are enforced before anything is burned. The amount must be greater than zero, and it must be a whole number of luna: wNIM carries 18 decimals while NIM resolves only to luna, so anything finer could be destroyed on the EVM network and never released on Nimiq. See [Units](/bridge/how-it-works/lock-and-mint#units) for the conversion.

## 2. Wait for confirmations

The burn now waits, but not for the same reason the other direction waits.

Nimiq has macro blocks, which finalize a batch and make its transactions irreversible. An EVM network offers no equivalent guarantee, so there is no point at which the burn becomes final by rule. Instead the transfer waits a fixed number of blocks and treats the burn as settled once the chance of a reorganization removing it has become small enough.

That number is a setting on the relayer rather than a property of either contract. It defaults to 128 blocks and is configurable per deployment. Raising it makes a reorganization less likely to strand the bridge; lowering it makes transfers complete sooner.

The risk it manages is specific: if a burn were relayed and the NIM released, and the burn were then removed by a reorganization, wNIM would exist again while the NIM backing it had already been paid out.

## 3. The burn is committed to the Nimiq oracle

Here the two directions diverge most sharply.

In the other direction, the relayer commits a history root that Nimiq produces itself. Nothing equivalent exists here. An EVM network publishes no structure that Nimiq can verify a single burn against, so **the relayer builds one**: it collects `TokensBurned` events, arranges them into a Merkle tree of its own construction, and commits that tree's root to the oracle on Nimiq.

Each leaf is the raw event payload, 84 bytes, laid out as the destination address followed by the nonce and the amount. The tree is rebuilt on each update rather than appended to, so every root the oracle holds is the root over some prefix of the events the relayer had seen at that moment.

Two consequences follow, and both matter more than they first appear.

The ordering of leaves is **the relayer's own insertion order**, which matches the source network's own ordering only if it never took in an event out of sequence. This is an assumption to be checked rather than a property guaranteed by the network.

And because the committed root is constructed rather than published, the proof needed to spend it is not something a Nimiq node can produce. It comes either from the relayer, which exposes the proofs it builds, or from reconstructing the same tree independently by observing the burn events yourself. The [integration guide](/bridge/integration/burn-and-release) covers both.

Writing to the oracle is restricted to its owner, exactly as in the other direction.

## 4. Release the NIM on Nimiq

The final step is a transaction sent from the bridge contract on Nimiq, carrying the burn proof in its sender data.

Anyone can submit it. The transaction is signed, but the signature identifies whoever is submitting and paying the fee, not an authorized party: the valid proof is the only authorization the contract requires. This is deliberate, and it is what keeps the release path open to a user who does not want to depend on the relayer.

The contract then checks the following, and rejects the transaction if any of them fails:

| **Check** | **What it prevents** |
| --- | --- |
| The burn data parses under the bridge's chain configuration | Accepting a payload the bridge was not configured to read |
| The transaction value equals the burned amount | Releasing an amount other than the one destroyed |
| The transaction recipient equals the destination address in the burn | Redirecting a release to somebody other than the intended recipient |
| The network the burn came from is the one this bridge serves | Accepting a burn from a different network or a different bridge |
| The nonce is exactly one higher than the last one processed for that address | Replaying a burn, and processing burns for an address out of order |
| The proof is no deeper than the configured maximum | Forcing unbounded verification work with an artificially deep proof |
| The proof reconstructs the value the oracle holds at the given index | Releasing against a burn the oracle never committed to |
| The contract holds enough balance | Releasing more than the bridge has locked |

Only then is the balance reduced, the nonce recorded, and the release logged.

### The nonce is sequential

Replay protection on this side is a running counter kept per destination address, and each release must carry exactly the next value. This is stricter than it sounds and it is worth understanding before it bites.

If a burn is made with a nonce that skips ahead, the release cannot be processed, and neither can any later one for that address, because each is waiting for a predecessor that will never arrive. The address is blocked until the gap is filled.

The other direction has no equivalent constraint. There, each transaction is recorded individually once minted, so deposits are independent and cannot block one another. Only this direction imposes an order.

## Verifying against the oracle

The proof is checked against a single entry in the Nimiq oracle, but that entry alone is not enough. Because the Nimiq oracle stores only the chained value and not the raw committed root, the contract reconstructs the entry from **the one before it**. Both the entry the proof refers to and its immediate predecessor must still be held in the oracle's window.

This is the opposite of the EVM side, which stores the raw value alongside the chained one specifically so a single entry can be checked on its own. See [Oracles](/bridge/how-it-works/oracles) for how the window works and what happens when an entry is replaced.
