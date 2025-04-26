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
    <span text="f-2xs neutral-800" :title="`${type}${required ? ' (required)' : ''}`" mb-4 w-full flex self-start bg-transparent px-12 font-semibold lh-none>
      {{ label }}<sup v-if="required" top-0 inline-block size-5 i-nimiq:asterisk />
      <button v-if="model !== defaultValue" ml-auto bg-transparent text-left underline @click="reset">Reset</button>
    </span>
    <input v-model="model" type="string" :placeholder="`${capitalizeFirstLetter(type)}${required ? ' (required)' : ''}`" :required mt-0 nq-input-box rounded-4>
  </label>
</template>
