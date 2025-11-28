import type { Collections } from '@nuxt/content'
import { queryCollection } from '@nuxt/content/server'
import { z } from 'zod'

const querySchema = z.object({
  module: z.enum(['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub', 'all']).optional().default('all').describe('Documentation module to fetch'),
})

export default defineEventHandler(async (event) => {
  const { module } = await getValidatedQuery(event, querySchema.parse)

  let allDocs: any[] = []

  if (module === 'all') {
    const modules: (keyof Collections)[] = ['webClient', 'protocol', 'nodes', 'rpc', 'nimiqUtils', 'hub']
    const results = await Promise.all(modules.map(mod => queryCollection(event, mod).all()))
    allDocs = results.flat()
  }
  else {
    allDocs = await queryCollection(event, module).all()
  }

  if (!allDocs || allDocs.length === 0)
    throw createError({ statusCode: 404, statusMessage: `Documentation pages for module '${module}' not found` })

  return allDocs.map((doc: any) => ({
    title: doc.title || 'Untitled',
    path: doc.path || '',
    description: doc.description || '',
    module: doc.path?.split('/')[1] || 'unknown',
    url: `https://nimiq.com/developers${doc.path || ''}`,
  }))
})
