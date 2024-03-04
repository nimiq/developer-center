<script setup lang="ts">
const props = defineProps<{ type: 'warning' }>()

const classes = computed(() => {
  if (props.type === 'warning') {
    return {
      container: 'bg-orange-400 text-orange border-base-orange',
      icon: 'i-nimiq:alert',
    }
  }
})
</script>

<template>
  <div w-full :class="classes.container" p-24 rounded-6 my-64>
    <div flex="~ gap-8" mb-12>
      <div :class="classes.icon" op80 text-14 />
      <h4 label>
        {{ type }}
      </h4>
    </div>
    <slot />
  </div>
</template>
