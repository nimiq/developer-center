import type { FlatConfigComposer } from "../node_modules/.pnpm/eslint-flat-config-utils@3.0.2/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../node_modules/.pnpm/@nuxt+eslint-config@1.15.2_@typescript-eslint+utils@8.57.0_eslint@9.38.0_jiti@2.6.1__ty_f714918edd7ad8cf263fa8faa4ba0087/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../node_modules/.pnpm/@nuxt+eslint-config@1.15.2_@typescript-eslint+utils@8.57.0_eslint@9.38.0_jiti@2.6.1__ty_f714918edd7ad8cf263fa8faa4ba0087/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }