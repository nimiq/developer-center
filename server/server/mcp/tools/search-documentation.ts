import { z } from 'zod'

export default defineMcpTool({
  description: 'Search documentation to find pages about a topic. Use when user asks "how does X work", "explain Y", or describes a concept. Returns matching page URLs.',
  inputSchema: {
    topic: z.string().describe('Topic to search for'),
    module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all').describe('Filter by module'),
  },
  handler: async ({ topic, module }) => {
    const pages = await $fetch('/api/mcp/list-documentation-pages', { query: { module } })
    return textResult(`Find documentation pages about "${topic}" from: ${JSON.stringify(pages)}`)
  },
})
