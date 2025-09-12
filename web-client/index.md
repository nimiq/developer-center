---
title: Nimiq Web Client
description: The JavaScript library that lets you build blockchain applications directly in the browser — zero servers, zero complexity.
secondarySidebar: false
wide: true

heroCards:
  - icon: i-tabler:school
    title: Start Building Now
    description: Interactive tutorial that builds a complete wallet app in your browser. No setup, no downloads, just code.
    label: Try Now
    href: https://nimiq.guide
    bgColor: gold
    iconClass: absolute bottom--48 right--32 text-256
    class: "md:grid-row-span-full [&_p]:max-w-none"
    hoverColor: gold
  - icon: i-tabler:download
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Quick Install
    description: Add to your project in 30 seconds
    href: ./installation
    hoverColor: blue
  - icon: i-tabler:puzzle
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Framework Guides
    description: Vite, Next.js, Nuxt, Webpack — we've got you covered
    href: ./integrations/
    hoverColor: green
  - icon: i-tabler:tools
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Utilities Library
    description: Production-ready helpers for addresses, validation, and more
    href: ../nimiq-utils/
    hoverColor: orange

whyNimiq:
  label: Why Choose Web Client
  title: Skip the Infrastructure, Build the Future
  description: Traditional blockchain apps require servers, databases, and complex setups. Nimiq Web Client connects directly to the blockchain from any browser.
  features:
    - title: Zero Infrastructure
      description: No servers, APIs, or third-party dependencies
      icon: i-nimiq:duotone-network
      iconColor: text-blue
    - title: Fast Sync
      description: Connect to the network in seconds, not hours
      icon: i-nimiq:duotone-speedmeter
      iconColor: text-green
    - title: Mobile Ready
      description: Works on phones, tablets, and desktops
      icon: i-nimiq:duotone-incognito
      iconColor: text-orange
    - title: WebAssembly Powered
      description: Rust performance compiled to WASM
      icon: i-nimiq:verified
      iconColor: text-gold
    - title: Developer Friendly
      description: Modern JavaScript APIs you already know
      icon: 'scale-80 i-nimiq:widget origin-left'
      iconColor: text-purple
    - title: Always Online
      description: Your users' data stays with them
      icon: 'scale-80 i-nimiq:watch-1-50 origin-left'
      iconColor: text-red

browserServerBanner:
  label: 'Browser vs Server'
  headline: Building for browser or server environment?
  subline: "Learn about the differences between browser and Node.js implementations and choose the right approach."
  linkHref: './browser-vs-server'
  linkLabel: 'Compare Browser and Server Development'

alternativeOptions:
  label: Alternative
  title: Need More Power?
  description: For advanced use cases, consider our RPC interface with full node capabilities
  align: left
  buttons:
    - text: Explore RPC Documentation
      href: ../rpc-client/
      variant: primary
    - text: Compare Web Client vs RPC
      href: ./web-client-vs-rpc
      variant: secondary

directConnection:
  align: left
  label: How It Works
  title: Connect Directly to the Blockchain
  description: No servers, no APIs, no middlemen — just your browser connecting directly to the Nimiq network.
  h1: false

integrationsLabel: Get Started
integrationsTitle: Choose Your Stack
integrationsDescription: Nimiq works with the tools you already use. Pick your framework and start building in minutes.
integrationsActions:
  - title: Vite
    description: Lightning-fast development with hot reload
    href: ./integrations/vite
    icon: i-logos:vitejs
    iconClass: gray group-hocus:filter-none
  - title: Next.js
    description: Full-stack React with server-side rendering
    href: ./integrations/NextJS
    icon: i-logos:nextjs-icon
    iconClass: gray group-hocus:filter-none
  - title: Nuxt
    description: Vue.js framework with auto-imports
    href: ./integrations/nuxt
    icon: i-logos:nuxt-icon
    iconClass: gray group-hocus:filter-none
  - title: Webpack
    description: Traditional bundling with full control
    href: ./integrations/webpack
    icon: i-logos:webpack
    iconClass: gray group-hocus:filter-none

popularResourcesLabel: Popular Resources
popularResourcesTitle: Everything You Need to Build
popularResourcesDescription: From getting started to advanced features, find the resources that match your experience level.
popularResources:
  - title: First Steps
    links:
      - text: What is Nimiq?
        href: ./getting-started
      - text: Installation Guide
        href: ./installation
      - text: Interactive Tutorial
        href: https://nimiq.guide
      - text: Web Client vs RPC
        href: ./web-client-vs-rpc
  - title: Framework Setup
    links:
      - text: Vite Integration
        href: ./integrations/vite
      - text: Next.js Integration
        href: ./integrations/NextJS
      - text: Nuxt Integration
        href: ./integrations/nuxt
      - text: Webpack Integration
        href: ./integrations/webpack
      - text: All Integrations
        href: ./integrations/
  - title: UI & Components
    links:
      - text: Nimiq UI Library
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
      - text: Complete API Docs
        href: ./reference/
      - text: Client Classes
        href: ./reference/classes/
      - text: Core Interfaces
        href: ./reference/interfaces/
      - text: Global Functions
        href: ./reference/globals
      - text: Utility Functions
        href: ../nimiq-utils/
  - title: Advanced
    links:
      - text: Network Configuration
        href: ./reference/classes/Client
      - text: Transaction Handling
        href: ./reference/interfaces/
      - text: Account Management
        href: ./reference/globals
      - text: Custom Integrations
        href: ./integrations/
      - text: Nimiq MCP
        href: https://github.com/onmax/nimiq-mcp
        target: _blank
  - title: Community
    links:
      - text: Nimiq Awesome
        href: https://github.com/onmax/nimiq-awesome
        target: _blank
      - text: GitHub Repository
        href: https://github.com/nimiq/core-rs-albatross
        target: _blank
      - text: Community Forum
        href: https://forum.nimiq.community/
        target: _blank
      - text: Telegram Chat
        href: https://t.me/nimiq
        target: _blank
      - text: Discord Server
        href: https://discord.gg/cMHemg8
        target: _blank
---

<script setup lang="ts">
import Hero from '../.vitepress/theme/components/Hero.vue'
import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
import AlternativeOptions from '../.vitepress/theme/components/AlternativeOptions.vue'
import HoverableGrid from '../.vitepress/theme/components/HoverableGrid.vue'
import Banner from '../.vitepress/theme/components/Banner.vue'
import PopularResources from '../.vitepress/theme/components/PopularResources.vue'
</script>

<Hero :title="$frontmatter.title" :description="$frontmatter.description" :cards="$frontmatter.heroCards" align="left" />

<section>

<NqHeadline f-mt-5xl f-mb-sm title="Start with 4 lines of code" label="JavaScript" align="left" description="Get up and running in under a minute" />

<div class="nq-raw">

:::code-group

```js [browser.js]
import init, * as Nimiq from '@nimiq/core'

await init()

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

```js [Node.js]
import Nimiq from '@nimiq/core'

const config = new Nimiq.ClientConfiguration()
const client = await Nimiq.Client.create(config.build())

await client.waitForConsensusEstablished()
```

:::

</div>

</section>

<ConsensusMapSection f-py-3xl />

<Banner f-my-xl v-bind="$frontmatter.browserServerBanner" />

<NimiqFeatures align="left" f-pb-3xl f-pt-2xl v-bind="$frontmatter.whyNimiq" :show-borders="false" />

<AlternativeOptions v-bind="$frontmatter.alternativeOptions" />

<HoverableGrid align="left" :title="$frontmatter.integrationsTitle" :description="$frontmatter.integrationsDescription" :label="$frontmatter.integrationsLabel" :actions="$frontmatter.integrationsActions" />

<PopularResources f-py-4xl align="left" :label="$frontmatter.popularResourcesLabel" :title="$frontmatter.popularResourcesTitle" :description="$frontmatter.popularResourcesDescription" :resources="$frontmatter.popularResources" />
