import { B as i, R as n, c as p, l as c, w as d, e as f, T as m, n as a, P as v, S as t, k as y } from "#entry";
const C = { base: "my-5 divide-y divide-default *:not-last:pb-5" }, _ = { __name: "ProseFieldGroup", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, o = i(), l = n("prose.fieldGroup", s), r = p(() => {
    var _a, _b;
    return t({ extend: t(C), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.fieldGroup) || {} });
  });
  return (u, b) => {
    var _a;
    return y(), c(a(v), { as: e.as, class: m(r.value({ class: [(_a = a(l)) == null ? void 0 : _a.base, s.class] })) }, { default: d(() => [f(u.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  _ as default
};
