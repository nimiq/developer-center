import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  preset: 'cloudflare_pages',
  srcDir: '.vitepress/server',
  compatibilityDate: '2025-01-01',

  cloudflare: {
    pages: {
      routes: {
        include: ['/api/*'],
        exclude: [],
      },
    },
    nodeCompat: true,
  },
})
