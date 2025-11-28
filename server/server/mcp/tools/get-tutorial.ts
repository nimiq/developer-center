import { z } from 'zod'

export default defineMcpTool({
  description: 'Fetch full content of a specific Nimiq tutorial by slug. Returns title, description, type, complete tutorial content, and URL. Use after list_tutorials to access step-by-step instructions.',
  inputSchema: {
    slug: z.string().min(1).describe('Tutorial slug from list_tutorials (e.g., first-transaction, wallet-integration)'),
  },
  cache: '1h',
  handler: async ({ slug }) => {
    const tutorial = await $fetch('/api/mcp/get-tutorial', { query: { slug } })
    return jsonResult(tutorial)
  },
})
