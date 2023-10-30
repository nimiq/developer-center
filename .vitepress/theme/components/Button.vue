<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
  },
})

const isExternalLink = computed(() => props.href && props.href.startsWith('http'))
const tag = computed(() => (isExternalLink.value) ? 'a' : (props.href) ? 'nuxt-link' : 'button')
</script>

<template>
  <component :is="tag" rounded-full text="16 blue dark:white" bg="blue-10 dark:white-30" font-bold>
    <slot name="pre" w="10" text="blue dark:white" />
    <slot />
    <slot name="post" w="10" text="blue dark:white" />
  </component>

</template>
