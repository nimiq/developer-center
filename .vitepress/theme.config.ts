import type { NimiqVitepressSidebar } from 'nimiq-vitepress-theme/types'
import rpcDocs from './cache/openrpc-document.json'

const slugify = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

// @unocss-include

// Helper function to generate RPC method items
function getRpcMethodItems(): NimiqVitepressSidebar['items'] {
  const tagOrder = ['validator', 'blockchain', 'consensus', 'wallet', 'policy', 'mempool', 'network', 'zkp_component']
  const accordions: NimiqVitepressSidebar['items'] = tagOrder.map(tag => ({
    text: capitalizeFirstLetter(tag).replace(/_/g, ' '),
    icon: 'i-tabler:chevron-down',
    items: rpcDocs.methods.filter(method => method.tags.map(t => t.name).includes(tag)).map(method => ({
      text: `\`${method.name}\``,
      link: `/rpc-docs/methods/${slugify(method.name)}`,
    })),
  }))
  return accordions
}

export const themeConfig = {
  modules: [
    {
      text: 'Build',
      subpath: 'build',
      icon: 'i-tabler:hammer',
      defaultPageLink: '/build/',
      description: 'On top of Nimiq',
      sidebar: [
        {
          label: 'Build',
          items: [
            { text: 'Overview', link: '/build/', icon: 'i-tabler:layout-grid' },
            { text: 'Integrator guide', link: '/build/integrator-guide', icon: 'i-tabler:git-merge' },
            { text: 'Web Client VS RPC Client', link: '/build/web-client-rpc', icon: 'i-tabler:compare' },
          ],
        },
        {
          label: 'Web client',
          items: [
            { text: 'Overview', link: '/build/web-client/', icon: 'i-tabler:browser' },
            { text: 'Getting started', link: '/build/web-client/getting-started', icon: 'i-tabler:player-play' },
            { text: 'Installation', link: '/build/web-client/installation', icon: 'i-tabler:download' },
            { text: 'Integrations', link: '/build/web-client/integrations', icon: 'i-tabler:plug' },
            {
              text: 'Reference',
              icon: 'i-tabler:list',
              items: [
                { text: 'Classes', link: '/build/web-client/reference/classes' },
                { text: 'Enumerations', link: '/build/web-client/reference/enumerations' },
                { text: 'Functions', link: '/build/web-client/reference/functions' },
                { text: 'Globals', link: '/build/web-client/reference/globals' },
                { text: 'Interfaces', link: '/build/web-client/reference/interfaces' },
                { text: 'Type Aliases', link: '/build/web-client/reference/type-aliases' },
              ],
            },
          ],
        },
        {
          label: 'Own Node',
          items: [
            { text: 'Overview', link: '/build/set-up-your-own-node/', icon: 'i-tabler:server' },
            { text: 'Becoming a Validator', link: '/build/set-up-your-own-node/becoming-a-validator', icon: 'i-tabler:user-check' },
            { text: 'Prover Node Setup Guide', link: '/build/set-up-your-own-node/prover-node-guide', icon: 'i-tabler:book' },
            { text: 'RPC Docs', link: '/rpc-docs/index', icon: 'i-tabler:code' },
          ],
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
            { text: 'Add Your Pool to the Wallet', link: 'https://github.com/nimiq/validators-api?tab=readme-ov-file#nimiq-validators', icon: 'i-tabler:wallet' },
            { text: 'Validator Trustscore', link: '/validators/validator-trustscore', icon: 'i-tabler:shield-star' },
            { text: 'FAQs for Stakers and Pools', link: '/validators/staking-faq', icon: 'i-tabler:help' },
          ],
        },
      ],
    },
    {
      text: 'Learn',
      subpath: 'learn',
      icon: 'i-tabler:book',
      defaultPageLink: '/learn/',
      description: 'The technology',
      sidebar: [
        {
          label: 'Learn',
          items: [
            { text: 'Home', link: '/learn/', icon: 'i-tabler:home' },
            { text: 'Overview', link: '/learn/protocol/overview', icon: 'i-tabler:layout-grid' },
            { text: 'Glossary', link: '/learn/protocol/glossary', icon: 'i-tabler:book-2' },
          ],
        },
        {
          label: 'Protocol',
          items: [
            {
              text: 'Protocol',
              icon: 'i-tabler:api',
              items: [
                { text: 'Block Format', link: '/learn/protocol/block-format' },
                { text: 'Punishments', link: '/learn/protocol/punishments' },
                { text: 'Equivocation Proofs', link: '/learn/protocol/equivocation-proofs' },
                { text: 'Accounts', link: '/learn/protocol/accounts' },
                { text: 'Transactions', link: '/learn/protocol/transactions' },
                { text: 'Rewards', link: '/learn/protocol/rewards' },
                { text: 'Merkle Trees', link: '/learn/protocol/merkle-trees' },
                { text: 'Mempool', link: '/learn/protocol/mempool' },
                { text: 'History Store', link: '/learn/protocol/history-store' },
              ],
            },
            {
              text: 'Validators',
              icon: 'i-tabler:user-shield',
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
              icon: 'i-tabler:network',
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
              icon: 'i-tabler:lock',
              items: [
                { text: 'ZKP and Recursive SNARKs', link: '/learn/protocol/ZKP-and-recursive-SNARKs' },
                { text: 'Prover node', link: '/learn/protocol/prover-node' },
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'JSON-RPC',
      subpath: 'rpc-docs',
      icon: 'i-tabler:code',
      defaultPageLink: '/rpc-docs/',
      description: 'Interact with a node',
      sidebar: [
        {
          text: 'Overview',
          link: '/rpc-docs',
          icon: 'i-tabler:api',
          items: getRpcMethodItems(),
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
