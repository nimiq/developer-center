import { r as c } from "./DBnBVrse.js";
import { C as l, H as n, c as u, m as i, w as m, O as d, p as f, ac as _, L as e, l as b } from "#entry";
import "./iik6CYzq.js";
const C = { base: "rounded-full" }, x = { __name: "ProseBadge", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const s = a, o = l(), r = n("prose.badge", s), t = u(() => {
    var _a, _b;
    return e({ extend: e(C), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.badge) || {} });
  });
  return (p, g) => {
    var _a;
    return b(), i(_, { color: "primary", variant: "subtle", class: d(t.value({ class: [(_a = f(r)) == null ? void 0 : _a.base, s.class] })) }, { default: m(() => [c(p.$slots, "default", { mdcUnwrap: "p" })]), _: 3 }, 8, ["class"]);
  };
} };
export {
  x as default
};
