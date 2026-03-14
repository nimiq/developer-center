<script setup lang="ts">
import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import type { NimiqRpcMethods } from '../../utils/rpc'
import { useAsyncData, useRoute } from '#imports'
import { computed, ref, watch } from 'vue'
import openRpcDocument from '../../../data/openrpc-document.json'
import { loadMethods } from '../../utils/rpc'

const route = useRoute()

const { data: groups } = await useAsyncData('rpc-sidebar-method-groups', () => loadMethods(openRpcDocument as OpenrpcDocument))

const normalizedPath = computed(() => normalizePath(route.path))
const activeGroup = computed(() => groups.value?.find(group =>
  group.methods.some(method => normalizePath(method.link) === normalizedPath.value),
))
const expandedGroup = ref<string | null>(null)

watch(activeGroup, (group) => {
  expandedGroup.value = group?.text ?? null
}, { immediate: true })

function isExpanded(group: NimiqRpcMethods) {
  return expandedGroup.value === group.text
}

function toggleGroup(group: NimiqRpcMethods) {
  expandedGroup.value = isExpanded(group) ? null : group.text
}

function isActive(link: string) {
  return normalizePath(link) === normalizedPath.value
}

function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/'
}
</script>

<template>
  <div class="space-y-5">
    <div class="space-y-1 px-2">
      <p class="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Methods
      </p>
      <p class="text-sm leading-6 text-toned">
        Browse RPC methods by category.
      </p>
    </div>

    <nav class="space-y-1" aria-label="RPC methods">
      <NuxtLink
        to="/rpc/methods/"
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
        :class="isActive('/rpc/methods/')
          ? 'bg-elevated text-highlighted'
          : 'text-toned hover:bg-elevated/60 hover:text-highlighted'"
      >
        <UIcon name="i-tabler:grid-dots" class="size-4 shrink-0" />
        <span>All</span>
      </NuxtLink>

      <div
        v-for="group in (groups || [])"
        :key="group.text"
        class="space-y-1"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="isExpanded(group) || activeGroup?.text === group.text
            ? 'bg-elevated text-highlighted'
            : 'text-toned hover:bg-elevated/60 hover:text-highlighted'"
          @click="toggleGroup(group)"
        >
          <span class="flex min-w-0 items-center gap-3">
            <UIcon :name="group.icon" class="size-4 shrink-0" />
            <span class="truncate">{{ group.text }}</span>
          </span>
          <UIcon
            :name="isExpanded(group) ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
            class="size-4 shrink-0 text-muted"
          />
        </button>

        <div
          v-if="isExpanded(group)"
          class="ml-5 border-l border-default pl-3"
        >
          <NuxtLink
            v-for="method in group.methods"
            :key="method.name"
            :to="method.link"
            class="block rounded-md px-3 py-2 font-mono text-sm transition-colors"
            :class="isActive(method.link)
              ? 'bg-elevated text-highlighted'
              : 'text-toned hover:bg-elevated/60 hover:text-highlighted'"
          >
            <span class="block truncate">{{ method.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
