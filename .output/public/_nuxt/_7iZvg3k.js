import { C as d, H as c, c as n, y as i, e as u, O as p, p as f, L as e, l as m } from "#entry";
const h = { base: "[&:first-child>th:first-child]:rounded-tl-md [&:first-child>th:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md" }, _ = { __name: "ProseTr", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const s = t, r = d(), l = c("prose.tr", s), a = n(() => {
    var _a, _b;
    return e({ extend: e(h), ...((_b = (_a = r.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tr) || {} });
  });
  return (o, b) => {
    var _a;
    return m(), i("tr", { class: p(a.value({ class: [(_a = f(l)) == null ? void 0 : _a.base, s.class] })) }, [u(o.$slots, "default")], 2);
  };
} };
export {
  _ as default
};
