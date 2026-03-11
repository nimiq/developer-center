import { B as l, R as r, c as u, l as c, T as p, n as i, O as d, S as a, k as f } from "#entry";
const m = { base: "align-text-top" }, k = { __name: "ProseKbd", props: { value: { type: String, required: true }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, t = l(), n = r("prose.kbd", s), o = u(() => {
    var _a, _b;
    return a({ extend: a(m), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.kbd) || {} });
  });
  return (b, v) => {
    var _a;
    return f(), c(d, { value: e.value, class: p(o.value({ class: [(_a = i(n)) == null ? void 0 : _a.base, s.class] })) }, null, 8, ["value", "class"]);
  };
} };
export {
  k as default
};
