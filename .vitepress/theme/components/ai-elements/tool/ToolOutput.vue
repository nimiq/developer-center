<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ output?: unknown, errorText?: string }>()

const showOutput = computed(() => props.output !== undefined || props.errorText)

const isObjectOutput = computed(() => typeof props.output === 'object' && props.output !== null)

const formattedOutput = computed(() => {
  if (isObjectOutput.value)
    return JSON.stringify(props.output, null, 2)
  return String(props.output ?? '')
})
</script>

<template>
  <div v-if="showOutput" class="p-4 border-t border-neutral/10 space-y-2">
    <h4 class="text-xs tracking-wide font-medium uppercase" :class="errorText ? 'text-red' : 'text-neutral/60'">
      {{ errorText ? 'Error' : 'Result' }}
    </h4>
    <div class="text-xs rounded-md overflow-x-auto" :class="errorText ? 'bg-red/10 text-red' : 'bg-neutral/5 text-neutral/80'">
      <div v-if="errorText" class="p-3">
        {{ errorText }}
      </div>
      <pre v-else class="p-3"><code>{{ formattedOutput }}</code></pre>
    </div>
  </div>
</template>
