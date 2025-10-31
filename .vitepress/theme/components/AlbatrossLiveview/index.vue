<script setup lang="ts">
import Blockchain from './Blockchain.vue'

defineProps<{
  label: string
  title: string
  description: string
  align?: 'center' | 'left'
  ctaText?: string
  ctaLink?: string
}>()
</script>

<template>
  <section class="quick-start" max-w-none px-0="!">
    <NqHeadline :label :title :description :align :h1="false" px="$px" />
    <Blockchain my-0 max-w="screen!" w-full />
    <div v-if="ctaText && ctaLink" flex="~ justify-center" f-mt-lg px="$px">
      <a :href="ctaLink" target="_blank" nq-arrow nq-pill-lg nq-pill-blue>
        {{ ctaText }}
      </a>
    </div>
  </section>
</template>
