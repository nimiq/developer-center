/// <reference types="vite/client" />
/// <reference types="vitepress/client" />

import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import type { NimiqRpcMethods } from './rpc/utils'

declare global {
  const __NIMIQ_OPENRPC_INFO__: OpenrpcDocument['info']
  const __NIMIQ_OPENRPC_METHODS__: NimiqRpcMethods[]
  const __NIMIQ_RPC_VERSION__: string
}

export { }
