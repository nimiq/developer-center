<script setup lang="ts">
import { useElementVisibility, useRafFn } from '@vueuse/core'
import { computed, ref, watch, watchEffect } from 'vue'
import { BLOCKS_WINDOW_SIZE, useAlbatrossBlocks } from '../../composables/useAlbatrossBlocks'
import AlbatrossLiveviewBatch from './Batch.vue'
import AlbatrossLiveviewBlock from './Block.vue'

const BLOCK_WIDTH = 208
const TARGET_OFFSET = -BLOCK_WIDTH / 4
const CHAIN_SPEED_FACTOR = 0.55

const { blocks, batchNumber, blockNumber, status } = useAlbatrossBlocks()

const velocity = ref(0)
const offset = ref(blocks.value.length * BLOCK_WIDTH)

/*
Scrolling effect

This JS creates the effect of a continously scrolling blockchain.
New blocks arrive from the right and push the other blocks to the left.

Whenever a new block is added, a watcher increases the offset of the
chain container, which reactively sets the DOM element's transform style.
In each animation frame, a velocity is calculated that enables the element's return
towards the target offset (resting state). This velocity is then applied to
the offset (which, again, updates the transform reactively).

The velocity is calculated as a root over the distance the element has to travel.
The lower the root (chain speed factor), the slower the element travels and vice-versa.
*/
const { pause, resume } = useRafFn(() => {
  velocity.value = -Math.floor((-TARGET_OFFSET + offset.value) ** CHAIN_SPEED_FACTOR)
  offset.value += velocity.value
}, { immediate: false })

// const target = useTemplateRef('blockchain')
const target = ref<HTMLElement>()
const blockchainIsVisible = useElementVisibility(target)

const shouldAnimate = computed(() => status.value === 'OPEN' && blocks.value.length >= BLOCKS_WINDOW_SIZE && blockchainIsVisible.value)
watch(blocks, () => {
  if (!shouldAnimate.value)
    return
  offset.value += BLOCK_WIDTH
}, { deep: true })
watchEffect(() => shouldAnimate.value ? resume() : pause())
</script>

<template>
  <div ref="target" relative of-x-clip>
    <div flex="~ justify-end items-center" px-24 min-h-208 of-hidden>
      <transition-group
        tag="div" flex="~ justify-end items-center" enter-from-class="op-0" enter-active-class="transition-opacity duration-400 ease-in"
        :style="{ transform: `translate3d(${offset}px, 0, 0)` }"
      >
        <AlbatrossLiveviewBlock v-for="block in blocks" :key="`block-${block.number}`" :block :style="{ width: BLOCK_WIDTH }" />
      </transition-group>
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
