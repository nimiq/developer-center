<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

defineProps<{
  options: Record<string, { label: string, disabled?: boolean }>
}>()

const model = defineModel()
const randomName = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 10)

const loaded = ref(false)

onMounted(() => {
  setPill()
  setTimeout(() => loaded.value = true, 300)
})
watch(model, setPill, { immediate: true })

const pillStyles = ref({ left: '0px', width: '0px' })
function setPill() {
  const selectedLabel = globalThis.document?.querySelector(`#${randomName}-${model.value}`)?.parentElement as HTMLLabelElement
  if (!selectedLabel)
    return
  globalThis.window?.requestAnimationFrame(() => {
    pillStyles.value = { left: `${selectedLabel.offsetLeft}px`, width: `${selectedLabel.offsetWidth}px` }
  })
}
</script>

<template>
  <div
    w-max flex="~ align-center" h-32 relative p-4 border-subtle rounded-full bg-neutral-200
  >
    <label
      v-for="[key, option] of Object.entries(options)" :key="`${key}-input`" :tabindex="option.disabled !== true ? undefined : '1'"
      relative z-2 px-12 text-12 label transition-colors select-none
      :class="{
        'text-darkblue': model === key,
        'text-neutral-800': model !== key,
        'cursor-pointer z-1 hover:text-neutral-900': option.disabled !== true && model !== key,
        'cursor-not-allowed text-neutral-500': option.disabled === true,
      }"
      rounded-full flex="~ items-center"
    >
      <input
        :id="`${randomName}-${key}`" v-model="model" type="radio" :value="key"
        sr-only
        :name="randomName" :disabled="option.disabled === true" @mousedown.prevent
      >
      {{ option.label }}
    </label>
    <div bg-white rounded-full h-27 top-2 absolute z-1 :style="{ ...pillStyles, transition: loaded ? 'left 300ms, width 200ms' : '' }" />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --at-apply: ring-2 ring-blue ring-offset-3;
}
</style>
