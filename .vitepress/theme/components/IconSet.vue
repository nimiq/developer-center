<script setup lang="ts">
import { Icon, listIcons, addCollection } from '@iconify/vue';
import { onMounted, ref, watch } from 'vue';
import { getIconSnippet } from '../composables/icon';
import { useClipboard, useElementSize, useTimeAgo } from '@vueuse/core';
import { Slider, Popover, Toast } from 'radix-vue/namespaced'

const icons = ref<string[]>([]);

const lastUpdated = ref<Date>(new Date(Date.now()));
const timeBuild = ref('')

onMounted(async () => {
  const json = await fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json());
  addCollection(json);
  icons.value = listIcons();
  lastUpdated.value = new Date(json.lastModified * 1000);
  timeBuild.value = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short', timeStyle: 'short' }).format(lastUpdated.value)
})

const timeAgo = useTimeAgo(lastUpdated)

const selectedIcon = ref<string>();

const { copy: copyToClipboard, copied } = useClipboard({ copiedDuring: 3000 })

const modal = ref<HTMLElement>();
const { height } = useElementSize(modal)

async function copySnippet(type: string) {
  const str = await getIconSnippet(selectedIcon.value!, type);
  if (!str) return
  copyToClipboard(str)
}

async function download(type: string) {
  console.log('download', type)
  const str = await getIconSnippet(selectedIcon.value!, type);
  if (!str) return
  const ext = (type === 'solid' || type === 'qwik') ? 'tsx' : type
  const name = `${selectedIcon.value}.${ext}`
  const blob = new Blob([name], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  a.remove()
}

const copySections = {
  'Snippets': ['SVG', 'SVG Symbol', 'Iconify', 'JSX'],
  'Links': ['URL', 'Data URL'],
  'Components': ['Vue', 'Vue TS', 'React', 'React TS', 'Svelte', 'Qwik', 'Solid', 'Astro', 'Unplugin Icons'],
  'Download': ['Vue', 'Vue TS', 'React', 'React TS', 'Svelte', 'Qwik', 'Solid', 'Astro', 'Unplugin Icons'],
}

watch(selectedIcon, () => document.querySelector('footer.VPDocFooter')?.classList.toggle('hidden', !!selectedIcon.value))

const iconSize = ref([18])
</script>

<template>
  <div :style="`padding-bottom: ${selectedIcon ? height + 48 + 1 : 0}px`">

    <div mb-16 flex>
      <input type="text" rounded-full border-base placeholder="Search an icon..." px-12 py-6 leading-none>
      <div ml-auto>

        <Popover.Root>
          <Popover.Trigger aria-label="Icons options" flex="~ items-center gap-4" border-base rounded-full px-12 py-3>
            Options
            <div i-nimiq:chevron-down text-10 opacity-70></div>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content align="end" :alignOffset="-4" :sideOffset="6" bg="white dark:darkblue" shadow-sm 
              border-base rounded-6 px-16 py-20 w="240">

              <h4 label text-12 opacity-75>Download</h4>
              <ul mt-10 text-12 flex="~ wrap gap-x-12">
                <li><button underline opacity-70>ZIP</button></li>
                <li><button underline opacity-70>Icon fonts</button></li>
                <li><button underline opacity-70>SVG Sprite</button></li>
              </ul>

              <h4 label text-12 mt-16 opacity-75>Size</h4>
              <Slider.Root v-model="iconSize" relative flex="~ items-center" select-none touch-none w-sm h-6 mt-12 w-full
                :max="48" :min="8" :step="1">
                <Slider.Track bg="darkblue-20 dark:white/20" relative grow rounded-full h-4>
                  <Slider.Range absolute bg="darkblue dark:white/80" rounded-full h-full />
                </Slider.Track>
                <Slider.Thumb block w-12 h-12 bg="darkblue dark:white/80" rounded-8
                  class="after:w-20 after:h-20 after:absolute" aria-label="Size" />
              </Slider.Root>


            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

      </div>
    </div>

    <ul pl-0 flex flex-wrap select-none text-2xl class="vp-raw -ml-8">
      <li flex m-8 v-for="icon in icons" :key="icon" w-max>
        <button @click="selectedIcon = icon" :style="`font-size: ${iconSize[0]}px`">
          <Icon :icon="icon" text="darkblue dark:white/80" />
        </button>
      </li>
    </ul>

    <div ref="modal" fixed :class="{ '-bottom-full': !selectedIcon, 'bottom-0': !!selectedIcon }" transition-bottom
      ease-in-out duration-300 right-0 bg="white dark:darkblue-1000" mt-32 border="base x-none b-none" px-32 z-10 py-24
      class="w-full md2:w-[calc(100vw-max(calc(var(--vp-sidebar-width)),calc((100%-(var(--vp-layout-max-width)-64px))/2+var(--vp-sidebar-width)-32px)))]">
      <div relative class="vp-raw">
        <div flex="~ gap-32">
          <Icon :icon="selectedIcon || ''" text="96 darkblue dark:white" />
          <div>
            <h3 text="22 darkblue-80 dark:white/90" leading-none mt-6>i-{{ selectedIcon }}</h3>

            <a href="./" class="text-12 text-darkblue-40 underline">How can I use it?</a>
          </div>
          <div ml-auto>
            <button @click="selectedIcon = undefined" p-6>
              <div i-nimiq:cross text="12 darkblue-40 dark:white/60" />
            </button>
          </div>
        </div>

        <div mt-24 flex flex-wrap gap-y-16 gap-x-24>
          <div v-for="[title, options] in Object.entries(copySections)" :key="title">
            <h4 my-1 text="11 darkblue-50" label mb-6>{{ title }}</h4>
            <div flex gap-6 flex-wrap>
              <Toast.Provider>
                <button v-for="option in options" :key="option" mr-1 mb-1 opacity-75 px-8 py-6 border-base
                  rounded-8 bg="hover:darkblue-6 dark:hover:white/6" text-12 leading-none transition-colors
                  @click="title === 'Download' ? download(option) : copySnippet(option)" flex>
                  {{ option.replace(' TS', '') }}
                  <sup v-if="option.endsWith('TS')" opacity-70 class="-mr-1 -mt-1">TS</sup>
                </button>

                <Toast.Root v-model:open="copied" rounded-full px-16 py-8 bg-green shadow-sm>
                  <Toast.Title flex gap-x-10 items-center text-white>
                    <div i-nimiq:check></div>
                    Copied to clipboard
                  </Toast.Title>
                </Toast.Root>
                <Toast.Viewport fixed bottom-32 right-32 flex flex-col list-none="!" />
              </Toast.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p text-12 opacity-70>
      This page design's has been inspired by <a href="https://icones.js.org/" target="_blank">Icônes</a>. Powered by <a
        href="https://iconify.design/" target="_blank">Iconify</a>.
      <br>
      <span opacity-60>
        Last update: {{ timeBuild }} ({{ timeAgo }})
      </span>
    </p>

  </div>
</template>

<style>
.VPDoc .container .content {
  padding-bottom: 0 !important;
}
</style>
