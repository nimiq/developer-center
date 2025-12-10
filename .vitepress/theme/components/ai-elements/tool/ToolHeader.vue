<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, inject } from 'vue'
import { Shimmer } from '../shimmer'

type ToolState = 'input-streaming' | 'input-available' | 'approval-requested' | 'approval-responded' | 'output-available' | 'output-error' | 'output-denied'

const props = defineProps<{ title?: string, state: ToolState }>()

const isOpen = inject<Ref<boolean>>('tool-open')!

function toggle() {
  isOpen.value = !isOpen.value
}

const label = computed(() => {
  const labels: Record<ToolState, string> = {
    'input-streaming': 'Pending',
    'input-available': 'Running',
    'approval-requested': 'Awaiting Approval',
    'approval-responded': 'Responded',
    'output-available': 'Completed',
    'output-error': 'Error',
    'output-denied': 'Denied',
  }
  return labels[props.state]
})

const statusClass = computed(() => {
  const classes: Record<ToolState, string> = {
    'input-streaming': 'text-neutral/60',
    'input-available': 'text-sky',
    'approval-requested': 'text-gold',
    'approval-responded': 'text-sky',
    'output-available': 'text-green',
    'output-error': 'text-red',
    'output-denied': 'text-orange',
  }
  return classes[props.state]
})

const isLoading = computed(() => props.state === 'input-streaming' || props.state === 'input-available')
</script>

<template>
  <button type="button" class="p-3 rounded-t-lg flex gap-4 w-full cursor-pointer transition-colors items-center justify-between hover:bg-neutral/5" @click="toggle">
    <div class="flex gap-2 items-center">
      <div class="i-tabler:tool text-neutral/60 size-4" />
      <span class="text-sm font-medium">{{ title ?? 'Tool' }}</span>
      <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-neutral/5" :class="statusClass">
        <Shimmer v-if="isLoading" :duration="1">{{ label }}</Shimmer>
        <template v-else>{{ label }}</template>
      </span>
    </div>
    <div class="i-tabler:chevron-down text-neutral/60 size-4 transition-transform" :class="isOpen ? 'rotate-180' : ''" />
  </button>
</template>
