<script setup lang="ts">
import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import type { NimiqRpcMethods } from '../../../utils/rpc'
import { createError, definePageMeta, useAsyncData, useRoute, useSeoMeta } from '#imports'
import { computed } from 'vue'
import openRpcDocument from '../../../../data/openrpc-document.json'
import { loadMethods } from '../../../utils/rpc'

definePageMeta({
  layout: 'docs',
})

const route = useRoute()
const methodSlug = computed(() => String(route.params.method))
const { data: groups } = await useAsyncData('rpc-method-groups-page', () => loadMethods(openRpcDocument as OpenrpcDocument))

const method = computed(() => groups.value?.flatMap((group: NimiqRpcMethods) => group.methods).find(item => item.method === methodSlug.value))

if (!method.value) {
  throw createError({ statusCode: 404, statusMessage: 'RPC method not found', fatal: true })
}

useSeoMeta({
  title: method.value.humanReadableName,
  description: method.value.description,
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <UPageBody>
          <RpcMethod v-if="method" :method="method" />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
