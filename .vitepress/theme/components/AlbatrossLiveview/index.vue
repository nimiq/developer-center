<script setup lang="ts">
import Blockchain from './Blockchain.vue'

defineProps<{
  label: string
  title: string
  description: string
  align?: 'center' | 'left'
}>()
</script>

<template>
  <section class="quick-start" max-w-none px-0="!">
    <NqHeadline :label :title :description :align :h1="false" px="$px" />
    <Blockchain my-0 max-w="screen!" w-full />
  </section>
</template>
