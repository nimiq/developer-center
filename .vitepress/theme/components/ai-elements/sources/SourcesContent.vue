<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

const isOpen = inject<Ref<boolean>>('sources-open')!
</script>

<template>
  <div v-show="isOpen" class="mt-3 flex flex-col gap-2 animate-fade-in">
    <slot />
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
