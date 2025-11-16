import { queryCollection } from '@nuxt/content/server'
import { z } from 'zod'

const querySchema = z.object({
  path: z.string().min(1).describe('Documentation page path (e.g., /web-client/getting-started)'),
})

export default defineCachedEventHandler(async (event) => {
  const { path } = await getValidatedQuery(event, querySchema.parse)

  // Extract module from path (e.g., /web-client/getting-started -> webClient)
  const parts = path.split('/').filter(Boolean)
  if (parts.length < 2)
    throw createError({ statusCode: 400, statusMessage: 'Invalid path format. Expected /module/page' })

  // Map kebab-case to camelCase module names
  const moduleMap: Record<string, string> = {
    'web-client': 'webClient',
    'protocol': 'protocol',
    'nodes': 'nodes',
    'rpc': 'rpc',
    'nimiq-utils': 'nimiqUtils',
    'hub': 'hub',
  }

  const moduleName = moduleMap[parts[0]]
  if (!moduleName)
    throw createError({ statusCode: 400, statusMessage: `Unknown module: ${parts[0]}` })

  try {
    const doc = await queryCollection(event, moduleName).where({ path }).first()
    if (!doc)
      throw createError({ statusCode: 404, statusMessage: `Documentation page not found: ${path}` })

    return {
      title: doc.title || 'Untitled',
      description: doc.description || '',
      path: doc.path || path,
      module: moduleName,
      content: doc.body || '',
      url: `https://nimiq.com/developers${path}`,
    }
  }
  catch (error: any) {
    if (error.statusCode)
      throw error
    throw createError({ statusCode: 404, statusMessage: `Documentation page not found: ${path}` })
  }
}, {
  maxAge: 60 * 60, // 1 hour
  getKey: (event) => {
    const query = getQuery(event)
    return `mcp-documentation-page-${query.path}`
  },
})
