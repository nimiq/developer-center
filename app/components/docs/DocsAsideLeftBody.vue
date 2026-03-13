<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()

const currentModule = computed(() => route.path.split('/').filter(Boolean)[0] || '')

const filteredNavigation = computed<ContentNavigationItem[]>(() => {
  if (!navigation?.value) {
    return []
  }

  if (!currentModule.value) {
    return navigation.value
  }

  const moduleNavigation = navigation.value.find((item) => {
    const itemSegment = item.path?.split('/').filter(Boolean)[0] || ''
    return itemSegment === currentModule.value
  })

  if (moduleNavigation?.children?.length) {
    return moduleNavigation.children
  }

  return moduleNavigation ? [moduleNavigation] : navigation.value
})
</script>

<template>
  <UContentNavigation
    highlight
    :navigation="filteredNavigation"
  />
</template>
