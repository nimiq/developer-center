<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ loading?: boolean }>()
const emit = defineEmits<{ submit: [content: string] }>()

const input = ref('')

function handleSubmit() {
  const content = input.value.trim()
  if (!content)
    return
  emit('submit', content)
  input.value = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
}
</script>

<template>
  <form flex="~ gap-12" mt-16 @submit.prevent="handleSubmit">
    <textarea
      v-model="input" :disabled="loading"

      border="~ neutral-300 focus:blue"
      text="14 neutral" placeholder="Ask about Nimiq..."
      ring="focus:1 focus:blue" outline-none rounded-6 bg-neutral-0 flex-1 max-h-200 min-h-48 resize-y transition-colors f-p-sm
      @keydown="handleKeydown"
    />
    <button
      type="submit" :disabled="loading || !input.trim()"

      flex="~ items-center justify-center gap-8"
      px-16 outline-none h-48 transition-opacity nq-pill nq-pill-blue disabled:opacity-50
    >
      <span v-if="loading" i-tabler:loader-2 size-18 animate-spin />
      <span v-else i-tabler:send size-18 />
    </button>
  </form>
</template>
