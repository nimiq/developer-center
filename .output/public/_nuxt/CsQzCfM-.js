import { C as m, H as g, D as b, c as i, y as n, O as c, p as r, e as u, L as d, l as h } from "#entry";
const k = { slots: { base: "text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary", link: "" } }, y = ["id"], v = ["href"], q = { __name: "ProseH4", props: { id: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  var _a;
  const s = e, p = m(), t = g("prose.h4", s), { headings: a } = ((_a = b().public) == null ? void 0 : _a.mdc) || {}, l = i(() => {
    var _a2, _b;
    return d({ extend: d(k), ...((_b = (_a2 = p.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b.h4) || {} })();
  }), f = i(() => s.id && typeof (a == null ? void 0 : a.anchorLinks) == "object" && a.anchorLinks.h4);
  return (o, x) => {
    var _a2, _b;
    return h(), n("h4", { id: e.id, class: c(l.value.base({ class: [(_a2 = r(t)) == null ? void 0 : _a2.base, s.class] })) }, [e.id && f.value ? (h(), n("a", { key: 0, href: `#${e.id}`, class: c(l.value.link({ class: (_b = r(t)) == null ? void 0 : _b.link })) }, [u(o.$slots, "default")], 10, v)) : u(o.$slots, "default", { key: 1 })], 10, y);
  };
} };
export {
  q as default
};
