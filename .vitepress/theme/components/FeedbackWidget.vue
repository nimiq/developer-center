<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { FeedbackModal } from 'nimiq-feedback-widget'
import { onMounted, ref } from 'vue'
import 'nimiq-feedback-widget/style.css'

const { width, height } = useWindowSize()
const open = ref(false)

type FeedbackFormType = 'bug' | 'feedback'

interface FeedbackWidgetApi {
  open: (form?: FeedbackFormType) => void
}

type WindowWithFeedback = Window & typeof globalThis & {
  __nimiqFeedbackWidget?: FeedbackWidgetApi
}

const windowWithFeedback = typeof window !== 'undefined' ? window as WindowWithFeedback : undefined

onMounted(() => {
  if (windowWithFeedback) {
    windowWithFeedback.__nimiqFeedbackWidget = {
      open: () => {
        open.value = true
      },
    }
  }
})

function handleBeforeSubmit(event: any) {
  const { formData } = event
  const meta = {
    windowSize: `${width.value}x${height.value}`,
    browser: navigator.userAgent,
    url: windowWithFeedback?.location.href || '',
  }
  formData.append('meta', JSON.stringify(meta))
}
</script>

<template>
  <FeedbackModal
    v-model:open="open"
    app="developer-center"
    feedback-endpoint="https://nimiq-feedback.je-cf9.workers.dev/api/feedback"
    @before-submit="handleBeforeSubmit"
  >
    <!-- Hidden trigger - modal is controlled programmatically via HeaderNavFeedback -->
    <button hidden aria-hidden="true" />
  </FeedbackModal>
</template>
