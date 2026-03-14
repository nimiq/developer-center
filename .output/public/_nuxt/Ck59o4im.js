import { c as i, t as h, ay as g, f as y, az as B, ah as E, l, m as p, N as d, aA as V, y as f, B as A, $ as c, a0 as $ } from "#entry";
function j(u) {
  return i(() => {
    var _a;
    return h(u) ? !!((_a = g(u)) == null ? void 0 : _a.closest("form")) : true;
  });
}
var k = y({ inheritAttrs: false, __name: "VisuallyHiddenInputBubble", props: { name: { type: String, required: true }, value: { type: null, required: true }, checked: { type: Boolean, required: false, default: void 0 }, required: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, feature: { type: String, required: false, default: "fully-hidden" } }, setup(u) {
  const e = u, { primitiveElement: o, currentElement: s } = B(), t = i(() => e.checked ?? e.value);
  return E(t, (a, r) => {
    if (!s.value) return;
    const n = s.value, _ = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(_, "value").set;
    if (v && a !== r) {
      const b = new Event("input", { bubbles: true }), q = new Event("change", { bubbles: true });
      v.call(n, a), n.dispatchEvent(b), n.dispatchEvent(q);
    }
  }), (a, r) => (l(), p(V, d({ ref_key: "primitiveElement", ref: o }, { ...e, ...a.$attrs }, { as: "input" }), null, 16));
} }), m = k, H = y({ inheritAttrs: false, __name: "VisuallyHiddenInput", props: { name: { type: String, required: true }, value: { type: null, required: true }, checked: { type: Boolean, required: false, default: void 0 }, required: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, feature: { type: String, required: false, default: "fully-hidden" } }, setup(u) {
  const e = u, o = i(() => typeof e.value == "object" && Array.isArray(e.value) && e.value.length === 0 && e.required), s = i(() => typeof e.value == "string" || typeof e.value == "number" || typeof e.value == "boolean" || e.value === null || e.value === void 0 ? [{ name: e.name, value: e.value }] : typeof e.value == "object" && Array.isArray(e.value) ? e.value.flatMap((t, a) => typeof t == "object" ? Object.entries(t).map(([r, n]) => ({ name: `${e.name}[${a}][${r}]`, value: n })) : { name: `${e.name}[${a}]`, value: t }) : e.value !== null && typeof e.value == "object" && !Array.isArray(e.value) ? Object.entries(e.value).map(([t, a]) => ({ name: `${e.name}[${t}]`, value: a })) : []);
  return (t, a) => (l(), f(c, null, [A(" We render single input if it's required "), o.value ? (l(), p(m, d({ key: t.name }, { ...e, ...t.$attrs }, { name: t.name, value: t.value }), null, 16, ["name", "value"])) : (l(true), f(c, { key: 1 }, $(s.value, (r) => (l(), p(m, d({ key: r.name }, { ref_for: true }, { ...e, ...t.$attrs }, { name: r.name, value: r.value }), null, 16, ["name", "value"]))), 128))], 2112));
} }), S = H;
export {
  S as V,
  j as u
};
