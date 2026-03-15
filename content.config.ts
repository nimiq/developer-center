import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: { include: 'index.md' },
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['index.md', 'README.md', 'LICENSE.md', 'rpc/methods/[method].md', '**/_*.md'],
      },
      schema: z.object({
        icon: z.string().optional(),
        layout: z.string().optional(),
      }).catchall(z.any()),
    }),
  },
})
