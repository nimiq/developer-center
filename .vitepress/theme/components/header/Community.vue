<script setup lang="ts">
// @unocss-include
import type { NavigationType } from './navigation-types'

defineProps<{ community: NavigationType['community'] }>()
</script>

<template>
  <div>
    <ul flex="~ col">
      <li v-for="({ href, label }) in community.links" :key="label">
        <a
          :href focusable un-text-neutral="800 hocus:900" block w-full rounded-6 transition-colors class="arrow" px-20
          py-8 hocus:bg-neutral-200 whitespace-nowrap
        >{{ label }}</a>
      </li>
    </ul>
    <hr border-neutral-500 my-12>
    <ul flex="~ justify-center" px-12 py-8>
      <li v-for="({ href, icon, key }) in community.socials" :key="key">
        <a
          :href target="_blank" rel="noopener noreferrer" focusable block p-8 rounded-2
          :aria-label="`Visit Nimiq on ${key}`" hocus:bg-neutral-200 text-18 text-neutral="700 hocus:800"
        >
          <div :class="icon" />
        </a>
      </li>
    </ul>
  </div>
</template>
