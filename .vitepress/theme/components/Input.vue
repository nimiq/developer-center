<script setup lang="ts" generic="T extends string | number">
import { capitalizeFirstLetter } from '../../utils'

const { type = 'text', required = false } = defineProps<{
  label: string
  type?: T extends string ? 'text' : 'number'
  required?: boolean
}>()

const model = defineModel<T>()
</script>

<template>
  <label :key="label" flex="~ col items-center">
    <span text="f-2xs neutral-800" mb-4 self-start bg-transparent pl-12 font-semibold lh-none :title="`${type}${required ? ' (required)' : ''}`">
      {{ label }}<sup v-if="required" top--3 inline-block size-5 i-nimiq:asterisk />
    </span>
    <input v-model="model" :type :placeholder="`${capitalizeFirstLetter(type)}${required ? ' (required)' : ''}`" :required mt-0 nq-input-box rounded-4>
  </label>
</template>
