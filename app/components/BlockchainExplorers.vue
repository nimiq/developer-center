<script setup lang="ts">
import { useFetch } from '#imports'

interface Explorer {
  name: string
  description: string
  link: string
  logo: string
  developer: string | null
}

interface ExplorerData {
  mainnet: Explorer[]
  testnet: Explorer[]
}

const { data } = await useFetch<ExplorerData>('/api/blockchain-explorers', {
  key: 'blockchain-explorers',
  default: () => ({ mainnet: [], testnet: [] }),
})
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2>Mainnet</h2>
      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <NuxtLink v-for="explorer in data.mainnet" :key="explorer.link" :to="explorer.link" target="_blank" class="no-underline">
          <UCard>
            <div class="flex items-center gap-4">
              <img :src="explorer.logo" :alt="explorer.name" class="h-12 w-12 rounded-2xl object-cover">
              <div>
                <p class="text-sm font-semibold text-highlighted">
                  {{ explorer.name }}
                </p>
                <p class="text-xs text-muted">
                  {{ explorer.developer ? `By ${explorer.developer}` : 'Community' }}
                </p>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </section>
    <section>
      <h2>Testnet</h2>
      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <NuxtLink v-for="explorer in data.testnet" :key="explorer.link" :to="explorer.link" target="_blank" class="no-underline">
          <UCard>
            <div class="flex items-center gap-4">
              <img :src="explorer.logo" :alt="explorer.name" class="h-12 w-12 rounded-2xl object-cover">
              <div>
                <p class="text-sm font-semibold text-highlighted">
                  {{ explorer.name.replace(' Testnet', '') }}
                </p>
                <p class="text-xs text-muted">
                  {{ explorer.developer ? `By ${explorer.developer}` : 'Community' }}
                </p>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
