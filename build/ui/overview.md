---
layout: page

links:
  - bgColor: blue
    icon: 'i-nimiq:build'
    label: 'Build'
    title: 'Get Started with Nimiq'
    description:  'Create an app on Nimiq and have it running in 5 minutes.'
    href: 'build/'
  - bgColor: green
    icon: 'i-nimiq:cubes'
    label: 'Learn'
    title: 'The underlying technology'
    description: 'Learn what makes Nimiq a truly unique blockchain.'
    href: 'learn/'
  - title: '3 steps to become part of the validator list'
    label: 'Run a validator'
    href: '/'
  - title: 'Accept USDC Polygon now, see how'
    label: 'Cryptopayment Link'
    href: '/'
  - title: 'Find bugs and get paid in our Bug bounty program'
    label: 'Contribute'
    href: '/'
---

:::raw
# Welcome to the Nimiq Developer Center

Get guides, resources and tips on how to create with Nimiq.

<Grid my-64 :items="$frontmatter.links" />

## Let's build together

Create apps, contribute to the network or run a validator.

<Grid my-64 :items="$frontmatter.buildTogetherLinks" />
:::
