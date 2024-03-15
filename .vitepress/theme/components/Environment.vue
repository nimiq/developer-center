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
      <TooltipTrigger label pill-sm pill text="orange 13" bg-orange-400 border="1 orange/30" aria-label="View build information">
        {{ version }}
        <div i-nimiq:info text-12 op90 ml-6 />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent z-100 side="bottom" :side-offset="5" :collision-padding="8" align="start" bg="gradient-neutral dark:neutral-100" border-subtle-light text-white p-20 pb-12 rounded-8 max-w-360 text-14 border="base white/20">
          <div flex="~ items-center gap-8" mb-6>
            <p text-13 label>
              {{ buildEnvironment }} environment
            </p>
          </div>

          <p mb-6 op70>
            Work heavily in progress. You might find errors or missing information.
          </p>

          <p op70 flex="~ items-center gap-6">
            Give us feedback on <a href="https://t.me/nimiq" target="_blank" rel="noopener" group flex="~ items-center" text-white arrow>
              <div class="i-nimiq:logos-telegram-mono" mr-6 />
              Telegram
            </a>
          </p>

          <div flex="~ items-baseline gap-6">
            <p text-11 mt-8 text-white op-70>
              Updated {{ timeAgo }} on {{ builtTime }}.
              <a text-11 op70 :href="repoLastCommitUrl" target="_blank" rel="noopener" underline arrow text-white>
                {{ repoLastCommitHash }}
              </a>
            </p>
          </div>
          <TooltipArrow as-child>
            <div i-nimiq:tooltip-triangle text-darkblue rotate-180 h-7 />
          </TooltipArrow>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
