import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  preset: 'cloudflare_pages',
  srcDir: '.vitepress/server',
  compatibilityDate: '2025-01-01',

  routeRules: {
    '/api/**': { proxy: true },
  },
})
