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
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="method in group.methods"
          :key="method.name"
          :to="method.link"
          class="group block rounded-2xl border border-default bg-default p-5 transition hover:border-primary/40 hover:bg-elevated"
        >
          <div class="space-y-3">
            <div class="space-y-1">
              <p class="font-mono text-sm text-muted">
                {{ method.name }}
              </p>
              <h3 class="text-base font-semibold text-highlighted group-hover:text-primary">
                {{ method.humanReadableName }}
              </h3>
            </div>
            <p class="line-clamp-3 text-sm leading-6 text-toned">
              {{ method.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
