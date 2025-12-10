<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ input: unknown }>()

const formattedInput = computed(() => JSON.stringify(props.input, null, 2))
</script>

<template>
  <div class="p-4 space-y-2">
    <h4 class="text-xs text-neutral/60 tracking-wide font-medium uppercase">
      Parameters
    </h4>
    <div class="rounded-md bg-neutral/5 overflow-x-auto">
      <pre class="text-xs text-neutral/80 p-3"><code>{{ formattedInput }}</code></pre>
    </div>
  </div>
</template>
