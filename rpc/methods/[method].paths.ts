import openRpcJson from '../../.vitepress/rpc/openrpc-document.json'
import { loadMethods } from '../../.vitepress/rpc/utils'

export default {
  async paths() {
    const methods = (await loadMethods(openRpcJson as any)).map(group => group.methods).flat().map(m => ({ params: m }))
    return methods
  },
}
