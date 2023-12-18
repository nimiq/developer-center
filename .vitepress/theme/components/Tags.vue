
<script setup lang="ts">
import { PropType } from 'vue'
import { Tag } from "./types"

defineProps({
  tags: Array as PropType<Tag[]>,
})

const icons = {
  [Tag.RPC]: 'i-nimiq:nodes',
  [Tag.WebClient]: 'i-nimiq:globe'
}
</script>

<template>
  <div flex gap-x-16 flex-wrap>
    <div v-for="tag in tags" :key="tag" flex items-center gap-x-8 p="x-12 y-8"
      border="1 solid darkblue-25 dark:darkblue-70 inverted:white/35" rounded-6 leading-1>
      <div :class="icons[tag]" w-14 h-14 text="darkblue-50 inverted:white/60"></div>
      <span text="14 darkblue-60 inverted:white/60">{{ tag }}</span>
    </div>
  </div>
</template>
