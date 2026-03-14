import { C as n, H as r, c as u, m as c, O as p, p as i, a1 as m, L as a, l as d } from "#entry";
const f = { base: "align-text-top" }, C = { __name: "ProseKbd", props: { value: { type: String, required: true }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, t = n(), o = r("prose.kbd", s), l = u(() => {
    var _a, _b;
    return a({ extend: a(f), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.kbd) || {} });
  });
  return (b, v) => {
    var _a;
    return d(), c(m, { value: e.value, class: p(l.value({ class: [(_a = i(o)) == null ? void 0 : _a.base, s.class] })) }, null, 8, ["value", "class"]);
  };
} };
export {
  C as default
};
