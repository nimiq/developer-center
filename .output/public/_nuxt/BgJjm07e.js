import { _ as k } from "./Bxr547A_.js";
import { f, Y as x, k as s, x as c, z as t, M as r, N as u, l as h, w as a, m as p, a2 as l, n as g, al as v } from "#entry";
import { u as y } from "./D_PvN5q6.js";
const b = { class: "space-y-8" }, B = { class: "mt-4 grid gap-4 md:grid-cols-2" }, C = { class: "flex items-center gap-4" }, w = ["src", "alt"], E = { class: "text-sm font-semibold text-highlighted" }, N = { class: "text-xs text-muted" }, $ = { class: "mt-4 grid gap-4 md:grid-cols-2" }, j = { class: "flex items-center gap-4" }, F = ["src", "alt"], L = { class: "text-sm font-semibold text-highlighted" }, M = { class: "text-xs text-muted" }, T = f({ __name: "BlockchainExplorers", async setup(V) {
  let n, i;
  const { data: d } = ([n, i] = x(() => y("/api/blockchain-explorers", { key: "blockchain-explorers", default: () => ({ mainnet: [], testnet: [] }) }, "$XC-oYmrx4b")), n = await n, i(), n);
  return (Y, o) => {
    const _ = k, m = v;
    return s(), c("div", b, [t("section", null, [o[0] || (o[0] = t("h2", null, "Mainnet", -1)), t("div", B, [(s(true), c(r, null, u(g(d).mainnet, (e) => (s(), h(m, { key: e.link, to: e.link, target: "_blank", class: "no-underline" }, { default: a(() => [p(_, null, { default: a(() => [t("div", C, [t("img", { src: e.logo, alt: e.name, class: "h-12 w-12 rounded-2xl object-cover" }, null, 8, w), t("div", null, [t("p", E, l(e.name), 1), t("p", N, l(e.developer ? `By ${e.developer}` : "Community"), 1)])])]), _: 2 }, 1024)]), _: 2 }, 1032, ["to"]))), 128))])]), t("section", null, [o[1] || (o[1] = t("h2", null, "Testnet", -1)), t("div", $, [(s(true), c(r, null, u(g(d).testnet, (e) => (s(), h(m, { key: e.link, to: e.link, target: "_blank", class: "no-underline" }, { default: a(() => [p(_, null, { default: a(() => [t("div", j, [t("img", { src: e.logo, alt: e.name, class: "h-12 w-12 rounded-2xl object-cover" }, null, 8, F), t("div", null, [t("p", L, l(e.name.replace(" Testnet", "")), 1), t("p", M, l(e.developer ? `By ${e.developer}` : "Community"), 1)])])]), _: 2 }, 1024)]), _: 2 }, 1032, ["to"]))), 128))])])]);
  };
} }), O = Object.assign(T, { __name: "BlockchainExplorers" });
export {
  O as default
};
