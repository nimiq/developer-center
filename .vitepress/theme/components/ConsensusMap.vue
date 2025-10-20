<script setup lang="ts">
import type { Client, PlainBlock } from '@nimiq/core'
import type { CSSProperties, Ref } from 'vue'
import type { Peer } from '../types/nimiq'
import type { WorldMapHexagon } from '../utils/consensus-map/drawHexagonsWorldMapCanvas'
import init, * as Nimiq from '@nimiq/core/web'
import { until, useDevicePixelRatio, useEventListener } from '@vueuse/core'
import { computed, nextTick, onMounted, ref } from 'vue'
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
    config.syncMode('pico')
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

async function connect() {
  await launchNetwork()
}
</script>

<template>
  <div ref="containerRef" rounded-8 relative of-hidden :style="`aspect-ratio: ${HEXAGONS_WORLD_MAP_ASPECT_RATIO}`" outline="1.5px offset--1.5px ~ white/10">
    <div size-full absolute>
      <canvas ref="canvas" h-full w-full />
      <div v-if="showTooltip" left-0 top-0 absolute z-1 :style="tooltipPosition" animate="delay-500 fade-in both">
        <div left="[calc(-50%+2px)]" flex="~ col items-center" mt-16 relative>
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
                  Connected to {{ peers.length }} {{ peers.length === 1 ? 'peer' : 'peers' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
