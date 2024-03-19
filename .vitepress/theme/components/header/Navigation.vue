<script setup lang="ts">
import { NavigationMenu } from 'radix-vue/namespaced'
import ThemeSwitcher from './ThemeSwitcher.vue'
import type { NavigationType } from './navigation-types'
import Community from './Community.vue'

defineProps<{ navigation: NavigationType }>()

const currentTrigger = ref('')

// @ts-expect-error - Valid TS. Not sure how extend the types
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <NavigationMenu.Root v-model="currentTrigger" relative w-full flex="~ justify-end items-center" class="raw">
    <NavigationMenu.List flex="~ items-center" text-neutral-800>
      <NavigationMenu.Item v-for="({ key, main, items }) in navigation.items" :key>
        <NavigationMenu.Trigger flex items-center gap-8 rounded-2 lh-1 p-16 focusable>
          {{ key }}
          <div i-nimiq:chevron-down aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute top-0 left-0 w-full sm:w-auto>
          <ul p-16 m-0 sm-w-512 grid="~ gap-x-12 sm:cols-[0.75fr_1fr]">
            <li grid="~ row-span-3">
              <NavigationMenu.Link as-child>
                <a
                  relative of-hidden transition-colors flex="~ col justify-end" rounded-6 h-full w-full p-16
                  :class="`focusable ${main.classes}`" href="/"
                >
                  <div :class="main.iconClasses" text-128 absolute top-8 right--24 />
                  <span label text="12 white/70" z-1>{{ main.label }}</span>
                  <h4 block mt-4 text="18 white" lh-22 z-1 class="arrow" after:op-60>{{ main.title }}</h4>
                  <p mt-6 text="14 white/80" lh-18 z-1>{{ main.description }}</p>
                </a>
              </NavigationMenu.Link>
            </li>

            <li v-for="({ title, description, href }) in items" :key="title">
              <NavigationMenu.Link as-child>
                <a
                  flex="~ col gap-3" select-none rounded-6 px-8 py-10 class="focusable" transition-colors
                  :href="`${baseUrl}${href}`" hocus:bg-neutral-300 group
                >
                  <h4 label text="11 neutral" pl-2 font-bold class="arrow" after:op-60>{{ title }}</h4>
                  <p text="14 neutral-800" lh-18> {{ description }}</p>
                </a>
              </NavigationMenu.Link>
            </li>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger flex items-center gap-8 rounded-2 lh-1 p-16 focusable>
          Community
          <div i-nimiq:chevron-down aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class="navigation-menu" absolute top-0 left-0 w-full sm:w-auto>
          <div p-8>
            <Community :community="navigation.community" />
          </div>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item ml-16 flex="~ items-center">
        <ThemeSwitcher />
      </NavigationMenu.Item>

      <NavigationMenu.Indicator class="indicator" top-full z-100 h-16 flex items-end justify-center overflow-hidden>
        <!-- <div i-nimiq:tooltip-triangle text-neutral-200 /> -->
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div perspective-2000 absolute top-full left-0 w-full flex="~ justify-end">
      <NavigationMenu.Viewport
        bg-neutral-50 shadow class="viewport" relative mt-10 origin-top-center overflow-hidden
        rounded-6 duration-300 border-base
      />
    </div>
  </NavigationMenu.Root>
</template>

<style>
header nav {
  [i-nimiq\:chevron-down] {
    --uno: text-9 transition-transform duration-250;
  }

  :is([data-state=open]) [i-nimiq\:chevron-down] {
    transform: rotate(180deg);
  }

  .navigation-menu {
    &:is([data-motion=from-start]) {
      animation: enterFromLeft 250ms var(--nq-ease, ease);
    }

    &:is([data-motion=from-end]) {
      animation: enterFromRight 250ms var(--nq-ease, ease);
    }

    &:is([data-motion=to-start]) {
      animation: exitToLeft 250ms var(--nq-ease, ease);
    }

    &:is([data-motion=to-end]) {
      animation: exitToRight 250ms var(--nq-ease, ease);
    }
  }

  .indicator {
    transition: all 250ms var(--nq-ease, ease);

    &:is([data-state=hidden]) {
      opacity: 0;
      animation: fadeOut 200ms var(--nq-ease, ease);
    }

    &:is([data-state=visible]) {
      animation: fadeIn 200ms var(--nq-ease, ease);
    }
  }

  .viewport {
    transition: height 300ms var(--nq-ease, ease), width 300ms var(--nq-ease, ease);
    height: var(--radix-navigation-menu-viewport-height);
    width: 100%;

    @screen sm {
      width: var(--radix-navigation-menu-viewport-width);
    }

    &:is([data-state=open]) {
      animation: scaleIn 200ms var(--nq-ease, ease);
    }

    &:is([data-state=close]) {
      animation: scaleOut 200ms var(--nq-ease, ease);
    }
  }
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
