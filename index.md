---
layout: home
sidebar: false
secondarySidebar: false

hero:
  title: Build. Connect. Validate.
  description: Fast, feeless & energy‑light blockchain rails for web developers.
  cards:
    - icon: i-carbon:ibm-cloud-vpc-client-vpn
      title: Web Client
      description: Build web and mobile apps that interact with Nimiq directly in the browser. Fully decentralized — no server required
      label: Build in Browser
      href: ./web-client/
      bgColor: blue
      iconClass: absolute bottom--48 right--32 text-256
      class: "md:grid-row-span-full [&_p]:max-w-none"
    - icon: i-local:nimiq-rpc
      title: RPC Client
      description: Build full-stack applications with Nimiq
      href: ./rpc-client/
      hoverColor: gold
    - icon: i-local:nimiq-validators
      title: Validators
      description: Secure the network and earn rewards
      href: ./nodes/validators/becoming-a-validator
      hoverColor: green
    - icon: i-local:nimiq-albatross
      title: Albatross
      description: Learn about the protocol
      href: ./protocol/
      hoverColor: orange

albatrossLiveview:
  label: Live Demo
  title: See the chain move
  description: Instant, feeless & green payments visualized in real time.

nimiqFeatures:
  label: Why Nimiq
  title: Browser-first blockchain
  description: No middlemen. No servers. No barriers. No fees. Connect directly from any browser.
  features:
    - title: Browser‑First
      description: Build entirely in‑browser with no servers
      icon: i-nimiq:browsermesh
      iconBgColor: bg-gradient-blue
    - title: Zero Fees
      description: Send & receive value with zero cost
      icon: i-nimiq:cash
      iconBgColor: bg-gradient-green
    - title: Instant Finality
      description: 1‑second confirmations
      icon: i-nimiq:bolt
      iconClass: text-orange
      iconBgColor: bg-gradient-orange
    - title: Energy‑Efficient
      description: 99.9% less energy than PoW consensus
      icon: i-nimiq:leaf-2
      iconBgColor: bg-gradient-gold
    - title: Community‑Driven
      description: 100% open‑source and active devs
      icon: i-tabler:users
      iconBgColor: bg-purple
    - title: Dev‑Friendly
      description: Simple APIs, rich docs, IDE support
      icon: i-nimiq:code
      iconBgColor: bg-gradient-red

hoverableGrid:
  label: Quick Start
  title: Jump right in — no install
  description: Start experimenting with Nimiq right away.
  actions:
    - title: Web Client Tutorial
      description: Interactive, in‑browser walkthrough
      href: https://nimiq.guide
      icon: i-local:nimiq-tutorial
    - title: RPC Quick Start
      description: Explore docs and run JSON-RPC from your environment
      href: ./rpc-client/
      icon: i-local:nimiq-rpc
    - title: Nimiq MCP
      description: Build with AI
      href: https://github.com/onmax/nimiq-mcp
      icon: i-local:nimiq-mcp

nimiqAppsSection:
  label: Community Projects
  title: Explore the Nimiq Ecosystem
  description: Discover apps, games & tools built by the community.

popularResources:
  label: Popular Resources
  title: Everything You Need to Build with Nimiq
  resources:
    - title: Web Development
      links:
        - text: Getting Started
          href: ./web-client/getting-started
        - text: Installation Guide
          href: ./web-client/installation
        - text: Framework Integration
          href: ./web-client/integrations
        - text: Interactive Tutorial
          href: https://nimiq.guide
        - text: Nimiq Utils
          href: ./nimiq-utils/
        - text: Web Client vs RPC
          href: ./web-client/web-client-vs-rpc
    - title: UI & Design
      links:
        - text: UI Components
          href: https://onmax.github.io/nimiq-ui/
        - text: Nimiq Icons
          href: https://onmax.github.io/nimiq-ui/nimiq-icons/explorer
        - text: Nimiq CSS
          href: https://onmax.github.io/nimiq-ui/nimiq-css/getting-started
        - text: Identicons Library
          href: https://github.com/onmax/nimiq-identicons
    - title: Backend & API
      links:
        - text: RPC Methods
          href: ./rpc-client/methods/
        - text: TypeScript
          href: ./rpc-client/integrations/typescript
        - text: ARPL CLI Tool
          href: https://github.com/sisou/arpl
        - text: Account Queries
          href: ./rpc-client/methods/get-accounts
        - text: Send Transactions
          href: ./rpc-client/methods/send-raw-transaction
    - title: Migration
      links:
        - text: Migration Overview
          href: ./migration/
        - text: For Integrators
          href: ./migration/migration-integrators
        - text: JSON-RPC Migration
          href: ./migration/migration-json-rpc
        - text: Technical Details
          href: ./migration/migration-technical-details
    - title: Node Operators
      links:
        - text: Prover Node Guide
          href: ./nodes/prover-node-guide
    - title: Validator Operators
      links:
        - text: Becoming a Validator
          href: ./nodes/validators/becoming-a-validator
        - text: Staking Handbook
          href: ./nodes/validators/staking-handbook
        - text: Trustscore System
          href: ./nodes/validators/validator-trustscore
        - text: Staking FAQ
          href: ./nodes/validators/staking-faq
        - text: Validators API
          href: https://github.com/nimiq/validators-api#add-your-validator-information
        - text: Validator RPC Docs
          href: ./rpc-client
        - text: ARPL CLI Tool
          href: https://github.com/sisou/arpl?tab=readme-ov-file#sisoualbatross-remote-arpl
    - title: Core & Protocol
      links:
        - text: Protocol Docs
          href: ./protocol/
        - text: Core Implementation
          href: https://github.com/nimiq/core-rs-albatross
    - title: Community
      links:
        - text: Community Forum
          href: https://forum.nimiq.community/
        - text: Telegram
          href: https://t.me/nimiq
        - text: Awesome Nimiq
          href: https://github.com/onmax/nimiq-awesome
        - text: AI MCP Server
          href: https://github.com/onmax/nimiq-mcp

---

<script setup lang="ts">
import './node_modules/nimiq-css/dist/css/static-content.css'
import Hero from './.vitepress/theme/components/Hero.vue'
import AlbatrossBlockchain from './.vitepress/theme/components/AlbatrossLiveview/index.vue'
import HoverableGrid from './.vitepress/theme/components/HoverableGrid.vue'
import NimiqFeatures from './.vitepress/theme/components/NimiqFeatures.vue'
import NimiqAppsSection from './.vitepress/theme/components/NimiqAppsSection.vue'
import PopularResources from './.vitepress/theme/components/PopularResources.vue'
</script>

<Hero bg-neutral-0 v-bind="$frontmatter.hero" />

<HoverableGrid bg-neutral-100 v-bind="$frontmatter.hoverableGrid" />

<NimiqFeatures bg-neutral-0 v-bind="$frontmatter.nimiqFeatures" />

<AlbatrossBlockchain bg-darkerblue scheme-dark v-bind="$frontmatter.albatrossLiveview" />

<NimiqAppsSection bg-neutral-0 v-bind="$frontmatter.nimiqAppsSection" />

<PopularResources bg-neutral-100 v-bind="$frontmatter.popularResources" />
