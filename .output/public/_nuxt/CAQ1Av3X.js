import { B as o, R as i, c as p, x as c, e as u, T as d, n as f, S as t, k as m } from "#entry";
const _ = { base: "py-3 px-4 text-sm align-top border-e border-b first:border-s border-muted [&_code]:text-xs/5 [&_p]:my-0 [&_p]:leading-6 [&_ul]:my-0 [&_ol]:my-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:leading-6 [&_li]:my-0.5", variants: { align: { left: "text-left", center: "text-center", right: "text-right" } }, defaultVariants: { align: "left" } }, b = { __name: "ProseTd", props: { align: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, a = o(), r = i("prose.td", e), l = p(() => {
    var _a, _b;
    return t({ extend: t(_), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.td) || {} });
  });
  return (n, g) => {
    var _a;
    return m(), c("td", { class: d(l.value({ align: e.align, class: [(_a = f(r)) == null ? void 0 : _a.base, e.class] })) }, [u(n.$slots, "default")], 2);
  };
} };
export {
  b as default
};
