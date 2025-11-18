<script setup lang="ts">
import { useDocumentVisibility, useIntersectionObserver, useWindowSize } from '@vueuse/core'
import { computed, onMounted, ref, shallowRef } from 'vue'

const rows = 5
const { width } = useWindowSize()
const columns = ref(0)
const containerRef = ref<HTMLElement>()
const isVisible = ref(false)
const docVisibility = useDocumentVisibility()

useIntersectionObserver(containerRef, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
})

const shouldAnimate = computed(() => isVisible.value && docVisibility.value === 'visible')

function calculateOpacity(rowIndex: number, colIndex: number, cols: number) {
  const normalizedRow = rowIndex / (rows - 1)
  const normalizedCol = colIndex / (cols - 1)
  const distance = Math.abs(normalizedRow + normalizedCol - 1)
  const threshold = 0.8
  return distance > threshold ? 0 : 1 - (distance / threshold)
}

const items = shallowRef<{ rowIndex: number, colIndex: number, opacity: number, animDelay: string, animDuration: string }[]>([])

onMounted(() => {
  const cols = (Math.floor(width.value / 140) + 4) & ~1
  columns.value = cols
  const result: { rowIndex: number, colIndex: number, opacity: number, animDelay: string, animDuration: string }[] = []

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const isEvenRow = rowIndex % 2 === 0
    const startCol = isEvenRow ? 0 : 1
    for (let colIndex = startCol; colIndex < cols; colIndex += 2) {
      const opacity = calculateOpacity(rowIndex, colIndex, cols)
      if (opacity > 0) { // Skip invisible items
        result.push({
          rowIndex,
          colIndex,
          opacity,
          animDelay: `${(rowIndex * 0.1 + colIndex * 0.15).toFixed(2)}s`,
          animDuration: `${((rows - rowIndex) * 2 + 4)}s`,
        })
      }
    }
  }
  items.value = result
})
</script>

<template>
  <div ref="containerRef" group mx-0 px-0 w-full relative z-2 of-x-hidden f-pt-2xl>
    <div aria-hidden="true" class="grid-parent" max-w-none :style="`--rows:${rows}; --cols:${columns}`" :class="{ paused: !shouldAnimate }">
      <div
        v-for="item in items" :key="`${item.rowIndex}-${item.colIndex}`" :style="{
          '--row': item.rowIndex,
          '--col': item.colIndex,
          'opacity': item.opacity,
          'animation-delay': item.animDelay,
          'animation-duration': item.animDuration,
        }" i-nimiq:logos-nimiq-mono motion-safe:transition="colors duration-800 hocus:duration-100"
        motion-safe:animate="pulse group-hocus:paused"
        text="neutral-300 dark:neutral-500 hocus:neutral-500 dark:hocus:neutral-700"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {

  0%,
  100% {
    background-color: var(--colors-neutral-400);
  }

  50% {
    background-color: var(--colors-neutral-500);
  }
}

.grid-parent {
  --gap: 16px;
  --hexagon-w: 140px;
  --hexagon-h: calc(var(--hexagon-w) / 1.1111);
  --hexagon-h-half: calc(var(--hexagon-h) / 2);
  display: grid;
  row-gap: calc(var(--gap) / 2);
  grid-template-columns: repeat(var(--cols), var(--gap) calc(var(--hexagon-w) - (2 * var(--gap)))) var(--gap);
  grid-template-rows: repeat(var(--rows), var(--hexagon-h-half));
  height: calc(var(--rows) * (var(--hexagon-h-half) * 1px) + var(--rows) * var(--gap));
  margin-left: calc(-1 * var(--hexagon-w) / 2);
  position: relative;
  content-visibility: auto;

  >*:not([data-social]) {
    animation: pulse 2s infinite;
    will-change: background-color;
  }

  &.paused > *:not([data-social]) {
    animation-play-state: paused;
  }

  > :where(div, a) {
    width: var(--hexagon-w);
    height: var(--hexagon-h);
    grid-row: span 2;
    grid-column: span 2;

    &:nth-child(even) {
      margin-top: var(--hexagon-h-half);
      grid-row-end: span 3;
    }
  }
}
</style>
