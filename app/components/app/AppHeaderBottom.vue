<script setup lang="ts">
import { DOC_MODULES, isModuleActive } from '../../utils/modules'

const route = useRoute()

const items = computed(() => {
  return DOC_MODULES.map(module => ({
    label: module.label,
    to: module.to,
    active: isModuleActive(route.path, module.to),
  }))
})
</script>

<template>
  <USeparator class="hidden lg:flex" />

  <UContainer class="hidden lg:flex items-center justify-between h-(--docs-header-bottom-height)">
    <UNavigationMenu
      :items="items"
      variant="link"
      highlight
      class="-mx-2.5 min-w-0"
    />
  </UContainer>
</template>
