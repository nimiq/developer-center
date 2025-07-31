import type { Ref } from 'vue'
import type { Peer } from '../../types/nimiq'
import { useDevicePixelRatio, useElementSize, useRafFn, watchArray } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import ConsensusBitMap from './ConsensusBitMap'

export const HEXAGONS_WORLD_MAP_WIDTH = 129
export const HEXAGONS_WORLD_MAP_HEIGHT = 52

export const HEXAGONS_WORLD_MAP_WIDTH_PIXELS = 1037
export const HEXAGONS_WORLD_MAP_HEIGHT_PIXELS = 531

export const HEXAGONS_WORLD_MAP_ASPECT_RATIO = HEXAGONS_WORLD_MAP_WIDTH_PIXELS / HEXAGONS_WORLD_MAP_HEIGHT_PIXELS

export const HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE = 1.142
export const HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP = 0.98

// Shared by drawing and tooltip positioning for alignment
export const WORLD_MAP_CANVAS_PADDING = 48

// Previous version doubled the scale causing zoom-in effect

// to render “zoomed‐in”. Removing that factor aligns the hex grid with the container size.
export const HEXAGONS_WORLD_MAP_SCALE = HEXAGONS_WORLD_MAP_WIDTH_PIXELS / (HEXAGONS_WORLD_MAP_WIDTH * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP)

const SPLINE_ANIMATION_DURATION = 2000
const easeOut = (t: number) => 1 - (1 - t) ** 3

function paintUserHexagon(dc: CanvasRenderingContext2D, self: WorldMapHexagon) {
  const scale = HEXAGONS_WORLD_MAP_SCALE
  const halfScale = scale / 2
  const radialGradient = dc.createRadialGradient(self.left + halfScale, self.top + halfScale, scale, self.left + halfScale, self.top + halfScale, 2 * scale)
  const gradient = ['rgb(236, 153, 28)', 'rgb(233, 178, 19)']
  gradient.forEach((color, i) => radialGradient.addColorStop(i, color))
  dc.fillStyle = radialGradient
}

function paintPeerHexagon(dc: CanvasRenderingContext2D, _self: WorldMapHexagon) {
  dc.fillStyle = 'rgba(255,255,255,0.3)'
}
function paintNormalHexagon(dc: CanvasRenderingContext2D, _self: WorldMapHexagon) {
  dc.fillStyle = 'rgba(255,255,255,0.1)'
}

export class WorldMapHexagon {
  public position: { x: number, y: number } = { x: 0, y: 0 }

  public paintHexagon: (dc: CanvasRenderingContext2D, self: WorldMapHexagon) => void = paintNormalHexagon

  constructor(x: number, y: number) {
    this.position.x = x
    this.position.y = y
  }

  public get left() {
    return (
      this.position.x * HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP
      - (this.position.y % 2 === 0 ? 0 : HEXAGONS_WORLD_MAP_SCALE / 2)
    )
  }

  public get top() {
    return (
      this.position.y * HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE
      - 0.5 * HEXAGONS_WORLD_MAP_SCALE
      + 2
    )
  }

  public draw(dc: CanvasRenderingContext2D): boolean {
    if (!dc)
      return false

    dc.lineWidth = 1
    dc.beginPath()
    dc.moveTo(this.left + 0.22 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.04 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.left + 0.298 * HEXAGONS_WORLD_MAP_SCALE,
      this.top + 0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (7 / 6) * Math.PI,
      1.5 * Math.PI,
    )
    dc.lineTo(this.left + 0.71 * HEXAGONS_WORLD_MAP_SCALE, this.top)
    dc.arc(
      this.left + 0.71 * HEXAGONS_WORLD_MAP_SCALE,
      this.top + 0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      1.5 * Math.PI,
      (11 / 6) * Math.PI,
    )
    dc.lineTo(this.left + 0.9875 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.4 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.left + 0.9175 * HEXAGONS_WORLD_MAP_SCALE,
      this.top + 0.445 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (11 / 6) * Math.PI,
      (1 / 6) * Math.PI,
    )
    dc.lineTo(this.left + 0.78 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.85 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.left + 0.71 * HEXAGONS_WORLD_MAP_SCALE,
      this.top + 0.8075 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (1 / 6) * Math.PI,
      0.5 * Math.PI,
    )
    dc.lineTo(this.left + 0.29 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.89 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.left + 0.298 * HEXAGONS_WORLD_MAP_SCALE,
      this.top + 0.8075 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      0.5 * Math.PI,
      (5 / 6) * Math.PI,
    )
    dc.lineTo(this.left + 0.0125 * HEXAGONS_WORLD_MAP_SCALE, this.top + 0.49 * HEXAGONS_WORLD_MAP_SCALE)
    dc.arc(
      this.left + 0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      this.top + 0.445 * HEXAGONS_WORLD_MAP_SCALE,
      0.0825 * HEXAGONS_WORLD_MAP_SCALE,
      (5 / 6) * Math.PI,
      (7 / 6) * Math.PI,
    )
    dc.closePath()
    this.paintHexagon(dc, this)

    dc.fill()

    return false
  }
}

class WorldMapArc {
  public left1: number
  public top1: number
  public left2: number
  public top2: number

  private _state: 'animation-in' | 'steady' | 'animation-out' | 'animation-out-finished' = 'animation-in'
  public get state() { return this._state }

  private _startTime = Date.now()
  private _animation = 0
  public get animation() { return this._animation }

  constructor(from: WorldMapHexagon, to: WorldMapHexagon) {
    this.left1 = from.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
    this.top1 = from.top + (HEXAGONS_WORLD_MAP_SCALE / 2)
    this.left2 = to.left + (HEXAGONS_WORLD_MAP_SCALE / 2)
    this.top2 = to.top + (HEXAGONS_WORLD_MAP_SCALE / 2)
  }

  public remove() {
    this._state = 'animation-out'
    this._startTime = Date.now()
  }

  public draw(dc: CanvasRenderingContext2D, lineWidth: number): boolean {
    if (!dc)
      return false

    const elapsed = Date.now() - this._startTime

    if (this._state === 'animation-in') {
      this._animation = Math.min(elapsed / SPLINE_ANIMATION_DURATION, 1)
      if (this._animation >= 1) {
        this._state = 'steady'
        this._animation = 1
      }
    }
    else if (this._state === 'animation-out') {
      this._animation = Math.max(1 - (elapsed / SPLINE_ANIMATION_DURATION), 0)
      if (this._animation <= 0) {
        this._state = 'animation-out-finished'
        this._animation = 0
        return false // Cleanup finished animations
      }
    }

    if (this._state === 'animation-out-finished') {
      return false
    }

    const progress = this._state === 'animation-out' ? this._animation : easeOut(this._animation)

    // Create parabolic arc with single control point above midpoint
    const midX = (this.left1 + this.left2) / 2
    const midY = (this.top1 + this.top2) / 2
    const distance = Math.sqrt((this.left2 - this.left1) ** 2 + (this.top2 - this.top1) ** 2)

    // Control point positioned above midpoint to create upward parabola
    const controlX = midX
    const controlY = midY - distance * 0.3 // Height of parabola arc

    dc.save()
    dc.globalAlpha = progress * 0.8
    dc.strokeStyle = 'rgba(255, 255, 255, 0.6)'
    dc.lineWidth = lineWidth
    dc.lineCap = 'round'
    dc.beginPath()

    if (progress < 1) {
      // Animate by drawing segments progressively
      const segments = 50
      const targetSegment = Math.floor(progress * segments)

      for (let i = 0; i <= targetSegment; i++) {
        const t = i / segments
        // Quadratic bezier curve formula
        const x = (1 - t) ** 2 * this.left1 + 2 * (1 - t) * t * controlX + t ** 2 * this.left2
        const y = (1 - t) ** 2 * this.top1 + 2 * (1 - t) * t * controlY + t ** 2 * this.top2

        if (i === 0) {
          dc.moveTo(x, y)
        }
        else {
          dc.lineTo(x, y)
        }
      }
    }
    else {
      dc.moveTo(this.left1, this.top1)
      dc.quadraticCurveTo(controlX, controlY, this.left2, this.top2)
    }

    dc.stroke()
    dc.restore()

    return this._state === 'animation-in' || this._state === 'animation-out'
  }
}

export interface DrawHexagonsWorldMapOptions {
  userPeer: Ref<Peer | undefined>
  peers: Ref<Peer[]>
}

export function drawHexagonsWorldMap(canvas: Readonly<Ref<HTMLCanvasElement | undefined>>, options: DrawHexagonsWorldMapOptions, containerElement?: Ref<HTMLElement | undefined>) {
  const container = computed(() => containerElement?.value || canvas.value?.parentElement as HTMLElement)
  const { userPeer, peers } = options
  const { width: containerWidth, height: containerHeight } = useElementSize(container)

  const context = computed(() => canvas.value?.getContext('2d'))

  const hexagons = ref<WorldMapHexagon[]>([])
  for (let x = 0; x < HEXAGONS_WORLD_MAP_WIDTH; x++) {
    for (let y = 0; y < HEXAGONS_WORLD_MAP_HEIGHT; y++) {
      if (ConsensusBitMap[x]?.[y] === 1)
        hexagons.value.push(new WorldMapHexagon(x, y))
    }
  }
  const userHexagon = ref<WorldMapHexagon>()
  watch(userPeer, () => {
    if (!userPeer.value)
      return
    userHexagon.value = hexagons.value.find(({ left: x, top: y }) => x === userPeer.value!.x && y === userPeer.value!.y)
    if (!userHexagon.value) {
      userHexagon.value = new WorldMapHexagon(userPeer.value!.x, userPeer.value!.y)
      hexagons.value.push(userHexagon.value)
    }
    userHexagon.value.paintHexagon = paintUserHexagon
  }, { immediate: true, deep: true })

  const peerHexagons = ref<WorldMapHexagon[]>([])
  const arcs = ref<WorldMapArc[]>([])

  const { pixelRatio } = useDevicePixelRatio()

  function resetCanvas() {
    if (!canvas.value || !context.value || containerWidth.value === 0 || containerHeight.value === 0)
      return

    canvas.value.width = Math.round(containerWidth.value) * pixelRatio.value
    canvas.value.height = Math.round(containerHeight.value) * pixelRatio.value

    context.value.resetTransform()
    context.value.clearRect(0, 0, canvas.value.width, canvas.value.height)

    // Scale to fit with padding
    const padding = WORLD_MAP_CANVAS_PADDING
    const availableWidth = containerWidth.value - 2 * padding
    const availableHeight = containerHeight.value - 2 * padding

    const scaleX = availableWidth / HEXAGONS_WORLD_MAP_WIDTH_PIXELS
    const scaleY = availableHeight / HEXAGONS_WORLD_MAP_HEIGHT_PIXELS
    const scale = Math.min(scaleX, scaleY)

    // Center in remaining space
    const scaledMapWidth = HEXAGONS_WORLD_MAP_WIDTH_PIXELS * scale
    const scaledMapHeight = HEXAGONS_WORLD_MAP_HEIGHT_PIXELS * scale
    const offsetX = (containerWidth.value - scaledMapWidth) / 2
    const offsetY = (containerHeight.value - scaledMapHeight) / 2
    context.value.scale(pixelRatio.value, pixelRatio.value)
    context.value.translate(offsetX, offsetY)
    context.value.scale(scale, scale)
  }

  resetCanvas()

  const { pause, resume: draw } = useRafFn(() => {
    if (!context.value)
      return

    resetCanvas()
    if (!context.value)
      return // resetCanvas can clear context

    const stillAnimating = arcs.value.map(arc => arc.draw(context.value!, 1)).some(animating => animating)
    hexagons.value.forEach(hexagon => hexagon.draw(context.value!))
    if (!stillAnimating) {
      // Prevent memory leaks from finished animations
      arcs.value = arcs.value.filter(arc => arc.state !== 'animation-out-finished')
      pause()
    }
  })

  watch([containerWidth, containerHeight, userHexagon], draw, { deep: true })
  watchArray(peers, (_newPeers, _oldPeers, addedPeers, removedPeers) => {
    addedPeers.forEach((peer) => {
      let hexagon = hexagons.value.find(({ position: { x, y } }) => x === peer.x && y === peer.y)
      if (!hexagon) {
        hexagon = new WorldMapHexagon(peer.x, peer.y)
        hexagons.value.push(hexagon)
      }
      hexagon.paintHexagon = paintPeerHexagon
      if (userHexagon.value)
        arcs.value.push(new WorldMapArc(userHexagon.value, hexagon))
      peerHexagons.value.push(hexagon)
    })

    removedPeers.forEach((peer) => {
      const hexagon = peerHexagons.value.find(({ position }) => position.x === peer.x && position.y === peer.y)
      if (!hexagon)
        return
      const arc = arcs.value.find(arc => arc.left2 === hexagon.left + (HEXAGONS_WORLD_MAP_SCALE / 2) && arc.top2 === hexagon.top + (HEXAGONS_WORLD_MAP_SCALE / 2))
      if (!arc)
        return
      if (arc.state === 'animation-out' && arc.animation !== 1) {
        arcs.value = arcs.value.filter(currentArc => currentArc !== arc)
        const removedHexagons = peerHexagons.value.filter(peerHexagon => peerHexagon.position.x === peer.x && peerHexagon.position.y === peer.y)
        removedHexagons.forEach(removedHexagon => removedHexagon.paintHexagon = paintNormalHexagon)
        peerHexagons.value = peerHexagons.value.filter(peerHexagon => !removedHexagons.includes(peerHexagon))
        return
      }
      arc.remove()
    })

    draw()
  })

  return {
    userHexagon,
  }
}
