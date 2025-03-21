<script setup lang="ts">
interface RpcMethodDoc {
  name: string
  description: string
  params: any[]
  result: any
}
defineProps<{
  methodDoc: RpcMethodDoc
}>()
</script>

<template>
  <div>
    {{ methodDoc.name }}
    {{ methodDoc }}
  </div>
</template>
