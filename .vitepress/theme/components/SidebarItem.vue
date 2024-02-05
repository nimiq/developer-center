<script setup lang="ts">
import type { DefaultTheme } from 'vitepress'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import { useSidebarControl } from '../composables/useSidebar'

type SidebarItem = DefaultTheme.SidebarItem & { icon: string, items: SidebarItem[], prefix: string }
const props = defineProps<{
  item: SidebarItem
  depth: number
}>()

const {
  collapsed,
  // collapsible,
  // isLink,
  isActiveLink,
  // hasActiveLink,
  hasChildren,
  // toggle,
} = useSidebarControl(computed(() => props.item))

const { site } = useData()
function normalizeLink(url: string): string {
  if (!url)
    return

  const { pathname, search, hash, protocol } = new URL(url, 'http://a.com')

  if (
    isExternal(url)
    || url.startsWith('#')
    || !protocol.startsWith('http')
    || !treatAsHtml(pathname)
  )
    return url

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
</script>

<template>
  <div>
    <a v-if="!hasChildren" :rel="item.rel" :href="normalizeLink(item.link)" :target="item.target" op80 flex="~ items-center gap-8" :class="{ 'font-bold text-blue': isActiveLink }" transition-all>
      <div w-2 h-19 rounded-2 :bg="isActiveLink ? 'blue' : 'transparent'" transition-colors />
      {{ item.text }}
    </a>

    <AccordionRoot v-else type="multiple" :default-value="collapsed ? [] : [item.text]">
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
              <SidebarItem :item="sub" :depth="depth + 1" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </div>
</template>
