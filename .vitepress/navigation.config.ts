// @unocss-include

export const navigation = {
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
          href: '/learn/protocol/validators/validators-and-stakers',
          description: 'Learn about the pillars of Albatross PoS',
        },
        {
          title: 'Staking Contract',
          href: '/learn/protocol/validators/staking-contract',
          description: 'The repository of data for validators, stakers, and staking.',
        },
        {
          title: 'Block Format',
          href: '/learn/protocol/block-format',
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
          href: '/build/becoming-a-validator',
          description: 'Connect and start earning rewards.',
        },
        {
          title: 'Design',
          href: '/build/ui/design/',
          description: 'Your app with Nimiq in mind.',
        },
      ],
    },
  ],
}
