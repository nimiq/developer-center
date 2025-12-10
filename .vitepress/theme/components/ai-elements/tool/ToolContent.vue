<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

const isOpen = inject<Ref<boolean>>('tool-open')!
</script>

<template>
  <div v-show="isOpen" class="border-t border-neutral/10 animate-fade-in">
    <slot />
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
