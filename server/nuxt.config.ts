export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxthub/core', '@nuxtjs/mcp-toolkit'],
  hub: { database: 'sqlite' },
  nitro: { preset: 'cloudflare-module' },
  mcp: {
    name: 'nimiq',
    version: '1.0.0',
    route: '/mcp',
    browserRedirect: 'https://nimiq.com/developers/working-with-ai/mcp',
  },
  compatibilityDate: '2025-11-16',
})
