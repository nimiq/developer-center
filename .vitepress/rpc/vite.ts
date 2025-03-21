import type { Plugin } from 'vite'
import { mkdirSync, writeFileSync } from 'node:fs'
import { cwd } from 'node:process'
import { $fetch } from 'ofetch'
import { join } from 'pathe'
import { devDependencies } from '../../package.json'

export function RpcDocsGeneratorPlugin(): Plugin {
  // The @nimiq/core version provides the same version as RPC version with the difference of the major.
  const version = devDependencies['@nimiq/core'].replace('^2', 'v1')
  const openRpcDocumentUrl = `https://github.com/nimiq/core-rs-albatross/releases/download/${version}/openrpc-document.json`
  const vitepressDir = join(cwd(), '.vitepress')
  const rpcDir = join(vitepressDir, 'rpc')
  const jsonFilePath = join(rpcDir, 'openrpc-document.json')

  return {
    name: 'rpc-docs-generator',
    async buildStart() {
      mkdirSync(rpcDir, { recursive: true })
      try {
        const json = await $fetch(openRpcDocumentUrl, { responseType: 'json' })
        const jsonVersion = json.info.version
        if (jsonVersion !== version)
          this.warn(`[RPC-docs] Updating to new version ${jsonVersion} from ${version}`)
        writeFileSync(jsonFilePath, JSON.stringify(json, null, 2), { flush: true })
        this.info(`[RPC-docs]: ${jsonFilePath}`)
      }
      catch (err) {
        this.error(`Failed to fetch OpenRPC document from ${openRpcDocumentUrl}: ${err}`)
      }
    },
  }
}
