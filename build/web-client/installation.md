---
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
  - title: NextJS
    icon: i-logos:nextjs-icon
    href: ./integrations/NextJS
  - title: CommonJS
    icon: i-logos:nodejs-icon
    href: ./integrations/CommonJS

---

# Installation

Multiple integrations so you can use Nimiq anywhere.{.nq-subline}

<!-- <Grid :items="$frontmatter.integrations" mt-64 class="nq-raw" /> -->

<ul grid="~ cols-1 md:cols-3 md:rows-[1fr_auto] gap-y-12 gap:32 md:gap-32" class="nq-raw" mt-64>
  <li v-for="({title, icon, href}) in $frontmatter.integrations" :key="title">
    <a :href="href" h-full flex="~ col items-center gap-16" p-24 ring="transparent ring-1.5 hocus:neutral/2 dark:hocus:neutral/10" bg="neutral-200 hocus:white" rounded-6 overflow-hidden transition hocus:translate-y--6 hocus:shadow cursor-pointer>
      <div :class="icon" text-40 />
      <p text-24 font-bold>{{ title }}</p>
    </a>
  </li>
</ul>
