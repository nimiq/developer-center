<script setup lang="ts">
defineProps<{ from: 'user' | 'assistant' | 'system' }>()
</script>

<template>
  <div class="group flex gap-2 max-w-[85%] w-full" :class="from === 'user' ? 'is-user ml-auto justify-end' : 'is-assistant'">
    <slot />
  </div>
</template>
