import { U as p, B as m, R as y, c as g, S as f, k as s, l as b, w as h, x as i, T as o, n as e, e as n, A as u, P as k } from "#entry";
const C = { slots: { root: "rounded-lg overflow-hidden", header: "p-4 sm:px-6", body: "p-4 sm:p-6", footer: "p-4 sm:px-6" }, variants: { variant: { solid: { root: "bg-inverted text-inverted" }, outline: { root: "bg-default ring ring-default divide-y divide-default" }, soft: { root: "bg-elevated/50 divide-y divide-default" }, subtle: { root: "bg-elevated/50 ring ring-default divide-y divide-default" } } }, defaultVariants: { variant: "outline" } }, B = { __name: "UCard", props: { as: { type: null, required: false }, variant: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(c) {
  const r = c, l = p(), v = m(), a = y("card", r), t = g(() => {
    var _a;
    return f({ extend: f(C), ...((_a = v.ui) == null ? void 0 : _a.card) || {} })({ variant: r.variant });
  });
  return (d, x) => {
    var _a;
    return s(), b(e(k), { as: c.as, "data-slot": "root", class: o(t.value.root({ class: [(_a = e(a)) == null ? void 0 : _a.root, r.class] })) }, { default: h(() => {
      var _a2, _b, _c;
      return [l.header ? (s(), i("div", { key: 0, "data-slot": "header", class: o(t.value.header({ class: (_a2 = e(a)) == null ? void 0 : _a2.header })) }, [n(d.$slots, "header")], 2)) : u("", true), l.default ? (s(), i("div", { key: 1, "data-slot": "body", class: o(t.value.body({ class: (_b = e(a)) == null ? void 0 : _b.body })) }, [n(d.$slots, "default")], 2)) : u("", true), l.footer ? (s(), i("div", { key: 2, "data-slot": "footer", class: o(t.value.footer({ class: (_c = e(a)) == null ? void 0 : _c.footer })) }, [n(d.$slots, "footer")], 2)) : u("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  B as _
};
