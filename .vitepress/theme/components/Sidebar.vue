<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core'
import type { DefaultTheme } from 'vitepress'
import { inBrowser } from 'vitepress'
import { ref, watch } from 'vue'
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

const buttons = ref<HTMLButtonElement[]>([])

function onSectionTitleClicked(i: number) {
  buttons.value[i].scrollIntoView({ block: 'start', behavior: 'smooth' })
}
</script>

<template>
  <aside v-if="hasSidebar" border-base-neutral-r class="VPSidebar scroll-sm raw" bg-neutral-0 mb-2 :class="{ open }">
    <div mt-12>
      <Environment />
    </div>
    <nav aria-labelledby="sidebar-aria-label" tabindex="-1" py-40 h-full relative>
      <span id="sidebar-aria-label" sr-only>Sidebar Navigation</span>

      <template v-for="(group, i) in sidebarGroups" :key="group.text">
        <div
          w-full border-base-neutral-t sticky top-0 bottom--1 z-100 bg-neutral-0 cursor-pointer
          @click="onSectionTitleClicked(i)"
        >
          <div pt-24 pb-16>
            <button ref="buttons" :data-index="i" mx--8 px-8 focus-visible="outline-blue bg-blue/6">
              <p v-if="group.prefix" text-16 op50 font-semibold relative text-left>
                {{ group.prefix }}
              </p>
              <div text="24 darkblue dark:white" flex="~ items-center gap-8">
                <div v-if="group.icon" :class="group.icon" />
                <h3 text-24 font-bold>
                  {{ group.text }}
                </h3>
              </div>
            </button>
            <div
              absolute inset-x-0 bottom--16 bg-gradient-to-b h-16 pointer-events-none
              from="lightgray dark:darkblue-1000" to-transparent
            />
          </div>
        </div>

        <ul pb-20>
          <li v-for="item in group.items" :key="item.text">
            <SidebarItem :item="item" :depth="0" :class="item.items ? 'my32' : ''" />
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
  width: calc(100vw - 64px);
  max-width: 480px;
  opacity: 0;
  box-shadow: var(--vp-c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.25s ease;
  overscroll-behavior: contain;
  padding-left: 40px;

  @media (min-width: 960px) {
    margin-top: var(--vp-nav-height);
    width: var(--vp-sidebar-width);
    max-width: 100%;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translateX(0);
  }

  @media (min-width: 1440px) {
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
    width: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px);
  }

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition: opacity 0.25s,
      transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
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
  from {
    height: 0;
  }

  to {
    height: var(--radix-collapsible-content-height);
  }
}
</style>
