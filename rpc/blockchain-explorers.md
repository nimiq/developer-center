# Nimiq Blockchain Explorers

Explore Nimiq blockchain data, transactions, addresses, and network statistics through community-built explorers.

## Mainnet

<NqGrid span="2">
  <li v-for="explorer in data.mainnet" :key="explorer.link">
    <NqCard :href="explorer.link" :title="explorer.name" :description="explorer.developer ? `By ${explorer.developer}` : 'Community'" layout="row">
      <template #icon>
        <img :src="explorer.logo" :alt="explorer.name" size-48 shrink-0 />
      </template>
    </NqCard>
  </li>
</NqGrid>

## Testnet

<NqGrid span="2">
  <li v-for="explorer in data.testnet" :key="explorer.link">
    <NqCard :href="explorer.link" :title="explorer.name" :description="explorer.developer ? `By ${explorer.developer}` : 'Community'" layout="row">
      <template #icon>
        <img :src="explorer.logo" :alt="explorer.name" size-48 shrink-0 />
      </template>
    </NqCard>
  </li>
</NqGrid>

<script setup lang="ts">
import { data } from '../.vitepress/data/blockchain-explorers.data'
</script>
