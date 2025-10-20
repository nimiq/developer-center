<script setup lang="ts">
import type { LiveviewBlock } from '../../composables/useAlbatrossBlocks'
import { LiveviewBlockType } from '../../composables/useAlbatrossBlocks'
import AlbatrossLiveviewMacroBlock from './MacroBlock.client.vue'
import AlbatrossLiveviewMicroBlock from './MicroBlock.vue'

defineProps<{ block: LiveviewBlock }>()
</script>

<template>
  <div flex="~ justify-end items-center">
    <div font-bold m-16 top--8 relative i-nimiq:arrow-left-thin text="16 neutral-600" />
    <AlbatrossLiveviewMacroBlock v-if="block.kind === LiveviewBlockType.MacroBlock" :block />
    <AlbatrossLiveviewMicroBlock v-else-if="block.kind === 'micro'" :block />
    <div v-else-if="block.kind === 'placeholder'" grid="~ place-content-center" i-local:curly h-120pt min-w-120pt text="30pt neutral-700" />
  </div>
</template>
