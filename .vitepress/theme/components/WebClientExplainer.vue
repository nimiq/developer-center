<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import confetti from 'canvas-confetti'

const clicked = useLocalStorage('web-client-conffeti-clicked', false)

function triggerConfetti() {
  clicked.value = true

  // Left bottom side confetti
  confetti({
    particleCount: 50,
    spread: 55,
    origin: { x: 0, y: 1 },
    angle: 90,
  })

  // Right bottom side confetti
  confetti({
    particleCount: 50,
    spread: 55,
    origin: { x: 1, y: 1 },
    angle: 90,
  })

  // Bottom center confetti
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { x: 0.5, y: 1 },
    angle: 90,
  })
}
</script>

<template>
  <section f-py-3xl class="nq-raw">
    <NqHeadline
      align="left" label="How It Works" title="Connect Directly to the Blockchain"
      description="No servers, no APIs, no middlemen — just your browser connecting directly to the Nimiq network."
      :h1="false"
    />

    <div grid="~ cols-1 lg:cols-2 gap-32" relative>
      <div stack invisible inset-0 absolute lg:visible>
        <div text="white 40" mb-80 op-90 z-10 i-nimiq:megaphone />
        <span v-if="!clicked" text="f-2xs neutral-600" font-semibold bottom--60 relative>
          click me
        </span>
        <button mb-80 aria-label="Trigger confetti celebration" @click="triggerConfetti">
          <div
            flex="~ items-center justify-center col gap-48"
            outline="2 offset--2 white/50"
            text-white rounded-full bg-gradient-blue bg-neutral-0 aspect-1 shadow-lg rotate--8 animate-spin animate-duration-10s f-text-xl f-p-sm f-rounded-sm
          >
            <p font-semibold uppercase rotate-180 f-text-lg>
              No middleman
            </p>
            <p font-semibold uppercase f-text-lg>
              No middleman
            </p>
          </div>
        </button>
      </div>

      <div>
        <h3 text="f-xl red" font-semibold f-mb-xs>
          Traditional Blockchain Apps
        </h3>
        <p text="f-sm neutral-800" f-mb-lg>
          Complex Infrastructure
        </p>

        <div flex="~ col gap-y-8" pl-1 w-max f-mb-lg f-rounded-lg text="f-sm neutral-900">
          <div flex="~ items-center gap-8">
            <div text-20 i-nimiq:browsermesh />
            <span>Your Browser</span>
          </div>
          <div text-20 ml-24 rotate-90 scale-70 i-nimiq:arrow-right text="neutral-600" />
          <div flex="~ items-center gap-8">
            <div text-20 i-nimiq:server />
            <span>Your Backend Server</span>
          </div>
          <div text-20 ml-24 rotate-90 scale-70 i-nimiq:arrow-right text="neutral-600" />
          <div flex="~ items-center gap-8">
            <div text-20 i-nimiq:duotone-network />
            <span>Blockchain Network</span>
          </div>
        </div>

        <div outline="~ 1.5 offset--1.5 red/20" text="f-sm red-1100" nq-prose-compact bg-red-400 f-p-sm f-rounded-sm>
          <div font-bold flex="~ items-center justify-between gap-2">
            Complex setup required.
            <div text-16 i-nimiq:thumbs-down />
          </div>
          <ul mt-2 f-pl-sm>
            <li>- Servers</li>
            <li>- Databases</li>
            <li>- Infrastructure</li>
            <li>- Third-party services</li>
          </ul>
        </div>
      </div>

      <!-- Nimiq Web Client -->
      <div flex="~ col items-end" w-full>
        <h3 text="f-xl green right" font-semibold f-mb-xs>
          Nimiq Web Client
        </h3>
        <p text="f-sm neutral-800 right" f-mb-lg>
          Direct Connection
        </p>

        <div flex="~ col items-end gap-y-8" w-max f-mb-lg f-rounded-lg text="f-sm neutral-900">
          <div flex="~ items-center gap-8">
            <span>Your Browser</span>
            <div text-20 i-nimiq:browsermesh />
          </div>
          <div text-20 mr-24 rotate-90 scale-70 i-nimiq:arrow-right text="neutral-600" />
          <div flex="~ items-center gap-8">
            <span>Nimiq Network</span>
            <div text-20 i-nimiq:duotone-network />
          </div>
        </div>

        <div
          outline="~ 1.5 offset--1.5 green/20" text="f-sm green-1100"
          nq-prose-compact bg-green-400 w-full f-p-sm f-rounded-sm lg:mt-59
        >
          <div font-bold flex="~ items-center justify-between gap-2">
            <div text-16 i-nimiq:thumbs-up />
            Direct connection.
          </div>
          <ul mt-2 text-right f-pl-sm>
            <li>Just your browser -</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
