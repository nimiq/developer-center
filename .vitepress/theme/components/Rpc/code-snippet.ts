// @unocss-include

import type { MaybeRef } from 'vue'
import type { RpcPlaygroundMethod } from './playground'
import { useDark, useLocalStorage } from '@vueuse/core'
import { codeToHtml } from 'shiki'
import { computed, ref, toValue } from 'vue'
import { usePlaygroundRpc } from './playground'

export function useCodeSnippet(method: MaybeRef<RpcPlaygroundMethod>) {
  const { playgroundConfig } = usePlaygroundRpc(method)
  const nodeUrl = computed(() => playgroundConfig.value.nodeUrl)
  type TabName = 'curl' | 'js' | 'ts'
  const currentTab = useLocalStorage<TabName>(`v1_rpc_tabs`, 'curl')

  const isDark = useDark()
  const theme = computed(() => isDark.value ? 'vitesse-dark' : 'vitesse-light')

  function toHtml(codeSnippet: string, lang: string) {
    const html = ref('')
    // `v-html` does not work with promises
    codeToHtml(codeSnippet, { theme: theme.value, lang }).then(c => html.value = c)
    return html
  }

  const tabs = computed(() => [
    { lang: 'curl', label: 'Curl', icon: 'i-tabler:terminal', html: toHtml(getCurlCodeSnippet(nodeUrl.value, method), 'bash') },
    { lang: 'js', label: 'Javascript', icon: 'i-logos:javascript', html: toHtml(getJsCodeSnippet(nodeUrl.value, method), 'javascript') },
    { lang: 'ts', label: 'Typescript', icon: 'i-logos:typescript-icon', html: toHtml(getTsCodeSnippet(nodeUrl.value, method), 'typescript') },
  ])

  return {
    tabs,
    currentTab,
  }
}

function getCurlCodeSnippet(nodeUrl: string, method: MaybeRef<RpcPlaygroundMethod>) {
  const { name, userParams: params } = toValue(method)
  const paramsStr = JSON.stringify(params)
  return `curl -X POST -H "Content-Type: application/json" \\
  -d '{
    "method": "${name}",
    "params": ${paramsStr}
  }' \\
  ${nodeUrl}`
}

function getTsCodeSnippet(nodeUrl: string, method: MaybeRef<RpcPlaygroundMethod>) {
  const { name, userParams: params } = toValue(method)
  const paramsStr = params.length > 0 ? `${JSON.stringify(params)}, options` : 'options'
  return `import { ${name} } from 'nimiq-rpc-client-ts/http'
import type { HttpOptions } from 'nimiq-rpc-client-ts/types'

// Make sure to set \`ALBATROSS_NODE_URL\`, \`ALBATROSS_NODE_USERNAME\` and \`ALBATROSS_NODE_PASSWORD\` environment variables
// or
const options: HttpOptions = { url: '${nodeUrl}', auth: { username: '', password: '' } }

const { data, error } = await ${name}(${paramsStr})
console.log(data, error)`
}

function getJsCodeSnippet(nodeUrl: string, method: MaybeRef<RpcPlaygroundMethod>) {
  const { name, userParams: params } = toValue(method)
  const paramsStr = JSON.stringify(params)
  return `const body = {
  method: "${name}",
  params: ${paramsStr}
}

const response = await fetch('${nodeUrl}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})
const data = await response.json()
console.log(data)`
}
