---
layout: home
sidebar: false
secondarySidebar: false

title: Build. Connect. Validate.
description: Everything you need to create with Nimiq — pick the toolkit that fits your stack.

heroCards:
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

nimiqFeaturesLabel: Why Nimiq
nimiqFeaturesTitle: Browser-first blockchain
nimiqFeaturesDescription: No middlemen. No servers. No barriers. No fees. Connect directly to from any browser.
nimiqFeatures:
  - title: Browser-First
    description: Build directly in the browser without servers or infrastructure
    icon: i-nimiq:browsermesh
    iconBgColor: bg-gradient-blue
  - title: Zero Fees
    description: Send transactions with no fees
    icon: i-nimiq:cash
    iconBgColor: bg-gradient-green
  - title: Instant Finality
    description: Albatross consensus delivers sub-second confirmation times
    icon: i-nimiq:bolt
    iconClass: text-orange
    iconBgColor: bg-gradient-orange
  - title: Energy Efficient
    description: Proof-of-Stake consensus uses 99.9% less energy than PoW
    icon: i-nimiq:leaf-2
    iconBgColor: bg-gradient-gold
  - title: Community-Driven
    description: Open-source development with active community contributions
    icon: i-tabler:users
    iconBgColor: bg-purple
  - title: Developer Friendly
    description: Simple APIs, extensive docs, and active community support
    icon: i-nimiq:code
    iconBgColor: bg-gradient-red

quickStartLabel: Quick Start
quickStartTitle: Start Building in Minutes
quickStartDescription: Jump in and start experimenting with Nimiq right away. No setup required.
quickStartActions:
  - title: WebClient Tutorial
    description: Interactive tutorial in the browser
    href: https://tutorial.nimiq.com
    icon: i-local:nimiq-tutorial
  - title: RPC Playground
    description: Test the RPC calls directly from your browser
    href: ./rpc-client/
    icon: i-local:nimiq-rpc
  - title: Nimiq MCP
    description: Build with AI using our MCP server integration
    href: https://github.com/onmax/nimiq-mcp
    icon: i-local:nimiq-mcp
    iconClass: op-100

nimiqAppsLabel: Community Projects
nimiqAppsTitle: Explore the Nimiq Ecosystem
nimiqAppsDescription: Discover community-built apps, games, tools and services powered by Nimiq's ecosystem.

popularResourcesLabel: Popular Resources
popularResourcesTitle: Everything You Need to Build with Nimiq
popularResourcesDescription: Comprehensive guides, tools, and resources to help you build amazing applications with Nimiq.
popularResources:
  - title: Web Development
    links:
      - text: Getting Started
        href: ./web-client/getting-started
      - text: Installation Guide
        href: ./web-client/installation
      - text: Framework Integration
        href: ./web-client/integrations
      - text: Interactive Tutorial
        href: https://tutorial.nimiq.com
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
        href: ./protocol/protocol/block-format
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
import QuickStart from './.vitepress/theme/components/QuickStart.vue'
import NimiqFeatures from './.vitepress/theme/components/NimiqFeatures.vue'
import NimiqAppsSection from './.vitepress/theme/components/NimiqAppsSection.vue'
import PopularResources from './.vitepress/theme/components/PopularResources.vue'
</script>

<Hero bg-neutral-0 :title="$frontmatter.title" :description="$frontmatter.description" :cards="$frontmatter.heroCards" />

<NimiqFeatures scheme-dark bg-darkerblue :title="$frontmatter.nimiqFeaturesTitle" :description="$frontmatter.nimiqFeaturesDescription" :label="$frontmatter.nimiqFeaturesLabel" :features="$frontmatter.nimiqFeatures" />

<QuickStart bg-neutral-100 :title="$frontmatter.quickStartTitle" :description="$frontmatter.quickStartDescription" :label="$frontmatter.quickStartLabel" :actions="$frontmatter.quickStartActions" />

<NimiqAppsSection :title="$frontmatter.nimiqAppsTitle" :description="$frontmatter.nimiqAppsDescription" :label="$frontmatter.nimiqAppsLabel" bg-neutral-0 />

<PopularResources bg-darkerblue scheme-dark :label="$frontmatter.popularResourcesLabel" :title="$frontmatter.popularResourcesTitle" :description="$frontmatter.popularResourcesDescription" :resources="$frontmatter.popularResources"   />
