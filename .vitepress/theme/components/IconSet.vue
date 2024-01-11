<script setup lang="ts">
import { Icon, addCollection, listIcons } from '@iconify/vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useClipboard, useElementSize, useLocalStorage, useScriptTag, useTimeAgo } from '@vueuse/core'
import { Popover, Slider, Toast } from 'radix-vue/namespaced'
import { getIconSnippet } from '../composables/icons/icon'
import { downloadBlob, downloadIconFont, downloadSVGSprite, downloadZip } from '../composables/icons/pack'

enum Variant {
  Regular = 'regular',
  Large = 'icons-lg',
  Logos = 'logos',
  Flags = 'flags',
}

const variants = ref<Record<Variant, string[]>>({
  [Variant.Regular]: [],
  [Variant.Large]: [],
  [Variant.Logos]: [],
  [Variant.Flags]: [],
})
const icons = ref<string[]>([])

const lastUpdated = ref<Date>(new Date(Date.now()))
const timeBuild = ref('')
const variantsTitles = ref(Object.fromEntries(Object.entries(Variant).map(([key, value]) => [value, { label: key }])) as Record<Variant, { label: string }>)
const activeVariant = ref<string>(Variant.Regular)

onMounted(async () => {
  const json = await fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json())
  addCollection(json)

  icons.value = listIcons()
  variants.value[Variant.Regular] = listIcons().filter(icon => !icon.startsWith(`nimiq:${Variant.Large}-`) && !icon.startsWith(`nimiq:${Variant.Logos}-`) && !icon.startsWith(`nimiq:${Variant.Flags}-`))
  variants.value[Variant.Large] = listIcons().filter(icon => icon.startsWith(`nimiq:${Variant.Large}-`))
  variants.value[Variant.Logos] = listIcons().filter(icon => icon.startsWith(`nimiq:${Variant.Logos}-`))
  variants.value[Variant.Flags] = listIcons().filter(icon => icon.startsWith(`nimiq:${Variant.Flags}-`))

  lastUpdated.value = new Date(json.lastModified * 1000)
  timeBuild.value = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short', timeStyle: 'short' }).format(lastUpdated.value)
})

const timeAgo = useTimeAgo(lastUpdated)

const selectedIcon = ref<string>()

const { copy: copyToClipboard, copied } = useClipboard({ copiedDuring: 3000 })

const modal = ref<HTMLElement>()
const { height } = useElementSize(modal)

async function copySnippet(type: string) {
  const str = await getIconSnippet(selectedIcon.value!, type)
  if (!str)
    return
  copyToClipboard(str)
}

async function download(type: string) {
  const str = await getIconSnippet(selectedIcon.value!, type)
  if (!str)
    return
  const ext = (type === 'solid' || type === 'qwik') ? 'tsx' : type
  const name = `${selectedIcon.value}.${ext}`
  const blob = new Blob([name], { type: 'text/plain;charset=utf-8' })
  downloadBlob(blob, name)
}

const copySections = {
  Snippets: ['SVG', 'SVG Symbol', 'Iconify', 'JSX'],
  Links: ['URL', 'Data URL'],
  Components: ['Vue', 'Vue TS', 'React', 'React TS', 'Svelte', 'Qwik', 'Solid', 'Astro', 'Unplugin Icons'],
  Download: ['Vue', 'Vue TS', 'React', 'React TS', 'Svelte', 'Qwik', 'Solid', 'Astro', 'Unplugin Icons'],
}

watch(selectedIcon, () => document.querySelector('footer.VPDocFooter')?.classList.toggle('hidden', !!selectedIcon.value))

const iconSize = useLocalStorage('iconSize', [18])
const sizes = computed(() => ({
  [Variant.Regular]: iconSize.value[0],
  [Variant.Large]: iconSize.value[0] * 4,
  [Variant.Logos]: iconSize.value[0] * 1.5,
  [Variant.Flags]: iconSize.value[0] * 1.5,
}))

useScriptTag('https://cdn.jsdelivr.net/npm/svg-packer')
</script>

<template>
  <div :style="`padding-bottom: ${selectedIcon ? height + 48 + 1 : 0}px`" @keydown.esc.prevent="selectedIcon = undefined">
    <div mb-16 flex="~ gap-16 wrap vp-raw">
      <PillSelector v-model="activeVariant" :options="variantsTitles" />

      <div flex-1 />

      <Popover.Root>
        <Popover.Trigger aria-label="Icons options" flex="~ items-center gap-4" border-base rounded-full px-12 py-3>
          Options
          <div i-nimiq:chevron-down text-10 opacity-70 />
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            align="end" :align-offset="-4" :side-offset="6" bg="white dark:darkblue" shadow-sm
            border-base rounded-6 px-16 py-20 w="240"
          >
            <h4 label text-12 opacity-75>
              Download
            </h4>
            <ul mt-10 text-12 flex="~ wrap gap-x-12">
              <li>
                <button underline opacity-70 @click="downloadZip(icons, 'nimiq-icons')">
                  ZIP
                </button>
              </li>
              <li>
                <button underline opacity-70 @click="downloadIconFont(icons)">
                  Icon fonts
                </button>
              </li>
              <li>
                <button underline opacity-70 @click="downloadSVGSprite(icons)">
                  SVG Sprite
                </button>
              </li>
            </ul>

            <h4 label text-12 mt-16 opacity-75>
              Size
            </h4>
            <Slider.Root
              v-model="iconSize" relative flex="~ items-center" select-none touch-none h-6 mt-12 w-full
              :max="48" :min="8" :step="1"
            >
              <Slider.Track bg="darkblue-20 dark:white/20" relative grow rounded-full h-4>
                <Slider.Range absolute bg="darkblue dark:white/80" rounded-full h-full />
              </Slider.Track>
              <Slider.Thumb
                block w-12 h-12 bg="darkblue dark:white/80" rounded-8
                class="after:w-20 after:h-20 after:absolute" aria-label="Size"
              />
            </Slider.Root>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>

    <ul v-for="variant in Object.keys(variants)" :key="variant" pl-0 flex flex-wrap select-none text-2xl class="vp-raw -ml-8">
      <li v-for="icon in variants[variant]" v-show="variant === activeVariant" :key="icon" flex>
        <button w-max :style="`font-size: ${sizes[activeVariant]}px; padding: ${sizes[activeVariant] / 4}px`" @click="selectedIcon = icon">
          <Icon :icon="icon" text="darkblue dark:white/80" />
        </button>
      </li>
    </ul>

    <div
      ref="modal" fixed :class="{ '-bottom-full': !selectedIcon, 'bottom-0': !!selectedIcon }" transition-bottom
      ease-in-out duration-300 right-0 bg="white dark:darkblue-1000" mt-32 border="base x-none b-none" px-32 z-10 py-24
      class="w-full md2:w-[calc(100vw-max(calc(var(--vp-sidebar-width)),calc((100%-(var(--vp-layout-max-width)-64px))/2+var(--vp-sidebar-width)-32px)))]"
    >
      <div relative class="vp-raw">
        <div flex="~ gap-32">
          <Icon :icon="selectedIcon || ''" text="96 darkblue dark:white" />
          <div>
            <h3 text="22 darkblue-80 dark:white/90" leading-none mt-6>
              i-{{ selectedIcon }}
            </h3>

            <a href="./" class="text-12 text-darkblue-40 underline">How can I use it?</a>
          </div>
          <div ml-auto>
            <button p-6 @click="selectedIcon = undefined">
              <div i-nimiq:cross text="12 darkblue-40 dark:white/60" />
            </button>
          </div>
        </div>

        <div mt-24 flex flex-wrap gap-y-16 gap-x-24>
          <div v-for="[title, options] in Object.entries(copySections)" :key="title">
            <h4 my-1 text="11 darkblue-50" label mb-6>
              {{ title }}
            </h4>
            <div flex gap-6 flex-wrap>
              <Toast.Provider>
                <button
                  v-for="option in options" :key="option" mr-1 mb-1 opacity-75 px-8 py-6 border-base
                  rounded-full bg="hover:darkblue-6 dark:hover:white/6" text-12 leading-none transition-colors
                  flex @click="title === 'Download' ? download(option) : copySnippet(option)"
                >
                  {{ option.replace(' TS', '') }}
                  <sup v-if="option.endsWith('TS')" opacity-70 class="-mr-1 -mt-1">TS</sup>
                </button>

                <Toast.Root v-model:open="copied" rounded-full px-16 py-8 bg-green shadow-sm>
                  <Toast.Title flex gap-x-10 items-center text-white>
                    <div i-nimiq:check />
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
        href="https://iconify.design/" target="_blank"
      >Iconify</a>.
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
