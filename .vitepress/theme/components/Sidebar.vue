<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core'
import type { DefaultTheme } from 'vitepress'
import { inBrowser } from 'vitepress'
import { ref, watch } from 'vue'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import { useSidebar } from '../composables/useSidebar'

const props = defineProps<{
  open: boolean
}>()

type SidebarItem = DefaultTheme.SidebarItem & { icon: string, items: SidebarItem[], prefix: string }
const { sidebarGroups, hasSidebar } = useSidebar() as unknown as { sidebarGroups: ComputedRef<SidebarItem[]>, hasSidebar: boolean }

// a11y: focus Nav element when menu has opened
const navEl = ref<HTMLElement | null>(null)
const isLocked = useScrollLock(inBrowser ? document.body : null)

watch(
  [props, navEl],
  () => {
    if (props.open) {
      isLocked.value = true
      navEl.value?.focus()
    }
    else { isLocked.value = false }
  },
  { immediate: true, flush: 'post' },
)

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

const KNOWN_EXTENSIONS = new Set()

function treatAsHtml(filename: string): boolean {
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts
      = (typeof process === 'object' && process.env.VITE_EXTRA_EXTENSIONS)
      || (import.meta as any).env?.VITE_EXTRA_EXTENSIONS
      || ''

    // md, html? are intentionally omitted
    ;(
      `3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,`
      + `doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,`
      + `man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,`
      + `opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,`
      + `tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,`
      + `yaml,yml,zip${
      extraExts && typeof extraExts === 'string' ? `,${extraExts}` : ''}`
    )
      .split(',')
      .forEach(ext => KNOWN_EXTENSIONS.add(ext))
  }

  const ext = filename.split('.').pop()

  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase())
}

function normalizeLink(url: string): string {
  const { pathname, search, hash, protocol } = new URL(url, 'http://a.com')

  if (
    isExternal(url)
    || url.startsWith('#')
    || !protocol.startsWith('http')
    || !treatAsHtml(pathname)
  )
    return url

  const { site } = useData()

  const normalizedPath
    = pathname.endsWith('/') || pathname.endsWith('.html')
      ? url
      : url.replace(
        /(?:(^\.+)\/)?.*$/,
          `$1${pathname.replace(
            /(\.md)?$/,
            site.value.cleanUrls ? '' : '.html',
          )}${search}${hash}`,
      )

  return withBase(normalizedPath)
}

const buttons = ref<HTMLButtonElement[]>([])

function onSectionTitleClicked(i: number) {
  buttons.value[i].scrollIntoView({ block: 'start', behavior: 'smooth' })
}
</script>

<template>
  <aside v-if="hasSidebar" class="VPSidebar border-base-r scroll" mb-2 :class="{ open }">
    <div mt-12>
      <Environment />
    </div>
    <nav aria-labelledby="sidebar-aria-label" tabindex="-1" py-40 h-full relative>
      <span id="sidebar-aria-label" sr-only>Sidebar Navigation</span>

      <template v-for="(group, i) in sidebarGroups" :key="group.text">
        <div w-full border-base-t sticky top-0 bottom--1 class="pl-[var(--pl)]" z-100 bg="lightgray dark:darkblue-1000" pt-16 cursor-pointer @click="onSectionTitleClicked(i)">
          <div pb-8>
            <button ref="buttons" :data-index="i" mx--8 px-8 focus-visible="outline-blue bg-blue/6">
              <p v-if="group.prefix" text-16 op50 font-semibold relative>
                {{ group.prefix }}
              </p>
              <div text="24 darkblue dark:white" flex="~ items-center gap-8">
                <div v-if="group.icon" :class="group.icon" />
                <h3 text-24 font-bold>
                  {{ group.text }}
                </h3>
              </div>
            </button>
            <div absolute inset-x-0 bottom--16 bg-gradient-to-b h-16 pointer-events-none from="lightgray dark:darkblue-1000" to-transparent />
          </div>
        </div>

        <ul class="pl-[var(--pl)]" pb-20 mt-16>
          <li v-for="item in group.items" :key="item.text" :class="item.items ? 'my-32' : 'my-8'">
            <a v-if="!item.items" :rel="item.rel" :href="normalizeLink(item.link)" :target="item.target" op80>
              {{ item.text }}
            </a>

            <AccordionRoot v-else type="multiple" :collapsible="true">
              <AccordionItem :value="item.text">
                <AccordionHeader as="div">
                  <AccordionTrigger class="group" flex="~ items-center gap-8">
                    <div i-nimiq:chevron-down text-10 op70 transition-transform duration-300 rotate="-90 group-data-[state=open]:!0" />
                    <span label op80>{{ item.text }}</span>
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent class="accordion-content" of-hidden>
                  <ul mt-16 bottom--8 relative>
                    <li v-for="sub in item.items " :key="sub.text" py-8>
                      <a v-if="!sub.items" :rel="sub.rel" :href="normalizeLink(sub.link)" :target="sub.target" op80>
                        {{ sub.text }}
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </li>
        </ul>
      </template>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  position: fixed;
  top: var(--vp-layout-top-height, 0px);
  bottom: 0;
  left: 0;
  z-index: var(--vp-z-index-sidebar);
  width: 100vw;
  max-width: 480px;
  background-color: var(--vp-sidebar-bg-color);
  opacity: 0;
  box-shadow: var(--vp-c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.25s ease;
  overscroll-behavior: contain;

  nav {
    --pl: 40px;
  }

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition: opacity 0.25s,
      transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  @media (min-width: 960px) {
    margin-top: var(--vp-nav-height);
    width: var(--vp-sidebar-width);
    max-width: 100%;
    background-color: var(--vp-sidebar-bg-color);
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translateX(0);
  }

  @media (min-width: 1440px) {
    --pl: max(40px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
    width: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px);
  }

  .dark & {
    box-shadow: var(--vp-shadow-1);
  }

}

.accordion-content[data-state="open"] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

.accordion-content[data-state="closed"] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1) reverse;
}

@keyframes slideDown {
  from { height: 0 ;}
  to { height: var(--radix-collapsible-content-height); }
}
</style>
