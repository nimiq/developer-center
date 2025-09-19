<script setup lang="ts">
import HexagonsBackground from './HexagonsBackground.vue'

interface Card {
  icon: string
  title: string
  description: string
  href: string
  bgColor?: string
  label?: string
  iconClass?: string
  class?: string
  hoverColor?: string
}

interface Props {
  title: string
  description: string
  cards?: Card[]
  align?: 'center' | 'left'
}

defineProps<Props>()
</script>

<template>
  <section relative of-x-clip>
    <NqHeadline :title :description :align mt-0 h1 z-100 />
    <div max-w-none="!" class="nq-raw" op-30 w-screen :class="cards ? 'bottom-32' : 'bottom--32'" absolute of-hidden>
      <ClientOnly>
        <HexagonsBackground :class="!cards ? 'op-50' : ''" />
      </ClientOnly>
    </div>

    <div v-if="cards" grid="~ cols-1 md:cols-2 md:rows-[auto_auto_auto] gap-32" z-100 f-min-h-3xl>
      <NqCard
        v-for="card in cards" :key="card.title" v-bind="card" :class="{ '[&_p]:z-10': card.bgColor }"
        :icon-class="!card.bgColor ? 'absolute size-32 right-12 top-12 hocus:text-white/80' : 'absolute size-200 op-60 md:op-100 right--12 bottom--24'"
        :style="card.hoverColor ? `--from:var(--colors-${card.hoverColor}-gradient-from); --to:var(--colors-${card.hoverColor}-gradient-to)` : undefined"
        :hover="card.hoverColor ? '[--nq-gradient-from:var(--from)] [--nq-gradient-to:var(--to)] text-white' : ''"
      />
    </div>
  </section>
</template>

<style scoped>
[nq-label]:empty {
  margin: 0
}
</style>
