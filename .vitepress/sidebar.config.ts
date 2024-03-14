import type { DefaultTheme } from 'vitepress'
import { Accordion } from './theme/utils/sidebar'

export const sidebar: DefaultTheme.Sidebar = {
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
        { text: 'JSON-RPC Specification', link: '/build/rpc-docs/' },
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
          text: 'Design',
          collapsed: false,
          items: [
            { text: 'Design Kit', link: '/build/ui/design/design-kit' },
            { text: 'Icons', link: '/build/ui/design/icons' },
            { text: 'Typography', link: '/build/ui/design/typography/' },
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
}
