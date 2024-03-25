<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import RegisterSw from './components/RegisterSW.vue'
</script>

<template>
  <RegisterSW />
  <DefaultTheme.Layout bg-neutral-0 class="vp-raw">
    <template #not-found>
      <main px-32>
        <div class="prose" mt-40 w-max mx-auto>
          <h1 text-24>
            <span font-bold text-28>404</span> Page not found
          </h1>
          <blockquote px-0 my-40>
            <p font-italic>
              But if you keep looking, you'll find it.
            </p>
          </blockquote>
          <div>
            <a :href="withBase('/')" pill-blue arrow text-white mt-24 ml-0>Go home</a>
          </div>
        </div>
      </main>
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
