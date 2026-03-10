<script setup lang="ts">
import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import { useAsyncData } from '#imports'
import openRpcDocument from '../../data/openrpc-document.json'
import { loadMethods } from '../utils/rpc'

const { data: groups } = await useAsyncData('rpc-method-groups', () => loadMethods(openRpcDocument as OpenrpcDocument))
</script>

<template>
  <div class="space-y-8">
    <section v-for="group in (groups || [])" :key="group.text" class="space-y-4">
      <div class="flex items-center gap-2">
        <UIcon :name="group.icon" class="size-5 text-muted" />
        <h2 class="text-lg font-semibold text-highlighted">
          {{ group.text }}
        </h2>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <UButton
          v-for="method in group.methods" :key="method.name"
          :to="method.link" :label="method.name"
          variant="soft" color="neutral" class="justify-start rounded-xl font-mono text-sm"
        />
      </div>
    </section>
  </div>
</template>
