import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { encode } from '@toon-format/toon'
import { z } from 'zod'

export default defineMcpTool({
  description: 'Returns RPC method metadata filtered by tags. ONLY use when you already know the tag/category. For finding which method to use, use search_rpc_methods instead. Available tags: consensus, wallet, validator, blockchain, mempool, network, zkp.',
  inputSchema: {
    tags: z.string().optional().describe('Comma-separated tags to filter (e.g., "consensus,wallet")'),
  },
  cache: '1h',
  handler: async ({ tags }) => {
    const specPath = resolve(process.cwd(), '../.vitepress/rpc/openrpc-document.json')
    const spec = JSON.parse(await readFile(specPath, 'utf-8'))
    let methods = spec.methods || []
    if (tags) {
      const tagList = tags.split(',').map((t: string) => t.trim().toLowerCase())
      methods = methods.filter((m: any) => (m.tags || []).some((t: any) => tagList.includes(t.name.toLowerCase())))
    }
    const result = methods.map((m: any) => ({
      name: m.name,
      description: m.description || '',
      tags: (m.tags || []).map((t: any) => t.name),
      params: (m.params || []).map((p: any) => ({ name: p.name, type: p.schema?.type || 'unknown', required: p.required || false })),
    }))
    return { content: [{ type: 'text', text: encode(result) }] }
  },
})
