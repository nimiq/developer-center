import { B as c, R as n, c as l, S as s, k as u, l as d, w as p, e as f, T as m, n as b, a1 as h } from "#entry";
const y = { base: ["text-primary border-b border-transparent hover:border-primary font-medium focus-visible:outline-primary focus-visible:has-[>code]:outline-0 [&>code]:border-dashed hover:[&>code]:border-primary hover:[&>code]:text-primary focus-visible:[&>code]:border-primary focus-visible:[&>code]:text-primary", "transition-colors [&>code]:transition-colors"] }, x = { __name: "ProseA", props: { href: { type: String, required: false }, target: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const r = e, a = c(), o = n("prose.a", r), t = l(() => {
    var _a, _b;
    return s({ extend: s(y), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.a) || {} });
  });
  return (i, v) => {
    var _a;
    return u(), d(h, { href: e.href, target: e.target, class: m(t.value({ class: [(_a = b(o)) == null ? void 0 : _a.base, r.class] })), raw: "" }, { default: p(() => [f(i.$slots, "default")]), _: 3 }, 8, ["href", "target", "class"]);
  };
} };
export {
  x as default
};
