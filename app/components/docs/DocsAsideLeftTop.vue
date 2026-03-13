<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const modules = computed<ContentNavigationItem[]>(() => {
  if (!navigation?.value) {
    return []
  }

  return navigation.value
    .filter(item => item.path && item.path !== '/')
    .map(({ title, path, icon }) => ({ title, path, icon }))
})
</script>

<template>
  <UContentNavigation
    v-if="modules.length"
    highlight
    :navigation="modules"
  />
</template>
