<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import { Dialog } from 'reka-ui/namespaced'
import { nextTick, onMounted, ref } from 'vue'

type FeedbackType = 'bug' | 'feedback' | null

const open = ref(false)
const feedbackType = ref<FeedbackType>(null)
const isLoading = ref(false)
const widgetLoaded = ref(false)
const widgetInstance = ref<any>(null)

// Load external script
const { load: loadScript } = useScriptTag(
  'https://nimiq-feedback.je-cf9.workers.dev/widget.js',
  () => {
    // eslint-disable-next-line no-console
    console.log('Feedback widget script loaded')
  },
  { manual: true },
)

// Load CSS
async function loadCSS() {
  if (document.querySelector('link[href*="nimiq-feedback"]'))
    return

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://nimiq-feedback.je-cf9.workers.dev/widget.css'
  document.head.appendChild(link)

  return new Promise<void>((resolve) => {
    link.onload = () => resolve()
    link.onerror = () => resolve()
    setTimeout(resolve, 2000)
  })
}

const isDev = import.meta.env.DEV

// Mount the widget
async function mountWidget() {
  await nextTick()

  let attempts = 0
  const maxAttempts = 10

  while (attempts < maxAttempts) {
    if (typeof (window as any).mountFeedbackWidget === 'function') {
      const container = document.getElementById('feedback-widget')
      if (container) {
        widgetInstance.value = (window as any).mountFeedbackWidget('#feedback-widget', {
          app: 'developer-center',
          feedbackEndpoint: 'https://nimiq-feedback.je-cf9.workers.dev/api/feedback',
          initialForm: feedbackType.value,
          dev: isDev,
        })
        return
      }
    }

    attempts++
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  throw new Error('Widget mounting failed after multiple attempts')
}

// Load and mount widget
async function loadWidget() {
  if (isLoading.value || widgetLoaded.value)
    return

  isLoading.value = true

  try {
    await Promise.all([loadCSS(), loadScript()])
    await mountWidget()
    widgetLoaded.value = true
  }
  catch (error) {
    console.error('Failed to load feedback widget:', error)
  }
  finally {
    isLoading.value = false
  }
}

// Open dialog with specific form type
async function openDialog(type: FeedbackType) {
  feedbackType.value = type
  open.value = true

  if (!widgetLoaded.value) {
    await loadWidget()
  }
  else if (widgetInstance.value && widgetInstance.value.selectForm) {
    // Switch to the desired form if widget is already loaded
    widgetInstance.value.selectForm(type)
  }
}

function handleOpenChange(newOpen: boolean) {
  open.value = newOpen
  if (!newOpen) {
    feedbackType.value = null
  }
}

// Make this component accessible globally
onMounted(() => {
  if (typeof window !== 'undefined') {
    (window as any).__feedbackModal = {
      openDialog,
    }
  }
})
</script>

<template>
  <div>
    <!-- Dialog Modal -->
    <Dialog.Root :open="open" @update:open="handleOpenChange">
      <Dialog.Portal>
        <Transition name="backdrop">
          <Dialog.Overlay bg-darkblue op-60 inset-0 fixed z-200 />
        </Transition>
        <Transition name="modal">
          <Dialog.Content
            xl="top-1/2 left-1/2 translate--1/2"
            rounded="t-8 xl:8"

            outline-none h-max max-h-85dvh w-full shadow-lg transform bottom-0 fixed z-200 of-hidden xl:max-w-500
            @open-auto-focus.prevent
          >
            <div ring="1.5 neutral/3" rounded="t-8 xl:8" flex="~ col" bg-neutral-0 h-full max-h-85dvh relative of-hidden>
              <!-- Close button -->
              <Dialog.Close
                aria-label="Close"
                flex="~ items-center justify-center"

                text="neutral-700 hocus:neutral-800 12"
                outline="1.5 ~ offset--1.5 neutral/3"
                bg="neutral-100 hocus:neutral-200"
                rounded-full size-32 transition-colors right-16 top-16 absolute z-10
              >
                <div i-nimiq:cross />
              </Dialog.Close>

              <!-- Widget Container with scrollbar -->
              <div flex-1 of-x-hidden of-y-auto f-py-md>
                <div f-px-md>
                  <div id="feedback-widget" />
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Transition>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
</template>

<style scoped>
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

@media (max-width: 1280px) {

  .modal-enter-active,
  .modal-leave-active {
    transition: transform 200ms ease-out;
  }

  .modal-enter-from,
  .modal-leave-to {
    transform: translateY(100%);
  }
}

@media (min-width: 1280px) {

  .modal-enter-active,
  .modal-leave-active {
    transition:
      opacity 250ms cubic-bezier(.4, 0, .2, 1),
      transform 100ms var(--nq-ease);
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 0.5rem)) scale(0.96);
  }
}
</style>
