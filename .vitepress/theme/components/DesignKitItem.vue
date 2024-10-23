<script setup lang="ts">
import { getIconSnippet } from '../composables/icons/icon'
import { dataUriToBlob, downloadBlob } from '../composables/icons/pack'

const props = defineProps<{
  logo: string
  label: string
  size: number
  dark?: boolean
}>()

const { copy: copyToClipboard, copied, isSupported: copyIsSupported } = useClipboard({ copiedDuring: 3000 })
async function copySnippet(type: string) {
  const logo = props.logo.replace('i-', '')
  const str = await getIconSnippet(logo, type)
  if (str === '404' || !str)
    throw new Error(`Icon ${props.logo} Not found`)
  copyToClipboard(str)
}

async function download() {
  const logo = props.logo.replace('i-', '')
  const str = await getIconSnippet(logo, 'PNG')
  if (!str)
    return
  const name = `${logo.replaceAll('nimiq:logos-', '')}.png`
  const blob = dataUriToBlob(str)
  downloadBlob(blob, name)
}
</script>

<template>
  <div flex="~ col gap-16 items-center" m-0 class="raw nq-raw" w-full>
    <div
      rounded-6 p-24 flex-1 w-288 w-full
      :class="{
        'bg-[rgb(var(--nq-neutral-on-light-0))] border-subtle': !dark,
        'bg-[rgb(var(--nq-neutral-on-dark-0))] border-subtle-light': dark,
      }"
      grid="~ place-content-center"
    >
      <div :class="logo" text-128 :style="`font-size: ${size}px`" />
    </div>
    <div flex="~ gap-12" w-full>
      <p text-neutral-800>
        {{ label }}
      </p>
      <div flex ml-auto>
        <Toast v-if="copyIsSupported" v-model="copied" title="Copied to clipboard!" category="success">
          <button nq-ghost-btn mr-12 text-12 @click="copySnippet('SVG')">
            SVG
          </button>
        </Toast>

        <button nq-ghost-btn text-12 @click="download()">
          PNG
        </button>
      </div>
    </div>
  </div>
</template>
