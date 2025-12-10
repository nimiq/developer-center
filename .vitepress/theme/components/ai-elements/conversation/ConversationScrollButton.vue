<script setup lang="ts">
import { computed } from 'vue'
import { useStickToBottomContext } from 'vue-stick-to-bottom'

const { isAtBottom, scrollToBottom } = useStickToBottomContext()
const showScrollButton = computed(() => !isAtBottom.value)

function handleClick() {
  scrollToBottom()
}
</script>

<template>
  <button v-if="showScrollButton" type="button" class="p-2 border border-neutral/10 rounded-full bg-white cursor-pointer shadow-lg transition-colors bottom-4 left-1/2 absolute dark:bg-darkblue hover:bg-neutral/5 -translate-x-1/2" @click="handleClick">
    <div class="i-tabler:arrow-down size-4" />
  </button>
</template>
