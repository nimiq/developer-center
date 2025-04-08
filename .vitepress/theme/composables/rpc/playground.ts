import type { CallResult } from 'nimiq-rpc-client-ts'
import type { RpcMethodProps } from './types'
import { useLocalStorage } from '@vueuse/core'
import { NimiqRPCClient } from 'nimiq-rpc-client-ts'

export interface RpcPlaygroundConfig {
  nodeUrl: string
  auth: {
    username: string
    password: string
  }
}

export type RpcPlaygroundMethod = (RpcMethodProps & {
  state: 'loading' | 'success' | 'error' | 'idle'
  userParams: any[]
}) | Partial<RpcMethodProps> & {
  state: 'unselected'
  userParams: []
}

export type RpcRequest = CallResult<unknown, undefined>

export type UsePlaygroundRpcOptions = RpcPlaygroundMethod & {
  method: string
  name: string
}

export function usePlaygroundRpc(props: Partial<RpcMethodProps>) {
  const playgroundConfig = useLocalStorage<RpcPlaygroundConfig>(`v1_rpc_${props.method || 'playground'}`, {
    nodeUrl: '/api/rpc', // Changed from 'https://rpc.nimiqwatch.com/' to use the proxy
    auth: { username: '', password: '' },
  })

  const playground = useLocalStorage<RpcPlaygroundMethod>(``, {
    ...props as RpcMethodProps,
    state: props ? 'idle' : 'unselected',
    userParams: [],
  })

  const history = useLocalStorage<RpcRequest[]>(`v1_rpc_history`, [])

  function clearHistory(withConfirmation = true) {
    // eslint-disable-next-line no-alert
    const consent = withConfirmation ? confirm('Are you sure you want to clear the history?') : true
    if (!consent)
      return
    history.value = []
  }

  async function callRpc() {
    if (!playground.value.name) {
      console.error('No method name provided')
      return
    }
    try {
      playground.value.state = 'loading'
      const url = new URL(playgroundConfig.value.nodeUrl, window.location.origin)
      const client = new NimiqRPCClient(url, playgroundConfig.value.auth)
      const res = await client.call({ method: playground.value.name, params: playground.value.userParams })
      playground.value.state = 'success'
      history.value.push(res)
    }
    catch (error) {
      playground.value.state = 'error'
      console.error('RPC call failed:', error)
    }
  }

  return {
    widget: playground,
    callRpc,
    history,
    clearHistory,
    playgroundConfig,
  }
}
