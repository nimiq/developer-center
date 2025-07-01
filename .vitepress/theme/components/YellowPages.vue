<script setup lang="ts">
// Yellow Pages - Quick access to the most important Nimiq links
const sections = [
  {
    title: 'Protocol & Core',
    links: [
      { title: 'Protocol Overview', href: '/protocol/protocol/overview' },
      { title: 'Block Format', href: '/protocol/protocol/block-format' },
      { title: 'Validators', href: '/protocol/protocol/validators/validators' },
      { title: 'Staking Contract', href: '/protocol/protocol/validators/staking-contract' },
      { title: 'ZKP & SNARKs', href: '/protocol/protocol/ZKP-and-recursive-SNARKs' },
    ],
  },
  {
    title: 'Web Development',
    links: [
      { title: 'Web Client Start', href: '/web-client/getting-started' },
      { title: 'Installation Guide', href: '/web-client/installation' },
      { title: 'Integrations', href: '/web-client/integrations' },
      { title: 'API Reference', href: '/web-client/reference/classes' },
      { title: 'Client Config', href: '/web-client/reference/classes/ClientConfiguration' },
    ],
  },
  {
    title: 'Backend & RPC',
    links: [
      { title: 'RPC Overview', href: '/rpc-client/' },
      { title: 'RPC Clients', href: '/rpc-client/clients' },
      { title: 'getAccount', href: '/rpc-client/getAccount' },
      { title: 'sendRawTransaction', href: '/rpc-client/sendRawTransaction' },
      { title: 'getBlockByNumber', href: '/rpc-client/getBlockByNumber' },
    ],
  },
  {
    title: 'Validators & Staking',
    links: [
      { title: 'Become Validator', href: '/validators/becoming-a-validator' },
      { title: 'Prover Node Setup', href: '/validators/prover-node-guide' },
      { title: 'Staking Handbook', href: '/validators/staking-handbook' },
      { title: 'Validator Trustscore', href: '/validators/validator-trustscore' },
      { title: 'Staking FAQ', href: '/validators/staking-faq' },
    ],
  },
]
</script>

<template>
  <div flex="~ gap-64 wrap" class="nq-raw" f-mt-lg>
    <div v-for="section in sections" :key="section.title">
      <h3 nq-label>
        {{ section.title }}
      </h3>

      <ul list-none space-y-sm f-mt-xs>
        <li v-for="link in section.links" :key="link.href">
          <a :href="link.href" py-4 block f-text-xs hover:underline transition="colors duration-200">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
