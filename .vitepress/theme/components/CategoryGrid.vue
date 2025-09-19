<script setup lang="ts">
import { withBase } from 'vitepress'

interface GridItem {
  link: string
  text: string
  popular?: boolean
}

interface GridGroup {
  text: string
  items: GridItem[]
}

defineProps<{
  groups: GridGroup[]
}>()
</script>

<template>
  <div v-for="({ text, items }) in groups" :key="text" flex="~ col gap-12" nq-raw>
    <h2 f-text-2xs="!" mx-0 nq-label mb-0="!">
      {{ text }}
    </h2>

    <div grid="~ cols-1 lg:cols-2 xl:cols-4 gap-16" mx-0>
      <a
        v-for="({ link, text, popular }) in items"
        :key="text"
        :href="withBase(link)"
        f-p-2xs="!" un-text="f-xs truncate"
        group min-w-full w-full block nq-hoverable hocus:w-auto hocus:z-1000 of="initial x-clip"
      >
        {{ text.replace('`', '').replace('`', '') }}
        <span
          v-if="popular" flex="~ items-center gap-4"
          translate-y="-50%" outline="~ 1.5 neutral-400 group-hocus:gold/30"
          text="9 group-hocus:white" tracking-widest px-4 py-2 rounded-full bg-neutral-0 transition-colors right-8 top-0 absolute nq-label group-hocus:bg-gold
        >
          <div op="40 group-hocus:80" mr-2 size-8 transition-opacity i-nimiq:star />
          Popular
        </span>
      </a>
    </div>
  </div>
</template>
