import { f as x, E as y, c as m, n as o, l as f, al as b, w as i, a5 as A, A as v, z as _, a2 as k, a$ as B, k as p, bG as C, U, B as D, R as L, S as h, T as u, x as N, e as g, P, _ as S, m as d, aq as j } from "#entry";
import { _ as q } from "./zXH9_LZa.js";
import { _ as z } from "./BkGtkf2m.js";
const F = x({ __name: "DocsAsideLeftTop", setup(r) {
  const a = B("navigation"), l = y(), n = m(() => l.path.split("/").filter(Boolean)[0] || ""), e = m(() => !(a == null ? void 0 : a.value) || !n.value ? null : a.value.find((t) => t.path === `/${n.value}`));
  return (t, s) => {
    const c = A, $ = b;
    return o(e) ? (p(), f($, { key: 0, to: o(e).path, class: "flex items-center gap-2 px-2.5 py-2 mb-2 rounded-lg font-bold text-sm text-highlighted hover:bg-accented transition-colors" }, { default: i(() => [o(e).icon ? (p(), f(c, { key: 0, name: o(e).icon, class: "size-5 text-primary" }, null, 8, ["name"])) : v("", true), _("span", null, k(o(e).title), 1)]), _: 1 }, 8, ["to"])) : v("", true);
  };
} }), H = Object.assign(F, { __name: "DocsAsideLeftTop" }), T = x({ __name: "DocsAsideLeftBody", setup(r) {
  const a = B("navigation"), l = y(), n = m(() => l.path.split("/").filter(Boolean)[0] || ""), e = m(() => {
    var _a;
    if (!(a == null ? void 0 : a.value) || !n.value) return (a == null ? void 0 : a.value) || [];
    const t = a.value.find((s) => {
      var _a2;
      return (((_a2 = s.path) == null ? void 0 : _a2.split("/").filter(Boolean)[0]) || "") === n.value;
    });
    return ((_a = t == null ? void 0 : t.children) == null ? void 0 : _a.length) ? t.children : t ? [t] : a.value;
  });
  return (t, s) => {
    const c = C;
    return p(), f(c, { highlight: "", navigation: o(e) }, null, 8, ["navigation"]);
  };
} }), w = Object.assign(T, { __name: "DocsAsideLeftBody" }), I = { slots: { root: "hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5", container: "relative", top: "sticky -top-8 -mt-8 pointer-events-none z-[1]", topHeader: "h-8 bg-default -mx-4 px-4", topBody: "bg-default relative pointer-events-auto flex flex-col -mx-4 px-4", topFooter: "h-8 bg-gradient-to-b from-default -mx-4 px-4" } }, M = { __name: "UPageAside", props: { as: { type: null, required: false, default: "aside" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(r) {
  const a = r, l = U(), n = D(), e = L("pageAside", a), t = m(() => {
    var _a;
    return h({ extend: h(I), ...((_a = n.ui) == null ? void 0 : _a.pageAside) || {} })();
  });
  return (s, c) => {
    var _a;
    return p(), f(o(P), { as: r.as, "data-slot": "root", class: u(t.value.root({ class: [(_a = o(e)) == null ? void 0 : _a.root, a.class] })) }, { default: i(() => {
      var _a2, _b, _c, _d, _e;
      return [_("div", { "data-slot": "container", class: u(t.value.container({ class: (_a2 = o(e)) == null ? void 0 : _a2.container })) }, [l.top ? (p(), N("div", { key: 0, "data-slot": "top", class: u(t.value.top({ class: (_b = o(e)) == null ? void 0 : _b.top })) }, [_("div", { "data-slot": "topHeader", class: u(t.value.topHeader({ class: (_c = o(e)) == null ? void 0 : _c.topHeader })) }, null, 2), _("div", { "data-slot": "topBody", class: u(t.value.topBody({ class: (_d = o(e)) == null ? void 0 : _d.topBody })) }, [g(s.$slots, "top")], 2), _("div", { "data-slot": "topFooter", class: u(t.value.topFooter({ class: (_e = o(e)) == null ? void 0 : _e.topFooter })) }, null, 2)], 2)) : v("", true), g(s.$slots, "default"), g(s.$slots, "bottom")], 2)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }, O = {};
function V(r, a) {
  const l = H, n = w, e = M, t = q, s = j, c = z;
  return p(), f(c, null, { default: i(() => [d(s, null, { default: i(() => [d(t, null, { left: i(() => [d(e, null, { default: i(() => [d(l), d(n)]), _: 1 })]), default: i(() => [g(r.$slots, "default")]), _: 3 })]), _: 3 })]), _: 3 });
}
const J = S(O, [["render", V]]);
export {
  J as default
};
