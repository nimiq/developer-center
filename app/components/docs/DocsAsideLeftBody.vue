<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import RpcMethodsSidebar from './RpcMethodsSidebar.vue'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()

const currentModule = computed(() => route.path.split('/').filter(Boolean)[0] || '')
const isRpcMethodsPage = computed(() => {
  return route.path === '/rpc/methods'
    || route.path === '/rpc/methods/'
    || route.path.startsWith('/rpc/methods/')
})

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
  <RpcMethodsSidebar v-if="isRpcMethodsPage" />
  <UContentNavigation
    v-else
    highlight
    :navigation="filteredNavigation"
  />
</template>
