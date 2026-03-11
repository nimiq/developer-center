import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { cwd } from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

const baseURL = '/'
const contentRoot = join(cwd(), 'content')

function slugify(value: string) {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function getFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      return getFiles(fullPath)
    }

    return entry.isFile() ? [fullPath] : []
  })
}

function isPublicDocFile(filePath: string) {
  const relativePath = relative(contentRoot, filePath).replace(/\\/g, '/')
  if (!relativePath.endsWith('.md')) {
    return false
  }

  if (['README.md', 'LICENSE.md', 'rpc/methods/[method].md'].includes(relativePath)) {
    return false
  }

  return !relativePath.split('/').some(segment => segment.startsWith('_'))
}

function contentFileToRoute(filePath: string) {
  const relativePath = relative(contentRoot, filePath).replace(/\\/g, '/')
  const withoutExtension = relativePath.replace(/\.md$/, '')
  const normalized = withoutExtension.toLowerCase()

  if (normalized === 'index') {
    return '/'
  }

  if (normalized.endsWith('/index')) {
    return `/${normalized.slice(0, -'/index'.length)}/`
  }

  return `/${normalized}`
}

const contentRoutes = getFiles(contentRoot)
  .filter(isPublicDocFile)
  .map(contentFileToRoute)

const openRpcDocument = JSON.parse(readFileSync(join(cwd(), 'data/openrpc-document.json'), 'utf8')) as { methods?: Array<{ name: string }> }
const rpcMethodRoutes = (openRpcDocument.methods || []).map(method => `/rpc/methods/${slugify(method.name)}`)
const prerenderRoutes = Array.from(new Set([...contentRoutes, ...rpcMethodRoutes]))
const enableMcp = process.env.DEPLOYMENT_MODE !== 'production'

export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/eslint'],
  ssr: true,
  devtools: {
    enabled: true,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  app: {
    baseURL,
    head: {
      meta: [
        { name: 'theme-color', content: '#f6b221' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Nimiq Developer Center' },
        { property: 'og:description', content: 'Guides, resources and tips on how to create with Nimiq. Start building the future now!' },
        { property: 'og:url', content: 'https://nimiq.com/developers' },
        { property: 'og:image', content: `${baseURL.replace(/\/$/, '')}/og-image.png` },
        { property: 'og:site_name', content: 'Nimiq Developer Center' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nimiq' },
        { name: 'twitter:creator', content: '@nimiq' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseURL}favicons/apple-touch-icon.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseURL}favicons/favicon-32x32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseURL}favicons/favicon-16x16.png` },
        { rel: 'mask-icon', href: `${baseURL}favicons/safari-pinned-tab.svg`, color: '#eaaf0c' },
        { rel: 'shortcut icon', href: `${baseURL}favicons/favicon.ico` },
      ],
    },
  },
  css: ['~/assets/css/main.css', 'katex/dist/katex.min.css'],
  compatibilityDate: '2025-07-22',
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    cloudflare: {
      deployConfig: true,
      wrangler: {
        name: 'developer-center-dev-worker',
      },
    },
    preset: 'cloudflare_module',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
      routes: prerenderRoutes,
    },
    routeRules: {
      '/api/**': { cors: true },
    },
  },
  site: {
    url: 'https://nimiq.com',
    name: 'Nimiq Developer Center',
  },
  robots: {
    robotsTxt: false,
  },
  llms: {
    domain: 'https://nimiq.com',
  },
  icon: {
    provider: 'iconify',
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'md', 'yaml'],
        },
        remarkPlugins: { 'remark-math': {} },
        rehypePlugins: { 'rehype-katex': {} },
      },
    },
  },
  ui: {
    fonts: false,
    colorMode: true,
    content: false,
    mdc: true,
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
    },
  },
  vite: {
    plugins: [wasm(), topLevelAwait()],
  },
  mcp: {
    enabled: enableMcp,
  },
} as any)
