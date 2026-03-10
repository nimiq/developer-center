<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()

const currentModule = computed(() => route.path.split('/').filter(Boolean)[0] || '')

const moduleInfo = computed(() => {
  if (!navigation?.value || !currentModule.value)
    return null
  return navigation.value.find(item => item.path === `/${currentModule.value}`)
})
</script>

<template>
  <NuxtLink v-if="moduleInfo" :to="moduleInfo.path" class="flex items-center gap-2 px-2.5 py-2 mb-2 rounded-lg font-bold text-sm text-highlighted hover:bg-accented transition-colors">
    <UIcon v-if="moduleInfo.icon" :name="moduleInfo.icon" class="size-5 text-primary" />
    <span>{{ moduleInfo.title }}</span>
  </NuxtLink>
</template>
