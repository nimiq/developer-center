import { C as m, H as g, D as k, c as i, y as o, O as c, p as r, e as u, L as d, l as h } from "#entry";
const b = { slots: { base: "text-4xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)", link: "inline-flex items-center gap-2" } }, y = ["id"], x = ["href"], q = { __name: "ProseH1", props: { id: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  var _a;
  const s = e, p = m(), t = g("prose.h1", s), { headings: a } = ((_a = k().public) == null ? void 0 : _a.mdc) || {}, l = i(() => {
    var _a2, _b;
    return d({ extend: d(b), ...((_b = (_a2 = p.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b.h1) || {} })();
  }), f = i(() => s.id && typeof (a == null ? void 0 : a.anchorLinks) == "object" && a.anchorLinks.h1);
  return (n, C) => {
    var _a2, _b;
    return h(), o("h1", { id: e.id, class: c(l.value.base({ class: [(_a2 = r(t)) == null ? void 0 : _a2.base, s.class] })) }, [e.id && f.value ? (h(), o("a", { key: 0, href: `#${e.id}`, class: c(l.value.link({ class: (_b = r(t)) == null ? void 0 : _b.link })) }, [u(n.$slots, "default")], 10, x)) : u(n.$slots, "default", { key: 1 })], 10, y);
  };
} };
export {
  q as default
};
