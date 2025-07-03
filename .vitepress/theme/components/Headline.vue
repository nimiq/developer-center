<script setup lang="ts">
defineProps<{ title: string, description: string, label?: string, h1?: boolean }>()
</script>

<template>
  <div flex="~ col items-center" class="nq-raw" f-mb-2xl>
    <div v-if="label" outline="~ 1.5 neutral-600" bg="neutral/3" px-12 py-6 text-center rounded-full nq-label>
      {{ label }}
    </div>
    <component
      :is="h1 ? 'h1' : 'h2'" :class="{ 'f-mt-xs': label,
                                       'f-text-4xl font-bold': h1,
                                       'f-text-3xl font-semibold': !h1 }" mb-0 text="neutral center"
    >
      {{ title }}
    </component>
    <p text-center :class="h1 ? 'mt-0 f-text-2xl' : 'f-mt-2xs f-text-xl'">
      {{ description }}
    </p>
  </div>
</template>
