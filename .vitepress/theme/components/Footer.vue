<script setup lang="ts">
const footer = [
  {
    link: 'https://forum.nimiq.community',
    icon: 'i-nimiq:logos-nimiq-forum-mono',
    text: 'Question? Checkout the ',
    social: 'Nimiq Forum',
  },
  // {
  //   link: 'https://youtube.com/@Nimiq',
  //   icon: 'i-nimiq:logos-youtube-mono',
  //   text: 'View Developer tutorials on ',
  //   social: 'Youtube',
  // },
  {
    link: 'https://t.me/nimiq',
    icon: 'i-nimiq:logos-telegram-mono',
    text: 'Give us feedback on ',
    social: 'Telegram',
  },
]
</script>

<template>
  <footer border-top>
    <div px-24 py-48>
      <nav max-w="full sm:640 md:688" mx-auto>
        <ul grid="~ col-1 md:cols-2 gap-16" ml--4>
          <li v-for="(item, i) in footer" :key="item.icon" :class="{ 'md:justify-self-end': i % 2 !== 0 }">
            <p op70>
              <a :href="item.link" target="_blank" flex="~ items-center" px-4 w-max un-text="14 !darkblue-60" class="group">
                <div :class="item.icon" mr-8 text="20 darkblue-20 dark:darkblue-70" />
                {{ item.text }}<span font-semibold text-blue ml-4>{{ item.social }}</span>
                <div i-nimiq:arrow-top-right op90 w-8 ml-6 group-hover="translate-x-2 translate-y--2" transition />
              </a>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @media screen and (min-width: 960px) { padding-left: var(--vp-sidebar-width); }
  @media screen and (min-width: 1280px) { padding-left: 0; margin: 0 auto; width: 807px;}
  @media screen and (min-width: 1441px) { border:0}
}

a {
  --at-apply: text-blue;
}
</style>
