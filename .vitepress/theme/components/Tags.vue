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
  [Tag.Design]: 'i-nimiq:icons-lg-palette',
  [Tag.NimiqBrandKit]: 'i-carbon:logo-figma',
}
</script>

<template>
  <div v-if="tags.size > 0" flex="~ gap-16 wrap" text-18 w-max ml-0 class="raw">
    <div
      v-for="tag in tags" :key="tag" flex items-center gap-x-8 p="x-12 y-8"
      border-base class="inverted:[--border-color:rgb(255_255_255/0.4)]" rounded-6 leading-1
    >
      <div :class="icons[tag]" size-18 text="neutral-700 inverted:white/60" />
      <span text="neutral-gold inverted:white/60">{{ tag }}</span>
    </div>
  </div>
</template>
