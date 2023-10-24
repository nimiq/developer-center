<script setup lang="ts">
import GridLinks from './GridLinks.vue';

const { frontmatter: fm } = useData()

const buildTogether = computed(() => fm.value['build-together'])
</script>

<template>
  <main class="p-96">
    <h1>{{ fm.title }}</h1>
    <p>{{ fm.subline }}</p>
    <GridLinks mt-64 :items="fm.links" />

    <h2 mt-136>{{ buildTogether.title }}</h2>
    <p>{{ buildTogether.subline }}</p>
    <GridLinks mt-64 :items="buildTogether.links" />
  </main>
</template>
