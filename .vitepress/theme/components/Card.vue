<script setup lang="ts">
import { computed, type PropType } from "vue";
import { Card, CardType } from "./types";

const props = defineProps({
  item: {
    type: Object as PropType<Card>,
    required: true,
  },
})

const isNormal = computed(() => props.item.type === CardType.Normal)
const hasBg = computed(() => props.item.type === CardType.Bg)
const hasBgIcon = computed(() => props.item.type === CardType.Bg && props.item.icon)
const isIcon = computed(() => props.item.type === CardType.Icon)
const centered = computed(() => isIcon.value)
</script>

<template>
  <a :href="item.href" :data-inverted="item.bgColor" flex flex-col relative h-full cursor-pointer rounded-6
    overflow-hidden :class="{
      'bg-darkblue-6 dark:bg-darkblue-dimmed hover:bg-white hover:dark:bg-darkblue-90': !item['color'] || item['color'] === 'gray',
      'bg-radial-lightblue': item.bgColor === 'blue',
      'bg-radial-green': item.bgColor === 'green',
      'p-12 md:p-24': isNormal || !hasBgIcon,
      'p-24 md:p-40 md:pb-80': hasBgIcon,
      'p-20 md:p-40': isIcon,
      'items-center': centered,
    }" transition hover="-translate-y-6 shadow" class="group">
    <div :class="{
      'absolute inset-y-50 -right-24 min-w-100 w-[15vw] children:w-full children:h-full': !centered,
      'text-[#0E65C9]': item.bgColor === 'blue',
      'text-[#1DA186]': item.bgColor === 'green',
      'text-white/40 opacity-40 darkblue/40 dark:white/80': !hasBg,
      'darkblue/40 dark:white/80 children:h-96 children:w-96 mb-56 group-hover:text-darkblue dark:group-hover:text-white': centered,
    }" v-if="item.icon">
      <div :class="item.icon" />
    </div>
    <span v-if="item.label" text="darkblue/40 dark:white/40 inverted:white/60" label mb-8>
      {{ item.label }}
    </span>
    <component :is="centered ? 'h3' : 'h4'" v-if="item.title" text="darkblue/80 dark:white/80 inverted:white"
      inverted:max-w-256>
      {{ item.title }}
    </component>
    <p v-if="item.description" text="darkblue-50 inverted:white/60" mt-20 z-10 inverted:max-w-256
      :class="{ 'text-center': centered }">
      {{ item.description }}
    </p>

    <div v-if="item.tags?.length || 0 > 0 || item.duration" flex items-center flex-wrap gap-24 mt-14>
      <Tags v-if="item.tags" :tags="item.tags" />
      <div flex gap-x-10 items-center>
        <div i-nimiq:watch text="darkblue-40 inverted:white/60" w-16 h-16></div>
        <span v-if="item.duration" text="16 darkblue-50 inverted:white/70">{{ item.duration }}</span>
      </div>
    </div>
  </a>
</template>
