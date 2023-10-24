<script setup lang="ts">

interface Item {
  icon?: string
  label?: string
  title: string
  description?: string
  href: string
  'bg-color'?: 'gray' | 'blue' | 'green'
}
const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
})

function hasProp(name: string) {
  return !!props.item[name]
}

const hasColors = computed(() => props.item.bgColor && ['blue', 'green'].includes(props.item.bgColor))
const centered = computed(() => !hasColors.value && hasProp('icon'))
const size = computed(() => centered.value ? 'lg' : hasColors.value ? 'md' : 'sm')
</script>

<template>
  <a :href="href" :data-inverted="hasColors ? '' : undefined" flex flex-col relative h-full cursor-pointer rounded-6 :class="{
    'bg-darkblue-6 dark:bg-darkblue-dimmed hover:bg-white hover:dark:bg-darkblue-90': !item.bgColor || item.bgColor === 'gray',
    'bg-radial-lightblue': item.bgColor === 'blue',
    'bg-radial-green': item.bgColor === 'green',
    'p-24': size === 'sm',
    'p-40 pb-80': size === 'md',
    'p-64': size === 'lg',
    'items-center': centered,
  }" transition hover="-translate-y-6 shadow" class="group">
    <div text="darkblue/40 dark:white/80" :class="{
      'absolute inset-y-50 right-0 w-[15vw] children:w-full children:h-full text-white/40 opacity-40': size === 'md',
      'children:h-96 children:w-96 mb-56 group-hover:text-darkblue group-hover:dark:text-white': centered
    }" v-if="hasProp('icon')">
      <div :class="item.icon" />
    </div>
    <span v-if="hasProp('label')" text="darkblue/40 dark:white/40 inverted:white/60" label mb-8>
      {{ item.label }}
    </span>
    <component :is="size === 'md' ? 'h3' : 'h4'" v-if="hasProp('title')" text="darkblue/80 dark:white/80 inverted:white"
      inverted:max-w-256>
      {{ item.title }}
    </component>
    <p v-if="hasProp('description')" text="darkblue-50 inverted:white/60" mt-20 inverted:max-w-256 :class="{'text-center': centered}">
      {{ item.description }}
    </p>
  </a>
</template>
