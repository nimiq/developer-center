<script setup lang="ts">
import Headline from './Headline.vue'

interface QuickStartAction {
  title: string
  description: string
  href: string
  icon: string
}

defineProps<{
  label: string
  title: string
  description: string
  actions: QuickStartAction[]
  align?: 'center' | 'left'
}>()
</script>

<template>
  <section class="quick-start">
    <Headline :label :title :description :align />
    <NqGrid :cards="actions" large-cards my-0 />
  </section>
</template>

<style global>
.quick-start .nq-hoverable {
  [class*='i-'] {
    --uno: 'op-100 f-mb-xs';
  }

  p {
    --uno: 'f-mt-2xs';
  }
}
</style>
