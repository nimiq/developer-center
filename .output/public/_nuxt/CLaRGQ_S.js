import { F as y, C as B, H as _, a3 as d, a4 as k, c as P, L as h, l as o, m as c, w as n, p as e, a5 as m, O as l, e as u, B as v, A as q, P as w } from "#entry";
const x = { slots: { root: "flex flex-col lg:grid lg:grid-cols-10 lg:gap-10", left: "lg:col-span-2", center: "lg:col-span-8", right: "lg:col-span-2 order-first lg:order-last" }, variants: { left: { true: "" }, right: { true: "" } }, compoundVariants: [{ left: true, right: true, class: { center: "lg:col-span-6" } }, { left: false, right: false, class: { center: "lg:col-span-10" } }] }, V = { __name: "UPage", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(i) {
  const f = i, s = y(), C = B(), t = _("page", f), g = d(!!s.left), p = d(!!s.right);
  k(() => {
    g.value = !!s.left, p.value = !!s.right;
  });
  const a = P(() => {
    var _a;
    return h({ extend: h(x), ...((_a = C.ui) == null ? void 0 : _a.page) || {} })({ left: g.value, right: p.value });
  });
  return (r, S) => {
    var _a;
    return o(), c(e(w), { as: i.as, "data-slot": "root", class: l(a.value.root({ class: [(_a = e(t)) == null ? void 0 : _a.root, f.class] })) }, { default: n(() => {
      var _a2, _b, _c;
      return [s.left ? (o(), c(e(m), { key: 0, "data-slot": "left", class: l(a.value.left({ class: (_a2 = e(t)) == null ? void 0 : _a2.left })) }, { default: n(() => [u(r.$slots, "left")]), _: 3 }, 8, ["class"])) : v("", true), q("div", { "data-slot": "center", class: l(a.value.center({ class: (_b = e(t)) == null ? void 0 : _b.center })) }, [u(r.$slots, "default")], 2), s.right ? (o(), c(e(m), { key: 1, "data-slot": "right", class: l(a.value.right({ class: (_c = e(t)) == null ? void 0 : _c.right })) }, { default: n(() => [u(r.$slots, "right")]), _: 3 }, 8, ["class"])) : v("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  V as _
};
