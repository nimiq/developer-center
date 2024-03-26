<script setup lang="ts">
import { useSidebar } from '../composables/useSidebar'

const { theme, page } = useData()
const footer = theme.value.footerItems
const { hasSidebar } = useSidebar()

const hasOutline = computed(() => page.value.frontmatter.outline !== false)

const isHome = computed(() => page.value.frontmatter.layout === 'home' || page.value.title === '404')
const isMd = computed(() => hasSidebar.value && !hasOutline.value)
</script>

<template>
  <footer
    border-top class="raw" w-full :style="{
      'padding-left': hasSidebar ? 'calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width))' : '',
      'padding-right': hasSidebar ? 'calc((100vw - var(--vp-layout-max-width)) / 2 + 96px)' : '',
    }"
  >
    <div
      max-md:px-32
      py-48 mx-auto :class="{
        'md:px64': isHome,
        'md:pl96': hasSidebar,
        'max-w1280': isHome,
        'w-full': !isMd,
        'px64 w-[calc(74ch+64px)]': isMd,
      }"
    >
      <nav>
        <ul grid="~ col-1 md:cols-2 gap-16 justify-between" ml--4>
          <li v-for="(item, i) in footer" :key="item.icon" :class="{ 'md:justify-self-end': i % 2 !== 0 }">
            <a :href="item.link" target="_blank" noopener noreferrer flex="~ items-center" px-4 w-max un-text-14 class="arrow" text-blue>
              <div :class="item.icon" mr-8 text="20 neutral-600" />
              <span text-neutral-700>{{ item.text }}</span>
              <span font-semibold ml-4>{{ item.social }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
/* footer:not(.home-layout) {
  @media screen and (min-width: 960px) { padding-left: var(--vp-sidebar-width); }
  @media screen and (min-width: 1280px) { padding-left: 0; margin: 0 auto; width: 807px;}
  @media screen and (min-width: 1441px) { border:0}
} */
</style>
