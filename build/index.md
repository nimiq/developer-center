---
links:
  - bgColor: blue
    icon: i-nimiq:icons-lg-browsermesh
    label: Build
    title: Get Started with the Web Client
    description:  Get a Nimiq App up and running in the browser under 5 minutes.
    href: /build/web-client/
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
    href: /build/becoming-a-validator
  - label: RPC
    title: Connect via RPC
    href: /build/rpc-docs/
  - label: Our design rules
    title: Design something awesome
    href: /build/ui/design/
    tags: [Asset]
prose: false
prev: false
next: false
aside: false
footer: false
---

<Callout type="warning">

Our documentation is an ongoing project, a dynamic reflection of the evolving blockchain. As we actively update its content, please note that the information provided may undergo changes.

</Callout>

# Let's build together

Nimiq is made for people to build on it. You just need a browser and Internet.{.subline}

<Tags :tags="$frontmatter.links.map(l => l.tags).filter(Boolean).flat()" mt-24 />
<Grid  :items="$frontmatter.links" mt-64 />
