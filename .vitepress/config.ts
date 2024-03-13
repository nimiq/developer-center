import { existsSync } from 'node:fs'
import { basename, dirname } from 'node:path'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { spawn } from 'cross-spawn'
import { sidebar } from './sidebar.config'
import { generateWebClientDocs } from './scripts/web-client'
import { generateRpcDocs } from './scripts/rpc-docs'

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

      nav: [
        { text: 'Learn', link: '/learn/' },
        { text: 'Build', link: '/build/' },
        {
          text: 'Contribute',
          items: [
            { text: 'Nimiq Core RS Albatross', link: 'https://github.com/nimiq/core-rs-albatross#contributing' },
            { text: 'Nimiq Wallet', link: 'https://github.com/nimiq/wallet' },
            { text: 'Nimiq Core JS', link: 'https://github.com/nimiq/core-js' },
          ],
        },
      ],

      sidebar,

      socialLinks: [
        { icon: 'github', link: 'https://github.com/nimiq', ariaLabel: 'Nimiq on GitHub' },
        { icon: 'x', link: 'https://twitter.com/nimiq', ariaLabel: 'Nimiq on Twitter' },
        { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" fill="none"><g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M14.3 18c.6 0 1.156-.32 1.456-.844l4.207-7.312a1.687 1.687 0 0 0 .002-1.688L15.76.844A1.685 1.685 0 0 0 14.3 0H5.905a1.689 1.689 0 0 0-1.456.84L.748 7.248l-.523.908a1.695 1.695 0 0 0 0 1.684l4.224 7.313A1.68 1.68 0 0 0 5.905 18h8.396Zm-5.416-5.107a5.643 5.643 0 0 0 1.62.232c2.687 0 4.878-1.875 4.878-4.125s-2.191-4.125-4.878-4.125C7.818 4.875 5.627 6.75 5.627 9a3.749 3.749 0 0 0 1.35 2.85l-.974 1.995a.225.225 0 0 0 .09.292.212.212 0 0 0 .187 0l2.604-1.245Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20.19v18H0z"/></clipPath></defs></svg>' }, ariaLabel: 'Nimiq Forum', link: 'https://forum.nimiq.community/' },
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
        md.use(...[container, 'tip', {
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
              <div class="custom-block" bg="gold/10" text="gold">
                <p flex gap-x-8><div i-nimiq:icons-lg-bulb></div><span>Tip</span></p>
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
