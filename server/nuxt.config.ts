import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxthub/core',
    '@nuxtjs/mcp-toolkit',
    '@nuxt/eslint',
  ],
  hub: { database: 'sqlite' },
  mcp: {
    name: 'nimiq',
    version: '1.0.0',
    route: '/mcp',
    browserRedirect: 'https://nimiq.com/developers/working-with-ai/mcp',
  },
  nitro: { preset: 'cloudflare-module' },
  eslint: { config: { standalone: false } },
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  compatibilityDate: '2025-11-16',
})
