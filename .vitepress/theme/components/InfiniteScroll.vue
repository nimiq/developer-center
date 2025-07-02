<script setup lang="ts">
interface Props {
  class?: string
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  duration?: string
  gap?: string
}

const {
  class: className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = '40s',
  gap = '1rem',
} = defineProps<Props>()
</script>

<template>
  <div
    :class="className"
    :style="`--duration: ${duration}; --gap: ${gap}`"
    group p-2 overflow-hidden
    :flex="vertical ? 'col' : 'row'"
    gap="[var(--gap)]"
  >
    <div
      v-for="index in repeat"
      :key="index"
      shrink-0
      justify-around
      :flex="vertical ? 'col' : 'row'"
      :class="[
        vertical ? 'animate-marquee-vertical' : 'animate-marquee',
        pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
      ]"
      :style="{
        animationDirection: reverse ? 'reverse' : 'normal',
        gap: 'var(--gap)',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}
</style>
