import { r as y } from "./DBnBVrse.js";
import { U as f, B as x, R as q, c as v, l as g, w as k, z as S, x as n, a2 as o, T as r, n as t, A as i, P as w, S as u, k as l, y as B } from "#entry";
import "./iik6CYzq.js";
const C = { slots: { root: "my-5", container: "flex items-center gap-3 font-mono text-sm", name: "font-semibold text-primary", wrapper: "flex-1 flex items-center gap-1.5 text-xs", required: "rounded-sm bg-error/10 text-error px-1.5 py-0.5", type: "rounded-sm bg-elevated text-toned px-1.5 py-0.5", description: "mt-3 text-muted text-sm [&_code]:text-xs/4" } }, U = { __name: "ProseField", props: { as: { type: null, required: false }, name: { type: String, required: false }, type: { type: String, required: false }, description: { type: String, required: false }, required: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const c = e, d = f(), p = x(), s = q("prose.field", c), a = v(() => {
    var _a, _b;
    return u({ extend: u(C), ...((_b = (_a = p.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.field) || {} })();
  });
  return (m, b) => {
    var _a;
    return l(), g(t(w), { as: e.as, class: r(a.value.root({ class: [(_a = t(s)) == null ? void 0 : _a.root, c.class] })) }, { default: k(() => {
      var _a2, _b, _c, _d, _e, _f;
      return [S("div", { class: r(a.value.container({ class: (_a2 = t(s)) == null ? void 0 : _a2.container })) }, [e.name ? (l(), n("span", { key: 0, class: r(a.value.name({ class: (_b = t(s)) == null ? void 0 : _b.name })) }, o(e.name), 3)) : i("", true), e.type || e.required ? (l(), n("div", { key: 1, class: r(a.value.wrapper({ class: (_c = t(s)) == null ? void 0 : _c.wrapper })) }, [e.type ? (l(), n("span", { key: 0, class: r(a.value.type({ class: (_d = t(s)) == null ? void 0 : _d.type })) }, o(e.type), 3)) : i("", true), e.required ? (l(), n("span", { key: 1, class: r(a.value.required({ class: (_e = t(s)) == null ? void 0 : _e.required })) }, " required ", 2)) : i("", true)], 2)) : i("", true)], 2), d.default || e.description ? (l(), n("div", { key: 0, class: r(a.value.description({ class: (_f = t(s)) == null ? void 0 : _f.description })) }, [y(m.$slots, "default", { mdcUnwrap: "p" }, () => [B(o(e.description), 1)])], 2)) : i("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  U as default
};
