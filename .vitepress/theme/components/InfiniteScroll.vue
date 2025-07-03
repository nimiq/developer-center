<script setup lang="ts">
interface Props {
  repeat?: number
  duration?: string
  gap?: string
}

const {
  repeat = 4,
  duration = '40s',
  gap = '1rem',
} = defineProps<Props>()
</script>

<template>
  <div :style="`--duration: ${duration}; --gap: ${gap}`" group p-2 of-hidden flex="~ row gap-$gap">
    <div
      v-for="index in repeat" :key="index" shrink-0 justify-around flex="~ gap-$gap" class="animate-marquee"
      group-hover:animate-paused
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
