<script setup lang="ts">
import { useDocumentVisibility, useElementVisibility } from '@vueuse/core'
import { onBeforeUnmount, ref, watch, watchEffect } from 'vue'
import { BLOCKS_WINDOW_SIZE, useAlbatrossBlocks } from '../../composables/useAlbatrossBlocks'
import AlbatrossLiveviewBatch from './Batch.vue'
import AlbatrossLiveviewBlock from './Block.vue'

const BLOCK_WIDTH = 208
const TARGET_OFFSET = -BLOCK_WIDTH / 4
const CHAIN_SPEED_FACTOR = 0.55

const { blocks, batchNumber, blockNumber, status } = useAlbatrossBlocks()

let velocity = 0
let offset = blocks.value.length * BLOCK_WIDTH
let frame: number | null = null

/*
Scrolling effect

This JS creates the effect of a continously scrolling blockchain.
New blocks arrive from the right and push the other blocks to the left.

Whenever a new block is added, a watcher increases the offset of the
chain container, which directly updates the DOM element's transform style.
In each animation frame, a velocity is calculated that enables the element's return
towards the target offset (resting state). This velocity is then applied to
the offset and directly updates the DOM transform.

The velocity is calculated as a root over the distance the element has to travel.
The lower the root (chain speed factor), the slower the element travels and vice-versa.
*/

const target = ref<HTMLElement>()
const chainElement = ref<HTMLElement>()
const blockchainIsVisible = useElementVisibility(target)
const docVisibility = useDocumentVisibility()

// Use refs to avoid computed overhead during animation
const canAnimate = ref(false)
const isAnimating = ref(false)

function startAnimation() {
  if (frame)
    return
  if (!canAnimate.value)
    return

  function loop() {
    frame = requestAnimationFrame(loop)
    velocity = -Math.floor((-TARGET_OFFSET + offset) ** CHAIN_SPEED_FACTOR)
    offset += velocity

    if (chainElement.value) {
      chainElement.value.style.transform = `translate3d(${offset}px, 0, 0)`
    }
  }

  isAnimating.value = true
  loop()
}

function stopAnimation() {
  if (!frame)
    return
  cancelAnimationFrame(frame)
  frame = null
  isAnimating.value = false
}

// Update animation state only when necessary
watchEffect(() => {
  const newCanAnimate = status.value === 'OPEN' && blocks.value.length >= BLOCKS_WINDOW_SIZE && blockchainIsVisible.value && docVisibility.value === 'visible'
  if (canAnimate.value !== newCanAnimate) {
    canAnimate.value = newCanAnimate
    if (newCanAnimate && !isAnimating.value) {
      startAnimation()
    }
    else if (!newCanAnimate && isAnimating.value) {
      stopAnimation()
    }
  }
})

onBeforeUnmount(() => {
  stopAnimation()
})

watch(() => blocks.value.length, () => {
  if (!canAnimate.value)
    return
  offset += BLOCK_WIDTH
})
</script>

<template>
  <div ref="target" relative of-x-clip class="nq-raw">
    <div flex="~ justify-end items-center" px-24 min-h-208 of-hidden>
      <div ref="chainElement" flex="~ justify-end items-center" style="will-change: transform">
        <transition-group
          tag="div" flex="~ justify-end items-center" enter-from-class="op-0" enter-active-class="transition-opacity duration-400 ease-in"
        >
          <AlbatrossLiveviewBlock v-for="block in blocks" :key="`block-${block.number}`" :block :style="{ width: BLOCK_WIDTH }" />
        </transition-group>
      </div>
    </div>

    <div v-if="status !== 'OPEN' || blocks.length === 0" flex="~ justify-center items-center" font-bold min-h-224 inset-0 absolute>
      <div v-if="status === 'CONNECTING' || blocks.length === 0" text="f-lg white">
        Loading...
      </div>
      <div v-else-if="status === 'CLOSED'" text="18 white" px-32 py-24 rounded-4 bg-red shadow ring="1.5 red/3">
        We couldn't connect to the network
      </div>
    </div>

    <div v-else flex="~ justify-center" px-32 w-full of-hidden f-mt-lg>
      <!-- :class="{ unimate: isMacro || isFirstBatchAfterPageLoad }"> -->
      <div flex="~ justify-center">
        <AlbatrossLiveviewBatch v-for="n in 7" :key="`batch-${batchNumber - 2 + n - 1}`" :batch-number="batchNumber - 3 + n - 1" :block-number class="animate-batch-unshift" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-batch-unshift {
  animation: batch-unshift 0.6s ease-in-out;
}

@keyframes batch-unshift {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
