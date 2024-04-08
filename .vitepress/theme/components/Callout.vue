<script setup lang="ts">
type Callout = 'warning' | 'tip' | 'info'
const props = defineProps<{ type: Callout }>()

const classes = computed(() => {
  switch (props.type) {
    case 'warning': {
      return {
        container: 'bg-orange-400/70 dark:bg-orange-400 text-orange [--border-color:rgb(var(--nq-orange)/0.1)]',
        icon: 'i-nimiq:alert',
      }
    }
    case 'tip': {
      return {
        container: 'bg-gold-400/50 dark:bg-gold-400 text-gold [--border-color:rgb(var(--nq-gold)/0.1)]',
        icon: 'i-nimiq:bulb',
      }
    }
    case 'info': {
      return {
        container: 'bg-blue-400 text-blue [--border-color:rgb(var(--nq-blue)/0.15)]',
        icon: 'i-nimiq:info',
      }
    }

    default: return {}
  }
})
</script>

<template>
  <div w-full :class="classes.container" class="raw" p-24 rounded-6 my-64 border-base>
    <div flex="~ gap-8 items-center" mb-12>
      <div :class="classes.icon" op-80 text-14 />
      <h5 label>
        {{ type }}
      </h5>
    </div>
    <slot />
  </div>
</template>
