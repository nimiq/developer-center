<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'
import { computed } from 'vue'
import { useData } from '../composables/useData'
import { usePrevNext } from '../composables/usePrevNext'

const { page, frontmatter } = useData()

const webClientRepoUrl = 'https://github.com/nimiq/core-rs-albatross/tree/albatross/web-client'
const isWebClientDoc = computed(() => page.value.filePath.startsWith('build/web-client'))

const repoUrl = __REPO_URL__

const editThisLink = computed(() => isWebClientDoc.value
  ? webClientRepoUrl
  : `${repoUrl}/blob/main/${page.value.filePath}`)

const hash = computed(() => isWebClientDoc.value ? __ALBATROSS_COMMIT_HASH__ : page.value.updatedCommitHash.slice(0, 7))
const lastUrl = computed(() => isWebClientDoc.value ? webClientRepoUrl : `${repoUrl}/tree/${page.value.updatedCommitHash}/${page.value.filePath}`)

const date = computed(() => new Date(isWebClientDoc.value ? __ALBATROSS_COMMIT_DATE__ : page.value.lastUpdated || Date.now()))

const builtTime = computed(() => new Intl.DateTimeFormat('en', { dateStyle: 'short', timeStyle: 'short' }).format(date.value))
const timeAgo = useTimeAgo(date)

const { hasNext, hasPrev, next, prev } = usePrevNext()
</script>

<template>
  <nav
    v-if="frontmatter.footer !== false" mx-auto
    max-w="[calc(74ch+2rem+2rem)]" grid="~ md:cols-[auto_auto] justify-between gap-16 md:gap-40" pt-96
    :class="!hasPrev && !hasNext ? 'grid-rows-1' : 'grid-rows-[auto_auto_auto_auto] md:grid-rows-2'"
  >
    <a :href="editThisLink" target="_blank" rel="noopener" flex="~ items-center gap-6" un-text-12 op70 arrow lh-0>
      <template v-if="!isWebClientDoc">
        Edit this page on GitHub
      </template>
      <template v-else>
        Edit the documentation on GitHub
      </template>
    </a>

    <div flex="~ items-center gap-6" justify-self-end>
      <p :key="page.filePath" text-12 op-70>
        Updated {{ timeAgo }} on {{ builtTime }} <template v-if="!isWebClientDoc">
          (<a :href="lastUrl" target="_blank" rel="noopener" font-bold>{{ hash }}</a>)
        </template>
      </p>
    </div>

    <a v-if="hasPrev" :href="prev.link" pill h-max arrow-back text-blue bg="blue-400 hover:blue-500" transition-colors>
      {{ prev.text }}
    </a>

    <a v-if="hasNext" :href="next.link" justify-self-end pill arrow h-max text-blue bg="blue-400 hover:blue-500" transition-colors>
      {{ next.text }}
    </a>
  </nav>
</template>
