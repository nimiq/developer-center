import type { Auth, HttpOptions, HttpRpcResult } from 'nimiq-rpc-client-ts/types'
import type { MaybeRef } from 'vue'
import type { NimiqRpcMethod } from '../../../rpc/utils'
import { useLocalStorage, useUrlSearchParams } from '@vueuse/core'
import { rpcCall } from 'nimiq-rpc-client-ts/http'
import { computed, toValue, watch, watchEffect } from 'vue'

export interface RpcPlaygroundConfig {
  nodeUrl: string
  auth: {
    username: string
    password: string
  }
  useProxy: boolean
}

export type RpcPlaygroundMethod = (NimiqRpcMethod & {
  state: 'loading' | 'success' | 'error' | 'idle'
  userParams: any[]
}) | Partial<NimiqRpcMethod> & {
  state: 'unselected'
  userParams: Record<string, any>
}

export type UsePlaygroundRpcOptions = RpcPlaygroundMethod & {
  method: string
}

export function usePlaygroundRpc(props: MaybeRef<Partial<NimiqRpcMethod>>) {
  const defaultNodeUrl = 'https://nimiq-website.je-cf9.workers.dev/'
  const playgroundConfig = useLocalStorage<RpcPlaygroundConfig>(`v1_rpc_playground`, {
    nodeUrl: defaultNodeUrl,
    auth: { username: '', password: '' },
    useProxy: true,
  })

  const method = computed(() => toValue(props).method)
  const key = computed(() => `v1_rpc_playground_${method.value}`)

  const playground = useLocalStorage<RpcPlaygroundMethod>(key, {
    ...toValue(props) as NimiqRpcMethod,
    state: toValue(props) ? 'idle' : 'unselected',
    userParams: [],
  })

  watchEffect(() => {
    playground.value.userParams = Object.fromEntries((playground.value.input || []).map(param => [param.key, undefined]))
  })

  // Sync userParams with URL query parameters for sharing
  const urlParams = useUrlSearchParams('history')

  // Helper to create prefixed param key (e.g., "getAccountByAddress.address")
  const getParamKey = (inputKey: string) => `${method.value}.${inputKey}`

  // Initialize userParams from URL on mount
  watchEffect(() => {
    const methodName = method.value
    if (!methodName)
      return

    // Load from URL params if present
    const inputs = playground.value.input || []
    inputs.forEach((input) => {
      const paramKey = getParamKey(input.key)
      const urlValue = urlParams[paramKey]
      if (urlValue !== null && urlValue !== undefined && urlValue !== '') {
        playground.value.userParams[input.key] = String(urlValue)
      }
    })
  })

  // Sync userParams to URL when they change
  watch(() => playground.value.userParams, (params) => {
    if (!params || !method.value)
      return

    // Update URL with current params (prefixed with method name)
    Object.entries(params).forEach(([key, value]) => {
      const paramKey = getParamKey(key)
      if (value !== undefined && value !== null && value !== '') {
        urlParams[paramKey] = String(value)
      }
      else {
        // Remove param from URL if empty
        delete urlParams[paramKey]
      }
    })
  }, { deep: true })

  const history = useLocalStorage<HttpRpcResult<any>[]>(`v1_rpc_history`, [])

  function clearHistory(withConfirmation = true) {
    // eslint-disable-next-line no-alert
    const consent = withConfirmation ? confirm('Are you sure you want to clear the history?') : true
    if (!consent)
      return
    history.value = []
  }

  async function callRpc(method: string, params: any[]) {
    if (!playground.value.name) {
      console.error('No method name provided')
      return
    }
    try {
      playground.value.state = 'loading'
      const nodeUrl = playgroundConfig.value.nodeUrl

      // Use proxy for custom URLs (not the default Cloudflare Worker)
      // This avoids CORS issues with user-configured RPC nodes
      let url: URL
      const isDev = import.meta.env.DEV
      const shouldUseProxy = playgroundConfig.value.useProxy && nodeUrl !== defaultNodeUrl && nodeUrl.startsWith('http')

      if (shouldUseProxy) {
        // In dev: use Vite dev server proxy
        // In prod: use Cloudflare Worker proxy (deployed separately)
        const proxyBaseUrl = isDev
          ? (typeof window !== 'undefined' ? window.location.origin : 'http://localhost')
          : 'https://nimiq-website.je-cf9.workers.dev'

        const proxyUrl = new URL('/api/rpc-proxy', proxyBaseUrl)
        proxyUrl.searchParams.set('target', nodeUrl)
        url = proxyUrl
      }
      else {
        // Direct connection when proxy is disabled
        url = nodeUrl.startsWith('http') ? new URL(nodeUrl) : new URL(nodeUrl, typeof window !== 'undefined' ? window.location.origin : 'http://localhost')
      }

      const auth: Auth = { username: playgroundConfig.value.auth.username, password: playgroundConfig.value.auth.password }
      const options: HttpOptions = { url, auth }
      const parsedParams = Object.values(params).map((p, i) => {
        if (playground.value.input?.at(i)?.type === 'number')
          return Number(p.trim())
        else if (playground.value.input?.at(i)?.type === 'boolean')
          return p.trim() === 'true'
        return p.trim()
      })
      const res = await rpcCall(method, parsedParams, options)

      // Check if we need to enhance the error result for better UX
      const isDefaultServer = playgroundConfig.value.nodeUrl === defaultNodeUrl
      if (!res[0] && isDefaultServer) {
        // This is an error result from the default server - enhance the metadata
        const [_isOk, _error, _data, metadata] = res
        const enhancedMetadata = {
          ...metadata,
          isDefaultServer,
          serverUrl: playgroundConfig.value.nodeUrl,
        }
        res[3] = enhancedMetadata
      }

      playground.value.state = res[0] ? 'success' : 'error'
      history.value = [res, ...history.value]
    }
    catch (error) {
      playground.value.state = 'error'
      console.error('RPC call failed:', error)
    }
  }

  return {
    defaultNodeUrl,
    widget: playground,
    callRpc,
    history,
    clearHistory,
    playgroundConfig,
  }
}
