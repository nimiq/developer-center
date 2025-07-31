import { HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP, HEXAGONS_WORLD_MAP_SCALE, HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE, HEXAGONS_WORLD_MAP_WIDTH_PIXELS } from './drawHexagonsWorldMapCanvas'

export interface LatLng { lat: number, lng: number }

class RobinsonProjection {
  private static X = [0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851, 0.814752, 0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645, 0.67777182, 0.64475739, 0.60987582, 0.57134484, 0.52729731, 0.48562614, 0.45167814]
  private static Y = [0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556, 0.5868982, 0.67182264, 0.75336633, 0.83518048, 0.91537187, 0.99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062, 1.31998003, 1.3523]

  private static EPS = 1e-8
  private static INTERVAL = 5
  private static pi = Math.PI
  private static radians = RobinsonProjection.pi / 180

  public static project(width: number, { lat, lng }: LatLng) {
    const r = width / 5.332539516

    const lI = Math.max(Math.floor((Math.abs(lat) - RobinsonProjection.EPS) / RobinsonProjection.INTERVAL))
    const hI = lI + 1
    const ratio = (Math.abs(lat) - lI * RobinsonProjection.INTERVAL) / RobinsonProjection.INTERVAL

    const xDist = RobinsonProjection.X[hI]! - RobinsonProjection.X[lI]!
    const yDist = RobinsonProjection.Y[hI]! - RobinsonProjection.Y[lI]!
    let x = (xDist * ratio + RobinsonProjection.X[lI]!) * (Math.abs(lng) * RobinsonProjection.radians)
    x = lng < 0 ? -x : x
    let y = yDist * ratio + RobinsonProjection.Y[lI]!
    y = lat < 0 ? -y : y

    return {
      x: x * r,
      y: y * r,
    }
  }
}

export function getHexagonCoords(lngLat: LatLng): { x: number, y: number } {
  // Must compute on full map before cropping
  const fullMapWidth = 1.0946808510638297 * HEXAGONS_WORLD_MAP_WIDTH_PIXELS
  const fullMapHeight = fullMapWidth / 1.97165551906973 // RobinsonProjection maps have a fixed aspect ratio
  const point = RobinsonProjection.project(fullMapWidth, lngLat)
  // Translate from center origin to top-left
  point.x = fullMapWidth / 2 + point.x
  point.y = fullMapHeight / 2 - point.y
  // Adjust for cropping and scaling
  point.x = Math.max(0, point.x - 0.07045675413022352 * fullMapWidth)
  point.y = Math.max(0, point.y - 0.012380952380952381 * fullMapHeight)

  const xHexagon = Math.floor(point.x / (HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_HEIGHT_HORIZONTAL_HEXAGON_OVERLAP))
  const off = xHexagon % 2 === 0 ? 0.5 : 0

  return {
    x: xHexagon,
    y: Math.floor((point.y + 0.5 * HEXAGONS_WORLD_MAP_SCALE) / (HEXAGONS_WORLD_MAP_SCALE * HEXAGONS_WORLD_MAP_VERTICAL_HEXAGON_DISTANCE) - off),
  }
}
