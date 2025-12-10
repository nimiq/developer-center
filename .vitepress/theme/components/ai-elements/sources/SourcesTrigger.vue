<script setup lang="ts">
import type { Ref } from 'vue'
import { inject } from 'vue'

defineProps<{ count: number }>()
const isOpen = inject<Ref<boolean>>('sources-open')!

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <button type="button" class="text-neutral/60 flex gap-2 cursor-pointer transition-colors items-center hover:text-neutral" @click="toggle">
    <slot>
      <p class="font-semibold">
        Used {{ count }} sources
      </p>
      <div class="size-4 transition-transform i-nimiq:chevron-down" :class="isOpen ? 'rotate-180' : ''" />
    </slot>
  </button>
</template>
