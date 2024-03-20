import { existsSync } from 'node:fs'
import { basename, dirname } from 'node:path'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { spawn } from 'cross-spawn'
import { sidebar } from './sidebar.config'
import { navigation } from './navigation.config'
import { generateWebClientDocs } from './scripts/web-client'
import { generateRpcDocs } from './scripts/rpc-docs'
import { preWrapperPlugin } from './plugins/preWrapper'

// @unocss-include

const baseUrl = '/nimiq-developer-center/'

// https://vitepress.dev/reference/site-config
export default async () => {
  await generateWebClientDocs()
  await generateRpcDocs()

  return defineConfig({
    base: baseUrl,
    title: 'Nimiq Developer Center',
    srcExclude: ['**/README.md'],
    description:
      'Nimiq\'s official documentation to interact with the Nimiq ecosystem',

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
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}assets/favicons/apple-touch-icon.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}assets/favicons/favicon-32x32.png` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}assets/favicons/favicon-16x16.png` }],
      ['link', { rel: 'manifest', href: `${baseUrl}assets/favicons/site.webmanifest` }],
      ['link', { rel: 'mask-icon', href: `${baseUrl}asset/favicons/safari-pinned-tab.svg`, color: '#eaaf0c' }],
      ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
      ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ],
  })
}
