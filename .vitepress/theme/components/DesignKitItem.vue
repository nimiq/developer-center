<script setup lang="ts">
import { Toast } from 'radix-vue/namespaced'
import { addCollection } from '@iconify/vue'
import { getIconSnippet } from '../composables/icons/icon'

const props = defineProps<{
  logo: string
  label: string
  size: number
}>()

onMounted(async () => {
  const json = await fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json())
  addCollection(json)
})

const { copy: copyToClipboard, copied } = useClipboard({ copiedDuring: 3000 })
async function copySnippet(type: string) {
  const logo = props.logo.replace('i-', '')
  const str = await getIconSnippet(logo, type)
  if (str === '404')
    throw new Error(`Icon ${props.logo} Not found`)
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
</script>

<template>
  <div flex="~ col gap-24 items-center" m-0 class="raw">
    <div border-base rounded-6 p-24 flex-1 w-288 aspect-1.57 max-w-full bg="#f8f8f8" grid="~ place-content-center">
      <div :class="logo" text-128 :style="`font-size: ${size}px`" />
    </div>
    <div flex="~ gap-32" w-full>
      <p>{{ label }}</p>
      <div flex="~ gap-12" ml-auto>
        <Toast.Provider>
          <button
            mr-1 mb-1 px-8 py-6 border-base rounded-full text-12 leading-none text-neutral-700 font-semibold
            @click="copySnippet('SVG')"
          >
            SVG
            <Toast.Root v-model:open="copied" rounded-full px-16 py-8 bg-green shadow-sm>
              <Toast.Title flex gap-x-10 items-center text-white>
                <div i-nimiq:check />
                Copied to clipboard
              </Toast.Title>
            </Toast.Root>
            <Toast.Viewport fixed bottom-32 right-32 flex flex-col list-none="!" />
          </button>
        </Toast.Provider>
      </div>
    </div>
  </div>
</template>
