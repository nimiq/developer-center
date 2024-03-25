<script setup lang="ts">
import { breakpointsTailwind, useMagicKeys } from '@vueuse/core'

const { go } = useRouter()

const SearchBox = defineAsyncComponent(() => import('vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue'))
const Navigation = defineAsyncComponent(() => import('./Navigation.vue'))
const MobileMenu = defineAsyncComponent(() => import('./MobileMenu.vue'))

const { smaller } = useBreakpoints(breakpointsTailwind)
const isSmall = smaller('lg')
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
</script>

<template>
  <div border-bottom lg="fixed top-0" w-full bg-neutral-0 z-100>
    <header
      style="height: var(--vp-nav-height)" max-w-1280 mx-auto px="24 sm:48 md2:64"
      flex="~ items-center" class="raw"
    >
      <a :href="withBase('/')" focusable flex="~ items-center gap-10" p-6 ml--6 un-text="19 md:20 neutral" relative @click.right.prevent="go(withBase('/build/ui/design/logo'))">
        <div
          class="dark:i-nimiq:logos-nimiq-white-horizontal i-nimiq:logos-nimiq-horizontal"
          text="96 md:101"
        />
        <h2 whitespace-nowrap hidden xs:block w-max>
          <span sr-only>Nimiq</span> Developer Center
        </h2>
        <div absolute top-36 right--12 @click.prevent>
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
        <button ml-24 text-14 py-6 px-12 input-text min-w-192 group flex="~ gap-8 items-center" rounded-full class="group" @click="showSearch = true">
          <div i-nimiq:magnifying-glass text-neutral-800 />
          <span text="neutral-800 group-hocus:blue">Search</span>
          <span flex="~ items-center gap-4" pointer-events-none mr--6 select-none rounded-full ring="1 neutral/10 group-hocus:blue-600" ml-auto font-sans font-medium text="11 neutral/80 group-hocus:blue" px-6 bg="neutral-200 group-hocus:blue-400" font-mono>
            <kbd>Ctrl</kbd>
            <kbd>K</kbd>
          </span>
        </button>
        <Navigation :navigation />
      </template>
    </header>
  </div>
</template>
