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

const protocolNavigationOrder = [
  '',
  'accounts',
  'transactions',
  'consensus',
  'validators',
  'economics',
  'node-sync',
  'storage',
  'zkp',
  'glossary',
] as const

const protocolNavigationRank = new Map<string, number>(
  protocolNavigationOrder.map((segment, index) => [segment, index]),
)

const miniAppsNavigationOrder = [
  '',
  'mini-app-tutorial',
  'dual-chain-mini-app-tutorial',
  'load-local-mini-app',
  'api-reference',
] as const

const miniAppsNavigationRank = new Map<string, number>(
  miniAppsNavigationOrder.map((segment, index) => [segment, index]),
)

const sidebarNavigation = computed<SidebarNavigationItem[]>(() => {
  if (!isRpcMethodsPage.value) {
    if (currentModule.value === 'protocol') {
      return sortProtocolNavigation(filteredNavigation.value)
    }

    if (currentModule.value === 'mini-apps') {
      return sortMiniAppsNavigation(filteredNavigation.value)
    }

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
          path: `/rpc/methods/_group/${group.text.toLowerCase().replace(/\s+/g, '-')}`,
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

function sortProtocolNavigation(items: SidebarNavigationItem[]) {
  return [...items].sort((a, b) => {
    const rankA = getProtocolNavigationRank(a)
    const rankB = getProtocolNavigationRank(b)

    if (rankA !== rankB) {
      return rankA - rankB
    }

    return (a.title || '').localeCompare(b.title || '')
  })
}

function getProtocolNavigationRank(item: SidebarNavigationItem) {
  const segment = getProtocolSegment(item)
  return protocolNavigationRank.get(segment) ?? Number.MAX_SAFE_INTEGER
}

function getProtocolSegment(item: SidebarNavigationItem) {
  const candidatePath = item.path || item.children?.[0]?.path || ''
  const segments = normalizePath(candidatePath).split('/').filter(Boolean)

  if (segments[0] !== 'protocol') {
    return ''
  }

  return segments[1] || ''
}

function sortMiniAppsNavigation(items: SidebarNavigationItem[]) {
  return [...items].sort((a, b) => {
    const rankA = getMiniAppsNavigationRank(a)
    const rankB = getMiniAppsNavigationRank(b)

    if (rankA !== rankB) {
      return rankA - rankB
    }

    return (a.title || '').localeCompare(b.title || '')
  })
}

function getMiniAppsNavigationRank(item: SidebarNavigationItem) {
  const candidatePath = item.path || item.children?.[0]?.path || ''
  const segments = normalizePath(candidatePath).split('/').filter(Boolean)

  if (segments[0] !== 'mini-apps') {
    return Number.MAX_SAFE_INTEGER
  }

  const segment = segments[1] || ''
  return miniAppsNavigationRank.get(segment) ?? Number.MAX_SAFE_INTEGER
}
</script>

<template>
  <UContentNavigation
    highlight
    :navigation="sidebarNavigation"
  />
</template>
