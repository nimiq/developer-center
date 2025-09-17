---
secondarySidebar: false

hoverableGrid:
  label: Quick Start
  title: Jump right in
  description: Start experimenting with the Nimiq RPC API.
  actions:
    - title: Try the Playground
      href: ./playground
      description: Experiment with RPC calls in your browser
      icon: i-local:nimiq-rpc
    - title: Browse RPC Methods
      description: Explore all available RPC methods
      href: ./methods/
      icon: i-tabler:book-2
    - title: Client Libraries
      description: Explore our official client libraries
      href: ./clients
      icon: i-tabler:code

rpcFeatures:
  label: Why RPC API
  title: Perfect for backend integration
  description: The Nimiq RPC API is ideal for servers, exchanges, analytics platforms, and any service needing reliable blockchain connectivity.
  features:
    - title: Full Node Access
      description: Direct access to all Nimiq blockchain data and operations
      icon: i-tabler:database
      iconBgColor: bg-gradient-blue
    - title: RESTful & JSON-RPC
      description: Standard protocols for easy integration with any tech stack
      icon: i-tabler:api
      iconBgColor: bg-gradient-green
    - title: Real-Time Updates
      description: WebSocket subscriptions for live blockchain events
      icon: i-tabler:broadcast
      iconBgColor: bg-gradient-orange
    - title: Comprehensive Methods
      description: 120+ RPC methods covering all blockchain operations
      icon: i-tabler:layers-linked
      iconBgColor: bg-gradient-gold
    - title: Type-Safe Clients
      description: Fully typed client libraries for TypeScript and other languages
      icon: i-tabler:shield-check
      iconBgColor: bg-purple
    - title: Enterprise Ready
      description: Production-ready with high availability and performance
      icon: i-tabler:server
      iconBgColor: bg-gradient-red

mcpBanner:
  label: AI Development
  headline: Build with AI using Nimiq MCP
  subline: Enable AI assistants like Claude to interact directly with the Nimiq blockchain through our Model Context Protocol server.
  linkHref: https://github.com/onmax/nimiq-mcp
  linkLabel: Get Started

needHelp:
  - title: Telegram Community
    href: https://t.me/nimiq
    icon: i-nimiq:logos-telegram-mono
    description: Get API support and technical discussions
  - title: Nimiq GitHub
    href: https://github.com/nimiq
    icon: i-nimiq:logos-github-mono
    description: Source code and issue tracking
---

<script setup lang="ts">
import '../node_modules/nimiq-css/dist/css/static-content.css'
import HoverableGrid from '../.vitepress/theme/components/HoverableGrid.vue'
import NimiqFeatures from '../.vitepress/theme/components/NimiqFeatures.vue'
import Banner from '../.vitepress/theme/components/Banner.vue'
</script>

<span text="neutral-800 f-xs" absolute right-0 top-8 font-semibold outline="1.5 neutral-600 ~" f-px-2xs rounded-full font-code>
{{ __NIMIQ_RPC_VERSION__ }}
</span>

# Nimiq RPC Client

Connect your backend services to the Nimiq blockchain with full access to blockchain data and operations through standard JSON-RPC and RESTful endpoints.

<a :href="`https://github.com/nimiq/core-rs-albatross/releases/download/${__NIMIQ_RPC_VERSION__}/openrpc-document.json`" nq-arrow nq-pill-blue mx-0>
  Download OpenRPC JSON
</a>

<HoverableGrid v-bind="$frontmatter.hoverableGrid" />

<NimiqFeatures v-bind="$frontmatter.rpcFeatures" />

<Banner  v-bind="$frontmatter.mcpBanner" />

## RPC Methods Overview

Explore our comprehensive RPC API:

| Category | Methods | Description |
|---|---|---|
| **Blockchain** | `getBlockByNumber`, `getBlockByHash`, `getLatestBlock` | Access block data and chain state |
| **Accounts** | `getAccountByAddress`, `getBalance` | Query account information and balances |
| **Transactions** | `getTransactionByHash`, `getTransactionsByAddress`, `sendRawTransaction` | Handle transaction operations |
| **Validators** | `getValidators`, `getValidatorByAddress`, `getSlotAt` | Access validator and staking data |
| **Network** | `getNetworkInfo`, `getEpochNumber` | Monitor network status and consensus |

[View All RPC Methods →](./methods/)

<NqGrid f-my-xl :cards="$frontmatter.needHelp" />
