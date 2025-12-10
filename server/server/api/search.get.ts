import { z } from 'zod'
import { searchDocs } from '../utils/search-docs'

const querySchema = z.object({
  q: z.string().min(1).describe('Search query'),
  module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all'),
  limit: z.coerce.number().min(1).max(50).optional().default(10),
})

export default defineEventHandler(async (event) => {
  const { q, module, limit } = await getValidatedQuery(event, querySchema.parse)

  const results = await searchDocs(event, q, { module, limit })

  // Truncate content for API response
  return results.map(r => ({
    ...r,
    content: r.content.slice(0, 200),
  }))
})
