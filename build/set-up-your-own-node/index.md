---
links:
  - title: Run a Validator
    bgColor: green
    label: Connect
    icon: i-nimiq:icons-lg-verified
    description: Collect stake, validate blocks and earn.
    tags: [Validator]
    href: becoming-a-validator
  - label: RPC
    title: Connect via RPC
    href: rpc-docs/
    tags: [RPC]
  - label: Nimiq 2.0
    title: Migration to PoS
    href: migration-guide
prose: false
prev: false
next: false
aside: false
footer: false
---

<HeadsUp />

# Set up your Nimiq Albatross node

Full Control and Advanced Customization Beyond the Web Client.{.nq-subline}

<Tags :tags="$frontmatter.links.map(l => l.tags).filter(Boolean).flat()" mt-24 />
<Grid  :items="$frontmatter.links" mt-64 />

## Not sure which client to use? {.mt-64}

Most applications will not require a private node. To learn more, explore the differences between the [Web Client and RPC](/build/web-client-rpc.md).{.mt-16}
