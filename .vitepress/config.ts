import { existsSync } from 'node:fs'
import { basename, dirname } from 'node:path'
import { env } from 'node:process'
import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { spawn } from 'cross-spawn'
import { Accordion } from './theme/utils/sidebar'
import { generateWebClientDocs } from './scripts/web-client'

// @unocss-include

const baseUrl = '/nimiq-developer-center/'

// https://vitepress.dev/reference/site-config
export default async () => {
  await generateWebClientDocs()

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

      sidebar: {
        '/learn/': [
          {
            text: 'Learn',
            icon: 'i-nimiq:icons-lg-bulb',
            items: [
              { text: 'Home', link: '/learn/' },
              { text: 'Overview', link: '/learn/protocol/overview' },
              { text: 'Glossary', link: '/learn/protocol/glossary' },
            ],
          },
          {
            prefix: 'About the',
            text: 'Protocol',
            icon: 'i-nimiq:icons-lg-nodes',
            items: [
              { text: 'Block Format', link: '/learn/protocol/block-format' },
              { text: 'Penalties', link: '/learn/protocol/penalties' },
              { text: 'Equivocation Proofs', link: '/learn/protocol/equivocation-proofs' },
              { text: 'Accounts', link: '/learn/protocol/accounts' },
              { text: 'Transactions', link: '/learn/protocol/transactions' },
              { text: 'Mempool', link: '/learn/protocol/mempool' },
              {
                text: 'Sync protocol',
                collapsed: false,
                items: [
                  { text: 'Nodes and sync', link: '/learn/protocol/sync-protocol/nodes-and-sync' },
                  { text: 'Block live sync', link: '/learn/protocol/sync-protocol/block-live-sync' },
                  { text: 'History macro sync', link: '/learn/protocol/sync-protocol/history-macro-sync' },
                  { text: 'Light macro sync', link: '/learn/protocol/sync-protocol/light-macro-sync' },
                  { text: 'State live sync', link: '/learn/protocol/sync-protocol/state-live-sync' },
                ],
              },

              {
                text: 'Validators',
                collapsed: false,
                items: [
                  { text: 'Slots', link: '/learn/protocol/validators/slots' },
                  { text: 'Staking Contract', link: '/learn/protocol/validators/staking-contract' },
                  { text: 'Validator Keys', link: '/learn/protocol/validators/validator-keys' },
                  { text: 'Validator and Stakers', link: '/learn/protocol/validators/validators-and-stakers' },
                  { text: 'Skip Blocks', link: '/learn/protocol/validators/skip-blocks' },
                  { text: 'Verifiable Random Functions', link: '/learn/protocol/verifiable-random-functions' },
                ],
              },
              { text: 'ZKP and Recursive SNARKs', link: '/learn/protocol/ZKP-and-recursive-SNARKs' },
              { text: 'Prover node', link: '/learn/protocol/prover-node' },
              { text: 'Migration', link: '/learn/protocol/migration' },
            ],
          },
        ],

        '/build/': [
          {
            text: 'Build',
            icon: 'i-nimiq:icons-lg-tools',
            items: [
              { text: 'Overview', link: '/build/' },
              { text: 'Becoming a Validator', link: '/build/becoming-a-validator' },
            ],
          },
          {
            text: 'Web client',
            icon: 'i-nimiq:icons-lg-bulb',

            // Needs to be dynamic. The first time the developer does run the project in needs to run the
            // plugin to generate the docs first. After that it should just use the generated docs.
            get items() {
              return [
                {
                  text: 'Getting started',
                  link: '/build/web-client/index',
                },
                Accordion({ path: 'build/web-client/classes', collapsed: false }),
                Accordion({ path: 'build/web-client/enums', collapsed: true }),
                Accordion({ path: 'build/web-client/interfaces', collapsed: true }),
              ]
            },
          },
          {
            text: 'UI',
            icon: 'i-nimiq:globe',
            prefix: 'Using Nimiq\'s',
            items: [
              {
                text: 'Design kit',
                collapsed: false,
                items: [
                  { text: 'Design Guidelines', link: '/build/ui/design-kit/guidelines' },
                  env.ENV_MODE !== 'production'
                    ? { text: 'Nimiq Icons', link: '/build/ui/design-kit/icons' }
                    : {},
                ],
              },
              {
                text: 'CSS framework',
                collapsed: false,
                items: [
                  { text: 'Overview', link: '/build/ui/css-framework/overview' },
                  { text: 'Fonts', link: '/build/ui/css-framework/fonts' },
                  { text: 'Typography', link: '/build/ui/css-framework/typography' },
                  { text: 'Colors', link: '/build/ui/css-framework/colors' },
                  { text: 'Buttons', link: '/build/ui/css-framework/buttons' },
                  { text: 'Inputs', link: '/build/ui/css-framework/inputs' },
                  { text: 'Cards', link: '/build/ui/css-framework/cards' },
                ],
              },
            ],
          },
        ],
      },

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
