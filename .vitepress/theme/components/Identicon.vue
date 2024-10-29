<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { createIdenticon } from 'identicons-esm'
import { ref, watch } from 'vue'

const initialValue = 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000'
const input = useLocalStorage('identicon', initialValue)
const identicon = ref<string>('')

watch(input, async () => {
  if (!input.value)
    return
  identicon.value = await createIdenticon(input.value, { format: 'image/svg+xml' })
}, { immediate: true })

watch(input, async () => {
  if (input.value === 'nimiq') {
    const { default: confetti } = await import('canvas-confetti')
    confetti({ particleCount: 300, spread: 360, origin: { y: 0.6 } })
  }
})
</script>

<template>
  <form nq-mt-32 relative @submit.prevent>
    <input v-model="input" type="text" placeholder="Enter something..." rounded-full text-lg px-16 w-full mx-auto nq-input-box>
    <template v-if="input === initialValue">
      <svg absolute top-0 right--16 op-30 version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.15007472985735 165.48889560262165" width="279.15007472985735" height="165.48889560262165" scale-60>
        <g stroke-linecap="round"><g transform="translate(130.41382362914226 106.16812588849137) rotate(0 -59.645037997946844 -47.79570511661953)"><path d="M0.77 1.07 C-12.46 -3.4, -59.08 -9.78, -79.13 -25.98 C-99.17 -42.19, -112.66 -84.37, -119.52 -96.17 M-0.29 0.58 C-13.17 -3.8, -56.89 -8.78, -76.91 -24.73 C-96.93 -40.69, -113.13 -83.23, -120.41 -95.15" stroke="#1e1e1e" stroke-width="2" fill="none" /></g><g transform="translate(130.41382362914226 106.16812588849137) rotate(0 -59.645037997946844 -47.79570511661953)"><path d="M-119.78 -96.3 L-107.95 -84.02 L-120.85 -78.72 L-118.82 -95.84" stroke="none" stroke-width="0" fill="#1e1e1e" fill-rule="evenodd" /><path d="M-120.41 -95.15 C-115.24 -93.44, -113.47 -89.58, -108.62 -85.88 M-120.41 -95.15 C-117.01 -93.34, -114.79 -90.12, -108.62 -85.88 M-108.62 -85.88 C-109.85 -84.12, -112.19 -82.78, -119.94 -80.16 M-108.62 -85.88 C-111.12 -83.99, -113.6 -82.71, -119.94 -80.16 M-119.94 -80.16 C-120.16 -83.62, -119.06 -87.29, -120.41 -95.15 M-119.94 -80.16 C-120.36 -85.44, -119.42 -89.46, -120.41 -95.15 M-120.41 -95.15 C-120.41 -95.15, -120.41 -95.15, -120.41 -95.15 M-120.41 -95.15 C-120.41 -95.15, -120.41 -95.15, -120.41 -95.15" stroke="#1e1e1e" stroke-width="2" fill="none" /></g></g></svg>
      <p style="font-family: Segoe Script, Bradley Hand, Comic Sans;" absolute right-0 top-90 rotate--10 text-sm op-80>
        You can write anything!
      </p>
    </template>
    <p v-if="input === 'nimiq'" absolute right-0 top-32 text-xs op-80>
      You found the secret word! Take a cookie 🍪
    </p>
    <p v-if="input === 'albatross'" absolute right-0 top-30 text-xs op-80 text-right>
      Nope. Keep trying.
      <br>
      Nonetheless, this identicon rocks 🤘
    </p>
  </form>
  <img :src="identicon" alt="Identicon" nq-mt-16 size-180 mx-auto>
</template>
