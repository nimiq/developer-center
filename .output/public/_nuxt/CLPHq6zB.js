import { f as m, Y as p, $ as u, k as t, x as a, M as l, N as r, z as o, m as f, a5 as h, a2 as x, l as g, n as y, Q as k } from "#entry";
import { l as B, o as M } from "./CSzJBqtn.js";
import "./DaWZu8wl.js";
const b = { class: "space-y-8" }, v = { class: "flex items-center gap-2" }, R = { class: "text-lg font-semibold text-highlighted" }, D = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, G = m({ __name: "RpcMethodsGrid", async setup(N) {
  let e, c;
  const { data: i } = ([e, c] = p(() => u("rpc-method-groups", () => B(M))), e = await e, c(), e);
  return ($, j) => {
    const _ = h, d = k;
    return t(), a("div", b, [(t(true), a(l, null, r(y(i) || [], (s) => (t(), a("section", { key: s.text, class: "space-y-4" }, [o("div", v, [f(_, { name: s.icon, class: "size-5 text-muted" }, null, 8, ["name"]), o("h2", R, x(s.text), 1)]), o("div", D, [(t(true), a(l, null, r(s.methods, (n) => (t(), g(d, { key: n.name, to: n.link, label: n.name, variant: "soft", color: "neutral", class: "justify-start rounded-xl font-mono text-sm" }, null, 8, ["to", "label"]))), 128))])]))), 128))]);
  };
} }), C = Object.assign(G, { __name: "RpcMethodsGrid" });
export {
  C as default
};
