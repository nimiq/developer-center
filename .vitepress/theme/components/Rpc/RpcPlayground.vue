<script setup lang="ts">
import type { NimiqRpcMethod } from '../../../rpc/utils'
import { Accordion, Popover } from 'reka-ui/namespaced'
import Input from '../Input.vue'
import { usePlaygroundRpc } from './playground'

const props = defineProps<NimiqRpcMethod>()

const { callRpc, widget, history, groupedHistory, clearHistory, playgroundConfig, defaultNodeUrl } = usePlaygroundRpc(props)

const formatterTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
const formatterWithDate = new Intl.DateTimeFormat('en-US', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
function formatTimestamp(timestamp: number, showDate: boolean = false) {
  const date = new Date(timestamp)
  return showDate ? formatterWithDate.format(date) : formatterTime.format(date)
}
</script>

<template>
  <div>
    <div class="nq-raw widget-container">
      <header border="b-1 solid neutral-400">
        <code f-text-2xs>{{ props.name }}</code>
      </header>
      <form of-hidden f-p-2xs @submit.prevent="() => callRpc(props.name, widget.userParams)">
        <p v-if="props.input.length === 0" font-italic>
          It does not require any parameters.
        </p>
        <fieldset v-else>
          <Input v-for="field in props.input" v-bind="field" :key="field.key" v-model="widget.userParams[field.key]" />
        </fieldset>
        <div flex="~ items-center justify-end gap-6" f-mt-xs>
          <Popover.Root>
            <Popover.Trigger w="!initial" outline="~ 1.5 offset--1 neutral-400" bg="transparent hocus:neutral-200" aspect-square h-24 rounded-full text-14 transition-colors stack aria-label="Update RPC config">
              <div i-tabler:settings />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content :collision-padding="12" side="bottom" :side-offset="1.5" will-change="transform,opacity" reka-open="animate-in slide-in-t fade-in" reka-close="animate-out slide-in-b fade-out" outline="~ 1.5 offset--1.5 neutral-200" relative max-w-320 w-max bg-neutral-0 shadow f-p-xs rounded-8>
                <h3 text-neutral>
                  RPC Config
                </h3>

                <Input v-model="playgroundConfig.nodeUrl" required label="URL" f-text-xs f-mt-2xs :default-value="defaultNodeUrl" />

                <Input v-model="playgroundConfig.auth.username" label="User" f-text-xs f-mt-sm />
                <Input v-model="playgroundConfig.auth.password" label="Password" f-text-xs f-mt-2xs />

                <hr border="b-1 solid neutral-400" mx-auto max-w-32 w-full f-mt-sm>

                <p lh="[1.2]" text="neutral-800 f-2xs" relative bottom--4 mt-6 italic flex="~ items-center gap-4">
                  <span scale-85 i-nimiq:info />
                  The information is <b>stored locally</b>.
                </p>

                <Popover.Close bg="neutral-300 hocus:neutral-400" outline="~ 1.5 offset--1.5 neutral/2" absolute right-12 top-12 rounded-full transition stack size-20="!">
                  <div text-8 i-nimiq:cross />
                </Popover.Close>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <button scale-90 nq-pill nq-pill-gold :disabled="widget.state === 'loading' || props.name.startsWith('subscribe')" :class="{ 'cursor-not-allowed': widget.state === 'loading' }" type="submit">
            Run
            <div bottom--1 ml-6 text-10 i-nimiq:triangle-right />
          </button>
        </div>
      </form>
    </div>

    <div class="nq-raw widget-container" f-mt-sm>
      <header flex="~ items-center gap-8">
        <div text-10 op-70 i-nimiq:watch-1-50 />
        <span flex-1 font-semibold op-80>
          History
        </span>
        <button w-max="!" bg-transparent p-2 stack @click="() => clearHistory()">
          <div text-11 i-nimiq:trash />
        </button>
      </header>
      <div>
        <p v-if="history.length === 0" font-italic>
          Run the request to see the history...
        </p>
        <div v-else>
          <ol>
            <li v-for="({ items, label }) in groupedHistory.filter(item => item.items.length > 0)" :key="label">
              <h4 mb-4 nq-label>
                {{ label }}
              </h4>
              <Accordion.Root type="multiple" :collapsible="true">
                <Accordion.Item v-for="([isOk, error, data, { request: { timestamp, body } }], index) in items" :key="index" :value="`${timestamp}`">
                  <Accordion.Trigger bg="transparent hocus:neutral-200 reka-open:neutral-200" w-full flex="~ items-center gap-8" p-4 px-8 rounded="4 data-open:b-0">
                    <div shrink-0 text-6 op-80 transition-transform i-nimiq:chevron-right reka-open:rotate-90 />
                    <code of-hidden text-ellipsis font-semibold f-text-2xs>
                      {{ body.method }}
                    </code>
                    <div ml-auto flex="~ items-center gap-8" shrink-0>
                      <div v-if="!isOk" bg-red-400 p-3 stack rounded-2 outline="1.5 ~ neutral-0/10" :title="error">
                        <div v-if="error" text-12 text-red op-80 i-nimiq:alert />
                      </div>
                      <span text="9 neutral-700" font-semibold>
                        {{ formatTimestamp(timestamp, label === 'Older') }}
                      </span>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content un-animate-accordion="reka-open:down reka-closed:up" :value="timestamp" outline="1.5 neutral-200 ~ offset--1.5" of-hidden rounded-b-4 bg-neutral-50 f-mb-2xs>
                    <pre of-x-auto bg-neutral-50 py-4 f-text-2xs f-px-2xs rounded-8>{{ isOk ? data : error }}</pre>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </li>
          </ol>
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
