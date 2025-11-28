import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { encode } from '@toon-format/toon'

export default defineMcpResource({
  description: 'Complete OpenRPC specification document containing all 125 Nimiq JSON-RPC methods with schemas, parameters, return types, examples, and error codes. Use to understand available RPC methods, their exact parameter schemas, or generate type-safe API clients. Returns full OpenRPC 1.3 specification in TOON format for token efficiency.',
  uri: 'resource://nimiq/open-rpc-specification-document',
  metadata: { title: 'Nimiq JSON-RPC API Specification' },
  cache: '1h',
  handler: async (uri) => {
    const specPath = resolve(process.cwd(), '../.vitepress/rpc/openrpc-document.json')
    const spec = JSON.parse(await readFile(specPath, 'utf-8'))
    return { contents: [{ uri: uri.href, mimeType: 'text/plain', text: encode(spec) }] }
  },
})
