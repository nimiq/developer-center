import { B as n, R as c, c as u, x as p, e as i, T as m, n as d, S as s, k as f } from "#entry";
const _ = { base: "list-disc ps-6 my-5 marker:text-(--ui-border-accented)" }, x = { __name: "ProseUl", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, t = n(), o = c("prose.ul", e), r = u(() => {
    var _a, _b;
    return s({ extend: s(_), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.ul) || {} });
  });
  return (l, b) => {
    var _a;
    return f(), p("ul", { class: m(r.value({ class: [(_a = d(o)) == null ? void 0 : _a.base, e.class] })) }, [i(l.$slots, "default")], 2);
  };
} };
export {
  x as default
};
