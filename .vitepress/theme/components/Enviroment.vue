<script setup lang="ts">
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'

const now = new Date(Date.now())
const builtTime = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'short', timeStyle: 'short' }).format(now)
const timeAgo = useTimeAgo(now)

const repoLastCommitUrl = __REPO_LAST_COMMIT_URL__
const repoLastCommitHash = __REPO_LAST_COMMIT_HASH__
const version = __DEVELOPER_CENTER_VERSION__
const buildEnvironment = __BUILD_ENVIRONMENT__
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger label ml-24 shadow text-11 border="base orange" rounded-full px-8 py-3 bg-orange text-white aria-label="View build information">
      {{ buildEnvironment }}
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent z-100 side="bottom" :side-offset="5" :collision-padding="8" align="right" bg-darkblue text-white p-20 pb-12 shadow rounded-8 max-w-350 text-14>
        <div flex="~ items-center gap-8" mb-6>
          <div i-nimiq:tools />
          <p label mt-1>
            {{ version }}
          </p>
        </div>
        <p mt-12 op70>
          Work heavily in progress. You might find errors or missing information.
        </p>

        <p op70 flex="~ items-center gap-6">
          Give us feedback on <a href="https://t.me/nimiq" target="_blank" rel="noopener" group flex="~ items-center gap-6">
            <div text-white i-nimiq:logos-telegram />
            Telegram
            <div i-nimiq:arrow-top-right w-8 op70 group-hover="translate-x-2 translate-y--2" duration-100ms />
          </a>
        </p>

        <div flex="~ items-baseline gap-6">
          <p op70 text-11 mt-8>
            Updated {{ timeAgo }} on {{ builtTime }}.
          </p>
          <a text-11 op70 :href="repoLastCommitUrl" target="_blank" rel="noopener" underline group flex="~ items-center gap-6">
            {{ repoLastCommitHash }}
            <div i-nimiq:arrow-top-right w-8 op70 group-hover="translate-x-2 translate-y--2" duration-100ms />
          </a>
        </div>
        <PopoverArrow fill-darkblue />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
