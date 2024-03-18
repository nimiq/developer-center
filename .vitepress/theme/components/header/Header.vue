<script setup lang="ts">
import { breakpointsTailwind, useMagicKeys } from '@vueuse/core'
import SearchBox from 'vitepress/dist/client/theme-default/components/VPLocalSearchBox.vue'
import type { NavigationType } from './navigation-types'

const Navigation = defineAsyncComponent(() => import('./Navigation.vue'))
const MobileMenu = defineAsyncComponent(() => import('./MobileMenu.vue'))

const { isDark } = useData()
const { smaller } = useBreakpoints(breakpointsTailwind)
const isSmall = smaller('xl')
const showSearch = ref(false)

useMagicKeys({
  passive: false,
  onEventFired: (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault()
      showSearch.value = true
    }
  },
})

const navigation: NavigationType = {
  community: {
    links: [
      {
        label: 'Blog',
        href: 'https://nimiq.com/blog/',
      },
      {
        label: 'Podcast',
        href: 'https://www.youtube.com/playlist?list=PLuhSf5DE3FFQFSM-Hhb4gXrbcIo3ohVE9',
      },
    ],
    socials: [
      {
        href: 'https://twitter.com/@nimiq',
        icon: 'i-nimiq:logos-twitter-mono',
        key: 'twitter',
      },
      {
        href: 'https://github.com/nimiq',
        icon: 'i-nimiq:logos-github-mono',
        key: 'github',
      },
      {
        href: 'https://forum.nimiq.community/',
        icon: 'i-nimiq:logos-nimiq-forum-mono',
        key: 'forum',
      },
      {
        href: 'https://discord.gg/cMHemg8',
        icon: 'i-nimiq:logos-discord-mono',
        key: 'discord',
      },
      {
        href: 'https://t.me/joinchat/AAAAAEJW-ozFwo7Er9jpHw',
        icon: 'i-nimiq:logos-telegram-mono',
        key: 'telegram',
      },
    ],
  },
  items: [
    {
      key: 'Learn',
      main: {
        classes: 'bg-gradient-green hocus:bg-gradient-green-darkened',
        iconClasses: 'i-nimiq:icons-lg-cubes text-[#1DA186] rotate-y-180 rotate-z-180',
        label: 'Learn',
        title: 'The technology',
        description: 'What makes Nimiq a truly unique blockchain.',
        href: '/learn/',
      },
      items: [
        {
          title: 'Validators and Stakers',
          href: 'learn/protocol/validators/validators-and-stakers',
          description: 'Learn about the pillars of Albatross PoS',
        },
        {
          title: 'Staking Contract',
          href: 'learn/protocol/validators/staking-contract',
          description: 'The repository of data for validators, stakers, and staking.',
        },
        {
          title: 'Block Format',
          href: 'learn/protocol/block-format',
          description: 'Everything about micro and macro blocks.',
        },
      ],
    },
    {
      key: 'Build',
      main: {
        classes: 'bg-gradient-blue hocus:bg-gradient-blue-darkened',
        iconClasses: 'i-nimiq:icons-lg-browsermesh text-[#0E65C9]',
        label: 'Build',
        title: 'On top of Nimiq',
        description: 'Create an app and have it running in 5 minutes.',
        href: '/build/',
      },
      items: [
        {
          title: 'Web Client',
          href: '/build/web-client/',
          description: 'Create a simple web app that interacts with the Nimiq blockchain.',
        },
        {
          title: 'Become a validator',
          href: 'build/becoming-a-validator',
          description: 'Connect and start earning rewards.',
        },
        {
          title: 'Design',
          href: '/build/design/',
          description: 'Your app with Nimiq in mind.',
        },
      ],
    },
  ],
} as const
</script>

<template>
  <div border-bottom lg="fixed top-0" w-full bg-neutral-0 z-100>
    <header
      style="height: var(--vp-nav-height)" max-w-1280 mx-auto px="24 sm:48 md2:64"
      flex="~ items-center" class="raw"
    >
      <a href="/" focusable flex="~ items-center gap-10" p-6 ml--6 un-text="19 md:20 neutral" relative>
        <div
          :class="isDark ? 'i-nimiq:logos-nimiq-white-horizontal' : 'i-nimiq:logos-nimiq-horizontal'" h="22 md:24"
          w="96 md:101"
        />
        <h2 whitespace-nowrap hidden xs:block>
          <span sr-only>Nimiq</span> Developer Center
        </h2>
        <div absolute top--6 right--12 @click.prevent>
          <Environment />
        </div>
      </a>
      <template v-if="isSmall">
        <SearchBox v-if="showSearch" @close="showSearch = false" />
        <button ml-auto mr-16 p-16 @click="showSearch = true">
          <div i-nimiq:magnifying-glass />
        </button>
        <MobileMenu :navigation />
      </template>
      <template v-else>
        <SearchBox v-if="showSearch" @close="showSearch = false" />
        <button ml-24 text-14 py-6 input-text flex="~ gap-8 items-center" rounded-full class="group" @click="showSearch = true">
          <div i-nimiq:magnifying-glass op60 />
          <span lh="1" style="color: var(--nq-color)">Search</span>
          <span ghost-btn flex="~ gap-2" p-2 rounded-3 ml-64 style="--ring-color: var(--nq-color)" hover="bg-inherit" group-hover="op60">
            <kbd>Ctrl</kbd>
            <kbd>K</kbd>
          </span>
        </button>
        <Navigation :navigation />
      </template>
    </header>
  </div>
</template>
