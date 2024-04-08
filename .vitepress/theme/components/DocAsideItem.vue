<script setup lang="ts">
import type { MenuItem } from '../composables/useOutline'

// eslint-disable-next-line import/no-self-import
import DocAsideItem from './DocAsideItem.vue'

defineProps<{
  headers: MenuItem[]
  root?: boolean
}>()

function onClick({ target: el }: Event) {
  const id = (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.getElementById(decodeURIComponent(id))
  heading?.focus({ preventScroll: true })
}
</script>

<template>
  <ul class="VPDocOutlineItem" :class="root ? 'root' : 'nested'">
    <li v-for="{ children, link, title } in headers" :key="title">
      <a class="outline-link" :href="link" :title="title" @click="onClick">{{ title }}</a>
      <template v-if="children?.length">
        <DocAsideItem :headers="children" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.root {
  position: relative;
  z-index: 1;
}

.nested {
  padding-right: 16px;
  padding-left: 16px;
}

.outline-link {
  --uno: block lh-32 text-14 text-neutral whitespace-nowrap overflow-hidden text-ellipsis;
  transition: 300ms ease-in-out color, 100ms ease-in-out font-weight;

  &:is(:hover) {
    --uno: text-blue;
  }

  &:is(.active) {
    --uno: font-bold text-blue;
  }
}

.outline-link.nested {
  padding-left: 13px;
}
</style>
