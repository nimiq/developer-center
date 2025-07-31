export interface LatLng {
  lat: number
  lng: number
}

export interface GeoIpResponse {
  location?: {
    longitude?: number
    latitude?: number
  }
  country?: string
  city?: string
}

export function useGeoIp() {
  async function locate(host?: string): Promise<LatLng> {
    const url = new URL('https://geoip.nimiq-network.com:8443/v1/locate')
    if (host)
      url.searchParams.set('host', host)

    const response = await fetch(url.href)
    if (!response.ok) {
      throw new Error('Failed to fetch GeoIP data')
    }

    const res = await response.json() as GeoIpResponse
    const { location } = res
    if (!location || !location.latitude || !location.longitude)
      throw new Error('Invalid GeoIP response')

    return { lat: location.latitude, lng: location.longitude }
  }

  return {
    locate,
  }
}
