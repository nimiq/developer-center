<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  code: string
}

const props = defineProps<Props>()

const highlightedCode = computed(() => {
  // Use VitePress's built-in syntax highlighting
  // This is a simplified version - VitePress will handle the actual highlighting
  return props.code
})

function copyCode() {
  navigator.clipboard.writeText(props.code)
}
</script>

<template>
  <div class="example-section">
    <h3 v-if="title">
      {{ title }}
    </h3>
    <div class="language-typescript">
      <button class="copy" title="Copy Code" @click="copyCode">
        <span class="vpi-copy" />
      </button>
      <span class="lang">TypeScript</span>
      <pre><code v-html="highlightedCode" /></pre>
    </div>
  </div>
</template>

<style scoped>
.example-section {
  margin: 1rem 0;
}

.language-typescript {
  position: relative;
}

.copy {
  position: absolute;
  top: 8px;
  right: 8px;
  background: var(--vp-code-copy-code-bg);
  border: 1px solid var(--vp-code-copy-code-border-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
}

.language-typescript:hover .copy {
  opacity: 1;
}
</style>
