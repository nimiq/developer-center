import { error } from 'console';
<script setup lang="ts">
import { useData } from 'vitepress'

const now = new Date(Date.now())
const builtTime = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short', timeStyle: 'short' }).format(now)
const timeAgo = useTimeAgo(now)

const { page } = useData()

const repoLastCommitUrl = __REPO_LAST_COMMIT_URL__
const repoLastCommitHash = __REPO_LAST_COMMIT_HASH__
const repoUrl = __REPO_URL__
const fileUrl = `${repoUrl}/blob/main/${page.value.filePath}`
</script>

<template>
  <nav grid="~ cols-2 rows-2 justify-between" mt-96>
    <a :href="fileUrl" target="_blank" rel="noopener" flex="~ items-center gap-6" un-text-12 op70 group>
      Edit this page on GitHub
      <div i-nimiq:arrow-top-right w-8 op70 group-hover="translate-x-2 translate-y--2" duration-100ms />

    </a>

    <div flex="~ items-center gap-6" justify-self-end>
      <p text-12 op-70>
        Updated {{ timeAgo }} on {{ builtTime }} (<a :href="repoLastCommitUrl" target="_blank" rel="noopener" font-bold>{{ repoLastCommitHash }}</a>)
      </p>
    </div>
  </nav>
</template>
