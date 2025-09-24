<script setup lang="ts">
import { HEXAGONS_WORLD_MAP_ASPECT_RATIO } from '../utils/consensus-map/drawHexagonsWorldMapCanvas'
import ConsensusMap from './ConsensusMap.vue'
import RibbonContainer from './RibbonContainer.vue'
</script>

<template>
  <section>
    <NqHeadline
      title="Connect to the Network" label="Live Demo" align="left"
      description="See your browser connect directly to the Nimiq blockchain network in real-time"
    />
    <RibbonContainer :style="`aspect-ratio: ${HEXAGONS_WORLD_MAP_ASPECT_RATIO}`">
      <ConsensusMap connect-label="Connect" this-is-you="This is you" connecting="Connecting..." size-full />
    </RibbonContainer>
  </section>
</template>
