<script setup lang="ts">
import MarkdownRender from 'markstream-vue'
import { computed, useSlots } from 'vue'
import 'markstream-vue/index.css'

defineProps<{ content?: string }>()

const slots = useSlots()
const slotContent = computed<string | undefined>(() => {
  const nodes = slots.default?.() || []
  let text = ''
  for (const node of nodes) {
    if (typeof node.children === 'string')
      text += node.children
  }
  return text || undefined
})
</script>

<template>
  <MarkdownRender
    :content="slotContent ?? content ?? ''"
    :max-live-nodes="0"
    class="prose prose-sm size-full max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
  />
</template>
