import { r as l } from "./DBnBVrse.js";
import { B as p, R as c, c as u, l as i, w as d, T as m, n as f, a3 as _, S as e, k as b } from "#entry";
import "./iik6CYzq.js";
const g = { base: "rounded-full" }, v = { __name: "ProseBadge", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const s = a, o = p(), r = c("prose.badge", s), t = u(() => {
    var _a, _b;
    return e({ extend: e(g), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.badge) || {} });
  });
  return (n, C) => {
    var _a;
    return b(), i(_, { color: "primary", variant: "subtle", class: m(t.value({ class: [(_a = f(r)) == null ? void 0 : _a.base, s.class] })) }, { default: d(() => [l(n.$slots, "default", { mdcUnwrap: "p" })]), _: 3 }, 8, ["class"]);
  };
} };
export {
  v as default
};
