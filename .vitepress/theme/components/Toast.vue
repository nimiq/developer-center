<script setup lang="ts">
import { Toast } from 'radix-vue/namespaced'

defineProps<{
  title: string
  category: 'success'
}>()

const show = defineModel<boolean>()
</script>

<template>
  <Toast.Provider>
    <slot />

    <Toast.Root
      v-model:open="show" class="rounded-full px16 py8 shadow-[--nq-shadow]"
      :class="{ 'bg-gradient-green': category === 'success' }"
    >
      <Toast.Title class="flex gap-x-10 items-center text-white">
        <div v-if="category === 'success'" i-nimiq:check />
        {{ title }}
      </Toast.Title>
      <!-- <Toast.Description /> -->
      <!-- <Toast.Action /> -->
      <!-- <Toast.Close /> -->
    </Toast.Root>

    <Toast.Viewport class="fixed bottom-16 md:bottom-32 right-16 md:right-32 flex flex-col z-10" />
  </Toast.Provider>
</template>
