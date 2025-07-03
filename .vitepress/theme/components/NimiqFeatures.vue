<script setup lang="ts">
import Headline from './Headline.vue'

defineProps<{
  label: string
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: string
    iconBgColor: string
  }[]
}>()
</script>

<template>
  <section bg-darkerblue style="color-scheme: dark" class="nq-raw">
    <Headline :label :title :description />

    <ul v-if="features.length > 0" grid="~ cols-2 md:cols-3 gap-16 md:gap-32">
      <li v-for="(feature, index) in features" :key="index" flex-1>
        <div class="nq-raw" outline="~ 1.5 neutral-400" group bg-neutral-100 h-full relative f-p-md f-rounded-md>
          <div v-if="feature.icon" :class="feature.iconBgColor" stack rounded-8 size-40>
            <div :class="feature.icon" text-white size-24 />
          </div>
          <h2 v-if="feature.title" font-semibold f-mt-2xs text="f-xl neutral" v-html="feature.title" />
          <p v-if="feature.description" text="f-sm neutral-800" v-html="feature.description" />
        </div>
      </li>
    </ul>
  </section>
</template>
