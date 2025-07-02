<script setup lang="ts">
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
}>()
</script>

<template>
  <section>
    <div nq-label>
      {{ label }}
    </div>
    <h2 mt-0="!" class="nq-headline">
      {{ title }}
    </h2>
    <p class="nq-subline">
      {{ description }}
    </p>

    <NqGrid :cards="actions" large-cards />
  </section>
</template>
