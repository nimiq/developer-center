import type { MacroBlock, MicroBlock, Transaction } from 'nimiq-rpc-client-ts/types'

import { createSharedComposable, useDocumentVisibility, useWebSocket } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

export enum LiveviewBlockType {
  MicroBlock = 'micro',
  MacroBlock = 'macro',
  PlaceholderBlock = 'placeholder',
}

export const BLOCKS_WINDOW_SIZE = 20

export type LiveviewMicroBlock = {
  kind: LiveviewBlockType.MicroBlock
  duration: number
  transactions: Transaction[]
  isSkip: boolean
} & Pick<MicroBlock, 'producer' | 'number' | 'batch' | 'timestamp'>

export type LiveviewMacroBlock = {
  kind: LiveviewBlockType.MacroBlock
  transactions: Transaction[]
  votes: number
} & Pick<MacroBlock, 'batch' | 'number'>

export interface LiveviewPlaceholderBlock { kind: LiveviewBlockType.PlaceholderBlock, number?: undefined, timestamp?: undefined }
export type LiveviewBlock = LiveviewMicroBlock | LiveviewMacroBlock | LiveviewPlaceholderBlock

function _useAlbatrossBlocks() {
  // Replace useState with reactive ref - in Vue we don't have built-in shared state like Nuxt
  const blocks = ref<LiveviewBlock[]>([])

  // VitePress server-side detection - window is not available during build
  if (import.meta.env?.SSR) {
    return {
      status: ref('CLOSED'),
      blocks,
      microblocks: ref([]),
      blockNumber: ref(-1),
      batchNumber: ref(-1),
    }
  }

  // Create state with ref to share between components

  const url = `https://nimiq-website.je-cf9.workers.dev/albatross-blocks`
  const { status, data } = useWebSocket(url, {
    onError() {
      console.error('[Albatross Liveview] Error connecting to Albatross Blocks WebSocket')
      status.value = 'CLOSED'
    },
    onConnected() {
      // eslint-disable-next-line no-console
      console.log('[Albatross Liveview] Connected to Albatross Blocks WebSocket')
      status.value = 'OPEN'
    },
    onDisconnected() {
      // eslint-disable-next-line no-console
      console.log('[Albatross Liveview] Disconnected from Albatross Blocks WebSocket')
      status.value = 'CLOSED'
    },
    immediate: true,
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.error('[Albatross Liveview] Failed to connect Blocks EventSource after 3 retries')
      },
    },
  })

  function pushBlock(newBlock: LiveviewBlock) {
    // if new block is placeholder and last block is placeholder we don't add it
    if (newBlock.kind === LiveviewBlockType.PlaceholderBlock && blocks.value.at(-1)?.kind === LiveviewBlockType.PlaceholderBlock)
      return
    // we keep 180 because is the number of blocks in 3 batches and we want to display block colors in the bacth
    blocks.value = [...blocks.value, newBlock].slice(-180)
  }

  const visibility = useDocumentVisibility()
  const hasMissingBlocks = ref(false)

  watch(visibility, (v) => {
    if (v === 'visible' && hasMissingBlocks.value)
      pushBlock({ kind: LiveviewBlockType.PlaceholderBlock })
    else
      hasMissingBlocks.value = false
  })

  watch(data, (d) => {
    if (!d)
      return

    if (visibility.value === 'hidden') {
      hasMissingBlocks.value = true
      return
    }

    /**
     * The websocket sends an array of blocks when the connection is established the first time.
     * After that, it sends a single block at a time.
     */
    const isArray = d.startsWith('[') && d.endsWith(']')
    if (isArray)
      blocks.value = JSON.parse(d) as LiveviewBlock[]
    else if (blocks.value.length >= BLOCKS_WINDOW_SIZE)
      pushBlock(JSON.parse(d) as LiveviewBlock)
  })

  // Computed properties
  const latestBlock = computed(() => {
    // Find the last microblock without filtering the entire array
    for (let i = blocks.value.length - 1; i >= 0; i--) {
      if (blocks.value[i]?.kind === LiveviewBlockType.MicroBlock) {
        return blocks.value[i] as LiveviewMicroBlock
      }
    }
    return undefined
  })
  const microblocks = computed(() => blocks.value.filter(block => block.kind === LiveviewBlockType.MicroBlock) as LiveviewMicroBlock[])
  const batchNumber = computed(() => latestBlock.value?.batch || -1)
  const blockNumber = computed(() => latestBlock.value?.number || -1)

  return {
    status,
    blocks,
    microblocks,
    blockNumber,
    batchNumber,
  }
}

export const useAlbatrossBlocks = createSharedComposable(_useAlbatrossBlocks)
