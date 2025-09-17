import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import openRpcDocument from './rpc/openrpc-document.json'
import { loadMethods } from './rpc/utils'

// @unocss-include i-nimiq:verified i-nimiq:cubes i-nimiq:duotone-network

export const themeConfig = {
  modules: [
    {
      text: 'Web Client',
      subpath: 'web-client',
      icon: 'i-local:nimiq-web-client',
      defaultPageLink: '/web-client/',
      description: 'Build in the browser',
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { text: 'Overview', link: '/web-client/', icon: 'i-tabler:layout-grid' },
            { text: 'Installation', link: '/web-client/installation', icon: 'i-tabler:download' },
            { text: 'Browser vs Server-Side', link: '/web-client/browser-vs-server', icon: 'i-tabler:device-desktop' },
            { text: 'Web Client vs RPC', link: '/web-client/web-client-vs-rpc', icon: 'i-tabler:git-compare' },
            { text: 'Nimiq Tutorial', link: 'https://nimiq.github.io/core-js/tutorial/', icon: 'i-tabler:school' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { text: 'Vite', link: '/web-client/integrations/vite', icon: 'i-logos:vitejs gray group-hocus:filter-none' },
            { text: 'Nuxt', link: '/web-client/integrations/nuxt', icon: 'i-logos:nuxt-icon gray group-hocus:filter-none' },
            { text: 'Next.js', link: '/web-client/integrations/NextJS', icon: 'i-logos:nextjs-icon gray group-hocus:filter-none' },
            { text: 'Webpack', link: '/web-client/integrations/webpack', icon: 'i-logos:webpack gray group-hocus:filter-none' },
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
        {
          label: 'UI Components',
          items: [
            { text: 'Nimiq CSS', link: 'https://onmax.github.io/nimiq-ui/nimiq-css/getting-started', icon: 'i-tabler:palette' },
            { text: 'Nimiq Icons', link: 'https://onmax.github.io/nimiq-ui/nimiq-icons/explorer', icon: 'i-nimiq:asterisk' },
            { text: 'Identicons ESM', link: 'https://github.com/onmax/nimiq-identicons', icon: 'i-tabler:user-circle' },
          ],
        },
        {
          label: 'Utilities',
          items: [
            { text: 'Nimiq Utils', link: '/nimiq-utils/', icon: 'i-tabler:tools' },
          ],
        },
      ],
    },
    {
      text: 'Protocol',
      subpath: 'protocol',
      icon: 'i-local:nimiq-albatross',
      defaultPageLink: '/protocol/',
      description: 'Albatross Protocol Docs',
      sidebar: [
        {
          label: 'Overview & Fundamentals',
          items: [
            { text: 'Home', link: '/protocol/', icon: 'i-tabler:home' },
            { text: 'Glossary', link: '/protocol/glossary', icon: 'i-tabler:book-2' },
            { text: 'Accounts', link: '/protocol/accounts', icon: 'i-tabler:user' },
            { text: 'Transactions', link: '/protocol/transactions', icon: 'i-tabler:receipt' },
          ],
        },
        {
          label: 'Consensus & Security',
          items: [
            { text: 'Block Format', link: '/protocol/consensus/block-format', icon: 'i-tabler:file-text' },
            { text: 'Verifiable Random Functions', link: '/protocol/consensus/verifiable-random-functions', icon: 'i-tabler:dice' },
            { text: 'Equivocation Proofs', link: '/protocol/consensus/equivocation-proofs', icon: 'i-tabler:shield-check' },
            { text: 'Punishments', link: '/protocol/consensus/punishments', icon: 'i-tabler:alert-triangle' },
          ],
        },
        {
          label: 'Economic Model',
          items: [
            { text: 'Rewards', link: '/protocol/economics/rewards', icon: 'i-tabler:gift' },
          ],
        },
        {
          label: 'Storage & Data Structures',
          items: [
            { text: 'Mempool', link: '/protocol/storage/mempool', icon: 'i-tabler:list' },
            { text: 'Merkle Trees', link: '/protocol/storage/merkle-trees', icon: 'i-tabler:tree' },
            { text: 'History Store', link: '/protocol/storage/history-store', icon: 'i-tabler:database' },
          ],
        },
        {
          label: 'Validators & Staking',
          items: [
            { text: 'Slots', link: '/protocol/validators/slots', icon: 'i-tabler:calendar' },
            { text: 'Staking Contract', link: '/protocol/validators/staking-contract', icon: 'i-tabler:wallet' },
            { text: 'Validators', link: '/protocol/validators/validators', icon: 'i-tabler:users' },
            { text: 'Validator Keys', link: '/protocol/validators/validator-keys', icon: 'i-tabler:key' },
            { text: 'Stakers', link: '/protocol/validators/stakers', icon: 'i-tabler:user-star' },
            { text: 'Skip Blocks', link: '/protocol/validators/skip-blocks', icon: 'i-tabler:skip-forward' },
          ],
        },
        {
          label: 'Network Sync',
          icon: 'i-tabler:network',
          items: [
            { text: 'Sync and Network Consensus', link: '/protocol/node-sync/', icon: 'i-tabler:network' },
            {
              text: 'Macro Sync',
              icon: 'i-tabler:download',
              items: [
                { text: 'History Macro Sync', link: '/protocol/node-sync/macro-sync/history-macro-sync' },
                { text: 'Light Macro Sync', link: '/protocol/node-sync/macro-sync/light-macro-sync' },
                { text: 'Pico Macro Sync', link: '/protocol/node-sync/macro-sync/pico-macro-sync' },
              ],
            },
            {
              text: 'Live Sync',
              icon: 'i-tabler:refresh',
              items: [
                { text: 'Block Live Sync', link: '/protocol/node-sync/live-sync/block-live-sync' },
                { text: 'State Live Sync', link: '/protocol/node-sync/live-sync/state-live-sync' },
              ],
            },
            { text: 'Architecture', link: '/protocol/node-sync/architecture', icon: 'i-tabler:building' },
            { text: 'Traits and Abstractions', link: '/protocol/node-sync/traits-and-abstractions', icon: 'i-tabler:code' },
            { text: 'Network Protocol', link: '/protocol/node-sync/network-protocol', icon: 'i-tabler:protocol' },
          ],
        },
        {
          label: 'Zero-Knowledge Proofs',
          items: [
            { text: 'ZKP and Recursive SNARKs', link: '/protocol/zkp/ZKP-and-recursive-SNARKs', icon: 'i-tabler:lock' },
            { text: 'Prover Node', link: '/protocol/zkp/prover-node', icon: 'i-tabler:server' },
          ],
        },
      ],
    },
    {
      text: 'RPC Client',
      subpath: 'rpc-client',
      icon: 'i-local:nimiq-rpc',
      defaultPageLink: '/rpc-client/',
      description: 'JSON-RPC client',
      sidebar: [
        {
          label: 'Overview',
          items: [
            { text: 'Overview', link: '/rpc-client/', icon: 'i-tabler:layout-grid' },
            { text: 'Integrations', icon: 'i-tabler:chart-funnel', items: [
              { text: 'Raw Requests', link: '/rpc-client/integrations/raw', icon: 'i-tabler:terminal-2' },
              { text: 'JavaScript Native', link: '/rpc-client/integrations/javascript', icon: 'i-logos:javascript' },
              { text: 'TypeScript Client', link: '/rpc-client/integrations/typescript', icon: 'i-logos:typescript-icon' },
              { text: 'ARPL CLI Tool', link: '/rpc-client/integrations/arpl', icon: 'i-tabler:terminal' },
              { text: 'MCP Server (AI)', link: '/rpc-client/integrations/mcp', icon: 'i-tabler:robot' },

            ] },
          ],
        },
        {
          label: 'Methods',
          items: [
            { text: 'All', link: '/rpc-client/methods/', icon: 'i-tabler:grid-dots' },
            ...(await loadMethods(openRpcDocument as OpenrpcDocument)),
          ],
        },
      ],
    },
    {
      text: 'Nimiq Utils',
      subpath: 'nimiq-utils',
      icon: 'i-local:nimiq-utils',
      defaultPageLink: '/nimiq-utils/',
      description: 'Essential developer utilities',
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { text: 'Overview', link: '/nimiq-utils/', icon: 'i-tabler:layout-grid' },
            { text: 'Installation', link: '/nimiq-utils/installation', icon: 'i-tabler:download' },
            { text: 'Why Nimiq Utils?', link: '/nimiq-utils/why', icon: 'i-tabler:help' },
          ],
        },
        {
          label: 'Blockchain Utilities',
          items: [
            { text: 'AddressBook', link: '/nimiq-utils/address-book', icon: 'i-nimiq:contact-book' },
            { text: 'ValidationUtils', link: '/nimiq-utils/validation-utils', icon: 'i-nimiq:verified' },
            { text: 'Albatross Policy', link: '/nimiq-utils/albatross-policy', icon: 'i-nimiq:nodes' },
            { text: 'Supply Calculator', link: '/nimiq-utils/supply-calculator', icon: 'i-tabler:calculator' },
            { text: 'Staking Rewards Calculator', link: '/nimiq-utils/staking-rewards-calculator', icon: 'i-nimiq:digital-gold' },
          ],
        },
        {
          label: 'Formatting & Display',
          items: [
            { text: 'FormattableNumber', link: '/nimiq-utils/formattable-number', icon: 'i-tabler:hash' },
            { text: 'CurrencyInfo', link: '/nimiq-utils/currency-info', icon: 'i-tabler:currency-dollar' },
          ],
        },
        {
          label: 'Data & API Utilities',
          items: [
            { text: 'Fiat API', link: '/nimiq-utils/fiat-api', icon: 'i-tabler:api' },
            { text: 'Rate Limit Scheduler', link: '/nimiq-utils/rate-limit-scheduler', icon: 'i-tabler:clock' },
          ],
        },
        {
          label: 'Browser & Environment',
          items: [
            { text: 'Browser Detection', link: '/nimiq-utils/browser-detection', icon: 'i-tabler:browser' },
            { text: 'Clipboard', link: '/nimiq-utils/clipboard', icon: 'i-tabler:clipboard' },
            { text: 'Cookie Utilities', link: '/nimiq-utils/cookie-utilities', icon: 'i-tabler:cookie' },
          ],
        },
        {
          label: 'Miscellaneous',
          items: [
            { text: 'Request Link Encoding', link: '/nimiq-utils/request-link-encoding', icon: 'i-tabler:link' },
            { text: 'Utf8Tools', link: '/nimiq-utils/utf8-tools', icon: 'i-tabler:code' },
            { text: 'Tweenable', link: '/nimiq-utils/tweenable', icon: 'i-tabler:timeline' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { text: 'GitHub Repository', link: 'https://github.com/nimiq/nimiq-utils', icon: 'i-tabler:brand-github' },
            { text: 'Report Issues', link: 'https://github.com/nimiq/nimiq-utils/issues', icon: 'i-tabler:bug' },
          ],
        },
      ],
    },
    {
      text: 'Validators',
      subpath: 'validators',
      icon: 'i-local:nimiq-validators',
      defaultPageLink: '/validators/',
      description: 'Staking and pools',
      sidebar: [
        {
          label: 'Validators',
          items: [
            { text: 'Overview', link: '/validators/', icon: 'i-tabler:layout-grid' },
            { text: 'Becoming a Validator', link: '/validators/becoming-a-validator', icon: 'i-tabler:user-check' },
            { text: 'Prover Node Setup Guide', link: '/validators/prover-node-guide', icon: 'i-tabler:server' },
            { text: 'Staking Handbook', link: '/validators/staking-handbook', icon: 'i-tabler:book' },
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
      description: 'Nimiq 2.0 migration',
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
    { icon: 'i-nimiq:logos-twitter-mono', link: 'https://twitter.com/@nimiq', label: 'Twitter' },
    { icon: 'i-nimiq:logos-github-mono', link: 'https://github.com/nimiq', label: 'GitHub' },
    { icon: 'i-nimiq:logos-nimiq-forum-mono', link: 'https://forum.nimiq.community/', label: 'Forum' },
    { icon: 'i-nimiq:logos-discord-mono', link: 'https://discord.gg/cMHemg8', label: 'Discord' },
    { icon: 'i-nimiq:logos-telegram-mono', link: 'https://t.me/joinchat/AAAAAEJW-ozFwo7Er9jpHw', label: 'Telegram' },
    { icon: 'i-tabler:news', link: 'https://nimiq.com/blog/', label: 'Blog' },
    { icon: 'i-tabler:git-merge', link: 'https://nimiq-changelog.je-cf9.workers.dev/', label: 'Changelog' },
  ],
  showLastUpdated: false,
  showEditContent: false,

}
