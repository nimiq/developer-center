<script setup lang="ts">
import type { PropType } from 'vue'
import { Tag } from './types'

const props = defineProps({
  tags: Array as PropType<Tag[]>,
})

const tags = computed(() => new Set(props.tags || []))

const icons = {
  [Tag.RPC]: 'i-nimiq:icons-lg-nodes',
  [Tag.WebClient]: 'i-nimiq:icons-lg-globe',
}
</script>

<template>
  <div v-if="tags.size > 0" flex gap-x-16 flex-wrap>
    <div
      v-for="tag in tags" :key="tag" flex items-center gap-x-8 p="x-12 y-8"
      border="1 solid darkblue-25 dark:darkblue-70 inverted:white/35" rounded-6 leading-1
    >
      <div :class="icons[tag]" w-14 h-14 text="darkblue-50 inverted:white/60" />
      <span text="14 darkblue-60 inverted:white/60">{{ tag }}</span>
    </div>
  </div>
</template>
