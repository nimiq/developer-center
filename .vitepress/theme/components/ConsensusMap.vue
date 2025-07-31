<script setup lang="ts">
import type { Client, PlainBlock } from '@nimiq/core'
import type { CSSProperties, Ref } from 'vue'
import type { Peer } from '../types/nimiq'
import type { WorldMapHexagon } from '../utils/consensus-map/drawHexagonsWorldMapCanvas'
import init, * as Nimiq from '@nimiq/core/web'
import { until, useDevicePixelRatio, useEventListener, useIntervalFn } from '@vueuse/core'
import { motion, useMotionValue, useSpring } from 'motion-v'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useGeoIp } from '../composables/useGeoIp'
import { ConsensusState } from '../types/nimiq'
import { drawHexagonsWorldMap, HEXAGONS_WORLD_MAP_ASPECT_RATIO, HEXAGONS_WORLD_MAP_HEIGHT_PIXELS, HEXAGONS_WORLD_MAP_SCALE, HEXAGONS_WORLD_MAP_WIDTH_PIXELS, WORLD_MAP_CANVAS_PADDING } from '../utils/consensus-map/drawHexagonsWorldMapCanvas'
import { getHexagonCoords } from '../utils/consensus-map/drawHexagonsWorldMapProjection'

defineProps<{ connectLabel: string, thisIsYou: string, connecting: string }>()

const clientNetwork = 'MainAlbatross'

// VitePress doesn't support Pinia stores
function useNimiq() {
  const consensus = ref<ConsensusState>(ConsensusState.Idle)
  const head = ref<PlainBlock>()
  const height = ref(0)
  const client = ref<Client | undefined>()

  const { locate } = useGeoIp()
  const peers = ref<Peer[]>([])
  const userPeer = ref<Peer>()

  const unwatch = ref<(() => Promise<any>)>()

  async function launchNetwork() {
    consensus.value = ConsensusState.Connecting

    await init()

    const config = new Nimiq.ClientConfiguration()
    config.network(clientNetwork)
    config.logLevel('debug')

    client.value = await Nimiq.Client.create(config.build())

    const removeConsensusListener = client.value!.addConsensusChangedListener((state) => {
      // eslint-disable-next-line no-console
      console.log('Consensus state changed:', state)
      consensus.value = state === 'syncing' ? ConsensusState.Connecting : ConsensusState.Established
    })

    const removeHeadListener = client.value!.addHeadChangedListener(async (hash /* , reason, revertedBlocks, adoptedBlocks */) => {
      const block = await client.value!.getBlock(hash)
      head.value = block
      height.value = block.height
    })

    const removePeerChanged = client.value!.addPeerChangedListener(async (peerId, reason, peerCount, peerInfo) => {
      // eslint-disable-next-line no-console
      console.log('Peer changed:', { peerId, reason, peerCount, peerInfo })
      if (reason === 'left') {
        peers.value = peers.value.filter(peer => peer.peerId !== peerId)
        return
      }
      if (!peerInfo)
        return

      const locator = peerInfo.address.split('/')[2]
      if (!locator || locator === '0.0.0.0')
        return

      const { lat, lng } = await locate(locator)
      const { x, y } = getHexagonCoords({ lat, lng })
      const peer = { peerId, x, y, lat, lng }
      peers.value.push(peer)
    })

    unwatch.value = () => Promise.all([removeConsensusListener, removeHeadListener, removePeerChanged])
  }

  async function disconnect(timeout = 10000) {
    await client.value?.disconnectNetwork()
    await until(peers.value.length).toBe(0, { timeout })
  }

  async function setUserPeer() {
    const { lat, lng } = await locate()
    const { x, y } = getHexagonCoords({ lat, lng })
    userPeer.value = { peerId: 'user', lat, lng, x, y }
  }

  return {
    client,
    launchNetwork,
    consensus,
    height,
    head,
    disconnect,
    setUserPeer,
    userPeer,
    peers,
  }
}

const { launchNetwork, setUserPeer, consensus, peers, userPeer } = useNimiq()

const canvas = ref<HTMLCanvasElement>()
const containerRef = ref<HTMLElement>()

const tooltipPosition = ref<CSSProperties>({ transform: 'translate(0, 0)' })
let userHexagonRef: Ref<WorldMapHexagon | undefined> | undefined

onMounted(async () => {
  await nextTick()
  if (!canvas.value) {
    console.warn('Canvas not available after mount')
    return
  }

  await setUserPeer()
  const { userHexagon } = drawHexagonsWorldMap(canvas, { peers, userPeer }, containerRef)
  userHexagonRef = userHexagon
  setPositionTooltip(userHexagon)
})

const { pixelRatio } = useDevicePixelRatio()

async function setPositionTooltip(userHexagon: Ref<WorldMapHexagon | undefined>) {
  await nextTick()
  if (!userPeer.value || !userHexagon.value || !canvas.value)
    return

  // Canvas dimensions aren't set synchronously
  if (canvas.value.width === 0 || canvas.value.height === 0) {
    setTimeout(() => setPositionTooltip(userHexagon), 100)
    return
  }

  // Must match resetCanvas() transformations exactly
  const containerWidth = canvas.value.width / pixelRatio.value
  const containerHeight = canvas.value.height / pixelRatio.value

  const padding = WORLD_MAP_CANVAS_PADDING
  const availableWidth = containerWidth - 2 * padding
  const availableHeight = containerHeight - 2 * padding

  const scaleX = availableWidth / HEXAGONS_WORLD_MAP_WIDTH_PIXELS
  const scaleY = availableHeight / HEXAGONS_WORLD_MAP_HEIGHT_PIXELS
  const scale = Math.min(scaleX, scaleY)

  const scaledMapWidth = HEXAGONS_WORLD_MAP_WIDTH_PIXELS * scale
  const scaledMapHeight = HEXAGONS_WORLD_MAP_HEIGHT_PIXELS * scale
  const offsetX = (containerWidth - scaledMapWidth) / 2
  const offsetY = (containerHeight - scaledMapHeight) / 2

  const userX = userHexagon.value.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
  const userY = userHexagon.value.top + (HEXAGONS_WORLD_MAP_SCALE / 2)

  // Match canvas transformation: offset then scale
  const transformedUserX = offsetX + (userX * scale)
  const transformedUserY = offsetY + (userY * scale)

  const hexPixelSize = HEXAGONS_WORLD_MAP_SCALE * scale
  const verticalOffset = hexPixelSize * 0.5 - 16

  tooltipPosition.value = {
    transform: `translate(${transformedUserX - 2}px, ${transformedUserY + verticalOffset}px)`,
  }
}

useEventListener(window, 'resize', () => {
  if (userHexagonRef) {
    setPositionTooltip(userHexagonRef)
  }
})

const showTooltip = computed(() => userPeer.value && tooltipPosition.value)

const didYouKnowThatFacts = [
  'Nimiq is a browser-first blockchain',
  'Nimiq 2.0 uses Proof-of-Stake consensus',
  'You are connecting directly to the blockchain',
  'Nimiq supports atomic swaps with Bitcoin, USDC and USDT',
  'Nimiq was founded in 2018',
  'You can use NIM in over 29K locations',
  'Nimiq is a non-profit foundation',
  'You can find us on Twitter or Telegram',
  'Nimiq is a decentralized payment protocol',
]
const currentFact = ref('')

const textMeasureRef = ref<HTMLElement>()
const measuredWidth = useMotionValue(320) // Smaller initial width
const containerWidth = useSpring(measuredWidth, {
  stiffness: 400,
  damping: 30,
})

async function measureFactWidth(text: string) {
  await nextTick()
  if (textMeasureRef.value) {
    textMeasureRef.value.textContent = text
    const rect = textMeasureRef.value.getBoundingClientRect()
    const newWidth = Math.max(rect.width + 48, 300) // Padding + prevent collapse
    measuredWidth.set(newWidth)
  }
}

const { pause: pauseFactsLoop, resume: resumeFactsLoop } = useIntervalFn(() => {
  const newFact = didYouKnowThatFacts[Math.floor(Math.random() * didYouKnowThatFacts.length)]!
  currentFact.value = newFact
  measureFactWidth(newFact)
}, 6000, { immediate: false })

watch(consensus, () => {
  if (consensus.value === 'connecting') {
    resumeFactsLoop()
  }
  else {
    pauseFactsLoop()
    // Container must resize for longer connected message
    if (consensus.value === 'established') {
      const connectedText = `Your browser is now directly connected to ${peers.value.length} peers on the network.`
      measureFactWidth(connectedText)
    }
  }
}, { immediate: true })

// Peer count changes message length
watch(peers, () => {
  if (consensus.value === 'established') {
    const connectedText = `Your browser is now directly connected to ${peers.value.length} peers on the network.`
    measureFactWidth(connectedText)
  }
}, { deep: true })

async function connect() {
  const newFact = didYouKnowThatFacts[Math.floor(Math.random() * didYouKnowThatFacts.length)]!
  currentFact.value = newFact
  measureFactWidth(newFact)
  await launchNetwork()
}
</script>

<template>
  <div ref="containerRef" rounded-8 cursor-pointer relative of-hidden :style="`aspect-ratio: ${HEXAGONS_WORLD_MAP_ASPECT_RATIO}`">
    <div size-full absolute>
      <canvas ref="canvas" h-full w-full />
      <div v-if="showTooltip" left-0 top-0 absolute z-1 :style="tooltipPosition" animate="delay-500 fade-in both">
        <div left="[calc(-50%+2px)]" flex="~ col items-center" class="dark" mt-16 scheme-dark relative>
          <div
            :class="{ 'text-blue': consensus === 'idle',
                      'text-orange': consensus === 'connecting',
                      'text-green': consensus === 'established' }" text-12 translate-y-3.5 i-nimiq:tooltip-triangle
          />
          <div v-if="consensus === 'idle'" layout-id="connect" ring="0.2 blue" flex="~ items-center" rounded-full bg-gradient-blue transition-colors top--1>
            <span text-white font-bold px-16 py-8>
              {{ thisIsYou }}
            </span>
            <div layout-id="connect-label" as="button" text-blue font-bold m-6 px-12 py-5 rounded-full bg-white @click="connect">
              {{ connectLabel }}
            </div>
          </div>
          <div v-else-if="consensus === 'connecting'" layout-id="connect" ring="0.2 orange" flex="~ items-center gap-8" class="bg-gradient-orange" text-white font-semibold px-16 py-8 outline-none rounded-full w-max transition-colors top--3>
            <div layout-id="connect-label" as="span">
              Connecting
            </div>
            <div animate="ease-out scale-in delay-2s" shrink-0 i-nimiq:spinner />
          </div>
          <div v-else-if="consensus === 'established'" layout-id="connect" flex="~ items-center gap-8" class="bg-gradient-green" text-white font-semibold px-16 py-8 outline-none rounded-full w-max transition-colors top--3 z-3>
            <div layout-id="connect-label" as="span">
              <div flex="~ items-center justify-between gap-8">
                <span>
                  Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <motion.div
      v-if="consensus !== 'idle'" :style="{ width: containerWidth,
                                            maxWidth: 'min(420px, calc(100vw - 64px))' }" bottom="0 xl:32" font-semibold mx-auto p-24 rounded-6 bg-white bg-op-6 h-auto transition-height left="50%" transform="translateX(-50%)" absolute z-2 backdrop-blur-24 animate="fade-in-up both delay-1250ms"
    >
      <!-- Measures text to animate container width -->
      <span ref="textMeasureRef" text="f-lg" p-24 invisible pointer-events-none whitespace-nowrap left-0 top-0 absolute>
        {{ consensus === 'connecting' ? currentFact : `Your browser is now directly connected to ${peers.length} peers on the network.` }}
      </span>

      <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y--1lh" enter-to-class="translate-y-0" leave-active-class="transition duration-200 ease-out" leave-from-class="translate-y-0" leave-to-class="translate-y--1lh">
        <p v-if="consensus === 'connecting'" text="neutral-800 11 center" w="[calc(100%-48px)]" top--1.4lh absolute nq-label>
          Did you know that
        </p>
      </transition>
      <transition
        mode="out-in" enter-active-class="transition duration-200 ease-out origin-center-bottom" enter-from-class="transform translate-y-1lh op-0 blur-4 scale-95" enter-to-class="translate-y-0 op-100 blur-0 scale-100"
        leave-active-class="transition duration-200 ease-out origin-center-top" leave-from-class="transform translate-y-0 op-100 scale-100" leave-to-class="translate-y--1lh op-0 scale-95"
      >
        <p v-if="consensus === 'connecting'" :key="currentFact" text="white/60 center f-lg" h-2lh>
          {{ currentFact }}
        </p>
        <p v-else key="connected" text="white/60 center f-lg" h-2lh>
          Your browser is now directly connected to {{ peers.length }} peers on the network.
        </p>
      </transition>
    </motion.div>
  </div>
</template>
