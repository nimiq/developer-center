<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed, provide, ref, watch } from 'vue'
import { ReasoningKey } from './context'

const props = withDefaults(defineProps<{
  isStreaming?: boolean
  open?: boolean
  defaultOpen?: boolean
  duration?: number
}>(), { isStreaming: false, defaultOpen: true, duration: undefined })

const emit = defineEmits<{
  (e: 'update:open', value: boolean): void
  (e: 'update:duration', value: number): void
}>()

const isOpen = useVModel(props, 'open', emit, { defaultValue: props.defaultOpen, passive: true })
const internalDuration = ref<number | undefined>(props.duration)

watch(() => props.duration, (newVal) => {
  internalDuration.value = newVal
})

function updateDuration(val: number) {
  internalDuration.value = val
  emit('update:duration', val)
}

const hasAutoClosed = ref(false)
const startTime = ref<number | null>(null)
const MS_IN_S = 1000
const AUTO_CLOSE_DELAY = 1000

watch(() => props.isStreaming, (streaming) => {
  if (streaming) {
    isOpen.value = true
    if (startTime.value === null)
      startTime.value = Date.now()
  }
  else if (startTime.value !== null) {
    const calculatedDuration = Math.ceil((Date.now() - startTime.value) / MS_IN_S)
    updateDuration(calculatedDuration)
    startTime.value = null
  }
})

watch([() => props.isStreaming, isOpen, () => props.defaultOpen, hasAutoClosed], (_, __, onCleanup) => {
  if (props.defaultOpen && !props.isStreaming && isOpen.value && !hasAutoClosed.value) {
    const timer = setTimeout(() => {
      isOpen.value = false
      hasAutoClosed.value = true
    }, AUTO_CLOSE_DELAY)
    onCleanup(() => clearTimeout(timer))
  }
}, { immediate: true })

provide(ReasoningKey, {
  isStreaming: computed(() => props.isStreaming),
  isOpen,
  setIsOpen: (val: boolean) => {
    isOpen.value = val
  },
  duration: computed(() => internalDuration.value),
})
</script>

<template>
  <div class="mb-4">
    <slot />
  </div>
</template>
