<script setup lang="ts">
interface Card {
  bgColor?: string
  icon?: string
  title: string
  description: string
  href: string
}

interface Props {
  cards: Card[]
}

defineProps<Props>()
</script>

<template>
  <section f-my-2xl>
    <!-- Custom Bento Grid -->
    <div grid="~ cols-1 md:cols-2 md:rows-[auto_auto_auto] gap-32" f-min-h-3xl>
      <!-- Web Client Card - Left column -->
      <NqCard
        md:grid-row-span-full
        icon="i-nimiq:browsermesh"
        title="Web Client"
        description="Build web and mobile-web apps that interact with Nimiq directly in the browser. Completely decentralized, no server required."
        label="Build in Browser"
        href="/web-client"
        bg-color="blue"
        icon-class="absolute bottom--48 right--32 text-256"
        class="[&_p]:max-w-none"
      />
      <!-- RPC Client Card -->
      <NqCard
        icon="i-tabler:api"
        icon-class="text-neutral-800 absolute top-16 right-16 text-32"
        title="RPC Client"
        description="Build full-stack applications that interact with Nimiq nodes."
        href="/rpc-client"
      />

      <!-- Validators Card -->
      <NqCard
        icon="i-nimiq:verified"
        icon-class="text-neutral-800 absolute top-16 right-16 text-32"
        title="Validators"
        description="Run a validator to earn rewards."
        href="/validators"
      />

      <!-- Protocol Docs Card -->
      <NqCard
        icon="i-tabler:book"
        icon-class="text-neutral-800 absolute top-16 right-16 text-32"
        title="Protocol"
        description="Albatross consensus and protocol specifications."
        href="/protocol"
      />
    </div>
  </section>
</template>

<style scoped>
[nq-label]:empty {
  margin: 0
}
</style>
