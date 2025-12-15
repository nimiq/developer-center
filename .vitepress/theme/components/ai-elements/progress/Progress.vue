<script setup lang="ts">
import { Shimmer } from '../shimmer'

defineProps<{
  step: string
  message: string
}>()

const stepIcons: Record<string, string> = {
  analyzing: 'i-tabler:brain',
  searching: 'i-tabler:search',
  reranking: 'i-tabler:sort-ascending',
  context: 'i-tabler:file-text',
  generating: 'i-tabler:sparkles',
}
</script>

<template>
  <div v-if="step && step !== 'done'" class="text-sm text-neutral/70 px-3 py-2 rounded-lg bg-neutral/5 flex gap-3 items-center">
    <Shimmer class="rounded-full size-4" />
    <span :class="stepIcons[step] || 'i-tabler:loader'" class="size-4 animate-pulse" />
    <span>{{ message }}</span>
  </div>
</template>
