import { B as l, R as i, c as p, x as c, e as u, T as d, n as f, S as t, k as m } from "#entry";
const b = { base: "py-3 px-4 font-semibold text-sm border-e border-b first:border-s border-t border-muted", variants: { align: { left: "text-left", center: "text-center", right: "text-right" } }, defaultVariants: { align: "left" } }, x = { __name: "ProseTh", props: { align: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, r = l(), a = i("prose.th", e), n = p(() => {
    var _a, _b;
    return t({ extend: t(b), ...((_b = (_a = r.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.th) || {} });
  });
  return (o, g) => {
    var _a;
    return m(), c("th", { class: d(n.value({ align: e.align, class: [(_a = f(a)) == null ? void 0 : _a.base, e.class] })) }, [u(o.$slots, "default")], 2);
  };
} };
export {
  x as default
};
