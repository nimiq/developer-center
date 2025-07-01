---
sidebar: false
secondarySidebar: false

quickstarts:
  - label: Web App Quick-Start
    href: web-client/getting-started
  - label: Backend Quick-Start
    href: rpc-client/
  - label: Validator Quick-Start
    href: validators/becoming-a-validator

showcaseApps:
  - title: Nimiq Wallet
    description: Browser-based cryptocurrency wallet
    href: https://wallet.nimiq.com
    icon: i-tabler:wallet
  - title: Nimiq Watch
    description: Blockchain explorer and analytics
    href: https://nimiq.watch
    icon: i-tabler:chart-line
  - title: Nimiq Pool
    description: Decentralized mining pool
    href: https://pool.nimiq.com
    icon: i-tabler:pool

whyNimiq:
  - title: Browser-First
    description: Build directly in the browser without servers or infrastructure
    icon: i-tabler:browser
  - title: Instant Finality
    description: Albatross consensus delivers sub-second confirmation times
    icon: i-tabler:bolt
  - title: Energy Efficient
    description: Proof-of-Stake consensus uses 99.9% less energy than PoW
    icon: i-tabler:leaf
  - title: AI-First Development
    description: Official MCP server lets AI assistants interact with Nimiq directly
    icon: i-tabler:robot
  - title: Developer Friendly
    description: Simple APIs, extensive docs, and active community support
    icon: i-tabler:code
---

<script setup lang="ts">
import Hero from './.vitepress/theme/components/Hero.vue'
// import './node_modules/nimiq-css/dist/css/static-content.css'
</script>

<section bg-white>

# Build, Connect, Validate {.nq-headline}

Everything you need to create with Nimiq — pick the toolkit that fits your stack.

<Hero />

</section>

<section bg-darkblue>

## What is Nimiq? {.nq-label}

Nimiq is a browser-first blockchain designed for seamless Web3 integration. Built on Albatross consensus, it delivers instant finality and energy-efficient validation while maintaining full decentralization.

### Why Choose Nimiq? {.nq-label}

<NqGrid f-mt-lg f-mb-2xl :cards="$frontmatter.whyNimiq" />

## Start Building in Minutes {.nq-label}

Get your first Nimiq app running in under 5 minutes with our quick-start guides:

<div f-mt-lg f-mb-2xl>
  <div flex="~ gap-f-md wrap">
    <a v-for="q in $frontmatter.quickstarts" :key="q.label" :href="q.href" nq-pill-blue nq-arrow>{{ q.label }}</a>
  </div>
</div>

</section>

## Built with Nimiq {.nq-label}

See what's possible with Nimiq's developer tools:

<NqGrid f-mt-lg f-mb-2xl :cards="$frontmatter.showcaseApps" />

## Popular Resources {.nq-label}

<div f-mt-lg grid="~ cols-1 md:cols-2 lg:cols-4 gap-f-md">
  <div>
    <h4 text="f-sm neutral-800" font-bold mb-8>Web Development</h4>
    <ul list-none space-y-4 text="f-xs">
      <li><a href="/web-client/installation" hover:underline>Installation Guide</a></li>
      <li><a href="/web-client/integrations" hover:underline>Framework Integration</a></li>
      <li><a href="https://onmax.github.io/nimiq-ui/" hover:underline target="_blank">UI Components</a></li>
    </ul>
  </div>

  <div>
    <h4 text="f-sm neutral-800" font-bold mb-8>Backend & API</h4>
    <ul list-none space-y-4 text="f-xs">
      <li><a href="/rpc-client/clients" hover:underline>RPC Clients</a></li>
      <li><a href="/rpc-client/getAccount" hover:underline>Account Queries</a></li>
      <li><a href="/rpc-client/sendRawTransaction" hover:underline>Send Transactions</a></li>
    </ul>
  </div>

  <div>
    <h4 text="f-sm neutral-800" font-bold mb-8>Validators</h4>
    <ul list-none space-y-4 text="f-xs">
      <li><a href="/validators/prover-node-guide" hover:underline>Prover Node Setup</a></li>
      <li><a href="/validators/staking-handbook" hover:underline>Staking Handbook</a></li>
      <li><a href="/validators/validator-trustscore" hover:underline>Trustscore System</a></li>
    </ul>
  </div>

  <div>
    <h4 text="f-sm neutral-800" font-bold mb-8>Community</h4>
    <ul list-none space-y-4 text="f-xs">
      <li><a href="/protocol/protocol/block-format" hover:underline>Protocol Docs</a></li>
      <li><a href="https://github.com/onmax/nimiq-awesome" hover:underline target="_blank">Awesome Nimiq</a></li>
      <li><a href="https://github.com/onmax/nimiq-mcp" hover:underline target="_blank">AI MCP Server</a></li>
    </ul>
  </div>
</div>

<div f-mt-2xl f-pt-xl border="t-1 neutral-200">
  <p text="f-base neutral-600">
    Need help getting started? Join our community on <a href="https://discord.gg/cMHemg8" nq-arrow text="blue hover:blue-600">Discord</a> or check out the <a href="https://forum.nimiq.community/" nq-arrow text="blue hover:blue-600">Community Forum</a>.
  </p>
</div>
