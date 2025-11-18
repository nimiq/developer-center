import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import { data as webClientReferenceData } from './data/web-client-reference.data'
import openRpcDocument from './rpc/openrpc-document.json'
import { loadMethods } from './rpc/utils'

const { apiReferenceSection } = webClientReferenceData

// @unocss-include i-nimiq:verified i-nimiq:cubes i-nimiq:duotone-network i-nimiq:exclamation i-nimiq:leaf-2-filled i-nimiq:star

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
            { text: 'Browser vs Server-Side', link: '/web-client/browser-vs-server', icon: 'i-tabler:device-desktop' },
            { text: 'Web Client vs RPC', link: '/web-client/web-client-vs-rpc', icon: 'i-tabler:git-compare' },
            { text: 'Blockchain Explorers', link: '/rpc/blockchain-explorers', icon: 'i-tabler:search' },
            { text: 'Nimiq Tutorial', link: 'https://nimiq.guide', icon: 'i-tabler:school' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { text: 'Vite', link: '/web-client/integrations/vite', icon: 'i-logos:vitejs gray group-hocus:filter-none' },
            { text: 'Nuxt', link: '/web-client/integrations/nuxt', icon: 'i-logos:nuxt-icon gray group-hocus:filter-none' },
            { text: 'Next.js', link: '/web-client/integrations/NextJS', icon: 'i-logos:nextjs-icon gray group-hocus:filter-none' },
            { text: 'ESM', link: '/web-client/integrations/ESM', icon: 'i-logos:javascript gray group-hocus:filter-none' },
          ],
        },
        apiReferenceSection,
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
            { text: 'Network Protocol', link: '/protocol/node-sync/network-protocol', icon: 'i-nimiq:globe' },
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
      text: 'RPC',
      subpath: 'rpc',
      icon: 'i-local:nimiq-rpc',
      defaultPageLink: '/rpc/',
      description: 'JSON-RPC client',
      sidebar: [
        {
          label: 'Overview',
          items: [
            { text: 'Overview', link: '/rpc/', icon: 'i-tabler:layout-grid' },
            { text: 'Web Client vs RPC', link: '/web-client/web-client-vs-rpc', icon: 'i-tabler:git-compare' },
            { text: 'Open RPC Servers', link: '/rpc/open-servers', icon: 'i-tabler:server' },
            { text: 'Blockchain Explorers', link: '/rpc/blockchain-explorers', icon: 'i-tabler:search' },
            { text: 'RPC Node Setup', link: '/rpc/rpc-node-setup', icon: 'i-tabler:settings' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { text: 'Raw Requests', link: '/rpc/integrations/raw', icon: 'i-tabler:terminal-2' },
            { text: 'ARPL CLI Tool', link: '/rpc/integrations/arpl', icon: 'i-tabler:terminal' },
            { text: 'TypeScript Client', link: '/rpc/integrations/typescript', icon: 'i-logos:typescript-icon' },
            { text: 'JavaScript Native', link: '/rpc/integrations/javascript', icon: 'i-logos:javascript' },
            { text: 'MCP Server (AI)', link: '/rpc/integrations/mcp', icon: 'i-local:mcp' },
          ],
        },
        {
          label: 'Methods',
          items: [
            { text: 'All', link: '/rpc/methods/', icon: 'i-tabler:grid-dots' },
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
      text: 'Hub',
      subpath: 'hub',
      icon: 'i-local:nimiq-hub',
      defaultPageLink: '/hub/',
      description: 'Wallet integration API',
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { text: 'Overview', link: '/hub/', icon: 'i-tabler:home' },
            { text: 'Getting Started', link: '/hub/getting-started', icon: 'i-tabler:rocket' },
          ],
        },
        {
          label: 'Guide',
          items: [
            { text: 'Concepts', link: '/hub/guide/concepts', icon: 'i-tabler:book' },
            { text: 'Integration', link: '/hub/guide/integration', icon: 'i-tabler:code' },
            { text: 'Transactions', link: '/hub/guide/transactions', icon: 'i-tabler:receipt' },
            { text: 'Accounts', link: '/hub/guide/accounts', icon: 'i-tabler:user' },
            { text: 'Advanced Features', link: '/hub/guide/advanced', icon: 'i-tabler:star' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { text: 'Starter Template', link: 'https://github.com/onmax/nimiq-starter/tree/main/starters/hub-api-ts', icon: 'i-tabler:code-dots' },
            { text: 'API Reference', link: '/hub/api-reference', icon: 'i-tabler:api' },
          ],
        },
      ],
    },
    {
      text: 'Nodes & Validators',
      subpath: 'nodes',
      icon: 'i-local:nimiq-dev',
      defaultPageLink: '/nodes/',
      description: 'Validate the network',
      sidebar: [
        {
          items: [
            { text: 'Overview', link: '/nodes/', icon: 'i-tabler:layout-grid' },
          ],
        },
        {
          label: 'Run a Node',
          items: [
            { text: 'Node Setup', link: 'https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration', icon: 'i-tabler:lock' },
            { text: 'Prover Node Setup Guide', link: '/nodes/prover-node-guide', icon: 'i-tabler:server' },
          ],
        },
        {
          label: 'Validators',
          items: [
            { text: 'Becoming a Validator', link: '/nodes/validators/becoming-a-validator', icon: 'i-tabler:user-check' },
            { text: 'Staking Handbook', link: '/nodes/validators/staking-handbook', icon: 'i-tabler:book' },
            { text: 'Validator Trustscore', link: '/nodes/validators/validator-trustscore', icon: 'i-tabler:shield-star' },
            { text: 'FAQs for Stakers and Pools', link: '/nodes/validators/staking-faq', icon: 'i-tabler:help' },
            { text: 'Add Your Pool to the Wallet', link: 'https://github.com/nimiq/validators-api#add-your-validator-information', icon: 'i-tabler:wallet' },
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
    {
      text: 'Working with AI',
      subpath: 'working-with-ai',
      icon: 'i-tabler:robot',
      defaultPageLink: '/working-with-ai/',
      description: 'AI-powered development',
      sidebar: [
        {
          label: 'AI Integration',
          items: [
            { text: 'Overview', link: '/working-with-ai/', icon: 'i-tabler:home' },
            { text: 'Model Context Protocol', link: '/working-with-ai/mcp', icon: 'i-tabler:plug' },
            { text: 'LLMs.txt', link: '/working-with-ai/llms-txt', icon: 'i-tabler:file-text' },
          ],
        },
      ],
    },
  ],
  links: [
    { icon: 'i-nimiq:logos-twitter-mono', link: 'https://twitter.com/@nimiq', label: 'Twitter' },
    { icon: 'i-nimiq:logos-github-mono', link: 'https://github.com/nimiq', label: 'GitHub' },
    { icon: 'i-nimiq:logos-nimiq-forum-mono', link: 'https://forum.nimiq.community/', label: 'Forum' },
    { icon: 'i-nimiq:logos-discord-mono', link: 'https://discord.gg/nimiq', label: 'Discord' },
    { icon: 'i-nimiq:logos-telegram-mono', link: 'https://t.me/nimiq', label: 'Telegram' },
    { icon: 'i-tabler:news', link: 'https://nimiq.com/blog/', label: 'Blog' },
    { icon: 'i-tabler:git-merge', link: 'https://nimiq-changelog.je-cf9.workers.dev/', label: 'Changelog' },
  ],
  showLastUpdated: false,
  showEditContent: false,
  search: { provider: 'local' },
  pageFooterLeftText: false,
  betaBadge: true,
  logoContextMenu: {
    items: [
      { label: 'Nimiq UI', icon: 'i-tabler:palette', href: 'https://onmax.github.io/nimiq-ui/' },
      { label: 'Nimiq.com', icon: 'i-nimiq:logos-nimiq-mono', href: 'https://nimiq.com' },
    ],
  },
  outlineActions: [
    {
      icon: 'i-nimiq:thumb-up-thumb-down',
      label: 'Create issue',
      onClick: () => {
        if (typeof window !== 'undefined')
          window.open('https://github.com/nimiq/developer-center/issues/new', '_blank', 'noopener,noreferrer')
      },
    },
  ],
}
