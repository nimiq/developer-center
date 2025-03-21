<script setup lang="ts">
defineProps<{ href: string }>()
</script>

<template>
  <a :href un-text="xs neutral-900 hocus:blue" flex="~ items-center" mx-0 mt-12 w-max font-semibold nq-arrow target="_blank">
    <div mr-6 op-70 i-nimiq:logos-github-mono />
    View source
  </a>
</template>
