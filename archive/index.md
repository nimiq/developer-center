---
links:
  - bgColor: blue
    icon: i-nimiq:verified
    label: Validator
    title: Pre-registration
    description: How to be prepared to join the first epoch as a validator and earn rewards from the very beginning
    href: validator-registration
    span: half
  - title: Be part of the migration
    label: Node Operators
    href: node-operators
    span: half
  - label: Learn more
    title: Deep dive into the technical details
    href: migration-technical-details
  - label: FAQ
    title: Check our FAQs for more information
    href: faqs
  - label: PoS
    title: Curious about the new PoS? Check the protocol
    href: ../protocol/index
---

# Legacy PoW → PoS Migration

> [!NOTE]
> This archive preserves the resources created for the Proof-of-Work to Proof-of-Stake transition.

<NqGrid f-my-xl :cards="$frontmatter.links" />

## Understanding the Migration

Nimiq completed the transition from a Proof-of-Work to a Proof-of-Stake blockchain through a special hard fork. The transition process included several key phases:

- **Pre-registration Phase**: Establishes the first list of validators for the PoS blockchain within the PoW chain
- **Pre-Staking Phase**: Users pre-stake their NIM
- **Activation Phase**: Selects candidate transition blocks from the PoW chain and executes the transition to the PoS chain if at least 80% of the stake is ready

During the migration, the entire blockchain state—including accounts, balances, and transaction history—was captured so that users' balances moved intact to the PoS chain.

**Participation was optional.** Those who wanted to contribute could [become one of the first validators](validator-registration) or [migrate as observers](node-operators). The captured state ensured no NIM was lost during the process, and the guides below document the steps that were available at the time.

## Most Asked Questions

**Do I need to participate in the migration?**

No, you don't need to participate unless you want to become one of our first validators or actively engage in the process as a node operator with zero downtime. Your NIM and transaction history will be automatically transferred to the new PoS chain.

---

**Will my NIM be safe during the transition?**

Yes, all NIM balances and transaction histories will be securely migrated to the PoS chain, and no NIM will be lost during this process.

---

**Can I access my Wallet post-transition with the same Login File?**

Yes, you can. Your address and data will be transferred to the PoS chain, so your Login File remains the same.
