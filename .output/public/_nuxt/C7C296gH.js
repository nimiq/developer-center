import { _ as f } from "./wdqbK2D9.js";
import { f as k, a6 as x, l as e, y as c, A as t, $ as r, a0 as u, m as h, w as o, n as p, ab as l, p as g, as as v } from "#entry";
import { u as y } from "./BPQ0oOrf.js";
const b = { class: "space-y-8" }, B = { class: "mt-4 grid gap-4 md:grid-cols-2" }, C = { class: "flex items-center gap-4" }, w = ["src", "alt"], $ = { class: "text-sm font-semibold text-highlighted" }, E = { class: "text-xs text-muted" }, j = { class: "mt-4 grid gap-4 md:grid-cols-2" }, N = { class: "flex items-center gap-4" }, A = ["src", "alt"], F = { class: "text-sm font-semibold text-highlighted" }, L = { class: "text-xs text-muted" }, T = k({ __name: "BlockchainExplorers", async setup(V) {
  let n, i;
  const { data: d } = ([n, i] = x(() => y("/api/blockchain-explorers", { key: "blockchain-explorers", default: () => ({ mainnet: [], testnet: [] }) }, "$XC-oYmrx4b")), n = await n, i(), n);
  return (D, a) => {
    const _ = f, m = v;
    return e(), c("div", b, [t("section", null, [a[0] || (a[0] = t("h2", null, "Mainnet", -1)), t("div", B, [(e(true), c(r, null, u(g(d).mainnet, (s) => (e(), h(m, { key: s.link, to: s.link, target: "_blank", class: "no-underline" }, { default: o(() => [p(_, null, { default: o(() => [t("div", C, [t("img", { src: s.logo, alt: s.name, class: "h-12 w-12 rounded-2xl object-cover" }, null, 8, w), t("div", null, [t("p", $, l(s.name), 1), t("p", E, l(s.developer ? `By ${s.developer}` : "Community"), 1)])])]), _: 2 }, 1024)]), _: 2 }, 1032, ["to"]))), 128))])]), t("section", null, [a[1] || (a[1] = t("h2", null, "Testnet", -1)), t("div", j, [(e(true), c(r, null, u(g(d).testnet, (s) => (e(), h(m, { key: s.link, to: s.link, target: "_blank", class: "no-underline" }, { default: o(() => [p(_, null, { default: o(() => [t("div", N, [t("img", { src: s.logo, alt: s.name, class: "h-12 w-12 rounded-2xl object-cover" }, null, 8, A), t("div", null, [t("p", F, l(s.name.replace(" Testnet", "")), 1), t("p", L, l(s.developer ? `By ${s.developer}` : "Community"), 1)])])]), _: 2 }, 1024)]), _: 2 }, 1032, ["to"]))), 128))])])]);
  };
} }), U = Object.assign(T, { __name: "BlockchainExplorers" });
export {
  U as default
};
