import type { NimiqVitepressThemeConfig } from 'nimiq-vitepress-theme/types.js'
import { env } from 'node:process'
import consola from 'consola'
import { readPackageJSON } from 'pkg-types'
import { defineConfigWithTheme } from 'vitepress'
import { generateRpcDocs } from './scripts/rpc-docs.js'
import { generateWebClientDocs } from './scripts/web-client.js'
import { themeConfig } from './theme.config.js'

// https://vitepress.dev/reference/site-config
export default async () => {
  const { title, description, homepage } = await readPackageJSON()
  const basesUrl = {
    production: '/developers',
    development: '/developer-center',
    staging: '/',
  }
  const base = basesUrl[env.DEPLOYMENT_MODE]
  consola.info(`Building for ${env.DEPLOYMENT_MODE}. The base URL is ${base}`)

  await generateWebClientDocs()
  const { specUrl, specVersion } = await generateRpcDocs()

  return defineConfigWithTheme<NimiqVitepressThemeConfig>({
    base,
    title,
    srcExclude: ['**/README.md'],
    description,
    lastUpdated: true,
    cleanUrls: true,

    themeConfig,

    vite: {
      define: {
        __ALBATROSS_RPC_OPENRPC_URL__: JSON.stringify(specUrl),
        __ALBATROSS_RPC_OPENRPC_VERSION__: JSON.stringify(specVersion),
      },
      configFile: '.vitepress/vite.config.ts',
    },

    markdown: {
      math: true, // Allow latex math
    },

    head: [
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}/favicons/apple-touch-icon.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}/favicons/favicon-32x32.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${base}/favicons/favicon-16x16.png` }],
      // ['link', { rel: 'manifest', href: `${base}favicons/site.webmanifest` }],
      ['link', { rel: 'mask-icon', href: `${base}/favicons/safari-pinned-tab.svg`, color: '#eaaf0c' }],
      ['link', { rel: 'shortcut icon', href: `${base}/favicons/favicon.ico` }],
      ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: homepage }],
      ['meta', { property: 'og:image', content: `${base}og-image.png` }],
      ['meta', { property: 'og:site_name', content: title }],
      ['meta', { property: 'og:determiner', content: 'the' }],
      ['meta', { property: 'og:locale', content: 'en_US' }],
      ['meta', { property: 'og:type', content: 'website' }],

      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@nimiq' }],
      ['meta', { name: 'twitter:creator', content: '@nimiq' }],
      ['meta', { name: 'twitter:title', content: title }],
    ],

    sitemap: {
      hostname: 'https://nimiq.com/developers',
    },

  })
}
