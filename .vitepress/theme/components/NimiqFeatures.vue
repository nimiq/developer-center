<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description: string
  features?: {
    title: string
    description: string
    icon: string
    iconBgColor: string
    iconColor?: string
  }[]
  align?: 'center' | 'left'
}>()
</script>

<template>
  <section>
    <NqHeadline :label :title :description :align mt-0 f-mb-lg :h1="false" />

    <ul v-if="features && features.length > 0" grid="~ cols-2 md:cols-3 gap-64" class="nq-raw">
      <li v-for="(feature, index) in features" :key="index" flex-1>
        <div class="nq-raw" group h-full relative>
          <div v-if="feature.icon" stack rounded-8 size-36 :class="feature.iconBgColor">
            <div :class="[feature.icon, feature.iconColor || 'text-white'] " size-20 />
          </div>
          <h2 v-if="feature.title" font-semibold f-mt-2xs text="f-xl neutral" v-html="feature.title" />
          <p v-if="feature.description" text="f-sm neutral-800" v-html="feature.description" />
        </div>
      </li>
    </ul>
  </section>
</template>
