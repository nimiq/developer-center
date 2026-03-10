import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'

const FAUCET_URL = 'https://faucet.pos.nimiq-testnet.com'

export function useFaucet() {
  const address = ref('')
  const message = ref('')
  const state = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

  const canRequest = computed(() => address.value.length > 0 && state.value !== 'loading')

  async function requestFunds() {
    state.value = 'loading'
    message.value = ''

    try {
      const { data, error } = await useFetch(`${FAUCET_URL}/tapit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ address: address.value }).toString(),
      }).json()

      if (error.value)
        throw new Error(error.value.message || 'Request failed')

      const result = data.value as any
      if (!result.success)
        throw new Error(result.msg || 'Faucet error')

      state.value = 'success'
      message.value = result.msg
    }
    catch (e: any) {
      state.value = 'error'
      message.value = e.message
    }
  }

  return { address, state, message, requestFunds, canRequest }
}
