import type { Plugin } from 'vite'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { cwd } from 'node:process'
import { $fetch } from 'ofetch'
import { join } from 'pathe'
import { parse } from 'yaml'

export function RpcDocsGeneratorPlugin(): Plugin {
  // The @nimiq/core version provides the same version as RPC version with the difference of the major.
  // Read from pnpm-workspace.yaml catalog instead of package.json
  let version: string
  const vitepressDir = join(cwd(), '.vitepress')
  const rpcDir = join(vitepressDir, 'rpc')
  const jsonFilePath = join(rpcDir, 'openrpc-document.json')

  // Flag to ensure we only download once per session
  let hasDownloaded = false

  return {
    name: 'rpc-docs-generator',
    async buildStart() {
      // Load version from catalog on first run
      if (!version) {
        const workspaceYamlContent = readFileSync(join(cwd(), 'pnpm-workspace.yaml'), 'utf-8')
        const workspaceYaml = parse(workspaceYamlContent)
        const coreVersion = workspaceYaml.catalog['@nimiq/core']
        version = coreVersion.replace('^2', 'v1')
      }

      const openRpcDocumentUrl = `https://github.com/nimiq/core-rs-albatross/releases/download/${version}/openrpc-document.json`

      // Skip if we've already downloaded in this session
      if (hasDownloaded)
        return

      mkdirSync(rpcDir, { recursive: true })

      // Check if file already exists and if the version matches
      let existingVersion = null
      if (existsSync(jsonFilePath)) {
        try {
          const existingData = JSON.parse(readFileSync(jsonFilePath, 'utf-8'))
          existingVersion = existingData.info?.version

          // If the existing version matches, no need to download again
          if (existingVersion === version) {
            this.info(`[RPC-docs]: Using existing OpenRPC document (version ${existingVersion})`)
            hasDownloaded = true
            return
          }
        }
        catch (err) {
          this.warn(`[RPC-docs]: Error reading existing OpenRPC document: ${err}`)
        }
      }

      try {
        const json = await $fetch(openRpcDocumentUrl, { responseType: 'json' })
        const jsonVersion = json.info.version
        if (jsonVersion !== version)
          this.warn(`[RPC-docs] Updating to new version ${jsonVersion} from ${version}`)

        writeFileSync(jsonFilePath, JSON.stringify(json, null, 2), { flush: true })
        this.info(`[RPC-docs]: Downloaded and saved OpenRPC document to ${jsonFilePath}`)
        hasDownloaded = true
      }
      catch (err) {
        this.error(`Failed to fetch OpenRPC document from ${openRpcDocumentUrl}: ${err}`)
      }
    },
  }
}
