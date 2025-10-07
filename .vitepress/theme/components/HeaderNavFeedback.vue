<script setup lang="ts">
function openFeedback() {
  if (typeof window !== 'undefined') {
    const feedbackWidget = (window as any).__nimiqFeedbackWidget
    if (feedbackWidget && feedbackWidget.open) {
      feedbackWidget.open()
    }
  }
}
</script>

<template>
  <button
    flex="~ items-center gap-8"
    bg="transparent hocus:neutral-200"
    py-4
    transition-colors
    f-px-2xs
    f-rounded-xs
    @click="openFeedback"
  >
    <span font-medium f-text-sm>Feedback & Bugs</span>
  </button>
</template>
