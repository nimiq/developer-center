<script setup lang="ts">
const specUrl = __ALBATROSS_RPC_OPENRPC_URL__
const specVersion = __ALBATROSS_RPC_OPENRPC_VERSION__
</script>

<template>
  <div flex="~ items-baseline gap-32 justify-start" my-32 class="nq-raw">
    <span text-14 op-80>Version {{ specVersion }}</span>
    <a :href="withBase('/migration/migration-json-rpc')" nq-pill-sm cursor-pointer nq-arrow nq-pill-orange un-text="white" flex="~ gap-8 items-center">
      Migrate from Nimiq PoW
    </a>
    <a :href="specUrl" flex="~ gap-8 items-center" nq-pill-sm download cursor-pointer nq-pill-tertiary un-text="neutral-900">
      <div i-nimiq:arrow-to-bottom op-80 />
      Download OpenRPC.json
    </a>
  </div>
</template>
