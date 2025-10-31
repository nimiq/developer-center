import { defineLoader } from 'vitepress'

export interface BlockExplorer {
  name: string
  description: string
  link: string
  logo: string
  developer: string | null
  network: 'mainnet' | 'testnet'
}

export interface BlockExplorersData {
  mainnet: BlockExplorer[]
  testnet: BlockExplorer[]
}

declare const data: BlockExplorersData
export { data }

export default defineLoader({
  async load(): Promise<BlockExplorersData> {
    const response = await fetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-explorers.json')

    if (!response.ok) {
      throw new Error(`Failed to fetch block explorers data: ${response.statusText}`)
    }

    const rawData = await response.json() as { mainnet: BlockExplorer[], testnet: BlockExplorer[] }

    if (!rawData.mainnet || !rawData.testnet) {
      throw new Error('Invalid block explorers data structure')
    }

    return rawData
  },
})
