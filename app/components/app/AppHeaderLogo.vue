<script setup lang="ts">
const appConfig = useAppConfig()
const { hasLogo, headerLightUrl, headerDarkUrl, contextMenuItems } = useLogoAssets()
</script>

<template>
  <NuxtLink to="/" class="flex items-center gap-2.5">
    <UContextMenu v-if="hasLogo" :items="contextMenuItems">
      <UColorModeImage
        :light="headerLightUrl"
        :dark="headerDarkUrl"
        :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
        class="h-6 w-auto shrink-0" :class="[appConfig.header?.logo?.class]"
      />
    </UContextMenu>
    <span class="whitespace-nowrap text-sm font-light text-muted" style="font-family: 'Mulish', sans-serif;">Developer Center</span>
  </NuxtLink>
</template>
