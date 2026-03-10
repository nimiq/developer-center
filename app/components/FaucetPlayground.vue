<script setup lang="ts">
import { useFaucet } from '../composables/useFaucet'

const { address, canRequest, message, requestFunds, state } = useFaucet()
</script>

<template>
  <UCard class="border-0">
    <template #header>
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-sm font-semibold text-highlighted">
            Testnet Faucet
          </p>
          <p class="text-sm text-muted">
            Request free NIM for development.
          </p>
        </div>
        <UBadge color="primary" variant="soft">
          Testnet
        </UBadge>
      </div>
    </template>

    <form class="space-y-4" @submit.prevent="requestFunds">
      <UFormField label="Address" name="address">
        <UInput
          v-model="address"
          size="xl"
          placeholder="NQ..."
          icon="i-tabler:wallet"
        />
      </UFormField>

      <div class="flex justify-end">
        <UButton
          type="submit"
          :loading="state === 'loading'"
          :disabled="!canRequest"
          label="Request Funds"
          trailing-icon="i-tabler:arrow-right"
          color="primary"
          class="rounded-full"
        />
      </div>
    </form>

    <UAlert
      v-if="message"
      :color="state === 'success' ? 'success' : 'error'"
      :icon="state === 'success' ? 'i-tabler:circle-check' : 'i-tabler:alert-circle'"
      variant="soft"
      class="mt-4"
    >
      <template #description>
        {{ message }}
      </template>
    </UAlert>
  </UCard>
</template>
