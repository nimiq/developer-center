---
changelog: false
prose: false

aside: false
footer: false
integrations:
  - title: Vite
    icon: i-logos:vitejs
    href: ./integrations/vite
  - title: ESM
    icon: i-logos:javascript
    href: ./integrations/ESM
  - title: Webpack
    icon: i-logos:webpack
    href: ./integrations/webpack
  - title: Nuxt
    icon: i-logos:nuxt-icon
    href: ./integrations/nuxt
  - title: Next.js
    icon: i-logos:nextjs-icon
    href: ./integrations/NextJS
  - title: CommonJS
    icon: i-logos:nodejs-icon
    href: ./integrations/CommonJS

---

# Installation

Multiple integrations so you can use Nimiq anywhere.

<ul grid="~ cols-1 md:cols-3 md:rows-[1fr_auto] gap-y-12 gap:32 md:gap-32" class="nq-raw" f-my-xl>
  <li v-for="({title, icon, href}) in $frontmatter.integrations" :key="title">
    <a :href="href" h-full flex="~ col items-center gap-16" p-24 nq-hoverable>
      <div :class="icon" text-40 />
      <p text-24 font-bold>{{ title }}</p>
    </a>
  </li>
</ul>
