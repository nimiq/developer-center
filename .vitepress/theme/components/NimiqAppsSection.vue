<script setup lang="ts">
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
    <NqHeadline px="$px" :label :title :description :h1="false" mt-0 />

    <NimiqAppsShowcase max-w-none="!" style="width: 100vw; margin-left: calc(50% - 50vw);" :show-all-apps="showAllApps" />
  </section>
</template>
