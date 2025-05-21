<script setup lang="ts">
import { capitalizeFirstLetter } from '../../utils'

const { required = false, defaultValue = '', type = 'string' } = defineProps<{
  type?: string
  label: string
  required?: boolean
  defaultValue?: string
}>()

const model = defineModel<string>()
function reset() {
  model.value = defaultValue || ''
}
</script>

<template>
  <label :key="label" flex="~ col items-center">
    <span text="f-2xs neutral-800" :title="`${type}${required ? ' (required)' : ''}`" font-semibold lh-none mb-4 px-12 bg-transparent flex w-full self-start>
      {{ label }}<sup v-if="required" size-5 inline-block top-0 i-nimiq:asterisk />
      <button v-if="model !== defaultValue" ml-auto text-left bg-transparent underline @click="reset">Reset</button>
    </span>
    <input v-model="model" type="string" :placeholder="`${capitalizeFirstLetter(type)}${required ? ' (required)' : ''}`" :required mt-0 rounded-4 nq-input-box>
  </label>
</template>
