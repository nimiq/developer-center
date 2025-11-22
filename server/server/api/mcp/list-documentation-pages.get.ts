import type { Collections } from '@nuxt/content'
import { queryCollection } from '@nuxt/content/server'
import { z } from 'zod'

const querySchema = z.object({
  module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all').describe('Documentation module to fetch'),
})

export default defineCachedEventHandler(async (event) => {
  // eslint-disable-next-line no-console
  console.log('[list-docs] START - module:', getQuery(event).module)
  const { module } = await getValidatedQuery(event, querySchema.parse)
  // eslint-disable-next-line no-console
  console.log('[list-docs] Validated module:', module)

  let allDocs: any[] = []

  try {
    if (module === 'all') {
      const modules: (keyof Collections)[] = ['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub']
      // eslint-disable-next-line no-console
      console.log('[list-docs] Querying all modules:', modules)
      const results = await Promise.all(modules.map(mod => queryCollection(event, mod).all()))
      allDocs = results.flat()
      // eslint-disable-next-line no-console
      console.log('[list-docs] Total docs found:', allDocs.length)
    }
    else {
      // eslint-disable-next-line no-console
      console.log('[list-docs] Querying single module:', module)
      allDocs = await queryCollection(event, module).all()
      // eslint-disable-next-line no-console
      console.log('[list-docs] Docs found for', module, ':', allDocs.length)
    }
  }
  catch (error) {
    console.error('[list-docs] Query error:', error)
    throw createError({ statusCode: 500, statusMessage: `Error querying docs: ${error}` })
  }

  if (!allDocs || allDocs.length === 0) {
    console.warn('[list-docs] No docs found for module:', module)
    throw createError({ statusCode: 404, statusMessage: `Documentation pages for module '${module}' not found` })
  }

  const mapped = allDocs.map((doc: any) => ({
    title: doc.title || 'Untitled',
    path: doc.path || '',
    description: doc.description || '',
    module: doc.path?.split('/')[1] || 'unknown',
    url: `https://nimiq.com/developers${doc.path || ''}`,
  }))
  // eslint-disable-next-line no-console
  console.log('[list-docs] Returning', mapped.length, 'docs')
  return mapped
}, {
  maxAge: 60 * 60, // 1 hour
  getKey: (event) => {
    const query = getQuery(event)
    return `mcp-documentation-pages-${query.module || 'all'}`
  },
})
