<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { useData } from '../composables/useData'
import {
  getHeaders,
  type MenuItem,
  resolveTitle,
  useActiveAnchor,
} from '../composables/useOutline'
import { onContentUpdated } from '../utils/markdown-content'
import DocAsideItem from './DocAsideItem.vue'

const { theme } = useData()

const headers = shallowRef<MenuItem[]>([])

onContentUpdated(() => {
  headers.value = getHeaders([2, 3])
})

const container = ref()
const marker = ref()

useActiveAnchor(container, marker)
</script>

<template>
  <div
    ref="container"
    class="VPDocAsideOutline"
    :class="{ 'has-outline': headers.length > 0 }"
    role="navigation"
  >
    <div class="content">
      <div ref="marker" class="outline-marker" />

      <div class="outline-title" role="heading" aria-level="2">
        {{ resolveTitle(theme) }}
      </div>

      <nav aria-labelledby="doc-outline-aria-label">
        <span id="doc-outline-aria-label" sr-only>
          Table of Contents for current page
        </span>
        <DocAsideItem :headers="headers" :root="true" />
      </nav>
    </div>
  </div>
</template>

<style scoped>
.VPDocAsideOutline {
  display: none;
}

.VPDocAsideOutline.has-outline {
  display: block;
}

.content {
  position: relative;
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
  font-size: 13px;
  font-weight: 500;
}

.outline-marker {
  --uno: absolute top-16 left--1 z-0 opacity-0 w-2 rounded-2 h-18 bg-blue;
  transition:
    top 0.25s cubic-bezier(0, 1, 0.5, 1),
    background-color 0.5s,
    opacity 0.25s;
}

.outline-title {
  --uno: text-neutral-700 uppercase leading-relaxed text-12 font-bold;
}
</style>
