import { _ as h, l as p, y as x, f as y, T as B, c as m, m as g, bE as $, p as a, ba as b, F as A, C, H as k, L as v, w as i, A as _, O as c, e as f, B as U, P as L, n as d, ax as N } from "#entry";
import { _ as P } from "./CLaRGQ_S.js";
import { _ as D } from "./BsOuZGy1.js";
const F = {};
function H(n, o) {
  return p(), x("div");
}
const j = Object.assign(h(F, [["render", H]]), { __name: "DocsAsideLeftTop" }), O = y({ __name: "DocsAsideLeftBody", setup(n) {
  const o = b("navigation"), r = B(), l = m(() => r.path.split("/").filter(Boolean)[0] || ""), t = m(() => {
    var _a;
    if (!(o == null ? void 0 : o.value)) return [];
    if (!l.value) return o.value;
    const e = o.value.find((s) => {
      var _a2;
      return (((_a2 = s.path) == null ? void 0 : _a2.split("/").filter(Boolean)[0]) || "") === l.value;
    });
    return ((_a = e == null ? void 0 : e.children) == null ? void 0 : _a.length) ? e.children : e ? [e] : o.value;
  });
  return (e, s) => {
    const u = $;
    return p(), g(u, { highlight: "", navigation: a(t) }, null, 8, ["navigation"]);
  };
} }), S = Object.assign(O, { __name: "DocsAsideLeftBody" }), q = { slots: { root: "hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--ui-header-height))] lg:sticky lg:top-(--ui-header-height) py-8 lg:ps-4 lg:-ms-4 lg:pe-6.5", container: "relative", top: "sticky -top-8 -mt-8 pointer-events-none z-[1]", topHeader: "h-8 bg-default -mx-4 px-4", topBody: "bg-default relative pointer-events-auto flex flex-col -mx-4 px-4", topFooter: "h-8 bg-gradient-to-b from-default -mx-4 px-4" } }, w = { __name: "UPageAside", props: { as: { type: null, required: false, default: "aside" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(n) {
  const o = n, r = A(), l = C(), t = k("pageAside", o), e = m(() => {
    var _a;
    return v({ extend: v(q), ...((_a = l.ui) == null ? void 0 : _a.pageAside) || {} })();
  });
  return (s, u) => {
    var _a;
    return p(), g(a(L), { as: n.as, "data-slot": "root", class: c(e.value.root({ class: [(_a = a(t)) == null ? void 0 : _a.root, o.class] })) }, { default: i(() => {
      var _a2, _b, _c, _d, _e;
      return [_("div", { "data-slot": "container", class: c(e.value.container({ class: (_a2 = a(t)) == null ? void 0 : _a2.container })) }, [r.top ? (p(), x("div", { key: 0, "data-slot": "top", class: c(e.value.top({ class: (_b = a(t)) == null ? void 0 : _b.top })) }, [_("div", { "data-slot": "topHeader", class: c(e.value.topHeader({ class: (_c = a(t)) == null ? void 0 : _c.topHeader })) }, null, 2), _("div", { "data-slot": "topBody", class: c(e.value.topBody({ class: (_d = a(t)) == null ? void 0 : _d.topBody })) }, [f(s.$slots, "top")], 2), _("div", { "data-slot": "topFooter", class: c(e.value.topFooter({ class: (_e = a(t)) == null ? void 0 : _e.topFooter })) }, null, 2)], 2)) : U("", true), f(s.$slots, "default"), f(s.$slots, "bottom")], 2)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }, T = {};
function V(n, o) {
  const r = j, l = S, t = w, e = P, s = N, u = D;
  return p(), g(u, null, { default: i(() => [d(s, null, { default: i(() => [d(e, null, { left: i(() => [d(t, null, { default: i(() => [d(r), d(l)]), _: 1 })]), default: i(() => [f(n.$slots, "default")]), _: 3 })]), _: 3 })]), _: 3 });
}
const I = h(T, [["render", V]]);
export {
  I as default
};
