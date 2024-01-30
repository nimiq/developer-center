<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import Enviroment from './components/Enviroment.vue'

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 *
 * Adapted to by an hexagon animation
 */

const { isDark } = useData()
const enableTransitions = () => 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

function getHexagonPoints(x: number, y: number, r: number): string {
  const angles = [0, 60, 120, 180, 240, 300]
  return angles.map((angle) => {
    const radian = (Math.PI / 180) * angle
    const dx = r * Math.cos(radian)
    const dy = r * Math.sin(radian)
    return `${x + dx}px ${y + dy}px`
  }).join(', ')
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const maxDistance = Math.max(
    x,
    innerWidth - x,
    y / Math.sqrt(3),
    (innerHeight - y) / Math.sqrt(3),
  )

  const clipPath = [
    `polygon(${getHexagonPoints(x, y, 0)})`,
    `polygon(${getHexagonPoints(x, y, maxDistance)})`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <Enviroment />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
