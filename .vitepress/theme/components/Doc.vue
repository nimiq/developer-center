<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import { useData } from '../composables/useData'
import { useSidebar } from '../composables/useSidebar'
import { MarkdownContent } from './MarkdownContent'

const { theme, frontmatter } = useData()

const route = useRoute()
const { hasSidebar, hasAside, leftAside } = useSidebar()

const pageName = computed(() =>
  route.path.replace(/[./]+/g, '_').replace(/_html$/, ''),
)
</script>

<template>
  <div class="VPDoc" :class="{ 'has-sidebar': hasSidebar, 'has-aside': hasAside }">
    <slot name="doc-top" />
    <div class="container">
      <div v-if="hasAside" class="aside" :class="{ 'left-aside': leftAside }">
        <div class="aside-curtain" />
        <div class="aside-container">
          <div class="aside-content">
            <div flex="~ col 1">
              <DocAside />
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <slot name="doc-before" />
        <main class="main">
          <MarkdownContent
            :class="[
              frontmatter.layout === 'home' || frontmatter.prose !== false && 'prose',
              pageName,
              theme.externalLinkIcon && 'external-link-icon-enabled',
            ]"
          />
        </main>
        <DocFooter>
          <template #doc-footer-before>
            <slot name="doc-footer-before" />
          </template>
        </DocFooter>
        <slot name="doc-after" />
      </div>
    </div>
    <slot name="doc-bottom" />
  </div>
</template>

<style scoped>
.VPDoc {
  padding: 32px 0 96px;
  width: 100%;
}

@media (min-width: 768px) {
  .VPDoc {
    padding: 48px 0 128px;
  }
}

@media (min-width: 960px) {
  .VPDoc {
    padding: 48px 0 0;
  }

  .VPDoc:not(.has-sidebar) .container {
    display: flex;
    justify-content: center;
    max-width: 992px;
  }

  .VPDoc:not(.has-sidebar) .content {
    max-width: 752px;
  }
}

@media (min-width: 1280px) {
  .VPDoc .container {
    display: flex;
    justify-content: center;
  }

  .VPDoc .aside {
    display: block;
  }
}

@media (min-width: 1440px) {
  .VPDoc:not(.has-sidebar) .content {
    max-width: 784px;
  }

  .VPDoc:not(.has-sidebar) .container {
    max-width: 1104px;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.aside {
  position: relative;
  display: none;
  order: 2;
  flex-grow: 1;
  padding-left: 32px;
  width: 100%;
  max-width: 256px;
}

.left-aside {
  order: 1;
  padding-left: unset;
  padding-right: 32px;
}

.aside-container {
  position: fixed;
  top: 0;
  padding-top: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + var(--vp-doc-top-height, 0px) + 48px);
  width: 224px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}

.aside-container::-webkit-scrollbar {
  display: none;
}

.aside-curtain {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 224px;
  height: 32px;
  background: linear-gradient(transparent, var(--vp-c-bg) 70%);
}

.aside-content {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - (var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px));
  padding-bottom: 32px;
}

.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 960px) {
  .content {
    padding: 0 32px 128px;
  }
}

@media (min-width: 1280px) {
  .content {
    order: 1;
    margin: 0;
    min-width: 640px;
  }
}
</style>

<style>
div[class*="language"]:has(.copy + .lang) {
  --uno: relative;

  .lang {
    --uno: absolute text-11 text-neutral-800 lh-12 right-6 top-6;
  }

  .copy {
    --uno: absolute bg-neutral-400 op0 size-32 rounded-6 right-20 top-20 flex items-center justify-center gap-8 px-9 inline-block transition-colors duration-150 ease-out;

    &::after {
      content: '';
      --uno: inline-block text-inherit size-14 bg-current;
      --un-icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTQgMTQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTkuMzQxIDMuNDlWMS43N0ExLjAxIDEuMDEgMCAwMDguMzMuNzZIMS43N0ExLjAxIDEuMDEgMCAwMC43NiAxLjc3djcuMzRjMCAuNTU4LjQ1MyAxLjAxMSAxLjAxMSAxLjAxMUgzLjFtMi41NyAzLjEyaDYuNTZjLjU1OCAwIDEuMDExLS40NTQgMS4wMTEtMS4wMTJWNS42NzNjMC0uNTU4LS40NTMtMS4wMTEtMS4wMTEtMS4wMTFINS42N2MtLjU1OCAwLTEuMDExLjQ1My0xLjAxMSAxLjAxMXY2LjU1NmMwIC41NTguNDUzIDEuMDExIDEuMDExIDEuMDExWiIvPjwvc3ZnPg==);
      mask: var(--un-icon) no-repeat;
      mask-size: 100% 100%;
    }

    &.copied {
      --uno: w-unset bg-green;
      &::after {
        --uno: text-white;
        --un-icon: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxZW0iIHZpZXdCb3g9IjAgMCAxMiAxMCI+PGcgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI25pbWlxLWNoZWNrLTk3MzM2MHBjMzByMW5uYXNrcmt1cjcpIj48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTExLjA4MiAxLjExMSA1LjAyMiA4Ljg5IDEuMzYzIDUuNjg3Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0ibmltaXEtY2hlY2stOTczMzYwcGMzMHIxbm5hc2tya3VyNyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgxMnYxMEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvZz48L3N2Zz4=);
      }

      &::before {
        --uno: text-15 font-bold text-white;
        content: 'Copied!';
      }
    }
  }

  &:hover,
  &:has(.copy:focus) {
    .copy {
      --uno: op100;

      &:not(.copied):hover {
        --uno: bg-neutral-0;
      }
    }
  }
}
</style>
