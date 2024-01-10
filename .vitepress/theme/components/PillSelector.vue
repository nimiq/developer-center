<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'

defineProps<{
  options: Record<string, { label: string, disabled?: boolean }>
}>()

const model = defineModel()

const randomName = Math.random().toString(36).substring(7)

const loaded = ref(false)

onMounted(() => {
  setPill()
  setTimeout(() => loaded.value = true, 300)
})
watch(model, setPill)

const pillStyles = ref({ left: '0px', width: '0px' })
function setPill() {
  const selectedLabel = globalThis.document.querySelector(`#${randomName}-${model.value}`)?.parentElement as HTMLLabelElement
  if (!selectedLabel)
    return
  window.requestAnimationFrame(() => {
    pillStyles.value = { left: `${selectedLabel.offsetLeft}px`, width: `${selectedLabel.offsetWidth}px` }
  })
}
</script>

<template>
  <div
    w-max flex="~ align-center" h-32 relative p-4 ring="1 darkblue/3" rounded-full style="background: linear-gradient(0deg, rgba(31, 35, 72, 0.06), rgba(31, 35, 72, 0.06)), #FFFFFF;"
  >
    <label
      v-for="[key, option] of Object.entries(options)" :key="`${key}-input`" :tabindex="option.disabled !== true ? undefined : '0'"
      relative z-2 px-12 text-12 label transition-colors select-none :class="{ 'text-darkblue-50': model !== key, 'cursor-pointer z-1 hover:text-darkblue-80': option.disabled !== true, 'cursor-not-allowed text-darkblue-30': option.disabled === true }"
      class="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-darkblue-20 focus-visible:ring-offset-1 focus-visible:text-darkblue-80" flex="~ items-center"
    >
      <input
        :id="`${randomName}-${key}`" v-model="model" type="radio" :value="key"
        sr-only
        :name="randomName" :disabled="option.disabled === true" @mousedown.prevent
      >
      {{ option.label }}
    </label>
    <div bg-white rounded-full h-28 top-2 absolute z-1 ring="1 darkblue/4" :style="{ ...pillStyles, transition: loaded ? 'left 300ms, width 200ms' : '' }" />
  </div>
</template>