<script setup lang="ts">
import type { PropType } from 'vue'
import { Tag } from '../utils/types'

const props = defineProps({
  tags: Array as PropType<Tag[]>,
})

const tags = computed(() => new Set(props.tags || []))

const icons = {
  [Tag.RPC]: 'i-nimiq:icons-lg-nodes',
  [Tag.WebClient]: 'i-nimiq:globe',
  [Tag.Validator]: 'i-nimiq:icons-lg-verified',
  [Tag.PrivateNode]: 'i-nimiq:server',
  [Tag.Asset]: 'i-nimiq:icons-lg-palette',
  [Tag.NimiqBrandKit]: 'i-ph:paint-brush-broad-duotone size-16',
}
</script>

<template>
  <div v-if="tags.size > 0" flex="~ gap-16 wrap" text-16 w-full ml-0 class="raw">
    <div
      v-for="tag in tags" :key="tag" flex items-center gap-x-8 p="x-12 y-8" ring="1.5 neutral-500 group-hocus:neutral-600 inverted:white/60 inverted:group-hocus:white/70" transition-shadow rounded-6 lh-normal
    >
      <div :class="icons[tag]" size-14 text="neutral-700 group-hocus:neutral-800 inverted:white/60 inverted:group-hocus:white/70" transition-colors />
      <span text="neutral-800 group-hocus:darkblue inverted:white/70 inverted:group-hocus:white/80" lh="18">{{ tag }}</span>
    </div>
  </div>
</template>
