import { B as n, R as c, c as p, x as l, T as u, n as i, S as s, k as m } from "#entry";
const f = { base: "border-t border-default my-12" }, h = { __name: "ProseHr", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(r) {
  const e = r, a = n(), o = c("prose.hr", e), t = p(() => {
    var _a, _b;
    return s({ extend: s(f), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.hr) || {} });
  });
  return (d, _) => {
    var _a;
    return m(), l("hr", { class: u(t.value({ class: [(_a = i(o)) == null ? void 0 : _a.base, e.class] })) }, null, 2);
  };
} };
export {
  h as default
};
