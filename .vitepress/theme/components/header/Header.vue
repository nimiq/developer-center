<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { ContextMenu } from 'radix-vue/namespaced'
import { inBrowser } from 'vitepress'

import Navigation from './Navigation.vue'
import MobileMenu from './MobileMenu.vue'

const SearchBox = defineAsyncComponent(() => import('vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue'))

const { smaller } = useBreakpoints(breakpointsTailwind)
const isSmall = smaller('lg')
const showSearch = ref(false)

useEventListener('keydown', (e: KeyboardEvent) => {
  if ((e.key === 'k' || e.key === 'л') && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    showSearch.value = true
  }
})

const { navigation } = useData().theme.value
const { isDark } = useData()

const nimiqLogo = computed(() =>
`<svg xmlns="http://www.w3.org/2000/svg" width="135.12" height="32" viewBox="0 0 76 18"><g fill="none"><path fill="url(#nimiq-logos-nimiq-horizontal-wz80ga6msghr1pdigblv)" d="M19.964 8.156 15.758.844A1.69 1.69 0 0014.299 0H5.887c-.6 0-1.156.32-1.456.844L.225 8.156c-.3.523-.3 1.165 0 1.688l4.206 7.312c.3.523.856.844 1.456.844h8.412c.6 0 1.156-.32 1.456-.844l4.206-7.312a1.69 1.69 0 00.003-1.688"/><path fill="${isDark.value ? '#fff' : '#1F2348'}" d="M34.91 3.656h1.829v10.688H35.33L29.582 6.89v7.453H27.76V3.656h1.402l5.75 7.453zm5.469 10.688V3.656h1.963v10.688zM54.82 3.656h1.543v10.688H54.68v-6.61l-2.874 6.61h-1.262l-2.874-6.61v6.61h-1.683V3.656h1.542l3.646 8.368zm5.188 10.688V3.656h1.963v10.688zm15.076-2.436c-.573 1.14-1.462 1.809-2.25 2.135.093.214.528.81.856 1.153s.673.692 1.11 1.046l-1.332 1.055c-.49-.343-.917-.754-1.351-1.232a9 9 0 01-1.142-1.595 9 9 0 01-.451.014c-1.085 0-1.991-.222-2.773-.663a4.4 4.4 0 01-1.792-1.913c-.379-.756-.623-1.766-.623-2.908s.21-2.076.628-2.908a4.44 4.44 0 011.8-1.913c.783-.444 1.697-.663 2.76-.663s1.99.222 2.773.663a4.4 4.4 0 011.792 1.913c.415.832.623 1.766.623 2.908s-.25 2.154-.629 2.908m-6.935.009q.849 1.02 2.375 1.02 1.528 0 2.375-1.02c.567-.684.85-1.646.85-2.917 0-1.263-.283-2.247-.85-2.922q-.849-1.014-2.375-1.016-1.529 0-2.375 1.007c-.567.673-.85 1.66-.85 2.931s.283 2.233.85 2.917"/><defs><radialGradient id="nimiq-logos-nimiq-horizontal-wz80ga6msghr1pdigblv" cx="0" cy="0" r="1" gradientTransform="matrix(20.1956 0 0 20.2552 15.188 17.766)" gradientUnits="userSpaceOnUse"><stop stop-color="#EC991C"/><stop offset="1" stop-color="#E9B213"/></radialGradient></defs></g></svg>`,
)

const { copy, isSupported } = useClipboard({ copiedDuring: 3000 })

const showEnvironment = __BUILD_ENVIRONMENT__ !== 'production'

const isMac = inBrowser ? document.documentElement.classList.contains('mac') : false
</script>

<template>
  <div border-bottom lg="fixed top-0" w-full bg-neutral-0 z-100>
    <header mx-auto flex="~ items-center" class="raw">
      <a :href="withBase('/')" focusable flex="~ items-center gap-10" p-6 ml--6 un-text="19 md:20 neutral" relative>
        <ContextMenu.Root>
          <ContextMenu.Trigger as-child aria-label="Nimiq Developer Center">
            <div class="dark:i-nimiq:logos-nimiq-white-horizontal i-nimiq:logos-nimiq-horizontal" text="96 md:101" />
            <h2 whitespace-nowrap hidden xs:block w-max>
              <span sr-only>Nimiq</span> Developer Center
            </h2>
          </ContextMenu.Trigger>
          <ContextMenu.Portal>
            <ContextMenu.Content
              :side-offset="8" bg-neutral-0 ring="1 neutral/20" z-100 rounded-6 p-8 shadow
              flex="~ col gap-8"
            >
              <ContextMenu.Item
                v-if="isSupported" as="button" flex="~ items-center gap-8" hocus:bg-neutral-100
                transition-colors px-8 py-4 rounded-2 @click="copy(nimiqLogo)"
              >
                <div i-nimiq:copy op-80 text-14 />Copy Logo
              </ContextMenu.Item>
              <ContextMenu.Item
                as="a" :href="withBase('/build/ui/design/logo')" flex="~ items-center gap-8"
                hocus:bg-neutral-100 transition-colors px-8 py-4 rounded-2 arrow after:opacity-70
              >
                <div i-nimiq:logos-nimiq-mono op-80 text-14 />How to use it
              </ContextMenu.Item>
              <ContextMenu.Separator h-1 w-full bg-neutral-300 />
              <ContextMenu.Item
                as="a"
                href="https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design"
                target="_blank" rel="noopener noreferrer"
                flex="~ items-center gap-8" hocus:bg-neutral-100 transition-colors after:opacity-70 px-8 py-4 rounded-2
                arrow
              >
                <div i-logos:figma op-80 text-14 />Style Guide
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Portal>
        </ContextMenu.Root>

        <div v-if="showEnvironment" absolute top-36 right--12 @click.prevent>
          <Environment />
        </div>
      </a>
      <ClientOnly>
        <template v-if="isSmall">
          <SearchBox v-if="showSearch" @close="() => showSearch = false" />
          <button ml-auto mr-16 p-16 aria-label="Search" @click="showSearch = true">
            <div i-nimiq:magnifying-glass />
          </button>
          <MobileMenu :navigation />
        </template>
        <template v-else>
          <SearchBox v-if="showSearch" @close="() => showSearch = false" />
          <button
            ml-32 text-14 py-6 px-12 input-box max-w-320 min-w-192 group flex="~ gap-8 items-center" rounded-full
            class="group" @click="showSearch = true"
          >
            <div i-nimiq:magnifying-glass text="12 neutral-700 group-hocus:blue/80 transition" />
            <span text="neutral-800 group-hocus:blue transition">Search</span>
            <div
              flex="~ items-baseline gap-4" pointer-events-none mr--3 mb--1 py-2 lh="11" select-none rounded-full
              ring="1 neutral/10 group-hocus:blue-600" ml-auto font-sans font-medium
              text="11 neutral/80 group-hocus:blue" px-6 bg="neutral-200 group-hocus:blue-400" transition font-mono
            >
              <kbd>{{ isMac ? '⌘' : 'Ctrl' }}</kbd>
              <kbd>K</kbd>
            </div>
          </button>
          <Navigation :navigation />
        </template>
      </ClientOnly>
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
    padding-right: max(32px, calc((100vw - var(--vp-layout-max-width)) / 2));
  }

  @media (min-width: 1440px) {
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
  }
}
</style>
