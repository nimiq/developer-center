import { B as g, R as f, C as v, c, x as d, T as t, n as e, z as b, m as x, a5 as y, e as u, S as p, k as h } from "#entry";
const k = { slots: { base: ["relative text-2xl text-highlighted font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:focus-visible:outline-primary [&>a>code]:border-dashed hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary [&>a>code]:text-xl/7 [&>a>code]:font-bold", "[&>a>code]:transition-colors"], leading: ["absolute -ms-8 top-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated hover:text-primary rounded-md hidden lg:flex text-muted", "transition"], leadingIcon: "size-4 shrink-0", link: "group lg:ps-2 lg:-ms-2" } }, C = ["id"], B = ["href"], $ = { __name: "ProseH2", props: { id: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  var _a;
  const l = a, i = g(), s = f("prose.h2", l), { headings: n } = ((_a = v().public) == null ? void 0 : _a.mdc) || {}, o = c(() => {
    var _a2, _b;
    return p({ extend: p(k), ...((_b = (_a2 = i.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b.h2) || {} })();
  }), m = c(() => l.id && typeof (n == null ? void 0 : n.anchorLinks) == "object" && n.anchorLinks.h2);
  return (r, I) => {
    var _a2, _b, _c, _d;
    return h(), d("h2", { id: a.id, class: t(o.value.base({ class: [(_a2 = e(s)) == null ? void 0 : _a2.base, l.class] })) }, [a.id && m.value ? (h(), d("a", { key: 0, href: `#${a.id}`, class: t(o.value.link({ class: (_b = e(s)) == null ? void 0 : _b.link })) }, [b("span", { class: t(o.value.leading({ class: (_c = e(s)) == null ? void 0 : _c.leading })) }, [x(y, { name: e(i).ui.icons.hash, class: t(o.value.leadingIcon({ class: (_d = e(s)) == null ? void 0 : _d.leadingIcon })) }, null, 8, ["name", "class"])], 2), u(r.$slots, "default")], 10, B)) : u(r.$slots, "default", { key: 1 })], 10, C);
  };
} };
export {
  $ as default
};
