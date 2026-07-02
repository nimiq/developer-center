import { readdirSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, relative } from 'node:path'
import { cwd, env } from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

const nimiqIcons = createRequire(import.meta.url)('nimiq-icons/icons.json')

const baseURL = '/'
const contentRoot = join(cwd(), 'content')
const cloudflareAccountId = env.CLOUDFLARE_ACCOUNT_ID ?? 'cf9baad7d68d7ee717f3339731e81dfb'
const cloudflareContentDbId = env.CLOUDFLARE_CONTENT_DB_ID ?? '8f747fba-1896-4e11-8081-5118f7a6f39f'

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

function shouldPrerenderRoute(route: string) {
  return !route.startsWith('/rpc/') && !route.startsWith('/web-client/reference/')
}

const contentRoutes = getFiles(contentRoot)
  .filter(isPublicDocFile)
  .map(contentFileToRoute)

const openRpcDocument = JSON.parse(readFileSync(join(cwd(), 'data/openrpc-document.json'), 'utf8')) as { methods?: Array<{ name: string }> }
const rpcMethodRoutes = (openRpcDocument.methods || []).map(method => `/rpc/methods/${slugify(method.name)}`)
const prerenderRoutes = Array.from(new Set([...contentRoutes, ...rpcMethodRoutes]))
  .filter(shouldPrerenderRoute)

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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600;700&display=swap',
        },
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
        account_id: cloudflareAccountId,
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'developer-center-dev-content',
            database_id: cloudflareContentDbId,
            preview_database_id: cloudflareContentDbId,
          },
        ],
        name: 'developer-center-dev-worker',
        observability: { logs: { enabled: true, invocation_logs: true } },
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
      '/__og-image__/**': { prerender: false },
      '/api/**': { cors: true },
      '/raw/**': { prerender: false },
      '/rpc/**': { prerender: false },
      '/web-client/reference/**': { prerender: false },
      // Redirects for mini-apps pages moved into tutorials/development/features sections
      '/mini-apps/build-with-ai': { redirect: '/mini-apps/development/build-with-ai' },
      '/mini-apps/load-local-mini-app': { redirect: '/mini-apps/development/load-local-mini-app' },
      '/mini-apps/device-identifier': { redirect: '/mini-apps/features/device-identifier' },
      '/mini-apps/evm-tokens': { redirect: '/mini-apps/features/evm-tokens' },
      '/mini-apps/localization': { redirect: '/mini-apps/features/localization' },
      '/mini-apps/dual-chain-mini-app-tutorial': { redirect: '/mini-apps/tutorials/dual-chain-mini-app-tutorial' },
      '/mini-apps/mini-app-tutorial': { redirect: '/mini-apps/tutorials/mini-app-tutorial' },
      // Matching redirects for the raw markdown routes (consumed by llms.txt, MCP, and the "view as markdown" links)
      '/raw/mini-apps/build-with-ai.md': { redirect: '/raw/mini-apps/development/build-with-ai.md' },
      '/raw/mini-apps/load-local-mini-app.md': { redirect: '/raw/mini-apps/development/load-local-mini-app.md' },
      '/raw/mini-apps/device-identifier.md': { redirect: '/raw/mini-apps/features/device-identifier.md' },
      '/raw/mini-apps/evm-tokens.md': { redirect: '/raw/mini-apps/features/evm-tokens.md' },
      '/raw/mini-apps/localization.md': { redirect: '/raw/mini-apps/features/localization.md' },
      '/raw/mini-apps/dual-chain-mini-app-tutorial.md': { redirect: '/raw/mini-apps/tutorials/dual-chain-mini-app-tutorial.md' },
      '/raw/mini-apps/mini-app-tutorial.md': { redirect: '/raw/mini-apps/tutorials/mini-app-tutorial.md' },
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
    domain: 'https://nimiq.com/developers',
    title: 'Nimiq Developer Center',
    description: 'Guides, resources and tips on how to create with Nimiq. Start building the future now!',
    full: {
      title: 'Full Documentation',
      description: 'Full documentation of the Nimiq Developer Center.',
    },
  },
  icon: {
    provider: 'iconify',
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
      nimiqIcons,
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      sizeLimitKb: 512,
    },
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        contentHeading: false,
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'jsx', 'ts', 'tsx', 'html', 'css', 'vue', 'svelte', 'shell', 'sh', 'md', 'yaml', 'rust', 'toml', 'python'],
        },
        remarkPlugins: { 'remark-math': {}, [join(cwd(), 'remark-extract-title.mjs')]: {} },
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
    enabled: true,
  },
} as any)
