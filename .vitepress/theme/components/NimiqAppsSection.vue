<script setup lang="ts">
import Headline from './Headline.vue'
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
  <section px-0="!">
    <Headline px="$px" :label :title :description />

    <NimiqAppsShowcase max-w-none="!" style="width: 100vw; margin-left: calc(50% - 50vw);" :show-all-apps="showAllApps" />
  </section>
</template>
