<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'

const rows = computed(() => 5)
const { width } = useWindowSize()
const columns = ref(0)

function calculateOpacity(rowIndex: number, colIndex: number) {
  const normalizedRow = rowIndex / (rows.value - 1)
  const normalizedCol = colIndex / (columns.value - 1)
  const distance = Math.abs(normalizedRow + normalizedCol - 1)
  const threshold = 0.8 // Adjust this value to control the path width
  if (distance > threshold) // Hide items far from the path
    return 0
  else // Adjust opacity based on distance from the path
    return 1 - (distance / threshold)
}

const items = ref<{ rowIndex: number, colIndex: number, opacity: number }[]>([])

onMounted(() => {
  const result: { rowIndex: number, colIndex: number, opacity: number }[] = []
  columns.value = (Math.floor(width.value / 140) + 4) & ~1
  for (let rowIndex = 0; rowIndex < rows.value; rowIndex++) {
    const isEvenRow = rowIndex % 2 === 0
    const startCol = isEvenRow ? 0 : 1
    for (let colIndex = startCol; colIndex < columns.value; colIndex += 2) {
      const opacity = calculateOpacity(rowIndex, colIndex)
      result.push({ rowIndex, colIndex, opacity })
    }
  }
  items.value = result
})
</script>

<template>
  <section group mx-0 px-0 w-full relative z-2 of-x-hidden f-pt-2xl>
    <div aria-hidden="true" class="grid-parent" max-w-none :style="`--rows:${rows}; --cols:${columns}`">
      <div
        v-for="item in items" :key="`${item.rowIndex}-${item.colIndex}`" :style="{
          '--row': item.rowIndex,
          '--col': item.colIndex,
          'opacity': item.opacity,
          'animation-delay': `${item.rowIndex * 0.1 + item.colIndex * 0.15}s`,
          'animation-duration': `${(rows - item.rowIndex) * 2 + 4}s`,
        }" i-nimiq:logos-nimiq-mono motion-safe:transition="colors duration-800 hocus:duration-100"
        motion-safe:animate="pulse group-hocus:none"
        text="neutral-300 dark:neutral-500 hocus:neutral-500 dark:hocus:neutral-700"
      />
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {

  0%,
  100% {
    background-color: rgb(var(--nq-neutral-400));
  }

  50% {
    background-color: rgb(var(--nq-neutral-500));
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
