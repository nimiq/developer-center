import type { Auth, HttpOptions, HttpRpcResult } from 'nimiq-rpc-client-ts/types'
import type { RpcMethodProps } from './types'
import { useLocalStorage } from '@vueuse/core'
import { rpcCall } from 'nimiq-rpc-client-ts/http'

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

export type UsePlaygroundRpcOptions = RpcPlaygroundMethod & {
  method: string
  name: string
}

export function usePlaygroundRpc(props: Partial<RpcMethodProps>) {
  const defaultNodeUrl = '/api/rpc'
  const playgroundConfig = useLocalStorage<RpcPlaygroundConfig>(`v1_rpc_${props.method || 'playground'}`, {
    nodeUrl: defaultNodeUrl,
    auth: { username: '', password: '' },
  })

  const playground = useLocalStorage<RpcPlaygroundMethod>(``, {
    ...props as RpcMethodProps,
    state: props ? 'idle' : 'unselected',
    userParams: [],
  })

  const history = useLocalStorage<HttpRpcResult<any>[]>(`v1_rpc_history`, [])

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
      const auth: Auth = { username: playgroundConfig.value.auth.username, password: playgroundConfig.value.auth.password }
      const options: HttpOptions = { url, auth }
      const res = await rpcCall(playground.value.name, playground.value.userParams, options)
      playground.value.state = 'success'
      history.value.push(res)
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
