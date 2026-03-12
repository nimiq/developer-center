import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    default: ComponentProps<typeof import("/Users/maxi/nimiq/developer-center/node_modules/.pnpm/docus@https+++pkg.pr.new+docus@1304_b79fef1be70f1ab244195d66774a0d68/node_modules/docus/app/layouts/default.vue").default>,
    docs: ComponentProps<typeof import("/Users/maxi/nimiq/developer-center/node_modules/.pnpm/docus@https+++pkg.pr.new+docus@1304_b79fef1be70f1ab244195d66774a0d68/node_modules/docus/app/layouts/docs.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}