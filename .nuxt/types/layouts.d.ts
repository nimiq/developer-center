import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    default: ComponentProps<typeof import("/Users/maxi/nimiq/developer-center/node_modules/.pnpm/docus@5.7.0_patch_hash=e1dee8c9c8843a392306949f7ebf97dcdeefac9f3a069edfda13b23f4bc57aa7_1fbacde2369ba083df6cfe03d3e97a5f/node_modules/docus/app/layouts/default.vue").default>,
    docs: ComponentProps<typeof import("/Users/maxi/nimiq/developer-center/node_modules/.pnpm/docus@5.7.0_patch_hash=e1dee8c9c8843a392306949f7ebf97dcdeefac9f3a069edfda13b23f4bc57aa7_1fbacde2369ba083df6cfe03d3e97a5f/node_modules/docus/app/layouts/docs.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}