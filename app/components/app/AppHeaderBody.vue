<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { DOC_MODULES } from '../../utils/modules'

const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const moduleItems = computed(() => DOC_MODULES.map(module => ({
  ...module,
  active: route.path === module.to.slice(0, -1) || route.path.startsWith(module.to),
})))

const currentModuleNavigation = computed<ContentNavigationItem[]>(() => {
  if (!navigation?.value) {
    return []
  }

  const currentSegment = route.path.split('/').filter(Boolean)[0] || ''
  const currentModule = navigation.value.find((item) => {
    const itemSegment = item.path?.split('/').filter(Boolean)[0] || ''
    return itemSegment === currentSegment
  })

  if (currentModule?.children?.length) {
    return currentModule.children
  }

  return currentModule ? [currentModule] : []
})
</script>

<template>
  <UNavigationMenu orientation="vertical" :items="moduleItems" class="-mx-2.5" />

  <template v-if="currentModuleNavigation.length">
    <USeparator type="dashed" class="mt-4 mb-6" />

    <UContentNavigation highlight :navigation="currentModuleNavigation" />
  </template>
</template>
