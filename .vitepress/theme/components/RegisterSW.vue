<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  registerSW({
    immediate: true,
    onOfflineReady: () => setTimeout(() => offlineReady.value = true, 500),
    onRegistered() {
      // eslint-disable-next-line no-console
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>
