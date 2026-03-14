<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import openRpcDocument from '../../../data/openrpc-document.json'
import { loadMethods } from '../../utils/rpc'

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

const { data: rpcMethodGroups } = await useAsyncData('rpc-sidebar-method-groups', () => loadMethods(openRpcDocument as OpenrpcDocument))

type SidebarNavigationItem = ContentNavigationItem & {
  class?: string
  defaultOpen?: boolean
  icon?: string
}

const sidebarNavigation = computed<SidebarNavigationItem[]>(() => {
  if (!isRpcMethodsPage.value) {
    return filteredNavigation.value
  }

  const activePath = normalizePath(route.path)

  return filteredNavigation.value.map((item) => {
    if (normalizePath(item.path || '') !== '/rpc/methods') {
      return item
    }

    return {
      ...item,
      defaultOpen: true,
      children: [
        {
          title: 'All',
          path: '/rpc/methods/',
          icon: 'i-tabler:grid-dots',
        },
        ...(rpcMethodGroups.value || []).map(group => ({
          title: group.text,
          icon: group.icon,
          defaultOpen: group.methods.some(method => normalizePath(method.link) === activePath),
          children: group.methods.map(method => ({
            title: method.name,
            path: method.link,
            class: 'font-mono text-sm',
          })),
        })),
      ],
    }
  })
})

function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/'
}
</script>

<template>
  <UContentNavigation
    highlight
    :navigation="sidebarNavigation"
  />
</template>
