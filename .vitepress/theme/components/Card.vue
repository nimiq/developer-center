<script setup lang="ts">
import { computed } from 'vue'
import { CardType } from '../utils/types'
import type { Card } from '../utils/types'

const props = defineProps<{ item: Card }>()

const isNormal = computed(() => props.item.type === CardType.Normal)
const isIconSmall = computed(() => props.item.type === CardType.IconSmall)
const hasBgIcon = computed(() => props.item.type === CardType.Bg && props.item.icon)
const isIcon = computed(() => props.item.type === CardType.Icon)
const centered = computed(() => isIcon.value)
const hasLink = computed(() => props.item.href)
</script>

<template>
  <component :is="hasLink ? 'a' : 'div'" :href="item.href" group :data-inverted="item.bgColor" flex-card :class="{
    'bg-gradient-blue': item.bgColor === 'blue',
    'bg-gradient-green': item.bgColor === 'green',
    'p-24 md:p-40': hasBgIcon,
    'p-20 md:p-40': isIcon,
    'items-center': centered,
    'grid grid-cols-[24px_1fr] grid-rows-[max-content_1fr] gap-x-8 md:gap-x-16 gap-y-4 items-center': isIconSmall,
    'transition hocus:translate-y--6 hocus:shadow cursor-pointer': hasLink
  }">
    <div v-if="item.icon" :class="{
      'absolute inset-y-50 -right-12 md:-right-16 min-w-100 text-100 sm:text-202': !centered && !isIconSmall,
      'text-[#0E65C9]': item.bgColor === 'blue',
      'text-[#1DA186]': item.bgColor === 'green',
      'text-96 mb-56 op-80 group-hocus:op-100': centered,
      'text-24 text-neutral': isIconSmall,
      'dark:group-hocus:text-neutral-600': isIconSmall && hasLink
    }">
      <div :class="item.icon" />
    </div>
    <span v-if="item.label" text="neutral-600 inverted:white/70" text-14 label mb-8>
      {{ item.label }}
    </span>
    <component :is="centered ? 'h3' : 'h4'" v-if="item.title" :class="{
      'text-center': centered,
      'text-18 lh-[1.2]': isIconSmall,
      'mb-20': item.icon && !isIconSmall,
      'mb-12': !item.icon,
      'text-white': item.bgColor,
    }" z-1 inverted:max-w-256>
      {{ item.title }}
    </component>
    <p v-if="item.description" z-10 inverted:max-w-256 op-70 :class="[item.bgColor && item.icon ? 'mt-auto' : 'mt-12', {
      'text-center': centered,
      'col-span-full !mt-0 text-14': isIconSmall,
      'text-white/80 group-hocus:text-white/90': item.bgColor,
      'inverted:text-neutral-900 inverted:group-hocus:text-neutral': !item.bgColor
    }]">
      {{ item.description }}
    </p>

    <div v-if="item.tags?.length || 0 > 0 || item.duration" flex items-center flex-wrap gap-24 mt-14 z-1>
      <Tags v-if="item.tags" :tags="item.tags" />
      <div v-if="item.duration" flex gap-x-10 items-center>
        <div i-nimiq:watch-12-20 text="neutral-600 inverted:white/60" w-16 h-16 />
        <span text="16 neutral-700 inverted:white/70">{{ item.duration }}</span>
      </div>
    </div>
  </component>
</template>
