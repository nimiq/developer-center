import { B as c, R as p, c as l, x as u, e as d, T as i, n as f, S as s, k as m } from "#entry";
const b = { base: "" }, C = { __name: "ProseTbody", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(o) {
  const e = o, a = c(), t = p("prose.tbody", e), n = l(() => {
    var _a, _b;
    return s({ extend: s(b), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tbody) || {} });
  });
  return (r, y) => {
    var _a;
    return m(), u("tbody", { class: i(n.value({ class: [(_a = f(t)) == null ? void 0 : _a.base, e.class] })) }, [d(r.$slots, "default")], 2);
  };
} };
export {
  C as default
};
