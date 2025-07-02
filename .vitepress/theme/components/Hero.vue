<script setup lang="ts">
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
  cards: Card[]
}

defineProps<Props>()
</script>

<template>
  <section min-h-80dvh flex="~ items-center justify-center col">
    <h1 class="nq-headline">
      {{ title }}
    </h1>
    <p mx-0 w-full>
      {{ description }}
    </p>

    <div grid="~ cols-1 md:cols-2 md:rows-[auto_auto_auto] gap-32" f-min-h-3xl f-mt-md>
      <NqCard
        v-for="card in cards" :key="card.title" v-bind="card"
        :icon-class="!card.bgColor ? 'absolute size-32 right-12 top-12 hocus:text-white/80' : 'absolute size-200 right--12 bottom--24'"
        :style="`--from:var(--colors-${card.hoverColor}-gradient-from); --to:var(--colors-${card.hoverColor}-gradient-to)`"
        hover="[--nq-gradient-from:var(--from)] [--nq-gradient-to:var(--to)] text-white"
      />
    </div>
  </section>
</template>

<style scoped>
[nq-label]:empty {
  margin: 0
}
</style>
