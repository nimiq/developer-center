<script setup lang="ts">
const { showBorders = true } = defineProps<{
  label: string
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: string
    iconBgColor: string
    iconColor?: string
  }[]
  align?: 'center' | 'left'
  showBorders?: boolean
}>()
</script>

<template>
  <section>
    <NqHeadline :label :title :description :align :class="showBorders ? 'f-mb-2xl' : 'f-mb-lg'" mt-0 :h1="false" />

    <ul v-if="features.length > 0" grid="~ cols-2 md:cols-3" :class="showBorders ? 'gap-32' : 'gap-40'" class="nq-raw">
      <li v-for="(feature, index) in features" :key="index" flex-1>
        <div class="nq-raw" :class="showBorders ? 'f-rounded-md f-p-md outline bg-neutral-100 outline-1.5 outline-neutral-400' : ''" group h-full relative>
          <div v-if="feature.icon" :class="showBorders ? `${feature.iconBgColor} rounded-8 stack size-40` : ''">
            <div :class="[feature.icon, feature.iconColor || 'text-white', feature.iconBgColor ? 'size-24' : 'size-32']" />
          </div>
          <h2 v-if="feature.title" font-semibold f-mt-2xs text="f-xl neutral" v-html="feature.title" />
          <p v-if="feature.description" text="f-sm neutral-800" v-html="feature.description" />
        </div>
      </li>
    </ul>
  </section>
</template>
