<script setup lang="ts">
import type { Colors, Section, Sections } from 'identicons-esm'
import { useLocalStorage } from '@vueuse/core'
import { ensambleSvg, formatIdenticon, getIdenticonsFeatures, getIdenticonsParams, colors as identiconColors } from 'identicons-esm'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'
import { computed, onMounted, ref } from 'vue'
import { downloadBlob } from '../composables/icons/pack'
import PillSelector from './PillSelector.vue'

const initialParams = ref<{ sections: Sections, colors: Colors }>()

interface Svg { path: string, svg: string }

const features = await getIdenticonsFeatures()
const entries = Object.entries(features)
const bottom = ref<Svg[]>(entries.filter(([path]) => path.includes('bottom')).map(([path, svg]) => ({ path, svg })))
const top = ref<Svg[]>(entries.filter(([path]) => path.includes('top')).map(([path, svg]) => ({ path, svg })))
const face = ref<Svg[]>(entries.filter(([path]) => path.includes('face')).map(([path, svg]) => ({ path, svg })))
const sides = ref<Svg[]>(entries.filter(([path]) => path.includes('sides')).map(([path, svg]) => ({ path, svg })))

const options = Object.fromEntries(['bottom', 'top', 'face', 'sides', 'colors'].map(value => ([value, { label: value }])))
const activeSection = useLocalStorage<Section | 'colors'>('active-variant', 'bottom')
const activeFeatures = computed(() => {
  if (activeSection.value === 'bottom')
    return bottom.value
  if (activeSection.value === 'top')
    return top.value
  if (activeSection.value === 'face')
    return face.value
  if (activeSection.value === 'sides')
    return sides.value
  return []
})
const activeBottom = ref('')
const activeTop = ref('')
const activeFace = ref('')
const activeSides = ref('')
const activeMain = ref('')
const activeAccent = ref('')
const activeBackground = ref('')
const colors = computed(() => ({
  main: activeMain.value,
  accent: activeAccent.value,
  background: activeBackground.value,
}))
const sections = computed(() => ({
  bottom: activeBottom.value,
  top: activeTop.value,
  face: activeFace.value,
  sides: activeSides.value,
}))
onMounted(async () => {
  initialParams.value = await getIdenticonsParams('nimiq')
  reset()
})

function reset() {
  activeBottom.value = initialParams.value?.sections.bottom
  activeTop.value = initialParams.value?.sections.top
  activeFace.value = initialParams.value?.sections.face
  activeSides.value = initialParams.value?.sections.sides
  activeMain.value = initialParams.value?.colors.main
  activeAccent.value = initialParams.value?.colors.accent
  activeBackground.value = initialParams.value?.colors.background
}

const identicon = computed(() => ensambleSvg({ colors: colors.value, sections: sections.value }))

function getSvg(svgContent: string) {
  const { accent, main } = initialParams.value?.colors || { accent: '#000', main: '#fff' }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><g fill="${accent}" clip-path="url(#a)" color="${main}">${svgContent}</g></svg>`
}

function isSelected(svg: string) {
  switch (activeSection.value) {
    case 'bottom':
      return activeBottom.value === svg
    case 'top':
      return activeTop.value === svg
    case 'face':
      return activeFace.value === svg
    case 'sides':
      return activeSides.value === svg
  }
}

function select(svg: string) {
  switch (activeSection.value) {
    case 'bottom':
      activeBottom.value = svg
      break
    case 'top':
      activeTop.value = svg
      break
    case 'face':
      activeFace.value = svg
      break
    case 'sides':
      activeSides.value = svg
      break
  }
}

async function downloadSvg() {
  const svg = await formatIdenticon(identicon.value, { format: 'svg', size: 160 })
  downloadBlob(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }), 'identicon.svg')
}

async function downloadPng() {
  // eslint-disable-next-line no-alert
  const size = prompt('Please enter the size of the PNG image:', '160')
  const png = await formatIdenticon(identicon.value, { format: 'image/png', size: Number(size) })
  downloadBlob(new Blob([png], { type: 'image/png' }), 'identicon.png')
}
</script>

<template>
  <div class="nq-no-prose">
    <div nq-mb-32 flex="~ items-end justify-center gap-16" relative>
      <div nq-mb-32 size-80 v-html="identicon" />
      <div nq-mb-32 size-128 v-html="identicon" />
      <div nq-mb-32 size-196 v-html="identicon" />
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger bottom-40 op-80 aria-label="Let's play a game">
            <div i-nimiq:info text-16 />
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent z-100 side="bottom" :side-offset="5" :collision-padding="8" align="start" bg="gradient-neutral dark:neutral-100" border-subtle-light text-white p-20 pb-12 rounded-8 max-w-360 text-14 border="base white/20" nq-prose-compact>
              <h3>
                Let's play a game!
              </h3>

              <p mt-12>
                Using the text input on top of this page, you need to find the secret word that creates the identicon.
              </p>

              <button nq-pill nq-pill-blue px-12 py-2 font-semibold mb-8 nq-mt-24 @click="reset">
                See identicon
              </button>
              <TooltipArrow as-child>
                <div i-nimiq:tooltip-triangle text-darkblue rotate-180 h-7 />
              </TooltipArrow>
            </TooltipContent>
          </TooltipPortal>
        </TooltipRoot>
      </TooltipProvider>
      <div flex="~ col items-end" absolute top-0 right-0>
        <span nq-label text-10>Download</span>
        <button nq-ghost-btn mt-8 text-12 px-4 py-2 font-semibold op-80 @click="downloadSvg">
          SVG
        </button>
        <button nq-ghost-btn mt-8 text-12 px-4 py-2 font-semibold op-80 @click="downloadPng">
          PNG
        </button>
      </div>
    </div>
    <form @submit.prevent="">
      <PillSelector v-model="activeSection" :options mx-auto />
      <ul flex="~ gap-x-32 gap-y-64 items-center wrap" list-none nq-mt-12>
        <li
          v-for="({ path, svg }) in activeFeatures" :key="path" :class="{ 'bg-neutral-300': isSelected(svg) }"
          rounded-8
        >
          <button group bg-transparent @click="select(svg)">
            <div size-60 v-html="getSvg(svg)" />
          </button>
        </li>
      </ul>
      <div v-if="activeSection === 'colors'" w-full nq-mt-32>
        <label flex="~ items-center gap-8">
          <span mr-auto text-10 nq-label>Main color</span>
          <div v-for="color in identiconColors" :key="color">
            <div
              :style="`--c: ${color}; background: ${color}`" size-20 cursor-pointer rounded-full
              :class="{ 'ring-2.5 ring-offset-2 ring-$c': color === activeMain }" @click="activeMain = color"
            />
          </div>
        </label>

        <label flex="~ items-center gap-8" nq-mt-32>
          <span mr-auto text-10 nq-label>Background color</span>
          <div v-for="color in identiconColors" :key="color">
            <div
              :style="`--c: ${color}; background: ${color}`" size-20 cursor-pointer rounded-full
              :class="{ 'ring-2.5 ring-offset-2 ring-$c': color === activeBackground }"
              @click="activeBackground = color"
            />
          </div>
        </label>

        <label flex="~ items-center gap-8" nq-mt-32>
          <span mr-auto text-10 nq-label>Accent color</span>
          <div v-for="color in identiconColors" :key="color">
            <div
              :style="`--c: ${color}; background: ${color}`" size-20 cursor-pointer rounded-full
              :class="{ 'ring-2.5 ring-offset-2 ring-$c': color === activeAccent }" @click="activeAccent = color"
            />
          </div>
        </label>
      </div>
    </form>
  </div>
</template>
