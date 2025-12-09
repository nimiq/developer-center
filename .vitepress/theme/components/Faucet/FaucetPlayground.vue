<script setup lang="ts">
import { useFaucet } from '../../composables/useFaucet'
import Input from '../Input.vue'

const { address, state, message, requestFunds, canRequest } = useFaucet()
</script>

<template>
  <div class="nq-raw" rounded-8 of-clip f-mt-md outline="1.5 offset--1.5 solid neutral-300">
    <header flex="~ items-baseline justify-between gap-8" py-8 rounded-2 bg-neutral-100 z-1 f-text-xs f-px-xs border="b-1 solid neutral-400">
      <div class="nq-label" flex="~ items-center gap-8">
        <div i-tabler:droplet text-12 op-70 />
        <code f-text-2xs>Faucet (Testnet)</code>
      </div>
    </header>

    <form of-hidden f-px-sm f-py-xs @submit.prevent="requestFunds">
      <Input v-model="address" label="Address" required type="string" />

      <div flex="~ items-center justify-end gap-8" f-mt-xs>
        <button :disabled="state === 'loading' || !canRequest" :class="{ 'cursor-not-allowed': state === 'loading' || !canRequest }" scale-90 nq-pill nq-pill-gold type="submit">
          {{ state === 'loading' ? 'Requesting...' : 'Request NIM' }}
          <div text-10 ml-6 bottom--1 i-nimiq:triangle-right />
        </button>
      </div>
    </form>

    <div v-if="message" :class="state === 'success' ? 'bg-green/10' : 'bg-red/10'" rounded-b-6 f-p-xs>
      <div flex="~ items-start gap-8">
        <div :class="state === 'success' ? 'i-nimiq:check text-green' : 'i-nimiq:alert text-red'" text-14 mt-2 shrink-0 />
        <p :class="state === 'success' ? 'text-green-900' : 'text-red-900'" m-0 text="f-xs">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>
