---
layout: home
prose: false

links:
  - bgColor: blue
    icon: i-nimiq:icons-lg-browsermesh
    label: Build
    title: Get Started with Nimiq
    description:  Create an app on Nimiq and have it running in 5 minutes.
    href: build/
  - bgColor: green
    icon: i-nimiq:icons-lg-cubes
    label: Learn
    title: The Underlying Technology
    description: Learn what makes Nimiq a truly unique blockchain.
    href: learn/
  - label: Validators and Stakers
    title: Learn about the pillars of Albatross PoS
    href: learn/protocol/validators/validators
  - label: Staking contract
    title: Everything for validators, stakers, and staking.
    href: learn/protocol/validators/staking-contract
  - label: Block format
    title: Everything about micro and macro blocks.
    href: learn/protocol/block-format
buildTogetherLinks:
  - title: Start Building
    icon: i-nimiq:icons-lg-tools
    description: Connect and interact with Albatross using JS
    href: build/web-client/
  - title: Run a Validator
    icon: i-nimiq:icons-lg-verified
    description: Collect stake, validate blocks and earn.
    href: build/set-up-your-own-node/becoming-a-validator
---

# Welcome to the Nimiq Developer Center

Get guides, resources and tips on how to create with Nimiq.{.nq-subline}

<HeadsUp />

<Grid :items="$frontmatter.links" mt-64 mb-136 />

## Let's Build Together

Create apps, run a validator or craft something delightful with Nimiq.{.nq-subline}

<Grid :items="$frontmatter.buildTogetherLinks" mt-64 />
