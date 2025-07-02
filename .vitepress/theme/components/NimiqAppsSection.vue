<script setup lang="ts">
import NimiqAppsShowcase from './NimiqAppsShowcase.vue'

interface Props {
  label?: string
  title: string
  description: string
  showAllApps?: boolean
}

defineProps<Props>()
</script>

<template>
  <section>
    <div v-if="label" nq-label>
      {{ label }}
    </div>
    <h2 mt-8="!" class="nq-headline">
      {{ title }}
    </h2>
    <p class="nq-subline">
      {{ description }}
    </p>

    <NimiqAppsShowcase :show-all-apps="showAllApps" />
  </section>
</template>
