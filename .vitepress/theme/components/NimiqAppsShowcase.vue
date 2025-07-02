<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import InfiniteScroll from './InfiniteScroll.vue'
import NqAppCard from './NqAppCard.vue'

interface Props {
  title?: string
  description?: string
  showAllApps?: boolean
}

interface NimiqAppRaw {
  name: string
  description: string
  link: string
  type: string
  logo: string
  screenshot: string
  developer: string | null
}

interface NimiqApp {
  name: string
  description: string
  link: string
  type: string
  logo: string
  developer?: string
  color: string
}

const {
  showAllApps = false,
} = defineProps<Props>()

// App type to color mapping
const typeColors: Record<string, string> = {
  'Wallets': '#1f53ff',
  'Games': '#f6b222',
  'Insights': '#21bca5',
  'E-commerce': '#d94432',
  'Infrastructure': '#795548',
  'Bots': '#9c27b0',
  'Promotion': '#ff9800',
}

const apps = ref<NimiqApp[]>([])
const pending = ref(false)
const error = ref<Error | null>(null)

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function transformApp(app: NimiqAppRaw): NimiqApp {
  return {
    name: app.name,
    description: app.description,
    link: app.link,
    type: app.type,
    logo: app.logo || app.screenshot || '', // Use logo first, then screenshot as fallback
    developer: app.developer || undefined,
    color: typeColors[app.type] || '#1f53ff',
  }
}

async function fetchApps() {
  pending.value = true
  error.value = null

  try {
    const response = await fetch('https://raw.githubusercontent.com/onmax/nimiq-awesome/refs/heads/main/src/data/dist/nimiq-apps.json')
    if (!response.ok)
      throw new Error(`Failed to fetch apps: ${response.statusText}`)

    const rawApps: NimiqAppRaw[] = await response.json()
    const transformedApps = rawApps.map(transformApp).filter(app => app.developer !== '@nimiq')
    // Shuffle the apps randomly
    apps.value = shuffleArray(transformedApps)
  }
  catch (err) {
    error.value = err instanceof Error ? err : new Error('Unknown error occurred')
    console.error('Error fetching Nimiq apps:', err)
  }
  finally {
    pending.value = false
  }
}

const displayApps = computed(() => {
  if (showAllApps)
    return apps.value
  // Show first 12 apps for the showcase
  return apps.value.slice(0, 12)
})

onMounted(() => {
  fetchApps()
})
</script>

<template>
  <div f-py-lg>
    <!-- Loading State -->
    <div v-if="pending" text-center f-py-xl>
      <div border="2 blue t-transparent" mx-auto rounded-full size-8 animate-spin />
      <p text="f-sm neutral-600" f-mt-md>
        Loading apps...
      </p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" text-center f-py-xl>
      <div text="f-lg neutral-600" class="i-tabler:alert-circle" mx-auto size-12 f-mb-md />
      <p text="f-base neutral-800" f-mb-md>
        Failed to load apps
      </p>
      <p text="f-sm neutral-600">
        {{ error.message }}
      </p>
    </div>

    <!-- Apps Showcase -->
    <div v-else-if="displayApps.length > 0">
      <InfiniteScroll :pause-on-hover="true" :duration="`${displayApps.length * 10}s`" gap="1.5rem" class="mask-edges" pb-64>
        <NqAppCard v-for="app in displayApps" :key="`${app.name}-${app.type}`" v-bind="app" />
      </InfiniteScroll>

      <div text-center>
        <a href="https://github.com/onmax/nimiq-awesome" target="_blank" nq-arrow nq-pill-lg nq-pill-blue>
          View All Apps
        </a>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else text-center f-py-xl>
      <div text="f-lg neutral-400" class="i-tabler:apps" mx-auto size-12 f-mb-md />
      <p text="f-base neutral-600">
        No apps found
      </p>
    </div>
  </div>
</template>

<style scoped>
.mask-edges {
  mask-image: linear-gradient(to right, transparent 0%, black 32px, black calc(100% - 32px), transparent 100%);
  -webkit-mask-image: linear-gradient(  to right,transparent 0%,black 32px,black calc(100% - 32px),transparent 100%);
}
</style>
