// @unocss-include

import type { MaybeRef } from 'vue'
import type { RpcPlaygroundConfig, RpcPlaygroundMethod } from './playground'
import { useDark, useLocalStorage } from '@vueuse/core'
import { codeToHtml } from 'shiki'
import { computed, ref, toValue } from 'vue'

export function useCodeSnippet(playgroundConfig: MaybeRef<RpcPlaygroundConfig>, method: MaybeRef<RpcPlaygroundMethod>) {
  const { nodeUrl } = toValue(playgroundConfig)
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
    { lang: 'curl', label: 'Curl', icon: 'i-tabler:terminal', html: toHtml(getCurlCodeSnippet(nodeUrl, method), 'bash') },
    { lang: 'js', label: 'Javascript', icon: 'i-logos:javascript', html: toHtml(getJsCodeSnippet(nodeUrl, method), 'javascript') },
    { lang: 'ts', label: 'Typescript', icon: 'i-logos:typescript-icon', html: toHtml(getTsCodeSnippet(nodeUrl, method), 'typescript') },
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
  const { name, userParams: params, tags } = toValue(method)
  const paramsStr = params.length > 0 ? JSON.stringify(params) : ''
  return `import { NimiqRPCClient } from 'albatross-rpc-client-ts'

const client = new NimiqRPCClient('${nodeUrl}')
const { data, error } = await client.${tags[0].name}.${name}(${paramsStr})
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
