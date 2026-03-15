import { C as i, H as p, c as n, m as c, w as d, e as f, O as m, p as a, P as C, L as t, l as v } from "#entry";
const y = { base: "my-5 divide-y divide-default *:not-last:pb-5" }, _ = { __name: "ProseFieldGroup", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, o = i(), l = p("prose.fieldGroup", s), r = n(() => {
    var _a, _b;
    return t({ extend: t(y), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.fieldGroup) || {} });
  });
  return (u, b) => {
    var _a;
    return v(), c(a(C), { as: e.as, class: m(r.value({ class: [(_a = a(l)) == null ? void 0 : _a.base, s.class] })) }, { default: d(() => [f(u.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  _ as default
};
