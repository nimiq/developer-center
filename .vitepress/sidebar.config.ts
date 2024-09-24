import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

// @unocss-include

interface GetFilesItemsFromFolderOption { order?: string[] }
function getFilesItemsFromFolder(folder: string, { order = [] }: GetFilesItemsFromFolderOption = {}) {
  const basePath = path.join(__dirname, `../${folder}`)

  // Get all files in the folder. Exclude ignored files, directories, and non-markdown files.
  const files = fs.readdirSync(basePath)
    .filter(file => !fs.lstatSync(path.join(basePath, file)).isDirectory()) // Exclude directories
    .filter(file => path.extname(file) === '.md') // Exclude non-markdown files
    .filter(file => !file.startsWith('_')) // Exclude files starting with '_'
    .sort((a, b) => order.indexOf(a) - order.indexOf(b)) // Sort by order
    .map((file) => {
      const filePath = path.basename(file, path.extname(file))
      const text = filePath.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()) // Capitalize file name
      const link = `/${folder}/${file}`.split('.md').join('')
      return { file, filePath, text, link }
    })

  return files
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function Accordion({ path, collapsed = true, order }: { path: string, collapsed?: boolean } & GetFilesItemsFromFolderOption) {
  const text = (path.split('/').at(-1) || path).replace(/-/g, ' ')
  return {
    text: capitalize(text),
    items: getFilesItemsFromFolder(path, { order }),
    collapsed,
  }
}

export const sidebar: DefaultTheme.Sidebar = {
  '/learn/': [
    {
      text: 'Protocol',
      link: '/learn/',
      items: [
        {
          text: 'Protocol',
          collapsed: false,
          items: [
            { text: 'Block Format', link: '/learn/protocol/block-format' },
            { text: 'Penalties', link: '/learn/protocol/penalties' },
            { text: 'Equivocation Proofs', link: '/learn/protocol/equivocation-proofs' },
            { text: 'Accounts', link: '/learn/protocol/accounts' },
            { text: 'Transactions', link: '/learn/protocol/transactions' },
            { text: 'Merkle Trees', link: '/learn/protocol/merkle-trees' },
            { text: 'Mempool', link: '/learn/protocol/mempool' },
            { text: 'History Store', link: '/learn/protocol/history-store' },
          ],
        },
        {
          text: 'Validators',
          collapsed: false,
          items: [
            { text: 'Slots', link: '/learn/protocol/validators/slots' },
            { text: 'Staking Contract', link: '/learn/protocol/validators/staking-contract' },
            { text: 'Validator Keys', link: '/learn/protocol/validators/validator-keys' },
            { text: 'Validators', link: '/learn/protocol/validators/validators' },
            { text: 'Skip Blocks', link: '/learn/protocol/validators/skip-blocks' },
            { text: 'Stakers', link: '/learn/protocol/validators/stakers' },
            { text: 'Verifiable Random Functions', link: '/learn/protocol/verifiable-random-functions' },
          ],
        },
        {
          text: 'Network Sync',
          collapsed: false,
          items: [
            { text: 'Nodes and sync', link: '/learn/protocol/sync-protocol/nodes-and-sync' },
            { text: 'Block live sync', link: '/learn/protocol/sync-protocol/block-live-sync' },
            { text: 'History macro sync', link: '/learn/protocol/sync-protocol/history-macro-sync' },
            { text: 'Light macro sync', link: '/learn/protocol/sync-protocol/light-macro-sync' },
            { text: 'State live sync', link: '/learn/protocol/sync-protocol/state-live-sync' },
            { text: 'Messages and Requests', link: '/learn/protocol/sync-protocol/messages-and-requests' },

          ],
        },
        {
          text: 'ZKP',
          collapsed: false,
          items: [
            { text: 'ZKP and Recursive SNARKs', link: '/learn/protocol/ZKP-and-recursive-SNARKs' },
            { text: 'Prover node', link: '/learn/protocol/prover-node' },
          ],
        },
        { text: 'Glossary', link: '/learn/protocol/glossary' },
      ],
    },
  ],

  '/migration/': [
    {
      text: 'Migration',
      icon: 'i-nimiq:icons-lg-sparkling-swap',
      link: '/migration/',
      items: [
        {
          text: 'Validators',
          collapsed: false,
          items: [
            { text: 'Registration Phase', link: '/migration/validator-registration' },
            { text: 'Activation Phase', link: '/migration/validator-activation' },
          ],
        },
        { text: 'Guide for Node Operators', link: '/migration/node-operators' },
        { text: 'Guide for JSON-RPC', link: '/migration/migration-json-rpc' },
        { text: 'Guide for Web Developers', link: '/migration/migration-web-developers' },
        { text: 'Migration Technicalities', link: '/migration/migration-technical-details' },
        { text: 'FAQs', link: '/migration/faqs' },
      ],
    },
  ],

  '/build/': [
    {
      text: 'Build',
      icon: 'i-nimiq:icons-lg-tools',
      link: '/build/',
      items: [
        { text: 'Overview', link: '/build/' },

        { text: 'Web Client VS RPC Client', link: '/build/web-client-rpc' },
      ],
    },
    {
      prefix: 'Use the',
      text: 'Web client',
      icon: 'i-nimiq:icons-lg-bulb',
      link: '/build/web-client/',

      // Needs to be dynamic. The first time the developer does run the project in needs to run the
      // plugin to generate the docs first. After that it should just use the generated docs.
      get items() {
        return [
          { text: 'Overview', link: '/build/web-client/' },
          { text: 'Getting started', link: '/build/web-client/getting-started' },
          { text: 'Installation', link: '/build/web-client/installation' },
          { text: 'Globals', link: '/build/web-client/reference/globals' },
          Accordion({ path: 'build/web-client/integrations', collapsed: false, order: ['vite.md', 'ESM.md', 'webpack.md', 'nuxt.md', 'NextJS.md', 'CommonJS.md'] }),
          Accordion({ path: 'build/web-client/reference/classes', collapsed: false }),
          Accordion({ path: 'build/web-client/reference/enumerations', collapsed: false }),
          Accordion({ path: 'build/web-client/reference/functions', collapsed: false }),
          Accordion({ path: 'build/web-client/reference/interfaces', collapsed: false }),
          Accordion({ path: 'build/web-client/reference/type-aliases', collapsed: false }),
        ]
      },
    },
    {
      text: 'Own Node',
      prefix: 'Set up your',
      icon: 'i-nimiq:server',
      link: '/build/set-up-your-own-node/',
      items: [
        { text: 'Overview', link: '/build/set-up-your-own-node/' },
        { text: 'Becoming a Validator', link: '/build/set-up-your-own-node/becoming-a-validator' },
        { text: 'Prover Node Setup Guide', link: '/build/set-up-your-own-node/prover-node-guide' },
        { text: 'JSON-RPC Specification', link: '/build/set-up-your-own-node/rpc-docs/' },
      ],
    },
  ],
}
