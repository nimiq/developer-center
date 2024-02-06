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
  - label: Run a validator
    title: Collect stake, validate blocks and earn.
    tags: [Validator]
  - label: Our design rules
    title: Design something awesome
    href: https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0
    tags: [Design]
  - label: Nimiq 1.0
    title: The first version of Nimiq
    href: build/web-client
prev: false
next: false
aside: false
outline: false
footer: false
---

<Hero :tags="$frontmatter.links.map(l => l.tags).filter(Boolean).flat()" :items="$frontmatter.links">
  <template #headline>
    Let's build together
  </template>
  <template #subline>
    Nimiq is made for people to build on it.<br/>You just need a browser and Internet.
  </template>
</Hero>

<!-- <div label mb-8 mt-136 text-darkblue-50>Assets</div> -->

<!-- ## There’s some cool tools to make your life easier

Resources to help you build stuff

<Grid my-64 :items="$frontmatter.assetsLinks" /> -->

::: warning Work in progress

Our documentation is an ongoing project, a dynamic reflection of the evolving blockchain. As we actively update its content, please note that the information provided may undergo changes.

:::
