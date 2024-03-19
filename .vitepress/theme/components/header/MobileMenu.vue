<script setup lang="ts">
import { DrawerClose, DrawerContent, DrawerOverlay, DrawerPortal, DrawerRoot, DrawerTitle, DrawerTrigger } from 'vaul-vue'
import type { NavigationType } from './navigation-types'

defineProps<{ navigation: NavigationType }>()
</script>

<template>
  <DrawerRoot>
    <DrawerTrigger v-bind="$attrs">
      <div i-nimiq:hamburger-menu rotate-y-180 />
    </DrawerTrigger>
    <DrawerPortal>
      <DrawerOverlay fixed inset-0 bg-neutral-0 op-6 z-101 />
      <DrawerContent
        z-101
        flex="~ col" mt-24 h-full max-h="96%" fixed bottom-0 left-0 right-0
      >
        <div p-24 bg-neutral-100 rounded-t-24 flex-1 relative flex="~ col">
          <DrawerClose absolute top-16 right-16 z-1>
            <div close-btn text-32 />
          </DrawerClose>
          <DrawerTitle sr-only>
            Nimiq Developer Center
          </DrawerTitle>

          <nav>
            <ul>
              <li v-for="({ key, main, items }) in navigation.items" :key mt-40 first:mt-0>
                <ul>
                  <li>
                    <a
                      :href="main.href" focusable block px-16 py-12 rounded-6 border-subtle un-text="17 white/90" lh="22" class="arrow"
                    >
                      {{ key }}
                    </a>
                  </li>
                  <!-- <li v-for="({ description, href, title }) in items" :key="title" mt-12>
                    <a :href="href" focusable block px-16 py-12 un-text="19 neutral-800 hocus:900" rounded-6 border-subtle bg-neutral-200>
                      <h3 text="19 neutral-800" lh="22" arrow>
                        {{ title }}
                      </h3>
                      <p text="15 neutral-800/80" mt-4>
                        {{ description }}
                      </p>
                    </a>
                  </li> -->
                  <li v-for="({ href, title }) in items" :key="title" mt-12>
                    <a :href="href" focusable block px-16 py-6 un-text="14 neutral-800 hocus:900" rounded-6 border-subtle lh-14 class="arrow">
                      {{ title }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <Community mt-auto :community="navigation.community" />
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>
