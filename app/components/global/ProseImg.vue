<script lang="ts">
import theme from '#build/ui/prose/img'
</script>

<script setup lang="ts">
import ImageComponent from '#build/ui-image-component'
import { useAppConfig, useRuntimeConfig } from '#imports'
import { useComponentProps } from '@nuxt/ui/composables/useComponentProps'
import { resolveBaseURL } from '@nuxt/ui/utils'
import { tv } from '@nuxt/ui/utils/tv'
import { useEventListener } from '@vueuse/core'
import { computed, ref } from 'vue'

defineOptions({ inheritAttrs: false })

// Local override of Nuxt UI's `ProseImg`.
//
// Upstream resolves `src` in a computed that is only ever evaluated from inside
// a `createReusableTemplate` slot rendered by reka-ui's `DialogTrigger`. That
// slot runs detached from the Nuxt instance, so its `useRuntimeConfig()` call
// throws `[nuxt] instance unavailable` while server-rendering. Every page with
// an image then failed to prerender and fell through to the worker, where the
// same error produced a 500 on direct navigation.
//
// Here the runtime config is read during `setup()` and the zoom overlay is
// rendered by this component, so no Nuxt composable runs from a detached slot.
// Lives in `global/` for the same reason as ProseCodeGroup: MDC resolves prose
// components by name at runtime, and app-level components are not registered
// globally under @nuxt/ui 4.11.

const _props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  class: { type: null, required: false },
  zoom: { type: Boolean, required: false, default: true },
  ui: { type: Object, required: false },
})

const props = useComponentProps('prose.img', _props)

type ImgUi = Record<keyof typeof theme.slots, (opts?: { class?: any }) => string>

const appConfig = useAppConfig() as any
const open = ref(false)
const img = tv({ extend: theme, ...appConfig.ui?.prose?.img || {} }) as unknown as (variants: { zoom: boolean, open: boolean, width: boolean }) => ImgUi
const ui = computed(() => img({ zoom: props.zoom, open: open.value, width: !!props.width }))

// Read eagerly, while the Nuxt instance is still available — see the note above.
const { app: { baseURL } } = useRuntimeConfig()
const refinedSrc = computed(() => resolveBaseURL(props.src, baseURL))

function onClick() {
  if (props.zoom) {
    open.value = true
  }
}

if (import.meta.client) {
  useEventListener(window, 'scroll', () => {
    open.value = false
  })
  useEventListener(window, 'keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      open.value = false
    }
  })
}
</script>

<template>
  <component
    :is="ImageComponent"
    :src="refinedSrc"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    v-bind="$attrs"
    :class="ui.base({ class: [props.ui?.base, props.class] })"
    @click="onClick"
  />

  <ClientOnly v-if="props.zoom">
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-to-class="opacity-0"
      >
        <div
          v-if="open"
          :class="ui.content({ class: [props.ui?.content] })"
          @click="open = false"
        >
          <div :class="ui.overlay({ class: [props.ui?.overlay] })" />

          <component
            :is="ImageComponent"
            :src="refinedSrc"
            :alt="props.alt"
            :class="ui.zoomedImage({ class: [props.ui?.zoomedImage] })"
          />
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
