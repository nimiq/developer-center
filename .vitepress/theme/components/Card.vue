<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { CardType } from '../utils/types'
import type { Card } from '../utils/types'

const props = defineProps({
  item: {
    type: Object as PropType<Card>,
    required: true,
  },
})

const isNormal = computed(() => props.item.type === CardType.Normal)
const hasBgIcon = computed(() => props.item.type === CardType.Bg && props.item.icon)
const isIcon = computed(() => props.item.type === CardType.Icon)
const centered = computed(() => isIcon.value)
</script>

<template>
  <div transition hocus:translate-y--6 group rounded-8 hover-shadow-lg>
    <a
      :href="item.href" :data-inverted="item.bgColor" flex flex-col relative h-full cursor-pointer rounded-6 overflow-hidden transition-shadow :class="{
        'bg-neutral-200 hocus:bg-white hocus:border-subtle': !item.bgColor,
        'bg-gradient-blue': item.bgColor === 'blue',
        'bg-gradient-green': item.bgColor === 'green',
        'p12 md:p24': isNormal || !hasBgIcon,
        'p24 md:p40': hasBgIcon,
        'p20 md:p40': isIcon,
        'items-center': centered,
      }"
    >
      <div
        v-if="item.icon" :class="{
          'absolute inset-y-50 -right-12 md:-right-16 min-w-100 text-100 sm:text-202': !centered,
          'text-[#0E65C9]': item.bgColor === 'blue',
          'text-[#1DA186]': item.bgColor === 'green',
          'text-neutral-700 text-96 mb56 group-hocus:text-darkblue transition-colors': centered,
        }"
      >
        <div :class="item.icon" />
      </div>
      <span v-if="item.label" text="neutral-600 inverted:white/70" text-14 label mb-8>
        {{ item.label }}
      </span>
      <component
        :is="centered ? 'h3' : 'h4'" v-if="item.title"
        text="darkblue inverted:white dark:white dark:group-hocus:inverted:white dark:group-hocus:darkblue"
        :class="{ 'text-center': centered, 'mb-20': item.icon, 'mb-12': !item.icon }"
        z-1 inverted:max-w-256
      >
        {{ item.title }}
      </component>
      <p
        v-if="item.description" text="neutral-700 inverted:white/60" z-10 inverted:max-w-256
        :class="[{ 'text-center': centered }, item.bgColor && item.icon ? 'mt-auto' : 'mt-12']"
      >
        {{ item.description }}
      </p>

      <div v-if="item.tags?.length || 0 > 0 || item.duration" flex items-center flex-wrap gap-24 mt-14>
        <Tags v-if="item.tags" :tags="item.tags" />
        <div v-if="item.duration" flex gap-x-10 items-center>
          <div i-nimiq:watch-12-20 text="neutral-600 inverted:white/60" w-16 h-16 />
          <span text="16 neutral-700 inverted:white/70">{{ item.duration }}</span>
        </div>
      </div>
    </a>
  </div>
</template>
