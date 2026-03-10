import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import consola from 'consola'
import { $fetch } from 'ofetch'
import { readPackageJSON } from 'pkg-types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dataDir = join(__dirname, '../data')
const jsonFilePath = join(dataDir, 'openrpc-document.json')
const versionFile = join(dataDir, '.openrpc-version')

async function fetchOpenRpcDocument() {
  const fallbackVersion = existsSync(versionFile) ? readFileSync(versionFile, 'utf-8').trim() : ''
  let coreVersion = fallbackVersion

  try {
    const pkg = await readPackageJSON(join(__dirname, '../node_modules/@nimiq/core'))
    coreVersion = pkg.version || fallbackVersion
  }
  catch {
    coreVersion = fallbackVersion
  }

  if (!coreVersion) {
    throw new Error('Could not determine @nimiq/core version')
  }

  // @nimiq/core v2.x.y maps to RPC release v1.x.y
  const rpcVersion = coreVersion.replace(/^2/, '1')

  // Skip if already downloaded for this version
  if (existsSync(versionFile) && readFileSync(versionFile, 'utf-8').trim() === rpcVersion && existsSync(jsonFilePath)) {
    consola.info(`OpenRPC document v${rpcVersion} already downloaded`)
    return
  }

  const tag = `v${rpcVersion}`
  const url = `https://github.com/nimiq/core-rs-albatross/releases/download/${tag}/openrpc-document.json`

  consola.info(`Downloading OpenRPC document ${tag}...`)
  mkdirSync(dataDir, { recursive: true })

  const document = await $fetch(url, { responseType: 'json' })
  writeFileSync(jsonFilePath, JSON.stringify(document, null, 2))
  writeFileSync(versionFile, rpcVersion)

  consola.success(`OpenRPC document ${tag} saved to data/openrpc-document.json`)
}

fetchOpenRpcDocument().catch((error) => {
  consola.error(error)
  throw error
})
