<script setup lang="ts">
import type { NimiqRpcMethod } from '../utils/rpc'
import { $fetch } from 'ofetch'
import { reactive, ref, watchEffect } from 'vue'

const props = defineProps<{
  method: NimiqRpcMethod
}>()

const serverUrl = ref('https://rpc.nimiqwatch.com')
const params = reactive<Record<string, string | boolean>>({})
const loading = ref(false)
const response = ref<any>(null)
const error = ref<string | null>(null)

watchEffect(() => {
  for (const input of props.method.input) {
    if (!(input.key in params)) {
      params[input.key] = input.type === 'boolean' ? false : ''
    }
  }
})

async function callRpc() {
  loading.value = true
  error.value = null
  response.value = null

  try {
    const parsedParams = props.method.input.map((input) => {
      const value = params[input.key]
      if (input.type.includes('number')) {
        return Number(value)
      }
      if (input.type === 'boolean') {
        return Boolean(value)
      }
      return value
    })

    const result = await $fetch('/api/rpc-proxy', {
      method: 'POST',
      query: { target: serverUrl.value },
      body: {
        jsonrpc: '2.0',
        method: props.method.name,
        params: parsedParams,
        id: 1,
      },
    })

    response.value = result
  }
  catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <span class="text-xs font-semibold uppercase tracking-widest text-muted">{{ props.method.tags?.[0]?.name || 'rpc' }}</span>
      <h1 class="text-4xl font-semibold tracking-tight text-highlighted">
        {{ props.method.humanReadableName }}
      </h1>
      <p v-if="props.method.description" class="max-w-3xl text-base leading-7 text-muted">
        {{ props.method.description }}
      </p>
    </section>

    <UCard class="border-0">
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <div>
            <h2 class="text-lg font-semibold text-highlighted">
              Interactive playground
            </h2>
            <p class="text-sm text-muted">
              Try the method against a public RPC endpoint.
            </p>
          </div>
        </div>
      </template>

      <div class="space-y-4">
        <UFormField label="RPC endpoint" name="server">
          <UInput v-model="serverUrl" icon="i-tabler:server" />
        </UFormField>

        <div
          v-if="props.method.input.length"
          class="grid gap-4 md:grid-cols-2"
        >
          <UFormField
            v-for="input in props.method.input"
            :key="input.key"
            :label="input.label || input.key"
            :name="input.key"
          >
            <USwitch
              v-if="input.type === 'boolean'"
              v-model="params[input.key]"
            />
            <UInput
              v-else
              v-model="params[input.key]"
              :placeholder="input.type"
            />
          </UFormField>
        </div>

        <div class="flex justify-end">
          <UButton
            :loading="loading"
            label="Call method"
            trailing-icon="i-tabler:player-play"
            color="primary"
            class="rounded-full"
            @click="callRpc"
          />
        </div>
      </div>
    </UCard>

    <div class="grid gap-6 lg:grid-cols-2">
      <UCard class="border-0">
        <template #header>
          <h2 class="text-lg font-semibold text-highlighted">
            Parameters
          </h2>
        </template>
        <div v-if="props.method.input.length" class="space-y-3">
          <div
            v-for="input in props.method.input"
            :key="input.key"
            class="rounded-2xl border border-default bg-muted p-4"
          >
            <div class="flex flex-wrap items-center gap-2">
              <code class="text-sm font-semibold text-highlighted">{{ input.key }}</code>
              <UBadge color="secondary" variant="soft">
                {{ input.type }}
              </UBadge>
              <UBadge :color="input.required ? 'success' : 'neutral'" variant="soft">
                {{ input.required ? 'required' : 'optional' }}
              </UBadge>
            </div>
            <p v-if="input.label" class="mt-2 text-sm text-muted">
              {{ input.label }}
            </p>
          </div>
        </div>
        <p v-else class="text-sm text-muted">
          This method does not accept any parameters.
        </p>
      </UCard>

      <UCard class="border-0">
        <template #header>
          <h2 class="text-lg font-semibold text-highlighted">
            Response fields
          </h2>
        </template>
        <div v-if="props.method.output.length" class="space-y-3">
          <div
            v-for="output in props.method.output"
            :key="output.key"
            class="rounded-2xl border border-default bg-muted p-4"
          >
            <div class="flex flex-wrap items-center gap-2">
              <code class="text-sm font-semibold text-highlighted">{{ output.key }}</code>
              <UBadge color="secondary" variant="soft">
                {{ output.type }}
              </UBadge>
            </div>
            <p v-if="output.label" class="mt-2 text-sm text-muted">
              {{ output.label }}
            </p>
          </div>
        </div>
        <p v-else class="text-sm text-muted">
          This method does not return a structured result.
        </p>
      </UCard>
    </div>

    <UAlert
      v-if="error"
      color="error"
      variant="soft"
      icon="i-tabler:alert-circle"
      :description="error"
    />

    <UCard v-if="response" class="border-0">
      <template #header>
        <h2 class="text-lg font-semibold text-highlighted">
          Latest response
        </h2>
      </template>
      <pre class="overflow-x-auto text-sm">{{ JSON.stringify(response, null, 2) }}</pre>
    </UCard>
  </div>
</template>
