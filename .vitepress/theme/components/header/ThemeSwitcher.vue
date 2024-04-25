<script setup lang="ts">
import { inBrowser } from 'vitepress';

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 *
 * Adapted to by an hexagon animation
 */

const { isDark } = useData()

const enableTransitions = () => inBrowser && 'startViewTransition' in globalThis?.document && globalThis?.window.matchMedia('(prefers-reduced-motion: no-preference)').matches

function getHexagonPoints(x: number, y: number, r: number): string {
  const angles = [0, 60, 120, 180, 240, 300]
  return angles.map((angle) => {
    const radian = (Math.PI / 180) * angle
    const dx = r * Math.cos(radian)
    const dy = r * Math.sin(radian)
    return `${x + dx}px ${y + dy}px`
  }).join(', ')
}

async function toggleTheme({ clientX: x, clientY: y }: MouseEvent) {
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

  // @ts-expect-error Type not updated
  await globalThis.document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  globalThis.document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
}
</script>

<template>
  <label :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`" relative h-20>
    <input
      switch type="checkbox"
      class="checked:dark:[--active-color:rgb(var(--nq-neutral-600))] peer" :checked="isDark"
      @click.prevent="toggleTheme"
    >
    <div aria-hidden pointer-events-none size="0.9em" p2 absolute top="0.15em" transition-left ease-out duration-100 left="0.2em peer-checked:[0.97em]" inset-0>
      <div :class="`${isDark ? 'i-carbon:sun' : 'i-carbon:moon'}`" text="10 darkblue/80" />
    </div>
  </label>
</template>
