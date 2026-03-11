import { U as k, B as y, R as B, V as d, W as _, c as P, S as h, k as o, l as c, w as n, n as e, X as m, T as l, e as u, A as v, z as S, P as U } from "#entry";
const V = { slots: { root: "flex flex-col lg:grid lg:grid-cols-10 lg:gap-10", left: "lg:col-span-2", center: "lg:col-span-8", right: "lg:col-span-2 order-first lg:order-last" }, variants: { left: { true: "" }, right: { true: "" } }, compoundVariants: [{ left: true, right: true, class: { center: "lg:col-span-6" } }, { left: false, right: false, class: { center: "lg:col-span-10" } }] }, x = { __name: "UPage", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(i) {
  const f = i, s = k(), C = y(), t = B("page", f), g = d(!!s.left), p = d(!!s.right);
  _(() => {
    g.value = !!s.left, p.value = !!s.right;
  });
  const a = P(() => {
    var _a;
    return h({ extend: h(V), ...((_a = C.ui) == null ? void 0 : _a.page) || {} })({ left: g.value, right: p.value });
  });
  return (r, q) => {
    var _a;
    return o(), c(e(U), { as: i.as, "data-slot": "root", class: l(a.value.root({ class: [(_a = e(t)) == null ? void 0 : _a.root, f.class] })) }, { default: n(() => {
      var _a2, _b, _c;
      return [s.left ? (o(), c(e(m), { key: 0, "data-slot": "left", class: l(a.value.left({ class: (_a2 = e(t)) == null ? void 0 : _a2.left })) }, { default: n(() => [u(r.$slots, "left")]), _: 3 }, 8, ["class"])) : v("", true), S("div", { "data-slot": "center", class: l(a.value.center({ class: (_b = e(t)) == null ? void 0 : _b.center })) }, [u(r.$slots, "default")], 2), s.right ? (o(), c(e(m), { key: 1, "data-slot": "right", class: l(a.value.right({ class: (_c = e(t)) == null ? void 0 : _c.right })) }, { default: n(() => [u(r.$slots, "right")]), _: 3 }, 8, ["class"])) : v("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  x as _
};
