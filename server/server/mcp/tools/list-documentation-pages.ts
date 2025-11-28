import { encode } from '@toon-format/toon'
import { z } from 'zod'

export default defineMcpTool({
  description: 'Returns index of docs for specific module. ONLY use when user explicitly names the module ("web-client", "protocol", etc). For finding docs on topic, use search_documentation instead.',
  inputSchema: {
    module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all').describe('Filter by documentation module'),
  },
  cache: '1h',
  handler: async ({ module }) => {
    const docs = await $fetch('/api/mcp/list-documentation-pages', { query: { module } })
    return { content: [{ type: 'text', text: encode(docs) }] }
  },
})
