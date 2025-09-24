<script setup lang="ts">
import type { NimiqRpcMethod } from '../../../rpc/utils'
import { Accordion, Popover } from 'reka-ui/namespaced'
import Input from '../Input.vue'
import { usePlaygroundRpc } from './playground'

const props = defineProps<NimiqRpcMethod>()

const { callRpc, widget, history, clearHistory, playgroundConfig, defaultNodeUrl } = usePlaygroundRpc(props)

const formatterTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
const formatterWithDate = new Intl.DateTimeFormat('en-US', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
function formatTimestamp(timestamp: number, showDate: boolean = false) {
  const date = new Date(timestamp)
  return showDate ? formatterWithDate.format(date) : formatterTime.format(date)
}

function getErrorStatusCode(error: any): string | null {
  if (typeof error === 'string') {
    // Try to extract HTTP status codes from common error message patterns
    const patterns = [
      /status:\s*(\d{3})/i, // "status: 400"
      /HTTP\s+(\d{3})/i, // "HTTP 400"
      /(\d{3})\s+\w+/, // "400 Bad Request"
      /Error\s+(\d{3})/i, // "Error 400"
      /^(\d{3})\b/, // Starts with status code
    ]

    for (const pattern of patterns) {
      const match = error.match(pattern)
      if (match) {
        return match[1]
      }
    }
  }

  if (error && typeof error === 'object' && error.status) {
    return String(error.status)
  }

  return null
}
</script>

<template>
  <div>
    <div class="nq-raw widget-container">
      <header border="b-1 solid neutral-400">
        <code f-text-2xs>{{ props.name }}</code>
      </header>
      <form of-hidden f-p-2xs @submit.prevent="() => callRpc(props.name, Array.isArray(widget.userParams) ? widget.userParams : Object.values(widget.userParams))">
        <p v-if="props.input.length === 0" font-italic>
          It does not require any parameters.
        </p>
        <fieldset v-else flex="~ col gap-16">
          <Input v-for="field in props.input" v-bind="field" :key="field.key" v-model="widget.userParams[field.key]" :label="field.key" />
        </fieldset>
        <div flex="~ items-center justify-end gap-6" f-mt-xs>
          <Popover.Root>
            <Popover.Trigger w="!initial" outline="~ 1.5 offset--1 neutral-400" bg="transparent hocus:neutral-200" stack text-14 rounded-full h-24 aspect-square transition-colors aria-label="Update RPC config">
              <div i-tabler:settings />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content :collision-padding="12" side="bottom" :side-offset="1.5" will-change="transform,opacity" reka-open="animate-in slide-in-t fade-in" reka-close="animate-out slide-in-b fade-out" outline="~ 1.5 offset--1.5 neutral-200" rounded-8 bg-neutral-0 max-w-320 min-w-328 w-max shadow relative f-p-xs>
                <h3 text-neutral mt-0 f-text-sm="!">
                  RPC Config
                </h3>

                <Input v-model="playgroundConfig.nodeUrl" required label="URL" f-text-xs f-mt-2xs :default-value="defaultNodeUrl" />

                <Input v-model="playgroundConfig.auth.username" label="User" f-text-xs f-mt-sm />
                <Input v-model="playgroundConfig.auth.password" label="Password" f-text-xs f-mt-2xs />

                <hr border="b-1 solid neutral-400" mx-auto max-w-32 w-full f-mt-sm>

                <p lh="[1.2]" text="neutral-800 f-2xs" mt-6 italic bottom--4 relative flex="~ items-center gap-4">
                  <span scale-85 i-nimiq:info />
                  The information is <b>stored locally</b>.
                </p>

                <Popover.Close bg="neutral-300 hocus:neutral-400" outline="~ 1.5 offset--1.5 neutral/2" stack rounded-full transition right-12 top-12 absolute size-20="!">
                  <div text-8 i-nimiq:cross />
                </Popover.Close>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <button scale-90 nq-pill nq-pill-gold :disabled="widget.state === 'loading' || props.name.startsWith('subscribe')" :class="{ 'cursor-not-allowed': widget.state === 'loading' }" type="submit">
            Run
            <div text-10 ml-6 bottom--1 i-nimiq:triangle-right />
          </button>
        </div>
      </form>
    </div>

    <div class="nq-raw widget-container" f-mt-sm>
      <header flex="~ items-center gap-8">
        <div text-10 op-70 i-nimiq:watch-1-50 />
        <span font-semibold op-80 flex-1>
          History
        </span>
        <button w-max="!" stack p-2 bg-transparent @click="() => clearHistory()">
          <div text-11 i-nimiq:trash />
        </button>
      </header>
      <div>
        <p v-if="history.length === 0" font-italic>
          Run the request to see the history...
        </p>
        <div v-else>
          <Accordion.Root type="multiple" :collapsible="true">
            <Accordion.Item v-for="([isOk, error, data, metadata], index) in history" :key="index" :value="`${metadata.request.timestamp}`">
              <Accordion.Trigger bg="transparent hocus:neutral-200 reka-open:neutral-200" flex="~ items-center gap-8" p-4 px-8 w-full rounded="4 data-open:b-0">
                <div text-6 op-80 shrink-0 transition-transform i-nimiq:chevron-right reka-open:rotate-90 />
                <code font-semibold text-ellipsis of-hidden f-text-2xs>
                  {{ metadata.request.body.method }}
                </code>
                <div ml-auto flex="~ items-center gap-8" shrink-0>
                  <div v-if="!isOk" flex="~ items-center gap-6" px-8 py-3 rounded-2 bg-red-400 outline="1.5 ~ neutral-0/10" :title="error">
                    <div v-if="error" text-12 text-red op-80 i-nimiq:alert />
                    <span v-if="getErrorStatusCode(error)" text="red f-2xs" font-bold>
                      {{ getErrorStatusCode(error) }}
                    </span>
                  </div>
                  <span text="9 neutral-700" font-semibold>
                    {{ formatTimestamp(metadata.request.timestamp, true) }}
                  </span>
                </div>
              </Accordion.Trigger>
              <Accordion.Content un-animate-accordion="reka-open:down reka-closed:up" :value="timestamp" outline="1.5 neutral-200 ~ offset--1.5" rounded-b-4 bg-neutral-50 of-hidden f-mb-2xs>
                <pre py-4 rounded-8 bg-neutral-50 of-x-auto f-text-2xs f-px-2xs>{{ isOk ? data : error }}</pre>

                <!-- Debug info - always visible for errors -->
                <div v-if="!isOk" p-8>
                  <h4 text="neutral-700 9" font-semibold mb-4 nq-label>
                    Debug Information
                  </h4>
                  <pre text="neutral-800 f-2xs" outline="1.5 offset--1.5 ~ neutral-0/6" font-mono px-8 py-4 rounded-4 bg-neutral-200 whitespace-pre-wrap>{{ JSON.stringify({
                    isOk,
                    errorType: typeof error,
                    errorString: String(error),
                    extractedStatusCode: getErrorStatusCode(error),
                    metadataKeys: Object.keys(metadata || {}),
                  }, null, 2) }}</pre>
                </div>

                <!-- Show alert for errors from default server (TESTING - shows for all errors temporarily) -->
                <div v-if="!isOk" flex="~ items-start gap-8" p-8 rounded-b-4>
                  <div text-12 text-orange mt-2 op-80 shrink-0 i-nimiq:info />
                  <p text="orange-1100 f-2xs" m-0 lh="[1.4]">
                    The default RPC server may not support all methods. If you encounter errors, consider connecting to your own Nimiq node for full method availability. <a href="../open-servers" underline>Learn more about open servers</a>.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.widget-container {
  --uno: 'outline-1.5 outline-offset--1.5 outline-solid outline-neutral-300 of-clip rounded-8';

  > header {
    --uno: 'z-1 bg-neutral-100 py-8 f-text-xs f-px-xs rounded-2 flex items-baseline justify-between gap-8';
  }

  > div {
    --uno: 'f-p-xs';
  }
}
</style>
