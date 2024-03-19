<script setup lang="ts">
const { theme, page } = useData()
const footer = theme.value.footerItems
</script>

<template>
  <footer border-top class="raw" :class="page.frontmatter.layout === 'home' ? 'home-layout' : ''">
    <div px-24 py-48>
      <nav max-w="full sm:640 md:688" mx-auto>
        <ul grid="~ col-1 md:cols-2 gap-16" ml--4>
          <li v-for="(item, i) in footer" :key="item.icon" :class="{ 'md:justify-self-end': i % 2 !== 0 }">
            <a
              :href="item.link" target="_blank" flex="~ items-center" px-4
              w-max un-text-14 class="arrow" text-blue
            >
              <div :class="item.icon" mr-8 text="20 neutral-600" />
              <span text-neutral-700>{{ item.text }}</span>
              <span font-semibold ml-4>{{ item.social }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer:not(.home-layout) {
  @media screen and (min-width: 960px) { padding-left: var(--vp-sidebar-width); }
  @media screen and (min-width: 1280px) { padding-left: 0; margin: 0 auto; width: 807px;}
  @media screen and (min-width: 1441px) { border:0}
}
</style>
