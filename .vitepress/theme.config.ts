import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import openRpcDocument from './rpc/openrpc-document.json'
import { loadMethods } from './rpc/utils'

// @unocss-include

export const themeConfig = {
  modules: [
    {
      text: 'Protocol',
      subpath: 'protocol',
      icon: 'i-tabler:book',
      defaultPageLink: '/protocol/',
      description: 'Learn about Nimiq\'s Albatross protocol',
      sidebar: [
        {
          label: 'Protocol',
          items: [
            { text: 'Home', link: '/protocol/', icon: 'i-tabler:home' },
            { text: 'Overview', link: '/protocol/protocol/overview', icon: 'i-tabler:layout-grid' },
            { text: 'Glossary', link: '/protocol/protocol/glossary', icon: 'i-tabler:book-2' },
          ],
        },
        {
          label: 'Technical Details',
          items: [
            {
              text: 'Protocol',
              icon: 'i-tabler:api',
              items: [
                { text: 'Block Format', link: '/protocol/protocol/block-format' },
                { text: 'Punishments', link: '/protocol/protocol/punishments' },
                { text: 'Equivocation Proofs', link: '/protocol/protocol/equivocation-proofs' },
                { text: 'Accounts', link: '/protocol/protocol/accounts' },
                { text: 'Transactions', link: '/protocol/protocol/transactions' },
                { text: 'Rewards', link: '/protocol/protocol/rewards' },
                { text: 'Merkle Trees', link: '/protocol/protocol/merkle-trees' },
                { text: 'Mempool', link: '/protocol/protocol/mempool' },
                { text: 'History Store', link: '/protocol/protocol/history-store' },
              ],
            },
            {
              text: 'Validators',
              icon: 'i-tabler:user-shield',
              items: [
                { text: 'Slots', link: '/protocol/protocol/validators/slots' },
                { text: 'Staking Contract', link: '/protocol/protocol/validators/staking-contract' },
                { text: 'Validator Keys', link: '/protocol/protocol/validators/validator-keys' },
                { text: 'Validators', link: '/protocol/protocol/validators/validators' },
                { text: 'Skip Blocks', link: '/protocol/protocol/validators/skip-blocks' },
                { text: 'Stakers', link: '/protocol/protocol/validators/stakers' },
                { text: 'Verifiable Random Functions', link: '/protocol/protocol/verifiable-random-functions' },
              ],
            },
            {
              text: 'Network Sync',
              icon: 'i-tabler:network',
              items: [
                { text: 'Nodes and sync', link: '/protocol/protocol/sync-protocol/nodes-and-sync' },
                { text: 'Block live sync', link: '/protocol/protocol/sync-protocol/block-live-sync' },
                { text: 'History macro sync', link: '/protocol/protocol/sync-protocol/history-macro-sync' },
                { text: 'Light macro sync', link: '/protocol/protocol/sync-protocol/light-macro-sync' },
                { text: 'State live sync', link: '/protocol/protocol/sync-protocol/state-live-sync' },
                { text: 'Messages and Requests', link: '/protocol/protocol/sync-protocol/messages-and-requests' },
              ],
            },
            {
              text: 'ZKP',
              icon: 'i-tabler:lock',
              items: [
                { text: 'ZKP and Recursive SNARKs', link: '/protocol/protocol/ZKP-and-recursive-SNARKs' },
                { text: 'Prover node', link: '/protocol/protocol/prover-node' },
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'Web Client',
      subpath: 'web-client',
      icon: 'i-tabler:browser',
      defaultPageLink: '/web-client/',
      description: 'Build blockchain applications in the browser',
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { text: 'Overview', link: '/web-client/', icon: 'i-tabler:layout-grid' },
            { text: 'Getting Started', link: '/web-client/getting-started', icon: 'i-tabler:player-play' },
            { text: 'Installation', link: '/web-client/installation', icon: 'i-tabler:download' },
            { text: 'Web Client vs RPC', link: '/web-client/web-client-vs-rpc', icon: 'i-tabler:git-compare' },
          ],
        },
        {
          label: 'Framework Integration',
          items: [
            { text: 'Integrations Overview', link: '/web-client/integrations', icon: 'i-tabler:plug' },
            { text: 'Vite', link: '/web-client/integrations/vite', icon: 'i-logos:vitejs' },
            { text: 'Nuxt', link: '/web-client/integrations/nuxt', icon: 'i-logos:nuxt-icon' },
            { text: 'Next.js', link: '/web-client/integrations/NextJS', icon: 'i-logos:nextjs-icon' },
            { text: 'Webpack', link: '/web-client/integrations/webpack', icon: 'i-logos:webpack' },
            { text: 'CommonJS', link: '/web-client/integrations/CommonJS', icon: 'i-tabler:package' },
            { text: 'ESM', link: '/web-client/integrations/ESM', icon: 'i-tabler:package' },
          ],
        },
        {
          label: 'Developer Tools',
          items: [
            { text: 'Nimiq Utils', link: '/web-client/nimiq-utils', icon: 'i-tabler:tools' },
          ],
        },
        {
          label: 'UI Components',
          items: [
            { text: 'Nimiq CSS', link: 'https://onmax.github.io/nimiq-ui/nimiq-css/getting-started', icon: 'i-tabler:palette' },
            { text: 'Nimiq Icons', link: 'https://onmax.github.io/nimiq-ui/nimiq-icons/explorer', icon: 'i-nimiq:asterisk' },
            { text: 'Identicons ESM', link: 'https://github.com/onmax/nimiq-identicons', icon: 'i-tabler:user-circle' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { text: 'Classes', link: '/web-client/reference/classes', icon: 'i-tabler:building-factory' },
            { text: 'Enumerations', link: '/web-client/reference/enumerations', icon: 'i-tabler:list' },
            { text: 'Functions', link: '/web-client/reference/functions', icon: 'i-tabler:function' },
            { text: 'Globals', link: '/web-client/reference/globals', icon: 'i-tabler:world' },
            { text: 'Interfaces', link: '/web-client/reference/interfaces', icon: 'i-tabler:components' },
            { text: 'Type Aliases', link: '/web-client/reference/type-aliases', icon: 'i-tabler:variable' },
          ],
        },
      ],
    },
    {
      text: 'RPC Client',
      subpath: 'rpc-client',
      icon: 'i-tabler:code',
      defaultPageLink: '/rpc-client/',
      description: 'Interact with Nimiq nodes via JSON-RPC',
      sidebar: [
        {
          label: 'Overview',
          items: [
            { text: 'Overview', link: '/rpc-client/', icon: 'i-tabler:layout-grid' },
            { text: 'Clients', link: '/rpc-client/clients', icon: 'i-tabler:plug' },
          ],
        },
        {
          label: 'Methods',
          items: [...(await loadMethods(openRpcDocument as OpenrpcDocument))],
        },
      ],
    },
    {
      text: 'Validators',
      subpath: 'validators',
      icon: 'i-nimiq:verified',
      defaultPageLink: '/validators/',
      description: 'Your Staking and Pools Hub',
      sidebar: [
        {
          label: 'Validators',
          items: [
            { text: 'Overview', link: '/validators/', icon: 'i-tabler:layout-grid' },
            { text: 'Becoming a Validator', link: '/validators/becoming-a-validator', icon: 'i-tabler:user-check' },
            { text: 'Prover Node Setup Guide', link: '/validators/prover-node-guide', icon: 'i-tabler:book' },
            { text: 'Staking Handbook', link: '/validators/staking-handbook', icon: 'i-tabler:handbook' },
            { text: 'Validator Trustscore', link: '/validators/validator-trustscore', icon: 'i-tabler:shield-star' },
            { text: 'FAQs for Stakers and Pools', link: '/validators/staking-faq', icon: 'i-tabler:help' },
            { text: 'Add Your Pool to the Wallet', link: 'https://github.com/nimiq/validators-api?tab=readme-ov-file#nimiq-validators', icon: 'i-tabler:wallet' },
          ],
        },
      ],
    },
    {
      text: 'Migration',
      subpath: 'migration',
      icon: 'i-tabler:git-merge',
      defaultPageLink: '/migration/',
      description: 'Migration guides for Nimiq 2.0',
      hidden: true,
      sidebar: [
        {
          label: 'Migration',
          items: [
            { text: 'Overview', link: '/migration/', icon: 'i-tabler:layout-grid' },
            { text: 'Migration for Integrators', link: '/migration/migration-integrators', icon: 'i-tabler:git-merge' },
            { text: 'JSON-RPC Migration', link: '/migration/migration-json-rpc', icon: 'i-tabler:code' },
            { text: 'Web Developers Migration', link: '/migration/migration-web-developers', icon: 'i-tabler:browser' },
            { text: 'Technical Details', link: '/migration/migration-technical-details', icon: 'i-tabler:settings' },
          ],
        },
      ],
    },
  ],
  links: [
    { icon: 'i-tabler:brand-twitter', link: 'https://twitter.com/@nimiq' },
    { icon: 'i-tabler:brand-github', link: 'https://github.com/nimiq' },
    { icon: 'i-tabler:message-circle', link: 'https://forum.nimiq.community/' },
    { icon: 'i-tabler:brand-discord', link: 'https://discord.gg/cMHemg8' },
    { icon: 'i-tabler:brand-telegram', link: 'https://t.me/joinchat/AAAAAEJW-ozFwo7Er9jpHw' },
    { icon: 'i-tabler:news', link: 'https://nimiq.com/blog/' },
    { icon: 'i-tabler:brand-youtube', link: 'https://www.youtube.com/playlist?list=PLuhSf5DE3FFQFSM-Hhb4gXrbcIo3ohVE9' },
  ],
  showLastUpdated: false,
  showEditContent: false,

}
