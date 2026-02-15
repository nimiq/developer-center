<script setup lang="ts">
import { RadioGroup } from 'reka-ui/namespaced'
import { computed, ref } from 'vue'
import { data as rpcServers } from '../../../data/rpc-servers.data'

const selectValue = defineModel<string>({ required: true })
const nodeUrl = defineModel<string>('nodeUrl')

const allServers = computed(() => [...(rpcServers?.mainnet || []), ...(rpcServers?.testnet || [])])
const isCustomUrl = computed(() => !allServers.value.some(s => s.endpoint === selectValue.value) && selectValue.value !== '')
const customUrl = ref('')

function applyCustomUrl() {
  if (!customUrl.value.trim())
    return
  selectValue.value = 'custom'
  if (nodeUrl.value !== undefined)
    nodeUrl.value = customUrl.value.trim()
}
</script>

<template>
  <div w-full>
    <!-- Server cards -->
    <RadioGroup.Root v-model="selectValue" class="gap-6 grid grid-cols-1 lg:grid-cols-2" max-h-280 of-y-auto>
      <RadioGroup.Item
        v-for="server in allServers" :key="server.endpoint"
        :value="server.endpoint"
        flex="~ col gap-2"
        outline="~ 1.5 offset--1.5 neutral-300 reka-checked:blue" bg="transparent reka-checked:neutral-0 hocus:neutral-0"
        p-8 text-left rounded-6 w-full cursor-pointer relative active:bg-neutral-0 active:scale-97 transition="colors transform"
      >
        <RadioGroup.Indicator text-blue size-12 bottom-6 right-6 absolute i-nimiq:check />
        <div flex="~ items-center gap-6">
          <span font-semibold f-text-xs>{{ server.name }}</span>
          <span :class="server.network === 'mainnet' ? 'text-green bg-green-200' : 'text-orange bg-orange-200'" text-9 ml-auto px-6 py-1 rounded-full nq-label>
            {{ server.network }}
          </span>
        </div>
        <code font-mono text="f-2xs neutral-700" ml-0>{{ server.endpoint.replace(/^https?:\/\//, '') }}</code>
        <div flex="~ items-center gap-4" text="f-2xs neutral-800">
          <span>by {{ server.maintainer }}</span>
          <a v-if="server.statusLink" :href="server.statusLink" target="_blank" rel="noopener" flex="~ items-center gap-2" text-blue @click.stop>
            <span text-10 i-nimiq:arrow-top-right />
            <span>Status</span>
          </a>
        </div>
        <p v-if="server.description" text="f-2xs neutral-700" m-0 italic line-clamp-2>
          {{ server.description }}
        </p>
      </RadioGroup.Item>
    </RadioGroup.Root>

    <!-- Custom URL section -->
    <div mt-12>
      <div flex="~ items-center gap-8" text="f-2xs neutral-700" mb-8>
        <hr border="t-1 solid neutral-300" m-0 flex-1>
        <span>or</span>
        <hr border="t-1 solid neutral-300" m-0 flex-1>
      </div>
      <div :class="{ 'bg-blue-100': isCustomUrl }" p-8 rounded-6>
        <span font-semibold mb-4 block f-text-xs>Custom URL</span>
        <input v-model="customUrl" type="text" placeholder="https://your-node-url.com" rounded-4 w-full text-f-2xs nq-input-box @keydown.enter="applyCustomUrl">
        <button nq-pill-sm mt-6 whitespace-nowrap scale-85 nq-pill @click="applyCustomUrl">
          Use this server
        </button>
      </div>
    </div>
  </div>
</template>
