<script setup lang="ts">
defineProps<{ color: string, link: string, logo: string, type: string, name: string, description: string, developer?: string }>()
</script>

<template>
  <a :href="link" class="nq-raw" target="_blank" :style="`--c: ${color}`" group external p-6 rounded-6 gap-24 h-full w-250 nq-hoverable>
    <div stack mb-0 bg="$c" rounded-4 max-h-120 of-hidden>
      <img :src="logo" mx-auto rounded-4 op-60 size-full h-auto max-h-full w-full object-cover>
    </div>
    <div flex="~ col gap-12" pt-0 flex-1 f-px-sm f-pb-sm>
      <h3 text="f-xl neutral" lh-none font-semibold m-0>{{ name }}</h3>
      <p text="neutral-800 group-hover:neutral-900" nq-prose-compact mt-0 transition-colors f-pt-2xs>
        {{ description }}
      </p>

      <div class="nq-hoverable-cta" mt-auto w-max>
        <p v-if="developer" text-14 nq-label>
          By <span text-blue>{{ developer }}</span>
        </p>
      </div>
    </div>
  </a>
</template>
