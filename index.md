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
---

<script setup lang="ts">
import Hero from './.vitepress/theme/components/Hero.vue'
import YellowPages from './.vitepress/theme/components/YellowPages.vue'
</script>

# Build, Connect, Validate {.nq-headline}

Everything you need to create with Nimiq — pick the toolkit that fits your stack.

<Hero />

In a nutshel{.nq-label}

## What is Nimiq?{.mt-0!}

Nimiq is a browser-first blockchain designed for seamless Web3 integration. Built on Albatross consensus, it delivers instant finality and energy-efficient validation while maintaining full decentralization. Whether you're building web apps, managing backend services, or securing the network, Nimiq provides the tools to get you started in minutes.

<YellowPages />

## Quick-Start Guides {.nq-label}

<div f-mt-2xl>
  <div flex="~ gap-f-md wrap" f-mb-xl>
    <a v-for="q in $frontmatter.quickstarts" :key="q.label" :href="q.href" nq-pill-blue nq-arrow>{{ q.label }}</a>
  </div>
</div>

## Pick Your Path {.nq-label}

<div f-mt-2xl class="nq-raw">
  <div f-p-lg f-rounded-lg bg="neutral-50/50" border="1 neutral-200">

| Goal | Where to Start | Popular Guides |
|---|---|---|
| Embed Nimiq in a web or mobile-web app | [Web Client](web-client/getting-started) | [Installation](web-client/installation) · [Integrations](web-client/integrations) |
| Query balances & history from a backend | [RPC Client](rpc-client/) | [Clients overview](rpc-client/clients) · Method list |
| Operate a high-performance validator | [Validator Setup](validators/becoming-a-validator) | [Prover node guide](validators/prover-node-guide) · [Trustscore](validators/validator-trustscore) |
| Understand the math behind Albatross | [Protocol Overview](protocol/protocol/overview) | [Block format](protocol/protocol/block-format) · [ZKP](protocol/protocol/ZKP-and-recursive-SNARKs) |

  </div>
</div>

<div f-mt-2xl f-pt-xl border="t-1 neutral-200">
  <p text="f-base neutral-600">
    Need something else? Browse the sidebar or ask the community on <a href="https://discord.gg/cMHemg8" nq-arrow text="blue hover:blue-600">Discord</a>.
  </p>
</div>
