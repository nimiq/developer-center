import { resolve } from 'node:path'
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const docsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
})

const tutorialSchema = z.object({
  type: z.enum(['lesson', 'part']).optional(),
  title: z.string().optional(),
  focus: z.string().optional(),
  previews: z.boolean().optional(),
  terminal: z.object({
    open: z.boolean().optional(),
    activePanel: z.number().optional(),
    panels: z.array(z.string()).optional(),
  }).optional(),
})

export default defineContentConfig({
  collections: {
    webClient: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/_*.md'],
        cwd: resolve(__dirname, '../web-client'),
        prefix: '/web-client',
      },
      schema: docsSchema,
    }),
    protocol: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/_*.md'],
        cwd: resolve(__dirname, '../protocol'),
        prefix: '/protocol',
      },
      schema: docsSchema,
    }),
    nodes: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/_*.md'],
        cwd: resolve(__dirname, '../nodes'),
        prefix: '/nodes',
      },
      schema: docsSchema,
    }),
    rpc: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/_*.md'],
        cwd: resolve(__dirname, '../rpc'),
        prefix: '/rpc',
      },
      schema: docsSchema,
    }),
    nimiqUtils: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/_*.md'],
        cwd: resolve(__dirname, '../nimiq-utils'),
        prefix: '/nimiq-utils',
      },
      schema: docsSchema,
    }),
    hub: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/_*.md'],
        cwd: resolve(__dirname, '../hub'),
        prefix: '/hub',
      },
      schema: docsSchema,
    }),
    tutorials: defineCollection({
      type: 'data',
      source: {
        include: 'src/content/tutorial/**',
        repository: 'https://github.com/nimiq/tutorial',
        prefix: '/tutorials',
      },
      schema: tutorialSchema,
    }),
  },
})
