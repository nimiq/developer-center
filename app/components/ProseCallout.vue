<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import BaseProseCallout from '@nuxt/ui/components/prose/Callout.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  to?: RouteLocationRaw
  target?: string | null
  icon?: unknown
  color?: CalloutColor
  title?: string
  class?: unknown
  ui?: Record<string, unknown>
}>()

type CalloutColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
</script>

<template>
  <BaseProseCallout
    v-bind="$attrs"
    :to="to"
    :target="target"
    :icon="icon"
    :color="color"
    :class="props.class"
    :ui="ui"
  >
    <span v-if="title" class="mr-1 font-semibold">{{ title }}</span>
    <slot />
  </BaseProseCallout>
</template>
