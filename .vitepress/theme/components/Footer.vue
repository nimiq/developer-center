<template>
  <footer border-top>
    <div px-24 py-48>
      <nav max-w="full sm:640 md:688" mx-auto>
        <ul flex="~ col gap-16" ml--4>
          <li>
            <a href="https://forum.nimiq.community" target="_blank" flex="~ gap-8 items-center" px-4 w-max>
              <div i-nimiq:logos-nimiq-forum text-17 />
              <p text="14 darkblue-60">
                Questions? Check out the <span text-blue font-semibold>Nimiq Forum</span>
              </p>
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@Nimiq" target="_blank" flex="~ gap-8 items-center" px-4 w-max>
              <div i-nimiq:logos-youtube h-24 mr-3 />
              <p text="14 darkblue-60">
                View Developer tutorials on <span text-blue font-semibold>Youtube</span>
              </p>
            </a>
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
