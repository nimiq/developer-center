<script setup lang="ts">
const specUrl = __ALBATROSS_RPC_OPENRPC_URL__
const specVersion = __ALBATROSS_RPC_OPENRPC_VERSION__
</script>

<template>
  <div flex="~ items-baseline gap-32 justify-start" my-32 class="nq-raw">
    <span op-80 text-14>Version {{ specVersion }}</span>
    <a :href="withBase('/migration/migration-json-rpc')" nq-pill-orange nq-pill-sm nq-arrow cursor-pointer un-text="white" flex="~ gap-8 items-center">
      Migrate from Nimiq PoW
    </a>
    <a :href="specUrl" nq-pill-tertiary nq-pill-sm cursor-pointer flex="~ gap-8 items-center" download un-text="neutral-900">
      <div i-nimiq:arrow-to-bottom op-80 />
      Download OpenRPC.json
    </a>
  </div>
</template>
