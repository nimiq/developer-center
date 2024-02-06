<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'

const buildTimeDate = new Date(__BUILD_TIME__)
const builtTime = new Intl.DateTimeFormat('en', { dateStyle: 'short', timeStyle: 'short' }).format(buildTimeDate)
const timeAgo = useTimeAgo(buildTimeDate)

const repoLastCommitUrl = __REPO_LAST_COMMIT_URL__
const repoLastCommitHash = __REPO_LAST_COMMIT_HASH__
const version = __DEVELOPER_CENTER_VERSION__
const buildEnvironment = __BUILD_ENVIRONMENT__
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger ml-40 label text-11 border="base orange" rounded-full px-8 py-3 bg-orange text-white aria-label="View build information">
        {{ version }}
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent z-100 side="bottom" :side-offset="5" :collision-padding="8" align="start" bg-darkblue text-white p-20 pb-12 shadow rounded-8 max-w-350 text-14 border="base white/20">
          <div flex="~ items-center gap-8" mb-6>
            <p text-13 label>
              {{ buildEnvironment }} environment
            </p>
          </div>

          <div mb-6 op70>
            Work heavily in progress. You might find errors or missing information.
          </div>

          <p op70 flex="~ items-center gap-6">
            Give us feedback on <a href="https://t.me/nimiq" target="_blank" rel="noopener" group flex="~ items-center gap-6">
              <div class="i-nimiq:logos-telegram-mono" />
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
          <TooltipArrow as-child>
            <div i-nimiq:tooltip-triangle text-darkblue text-96 z-1000 rotate-180 />
          </TooltipArrow>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
