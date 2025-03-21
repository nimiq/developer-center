import openRpcJson from '../../.vitepress/rpc/openrpc-document.json'

// console.log(openRpcJson.methods.map(method => method.name))

export default {
  paths() {
    return openRpcJson.methods.map(method => ({
      params: { method: method?.name || '' },
    }))
  },
}
