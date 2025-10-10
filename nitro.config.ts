import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  preset: 'cloudflare_pages',
  srcDir: 'server',
  compatibilityDate: '2025-01-01',

  // Serve VitePress static files as public assets
  publicAssets: [
    {
      baseURL: '/',
      dir: '.vitepress/dist',
      maxAge: 0, // Will be set by Cloudflare
    },
  ],
})
