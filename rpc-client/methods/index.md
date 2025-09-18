---
changelog: false
secondarySidebar: false
---

<script setup lang="ts">
import {withBase} from 'vitepress'
const methods = __NIMIQ_OPENRPC_METHODS__
</script>

# RPC Methods

Explore all available JSON-RPC methods for interacting with the Nimiq blockchain. Each method provides full documentation, parameters, return types, and interactive examples.

<div v-for="({ text, items }) in methods" :key="text" flex="~ col gap-12" nq-raw>
  <h2 nq-label f-text-2xs="!" mx-0 mb-0="!">{{ text }}</h2>

  <div grid="~ cols-1 lg:cols-2 xl:cols-4 gap-16" mx-0 >
    <a
      v-for="({ link, text, popular }) in items"
      :key="text"
      :href="withBase(link)"
      nq-hoverable w-full f-p-2xs="!" un-text="f-xs truncate" block
      hocus:z-1000 hocus:w-auto min-w-full group of="initial x-clip"
    >
      {{ text.replace('`', '').replace('`', '') }}
      <span flex="~ items-center gap-4"  absolute top-0 translate-y="-50%" right-8 bg-neutral-0 nq-label rounded-full outline="~ 1.5 neutral-400 group-hocus:gold/30" px-4 py-2 text="9 group-hocus:white" v-if="popular" group-hocus:bg-gold transition-colors tracking-widest>
      <div i-nimiq:star op="40 group-hocus:80" mr-2 size-8 transition-opacity />
        Popular
      </span>
    </a>
  </div>
</div>
