<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { type Card, CardType } from './types'

const props = defineProps({
  items: {
    type: Array as PropType<Omit<Card, 'type'>[]>,
    default: () => [],
  },
})

const items = computed<Card[]>(() => props.items.map((i) => {
  const { bgColor, icon } = i
  if (bgColor)
    return { ...i, type: CardType.Bg } as Card
  if (icon)
    return { ...i, type: CardType.Icon } as Card
  return { ...i, type: CardType.Normal } as Card
}),
)

const gridLg = computed(() => items.value.filter(item => item.type === CardType.Bg && item.icon))
const gridSm = computed(() => items.value.filter(item => !gridLg.value.includes(item)))
</script>

<template>
  <div flex="~ col">
    <!-- Grid with items with background color -->
    <ul v-if="gridLg.length > 0" flex="~ col md:row md:flex-wrap gap-x-32">
      <li v-for="item in gridLg" :key="item!.title" class="flex-1" max-md="mt-32">
        <Card :item="item" />
      </li>
    </ul>

    <ul v-if="gridSm.length > 0" grid="~ cols-1 md:cols-3 md:rows-[1fr_auto] gap-x-32">
      <li
        v-for="item in gridSm" :key="item!.title" :class="{ 'mt-32': gridLg.length > 0 }"
      >
        <Card :item="item" />
      </li>
    </ul>
  </div>
</template>
