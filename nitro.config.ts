import { defineNitroConfig } from 'nitro/config'

export default defineNitroConfig({
  preset: 'cloudflare_pages',
  srcDir: 'server',
  compatibilityDate: '2025-01-01',

  cloudflare: {
    pages: {
      routes: {
        // Only handle API routes with worker, serve everything else as static
        include: ['/api/*'],
        exclude: [],
      },
    },
  },

  // Serve VitePress static files as public assets
  publicAssets: [
    {
      baseURL: '/',
      dir: '.vitepress/dist',
      maxAge: 0, // Will be set by Cloudflare
    },
  ],
})
