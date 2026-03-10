<script setup lang="ts">
const appConfig = useAppConfig()
const site = useSiteConfig()

const router = useRouter()
const route = useRoute()
const currentSlug = computed(() => route.path.split('/').filter(Boolean)[0] || '')

const modules = [
  { label: 'Web Client', icon: 'i-custom-nimiq-web-client', value: 'web-client' },
  { label: 'RPC', icon: 'i-custom-nimiq-rpc', value: 'rpc' },
  { label: 'Hub', icon: 'i-custom-nimiq-hub', value: 'hub' },
  { label: 'Nodes & Validators', icon: 'i-custom-nimiq-dev', value: 'nodes' },
  { label: 'Protocol', icon: 'i-custom-nimiq-albatross', value: 'protocol' },
  { label: 'Mini Apps', icon: 'i-custom-nimiq-tutorial', value: 'mini-apps' },
  { label: 'Nimiq Utils', icon: 'i-custom-nimiq-utils', value: 'nimiq-utils' },
  { label: 'Migration', icon: 'i-tabler-git-merge', value: 'migration' },
]

const current = computed(() => modules.find(m => m.value === currentSlug.value))

function onModuleSelect(value: string) {
  router.push(`/${value}/`)
}

const links = computed(() => appConfig.github?.url
  ? [{ 'icon': 'i-simple-icons-github', 'to': appConfig.github.url, 'target': '_blank', 'aria-label': 'GitHub' }]
  : [])
</script>

<template>
  <UHeader :ui="{ center: 'flex-1' }" to="/" :title="appConfig.header?.title || site.name">
    <AppHeaderCenter />

    <template #title>
      <AppHeaderLogo class="h-6 w-auto shrink-0" />
    </template>

    <template #right>
      <USelectMenu
        :model-value="currentSlug || undefined"
        :items="modules"
        value-key="value"
        placeholder="Modules"
        class="w-40"
        size="sm"
        @update:model-value="onModuleSelect"
      >
        <template #leading>
          <UIcon v-if="current?.icon" :name="current.icon" class="size-4" />
          <UIcon v-else name="i-lucide-layers" class="size-4" />
        </template>
      </USelectMenu>

      <UContentSearchButton class="lg:hidden" />

      <ClientOnly>
        <UColorModeButton />
        <template #fallback>
          <div class="size-8 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </template>
      </ClientOnly>

      <UButton
        v-for="(link, index) of links" :key="index" v-bind="{ color: 'neutral' as const,
                                                              variant: 'ghost' as const,
                                                              ...link }"
      />
    </template>

    <template #toggle="{ open, toggle }">
      <IconMenuToggle :open="open" class="lg:hidden" @click="toggle" />
    </template>

    <template #body>
      <AppHeaderBody />
    </template>
  </UHeader>
</template>
