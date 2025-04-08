<script setup lang="ts">
import type { RpcMethodProps } from '../composables/rpc/types'
import { Accordion, Popover } from 'reka-ui/namespaced'
import { usePlaygroundRpc } from '../composables/rpc/playground'
import Input from './Input.vue'

const props = defineProps<RpcMethodProps>()

const { callRpc, widget, history, clearHistory, playgroundConfig } = usePlaygroundRpc(props)
</script>

<template>
  <div>
    <div class="nq-raw widget-container">
      <header border="b-1 solid neutral-400">
        <code f-text-2xs>{{ name }}</code>
      </header>
      <form of-hidden f-p-2xs @submit.prevent="() => callRpc()">
        <p v-if="input.length === 0" font-italic>
          Does not require any parameters.
        </p>
        <fieldset v-else>
          <Input v-for="field in input" v-bind="field" :key="field.key" v-model="widget.userParams[field.key]" />
        </fieldset>
        <div flex="~ items-center justify-end gap-6" f-mt-xs>
          <Popover.Root>
            <Popover.Trigger w="!initial" outline="~ 1.5 offset--1 neutral-400" bg="transparent hocus:neutral-200" aspect-square h-24 rounded-full text-14 transition-colors stack aria-label="Update RPC config">
              <div i-tabler:settings />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content :collision-padding="12" side="bottom" :side-offset="1.5" will-change="transform,opacity" reka-open="animate-in slide-in-t fade-in" reka-close="animate-out slide-in-b fade-out" outline="~ 1.5 offset--1.5 neutral-200" relative max-w-320 w-max bg-neutral-0 shadow f-p-xs rounded-8>
                <h3 text-neutral>
                  RPC Request Config
                </h3>

                <Input v-model="playgroundConfig.nodeUrl" label="URL" f-text-xs f-mt-2xs />

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
          <button scale-90 nq-pill nq-pill-gold :disabled="widget.state === 'loading'" :class="{ 'cursor-not-allowed': widget.state === 'loading' }" type="submit">
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
          <h4 mb-4 nq-label>
            Today
          </h4>
          <Accordion.Root type="multiple" :collapsible="true">
            <Accordion.Item v-for="({ context, data, error }, index) in history" :key="index" :value="`${context.timestamp}`">
              <Accordion.Trigger bg="transparent hocus:neutral-200 reka-open:neutral-200" w-full flex="~ items-center gap-8" p-4 px-8 rounded-4>
                <div text-6 op-80 transition-transform i-nimiq:chevron-right reka-open:rotate-90 />
                <code font-semibold f-text-2xs>
                  {{ context.body.method }}
                </code>
                <div ml-auto>
                  <div v-if="error" bg-red-400 p-3 stack rounded-2 outline="1.5 ~ neutral-0/10" :title="error.message">
                    <div v-if="error" text-12 text-red op-80 i-nimiq:alert />
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content un-animate-accordion="reka-open:down reka-closed:up" of-hidden :value="`${context.timestamp}`" f-pb-2xs>
                {{ context }}
                {{ data }}
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
