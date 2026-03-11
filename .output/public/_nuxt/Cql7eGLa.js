import { B as c, R as p, c as l, x as u, e as d, T as i, n as m, S as s, k as f } from "#entry";
const h = { base: "bg-muted" }, C = { __name: "ProseThead", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, t = c(), o = p("prose.thead", e), n = l(() => {
    var _a, _b;
    return s({ extend: s(h), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.thead) || {} });
  });
  return (r, _) => {
    var _a;
    return f(), u("thead", { class: i(n.value({ class: [(_a = m(o)) == null ? void 0 : _a.base, e.class] })) }, [d(r.$slots, "default")], 2);
  };
} };
export {
  C as default
};
