<script setup lang="ts">
import { DrawerClose, DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTitle, DrawerTrigger } from 'vaul-vue'
import type { NavigationType } from './navigation-types'

defineProps<{ navigation: NavigationType }>()

const open = ref(false)
const { route } = useRouter()

watch(route, () => open.value = false)
</script>

<template>
  <DrawerRoot v-model:open="open">
    <DrawerTrigger v-bind="$attrs" aria-label="Open navigation">
      <div i-nimiq:hamburger-menu rotate-y-180 />
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerOverlay fixed inset-0 bg="darkblue/20" z-101 />
      <DrawerContent
        z-101
        flex="~ col" mt-24 h-full max-h="96%" fixed bottom-0 left-0 right-0
      >
        <div p-24 bg-neutral-100 rounded-t-24 flex-1 relative flex="~ col">
          <DrawerClose absolute top-16 right-16 z-1 grid>
            <div close-btn text-32 pt-8 />
          </DrawerClose>
          <DrawerTitle sr-only>
            Nimiq Developer Center
          </DrawerTitle>

          <nav mt-24>
            <ul flex="~ wrap gap-40">
              <li v-for="({ key, main, items }) in navigation.items" :key>
                <ul>
                  <li>
                    <a :href="withBase(main.href)" px-16 py-12 un-text="17 neutral-900" lh="22" arrow>
                      {{ key }}
                    </a>
                  </li>
                  <li v-for="({ href, title }) in items" :key="title" mt-12>
                    <a :href="withBase(href)" block px-16 py-6 un-text="14 neutral-800 hocus:neutral-900" rounded-6 lh-14>
                      {{ title }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div flex="~ gap-16 items-center" mt-40 mx-16>
            <span label text-14>Appearance</span>
            <ThemeSwitcher />
          </div>

          <Community mt-auto :community="navigation.community" />
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
