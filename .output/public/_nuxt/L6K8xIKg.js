import { f as b, br as I, bs as M, b9 as m, G as B, r as C, a3 as $, h as z, l as y, m as _, w as p, e as h, p as t, P as g, bt as k, c, o as L, bu as A, n as w, aw as P, B as V, bv as F, ah as N, bw as D, bx as H, N as O, by as E, Y as K, X as G } from "#entry";
import { R as j } from "./NIOXM6Tq.js";
const [T, U] = k("TabsRoot");
var W = b({ __name: "TabsRoot", props: { defaultValue: { type: null, required: false }, orientation: { type: String, required: false, default: "horizontal" }, dir: { type: String, required: false }, activationMode: { type: String, required: false, default: "automatic" }, modelValue: { type: null, required: false }, unmountOnHide: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: ["update:modelValue"], setup(i, { emit: s }) {
  const n = i, e = s, { orientation: r, unmountOnHide: u, dir: o } = I(n), a = M(o);
  m();
  const l = B(n, "modelValue", e, { defaultValue: n.defaultValue, passive: n.modelValue === void 0 }), f = C(), v = $(/* @__PURE__ */ new Set());
  return U({ modelValue: l, changeModelValue: (d) => {
    l.value = d;
  }, orientation: r, dir: a, unmountOnHide: u, activationMode: n.activationMode, baseId: z(void 0, "reka-tabs"), tabsList: f, contentIds: v, registerContent: (d) => {
    v.value = /* @__PURE__ */ new Set([...v.value, d]);
  }, unregisterContent: (d) => {
    const q = new Set(v.value);
    q.delete(d), v.value = q;
  } }), (d, q) => (y(), _(t(g), { dir: t(a), "data-orientation": t(r), "as-child": d.asChild, as: d.as }, { default: p(() => [h(d.$slots, "default", { modelValue: t(l) })]), _: 3 }, 8, ["dir", "data-orientation", "as-child", "as"]));
} }), ee = W;
function S(i, s) {
  return `${i}-trigger-${s}`;
}
function R(i, s) {
  return `${i}-content-${s}`;
}
var X = b({ __name: "TabsContent", props: { value: { type: [String, Number], required: true }, forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(i) {
  const s = i, { forwardRef: n } = m(), e = T(), r = c(() => S(e.baseId, s.value)), u = c(() => R(e.baseId, s.value)), o = c(() => s.value === e.modelValue.value), a = C(o.value);
  return L(() => {
    e.registerContent(s.value), requestAnimationFrame(() => {
      a.value = false;
    });
  }), A(() => {
    e.unregisterContent(s.value);
  }), (l, f) => (y(), _(t(F), { present: l.forceMount || o.value, "force-mount": "" }, { default: p(({ present: v }) => [w(t(g), { id: u.value, ref: t(n), "as-child": l.asChild, as: l.as, role: "tabpanel", "data-state": o.value ? "active" : "inactive", "data-orientation": t(e).orientation.value, "aria-labelledby": r.value, hidden: !v, tabindex: "0", style: P({ animationDuration: a.value ? "0s" : void 0 }) }, { default: p(() => [!t(e).unmountOnHide.value || v ? h(l.$slots, "default", { key: 0 }) : V("v-if", true)]), _: 2 }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])]), _: 3 }, 8, ["present"]));
} }), ae = X, Y = b({ __name: "TabsIndicator", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(i, { expose: s }) {
  const n = i, e = T();
  s({ updateIndicatorStyle: o }), m();
  const r = C({ size: null, position: null }), u = C([]);
  N(() => [e.modelValue.value, e == null ? void 0 : e.dir.value], () => {
    o();
  }, { immediate: true, flush: "post" }), D(() => {
    var _a;
    u.value = Array.from(((_a = e.tabsList.value) == null ? void 0 : _a.querySelectorAll('[role="tab"]')) || []);
  }), H(c(() => [e.tabsList.value, ...u.value]), o);
  function o() {
    var _a;
    const a = (_a = e.tabsList.value) == null ? void 0 : _a.querySelector('[role="tab"][data-state="active"]');
    a && (e.orientation.value === "horizontal" ? r.value = { size: a.offsetWidth, position: a.offsetLeft } : r.value = { size: a.offsetHeight, position: a.offsetTop });
  }
  return (a, l) => typeof r.value.size == "number" ? (y(), _(t(g), O({ key: 0 }, n, { style: { "--reka-tabs-indicator-size": `${r.value.size}px`, "--reka-tabs-indicator-position": `${r.value.position}px` } }), { default: p(() => [h(a.$slots, "default")]), _: 3 }, 16, ["style"])) : V("v-if", true);
} }), te = Y, J = b({ __name: "TabsList", props: { loop: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(i) {
  const s = i, { loop: n } = I(s), { forwardRef: e, currentElement: r } = m(), u = T();
  return u.tabsList = r, (o, a) => (y(), _(t(E), { "as-child": "", orientation: t(u).orientation.value, dir: t(u).dir.value, loop: t(n) }, { default: p(() => [w(t(g), { ref: t(e), role: "tablist", "as-child": o.asChild, as: o.as, "aria-orientation": t(u).orientation.value }, { default: p(() => [h(o.$slots, "default")]), _: 3 }, 8, ["as-child", "as", "aria-orientation"])]), _: 3 }, 8, ["orientation", "dir", "loop"]));
} }), se = J, Q = b({ __name: "TabsTrigger", props: { value: { type: [String, Number], required: true }, disabled: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "button" } }, setup(i) {
  const s = i, { forwardRef: n } = m(), e = T(), r = c(() => S(e.baseId, s.value)), u = c(() => e.contentIds.value.has(s.value) ? R(e.baseId, s.value) : void 0), o = c(() => s.value === e.modelValue.value);
  return (a, l) => (y(), _(t(j), { "as-child": "", focusable: !a.disabled, active: o.value }, { default: p(() => [w(t(g), { id: r.value, ref: t(n), role: "tab", type: a.as === "button" ? "button" : void 0, as: a.as, "as-child": a.asChild, "aria-selected": o.value ? "true" : "false", "aria-controls": u.value, "data-state": o.value ? "active" : "inactive", disabled: a.disabled, "data-disabled": a.disabled ? "" : void 0, "data-orientation": t(e).orientation.value, onMousedown: l[0] || (l[0] = G((f) => {
    !a.disabled && f.ctrlKey === false ? t(e).changeModelValue(a.value) : f.preventDefault();
  }, ["left"])), onKeydown: l[1] || (l[1] = K((f) => t(e).changeModelValue(a.value), ["enter", "space"])), onFocus: l[2] || (l[2] = () => {
    const f = t(e).activationMode !== "manual";
    !o.value && !a.disabled && f && t(e).changeModelValue(a.value);
  }) }, { default: p(() => [h(a.$slots, "default")]), _: 3 }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])]), _: 3 }, 8, ["focusable", "active"]));
} }), oe = Q;
export {
  te as T,
  se as a,
  ee as b,
  oe as c,
  ae as d
};
