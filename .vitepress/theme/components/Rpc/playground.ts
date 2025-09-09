import type { Auth, HttpOptions, HttpRpcResult } from 'nimiq-rpc-client-ts/types'
import type { MaybeRef } from 'vue'
import type { NimiqRpcMethod } from '../../../rpc/utils'
import { useLocalStorage } from '@vueuse/core'
import { rpcCall } from 'nimiq-rpc-client-ts/http'
import { computed, toValue, watchEffect } from 'vue'

export interface RpcPlaygroundConfig {
  nodeUrl: string
  auth: {
    username: string
    password: string
  }
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
  const defaultNodeUrl = '/api/rpc'
  const playgroundConfig = useLocalStorage<RpcPlaygroundConfig>(`v1_rpc_playground`, {
    nodeUrl: defaultNodeUrl,
    auth: { username: '', password: '' },
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
      const url = new URL(playgroundConfig.value.nodeUrl, window.location.origin)
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
      playground.value.state = 'success'
      history.value = [res, ...history.value]
    }
    catch (error) {
      playground.value.state = 'error'
      console.error('RPC call failed:', error)
    }
  }

  const groupedHistory = computed(() => {
    const today: HttpRpcResult<any>[] = []
    const yesterday: HttpRpcResult<any>[] = []
    const older: HttpRpcResult<any>[] = []

    const now = new Date()
    for (const item of history.value) {
      const date = new Date(item[3].request.timestamp)
      const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

      if (diff === 0)
        today.push(item)
      else if (diff === 1)
        yesterday.push(item)
      else
        older.push(item)
    }
    return [{ label: 'Today', items: today }, { label: 'Yesterday', items: yesterday }, { label: 'Older', items: older }]
  })

  return {
    defaultNodeUrl,
    widget: playground,
    callRpc,
    history,
    groupedHistory,
    clearHistory,
    playgroundConfig,
  }
}
