---
prose: false
aside: false
footer: false

title: Nimiq Web Client
description: Build blockchain applications that run entirely in the browser — no servers required.

heroCards:
  - icon: i-tabler:player-play
    title: Interactive Tutorial
    description: Learn by building a complete wallet app directly in your browser. No setup required, just start coding!
    label: Start Learning
    href: https://tutorial.nimiq.com
    bgColor: gold
    iconClass: absolute bottom--48 right--32 text-256
    class: "md:grid-row-span-full [&_p]:max-w-none"
    hoverColor: gold
  - icon: i-tabler:download
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Installation Guide
    description: Get started with Nimiq Web Client in your project
    href: ./installation
  - icon: i-tabler:plug
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Framework Integrations
    description: Setup guides for Vite, Next.js, Nuxt, and more
    href: ./integrations/
  - icon: i-tabler:tools
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Nimiq Utils
    description: Essential utilities for Nimiq development
    href: ./nimiq-utils

webClientFeaturesLabel: Why Web Client
webClientFeaturesTitle: Browser-First Blockchain Development
webClientFeaturesDescription: Build decentralized applications that run entirely in the browser without servers or infrastructure.
webClientFeatures:
  - title: No Servers
    description: Just you and the browser
    icon: i-nimiq:duotone-network
    iconColor: text-blue
  - title: Secure
    description: Built-in crypto modules
    icon: i-nimiq:duotone-incognito
    iconColor: text-green
  - title: It's fast
    description: Establish consensus in less than 10s.
    icon: i-nimiq:duotone-speedmeter
    iconColor: text-orange
  - title: WASM
    description: Built for the future
    icon: i-nimiq:verified
    iconColor: text-gold
  - title: Compatible
    description: Works seamlessly in multiple JS runtimes
    icon: 'scale-80 i-nimiq:widget origin-left'
    iconColor: text-purple
  - title: Real-Time Data
    description: Subscribe to live blockchain events
    icon: 'scale-80 i-nimiq:watch-1-50 origin-left'
    iconColor: text-red

quickStartLabel: Quick Start
quickStartTitle: Start Building in Minutes
quickStartDescription: Jump in and start experimenting with Nimiq Web Client right away. No setup required.
quickStartActions:
  - title: Interactive Tutorial
    description: Learn by building a complete wallet app in your browser
    href: https://tutorial.nimiq.com
    icon: i-local:nimiq-tutorial
  - title: Vite Integration
    description: Get started with Vite and modern build tools
    href: ./integrations/vite
    icon: i-tabler:brand-vite
  - title: Next.js Integration
    description: Build full-stack apps with Next.js and Nimiq
    href: ./integrations/NextJS
    icon: i-tabler:brand-nextjs
  - title: Nimiq MCP
    description: Build with AI using our MCP server integration
    href: https://github.com/onmax/nimiq-mcp
    icon: i-local:nimiq-mcp

popularResourcesLabel: Popular Resources
popularResourcesTitle: Everything You Need to Build with Web Client
popularResourcesDescription: Comprehensive guides, tools, and resources to help you build amazing blockchain applications.
popularResources:
  - title: Getting Started
    links:
      - text: Installation Guide
        href: ./installation
      - text: Quick Start Tutorial
        href: ./getting-started
      - text: Interactive Tutorial
        href: https://tutorial.nimiq.com
      - text: Web Client vs RPC
        href: ./web-client-vs-rpc
  - title: Framework Integration
    links:
      - text: Vite Setup
        href: ./integrations/vite
      - text: Next.js Setup
        href: ./integrations/NextJS
      - text: Nuxt Setup
        href: ./integrations/nuxt
      - text: Webpack Setup
        href: ./integrations/webpack
      - text: All Integrations
        href: ./integrations/
  - title: UI & Components
    links:
      - text: Nimiq UI Components
        href: https://onmax.github.io/nimiq-ui/
        target: _blank
      - text: Nimiq Icons
        href: https://onmax.github.io/nimiq-ui/nimiq-icons/explorer
        target: _blank
      - text: Nimiq CSS
        href: https://onmax.github.io/nimiq-ui/nimiq-css/getting-started
        target: _blank
      - text: Identicons Library
        href: https://github.com/onmax/nimiq-identicons
        target: _blank
  - title: API Reference
    links:
      - text: Web Client Reference
        href: ./reference/
      - text: Global Functions
        href: ./reference/globals
      - text: Client Classes
        href: ./reference/classes/
      - text: Core Interfaces
        href: ./reference/interfaces/
      - text: Nimiq Utils
        href: ./nimiq-utils
  - title: Tools & Development
    links:
      - text: Nimiq MCP (AI)
        href: https://github.com/onmax/nimiq-mcp
        target: _blank
      - text: RPC Playground
        href: ../rpc-client/playground
      - text: Community Forum
        href: https://forum.nimiq.community/
        target: _blank
      - text: Telegram Community
        href: https://t.me/nimiq
        target: _blank
  - title: Advanced Topics
    links:
      - text: Network Connection
        href: ./reference/classes/Client
      - text: Transaction Handling
        href: ./reference/interfaces/
      - text: Account Management
        href: ./reference/globals
      - text: WebAssembly Core
        href: ./reference/@nimiq/
---

<script setup lang="ts">
import Hero from '../.vitepress/theme/components/Hero.vue'
import WebClientExplainer from '../.vitepress/theme/components/WebClientExplainer.vue'
import GetStartedSection from '../.vitepress/theme/components/GetStartedSection.vue'
import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
import QuickStart from '../.vitepress/theme/components/QuickStart.vue'
import PopularResources from '../.vitepress/theme/components/PopularResources.vue'
</script>

<Hero :title="$frontmatter.title" :description="$frontmatter.description" :cards="$frontmatter.heroCards" align="left" />

<WebClientExplainer />

<GetStartedSection />

<NimiqFeatures align="left" f-pb-3xl f-pt-2xl :title="$frontmatter.webClientFeaturesTitle" :description="$frontmatter.webClientFeaturesDescription" :label="$frontmatter.webClientFeaturesLabel" :features="$frontmatter.webClientFeatures" :show-borders="false" />

<QuickStart align="left" :title="$frontmatter.quickStartTitle" :description="$frontmatter.quickStartDescription" :label="$frontmatter.quickStartLabel" :actions="$frontmatter.quickStartActions" />

<PopularResources align="left" :label="$frontmatter.popularResourcesLabel" :title="$frontmatter.popularResourcesTitle" :description="$frontmatter.popularResourcesDescription" :resources="$frontmatter.popularResources" />

## Architecture Overview

The Nimiq Web Client transforms how blockchain applications are built and deployed by enabling direct browser-to-blockchain connections.

```mermaid
graph TD
    A[Your Web App] --> B[Nimiq Web Client]
    B --> C[WebAssembly Core]
    B --> D[Network Layer]
    C --> E[Blockchain State]
    D --> F[Nimiq Network]
    F --> G[Validators & Peers]

    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#fff3e0
    style D fill:#e8f5e8
```

The Web Client consists of several key components:

- **Core Engine**: WebAssembly-compiled blockchain logic for maximum performance
- **Network Layer**: P2P communication with the Nimiq network
- **Account Management**: Secure key handling and transaction signing
- **State Synchronization**: Efficient blockchain state updates

## Use Cases

### DeFi Applications
Build decentralized exchanges, lending protocols, and yield farming applications with real-time market data and zero infrastructure costs.

### Payment Solutions
Integrate cryptocurrency payments into e-commerce platforms and business applications with instant confirmations and no fees.

### NFT Marketplaces
Create, trade, and manage non-fungible tokens with integrated wallet functionality and seamless user experience.

### Gaming & Rewards
Develop blockchain games, loyalty programs, and reward systems with instant transactions and client-side security.

<div mt-48 p-24 bg="neutral-100 dark:neutral-900" f-rounded-lg>
  <h3 text="f-lg" font-bold mb-12>Need Help?</h3>
  <p text="f-base neutral-700 dark:neutral-300" mb-16>
    Join our developer community for support, discussions, and the latest updates.
  </p>
  <div flex="~ gap-12 wrap">
    <a href="https://t.me/nimiq" nq-pill-tertiary target="_blank">Telegram Community</a>
    <a href="https://forum.nimiq.community/" nq-pill-tertiary target="_blank">Community Forum</a>
    <a href="https://github.com/nimiq" nq-pill-tertiary target="_blank">GitHub</a>
  </div>
</div>
