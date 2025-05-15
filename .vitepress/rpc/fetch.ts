import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { cwd } from 'node:process'
import consola from 'consola'
import { $fetch } from 'ofetch'
import { join } from 'pathe'
import { devDependencies } from '../../package.json'

// Flag to ensure we only download once per session
let hasDownloaded = false

// The @nimiq/core version provides the same version as RPC version with the difference of the major.
const version = devDependencies['@nimiq/core'].replace('^2', 'v1')
const openRpcDocumentUrl = `https://github.com/nimiq/core-rs-albatross/releases/download/${version}/openrpc-document.json`
const vitepressDir = join(cwd(), '.vitepress')
const rpcDir = join(vitepressDir, 'rpc')
const jsonFilePath = join(rpcDir, 'openrpc-document.json')

export async function fetchOpenRpcDocument() {
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
        consola.info(`[RPC-docs]: Using existing OpenRPC document (version ${existingVersion})`)
        hasDownloaded = true
        return
      }
    }
    catch (err) {
      consola.warn(`[RPC-docs]: Error reading existing OpenRPC document: ${err}`)
    }
  }

  try {
    const json = await $fetch(openRpcDocumentUrl, { responseType: 'json' })
    const jsonVersion = json.info.version
    if (jsonVersion !== version)
      consola.warn(`[RPC-docs] Updating to new version ${jsonVersion} from ${version}`)

    writeFileSync(jsonFilePath, JSON.stringify(json, null, 2), { flush: true })
    consola.success(`[RPC-docs]: Downloaded and saved OpenRPC document to ${jsonFilePath}`)
    hasDownloaded = true
  }
  catch (err) {
    consola.error(`Failed to fetch OpenRPC document from ${openRpcDocumentUrl}: ${err}`)
  }
}
