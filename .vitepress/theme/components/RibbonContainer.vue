<script setup lang="ts">
import { motion, useMotionValue, useSpring } from 'motion-v'
import { nextTick, onMounted, ref } from 'vue'
import AnimatedText from './AnimatedText.vue'

const ribbonTexts = [
  'Zero Setup',
  'Fast Sync',
  'No Servers Needed',
  'Pure JS Power',
]

// Create a ref to measure the text width
const textRef = ref<HTMLElement>()
const measuredWidth = useMotionValue(140) // Initial estimated width
const width = useSpring(measuredWidth, {
  stiffness: 400,
  damping: 30,
})

// Measure text width for a specific text
async function measureTextWidth(text: string) {
  await nextTick()
  if (textRef.value) {
    // Update the hidden text content
    textRef.value.textContent = text
    const rect = textRef.value.getBoundingClientRect()
    const newWidth = Math.max(rect.width + 50, 120) // Add padding, minimum width
    measuredWidth.set(newWidth)
  }
}

// Handle word changes from AnimatedText
function handleWordChange(_index: number, word: string) {
  measureTextWidth(word)
}

onMounted(() => {
  measureTextWidth(ribbonTexts[0])
})
</script>

<template>
  <div max-w="none md:$nq-max-width" border="solid 12 neutral-400" box-order stack mx-auto rounded-20 size-full min-h-128 relative>
    <slot name="default" />

    <div self-start="!" justify-self-end="!" mr--32 w-max top--25 relative z-20>
      <div border="22 x-transparent t-0 #EC991C" aria-hidden shadow-md w-44 origin-bottom-right translate-y--1 rotate--45 bottom-0 right-0 absolute z-1 />

      <motion.div :style="{ width }" style="background-image: radial-gradient(100% 100% at 100% 100%, #EC991C 0%, #E9B213 100%)" text="f-lg white" rounded="6 br-0" f-px="16/20" f-pr="28/20" lh-none ml-auto pl-20 shadow-lg relative z-2 f-py-xs flex="~ items-center justify-end">
        <!-- Hidden text for measurement -->
        <span ref="textRef" font-semibold invisible pointer-events-none whitespace-nowrap left-0 top-0 absolute>
          {{ ribbonTexts[0] }}
        </span>

        <!-- Visible animated text -->
        <AnimatedText :words="ribbonTexts" font-semibold @word-change="handleWordChange" />
      </motion.div>
    </div>
  </div>
</template>
