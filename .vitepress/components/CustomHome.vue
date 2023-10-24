<script setup lang="ts">
const { frontmatter: fm } = useData()

const buildTogether = computed(() => fm.value['build-together'])
</script>

<template>
  <main class="p-96">
    <h1>{{ fm.title }}</h1>
    <p>{{ fm.subline }}</p>

    <ul mt-64 grid="~" grid-cols="1 md:6" grid-rows="md:[1fr_auto]" gap-32>
      <li v-for="item in fm.links"
        :class="['blue', 'green'].includes(item.bgColor) ? 'md:col-span-3' : 'md:col-span-2'">
        <CustomCardLink :item="item" />
      </li>
    </ul>
    
    <h2 mt-136>{{ buildTogether.title }}</h2>
    <p>{{ buildTogether.subline }}</p>
    
    <ul mt-64 grid="~" grid-cols="1 md:3" gap-32>
      <li v-for="item in buildTogether.links" md:cols-span-2>
        <CustomCardLink :item="item" />
      </li>
    </ul>
  </main>
</template>
