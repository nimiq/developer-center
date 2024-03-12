<script setup lang="ts">
import { Icon, addCollection, listIcons } from '@iconify/vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useClipboard, useElementSize, useLocalStorage, useScriptTag, useTimeAgo } from '@vueuse/core'
import { Dialog, Popover, Slider, Toast } from 'radix-vue/namespaced'
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

const helpOpen = ref(false)

const lastUpdated = ref<Date>(new Date(Date.now()))
const timeBuild = ref('')
const variantsTitles = ref(Object.fromEntries(Object.entries(Variant).map(([key, value]) => [value, { label: key }])) as Record<Variant, { label: string }>)

const initialIcon = new URLSearchParams(globalThis.location?.search).get('icon') || ''
const initialVariant = initialIcon.startsWith('nimiq:logos')
  ? Variant.Logos
  : initialIcon.startsWith('nimiq:flags')
    ? Variant.Flags
    : initialIcon.startsWith('nimiq:icons-lg') ? Variant.Large : Variant.Regular
const activeVariant = ref<string>(initialVariant)

onMounted(async () => {
  const json = await fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json())
  addCollection(json)
  // addCollection({ ...json, icons: Object.entries(json.icons).filter(([key]) => key.startsWith('logos-nimiq-full-white-vertical')).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) })

  icons.value = listIcons()
  variants.value[Variant.Regular] = listIcons().filter(icon => icon.startsWith('nimiq') && !icon.startsWith(`nimiq:${Variant.Large}-`) && !icon.startsWith(`nimiq:${Variant.Logos}-`) && !icon.startsWith(`nimiq:${Variant.Flags}-`))
  variants.value[Variant.Large] = listIcons().filter(icon => icon.startsWith(`nimiq:${Variant.Large}-`))
  variants.value[Variant.Logos] = listIcons().filter(icon => icon.startsWith(`nimiq:${Variant.Logos}-`))
  variants.value[Variant.Flags] = listIcons().filter(icon => icon.startsWith(`nimiq:${Variant.Flags}-`))

  lastUpdated.value = new Date(json.lastModified * 1000)
  timeBuild.value = new Intl.DateTimeFormat('en', { dateStyle: 'short', timeStyle: 'short' }).format(lastUpdated.value)
})

const logosMono = computed(() => variants.value[Variant.Logos].filter(icon => icon.endsWith('-mono')))
const logosColor = computed(() => variants.value[Variant.Logos].filter(icon => !icon.endsWith('-mono')))

const timeAgo = useTimeAgo(lastUpdated)

const selectedIcon = ref<string>(initialIcon)
watchEffect(() => {
  const params = new URLSearchParams(globalThis.location?.search)
  if (selectedIcon.value)
    params.set('icon', selectedIcon.value)
  else
    params.delete('icon')
  globalThis.history?.replaceState({}, '', `${globalThis.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`)
})

const { copy: copyToClipboard, copied } = useClipboard({ copiedDuring: 3000 })

const modal = ref<HTMLElement>()
const { height } = useElementSize(modal)

async function copySnippet(type: string) {
  const str = await getIconSnippet(selectedIcon.value!, type)
  if (!str)
    return

  if (type === 'Figma') {
    const a = globalThis.document?.createElement('a')
    if (!a)
      return
    a.href = str
    a.target = '_blank'
    a.click()
    return
  }

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
  Links: ['Data URL', 'Figma'],
  Components: ['Vue', 'Vue TS', 'React', 'React TS', 'Svelte', 'Qwik', 'Solid', 'Astro', 'Unplugin Icons'],
  Download: ['Vue', 'Vue TS', 'React', 'React TS', 'Svelte', 'Qwik', 'Solid', 'Astro', 'Unplugin Icons'],
}

watch(selectedIcon, () => globalThis.document?.querySelector('footer.VPDocFooter')?.classList.toggle('hidden', !!selectedIcon.value))

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
  <div>
    <div :style="`padding-bottom: ${selectedIcon ? height + 48 + 1 : 0}px`" @keydown.esc.prevent="selectedIcon = undefined">
      <div my-16 flex="~ gap-16 wrap">
        <PillSelector v-model="activeVariant" :options="variantsTitles" />

        <div flex-1 />

        <Popover.Root>
          <Popover.Trigger
            aria-label="Icons options" flex="~ items-center
          gap-4" border-base rounded-full px-12 py-3 text-10
          >
            Options
            <Icon icon="i-nimiq:chevron-down" text-neutral />
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              align="end" :align-offset="-4" :side-offset="6" bg-neutral-100 shadow-sm
              border-base rounded-6 px-16 py-20 w="240"
            >
              <h4 label text="11 neutral-900">
                Download
              </h4>
              <ul mt-10 text-12 flex="~ wrap gap-x-12">
                <li>
                  <button underline @click="downloadZip(icons, 'nimiq-icons')">
                    ZIP
                  </button>
                </li>
                <li>
                  <button underline @click="downloadIconFont(icons)">
                    Icon fonts
                  </button>
                </li>
                <li>
                  <button underline @click="downloadSVGSprite(icons)">
                    SVG Sprite
                  </button>
                </li>
              </ul>

              <h4 label mt-16 text="11 neutral-900">
                Size
              </h4>
              <Slider.Root
                v-model="iconSize" relative flex="~ items-center" select-none touch-none h-6 mt-12 w-full
                :max="48" :min="8" :step="1"
              >
                <Slider.Track bg-neutral-500 relative grow rounded-full h-4>
                  <Slider.Range absolute bg-neutral-600 rounded-full h-full />
                </Slider.Track>
                <Slider.Thumb
                  block w-12 h-12 bg-neutral-900 rounded-8
                  class="after:w20 after:h20 after:absolute" aria-label="Size"
                />
              </Slider.Root>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>

      <ul v-for="variant in Object.keys(variants)" :key="variant" pl-0 flex flex-wrap select-none text-2xl class="-ml-8">
        <li v-for="icon in variant !== Variant.Logos ? variants[variant] : logosColor" v-show="variant === activeVariant" :key="icon" flex>
          <button w-max :style="`font-size: ${sizes[activeVariant]}px; padding: ${sizes[activeVariant] / 4}px`" @click="selectedIcon = icon">
            <Icon :icon="icon" text-neutral />
          </button>
        </li>
      </ul>

      <details v-if="Variant.Logos === activeVariant" my-40>
        <summary label text-neutral-800 mt-32>
          Monochromatic
        </summary>
        <ul pl-0 flex flex-wrap select-none mt-12 text-2xl class="-ml-8">
          <li v-for="icon in logosMono" v-show="activeVariant === activeVariant" :key="icon" flex>
            <button w-max :style="`font-size: ${sizes[activeVariant]}px; padding: ${sizes[activeVariant] / 4}px`" @click="selectedIcon = icon">
              <Icon :icon="icon" text-neutral-700 />
            </button>
          </li>
        </ul>
      </details>

      <div
        ref="modal" fixed :class="{ '-bottom-full': !selectedIcon, 'bottom-0': !!selectedIcon }" transition-bottom
        ease-in-out duration-300 right-0 bg-neutral-50 mt-32 border="base x-none b-none" px-32 z-10 py-24
        class="w-full md2:w-[calc(100vw-max(calc(var(--vp-sidebar-width)),calc((100%-(var(--vp-layout-max-width)-64px))/2+var(--vp-sidebar-width)-32px)))]"
      >
        <div relative>
          <div flex="~ gap-32">
            <Icon :icon="selectedIcon || ''" text-96 />
            <div>
              <div flex="~ items-center gap-4" text="22 neutral-800">
                <h3 leading-none mt-6>
                  i-{{ selectedIcon }}
                </h3>

                <button p-8 rounded-6 hover="bg-darkblue-6 dark:bg-white/20" @click="copyToClipboard(`i-${selectedIcon}`)">
                  <div i-nimiq:copy text-16 />
                </button>
              </div>

              <button class="text-12 text-darkblue-40 underline" @click="() => helpOpen = true">
                How can I use it?
              </button>
            </div>
            <button ml-auto p-6 self-start @click="selectedIcon = undefined">
              <div i-nimiq:cross text="12 darkblue-40 dark:white/60" />
            </button>
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
      <p text="12 neutral-900" mt-24>
        The icon set has been updated {{ timeAgo }} on {{ timeBuild }}
      </p>
      <p text="12 neutral-700">
        This page design's has been inspired by <a href="https://icones.js.org/" target="_blank">Icônes</a>. Powered by <a
          href="https://iconify.design/" target="_blank"
        >Iconify</a>.
      </p>
    </div>

    <Dialog.Root v-model:open="helpOpen">
      <Dialog.Portal>
        <Dialog.Overlay bg-neutral op10 fixed inset-0 z-1000 />
        <Dialog.Content
          fixed rounded-6 bg-neutral-0
          focus="outline-none" top="50%" left="50%" translate="x--50% y--50%"
          p="x-8 t-32 md:x-24 md:t-48" z-1000 max-h="85vh" max-w-90vw w-700 class="prose" flex="~
        col" shadow
          of-y-auto
        >
          <div>
            <Dialog.Title m-0>
              How can I use it?
            </Dialog.Title>
            <Dialog.Description m-0>
              Learn how to use the Nimiq Icons in your project.
            </Dialog.Description>
            <Dialog.Close
              fixed right="24 md:32" top="24 md:32" bg="neutral-200 hover:neutral-300" p-10 rounded-full transition-colors
            >
              <div i-nimiq:cross text-neutral />
            </Dialog.Close>
            <div pr-40>
              <slot mt-16 name="learn-how-to-use-the-icons" />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
</template>

<style>
.VPDoc .container .content {
  padding-bottom: 0 !important;
}
</style>
