---
title: Nimiq Hub
description: The secure wallet integration API that lets your users sign transactions, manage accounts, and interact with the blockchain — without you ever touching their private keys.
layout: overview

heroCards:
  - icon: i-tabler:rocket
    title: Get Started in Minutes
    description: Add wallet functionality with just a few lines of code. No complex setup, no key management.
    label: Quick Start
    href: ./getting-started
    bgColor: gold
    iconClass: absolute bottom--48 right--32 text-256
    class: "md:grid-row-span-full [&_p]:max-w-none"
    hoverColor: gold
  - icon: i-tabler:receipt
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Payment Integration
    description: Accept NIM payments with checkout()
    href: ./guide/transactions
    hoverColor: blue
  - icon: i-tabler:shield-check
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: User Authentication
    description: Sign-in with message signatures
    href: ./guide/transactions#signmessage
    hoverColor: green
  - icon: i-tabler:code-dots
    iconClass: text-neutral-800 absolute top-16 right-16 text-32
    title: Code Examples
    description: Real-world integration patterns
    href: ./examples
    hoverColor: orange

whyHub:
  label: Why Use Hub API
  title: Secure Wallet Integration Made Simple
  description: The Hub provides a unified interface for all Nimiq wallet operations. Your users maintain full control of their keys while you get a simple, powerful API.
  features:
    - title: Zero Key Management
      description: Private keys never leave the secure Keyguard environment
      icon: i-tabler:key-off
      iconBgColor: bg-gradient-blue
    - title: Trusted by Users
      description: Same interface across all Nimiq apps
      icon: i-tabler:users
      iconBgColor: bg-gradient-green
    - title: Multi-Chain Ready
      description: Support for Nimiq, Bitcoin, and Polygon
      icon: i-tabler:timeline
      iconBgColor: bg-gradient-orange
    - title: Simple Integration
      description: CDN or NPM — start in minutes
      icon: i-tabler:puzzle
      iconBgColor: bg-gradient-gold
    - title: Type-Safe API
      description: Full TypeScript definitions included
      icon: i-tabler:code
      iconBgColor: bg-purple
    - title: Mobile Friendly
      description: Popup or redirect flows for all devices
      icon: i-tabler:device-mobile
      iconBgColor: bg-gradient-red

quickStartGrid:
  label: Quick Start
  title: Jump right in
  description: Choose your integration path and start building.
  actions:
    - title: Getting Started Guide
      description: Install the Hub API and make your first request in 5 minutes
      href: ./getting-started
      icon: i-tabler:rocket
    - title: API Reference
      description: Complete documentation for all Hub methods and types
      href: ./api-reference
      icon: i-tabler:book-2
    - title: Live Examples
      description: Interactive examples you can copy and paste
      href: ./examples
      icon: i-tabler:code-dots

conceptsBanner:
  label: Understanding Hub
  headline: How the Hub Architecture Works
  subline: Learn about the Hub-Keyguard relationship, request behaviors, and security model.
  linkHref: ./guide/concepts
  linkLabel: Read Core Concepts

alternativeOptions:
  label: Alternative
  title: Need Lower-Level Control?
  description: For advanced use cases requiring direct blockchain access, consider using the Web Client or RPC API
  align: left
  buttons:
    - text: Explore Web Client
      href: ../web-client/
      variant: primary
    - text: Explore RPC Client
      href: ../rpc-client/
      variant: secondary
---

<script setup lang="ts">
import '../node_modules/nimiq-css/dist/css/static-content.css'
import Hero from '../.vitepress/theme/components/Hero.vue'
import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
import AlternativeOptions from '../.vitepress/theme/components/AlternativeOptions.vue'
import HoverableGrid from '../.vitepress/theme/components/HoverableGrid.vue'
import Banner from '../.vitepress/theme/components/Banner.vue'

const items = [
  { label: 'View on GitHub', href: 'https://github.com/nimiq/hub', icon: 'i-nimiq:logos-github' },
  { label: 'NPM Package', href: 'https://www.npmjs.com/package/@nimiq/hub-api', icon: 'i-nimiq:logos-npm' },
]
</script>

<Hero :title="$frontmatter.title" :description="$frontmatter.description" :cards="$frontmatter.heroCards" align="left">

<NqLinks :items />

</Hero>

<section>

<NqHeadline f-mt-5xl f-mb-sm title="Get started with 3 lines" label="JavaScript" align="left" description="Request a payment and get the signed transaction" />

<div class="nq-raw">

::: code-group

```bash [CDN]
<script src="https://cdn.jsdelivr.net/npm/@nimiq/hub-api@latest/dist/standalone/HubApi.standalone.umd.js"></script>
```

```bash [pnpm]
pnpm add @nimiq/hub-api
```

```bash [npm]
npm install @nimiq/hub-api
```

```bash [yarn]
yarn add @nimiq/hub-api
```

:::

:::code-group

```js [Payment Example]
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

const result = await hubApi.checkout({
  appName: 'My Shop',
  recipient: 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000',
  value: 1000000, // 0.01 NIM in Luna
})

console.log('Payment complete:', result.hash)
```

```js [Authentication]
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

const result = await hubApi.signMessage({
  appName: 'My App',
  message: 'Sign in to My App',
})

console.log('Signed by:', result.signer)
// Verify signature on your server
```

```js [Address Selection]
import HubApi from '@nimiq/hub-api'

const hubApi = new HubApi('https://hub.nimiq.com')

const result = await hubApi.chooseAddress({
  appName: 'My App',
})

console.log('Address:', result.address)
console.log('Label:', result.label)
```

:::

</div>

</section>

<NimiqFeatures bg-neutral-0 align="left" f-pb-3xl f-pt-2xl v-bind="$frontmatter.whyHub" :show-borders="false" />

<section style="--pt: 0px;">

<Banner f-my-xl v-bind="$frontmatter.conceptsBanner" />

</section>

<HoverableGrid align="left" v-bind="$frontmatter.quickStartGrid" f-pt-md />

<section>

<NqHeadline
  label="Hub API Methods"
  title="Everything you need"
  description="From simple payments to multi-chain transactions, the Hub API has you covered."
  :h1="false"
  f-mb-sm
/>

| Category | Methods | Description |
|:---|:---|:---|
| **Transactions** | `checkout`, `signTransaction`, `signStaking` | Request payments and sign transactions |
| **Authentication** | `signMessage`, `chooseAddress` | Authenticate users and select addresses |
| **Cashlinks** | `createCashlink`, `manageCashlink` | Create shareable payment links |
| **Multi-Chain** | `signBtcTransaction`, `signPolygonTransaction` | Bitcoin and Polygon support |
| **Atomic Swaps** | `setupSwap`, `refundSwap` | Trustless cross-chain exchanges |

[View All Methods](./api-reference){.nq-arrow .nq-pill-blue}

</section>

<AlternativeOptions v-bind="$frontmatter.alternativeOptions" />

<section>

<NqHeadline
  label="Integration Guides"
  title="Step-by-step guides"
  description="Learn how to integrate the Hub API into your application."
  align="left"
  :h1="false"
  f-mb-sm
/>

<NqGrid :cards="[
  {
    icon: 'i-tabler:shopping-cart',
    title: 'E-commerce Checkout',
    description: 'Accept NIM payments in your online store',
    href: './examples#payment-button',
  },
  {
    icon: 'i-tabler:login',
    title: 'User Authentication',
    description: 'Implement wallet-based login flows',
    href: './examples#user-authentication',
  },
  {
    icon: 'i-tabler:database',
    title: 'Staking Interface',
    description: 'Let users stake to validators',
    href: './examples#staking-interface',
  },
  {
    icon: 'i-tabler:gift',
    title: 'Gift Cards & Cashlinks',
    description: 'Create shareable payment links',
    href: './examples#gift-cardcashlink-creator',
  },
]" />

</section>

<section style="--pt: 64px;">

<NqHeadline
  label="Key Features"
  title="Built for developers"
  description="Everything you need to build secure, user-friendly blockchain applications."
  align="left"
  :h1="false"
  f-mb-sm
/>

:::tip Security First
The Hub uses a separate secure origin (Keyguard) to store and manage private keys. Your application **never** has access to user keys — all signing happens in the isolated Keyguard environment.
:::

**Request Behaviors**

Choose how the Hub appears to your users:
- **Popup** (default) - Opens in a centered popup window
- **Redirect** - Full-page redirect for mobile-friendly flows
- **IFrame** - Seamless integration for privileged origins

**Multi-Chain Support**

Beyond Nimiq, the Hub supports:
- **Bitcoin** - Sign Bitcoin transactions with `signBtcTransaction()`
- **Polygon** - Sign EVM transactions with `signPolygonTransaction()`
- **Atomic Swaps** - Trustless cross-chain trading

**Type Safety**

Full TypeScript definitions for all methods, requests, and responses:

```ts
interface CheckoutRequest {
  appName: string
  recipient: string
  value: number
  fee?: number
  extraData?: string | Uint8Array
  // ... and more
}
```

</section>
