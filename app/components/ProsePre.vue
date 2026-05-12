<script setup lang="ts">
import BaseProsePre from '@nuxt/ui/components/prose/Pre.vue'
import { computed } from 'vue'
import { labelLanguageIcon, languageIcon, languageLabel } from '~/utils/code-language'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  icon?: string
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  hideHeader?: boolean
  meta?: string
  class?: unknown
  ui?: Record<string, unknown>
}>()

const resolvedFilename = computed(() => {
  if (props.filename)
    return props.filename
  return languageLabel(props.language)
})

const resolvedIcon = computed(() => {
  if (props.icon)
    return props.icon
  if (props.filename)
    return labelLanguageIcon(props.filename)
  return languageIcon(props.language)
})
</script>

<template>
  <BaseProsePre
    v-bind="$attrs"
    :code="code"
    :language="language"
    :filename="resolvedFilename"
    :icon="resolvedIcon"
    :highlights="highlights"
    :hide-header="hideHeader"
    :meta="meta"
    :class="props.class"
    :ui="ui"
  >
    <slot />
  </BaseProsePre>
</template>
