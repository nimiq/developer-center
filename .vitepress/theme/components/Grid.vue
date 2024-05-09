<script setup lang="ts">
import { computed } from 'vue'
import { type Card, CardType } from '../utils/types'

const props = withDefaults(defineProps<{items: Card[]}>(), { items: () => [] })

const items = computed<Card[]>(() => props.items.map((i) => {
  const { bgColor, icon, type } = i
  if(type) return i
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
    <ul v-if="gridLg.length > 0" flex="~ col md:row md:flex-wrap gap-16 md:gap-32">
      <li v-for="item in gridLg" :key="item!.title" class="flex-1">
        <Card :item="item" h-full />
      </li>
    </ul>

    <ul v-if="gridSm.length > 0" grid="~ cols-1 md:cols-3 md:rows-[1fr_auto] gap-16 md:gap-32">
      <li v-for="item in gridSm" :key="item!.title" :class="{ 'mt-32': gridLg.length > 0 }">
        <Card :item="item" h-full />
      </li>
    </ul>
  </div>
</template>
