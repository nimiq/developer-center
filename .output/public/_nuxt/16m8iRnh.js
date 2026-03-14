import { C as c, H as i, c as l, y as p, e as u, O as d, p as m, L as t, l as f, z as b, ab as y } from "#entry";
const g = { base: "pb-4 text-muted *:first:mt-0 *:last:mb-0 *:my-1.5" }, x = { __name: "ProseAccordionItem", props: { label: { type: String, required: true }, description: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, a = c(), r = i("prose.accordionItem", s), o = l(() => {
    var _a, _b;
    return t({ extend: t(g), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.accordionItem) || {} });
  });
  return (n, C) => {
    var _a;
    return f(), p("div", { class: d(o.value({ class: [(_a = m(r)) == null ? void 0 : _a.base, s.class] })) }, [u(n.$slots, "default", {}, () => [b(y(e.description), 1)])], 2);
  };
} };
export {
  x as default
};
