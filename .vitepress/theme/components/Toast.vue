<script setup lang="ts">
import { Toast } from 'radix-vue/namespaced'

defineProps<{
  title: string
  category: 'success' | 'info'
}>()

const show = defineModel<boolean>()
</script>

<template>
  <Toast.Provider>
    <slot />

    <Toast.Root
      v-model:open="show" :default-open="show"
      rounded-full px-16 py-8 shadow class="ToastRoot"
      :class="{ 'bg-gradient-green': category === 'success', 'bg-gradient-neutral': category === 'info' }"
    >
      <Toast.Title class="flex items-center gap-x-10 text-white">
        <div v-if="category === 'success'" i-nimiq:check />
        {{ title }}
      </Toast.Title>
      <!-- <Toast.Description /> -->
      <!-- <Toast.Action /> -->
      <!-- <Toast.Close /> -->
    </Toast.Root>

    <Toast.Viewport fixed bottom="16 md:32" right="16 md:32" flex="~ col" z-1000 />
  </Toast.Provider>
</template>

<style scoped>
.ToastRoot[data-state='open'] {
  animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.ToastRoot[data-state='closed'] {
  animation: hide 100ms ease-in;
}
.ToastRoot[data-swipe='move'] {
  transform: translateX(var(--radix-toast-swipe-move-x));
}
.ToastRoot[data-swipe='cancel'] {
  transform: translateX(0);
  transition: transform 200ms ease-out;
}
.ToastRoot[data-swipe='end'] {
  animation: swipeOut 100ms ease-out;
}

@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
  to {
    transform: translateX(0);
  }
}

@keyframes swipeOut {
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }
  to {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
}
</style>
