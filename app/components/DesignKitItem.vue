<script setup lang="ts">
const props = defineProps<{
  name: string
  label: string
  svg: string
  png?: string
  dark?: boolean
}>()
</script>

<template>
  <UCard class="border-0">
    <div :class="props.dark ? 'bg-neutral-950' : 'bg-muted'" class="flex aspect-video items-center justify-center rounded-[1.25rem] p-8">
      <img
        :src="props.svg"
        :alt="props.name"
        class="max-h-24 w-auto"
      >
    </div>

    <template #footer>
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-sm font-semibold text-highlighted">
            {{ props.name }}
          </p>
          <p class="text-xs uppercase tracking-[0.14em] text-muted">
            {{ props.label }}
          </p>
        </div>
        <div class="flex gap-2">
          <UButton
            :to="props.svg"
            target="_blank"
            label="SVG"
            size="xs"
            color="neutral"
            variant="soft"
            class="rounded-full"
          />
          <UButton
            v-if="props.png"
            :to="props.png"
            target="_blank"
            label="PNG"
            size="xs"
            color="neutral"
            variant="soft"
            class="rounded-full"
          />
        </div>
      </div>
    </template>
  </UCard>
</template>
