<script setup lang="ts">
import { Card } from "./Card.vue"

const props = defineProps({
  items: {
    type: Object as PropType<Card[]>,
    required: true,
  },
})

const items = computed(() => {
  return props.items.map(i => {
    const hasColors = i["bg-color"] && ['blue', 'green'].includes(i["bg-color"])

    return {
      hasColors,
      centered: !hasColors && !!i.icon,
      layout: i.layout || (!hasColors && !!i.icon) ? 'lg' : hasColors ? 'square' : 'sm',
      ...i,
    }
  })
})
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[1fr_auto] gap-32">
    <li v-for="item in items" :key="item.name" :style="`grid-column: span ${item.span || 2}`">
      <Card :item="item" />
    </li>
  </ul>
</template>
