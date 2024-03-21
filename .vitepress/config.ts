import { existsSync, readFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { spawn } from 'cross-spawn'
import { withPwa } from '@vite-pwa/vitepress'
import { sidebar } from './sidebar.config'
import { navigation } from './navigation.config'
import { generateWebClientDocs } from './scripts/web-client'
import { generateRpcDocs } from './scripts/rpc-docs'

// @unocss-include

export const baseUrl = '/nimiq-developer-center/'

export const pkg = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8')) as { title: string, description: string, homepage: string }

// https://vitepress.dev/reference/site-config
export default async () => {
  await generateWebClientDocs()
  await generateRpcDocs()

  return withPwa(defineConfig({
    base: baseUrl,
    title: pkg.title,
    srcExclude: ['**/README.md'],
    description: pkg.description,
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
      configFile: '.vitepress/vite.config.ts',
    },

    markdown: {
      math: true, // Allow latex math

      // Add ::: goal|warning ::: custom markdown-it plugins
      config: (md) => {
        md.use(...[container, 'goal', {
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
              <div class="custom-block" bg="green-10 dark:green/20" text="green dark:green-60">
                <p flex gap-x-8><div i-nimiq:flag></div><span>Goal</span></p>
              `
            }
            else { return `</div>\n` }
          },
        }])
        md.use(...[container, 'warning', {
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
              <div class="custom-block" bg="yellow/10 dark:yellow/20" text="orange dark:yellow-60">
                <p flex gap-x-8><div i-nimiq:icons-lg-tools text="orange dark:yellow-60"></div><span>Warning</span></p>
              `
            }
            else { return `</div>\n` }
          },
        }])
      },
    },

    head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}favicons/apple-touch-icon.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}favicons/favicon-32x32.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}favicons/favicon-16x16.png` }],
      ['link', { rel: 'manifest', href: `${baseUrl}favicons/site.webmanifest` }],
      ['link', { rel: 'mask-icon', href: `${baseUrl}favicons/safari-pinned-tab.svg`, color: '#eaaf0c' }],
      ['link', { rel: 'shortcut icon', href: `${baseUrl}favicons/favicon.ico` }],
      ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

      ['meta', { property: 'og:title', content: pkg.title }],
      ['meta', { property: 'og:description', content: pkg.description }],
      ['meta', { property: 'og:url', content: pkg.homepage }],
      ['meta', { property: 'og:image', content: `${baseUrl}og-image.png` }],
      ['meta', { property: 'og:site_name', content: pkg.title }],
      ['meta', { property: 'og:determiner', content: 'the' }],
      ['meta', { property: 'og:locale', content: 'en_US' }],
      ['meta', { property: 'og:type', content: 'website' }],

      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@nimiq' }],
      ['meta', { name: 'twitter:creator', content: '@nimiq' }],
      ['meta', { name: 'twitter:title', content: pkg.title }],
    ],
  }))
}
