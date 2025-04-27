/// <reference types="vite/client" />

import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import type { NimiqRpcMethods } from './rpc/utils'

declare global {
  const __NIMIQ_OPENRPC_INFO__: OpenrpcDocument['info']
  const __NIMIQ_OPENRPC_METHODS__: NimiqRpcMethods[]
}

export { }
