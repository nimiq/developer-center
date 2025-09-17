<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  label?: string
  h1?: boolean
  align?: 'center' | 'left'
}>()

const { frontmatter, page } = useData()

const title = computed(() => props.title || frontmatter.value.title)
const description = computed(() => props.description || frontmatter.value.description)

const effectiveAlign = computed(() => {
  if (props.align) {
    return props.align
  }

  return page.value.frontmatter.layout === 'home' ? 'center' : 'left'
})

const h1 = computed(() => props.h1 ?? true)
</script>

<template>
  <div
    flex="~ col" nq-component="headline"
    :class="{ 'items-start': effectiveAlign === 'left',
              'items-center': effectiveAlign === 'center',
              'f-mt-2xl': !h1 }" class="nq-raw"
    f-mb-2xl
  >
    <div
      v-if="label" outline="~ 1.5 neutral-600" bg="neutral/3" px-12 py-6 rounded-full nq-label
      :class="effectiveAlign === 'left' ? 'text-left' : 'text-center'"
    >
      {{ label }}
    </div>
    <component
      :is="h1 ? 'h1' : 'h2'" :class="[{
                                        'f-mt-xs': label,
                                      },
                                      h1 ? 'f-text-4xl font-bold' : 'f-text-3xl font-semibold',
                                      effectiveAlign === 'left' ? 'text-left' : 'text-center',
      ]" text-neutral mb-0
    >
      {{ title }}
    </component>
    <p
      :class="[{
        'mt-0 f-text-2xl': h1,
        'f-mt-2xs f-text-xl': !h1,
      }, effectiveAlign === 'left' ? 'text-left' : 'text-center']"
    >
      {{ description }}
    </p>
  </div>
</template>
