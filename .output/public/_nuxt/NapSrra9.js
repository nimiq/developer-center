import { B as c, R as i, c as l, x as p, e as u, T as d, n as m, S as t, k as f, y, a2 as b } from "#entry";
const g = { base: "pb-4 text-muted *:first:mt-0 *:last:mb-0 *:my-1.5" }, q = { __name: "ProseAccordionItem", props: { label: { type: String, required: true }, description: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, a = c(), r = i("prose.accordionItem", s), o = l(() => {
    var _a, _b;
    return t({ extend: t(g), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.accordionItem) || {} });
  });
  return (n, x) => {
    var _a;
    return f(), p("div", { class: d(o.value({ class: [(_a = m(r)) == null ? void 0 : _a.base, s.class] })) }, [u(n.$slots, "default", {}, () => [y(b(e.description), 1)])], 2);
  };
} };
export {
  q as default
};
