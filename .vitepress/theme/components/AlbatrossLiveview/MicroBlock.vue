<script setup lang="ts">
import type { LiveviewMicroBlock } from '../../composables/useAlbatrossBlocks'
import { computed } from 'vue'
import AlbatrossLiveviewTransactionCanvas from './TransactionCanvas.vue'

const props = defineProps<{ block: LiveviewMicroBlock }>()

const MAX_TXS = 1102

const durationFormatter = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'second',
  unitDisplay: 'short',
  maximumFractionDigits: 1,
})

const duration = computed(() => {
  if (!props.block.duration)
    return '?'
  return durationFormatter.format(props.block.duration / 1000)
})

const txCount = computed(() => props.block.transactions.length)
const hashes = computed(() => props.block.transactions.slice(0, MAX_TXS).map(tx => tx.hash.substring(0, 8)))

// @unocss-include

const fontSizeClass = computed(() => {
  if (props.block.number > 999999)
    return 'text-15/13.5'
  if (props.block.number > 99999)
    return 'text-17'
  if (props.block.number > 9999)
    return 'text-20'
  return 'text-24/19'
})
</script>

<template>
  <div title="Micro Block">
    <header v-if="block.isSkip" text="12 white center" mt--22 py-4 rounded-t-8 bg-gradient-orange w-160 nq-label>
      Skip Block
    </header>

    <div flex="~ col shrink-0" data-inverted text-neutral bg-neutral-100 size-160 relative :class="!block.isSkip ? 'rounded-8' : 'rounded-b-8'" outline="1.5 offset--1.5 ~ neutral-400">
      <div flex="~ items-center justify-between" text-15 px-16 pb-10 pt-14>
        <p font-bold :class="fontSizeClass">
          #{{ block.number }}
        </p>
        <p v-if="txCount > 0" text-13 lh-none font-semibold>
          {{ txCount }} TX
        </p>
      </div>

      <div v-if="!txCount" text="neutral-700 13 center" font-semibold mt-80 grow-1>
        No Transactions
      </div>
      <div v-else grow-1>
        <AlbatrossLiveviewTransactionCanvas origin="[0_100%]" scale-50 bottom-0 left-0 absolute :hashes />
      </div>
    </div>

    <footer flex="~ items-center justify-between gap-6" pt-2 w-full text="neutral-800 12">
      <p whitespace-nowrap>
        Slot {{ block.producer.slotNumber }}
      </p>
      <p v-if="duration !== '?' && Number(duration.replace('s', '')) > 0" whitespace-nowrap>
        {{ duration }} block time
      </p>
    </footer>
  </div>
</template>
