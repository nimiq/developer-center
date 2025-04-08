<script setup lang="ts">
import type { RpcMethodProps } from '../composables/rpc/types'
import { Tabs } from 'reka-ui/namespaced'
import { ref } from 'vue'
// import { usePlaygroundRpc } from '../composables/rpc/playground'
// import Input from './Input.vue'

// const props = defineProps<Partial<RpcMethodProps>>()

// const { callRpc, widget, history, clearHistory, playgroundConfig } = usePlaygroundRpc(props)
const { tabs } = useTabs()

interface Tab extends RpcMethodProps {
}

function useTabs() {
  const tabs = ref<Tab[]>([])

  return {
    tabs,
  }
}
</script>

<template>
  <div outline="1.5 ~ solid neutral-300" grid="~ cols-[max-content_1fr] gap-32" nq-raw rounded-8>
    <aside border="r-1.5 solid neutral-300" f-p-xs>
      <h1 m-0>
        RPC Playground
      </h1>
    </aside>
    <div>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger v-for="tab in tabs" :key="tab.name" :value="tab.name">
            {{ tab.name }}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  </div>
</template>
