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
      description: Build web and mobile-web apps that interact with Nimiq directly in the browser. Completely decentralized, no server required
      label: Build in Browser
      href: ./web-client/
      bgColor: blue
      iconClass: absolute bottom--48 right--32 text-256
      class: "md:grid-row-span-full [&_p]:max-w-none"
    - icon: i-local:nimiq-rpc
      iconClass: text-neutral-800 absolute top-16 right-16 text-32
      title: RPC Client
      description: Build full-stack applications with Nimiq
      href: ./rpc-client/
      hoverColor: gold
    - icon: i-local:nimiq-validators
      iconClass: text-neutral-800 absolute top-16 right-16 text-32
      title: Validators
      description: Secure the nework and earn rewards
      href: ./validators/
      hoverColor: green
    - icon: i-local:nimiq-albatross
      iconClass: text-neutral-800 absolute top-16 right-16 text-32
      title: Albatross
      description: Learn about the protocol
      href: ./protocol/
      hoverColor: "red"

albatrossLiveview:
  label: Live Demo
  title: See the chain move
  description: Instant, feeless & green payments visualised in real time.

nimiqFeatures:
  label: Why Nimiq
  title: Browser-first blockchain
  description: No middlemen. No servers. No barriers. No fees. Connect directly to from any browser.
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
      description: 1 second block confirmation
      icon: i-nimiq:bolt
      iconClass: text-orange
      iconBgColor: bg-gradient-orange
    - title: Energy‑Efficient
      description: 99.9% less energy than PoW consensus
      icon: i-nimiq:leaf-2
      iconBgColor: bg-gradient-gold
    - title: Community‑Driven
      description: 100% open‑source & active devs
      icon: i-tabler:users
      iconBgColor: bg-purple
    - title: Dev‑Friendly
      description: Simple APIs, rich docs, IDE support
      icon: i-nimiq:code
      iconBgColor: bg-gradient-red

quickStart:
  label: Quick Start
  title: Jump right in — no install
  description: Start experimenting with Nimiq right away.
  actions:
    - title: WebClient Tutorial
      description: Interactive, in‑browser walkthrough
      href: https://nimiq.guide
      icon: i-local:nimiq-tutorial
    - title: RPC Playground
      description: Test JSON‑RPC calls live
      href: ./rpc-client/
      icon: i-local:nimiq-rpc
    - title: Nimiq MCP
      description: Build with AI
      href: https://github.com/onmax/nimiq-mcp
      icon: i-local:nimiq-mcp
      iconClass: op-100

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
        - text: RPC Playground
          href: ./rpc-client/playground
        - text: RPC Methods
          href: ./rpc-client/methods/
        - text: Client Libraries
          href: ./rpc-client/clients
        - text: Account Queries
          href: ./rpc-client/getAccount
        - text: Send Transactions
          href: ./rpc-client/sendRawTransaction
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
        - text: Node Setup Guide
          href: ./validators/prover-node-guide
    - title: Validator Operators
      links:
        - text: Becoming a Validator
          href: ./validators/becoming-a-validator
        - text: Staking Handbook
          href: ./validators/staking-handbook
        - text: Trustscore System
          href: ./validators/validator-trustscore
        - text: Staking FAQ
          href: ./validators/staking-faq
        - text: Validators API
          href: https://github.com/nimiq/validators-api
          # TODO: TS library. ARPL
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
import QuickStart from './.vitepress/theme/components/QuickStart.vue'
import NimiqFeatures from './.vitepress/theme/components/NimiqFeatures.vue'
import NimiqAppsSection from './.vitepress/theme/components/NimiqAppsSection.vue'
import PopularResources from './.vitepress/theme/components/PopularResources.vue'
</script>

<Hero bg-neutral-0 v-bind="$frontmatter.hero" />

<QuickStart bg-neutral-100 v-bind="$frontmatter.quickStart" />

<NimiqFeatures bg-neutral-0 v-bind="$frontmatter.nimiqFeatures" />

<AlbatrossBlockchain bg-darkerblue scheme-dark v-bind="$frontmatter.albatrossLiveview" />

<NimiqAppsSection bg-neutral-0 v-bind="$frontmatter.nimiqAppsSection" />

<PopularResources bg-neutral-100 v-bind="$frontmatter.popularResources" />
