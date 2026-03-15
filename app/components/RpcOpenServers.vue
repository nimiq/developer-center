<script setup lang="ts">
import { useFetch } from '#imports'

interface RpcServer {
  name: string
  endpoint: string
  maintainer: string
  statusLink: string | null
}

interface RpcServersData {
  mainnet: RpcServer[]
  testnet: RpcServer[]
}

const { data } = await useFetch<RpcServersData>('/api/rpc-servers', {
  key: 'rpc-servers',
  default: () => ({ mainnet: [], testnet: [] }),
})

const columns = [
  { accessorKey: 'name', header: 'Server' },
  { accessorKey: 'endpoint', header: 'URL' },
  { accessorKey: 'maintainer', header: 'Maintainer' },
]
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2>Mainnet</h2>
      <UTable
        :data="data.mainnet"
        :columns="columns"
        class="overflow-hidden rounded-[1.25rem]"
      />
    </section>
    <section>
      <h2>Testnet</h2>
      <UTable
        :data="data.testnet"
        :columns="columns"
        class="overflow-hidden rounded-[1.25rem]"
      />
    </section>
  </div>
</template>
