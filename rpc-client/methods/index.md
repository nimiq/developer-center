---
changelog: false
outline: false
widget: true
showSecondarySidebar: true
---

<script setup lang="ts">
import {withBase} from 'vitepress'
const methods = __NIMIQ_OPENRPC_METHODS__
</script>

# RPC Methods

Explore all available JSON-RPC methods for interacting with the Nimiq blockchain. Each method provides full documentation, parameters, return types, and interactive examples.

<div v-for="({ text, items }) in methods" :key="text" flex="~ col gap-16" nq-raw>
  <h2 nq-label f-text-2xs="!" mx-0 mb-0="!">{{ text }}</h2>

  <div grid="~ cols-1 lg:cols-2 xl:cols-3 gap-16" mx-0>
    <a
      v-for="({ link, text }) in items"
      :key="text"
      :href="withBase(link)"
      nq-hoverable w-full f-p-2xs="!" f-text-xs
    >
      {{ text.replace('`', '').replace('`', '') }}
    </a>
  </div>
</div>
