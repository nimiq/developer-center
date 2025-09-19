import type { OpenrpcDocument } from '@open-rpc/meta-schema'
import openRpcDocument from '../rpc/openrpc-document.json'
import { loadMethods } from '../rpc/utils'

// VitePress data loader
export default {
  async load() {
    const methods = await loadMethods(openRpcDocument as OpenrpcDocument)
    return methods
  },
}
