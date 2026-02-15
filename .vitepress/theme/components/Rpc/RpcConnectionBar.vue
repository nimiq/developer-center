<script setup lang="ts">
import type { RpcPlaygroundConfig } from './playground'
import { Popover } from 'reka-ui/namespaced'
import { ref } from 'vue'
import Input from '../Input.vue'
import RpcServerSelect from './RpcServerSelect.vue'

defineProps<{
  currentServer: { name: string, network: string } | undefined
  playgroundConfig: RpcPlaygroundConfig
}>()

const selectValue = defineModel<string>('selectValue', { required: true })

const serverOpen = ref(false)
const authOpen = ref(false)
</script>

<template>
  <div flex="~ items-center gap-8" rounded-8 bg-neutral-100 outline="1.5 offset--1.5 solid neutral/8" px-12 py-6 sticky top-0 z-10>
    <div text-14 op-70 i-nimiq:globe shrink-0 />
    <span font-semibold f-text-xs truncate>{{ currentServer?.name || 'Custom' }}</span>
    <span v-if="currentServer?.network" :class="currentServer.network === 'mainnet' ? 'text-green bg-green-200' : 'text-orange bg-orange-200'" text-9 px-6 py-1 rounded-full nq-label shrink-0>
      {{ currentServer.network }}
    </span>

    <div flex="~ items-center gap-4" ml-auto shrink-0>
      <Popover.Root v-model:open="serverOpen">
        <Popover.Trigger bg="transparent hocus:neutral-200" p-6 rounded-4 cursor-pointer flex="~ items-center" title="Change server">
          <div text-12 i-nimiq:chevron-down />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content side="bottom" :side-offset="8" align="end" z-50 bg-white rounded-8 shadow-lg outline="1.5 offset--1.5 solid neutral/8" p-12 w-320 max-h-400 of-y-auto>
            <RpcServerSelect v-model="selectValue" v-model:node-url="playgroundConfig.nodeUrl" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <Popover.Root v-model:open="authOpen">
        <Popover.Trigger bg="transparent hocus:neutral-200" p-6 rounded-4 cursor-pointer flex="~ items-center" title="Authentication settings">
          <div text-12 op-70 i-nimiq:settings />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content side="bottom" :side-offset="8" align="end" z-50 bg-white rounded-8 shadow-lg outline="1.5 offset--1.5 solid neutral/8" p-12 w-280>
            <span font-semibold f-text-xs block mb-8>Authentication</span>
            <Input v-model="playgroundConfig.auth.username" label="User" f-text-xs />
            <Input v-model="playgroundConfig.auth.password" label="Password" f-text-xs f-mt-2xs />

            <label flex="~ items-center gap-8" cursor-pointer f-mt-sm>
              <input v-model="playgroundConfig.useProxy" type="checkbox" h-16 w-16 cursor-pointer>
              <span text="f-2xs neutral-800" font-semibold>Use proxy</span>
            </label>

            <p lh="[1.2]" text="neutral-800 f-2xs" mt-6 italic flex="~ items-center gap-4">
              <span scale-85 i-nimiq:info />
              Stored <b>locally</b> only.
            </p>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  </div>
</template>
