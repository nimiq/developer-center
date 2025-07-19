<script setup lang="ts">
import { PROOF_OF_STAKE_MIGRATION_BLOCK } from '@nimiq/utils/albatross-policy'
import { computed } from 'vue'

const props = defineProps<{ batchNumber: number, blockNumber: number }>()
const blocksPerBatch = 60 // TODO Add to policy
const genesisBlockNumber = PROOF_OF_STAKE_MIGRATION_BLOCK

const remainingBlockCount = computed(() => {
  if (props.batchNumber <= 0)
    return Math.max(0, blocksPerBatch - 1)
  const remaining = genesisBlockNumber + (props.batchNumber * blocksPerBatch) - props.blockNumber - 1
  return Math.min(Math.max(remaining, 0), blocksPerBatch - 1)
})

const createdBlockCount = computed(() => Math.max(blocksPerBatch - remainingBlockCount.value - 1, 0))
const pastMacro = computed(() => props.blockNumber > (props.batchNumber * blocksPerBatch) + genesisBlockNumber)
const isWaitingForMacro = computed(() => props.blockNumber === (props.batchNumber * blocksPerBatch) + genesisBlockNumber - 1)

// @unocss-include

const batchClass = computed(() => {
  const classes: string[] = []
  if (isWaitingForMacro.value)
    classes.push('animate-pulse')
  else if (pastMacro.value)
    classes.push('text-neutral op-100')
  else if (props.batchNumber > 999)
    classes.push('text-9')
  return classes.join(' ')
})

const batchNumberClass = computed(() => {
  if (props.batchNumber > 99999) {
    return 'text-7'
  }
  else if (props.batchNumber > 9999) {
    return 'text-8'
  }
  return 'text-9'
})
</script>

<template>
  <div max-w="[calc(100vw-12px)] md:full" flex="~ justify-between items-start" px-16 w-388>
    <div flex="~ col wrap" h="56 md:44">
      <div v-for="n in createdBlockCount" :key="`micro-block-${n}`" m-4 rounded-2 bg-neutral-300 size-6 inline-block transition-colors outline="1.5 offset--1.5 ~ neutral/6" />
      <div
        v-for="n in remainingBlockCount" :key="`micro-block-${createdBlockCount + n}`"
        m-4 rounded-2 bg-neutral-500 size-6 inline-block
      />
    </div>

    <div
      text="14 neutral-900 center" flex="~ justify-center col items-center"
      font-bold ml-4 rounded-8 bg-neutral-300 op-60 shrink-0 size-44 transition-all relative outline="1.5 offset--1.5 ~ neutral/6" :class="batchClass"
    >
      <span>M</span>
      <span :class="batchNumberClass">{{ batchNumber }}</span>
    </div>
  </div>
</template>
