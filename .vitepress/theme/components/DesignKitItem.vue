<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  label: string
  svg: string
  png?: string
  dark?: boolean
}>()

const svgUrl = computed(() => withBase(props.svg))
const pngUrl = computed(() => props.png ? withBase(props.png) : undefined)

function download(type: 'svg' | 'png') {
  const url = type === 'svg' ? svgUrl.value : pngUrl.value
  if (!url)
    return
  const a = document.createElement('a')
  a.href = url
  a.download = `nimiq-${props.name}.${type}`
  a.click()
}
</script>

<template>
  <div flex="~ col gap-12" class="nq-raw raw">
    <div
      grid="~ place-content-center" p-24 rounded-6 w-full aspect-video
      :class="dark ? 'bg-darkblue' : 'bg-neutral-100 border-1 border-neutral-300'"
    >
      <img :src="svgUrl" :alt="label" h-48 w-auto object-contain>
    </div>
    <div flex="~ items-center justify-between gap-8">
      <span text-14 text-neutral-800 font-semibold>{{ label }}</span>
      <div flex="~ gap-8">
        <button text="f-2xs neutral-800" outline="neutral-400 1.5 ~" px-8 py-2 nq-pill-tertiary @click="download('svg')">
          SVG
        </button>
        <button v-if="pngUrl" text="f-2xs neutral-800" outline="neutral-400 1.5 ~" px-8 py-2 nq-pill-tertiary @click="download('png')">
          PNG
        </button>
      </div>
    </div>
  </div>
</template>
