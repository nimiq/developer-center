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
    :icon="title ? undefined : icon"
    :color="color"
    :class="props.class"
    :ui="ui"
  >
    <div v-if="title" class="mb-1 flex items-center gap-2 font-semibold">
      <UIcon v-if="icon" :name="(icon as string)" class="size-5 shrink-0" />
      <span>{{ title }}</span>
    </div>
    <slot />
  </BaseProseCallout>
</template>
