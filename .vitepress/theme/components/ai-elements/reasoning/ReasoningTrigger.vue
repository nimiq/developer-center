<script setup lang="ts">
import { computed } from 'vue'
import { Shimmer } from '../shimmer'
import { useReasoningContext } from './context'

const { isStreaming, isOpen, setIsOpen, duration } = useReasoningContext()

const thinkingMessage = computed(() => {
  if (isStreaming.value || duration.value === 0)
    return 'thinking'
  if (duration.value === undefined)
    return 'default_done'
  return 'duration_done'
})

function toggle() {
  setIsOpen(!isOpen.value)
}
</script>

<template>
  <button type="button" class="text-sm text-neutral/60 flex gap-2 w-full cursor-pointer transition-colors items-center hover:text-neutral" @click="toggle">
    <slot>
      <div class="size-4 i-nimiq:bulb" />

      <template v-if="thinkingMessage === 'thinking'">
        <Shimmer :duration="1">
          Thinking...
        </Shimmer>
      </template>
      <template v-else-if="thinkingMessage === 'default_done'">
        <p>Thought for a few seconds</p>
      </template>
      <template v-else>
        <p>Thought for {{ duration }} seconds</p>
      </template>

      <div class="size-4 transition-transform i-nimiq:chevron-down" :class="isOpen ? 'rotate-180' : ''" />
    </slot>
  </button>
</template>
