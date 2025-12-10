<script setup lang="ts">
import { provide, ref } from 'vue'

const props = withDefaults(defineProps<{ defaultOpen?: boolean }>(), { defaultOpen: false })

const isOpen = ref(props.defaultOpen)
provide('tool-open', isOpen)
</script>

<template>
  <div class="mb-4 border border-neutral/10 rounded-lg bg-neutral/2 w-full">
    <slot />
  </div>
</template>
