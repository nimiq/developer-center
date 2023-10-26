---
links:
  - bgColor: blue
    icon: 'i-nimiq:build'
    label: 'Build'
    title: 'Get Started with RPC'
    description:  'Get a Nimiq App up and running in the browser under 5 minutes.'
    href: '/'
    layout: lg
    span: 6
    tag: RPC
    duration: 10-30 min
  - title: Set up a user interface
    tag: Web Client
    duration: 10-30 min
  - title: Create a transaction
  - title: Create a wallet
assetsLinks:
  - title: Nimiq Style
    description: Creating a Nimiq App? Use our style guide.
  - title: Nimiq Icons
    description: Use our icons in your app.
  - title: Nimiq Logos
    description: Use our logos in your app.
prev: false
next: false
aside: false
outline: false
---

::: raw
# Build with Nimiq 

Nimiq is made for people to build on it.<br/>You just need a browser and Internet.

<Tags mt-24 :tags="new Set($frontmatter.links.map(l => l.tag).concat($frontmatter.assetsLinks.map(l => l.tag)).filter(Boolean))" />
<GridLinks mt-64 :items="$frontmatter.links" />

<div label mb-8 mt-136 text-darkblue-50>Assets</div>

## There’s some cool tools to make your life easier

Resources to help you build stuff

<GridLinks mt-64 :items="$frontmatter.assetsLinks" />
:::
