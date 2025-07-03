<script setup lang="ts">
interface PopularResourceLink {
  text: string
  href: string
  target?: string
}

interface PopularResource {
  title: string
  links: PopularResourceLink[]
}

defineProps<{
  label: string
  title: string
  description: string
  resources: PopularResource[]
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

    <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-x-32 gap-y-48" f-mt-lg class="nq-raw">
      <div v-for="resource in resources" :key="resource.title">
        <h4 text="f-2xs neutral-800" my-0 nq-label>
          {{ resource.title }}
        </h4>
        <ul text-neutral-400 list-disc space-y-6 f-px-xs f-mt-2xs text="f-sm">
          <li v-for="(link, index) in resource.links" :key="link.text" ml-0 :mt-0="index === resource.links.length - 1 ? '!' : null">
            <a :href="link.href" :target="link.target" :class="{ 'nq-arrow after:op-70': link.target === '_blank' }" text-blue f-py-xs hover:underline>{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
