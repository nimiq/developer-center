<script setup lang="ts">
import { useFaucet } from '../../composables/useFaucet'
import Input from '../Input.vue'

const { address, state, message, requestFunds, canRequest } = useFaucet()
</script>

<template>
  <div class="nq-raw" f-mt-md of-clip rounded-8 outline="1.5 offset--1.5 solid neutral-300">
    <header flex="~ items-baseline justify-between gap-8" z-1 f-px-xs py-8 rounded-2 bg-neutral-100 f-text-xs border="b-1 solid neutral-400">
      <div class="nq-label" flex="~ items-center gap-8">
        <div i-tabler:droplet text-12 op-70 />
        <code f-text-2xs>Faucet</code>
      </div>
    </header>

    <form of-hidden f-px-sm f-py-xs @submit.prevent="requestFunds">
      <Input v-model="address" label="Address" required type="string" />

      <div flex="~ items-center justify-end gap-8" f-mt-xs>
        <button nq-pill nq-pill-gold :disabled="state === 'loading' || !canRequest" :class="{ 'cursor-not-allowed': state === 'loading' || !canRequest }" scale-90 type="submit">
          {{ state === 'loading' ? 'Requesting...' : 'Request NIM' }}
          <div i-nimiq:triangle-right ml-6 bottom--1 text-10 />
        </button>
      </div>
    </form>

    <div v-if="message" :class="state === 'success' ? 'bg-green/10' : 'bg-red/10'" f-p-xs rounded-b-6>
      <div flex="~ items-start gap-8">
        <div :class="state === 'success' ? 'i-nimiq:check text-green' : 'i-nimiq:alert text-red'" mt-2 shrink-0 text-14 />
        <p :class="state === 'success' ? 'text-green-900' : 'text-red-900'" m-0 text="f-xs">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>
