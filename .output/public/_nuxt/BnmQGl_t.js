import { B as n, R as c, c as p, x as u, e as i, T as m, n as d, S as s, k as f } from "#entry";
const _ = { base: "list-decimal ps-6 my-5 marker:text-muted" }, C = { __name: "ProseOl", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, o = n(), t = c("prose.ol", e), l = p(() => {
    var _a, _b;
    return s({ extend: s(_), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.ol) || {} });
  });
  return (r, k) => {
    var _a;
    return f(), u("ol", { class: m(l.value({ class: [(_a = d(t)) == null ? void 0 : _a.base, e.class] })) }, [i(r.$slots, "default")], 2);
  };
} };
export {
  C as default
};
