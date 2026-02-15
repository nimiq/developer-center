<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const { small = false } = defineProps<{
  options: Record<string, { label: string, disabled?: boolean }>
  small?: boolean
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
    flex="~ align-center" border-subtle-sm rounded-full bg-neutral-200 w-max relative :class="small ? 'h-26 p-3' : 'h-32 p-4'"
  >
    <label
      v-for="[key, option] of Object.entries(options)" :key="`${key}-input`" :tabindex="option.disabled !== true ? undefined : '1'"

      :class="[{
        'text-darkblue': model === key,
        'text-neutral-800': model !== key,
        'cursor-pointer z-1 hover:text-neutral-900': option.disabled !== true && model !== key,
        'cursor-not-allowed text-neutral-500': option.disabled === true,
      }, small ? 'text-10 px-10' : 'text-12 px-12']" rounded-full select-none transition-colors relative z-2 nq-label flex="~ items-center"
    >
      <input
        :id="`${randomName}-${key}`" v-model="model" type="radio" :value="key"
        sr-only
        :name="randomName" :disabled="option.disabled === true" @mousedown.prevent
      >
      {{ option.label }}
    </label>
    <div
      rounded-full bg-white absolute z-1 :class="small ? 'h-22 top-2' : 'h-27 top-2'" :style="{ ...pillStyles,
                                                                                                transition: loaded ? 'left 300ms, width 200ms' : '' }"
    />
  </div>
</template>

<style scoped>
label:has(input:focus-visible) {
  --at-apply: ring-2 ring-blue ring-offset-3;
}
</style>
