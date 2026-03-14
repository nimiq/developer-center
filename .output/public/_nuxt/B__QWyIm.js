import { f as m, a6 as p, a8 as u, l as t, y as a, $ as l, a0 as r, A as o, n as f, Q as h, ab as g, m as x, p as y, a2 as k } from "#entry";
import { l as b, o as B } from "./CSzJBqtn.js";
import "./DaWZu8wl.js";
const v = { class: "space-y-8" }, M = { class: "flex items-center gap-2" }, R = { class: "text-lg font-semibold text-highlighted" }, A = { class: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3" }, D = m({ __name: "RpcMethodsGrid", async setup(G) {
  let e, c;
  const { data: i } = ([e, c] = p(() => u("rpc-method-groups", () => b(B))), e = await e, c(), e);
  return ($, j) => {
    const _ = h, d = k;
    return t(), a("div", v, [(t(true), a(l, null, r(y(i) || [], (s) => (t(), a("section", { key: s.text, class: "space-y-4" }, [o("div", M, [f(_, { name: s.icon, class: "size-5 text-muted" }, null, 8, ["name"]), o("h2", R, g(s.text), 1)]), o("div", A, [(t(true), a(l, null, r(s.methods, (n) => (t(), x(d, { key: n.name, to: n.link, label: n.name, variant: "soft", color: "neutral", class: "justify-start rounded-xl font-mono text-sm" }, null, 8, ["to", "label"]))), 128))])]))), 128))]);
  };
} }), U = Object.assign(D, { __name: "RpcMethodsGrid" });
export {
  U as default
};
