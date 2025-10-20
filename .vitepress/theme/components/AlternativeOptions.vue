<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description: string
  align?: 'center' | 'left'
  buttons?: {
    text: string
    href: string
    variant: 'primary' | 'secondary'
  }[]
}>()
</script>

<template>
  <section>
    <NqHeadline :label :title :description :align f-mt-4xl f-mb-lg :h1="false" />

    <div v-if="buttons && buttons.length > 0" flex="~ gap-16 wrap" m-0 w-max f-mt-sm>
      <a
        v-for="(button, index) in buttons"
        :key="index"
        :href="button.href"
        :class="button.variant === 'primary' ? 'nq-pill-blue' : 'nq-pill-tertiary'"
        nq-arrow
      >
        {{ button.text }}
      </a>
    </div>
  </section>
</template>
