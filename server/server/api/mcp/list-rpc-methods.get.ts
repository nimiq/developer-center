import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'
import { z } from 'zod'

const querySchema = z.object({
  tags: z.string().optional().describe('Comma-separated list of tags to filter by (e.g., consensus,wallet)'),
})

export default defineCachedEventHandler(async (event) => {
  const { tags } = await getValidatedQuery(event, querySchema.parse)

  const specPath = resolve(process.cwd(), '../.vitepress/rpc/openrpc-document.json')
  const spec = JSON.parse(await readFile(specPath, 'utf-8'))

  let methods = spec.methods || []

  // Filter by tags if provided
  if (tags) {
    const tagList = tags.split(',').map(t => t.trim().toLowerCase())
    methods = methods.filter((method: any) => {
      const methodTags = (method.tags || []).map((t: any) => t.name.toLowerCase())
      return tagList.some(tag => methodTags.includes(tag))
    })
  }

  return methods.map((method: any) => ({
    name: method.name,
    description: method.description || '',
    tags: (method.tags || []).map((t: any) => t.name),
    params: (method.params || []).map((p: any) => ({
      name: p.name,
      type: p.schema?.type || 'unknown',
      required: p.required || false,
      description: p.description || '',
    })),
    result: {
      type: method.result?.schema?.type || 'unknown',
      description: method.result?.description || '',
    },
  }))
}, {
  maxAge: 60 * 60, // 1 hour
  getKey: (event) => {
    const query = getQuery(event)
    return `mcp-rpc-methods-${query.tags || 'all'}`
  },
})
