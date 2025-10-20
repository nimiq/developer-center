import { defineLoader } from 'vitepress'

export interface RpcServer {
  name: string
  endpoint: string
  maintainer: string
  statusLink: string | null
  network: 'mainnet' | 'testnet'
  description: string
}

export interface RpcServersData {
  mainnet: RpcServer[]
  testnet: RpcServer[]
}

declare const data: RpcServersData
export { data }

export default defineLoader({
  async load(): Promise<RpcServersData> {
    const response = await fetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/rpc-servers.json')

    if (!response.ok) {
      throw new Error(`Failed to fetch RPC servers data: ${response.statusText}`)
    }

    const data = await response.json() as RpcServersData

    // Validate the data structure
    if (!data.mainnet || !data.testnet) {
      throw new Error('Invalid RPC servers data structure')
    }

    return data
  },
})
