<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { createIdenticon } from 'identicons-esm'
import { ref, watch } from 'vue'

const input = useLocalStorage('identicon', 'NQ07 0000 0000 0000 0000 0000 0000 0000 0000')
const identicon = ref<string>('')

watch(input, async () => {
  if (!input.value)
    return
  identicon.value = await createIdenticon(input.value, { format: 'image/svg+xml' })
}, { immediate: true })
</script>

<template>
  <form nq-mt-32 @submit.prevent>
    <input v-model="input" type="text" placeholder="Enter something..." rounded-full text-lg px-16 w-full mx-auto nq-input-box>
  </form>
  <img :src="identicon" alt="Identicon" nq-mt-16 size-180 mx-auto>
</template>
