---
title: Nimiq Web Client
description: The JavaScript library that lets you build blockchain applications directly in the browser — zero servers, zero complexity.
layout: overview

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
      iconBgColor: bg-gradient-blue
    - title: Fast Sync
      description: Connect to the network in seconds, not hours
      icon: i-nimiq:duotone-speedmeter
      iconBgColor: bg-gradient-green
    - title: Mobile Ready
      description: Works on phones, tablets, and desktops
      icon: i-nimiq:duotone-incognito
      iconBgColor: bg-gradient-orange
    - title: WebAssembly Powered
      description: Rust performance compiled to WASM
      icon: i-nimiq:verified
      iconBgColor: bg-gradient-gold
    - title: Developer Friendly
      description: Modern JavaScript APIs you already know
      icon: 'scale-80 i-nimiq:widget'
      iconBgColor: bg-purple
    - title: Always Online
      description: Your users' data stays with them
      icon: 'scale-80 i-nimiq:watch-1-50'
      iconBgColor: bg-gradient-red

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
  - title: ESM
    description: Native ES modules for modern browsers
    href: ./integrations/ESM
    icon: i-logos:javascript
    iconClass: gray group-hocus:filter-none

---

<script setup lang="ts">
import Hero from '../.vitepress/theme/components/Hero.vue'
import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
import AlternativeOptions from '../.vitepress/theme/components/AlternativeOptions.vue'
import HoverableGrid from '../.vitepress/theme/components/HoverableGrid.vue'
import Banner from '../.vitepress/theme/components/Banner.vue'
</script>

<Hero :title="$frontmatter.title" :description="$frontmatter.description" :cards="$frontmatter.heroCards" align="left" />

<section>

<NqHeadline f-mt-5xl f-mb-sm title="Start with 4 lines of code" label="JavaScript" align="left" description="Get up and running in under a minute" />

<div class="nq-raw">

::: code-group

```bash [pnpm]
pnpm add @nimiq/core
```

```bash [npm]
npm install @nimiq/core
```

```bash [yarn]
yarn add @nimiq/core
```

```bash [bun]
bun add @nimiq/core
```

:::

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

<NimiqFeatures bg-neutral-0 align="left" f-pb-3xl f-pt-2xl v-bind="$frontmatter.whyNimiq" :show-borders="false" />

<section style="--pt: 0px;">

<Banner f-my-xl v-bind="$frontmatter.browserServerBanner" />

</section>

<AlternativeOptions v-bind="$frontmatter.alternativeOptions" />

<HoverableGrid align="left" :title="$frontmatter.integrationsTitle" :description="$frontmatter.integrationsDescription" :label="$frontmatter.integrationsLabel" :actions="$frontmatter.integrationsActions" />
