<script setup lang="ts">
import { StickToBottom } from 'vue-stick-to-bottom'

withDefaults(defineProps<{
  ariaLabel?: string
  initial?: boolean | 'instant' | { damping?: number, stiffness?: number, mass?: number }
  damping?: number
  stiffness?: number
  mass?: number
}>(), { ariaLabel: 'Conversation', initial: true, damping: 0.7, stiffness: 0.05, mass: 1.25 })
</script>

<template>
  <StickToBottom class="flex-1 relative overflow-y-hidden" role="log" :aria-label="ariaLabel" :initial="initial" :damping="damping" :stiffness="stiffness" :mass="mass" anchor="none">
    <slot />
  </StickToBottom>
</template>
