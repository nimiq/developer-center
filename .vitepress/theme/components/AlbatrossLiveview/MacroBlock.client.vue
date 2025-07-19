<script setup lang="ts">
import type { LiveviewMacroBlock } from '../../composables/useAlbatrossBlocks'
import { SLOTS } from '@nimiq/utils/albatross-policy'
import { computed } from 'vue'
import AlbatrossLiveviewRadialProgress from './RadialProgress.vue'

const props = defineProps<{ block: LiveviewMacroBlock }>()

const requiredVotes = computed(() => Math.ceil(SLOTS * 2 / 3))
const progress = computed(() => Math.min(props.block.votes / requiredVotes.value, 1))
</script>

<template>
  <div :class="{ accepted: progress === 1 }" title="Macro Block" flex="~ col justify-between items-center shrink-0" text="14 white center" text-white my--24 rounded-8 bg-green h-208 w-160 transition-300 relative outline="1.5 offset--1.5 ~ neutral-400">
    <header text-11 lh-24 font-bold uppercase tracking="0.1em">
      Macro Block
    </header>

    <div text-24 lh-none font-bold>
      M{{ block.batch }}
    </div>

    <AlbatrossLiveviewRadialProgress
      :progress="progress" :radius="36" stroke="#FFFFFFFF" inner-stroke="#FFFFFF66" :stroke-width="2"
      :inner-stroke-width="2"
    />

    <div text-24 mb-16>
      {{ block.votes }} / {{ SLOTS }}
      <div text-12 lh-none>
        Votes
      </div>
    </div>
  </div>
</template>

<style scoped>
.accepted :deep(.progress-circle) {
  transition: opacity 0.6s var(--nq-ease) 0.4s;
  opacity: 0;
}
</style>
