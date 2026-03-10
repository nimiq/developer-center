<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()

const currentModule = computed(() => route.path.split('/').filter(Boolean)[0] || '')

const filteredNavigation = computed(() => {
  if (!navigation?.value || !currentModule.value)
    return navigation?.value || []
  const moduleNav = navigation.value.find((item) => {
    const itemSegment = item.path?.split('/').filter(Boolean)[0] || ''
    return itemSegment === currentModule.value
  })
  if (moduleNav?.children?.length)
    return moduleNav.children
  if (moduleNav)
    return [moduleNav]
  return navigation.value
})
</script>

<template>
  <UContentNavigation highlight :navigation="filteredNavigation" />
</template>
