<script setup lang="ts">
import { useEventListener, useMounted, useScriptTag, useWindowSize } from '@vueuse/core'
import { Dialog } from 'reka-ui/namespaced'
import { computed, nextTick, ref, watch, watchEffect } from 'vue'

type FeedbackFormType = 'bug' | 'feedback'

interface WidgetInstance {
  showForm?: (form: FeedbackFormType) => void
  closeWidget?: () => void
}

interface FeedbackWidgetApi extends WidgetInstance {
  open: (form?: FeedbackFormType) => void
}

type WindowWithFeedback = Window & typeof globalThis & {
  mountFeedbackWidget?: (selector: string, props?: Record<string, unknown>) => WidgetInstance
  __nimiqFeedbackWidget?: FeedbackWidgetApi
}

const open = ref(false)
const isMounted = useMounted()
const pendingForm = ref<FeedbackFormType>('feedback')
const isLoading = ref(false)
const hasError = ref(false)
const widgetInstance = ref<WidgetInstance | null>(null)
const isDevEnvironment = import.meta.env?.DEV ?? false
const { width, height } = useWindowSize()

const windowWithFeedback = typeof window !== 'undefined' ? window as WindowWithFeedback : undefined
const globalWidget: FeedbackWidgetApi | null = windowWithFeedback
  ? (windowWithFeedback.__nimiqFeedbackWidget ?? (windowWithFeedback.__nimiqFeedbackWidget = { open: () => {} }))
  : null

function openModal(form: FeedbackFormType = 'feedback') {
  pendingForm.value = form
  hasError.value = false

  if (!open.value)
    open.value = true

  widgetInstance.value?.showForm?.(form)
}

if (globalWidget) {
  globalWidget.open = openModal
  globalWidget.showForm = (form?: FeedbackFormType) => openModal(form)
  globalWidget.closeWidget = () => {
    open.value = false
    widgetInstance.value?.closeWidget?.()
  }
}

const { load: loadScript } = useScriptTag(
  'https://nimiq-feedback.je-cf9.workers.dev/widget.js',
  () => {
    console.warn('Feedback widget script loaded')
  },
  { manual: true },
)

async function loadCSS() {
  if (typeof document === 'undefined')
    return

  if (document.querySelector('link[href*="nimiq-feedback"]'))
    return

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://nimiq-feedback.je-cf9.workers.dev/widget.css'
  document.head.appendChild(link)

  await new Promise<void>((resolve) => {
    link.onload = () => resolve()
    link.onerror = () => resolve()
    setTimeout(resolve, 2000)
  })
}

async function mountWidget() {
  await nextTick()

  if (!windowWithFeedback)
    throw new Error('Feedback widget unavailable')

  const mount = windowWithFeedback.mountFeedbackWidget
  if (typeof mount !== 'function')
    throw new Error('mountFeedbackWidget is not defined')

  const container = document.getElementById('feedback-widget')
  if (!container)
    throw new Error('Feedback widget container not found')

  const instance = mount('#feedback-widget', {
    app: 'developer-center',
    feedbackEndpoint: 'https://nimiq-feedback.je-cf9.workers.dev/api/feedback',
    initialForm: pendingForm.value,
    dev: isDevEnvironment,
  })

  // Add metadata to feedback submissions
  instance.communication?.on('before-submit', ({ formData }) => {
    const meta = {
      windowSize: `${width.value}x${height.value}`,
      browser: navigator.userAgent,
      url: windowWithFeedback?.location.href || '',
    }
    formData.append('meta', JSON.stringify(meta))
  })

  widgetInstance.value = instance

  if (globalWidget) {
    globalWidget.showForm = (form?: FeedbackFormType) => openModal(form)
    globalWidget.closeWidget = () => {
      open.value = false
      instance.closeWidget?.()
    }
  }

  instance.showForm?.(pendingForm.value)
}

async function ensureWidget() {
  if (widgetInstance.value || isLoading.value)
    return

  isLoading.value = true
  hasError.value = false

  try {
    await Promise.all([
      loadCSS(),
      loadScript(),
    ])
    await mountWidget()
  }
  catch (error) {
    console.error('Failed to load feedback widget:', error)
    hasError.value = true
    widgetInstance.value = null
  }
  finally {
    isLoading.value = false
  }
}

watchEffect(() => {
  if (open.value && isMounted.value)
    ensureWidget()
})

watch(open, (isOpen) => {
  if (!isOpen) {
    pendingForm.value = 'feedback'
    widgetInstance.value?.closeWidget?.()
    widgetInstance.value = null
    isLoading.value = false
    hasError.value = false
  }
  else {
    widgetInstance.value?.showForm?.(pendingForm.value)
  }
})

useEventListener('keydown', (event) => {
  if (event.key === 'Escape' && open.value)
    open.value = false
})

const showErrorState = computed(() => open.value && hasError.value)
const showLoadingState = computed(() => open.value && !hasError.value && (!widgetInstance.value || isLoading.value))
const widgetAriaHidden = computed(() => showLoadingState.value || showErrorState.value)
const containerStyle = computed(() => ({ minHeight: '340px' }))
</script>

<template>
  <Dialog.Root v-model:open="open">
    <Dialog.Portal>
      <Transition name="backdrop">
        <Dialog.Overlay bg-darkblue op-60 inset-0 fixed z-200 />
      </Transition>
      <Transition name="modal">
        <Dialog.Content xl="top-1/2 left-1/2 translate--1/2" rounded="t-8 xl:8" data-modal outline-none h-max max-h-85dvh w-full shadow-lg transform bottom-0 fixed z-200 of-hidden xl:max-w-500 @open-auto-focus.prevent>
          <div py-32 bg-neutral-0 max-h-85dvh relative of-y-auto ring="1.5 neutral/3" class="modal-container">
            <Dialog.Title text="24 center neutral lh-24" as="h2" lh-none font-bold mb-12 px-24 sr-only xl:px-40>
              Send feedback
            </Dialog.Title>
            <Dialog.Description text="center neutral" px-24 block sr-only xl:px-40>
              We're always looking for ways to improve the Developer Center. Please share your thoughts with us.
            </Dialog.Description>

            <div mt-12 f-px-md>
              <div class="w-full relative" :style="containerStyle">
                <div
                  v-if="showErrorState"
                  class="text-neutral-800 px-24 text-center bg-neutral-0 flex flex-col gap-12 items-center inset-0 justify-center absolute"
                >
                  <p font-medium>
                    We couldn't load the feedback form. Please try again later.
                  </p>
                </div>
                <div
                  v-else-if="showLoadingState"
                  class="text-neutral-800 px-24 text-center bg-neutral-0 flex flex-col gap-16 items-center inset-0 justify-center absolute"
                >
                  <div i-nimiq:check text="green 6xl" aria-hidden="true" />
                  <p font-semibold>
                    Ready to share your feedback
                  </p>
                </div>
                <div id="feedback-widget" aria-live="polite" :aria-hidden="widgetAriaHidden" h-full />
              </div>
            </div>

            <Dialog.Close
              aria-label="Close"
              flex="~ items-center justify-center" bg="neutral-200 hocus:neutral-300" rounded-full size-24 transition-colors right-16 top-16 absolute
            >
              <div text-neutral-700 size-10 i-nimiq:cross />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Transition>
    </Dialog.Portal>
  </Dialog.Root>
</template>

<style scoped>
/* https://github.com/nimiq/wallet/blob/a88d34bfa16930adbfd52baaa5b0809c38c5c365/src/components/modals/Modal.vue */

.backdrop-enter-active {
  transition: opacity 650ms cubic-bezier(.3, 1, .2, 1);
}

.backdrop-leave-active {
  transition: opacity 650ms cubic-bezier(.3, 0, 0, 1);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@screen lt-xl {

  .modal-enter-active,
  .modal-leave-active {
    transition: transform 200ms ease-out;
  }

  .modal-enter-from,
  .modal-leave-to {
    --un-translate-y: 100%;
  }
}

@screen xl {
  .modal-enter-active,
  .modal-leave-active {
    transition:
      opacity 250ms cubic-bezier(.4, 0, .2, 1),
      transform 100ms var(--nq-ease);
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    --un-scale-x: 0.96;
    --un-scale-y: 0.96;
    --un-translate-y: calc(-50% - 0.5rem);
  }
}
</style>
