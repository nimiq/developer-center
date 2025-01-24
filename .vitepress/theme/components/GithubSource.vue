<script setup lang="ts">
defineProps<{ href: string }>()
</script>

<template>
  <a :href un-text="xs neutral-900 hocus:blue" mt-12 flex="~ items-center" w-max mx-0 nq-arrow font-semibold target="_blank">
    <div i-nimiq:logos-github-mono mr-6 op-70 />
    View source
  </a>
</template>
