<script setup lang="ts">
import type { RpcMethodProps } from '../composables/rpc/types'
import { Tabs } from 'reka-ui/namespaced'
import { toValue } from 'vue'
import { useCodeSnippet } from '../composables/rpc/code-snippet'
import { usePlaygroundRpc } from '../composables/rpc/playground'
import RpcPlayground from './RpcPlayground.vue'

const props = defineProps<RpcMethodProps>()

const { widget, playgroundConfig } = usePlaygroundRpc(props)
const { tabs, currentTab } = useCodeSnippet(playgroundConfig, widget)
</script>

<template>
  <div>
    <h1 font-semibold f-text-2xl f-mb-2xs>
      <code>{{ name }}</code> method
    </h1>
    <p v-if="description" f-mt-xs>
      {{ description }}
    </p>

    <div grid="~ cols-[32ch_1fr] gap-32" :class="{ 'f-mt-lg': !description }">
      <div mx-0>
        <h2 nq-label mt-0="!">
          Params
        </h2>

        <p v-if="input.length === 0" font-italic>
          This method does not require any parameters.
        </p>
        <ul v-else>
          <li v-for="({ required, key, type }) in input" :key my-4 ml-0 before:hidden>
            <code bg-transparent font-semibold text="f-xs neutral-900">{{ key }}</code> <span op-80 f-text-2xs>{{ type }}{{ required ? '*' : ' or null' }}</span>
          </li>
        </ul>

        <h2 nq-label f-mt-lg="!">
          Result
        </h2>
        <p v-if="output.length === 0" font-italic>
          This method does not return any result.
        </p>
        <ul v-else>
          <li v-for="({ required, key, type }) in output" :key my-4 ml-0 before:hidden>
            <code bg-transparent font-semibold text="f-xs neutral-900">{{ key }}</code> <span op-80 f-text-2xs>{{ type }}{{ required ? '*' : ' or null' }}</span>
          </li>
        </ul>
      </div>
      <!-- .25em .65em .25em .75em -->

      <Tabs.Root v-model="currentTab" class="tabs" outline="1.5 offset--1.5 solid neutral/8" h-max max-w-none min-w-0 w-full rounded-8>
        <Tabs.List flex="~ justify-start gap-16" f-px="20/24" :aria-label="`See how to call ${method}`" h-44 bg-neutral-50 py-8 border="b-1.5 solid neutral/8">
          <Tabs.Trigger v-for="({ icon, lang, label }) in tabs" :key="lang" :value="lang" bg="transparent reka-active:blue-400" flex="~ items-center gap-8" text="neutral-800 f-xs" mx-0 ml--8 px-0.65em py-4 font-bold rounded-6>
            <div :class="icon" grayscale="reka-active:0 100" transition-filter />
            <span reka-active:text-blue>
              {{ label }}
            </span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content v-for="({ lang, html }) in tabs" :key="lang" :value="lang">
          <div v-html="toValue(html)" />
        </Tabs.Content>
      </Tabs.Root>
    </div>

    <ClientOnly>
      <Teleport defer to="#widget">
        <RpcPlayground v-bind="props" />
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style scoped>
:global(div:has(>#widget)) {
  --uno: 'border-l border-solid border-neutral-400 '
}

.widget-container {
  --uno: 'outline-1.5 outline-offset--1.5 outline-solid outline-neutral-300 of-clip rounded-8';

  > header {
    --uno: 'z-1 bg-neutral-100 py-8 f-text-xs f-px-xs rounded-2 flex items-baseline justify-between gap-8';
  }

  > div {
    --uno: 'f-p-xs';
  }
}

.tabs :deep(pre) {
  --uno: 'of-x-auto max-w-full';
}

h2 {
  --uno: 'text-12 !f-mb-2xs !font-bold text-neutral';
  + p {
    --uno: 'f-text-xs';
  }
}

.tabs {

  :deep(pre.shiki) {
    --uno: 'outline-0 my-0'

  }
}

ul {
  --uno: 'mt-0';
  li {
    --uno: 'my-4 ml-0 before:hidden';
    > code {
      --uno: 'bg-transparent font-semibold f-text-xs text-neutral-900';
    }
    > span {
      --uno: 'op-80 f-text-2xs';
    }
  }
}
</style>
