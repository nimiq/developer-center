---
links:
  - title: Run a Validator
    bgColor: green
    label: Connect
    icon: i-nimiq:verified
    description: Collect stake, validate blocks and earn.
    href: ./validators/becoming-a-validator
  - label: RPC
    title: Connect via RPC
    bgColor: blue
    icon: i-tabler:plug
    href: ../rpc-client/
docs:
  - title: Becoming a Validator
    href: ./validators/becoming-a-validator
    icon: i-tabler:user-check
    iconClass: 'absolute top-12 right-12 size-24 text-neutral-700 dark:text-neutral-300'
    description: 'Requirements and step‑by‑step guide to run a validator node.'
  - title: Prover Node Setup
    href: ./prover-node-guide
    icon: i-tabler:server
    iconClass: 'absolute top-12 right-12 size-24 text-neutral-700 dark:text-neutral-300'
    description: 'How to run a prover node used by the network’s ZKP system.'
  - title: Node Setup
    href: https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration
    icon: i-tabler:shield-star
    iconClass: 'absolute top-12 right-12 size-24 text-neutral-700 dark:text-neutral-300'
    description: 'Concepts, operations, and best practices for staking in Nimiq.'
prose: false
prev: false
next: false
aside: false
footer: false
secondarySidebar: false
---

# Set up your Nimiq Albatross node

Full control and advanced customization beyond the Web Client.

<!-- <Tags :tags="$frontmatter.links.map(l => l.tags).filter(Boolean).flat()" mt-24 /> -->
<NqGrid f-my-xl :cards="$frontmatter.links" />

## Not sure which client to use? {.f-my-xl}

Most applications will not require a private node. To learn more, explore the differences between the [Web Client vs RPC Client](/web-client/web-client-vs-rpc).{.mt-16}

<NqGrid :cards="$frontmatter.docs" />
