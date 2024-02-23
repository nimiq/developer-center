<script setup lang="ts">
import { useHead } from '@unhead/vue'
import type { Card, Tag } from '../utils/types'

const props = defineProps<{
  tags?: Array<Tag>
  items: Omit<Card, 'type'>[]
  h2: { type: boolean, required: false }
}>()

const slots = defineSlots<{
  label: () => void
  headline: () => void
  subline: () => void
}>()

const headlineStr = computed(() => slots.headline?.()?.[0]?.children)
const sublineStr = computed(() => slots.subline?.()?.[0]?.children)

watchEffect(async () => {
  if (props.h2)
    return
  useHead({
    title: headlineStr.value,
    meta: [
      { name: 'description', content: sublineStr.value },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@nimiq' },
      { name: 'twitter:title', content: headlineStr.value },
      { name: 'twitter:description', content: sublineStr.value },
      { name: 'keywords', content: (props.tags || []).join(', ') },
    ],
  })
})
</script>

<template>
  <div class="vp-raw" :class=" tags?.length > 0 || items?.length > 0 ? 'mb136' : 'mb64'">
    <slot />

    <div v-if="slots.label" mb-8>
      <span label op50>
        <slot name="label" />
      </span>
    </div>

    <component :is="h2 ? 'h2' : 'h1'" text="darkblue dark:white">
      <slot name="headline" />
    </component>

    <p v-if="slots.subline" mt-24 text-24 lh="36" text="darkblue-60" max-w-520>
      <slot name="subline" />
    </p>

    <Tags v-if="tags?.length > 0 " :tags="tags" mt-24 />
    <Grid v-if="items?.length > 0" :items="items" mt-64 />
  </div>
</template>
