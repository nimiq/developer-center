<script setup lang="ts">
withDefaults(defineProps<{ duration?: number }>(), { duration: 2 })
</script>

<template>
  <span class="shimmer inline-block" :style="{ '--duration': `${duration}s` }">
    <slot />
  </span>
</template>

<style scoped>
.shimmer {
  background: linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer var(--duration, 2s) linear infinite;
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
</style>
