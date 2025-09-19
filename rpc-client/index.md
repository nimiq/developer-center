---
layout: overview

hoverableGrid:
  label: Quick Start
  title: Jump right in
  description: Start experimenting with the Nimiq RPC API.
  actions:
    - title: Browse RPC Methods
      description: Explore all available RPC methods and try them directly in the browser
      href: ./methods/
      icon: i-tabler:book-2
    - title: Open RPC Servers
      description: Use public servers for testing and development
      href: ./open-servers
      icon: i-tabler:server
    - title: Integrations
      description: Learn how to connect with a CLI, TypeScript, or HTTP
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
      description: Fully typed client libraries for TypeScript
      icon: i-tabler:shield-check
      iconBgColor: bg-purple
    - title: Production Ready
      description: High availability and performance
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

const rpcVersion = __NIMIQ_RPC_VERSION__

const openRpcDocumentUrl = `https://github.com/nimiq/core-rs-albatross/releases/download/${rpcVersion}/openrpc-document.json`
const githubRelease =`https://github.com/nimiq/core-rs-albatross/releases/tag/${rpcVersion}`
</script>

# Nimiq RPC Client

Connect your backend services to the Nimiq blockchain with full access to blockchain data and operations through standard JSON-RPC and RESTful endpoints.

<div flex="~ gap-8" class="nq-raw">

<a :href="githubRelease" nq-arrow  f-text-xs mx-0 font-semibold font-code z-100 target="_blank" rel="noopener noreferrer" nq-pill-secondary title="View Release on GitHub">
  <div i-nimiq:logos-github-mono mr-4 />
{{ rpcVersion }}
</a>
<a :href="openRpcDocumentUrl" nq-pill-secondary mx-0 download f-text-xs font-semibold font-code z-100 title="Download OpenRPC JSON">
  <div i-nimiq:arrow-to-bottom mr-4 />
  Download OpenRPC JSON
</a>

</div>

<HoverableGrid v-bind="$frontmatter.hoverableGrid" f-pt-md />

<NimiqFeatures v-bind="$frontmatter.rpcFeatures" />

<Banner  v-bind="$frontmatter.mcpBanner" />

<section>

<NqHeadline
  label="RPC Methods"
  title="Explore the API"
  description="Discover the full range of RPC methods available for interacting with the Nimiq blockchain."
  :h1="false"
  f-mb-sm
/>

| Category | Methods | Description |
|---|---|---|
| **Blockchain** | `getBlockByNumber`, `getBlockByHash`, `getLatestBlock` | Access block data and chain state |
| **Accounts** | `getAccountByAddress`, `getBalance` | Query account information and balances |
| **Transactions** | `getTransactionByHash`, `getTransactionsByAddress`, `sendRawTransaction` | Handle transaction operations |
| **Validators** | `getValidators`, `getValidatorByAddress`, `getSlotAt` | Access validator and staking data |
| **Network** | `getNetworkInfo`, `getEpochNumber` | Monitor network status and consensus |

[View All RPC Methods](./methods/){.nq-arrow .nq-pill-blue}

</section>

<NqGrid f-my-xl :cards="$frontmatter.needHelp" />

<style>
  :is(section) {
    --px: 0 !important;

    > * {
      width: 100%;
      --nq-max-width: none;
    }
  }
</style>
