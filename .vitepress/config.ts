import { existsSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { env } from 'node:process'
import { defineConfig, resolveConfig } from 'vitepress'
import { spawn } from 'cross-spawn'
import { readPackageJSON } from 'pkg-types'
import consola from 'consola'
import { sidebar } from './sidebar.config'
import { navigation } from './navigation.config'
import { generateWebClientDocs } from './scripts/web-client'
import { generateRpcDocs } from './scripts/rpc-docs'

// https://vitepress.dev/reference/site-config
export default async () => {
  const { title, description, homepage } = await readPackageJSON()
  const isProduction = env.DEPLOYMENT_MODE === 'production'
  const base = isProduction ? '/developers' : '/developer-center/'
  consola.info(`Building for ${isProduction ? 'production' : 'development'}. The base URL is ${base}`)

  await generateWebClientDocs()
  const { specUrl, specVersion } = await generateRpcDocs()

  return defineConfig({
    base,
    title,
    srcExclude: ['**/README.md'],
    description,
    lastUpdated: true,
    cleanUrls: true,

    async transformPageData(pageData) {
      function getCommitHash(file: string): Promise<string | undefined> {
        return new Promise<string | undefined>((resolve, reject) => {
          const cwd = dirname(file)
          if (!existsSync(cwd))
            return resolve(undefined)
          const fileName = basename(file)
          const child = spawn('git', ['log', '-1', '--pretty="%H"', fileName], { cwd })
          let output = ''
          child.stdout.on('data', d => (output += String(d)))
          child.on('close', () => resolve(output.trim().replace(/"/g, '')))
          child.on('error', reject)
        })
      }
      pageData.updatedCommitHash = await getCommitHash(pageData.filePath)
    },

    themeConfig: {
      navigation,

      sidebar,

      footerItems: [
        {
          link: 'https://forum.nimiq.community',
          icon: 'i-nimiq:logos-nimiq-forum-mono',
          text: 'Question? Checkout the ',
          social: 'Nimiq Forum',
        },
        {
          link: 'https://t.me/nimiq',
          icon: 'i-nimiq:logos-telegram-mono',
          text: 'Give us feedback on ',
          social: 'Telegram',
        },
      ],

      search: { provider: 'local' },
    },

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
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}favicons/apple-touch-icon.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}favicons/favicon-32x32.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${base}favicons/favicon-16x16.png` }],
      // ['link', { rel: 'manifest', href: `${base}favicons/site.webmanifest` }],
      ['link', { rel: 'mask-icon', href: `${base}favicons/safari-pinned-tab.svg`, color: '#eaaf0c' }],
      ['link', { rel: 'shortcut icon', href: `${base}favicons/favicon.ico` }],
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
