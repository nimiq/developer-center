<script setup lang="ts">
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
  <input
    switch type="checkbox" style="--active-color: rgb(var(--nq-neutral-400))"
    before:bg-neutral="white dark:800" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`" :checked="isDark"
    @click="toggleTheme"
  >
</template>
