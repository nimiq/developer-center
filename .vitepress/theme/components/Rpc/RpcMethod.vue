<script setup lang="ts">
import type { HttpRpcResult } from 'nimiq-rpc-client-ts/types'
import type { NimiqRpcMethod } from '../../../rpc/utils'
import { Collapsible, Tabs } from 'reka-ui/namespaced'
import { ref, toValue } from 'vue'
import { capitalizeFirstLetter } from '../../../utils'
import { useCodeSnippet } from './code-snippet'
import { usePlaygroundRpc } from './playground'
import Input from '../Input.vue'
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
    <h1 font-semibold f-text-2xl f-mb-2xs f-mt-sm>
      <code>{{ props.name }}</code> method
    </h1>
    <div v-if="props.description" f-mt-xs>
      <p text-neutral-700 f-text-xs lh-relaxed m-0>
        {{ props.description }}
      </p>
    </div>

    <!-- Server Info -->
    <ClientOnly>
      <Collapsible.Root v-model:open="serverInfoOpen" f-mt-sm>
        <Collapsible.Trigger class="nq-raw" bg="neutral-100 hocus:neutral-200" flex="~ items-center gap-8" w-full text-left px-12 py-6 cursor-pointer rounded-8 outline="1.5 offset--1.5 solid neutral/8">
          <div text-14 op-70 i-nimiq:globe shrink-0 />
          <span font-semibold f-text-xs truncate>{{ currentServer?.name || 'Custom' }}</span>
          <span v-if="currentServer?.network" :class="currentServer.network === 'mainnet' ? 'text-green bg-green-200' : 'text-orange bg-orange-200'" text-9 px-6 py-1 rounded-full nq-label shrink-0>
            {{ currentServer.network }}
          </span>
          <div text-8 op-80 shrink-0 transition-transform i-nimiq:chevron-right ml-auto :class="{ 'rotate-90': serverInfoOpen }" />
        </Collapsible.Trigger>
        <Collapsible.Content un-animate-collapsible="reka-open:down reka-closed:up" of-hidden>
          <div class="nq-raw" bg-neutral-50 rounded-8 f-mt-2xs p-12 outline="1.5 offset--1.5 solid neutral/8">
            <RpcServerSelect v-model="selectValue" v-model:node-url="playgroundConfig.nodeUrl" />

            <div mt-12 border="t-1 solid neutral-300" pt-12 px-8>
              <span font-semibold f-text-xs block mb-8>Authentication</span>
              <Input v-model="playgroundConfig.auth.username" label="User" f-text-xs />
              <Input v-model="playgroundConfig.auth.password" label="Password" f-text-xs f-mt-2xs />

              <label flex="~ items-center gap-8" cursor-pointer f-mt-sm>
                <input v-model="playgroundConfig.useProxy" type="checkbox" nq-switch cursor-pointer shrink-0 text-12>
                <span text="f-2xs neutral-800" font-semibold>Use proxy</span>
              </label>
              <p text="f-2xs neutral-700" lh="[1.3]" m-0 mt-4>Routes requests through our server to avoid CORS issues. Disable for direct node connections.</p>

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
        <div class="nq-raw" w-full outline="1.5 offset--1.5 solid neutral/8" rounded-8 of-clip>
          <div flex="~ items-center justify-between" bg-neutral-100 px-12 py-6 border="b-1.5 solid neutral/8">
            <span text="f-2xs neutral-800" font-bold>Params</span>
            <span text="f-2xs neutral-600">{{ props.input.length }} {{ props.input.length === 1 ? 'param' : 'params' }}</span>
          </div>

          <p v-if="props.input.length === 0" font-italic f-text-2xs text-neutral-600 px-12 py-8 m-0>
            No parameters required
          </p>

          <div
            v-for="(field, i) in props.input" :key="field.key"
            flex="~ items-baseline gap-8 wrap" px-12 py-8 hover:bg-neutral-50 transition-colors
            :class="{ 'border-b border-b-solid border-neutral/8': i < props.input.length - 1 }"
          >
            <code font-semibold f-text-xs text-neutral-900 shrink-0>{{ field.key }}</code>
            <span font-mono f-text-2xs text-blue shrink-0>{{ field.type }}</span>
            <span shrink-0>
              <span v-if="field.required" text="8 green" bg-green-200 nq-label>required</span>
              <span v-else text="8 neutral-700" bg-neutral-200 nq-label>optional</span>
            </span>
            <input v-model="widget.userParams[field.key]" type="text" :placeholder="capitalizeFirstLetter(field.type)" :required="field.required" nq-input-box rounded-4 text-f-2xs class="param-input" ml-auto>
          </div>
        </div>

        <div flex="~ justify-end" f-mt-xs>
          <button nq-pill nq-pill-gold :disabled="widget.state === 'loading'" :class="{ 'cursor-not-allowed op-60': widget.state === 'loading' }" lg:w-auto w-full @click="onSubmit">
            {{ widget.state === 'loading' ? 'Running...' : 'Run' }}
            <div v-if="widget.state !== 'loading'" text-10 ml-6 bottom--1 i-nimiq:triangle-right />
          </button>
        </div>
      </form>
    </div>

    <!-- Response -->
    <ClientOnly>
      <div v-if="latestResponse" f-mt-sm outline="1.5 offset--1.5 solid neutral/8" rounded-8 of-clip>
        <div flex="~ items-center gap-8" bg-neutral-100 px-12 py-8 border="b-1.5 solid neutral/8">
          <span v-if="latestResponse[0]" flex="~ items-center gap-4" text="green f-2xs" font-bold>
            <div size-6 rounded-full bg-green />
            OK
          </span>
          <span v-else flex="~ items-center gap-4" text="red f-2xs" font-bold>
            <div size-6 rounded-full bg-red />
            Error
          </span>
          <span v-if="getElapsed(latestResponse[3])" text="f-2xs neutral-700">{{ getElapsed(latestResponse[3]) }}</span>
          <button ml-auto bg-transparent p-4 cursor-pointer op-60 hover:op-100 title="Copy response" @click="copyResponse">
            <div text-14 i-nimiq:copy />
          </button>
        </div>
        <pre f-p-xs f-text-2xs of-x-auto bg-neutral-50 m-0>{{ latestResponse[0] ? JSON.stringify(latestResponse[2], null, 2) : (typeof latestResponse[1] === 'string' ? latestResponse[1] : JSON.stringify(latestResponse[1], null, 2)) }}</pre>
        <div v-if="!latestResponse[0]" flex="~ items-start gap-8" px-12 py-8 bg-orange-200 border="t-1.5 solid neutral/8">
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
      <div v-else class="nq-raw" w-full outline="1.5 offset--1.5 solid neutral/8" rounded-8 of-clip>
        <div flex="~ items-center justify-between" bg-neutral-100 px-12 py-6 border="b-1.5 solid neutral/8">
          <span text="f-2xs neutral-800" font-bold>Fields</span>
          <span text="f-2xs neutral-600">{{ props.output.length }} {{ props.output.length === 1 ? 'field' : 'fields' }}</span>
        </div>
        <div
          v-for="({ required, key, type }, i) in props.output" :key="key"
          flex="~ items-baseline gap-8 wrap" px-12 py-8 hover:bg-neutral-50 transition-colors
          :class="{ 'border-b border-b-solid border-neutral/8': i < props.output.length - 1 }"
        >
          <code font-semibold f-text-xs text-neutral-900 shrink-0>{{ key }}</code>
          <span font-mono f-text-2xs text-blue shrink-0>{{ type }}</span>
          <span ml-auto shrink-0>
            <span v-if="required" text="f-2xs green" bg-green-200 nq-label>required</span>
            <span v-else text="f-2xs neutral-700" bg-neutral-200 nq-label>optional</span>
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
          <div flex="~ items-center gap-8" bg-neutral-100 px-12 py-8 border="b-1.5 solid neutral/8">
            <span text="f-2xs neutral-800" font-bold>History</span>
            <span v-if="methodHistory.length > 0" text="f-2xs neutral-600">{{ methodHistory.length }}</span>
            <button v-if="methodHistory.length > 0" ml-auto bg-transparent p-4 op-60 hover:op-100 cursor-pointer title="Clear all history" @click.stop="clearHistory()">
              <div text-12 i-nimiq:trash />
            </button>
          </div>
          <div px-8 py-8>
            <p v-if="methodHistory.length === 0" font-italic f-text-2xs text-neutral-600 m-0>
              Run the request to see history here.
            </p>
            <div v-else flex="~ col gap-4">
              <button
                v-for="([isOk, , , metadata], index) in methodHistory" :key="index"
                flex="~ items-center gap-8" p-6 rounded-6 bg-transparent w-full cursor-pointer text-left
                hover:bg-neutral-100 transition-colors
                @click="loadFromHistory(methodHistory[index])"
              >
                <div size-8 rounded-full shrink-0 :class="isOk ? 'bg-green' : 'bg-red'" />
                <code f-text-2xs truncate>{{ metadata.request.body.method }}</code>
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
</style>
