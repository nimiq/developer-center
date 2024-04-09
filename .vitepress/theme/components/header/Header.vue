<script setup lang="ts">
import { breakpointsTailwind, useMagicKeys } from '@vueuse/core'
import { ContextMenu } from 'radix-vue/namespaced'
import { getIconSnippet } from '../../composables/icons/icon'

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

const nimiqLogo = ref('')
onMounted(async () => {
  nimiqLogo.value = await getIconSnippet('nimiq:logos-nimiq-horizontal', 'SVG')
})
const { copy, isSupported } = useClipboard({ copiedDuring: 3000 })

const showEnvironment = __BUILD_ENVIRONMENT__ !== 'production'
</script>

<template>
  <div border-bottom lg="fixed top-0" w-full bg-neutral-0 z-100>
    <header mx-auto flex="~ items-center" class="raw">
      <a :href="withBase('/')" focusable flex="~ items-center gap-10" p-6 ml--6 un-text="19 md:20 neutral" relative>
        <ContextMenu.Root>
          <ContextMenu.Trigger as-child>
            <div
              class="dark:i-nimiq:logos-nimiq-white-horizontal i-nimiq:logos-nimiq-horizontal"
              text="96 md:101"
            />
            <h2 whitespace-nowrap hidden xs:block w-max>
              <span sr-only>Nimiq</span> Developer Center
            </h2>
          </ContextMenu.Trigger>
          <ContextMenu.Portal>
            <ContextMenu.Content :side-offset="8" bg-neutral-0 ring="1 neutral/20" z-100 rounded-6 p-8 shadow flex="~ col gap-8">
              <ContextMenu.Item v-if="isSupported" as="button" flex="~ items-center gap-8" hocus:bg-neutral-100 transition-colors px-8 py-4 rounded-2 @click="copy(nimiqLogo)">
                <div i-nimiq:copy op-80 text-14 />Copy Logo
              </ContextMenu.Item>
              <ContextMenu.Item as="a" :href="withBase('/build/ui/design/logo')" flex="~ items-center gap-8" hocus:bg-neutral-100 transition-colors px-8 py-4 rounded-2 arrow after:opacity-70><div i-nimiq:logos-nimiq-mono op-80 text-14 />How to use it</ContextMenu.Item>
              <ContextMenu.Separator h-1 w-full bg-neutral-300 />
              <ContextMenu.Item as="a" href="https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design" flex="~ items-center gap-8" hocus:bg-neutral-100 transition-colors after:opacity-70 px-8 py-4 rounded-2 arrow><div i-logos:figma op-80 text-14 />Style Guide</ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Portal>
        </ContextMenu.Root>

        <div v-if="showEnvironment" absolute top-36 right--12 @click.prevent>
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
        <button ml-32 text-14 py-6 px-12 input-text min-w-192 group flex="~ gap-8 items-center" rounded-full class="group" @click="showSearch = true">
          <div i-nimiq:magnifying-glass text="12 neutral-700 group-hocus:blue/80 transition" />
          <span text="neutral-800 group-hocus:blue transition">Search</span>
          <div flex="~ items-baseline gap-4" pointer-events-none mr--3 mb--1 py-2 lh="11" select-none rounded-full ring="1 neutral/10 group-hocus:blue-600" ml-auto font-sans font-medium text="11 neutral/80 group-hocus:blue" px-6 bg="neutral-200 group-hocus:blue-400" transition font-mono>
            <kbd>Ctrl</kbd>
            <kbd>K</kbd>
          </div>
        </button>
        <Navigation :navigation />
      </template>
    </header>
  </div>
</template>

<style>
header {
  height: var(--vp-nav-height);
  padding: 0 32px;
  max-width: calc(74ch + 2rem + 2rem);
  margin: 0 auto;

  @media(min-width: 960px) {
    max-width: inherit;
    margin: inherit;
    padding-right: max(32px,calc((100vw - var(--vp-layout-max-width)) / 2));
  }

  @media (min-width: 1440px) {
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
  }
}
</style>
