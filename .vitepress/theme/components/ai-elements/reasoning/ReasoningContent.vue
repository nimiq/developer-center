<script setup lang="ts">
import MarkdownRender from 'markstream-vue'
import { computed, useSlots } from 'vue'
import { useReasoningContext } from './context'
import 'markstream-vue/index.css'

defineProps<{ content?: string }>()

const { isOpen } = useReasoningContext()

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
  <div v-show="isOpen" class="text-sm text-neutral/60 mt-3 animate-fade-in">
    <MarkdownRender :content="slotContent ?? content ?? ''" :max-live-nodes="0" />
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
