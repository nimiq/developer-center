<script setup lang="ts">
import type { HttpRpcResult } from 'nimiq-rpc-client-ts/types'
import type { NimiqRpcMethod } from '../../../rpc/utils'
import { Collapsible, Tabs } from 'reka-ui/namespaced'
import { ref, toValue } from 'vue'
import { capitalizeFirstLetter } from '../../../utils'
import Input from '../Input.vue'
import { useCodeSnippet } from './code-snippet'
import { usePlaygroundRpc } from './playground'
import RpcServerSelect from './RpcServerSelect.vue'

const props = defineProps<NimiqRpcMethod>()

const { widget, callRpc, latestResponse, methodHistory, clearHistory, playgroundConfig, currentServer, selectValue } = usePlaygroundRpc(props)
const { tabs, currentTab } = useCodeSnippet(widget)
const serverInfoOpen = ref(false)

const formatterWithDate = new Intl.DateTimeFormat('en-US', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
function formatTimestamp(timestamp: number) {
  return formatterWithDate.format(new Date(timestamp))
}

function getElapsed(metadata: any): string | null {
  if (!metadata?.request?.timestamp || !metadata?.response?.timestamp)
    return null
  return `${((metadata.response.timestamp - metadata.request.timestamp) / 1000).toFixed(2)}s`
}

function loadFromHistory(entry: HttpRpcResult<any>) {
  latestResponse.value = entry
}

function copyResponse() {
  if (!latestResponse.value)
    return
  const [isOk, error, data] = latestResponse.value
  navigator.clipboard.writeText(JSON.stringify(isOk ? data : error, null, 2))
}

function onSubmit() {
  callRpc(props.name, Array.isArray(widget.value.userParams) ? widget.value.userParams : Object.values(widget.value.userParams))
}
</script>

<template>
  <div nq-prose>
    <h1 font-semibold f-text-2xl f-mt-sm f-mb-2xs>
      <code>{{ props.name }}</code> method
    </h1>
    <div v-if="props.description" f-mt-xs>
      <p text-neutral-700 lh-relaxed m-0 f-text-xs>
        {{ props.description }}
      </p>
    </div>

    <!-- Server Info -->
    <ClientOnly>
      <Collapsible.Root v-model:open="serverInfoOpen" f-mt-sm>
        <Collapsible.Trigger class="nq-raw" bg="neutral-100 hocus:neutral-200" flex="~ items-center gap-8" px-12 py-6 text-left rounded-8 w-full cursor-pointer outline="1.5 offset--1.5 solid neutral/8">
          <div text-14 op-70 shrink-0 i-nimiq:globe />
          <span font-semibold truncate f-text-xs>{{ currentServer?.name || 'Custom' }}</span>
          <span v-if="currentServer?.network" :class="currentServer.network === 'mainnet' ? 'text-green bg-green-200' : 'text-orange bg-orange-200'" text-9 px-6 py-1 rounded-full shrink-0 nq-label>
            {{ currentServer.network }}
          </span>
          <div text-8 ml-auto op-80 shrink-0 transition-transform i-nimiq:chevron-right :class="{ 'rotate-90': serverInfoOpen }" />
        </Collapsible.Trigger>
        <Collapsible.Content un-animate-collapsible="reka-open:down reka-closed:up" of-hidden>
          <div class="nq-raw" p-12 rounded-8 bg-neutral-50 f-mt-2xs outline="1.5 offset--1.5 solid neutral/8">
            <RpcServerSelect v-model="selectValue" v-model:node-url="playgroundConfig.nodeUrl" />

            <div border="t-1 solid neutral-300" mt-12 px-8 pt-12>
              <span font-semibold mb-8 block f-text-xs>Authentication</span>
              <Input v-model="playgroundConfig.auth.username" label="User" f-text-xs />
              <Input v-model="playgroundConfig.auth.password" label="Password" f-text-xs f-mt-2xs />

              <label flex="~ items-center gap-8" cursor-pointer f-mt-sm>
                <input v-model="playgroundConfig.useProxy" type="checkbox" text-12 shrink-0 cursor-pointer nq-switch>
                <span text="f-2xs neutral-800" font-semibold>Use proxy</span>
              </label>
              <p text="f-2xs neutral-700" lh="[1.3]" m-0 mt-4>
                Routes requests through our server to avoid CORS issues. Disable for direct node connections.
              </p>

              <p lh="[1.2]" text="neutral-800 f-2xs" mt-6 italic flex="~ items-center gap-4">
                <span scale-85 i-nimiq:info />
                Stored <b>locally</b> only.
              </p>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </ClientOnly>

    <!-- Params -->
    <div f-mt-lg>
      <form @submit.prevent="onSubmit">
        <div class="nq-raw" outline="1.5 offset--1.5 solid neutral/8" rounded-8 w-full of-clip>
          <div flex="~ items-center justify-between" px-12 py-6 bg-neutral-100 border="b-1.5 solid neutral/8">
            <span text="f-2xs neutral-800" font-bold>Params</span>
            <span text="f-2xs neutral-600">{{ props.input.length }} {{ props.input.length === 1 ? 'param' : 'params' }}</span>
          </div>

          <p v-if="props.input.length === 0" text-neutral-600 m-0 px-12 py-8 font-italic f-text-2xs>
            No parameters required
          </p>

          <div
            v-for="(field, i) in props.input" :key="field.key"
            flex="~ items-baseline gap-8 wrap" px-12 py-8 transition-colors hover:bg-neutral-50
            :class="{ 'border-b border-b-solid border-neutral/8': i < props.input.length - 1 }"
          >
            <code text-neutral-900 font-semibold shrink-0 f-text-xs>{{ field.key }}</code>
            <span text-blue font-mono shrink-0 f-text-2xs>{{ field.type }}</span>
            <span shrink-0>
              <span v-if="field.required" text="8 green" px-4 rounded-2 bg-green-400 nq-label>required</span>
              <span v-else text="8 neutral-700" px-4 rounded-2 bg-neutral-400 nq-label>optional</span>
            </span>
            <label v-if="field.type === 'boolean'" flex="~ items-center gap-6" ml-auto shrink-0 cursor-pointer>
              <input v-model="widget.userParams[field.key]" type="checkbox" text-12 cursor-pointer nq-switch>
              <span text="f-2xs neutral-700">{{ widget.userParams[field.key] ? 'true' : 'false' }}</span>
            </label>
            <input v-else-if="field.type === 'number' || field.type === 'integer'" v-model="widget.userParams[field.key]" type="number" :placeholder="capitalizeFirstLetter(field.type)" :required="field.required" class="param-input" ml-auto rounded-4 text-f-2xs nq-input-box>
            <input v-else v-model="widget.userParams[field.key]" type="text" :placeholder="capitalizeFirstLetter(field.type)" :required="field.required" class="param-input" ml-auto rounded-4 text-f-2xs nq-input-box>
          </div>
        </div>

        <div flex="~ justify-end" f-mt-xs>
          <button :disabled="widget.state === 'loading'" :class="{ 'cursor-not-allowed op-60': widget.state === 'loading' }" w-full nq-pill nq-pill-gold lg:w-auto @click="onSubmit">
            {{ widget.state === 'loading' ? 'Running...' : 'Run' }}
            <div v-if="widget.state !== 'loading'" text-10 ml-6 bottom--1 i-nimiq:triangle-right />
          </button>
        </div>
      </form>
    </div>

    <!-- Response -->
    <ClientOnly>
      <div v-if="latestResponse" class="nq-raw" outline="1.5 offset--1.5 solid neutral/8" text-left rounded-8 w-full of-clip f-mt-sm>
        <div flex="~ items-center gap-8" px-12 py-8 bg-neutral-100 border="b-1.5 solid neutral/8">
          <span v-if="latestResponse[0]" flex="~ items-center gap-4" text="green f-2xs" font-bold>
            <div rounded-full bg-green size-6 />
            OK
          </span>
          <span v-else flex="~ items-center gap-4" text="red f-2xs" font-bold>
            <div rounded-full bg-red size-6 />
            Error
          </span>
          <span v-if="getElapsed(latestResponse[3])" text="f-2xs neutral-700">{{ getElapsed(latestResponse[3]) }}</span>
          <button ml-auto p-4 bg-transparent op-60 cursor-pointer hover:op-100 title="Copy response" @click="copyResponse">
            <div text-14 i-nimiq:copy />
          </button>
        </div>
        <pre m-0 text-left bg-neutral-50 of-x-auto f-text-2xs f-p-xs>{{ latestResponse[0] ? JSON.stringify(latestResponse[2], null, 2) : (typeof latestResponse[1] === 'string' ? latestResponse[1] : JSON.stringify(latestResponse[1], null, 2)) }}</pre>
        <div v-if="!latestResponse[0]" flex="~ items-start gap-8" border="t-1.5 solid neutral/8" bg-orange-200 px-12 py-8 text-left>
          <div text-12 text-orange mt-2 op-80 shrink-0 i-nimiq:info />
          <p text="orange-1100 f-2xs" m-0 lh="[1.4]">
            The default RPC server may not support all methods. Consider connecting to your own node. <a href="../open-servers" underline>Learn more</a>.
          </p>
        </div>
      </div>
    </ClientOnly>

    <!-- Result Schema -->
    <div f-mt-lg>
      <h2 f-text-lg f-mb-xs>
        Result Schema
      </h2>
      <p v-if="props.output.length === 0" font-italic f-text-xs>
        This method does not return any result.
      </p>
      <div v-else class="nq-raw" outline="1.5 offset--1.5 solid neutral/8" rounded-8 w-full of-clip>
        <div flex="~ items-center justify-between" px-12 py-6 bg-neutral-100 border="b-1.5 solid neutral/8">
          <span text="f-2xs neutral-800" font-bold>Fields</span>
          <span text="f-2xs neutral-600">{{ props.output.length }} {{ props.output.length === 1 ? 'field' : 'fields' }}</span>
        </div>
        <div
          v-for="({ required, key, type }, i) in props.output" :key="key"
          flex="~ items-baseline gap-8 wrap" px-12 py-8 transition-colors hover:bg-neutral-50
          :class="{ 'border-b border-b-solid border-neutral/8': i < props.output.length - 1 }"
        >
          <code text-neutral-900 font-semibold shrink-0 f-text-xs>{{ key }}</code>
          <span text-blue font-mono shrink-0 f-text-2xs>{{ type }}</span>
          <span ml-auto shrink-0>
            <span v-if="required" text="8 green" px-4 rounded-2 bg-green-400 nq-label>required</span>
            <span v-else text="8 neutral-700" px-4 rounded-2 bg-neutral-400 nq-label>optional</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Code Examples -->
    <div f-mt-sm>
      <h2 f-text-lg f-mb-xs>
        Code Examples
      </h2>
      <Tabs.Root v-model="currentTab" class="tabs" outline="1.5 offset--1.5 solid neutral/8" rounded-8 h-max max-w-none min-w-0 w-full>
        <Tabs.List flex="~ justify-start gap-16" f-px="20/24" :aria-label="`See how to call ${widget.method}`" py-8 bg-neutral-50 h-44 border="b-1.5 solid neutral/8">
          <Tabs.Trigger v-for="({ icon, lang, label }) in tabs" :key="lang" :value="lang" bg="transparent reka-active:blue-400" flex="~ items-center gap-8" text="neutral-800 f-xs" font-bold mx-0 ml-2 px-0.65em py-4 rounded-6>
            <div :class="icon" grayscale="reka-active:0 100" transition-filter />
            <span reka-active:text-blue>{{ label }}</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content v-for="({ lang, html }) in tabs" :key="lang" :value="lang">
          <div v-html="toValue(html)" />
        </Tabs.Content>
      </Tabs.Root>
    </div>

    <!-- History (teleported to sidebar widget) -->
    <ClientOnly>
      <Teleport to="#widget">
        <div class="nq-raw" outline="1.5 offset--1.5 solid neutral-400" rounded-8 of-clip>
          <div flex="~ items-center gap-8" px-12 py-8 bg-neutral-100 border="b-1.5 solid neutral/8">
            <span text="f-2xs neutral-800" font-bold>History</span>
            <span v-if="methodHistory.length > 0" text="f-2xs neutral-600">{{ methodHistory.length }}</span>
            <button v-if="methodHistory.length > 0" ml-auto p-4 bg-transparent op-60 cursor-pointer hover:op-100 title="Clear all history" @click.stop="clearHistory()">
              <div text-12 i-nimiq:trash />
            </button>
          </div>
          <div px-8 py-8>
            <p v-if="methodHistory.length === 0" text-neutral-600 m-0 font-italic f-text-2xs>
              Run the request to see history here.
            </p>
            <div v-else flex="~ col gap-4">
              <button
                v-for="([isOk, , , metadata], index) in methodHistory" :key="index"
                flex="~ items-center gap-8"
                p-6 text-left rounded-6 bg-transparent w-full cursor-pointer transition-colors hover:bg-neutral-100
                @click="loadFromHistory(methodHistory[index])"
              >
                <div rounded-full shrink-0 size-8 :class="isOk ? 'bg-green' : 'bg-red'" />
                <code truncate f-text-2xs>{{ metadata.request.body.method }}</code>
                <span text="f-2xs neutral-700" ml-auto shrink-0>{{ formatTimestamp(metadata.request.timestamp) }}</span>
              </button>
            </div>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style scoped>
.tabs :deep(pre) {
  --uno: 'of-x-auto max-w-full';
}

.tabs :deep(pre.shiki) {
  --uno: 'outline-0 my-0';
}

.param-input {
  --uno: 'w-200';
}

@media (max-width: 1023px) {
  .param-input {
    --uno: 'w-full basis-full mt-4';
  }
}

[nq-prose] > *:last-child {
  padding-bottom: 0 !important;
}
</style>
