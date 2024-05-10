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
  - label: Clients
    title: Web vs RPC
    tags: ['Web Client', 'Private Node']
    href: web-client-rpc/
  - label: RPC
    title: Use RPC
    href: private-node/rpc-docs/
    tags: [RPC]
  - label: Our design rules
    title: Design something awesome
    href: ui/design/
    tags: [Asset]
prose: false
prev: false
next: false
aside: false
footer: false
---

<HeadsUp />

# Let's build together

Nimiq is made for people to build on it. You just need a browser and Internet.{.subline}

<Tags :tags="$frontmatter.links.map(l => l.tags).filter(Boolean).flat()" mt-24 />
<Grid :items="$frontmatter.links" mt-64 />
