---
links:
  - bgColor: blue
    icon: i-nimiq:icons-lg-verified
    label: Validator
    title: Pre-registration
    description: How to be prepared to join the first epoch as a validator and earn rewards from the very beginning
    href: validator-registration
    layout: lg
    span: 6
  - title: Be part of the migration
    label: Node Operators
    href: node-operators
  - label: Learn more
    title: Deep dive into the technical details
    href: migration-technical-details
  - label: FAQ
    title: Check our FAQs for more information
    href: faqs
---

# Nimiq Migration to Proof-of-Stake

We are transitioning from a Proof-of-Work blockchain to a Proof-of-Stake blockchain. Learn more about the migration process and how you can get involved. {.nq-subline}

<Grid class="nq-raw" :items="$frontmatter.links" mt-64 />

## Understanding the Migration

Nimiq is transitioning from a Proof-of-Work to a Proof-of-Stake blockchain through a special hard fork. The transition process includes several key phases:

- **Pre-registration Phase**: Establishes the first list of validators for the PoS blockchain within the PoW chain
- **Pre-Staking Phase**: Users pre-stake their NIM
- **Activation Phase**: Selects candidate transition blocks from the PoW chain and executes the transition to the PoS chain if at least 80% of the stake is ready

During the migration, we will capture the entire blockchain state, including all accounts, balances, and transaction history. This means that users' balances will remain intact and will be transferred to the new PoS chain.

**There is no requirement to participate in the migration.** However, if you want, you can [become one of the first validators](validator-registration) or [migrate as an observer](node-operators). Nimiq ensures that no NIM will be lost during the process. We have [guides](#nimiq-migration-to-proof-of-stake) available for those who want to actively engage in the transition.

## Most Asked Questions

**Do I need to participate in the migration?**

No, you don't need to participate unless you want to become one of our first validators or actively engage in the process as a node operator with zero downtime. Your NIM and transaction history will be automatically transferred to the new PoS chain.

---

**Will my NIM be safe during the transition?**

Yes, all NIM balances and transaction histories will be securely migrated to the PoS chain, and no NIM will be lost during this process.

---

**Can I access my Wallet post-transition with the same Login File?**

Yes, you can. Your address and data will be transferred to the PoS chain, so your Login File remains the same.
