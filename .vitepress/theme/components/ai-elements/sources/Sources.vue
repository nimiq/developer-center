<script setup lang="ts">
import { provide, ref } from 'vue'

const isOpen = ref(false)
provide('sources-open', isOpen)
</script>

<template>
  <div class="text-xs mb-4">
    <slot />
  </div>
</template>
