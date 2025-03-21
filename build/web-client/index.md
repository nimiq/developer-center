---
prose: false
aside: false
footer: false
webClientFeatures:
  - title: No Servers
    icon: i-nimiq:duotone-network
    description: Become a node in the network without the need for servers.
  - title: Client-Side
    icon: i-nimiq:duotone-incognito
    description: Private and secure by design.
  - title: Light and Fast
    icon: i-nimiq:duotone-speedmeter
    description: Compiled to WASM for speed and efficiency.
  - title: Proof-of-Stake
    icon: i-nimiq:verified
    description: A true PoS client that's light on resources.
  - title: Cross-Platform
    icon: i-nimiq:widget
    description: Works anywhere, adapts to different environments.
  - title: Real-Time Updates
    icon: i-nimiq:watch-1-50
    description: Subscribe to real-time updates from the network.
  - title: TypeScript
    icon: i-nimiq:tools-wench-hammer-outline
    description: Great type support for a better development experience.

  # - title: Interactive Tutorials
  #   description: Learn through step-by-step guides and examples.
  #   href: features/interactive-tutorials
  #   type: 'icon-small'
  - title: Community Support
    icon: i-nimiq:logos-telegram-mono
    description: Access to the Nimiq Coders Dojo for support and collaboration.
    href: https://t.me/nimiq
---

# Nimiq Web Client

Connect to the blockchain directly from your browser {.nq-subline .mt-0}

The Nimiq Web Client is a Javascript library that allows you to manage and transact on the Nimiq blockchain directly from your browser. {.mt-32}

<div flex="~ gap-x-16 gap-y-12 wrap" mt-36 class="nq-raw">
  <a href="./getting-started" nq-pill-blue nq-arrow>Getting Started</a>
  <!-- <a href="./getting-started" nq-pill-tertiary>Tutorials</a> -->
  <a href="./installation" nq-pill-tertiary>Installation</a>
</div>

<NqGrid f-my-xl :cards="$frontmatter.webClientFeatures"  />
