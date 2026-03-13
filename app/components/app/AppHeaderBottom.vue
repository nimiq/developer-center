<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui/utils/content'

const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const moduleOrder = [
  'web-client',
  'rpc',
  'hub',
  'nodes',
  'protocol',
  'mini-apps',
  'nimiq-utils',
  'migration',
]

function getSegment(path?: string) {
  return path?.split('/').filter(Boolean)[0] || ''
}

const items = computed(() => {
  const topLevelNavigation = navigation?.value || []
  const orderedModules = moduleOrder
    .map(segment => topLevelNavigation.find(item => getSegment(item.path) === segment))
    .filter((item): item is ContentNavigationItem => Boolean(item))
    .map(item => ({ ...item, children: undefined }))

  return (mapContentNavigation(orderedModules) || []).map(item => ({
    ...item,
    active: route.path === item.to || route.path.startsWith(`${item.to}/`),
  }))
})
</script>

<template>
  <USeparator class="hidden lg:flex" />

  <UContainer class="hidden lg:flex items-center justify-between">
    <UNavigationMenu
      :items="items"
      variant="pill"
      highlight
      class="-mx-2.5 -mb-px"
    />
  </UContainer>
</template>
