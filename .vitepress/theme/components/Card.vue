<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { Card } from './types'
import { CardType } from './types'

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
  <div
    transition hover="-translate-y-6" group rounded-6
    :class="{
      'hover:shadow': !item.bgColor,
      'hover:blue-shadow': item.bgColor === 'blue',
      'hover:green-shadow': item.bgColor === 'green',
    }"
  >
    <a
      :href="item.href" :data-inverted="item.bgColor" flex flex-col relative h-full cursor-pointer rounded-6 ring-1 overflow-hidden :class="{
        'bg-darkblue-6 dark:bg-darkblue-dimmed hover:bg-white hover:dark:bg-darkblue-90 ring-darkblue/5 dark:ring-white/14 group-hover:ring-darkblue/2 transition-shadow': !item.bgColor,
        'bg-radial-lightblue ring-lightblue/20': item.bgColor === 'blue',
        'bg-radial-green ring-green/20': item.bgColor === 'green',
        'p-12 md:p-24': isNormal || !hasBgIcon,
        'p-24 md:p-40': hasBgIcon,
        'p-20 md:p-40': isIcon,
        'items-center': centered,
      }"
    >
      <div
        v-if="item.icon" :class="{
          'absolute inset-y-50 -right-12 md:-right-16 min-w-100 text-100 sm:text-202': !centered,
          'text-[#0E65C9]': item.bgColor === 'blue',
          'text-[#1DA186]': item.bgColor === 'green',
          'text-darkblue/40 dark:text-white/50 children:h-96 children:w-96 mb-56 group-hover:text-darkblue dark:group-hover:text-white transition-colors': centered,
        }"
      >
        <div :class="item.icon" />
      </div>
      <span v-if="item.label" text="darkblue/40 dark:white/40 inverted:white/60" label mb-8>
        {{ item.label }}
      </span>
      <component
        :is="centered ? 'h3' : 'h4'" v-if="item.title" text="darkblue/80 dark:white/80 inverted:white"
        :class="{ 'text-center': centered }"
        inverted:max-w-256
      >
        {{ item.title }}
      </component>
      <p
        v-if="item.description" text="darkblue-50 inverted:white/60" z-10 inverted:max-w-256
        :class="[{ 'text-center': centered }, item.bgColor && item.icon ? 'mt-20' : 'mt-12']"
      >
        {{ item.description }}
      </p>

      <div v-if="item.tags?.length || 0 > 0 || item.duration" flex items-center flex-wrap gap-24 mt-14>
        <Tags v-if="item.tags" :tags="item.tags" />
        <div v-if="item.duration" flex gap-x-10 items-center>
          <div i-nimiq:watch text="darkblue-40 inverted:white/60" w-16 h-16 />
          <span text="16 darkblue-50 inverted:white/70">{{ item.duration }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.green-shadow {
  box-shadow: 0px 18px 38px rgba(19, 181, 157, 0.07), 0px 7px 8.5px rgba(19, 181, 157, 0.04), 0px 2px 2.5px rgba(19, 181, 157, 0.02);
}

.blue-shadow {
  box-shadow: 0px 18px 38px rgba(5, 130, 202, 0.07), 0px 7px 8.5px rgba(5, 130, 202, 0.04), 0px 2px 2.5px rgba(19,181,157, 0.02);
}
</style>
