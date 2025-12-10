<script setup lang="ts">
defineProps<{ href: string, title: string }>()
</script>

<template>
  <a class="text-neutral/70 flex gap-2 transition-colors items-center hover:text-neutral" :href="href" target="_blank" rel="noreferrer">
    <slot>
      <div class="i-tabler:file-text size-4" />
      <span class="font-medium">{{ title }}</span>
    </slot>
  </a>
</template>
