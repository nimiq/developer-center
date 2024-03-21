<script setup lang="ts">
import { breakpointsTailwind, useMagicKeys } from '@vueuse/core'

const SearchBox = defineAsyncComponent(() => import('vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue'))
const Navigation = defineAsyncComponent(() => import('./Navigation.vue'))
const MobileMenu = defineAsyncComponent(() => import('./MobileMenu.vue'))

const { smaller } = useBreakpoints(breakpointsTailwind)
const isSmall = smaller('xl')
const showSearch = ref(false)

useMagicKeys({
  passive: false,
  onEventFired: (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault()
      showSearch.value = true
    }
  },
})

const { navigation } = useData().theme.value
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div border-bottom lg="fixed top-0" w-full bg-neutral-0 z-100>
    <header
      style="height: var(--vp-nav-height)" max-w-1280 mx-auto px="24 sm:48 md2:64"
      flex="~ items-center" class="raw"
    >
      <a :href="baseUrl" focusable flex="~ items-center gap-10" p-6 ml--6 un-text="19 md:20 neutral" relative>
        <div
          class="dark:i-nimiq:logos-nimiq-white-horizontal i-nimiq:logos-nimiq-horizontal"
          text="96 md:101"
        />
        <h2 whitespace-nowrap hidden xs:block>
          <span sr-only>Nimiq</span> Developer Center
        </h2>
        <div absolute top-24 right--16 @click.prevent>
          <Environment />
        </div>
      </a>
      <template v-if="isSmall">
        <SearchBox v-if="showSearch" @close="showSearch = false" />
        <button ml-auto mr-16 p-16 @click="showSearch = true">
          <div i-nimiq:magnifying-glass />
        </button>
        <MobileMenu :navigation />
      </template>
      <template v-else>
        <SearchBox v-if="showSearch" @close="showSearch = false" />
        <button ml-24 text-14 py-6 input-text flex="~ gap-8 items-center" rounded-full class="group" @click="showSearch = true">
          <div i-nimiq:magnifying-glass op60 />
          <span lh="1" style="color: var(--nq-color)">Search</span>
          <span ghost-btn flex="~ gap-2" p-2 rounded-3 ml-64 style="--ring-color: var(--nq-color)" hover="bg-inherit" group-hover="op60">
            <kbd>Ctrl</kbd>
            <kbd>K</kbd>
          </span>
        </button>
        <Navigation :navigation />
      </template>
    </header>
  </div>
</template>
