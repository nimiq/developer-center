import { queryCollection } from '@nuxt/content/server'
import { z } from 'zod'

const querySchema = z.object({
  slug: z.string().min(1).describe('Tutorial slug (e.g., first-transaction)'),
})

export default defineEventHandler(async (event) => {
  const { slug } = await getValidatedQuery(event, querySchema.parse)

  const tutorial = await queryCollection(event, 'tutorials').where({ stem: slug }).first()
  if (!tutorial)
    throw createError({ statusCode: 404, statusMessage: `Tutorial not found: ${slug}` })

  return {
    title: tutorial.title || 'Untitled',
    description: tutorial.description || '',
    slug: tutorial.stem || slug,
    type: tutorial.type || 'lesson',
    content: tutorial.body || '',
    url: `https://tutorial.nimiq.com/${slug}`,
  }
})
