---
links:
  - bgColor: blue
    icon: i-nimiq:icons-lg-browsermesh
    label: Build
    title: Get Started with the Web Client
    description:  Get a Nimiq App up and running in the browser under 5 minutes.
    href: web-client/
    layout: lg
    span: 6
    tags:
      - Web Client
  - title: Run a validator
    bgColor: green
    label: Connect
    icon: i-nimiq:icons-lg-verified
    description: Collect stake, validate blocks and earn.
    tags: [Validator]
    href: becoming-a-validator
  - label: Our design rules
    title: Design something awesome
    href: https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0
    tags: [Design]
prose: false
prev: false
next: false
aside: false
outline: false
footer: false
---

::: warning Work in progress

Our documentation is an ongoing project, a dynamic reflection of the evolving blockchain. As we actively update its content, please note that the information provided may undergo changes.

:::

# Let's build together{.mt-64}

Nimiq is made for people to build on it. You just need a browser and Internet.{.subline}

<Tags :tags="$frontmatter.links.map(l => l.tags).filter(Boolean).flat()" mt-24 />
<Grid  :items="$frontmatter.links" mt-64 />

<!-- <div label mb-8 mt-136 text-darkblue-50>Assets</div> -->

<!-- ## There’s some cool tools to make your life easier

Resources to help you build stuff

<Grid my-64 :items="$frontmatter.assetsLinks" /> -->
