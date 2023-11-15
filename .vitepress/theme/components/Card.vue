<script setup lang="ts">
import { computed, type PropType } from "vue";
import { Card } from "./types";

const props = defineProps({
  item: {
    type: Object as PropType<Card>,
    required: true,
  },
})

const layout = computed(() => props.item.layout || props.item.color ? "square" : "lg")
</script>

<template>
  <a :href="item.href" :data-inverted="item.hasColors ? '' : undefined" flex flex-col relative h-full cursor-pointer rounded-6 overflow-hidden :class="{
    'bg-darkblue-6 dark:bg-darkblue-dimmed hover:bg-white hover:dark:bg-darkblue-90': !item['color'] || item['color'] === 'gray',
    'bg-radial-lightblue': item['color'] === 'blue',
    'bg-radial-green': item['color'] === 'green',
    'p-24': item.layout === 'sm',
    'p-40 pb-80': layout === 'square',
    'p-40': item.layout === 'lg',
    'items-center': item.centered,
  }" transition hover="-translate-y-6 shadow" class="group">
    <div :class="{
      'absolute inset-y-50 sm:-right-16 lg:-right-32 -right-64 w-[15vw] children:w-full children:h-full': !item.centered,
      'text-[#0E65C9]': item.color === 'blue',
      'text-[#1DA186]': item.color === 'green',
      'text-white/40 opacity-40 darkblue/40 dark:white/80': !item.hasColors,
      'darkblue/40 dark:white/80 children:h-96 children:w-96 mb-56 group-hover:text-darkblue dark:group-hover:text-white': item.centered
    }" v-if="item.icon">
      <div :class="item.icon" />
    </div>
    <span v-if="item.label" text="darkblue/40 dark:white/40 inverted:white/60" label mb-8>
      {{ item.label }}
    </span>
    <component :is="item.layout === 'square' ? 'h3' : 'h4'" v-if="item.title" text="darkblue/80 dark:white/80 inverted:white"
      inverted:max-w-256>
      {{ item.title }}
    </component>
    <p v-if="item.description" text="darkblue-50 inverted:white/60" mt-20 z-10 inverted:max-w-256 :class="{'text-center': item.centered}">
      {{ item.description }}
    </p>

    <div v-if="item.tag || item.duration" flex items-center flex-wrap gap-24 mt-14>
      <Tags v-if="item.tag" :tags="[item.tag]" />
      <div flex gap-x-10 items-center>
        <div i-nimiq:watch text="darkblue-40 inverted:white/60" w-16 h-16></div>
        <span v-if="item.duration" text="16 darkblue-50 inverted:white/70">{{ item.duration }}</span>
      </div>
    </div>
  </a>
</template>
