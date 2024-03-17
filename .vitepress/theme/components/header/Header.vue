<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import SearchBox from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import Navigation from './Navigation.vue'
import type { NavigationType } from './navigation-types'

const { isDark } = useData()
const { smaller } = useBreakpoints(breakpointsTailwind)
const isSmall = smaller('md')

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
  <header
    style="height: var(--vp-nav-height);" border-bottom mb-1 z-100 px="32 md:40" lg="fixed top-0" w-full
    flex="~ items-center" class="raw" bg-neutral-0
  >
    <a href="/" focusable flex="~ items-center gap-10" p-6 ml--6 un-text="19 md:20 neutral">
      <div
        :class="isDark ? 'i-nimiq:logos-nimiq-white-horizontal' : 'i-nimiq:logos-nimiq-horizontal'" h="22 md:24"
        w="96 md:101"
      />
      <h2 whitespace-nowrap>
        <span sr-only>Nimiq</span> Developer Center
      </h2>
    </a>
    <MobileMenu v-if="isSmall" :navigation ml-auto />
    <template v-else>
      <SearchBox />
      <Navigation :navigation />
      <Environment ml-16 />
    </template>
  </header>
</template>

<style>
button.DocSearch.DocSearch-Button {
  font-size: 16px;
  line-height: 1.5;
  border-radius: 100px;
  background-color: transparent !important;
  transition: colors 0.2s var(--nq-ease), box-shadow 0.2s var(--nq-ease);
  outline: none;
  --ring-color: rgba(var(--nq-neutral-500));
  --color: rgb(var(--nq-neutral));
  --placeholder-color: rgb(var(--nq-neutral-700));
  box-shadow: 0 0 0 1.5px var(--ring-color) !important;
  padding: 4.5px 14px;
  border: 0;
  --docsearch-muted-color: rgb(var(--nq-neutral));

  &:is(:hover, :focus) {
    --ring-color: rgba(var(--nq-blue));

    & * {
      color: rgb(var(--nq-blue)) !important;
    }

  }

}
</style>
