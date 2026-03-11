import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    default: ComponentProps<typeof import("/Users/maxi/nimiq/developer-center/node_modules/.pnpm/docus@5.7.0_patch_hash=ec9e14182a8c08282091fa85abee3c52953ae88979b1c57eec788960958925f2_bd5a7120ae7e562a0996e2c170b568f3/node_modules/docus/app/layouts/default.vue").default>,
    docs: ComponentProps<typeof import("/Users/maxi/nimiq/developer-center/node_modules/.pnpm/docus@5.7.0_patch_hash=ec9e14182a8c08282091fa85abee3c52953ae88979b1c57eec788960958925f2_bd5a7120ae7e562a0996e2c170b568f3/node_modules/docus/app/layouts/docs.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}