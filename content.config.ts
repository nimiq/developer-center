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
        exclude: ['index.md', 'README.md', 'LICENSE.md', 'rpc/methods/[method].md'],
      },
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
        layout: z.string().optional(),
        outline: z.any().optional(),
        sidebar: z.any().optional(),
        links: z.any().optional(),
        navigation: z.any().optional(),
      }).catchall(z.any()),
    }),
  },
})
