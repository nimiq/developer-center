import { z } from 'zod'

export default defineMcpTool({
  description: 'Fetches complete markdown content of specific doc page. Returns full implementation guides, API references, concept explanations. REQUIRES exact path from list_documentation_pages or search_documentation. Path format: /module/page',
  inputSchema: {
    path: z.string().min(1).describe('Exact path (e.g., /web-client/getting-started, /protocol/validators/staking)'),
  },
  cache: '1h',
  handler: async ({ path }) => {
    const doc = await $fetch('/api/mcp/get-documentation-page', { query: { path } })
    return jsonResult(doc)
  },
})
