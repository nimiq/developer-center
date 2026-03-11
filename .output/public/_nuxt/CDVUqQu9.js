import { B as m, R as g, C as k, c as i, x as n, T as c, n as r, e as u, S as d, k as h } from "#entry";
const b = { slots: { base: "text-lg text-highlighted font-bold mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(24px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary", link: "" } }, v = ["id"], x = ["href"], q = { __name: "ProseH4", props: { id: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  var _a;
  const s = e, p = m(), t = g("prose.h4", s), { headings: a } = ((_a = k().public) == null ? void 0 : _a.mdc) || {}, l = i(() => {
    var _a2, _b;
    return d({ extend: d(b), ...((_b = (_a2 = p.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b.h4) || {} })();
  }), f = i(() => s.id && typeof (a == null ? void 0 : a.anchorLinks) == "object" && a.anchorLinks.h4);
  return (o, y) => {
    var _a2, _b;
    return h(), n("h4", { id: e.id, class: c(l.value.base({ class: [(_a2 = r(t)) == null ? void 0 : _a2.base, s.class] })) }, [e.id && f.value ? (h(), n("a", { key: 0, href: `#${e.id}`, class: c(l.value.link({ class: (_b = r(t)) == null ? void 0 : _b.link })) }, [u(o.$slots, "default")], 10, x)) : u(o.$slots, "default", { key: 1 })], 10, v);
  };
} };
export {
  q as default
};
