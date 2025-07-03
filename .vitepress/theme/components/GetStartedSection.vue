<script setup lang="ts">
// Get Started Section Component
</script>

<template>
  <section bg="neutral-100 dark:neutral-900" f-p-xl f-rounded-lg>
    <div mx-auto max-w-4xl>
      <h3 text="f-lg" font-semibold f-mb-md>
        Get Started in 3 Lines of Code
      </h3>
      <div bg="neutral-0 dark:neutral-800" font-mono f-p-md f-rounded-md text="f-sm">
        <div text="green-600 dark:green-400">
          # Install the Web Client
        </div>
        <div f-mt-xs>
          npm install @nimiq/core
        </div>
        <div f-mt-md text="green-600 dark:green-400">
          # Connect to the network
        </div>
        <div f-mt-xs>
          import { Client } from '@nimiq/core'
        </div>
        <div f-mt-xs>
          const client = new Client()
        </div>
        <div f-mt-xs>
          await client.waitForConsensusEstablished()
        </div>
      </div>
      <div f-mt-md flex="~ gap-12">
        <a href="./getting-started" nq-pill-blue>Try the Tutorial</a>
        <a href="./installation" nq-pill-tertiary>Installation Guide</a>
      </div>
    </div>
  </section>
</template>
