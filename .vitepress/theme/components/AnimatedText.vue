<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface Props {
  words: string[]
  duration?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
  class: '',
})

const emit = defineEmits(['wordChange', 'animationStart', 'animationComplete'])

const currentWordIndex = ref(0)
const controls = useAnimationControls()
const timeoutId = ref<number | null>(null)

const currentWord = computed(() => props.words[currentWordIndex.value])

async function startAnimation() {
  // Animate out (slide up)
  await controls.start({
    opacity: 0,
    y: -6,
    transition: { duration: 0.2 },
  })

  // Change word
  currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length
  emit('wordChange', currentWordIndex.value, currentWord.value)

  // Set initial position for new text (from bottom)
  await controls.set({
    opacity: 0,
    y: 6,
  })

  // Animate in (slide up from bottom)
  await controls.start({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  })

  // Set up next animation cycle
  startTimeout()
}

function startTimeout() {
  // Clear any existing timeout
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }

  timeoutId.value = window.setTimeout(() => {
    startAnimation()
  }, props.duration)
}

onMounted(async () => {
  // Set initial state and emit
  await controls.set({ opacity: 1, y: 0 })
  emit('wordChange', currentWordIndex.value, currentWord.value)

  // Start the rotation cycle
  startTimeout()
})

onBeforeUnmount(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }
})
</script>

<template>
  <motion.span
    :animate="controls"
    :initial="{ opacity: 1,
                y: 0 }"
    :class="props.class"
    inline-block
    whitespace-nowrap
  >
    {{ currentWord }}
  </motion.span>
</template>
