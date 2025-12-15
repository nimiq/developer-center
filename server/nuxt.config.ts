import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxthub/core', '@nuxt/eslint'],
  hub: { db: 'sqlite' },
  routeRules: {
    '/api/**': { cors: true, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } },
  },
  eslint: { config: { standalone: false } },
  runtimeConfig: { openaiApiKey: process.env.OPENAI_API_KEY },
  compatibilityDate: '2025-11-16',
})
