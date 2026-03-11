import { B as d, R as c, c as n, x as i, e as u, T as p, n as f, S as e, k as m } from "#entry";
const h = { base: "[&:first-child>th:first-child]:rounded-tl-md [&:first-child>th:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md" }, C = { __name: "ProseTr", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const s = t, r = d(), a = c("prose.tr", s), l = n(() => {
    var _a, _b;
    return e({ extend: e(h), ...((_b = (_a = r.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tr) || {} });
  });
  return (o, b) => {
    var _a;
    return m(), i("tr", { class: p(l.value({ class: [(_a = f(a)) == null ? void 0 : _a.base, s.class] })) }, [u(o.$slots, "default")], 2);
  };
} };
export {
  C as default
};
