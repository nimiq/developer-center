<script setup lang="ts">
import { useEventListener, useMounted, useScriptTag } from '@vueuse/core'
import { Dialog } from 'reka-ui/namespaced'
import { nextTick, ref, watchEffect } from 'vue'

const open = ref(false)
const isMounted = useMounted()

// Script loading states
const isLoading = ref(false)
const hasError = ref(false)

// Load external script using VueUse
const { load: loadScript } = useScriptTag(
  'https://nimiq-feedback.je-cf9.workers.dev/widget.js',
  () => {
    // Script loaded successfully
    console.warn('Feedback widget script loaded')
  },
  { manual: true }, // Don't load immediately
)

// CSS loading function (keep manual for now since useScriptTag is for JS only)
async function loadCSS() {
  if (document.querySelector('link[href*="nimiq-feedback"]'))
    return

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://nimiq-feedback.je-cf9.workers.dev/widget.css'
  document.head.appendChild(link)

  // Wait for CSS to load with timeout
  return new Promise<void>((resolve) => {
    link.onload = () => resolve()
    link.onerror = () => resolve() // Continue even if CSS fails
    setTimeout(resolve, 2000) // Fallback timeout
  })
}

// Widget instance reference
const widgetInstance = ref<any>(null)

// Widget mounting logic
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
        })
        return
      }
    }

    attempts++
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  throw new Error('Widget mounting failed after multiple attempts')
}

// Go back in widget
function goBack() {
  if (widgetInstance.value && typeof widgetInstance.value.goBack === 'function') {
    widgetInstance.value.goBack()
  }
}

// Flag to track if widget has been loaded
const widgetLoaded = ref(false)

// Load widget function (non-reactive)
async function loadWidget() {
  if (isLoading.value || widgetLoaded.value)
    return

  isLoading.value = true
  hasError.value = false

  try {
    // Load CSS and JS in parallel
    await Promise.all([
      loadCSS(),
      loadScript(),
    ])

    // Mount the widget after both resources are loaded
    await mountWidget()
    widgetLoaded.value = true
  }
  catch (error) {
    console.error('Failed to load feedback widget:', error)
    hasError.value = true
  }
  finally {
    isLoading.value = false
  }
}

// Watch for dialog opening (only triggers on open change)
watchEffect(() => {
  if (open.value && isMounted.value) {
    loadWidget()
  }
})

// Listen for escape key to close modal
useEventListener('keydown', (e) => {
  if (e.key === 'Escape' && open.value) {
    open.value = false
  }
})

// Reset states when dialog closes
watchEffect(() => {
  if (!open.value) {
    isLoading.value = false
    hasError.value = false
    // Don't reset widgetLoaded - keep it loaded for subsequent opens
  }
})
</script>

<template>
  <Dialog.Root v-model:open="open">
    <!-- Trigger Button -->
    <Dialog.Trigger as-child>
      <button
        class="dark:bg-gradient-neutral-dark text-white rounded-full bg-gradient-neutral flex size-48 shadow-lg transition-all duration-200 items-center bottom-16 right-16 justify-center fixed z-50 hover:scale-105"
        aria-label="Send feedback"
      >
        <div class="text-20 i-nimiq:thumb-up-thumb-down" />
      </button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Transition name="backdrop">
        <Dialog.Overlay bg-darkblue op-60 inset-0 fixed z-200 />
      </Transition>
      <Transition name="modal">
        <Dialog.Content xl="top-1/2 left-1/2 translate--1/2" rounded="t-8 xl:8" data-modal outline-none h-max max-h-85dvh w-full shadow-lg transform bottom-0 fixed z-200 of-y-auto xl:max-w-500 @open-auto-focus.prevent>
          <div py-32 bg-neutral-0 relative ring="1.5 neutral/3" class="modal-container">
            <Dialog.Title text="24 center neutral lh-24" as="h2" lh-none font-bold mb-12 px-24 sr-only xl:px-40>
              Send feedback
            </Dialog.Title>
            <Dialog.Description text="center neutral" px-24 block sr-only xl:px-40>
              We're always looking for ways to improve the Developer Center. Please share your thoughts with us.
            </Dialog.Description>

            <!-- Back arrow button -->
            <button
              aria-label="Go back"
              flex="~ items-center justify-center"
              rounded-full size-32 left-16 top-16 absolute text="neutral-600 20" hover:bg="neutral/10" transition="colors duration-200" @click="goBack"
            >
              <div i-nimiq:arrow-left />
            </button>

            <div mt-12 px-24 xl:px-40>
              <div id="feedback-widget" />
            </div>

            <!-- Close button with icon -->
            <Dialog.Close as-child>
              <button
                aria-label="Close"
                flex="~ items-center justify-center" rounded-full size-32 right-16 top-16 absolute text="neutral-600 20" hover:bg="neutral/10" transition="colors duration-200"
              >
                <div i-nimiq:cross />
              </button>
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
