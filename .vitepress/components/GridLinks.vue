<script setup lang="ts">
import { Item } from './CardLink.vue';

const props = defineProps({
  items: {
    type: Object as PropType<object[]>,
    required: true,
  },
})

const items = computed(() => {
  return props.items.map(i => {
    const hasColors = i.bgColor && ['blue', 'green'].includes(i.bgColor)

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
    <li v-for="item in items" :class="item.layout === 'lg' ? 'md:col-span-3' : 'md:col-span-2'">
      <CardLink :item="item" />
    </li>
  </ul>
</template>
