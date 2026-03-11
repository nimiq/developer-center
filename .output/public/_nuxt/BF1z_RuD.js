import { B as l, R as n, c as u, x as p, e as i, T as d, n as f, S as s, k as m } from "#entry";
const b = { base: "border-s-4 border-accented ps-4 italic" }, _ = { __name: "ProseBlockquote", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(o) {
  const e = o, t = l(), a = n("prose.blockquote", e), c = u(() => {
    var _a, _b;
    return s({ extend: s(b), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.blockquote) || {} });
  });
  return (r, k) => {
    var _a;
    return m(), p("blockquote", { class: d(c.value({ class: [(_a = f(a)) == null ? void 0 : _a.base, e.class] })) }, [i(r.$slots, "default")], 2);
  };
} };
export {
  _ as default
};
