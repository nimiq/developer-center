<script setup lang="ts">
const route = useRoute()

const appConfig = useAppConfig()
const site = useSiteConfig()

const { isEnabled: isAssistantEnabled } = useAssistant()
const { localePath, isEnabled, locales } = useDocusI18n()

const moduleSegments = new Set([
  'web-client',
  'rpc',
  'hub',
  'nodes',
  'protocol',
  'mini-apps',
  'nimiq-utils',
  'migration',
])

const showModuleTabs = computed(() => {
  const currentSegment = route.path.split('/').filter(Boolean)[0]
  return !!currentSegment && moduleSegments.has(currentSegment)
})

const links = computed(() => appConfig.github && appConfig.github.url
  ? [
      {
        'icon': 'i-simple-icons-github',
        'to': appConfig.github.url,
        'target': '_blank',
        'aria-label': 'GitHub',
      },
    ]
  : [])
</script>

<template>
  <UHeader
    :ui="{ center: 'flex-1' }"
    :to="localePath('/')"
    :title="appConfig.header?.title || site.name"
    class="flex flex-col"
  >
    <AppHeaderCenter />

    <template #title>
      <AppHeaderLogo class="h-6 w-auto shrink-0" />
    </template>

    <template #right>
      <AppHeaderCTA />

      <template v-if="isAssistantEnabled">
        <AssistantChat />
      </template>

      <template v-if="isEnabled && locales.length > 1">
        <ClientOnly>
          <LanguageSelect />

          <template #fallback>
            <div class="h-8 w-8 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
          </template>
        </ClientOnly>

        <USeparator orientation="vertical" class="h-8" />
      </template>

      <UContentSearchButton class="lg:hidden" />

      <ClientOnly>
        <UColorModeButton />

        <template #fallback>
          <div class="h-8 w-8 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </template>
      </ClientOnly>

      <template v-if="links?.length">
        <UButton
          v-for="(link, index) of links"
          :key="index"
          v-bind="{ color: 'neutral',
                    variant: 'ghost',
                    ...link }"
        />
      </template>
    </template>

    <template #toggle="{ open, toggle }">
      <IconMenuToggle
        :open="open"
        class="lg:hidden"
        @click="toggle"
      />
    </template>

    <template #body>
      <AppHeaderBody />
    </template>

    <template v-if="showModuleTabs" #bottom>
      <AppHeaderBottom />
    </template>
  </UHeader>
</template>
