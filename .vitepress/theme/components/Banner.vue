<script setup lang="ts">
defineProps<{
  headline: string
  subline?: string
  label?: string
  linkHref?: string
  linkLabel?: string
}>()
</script>

<template>
  <div
    class="nq-raw" outline="solid 1.5 offset--1.5 white/20" mx-auto bg-gradient-green w-full shadow relative
    of-hidden f-p-lg f-rounded-md
  >
    <div f-size="200/400" pointer-events-none absolute bottom="-10 lg:-0.2775em" right="-0.2em lg:-0.25em">
      <div text-transparent i-nimiq:logos-nimiq-mono>
        <div size-full bg-linear="to-bl from-transparent via-transparent to-neutral/20" />
      </div>
    </div>

    <div flex="~ wrap justify-between items-end" max-w-full w-full relative z-10>
      <div max-w-60ch>
        <p v-if="label" nq-label text="12 white/80!">
          {{ label }}
        </p>
        <h3 text-white font-semibold f-text-2xl mt-4="!">
          {{ headline }}
        </h3>
        <p v-if="subline" text="white/80" mt-8>
          {{ subline }}
        </p>
      </div>
      <a v-if="linkHref && linkLabel" :href="linkHref" un-text-blue nq-arrow nq-pill-lg nq-pill-tertiary>
        {{ linkLabel }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.curtain {
  background: linear-gradient(180deg, rgb(var(--nq-neutral-0) / 0.1) 50%, rgb(var(--nq-neutral-0) / 0.5) 100%);
  box-shadow: inset 0px 0px 101.171px rgba(var(--nq-neutral-0) / 0.75);
}
</style>
