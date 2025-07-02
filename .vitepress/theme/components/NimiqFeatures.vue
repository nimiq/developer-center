<script setup lang="ts">
interface FeatureCard {
  title: string
  description: string
  icon: string
  iconBgColor: string
}
defineProps<{
  label: string
  title: string
  description: string
  features: FeatureCard[]
}>()
</script>

<template>
  <section>
    <div nq-label>
      {{ label }}
    </div>
    <h2 mt-0="!" class="nq-headline">
      {{ title }}
    </h2>
    <p class="nq-subline">
      {{ description }}
    </p>

    <ul v-if="features.length > 0" grid="~ cols-2 md:cols-3 gap-8 md:gap-16" class="nq-raw" f-my-md>
      <li v-for="(feature, index) in features" :key="index" flex-1>
        <div class="nq-raw" outline="~ 1.5 neutral-300" group bg-neutral-50 h-full relative f-p-md f-rounded-md>
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
