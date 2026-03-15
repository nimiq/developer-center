import { r as y } from "./DBnBVrse.js";
import { F as f, C as x, H as q, c as v, m as g, w as k, A as C, y as i, ab as o, O as r, p as t, B as n, P as w, L as u, l, z as B } from "#entry";
import "./iik6CYzq.js";
const S = { slots: { root: "my-5", container: "flex items-center gap-3 font-mono text-sm", name: "font-semibold text-primary", wrapper: "flex-1 flex items-center gap-1.5 text-xs", required: "rounded-sm bg-error/10 text-error px-1.5 py-0.5", type: "rounded-sm bg-elevated text-toned px-1.5 py-0.5", description: "mt-3 text-muted text-sm [&_code]:text-xs/4" } }, V = { __name: "ProseField", props: { as: { type: null, required: false }, name: { type: String, required: false }, type: { type: String, required: false }, description: { type: String, required: false }, required: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const c = e, d = f(), p = x(), s = q("prose.field", c), a = v(() => {
    var _a, _b;
    return u({ extend: u(S), ...((_b = (_a = p.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.field) || {} })();
  });
  return (m, b) => {
    var _a;
    return l(), g(t(w), { as: e.as, class: r(a.value.root({ class: [(_a = t(s)) == null ? void 0 : _a.root, c.class] })) }, { default: k(() => {
      var _a2, _b, _c, _d, _e, _f;
      return [C("div", { class: r(a.value.container({ class: (_a2 = t(s)) == null ? void 0 : _a2.container })) }, [e.name ? (l(), i("span", { key: 0, class: r(a.value.name({ class: (_b = t(s)) == null ? void 0 : _b.name })) }, o(e.name), 3)) : n("", true), e.type || e.required ? (l(), i("div", { key: 1, class: r(a.value.wrapper({ class: (_c = t(s)) == null ? void 0 : _c.wrapper })) }, [e.type ? (l(), i("span", { key: 0, class: r(a.value.type({ class: (_d = t(s)) == null ? void 0 : _d.type })) }, o(e.type), 3)) : n("", true), e.required ? (l(), i("span", { key: 1, class: r(a.value.required({ class: (_e = t(s)) == null ? void 0 : _e.required })) }, " required ", 2)) : n("", true)], 2)) : n("", true)], 2), d.default || e.description ? (l(), i("div", { key: 0, class: r(a.value.description({ class: (_f = t(s)) == null ? void 0 : _f.description })) }, [y(m.$slots, "default", { mdcUnwrap: "p" }, () => [B(o(e.description), 1)])], 2)) : n("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  V as default
};
