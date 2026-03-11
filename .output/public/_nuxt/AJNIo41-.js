import { f as F, bh as Z, bj as H, a_ as O, bY as Q, c as P, k as t, l as b, w as n, e as z, n as e, bZ as G, A as k, a4 as K, K as W, I as X, P as A, bk as ee, U as te, a6 as ae, B as se, R as le, bE as oe, aE as re, b_ as ne, ak as de, b$ as ie, S as N, z as c, T as w, m as f, a5 as T, x as p, M, y as R, a2 as v, a8 as L, r as I, aM as ce, bw as ue, J as me, N as j, Q as pe, a3 as he, c0 as fe, E as be, Y as ye, Z as ge, aV as ve, c1 as _e, $ as ke, aq as xe } from "#entry";
import { L as we, _ as qe, a as Ve } from "./BzkzRpez.js";
import { _ as Se } from "./Bxr547A_.js";
import { _ as Ce } from "./BIWE6rhi.js";
import { _ as $e } from "./zXH9_LZa.js";
import { _ as Ue } from "./BkGtkf2m.js";
import { l as Be, o as Re } from "./CSzJBqtn.js";
import "./DaWZu8wl.js";
const [Pe, Ie] = ee("SwitchRoot");
var Me = F({ __name: "SwitchRoot", props: { defaultValue: { type: Boolean, required: false }, modelValue: { type: [Boolean, null], required: false, default: void 0 }, disabled: { type: Boolean, required: false }, id: { type: String, required: false }, value: { type: String, required: false, default: "on" }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "button" }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: ["update:modelValue"], setup(o, { emit: s }) {
  const l = o, h = s, { disabled: y } = Z(l), u = H(l, "modelValue", h, { defaultValue: l.defaultValue, passive: l.modelValue === void 0 });
  function g() {
    y.value || (u.value = !u.value);
  }
  const { forwardRef: i, currentElement: d } = O(), m = Q(d), _ = P(() => {
    var _a;
    return l.id && d.value ? (_a = document.querySelector(`[for="${l.id}"]`)) == null ? void 0 : _a.innerText : void 0;
  });
  return Ie({ modelValue: u, toggleCheck: g, disabled: y }), (r, V) => (t(), b(e(A), K(r.$attrs, { id: r.id, ref: e(i), role: "switch", type: r.as === "button" ? "button" : void 0, value: r.value, "aria-label": r.$attrs["aria-label"] || _.value, "aria-checked": e(u), "aria-required": r.required, "data-state": e(u) ? "checked" : "unchecked", "data-disabled": e(y) ? "" : void 0, "as-child": r.asChild, as: r.as, disabled: e(y), onClick: g, onKeydown: W(X(g, ["prevent"]), ["enter"]) }), { default: n(() => [z(r.$slots, "default", { modelValue: e(u) }), e(m) && r.name ? (t(), b(e(G), { key: 0, type: "checkbox", name: r.name, disabled: e(y), required: r.required, value: r.value, checked: !!e(u) }, null, 8, ["name", "disabled", "required", "value", "checked"])) : k("v-if", true)]), _: 3 }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]));
} }), ze = Me, Fe = F({ __name: "SwitchThumb", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "span" } }, setup(o) {
  const s = Pe();
  return O(), (l, h) => {
    var _a;
    return t(), b(e(A), { "data-state": ((_a = e(s).modelValue) == null ? void 0 : _a.value) ? "checked" : "unchecked", "data-disabled": e(s).disabled.value ? "" : void 0, "as-child": l.asChild, as: l.as }, { default: n(() => [z(l.$slots, "default")]), _: 3 }, 8, ["data-state", "data-disabled", "as-child", "as"]);
  };
} }), Ee = Fe;
const Te = { slots: { root: "relative flex items-start", base: ["inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-accented", "transition-[background] duration-200"], container: "flex items-center", thumb: "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center", icon: ["absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12", "transition-[color,opacity] duration-200"], wrapper: "ms-2", label: "block font-medium text-default", description: "text-muted" }, variants: { color: { primary: { base: "data-[state=checked]:bg-primary focus-visible:outline-primary", icon: "group-data-[state=checked]:text-primary" }, secondary: { base: "data-[state=checked]:bg-secondary focus-visible:outline-secondary", icon: "group-data-[state=checked]:text-secondary" }, success: { base: "data-[state=checked]:bg-success focus-visible:outline-success", icon: "group-data-[state=checked]:text-success" }, info: { base: "data-[state=checked]:bg-info focus-visible:outline-info", icon: "group-data-[state=checked]:text-info" }, warning: { base: "data-[state=checked]:bg-warning focus-visible:outline-warning", icon: "group-data-[state=checked]:text-warning" }, error: { base: "data-[state=checked]:bg-error focus-visible:outline-error", icon: "group-data-[state=checked]:text-error" }, neutral: { base: "data-[state=checked]:bg-inverted focus-visible:outline-inverted", icon: "group-data-[state=checked]:text-highlighted" } }, size: { xs: { base: "w-7", container: "h-4", thumb: "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3", wrapper: "text-xs" }, sm: { base: "w-8", container: "h-4", thumb: "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5", wrapper: "text-xs" }, md: { base: "w-9", container: "h-5", thumb: "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4", wrapper: "text-sm" }, lg: { base: "w-10", container: "h-5", thumb: "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5", wrapper: "text-sm" }, xl: { base: "w-11", container: "h-6", thumb: "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5", wrapper: "text-base" } }, checked: { true: { icon: "group-data-[state=checked]:opacity-100" } }, unchecked: { true: { icon: "group-data-[state=unchecked]:opacity-100" } }, loading: { true: { icon: "animate-spin" } }, required: { true: { label: "after:content-['*'] after:ms-0.5 after:text-error" } }, disabled: { true: { root: "opacity-75", base: "cursor-not-allowed", label: "cursor-not-allowed", description: "cursor-not-allowed" } } }, defaultVariants: { color: "primary", size: "md" } }, je = Object.assign({ inheritAttrs: false }, { __name: "USwitch", props: L({ as: { type: null, required: false }, color: { type: null, required: false }, size: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, checkedIcon: { type: null, required: false }, uncheckedIcon: { type: null, required: false }, label: { type: String, required: false }, description: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, disabled: { type: Boolean, required: false }, id: { type: String, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false }, value: { type: String, required: false }, defaultValue: { type: Boolean, required: false } }, { modelValue: { type: Boolean, default: void 0 }, modelModifiers: {} }), emits: L(["change"], ["update:modelValue"]), setup(o, { emit: s }) {
  const l = o, h = te(), y = s, u = ae(o, "modelValue", { type: Boolean, default: void 0 }), g = se(), i = le("switch", l), d = oe(re(l, "required", "value", "defaultValue")), { id: m, emitFormChange: _, emitFormInput: r, size: V, color: $, name: q, disabled: S, ariaAttrs: E } = ne(l), a = m.value ?? de(), U = ie(), D = P(() => {
    const { "data-state": B, ...C } = U;
    return C;
  }), x = P(() => {
    var _a;
    return N({ extend: N(Te), ...((_a = g.ui) == null ? void 0 : _a.switch) || {} })({ size: V.value, color: $.value, required: l.required, loading: l.loading, disabled: S.value || l.loading });
  });
  function J(B) {
    const C = new Event("change", { target: { value: B } });
    y("change", C), _(), r();
  }
  return (B, C) => {
    var _a;
    return t(), b(e(A), { as: o.as, "data-slot": "root", class: w(x.value.root({ class: [(_a = e(i)) == null ? void 0 : _a.root, l.class] })) }, { default: n(() => {
      var _a2, _b, _c, _d, _e2;
      return [c("div", { "data-slot": "container", class: w(x.value.container({ class: (_a2 = e(i)) == null ? void 0 : _a2.container })) }, [f(e(ze), K({ id: e(a) }, { ...e(d), ...D.value, ...e(E) }, { modelValue: u.value, "onUpdate:modelValue": [C[0] || (C[0] = (Y) => u.value = Y), J], name: e(q), disabled: e(S) || o.loading, "data-slot": "base", class: x.value.base({ class: (_b = e(i)) == null ? void 0 : _b.base }) }), { default: n(() => {
        var _a3;
        return [f(e(Ee), { "data-slot": "thumb", class: w(x.value.thumb({ class: (_a3 = e(i)) == null ? void 0 : _a3.thumb })) }, { default: n(() => {
          var _a4, _b2, _c2;
          return [o.loading ? (t(), b(T, { key: 0, name: o.loadingIcon || e(g).ui.icons.loading, "data-slot": "icon", class: w(x.value.icon({ class: (_a4 = e(i)) == null ? void 0 : _a4.icon, checked: true, unchecked: true })) }, null, 8, ["name", "class"])) : (t(), p(M, { key: 1 }, [o.checkedIcon ? (t(), b(T, { key: 0, name: o.checkedIcon, "data-slot": "icon", class: w(x.value.icon({ class: (_b2 = e(i)) == null ? void 0 : _b2.icon, checked: true })) }, null, 8, ["name", "class"])) : k("", true), o.uncheckedIcon ? (t(), b(T, { key: 1, name: o.uncheckedIcon, "data-slot": "icon", class: w(x.value.icon({ class: (_c2 = e(i)) == null ? void 0 : _c2.icon, unchecked: true })) }, null, 8, ["name", "class"])) : k("", true)], 64))];
        }), _: 1 }, 8, ["class"])];
      }), _: 1 }, 16, ["id", "modelValue", "name", "disabled", "class"])], 2), o.label || h.label || o.description || h.description ? (t(), p("div", { key: 0, "data-slot": "wrapper", class: w(x.value.wrapper({ class: (_c = e(i)) == null ? void 0 : _c.wrapper })) }, [o.label || h.label ? (t(), b(e(we), { key: 0, for: e(a), "data-slot": "label", class: w(x.value.label({ class: (_d = e(i)) == null ? void 0 : _d.label })) }, { default: n(() => [z(B.$slots, "label", { label: o.label }, () => [R(v(o.label), 1)])]), _: 3 }, 8, ["for", "class"])) : k("", true), o.description || h.description ? (t(), p("p", { key: 1, "data-slot": "description", class: w(x.value.description({ class: (_e2 = e(i)) == null ? void 0 : _e2.description })) }, [z(B.$slots, "description", { description: o.description }, () => [R(v(o.description), 1)])], 2)) : k("", true)], 2)) : k("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }), Ae = { class: "space-y-8" }, Ne = { class: "space-y-3" }, Le = { class: "text-xs font-semibold uppercase tracking-widest text-muted" }, Oe = { class: "text-4xl font-semibold tracking-tight text-highlighted" }, Ke = { key: 0, class: "max-w-3xl text-base leading-7 text-muted" }, De = { class: "space-y-4" }, Je = { key: 0, class: "grid gap-4 md:grid-cols-2" }, Ye = { class: "flex justify-end" }, Ze = { class: "grid gap-6 lg:grid-cols-2" }, He = { key: 0, class: "space-y-3" }, Qe = { class: "flex flex-wrap items-center gap-2" }, Ge = { class: "text-sm font-semibold text-highlighted" }, We = { key: 0, class: "mt-2 text-sm text-muted" }, Xe = { key: 1, class: "text-sm text-muted" }, et = { key: 0, class: "space-y-3" }, tt = { class: "flex flex-wrap items-center gap-2" }, at = { class: "text-sm font-semibold text-highlighted" }, st = { key: 0, class: "mt-2 text-sm text-muted" }, lt = { key: 1, class: "text-sm text-muted" }, ot = { class: "overflow-x-auto text-sm" }, rt = F({ __name: "RpcMethod", props: { method: {} }, setup(o) {
  const s = o, l = I("https://rpc.nimiqwatch.com"), h = ce({}), y = I(false), u = I(null), g = I(null);
  ue(() => {
    for (const d of s.method.input) d.key in h || (h[d.key] = d.type === "boolean" ? false : "");
  });
  async function i() {
    y.value = true, g.value = null, u.value = null;
    try {
      const d = s.method.input.map((_) => {
        const r = h[_.key];
        return _.type.includes("number") ? Number(r) : _.type === "boolean" ? !!r : r;
      }), m = await fe("/api/rpc-proxy", { method: "POST", query: { target: l.value }, body: { jsonrpc: "2.0", method: s.method.name, params: d, id: 1 } });
      u.value = m;
    } catch (d) {
      g.value = d instanceof Error ? d.message : String(d);
    } finally {
      y.value = false;
    }
  }
  return (d, m) => {
    var _a, _b;
    const _ = me, r = qe, V = je, $ = pe, q = Se, S = he, E = Ve;
    return t(), p("div", Ae, [c("section", Ne, [c("span", Le, v(((_b = (_a = s.method.tags) == null ? void 0 : _a[0]) == null ? void 0 : _b.name) || "rpc"), 1), c("h1", Oe, v(s.method.humanReadableName), 1), s.method.description ? (t(), p("p", Ke, v(s.method.description), 1)) : k("", true)]), f(q, { class: "border-0" }, { header: n(() => [...m[1] || (m[1] = [c("div", { class: "flex items-center justify-between gap-3" }, [c("div", null, [c("h2", { class: "text-lg font-semibold text-highlighted" }, " Interactive playground "), c("p", { class: "text-sm text-muted" }, " Try the method against a public RPC endpoint. ")])], -1)])]), default: n(() => [c("div", De, [f(r, { label: "RPC endpoint", name: "server" }, { default: n(() => [f(_, { modelValue: l.value, "onUpdate:modelValue": m[0] || (m[0] = (a) => l.value = a), icon: "i-tabler:server" }, null, 8, ["modelValue"])]), _: 1 }), s.method.input.length ? (t(), p("div", Je, [(t(true), p(M, null, j(s.method.input, (a) => (t(), b(r, { key: a.key, label: a.label || a.key, name: a.key }, { default: n(() => [a.type === "boolean" ? (t(), b(V, { key: 0, modelValue: h[a.key], "onUpdate:modelValue": (U) => h[a.key] = U }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (t(), b(_, { key: 1, modelValue: h[a.key], "onUpdate:modelValue": (U) => h[a.key] = U, placeholder: a.type }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))]), _: 2 }, 1032, ["label", "name"]))), 128))])) : k("", true), c("div", Ye, [f($, { loading: y.value, label: "Call method", "trailing-icon": "i-tabler:player-play", color: "primary", class: "rounded-full", onClick: i }, null, 8, ["loading"])])])]), _: 1 }), c("div", Ze, [f(q, { class: "border-0" }, { header: n(() => [...m[2] || (m[2] = [c("h2", { class: "text-lg font-semibold text-highlighted" }, " Parameters ", -1)])]), default: n(() => [s.method.input.length ? (t(), p("div", He, [(t(true), p(M, null, j(s.method.input, (a) => (t(), p("div", { key: a.key, class: "rounded-2xl border border-default bg-muted p-4" }, [c("div", Qe, [c("code", Ge, v(a.key), 1), f(S, { color: "secondary", variant: "soft" }, { default: n(() => [R(v(a.type), 1)]), _: 2 }, 1024), f(S, { color: a.required ? "success" : "neutral", variant: "soft" }, { default: n(() => [R(v(a.required ? "required" : "optional"), 1)]), _: 2 }, 1032, ["color"])]), a.label ? (t(), p("p", We, v(a.label), 1)) : k("", true)]))), 128))])) : (t(), p("p", Xe, " This method does not accept any parameters. "))]), _: 1 }), f(q, { class: "border-0" }, { header: n(() => [...m[3] || (m[3] = [c("h2", { class: "text-lg font-semibold text-highlighted" }, " Response fields ", -1)])]), default: n(() => [s.method.output.length ? (t(), p("div", et, [(t(true), p(M, null, j(s.method.output, (a) => (t(), p("div", { key: a.key, class: "rounded-2xl border border-default bg-muted p-4" }, [c("div", tt, [c("code", at, v(a.key), 1), f(S, { color: "secondary", variant: "soft" }, { default: n(() => [R(v(a.type), 1)]), _: 2 }, 1024)]), a.label ? (t(), p("p", st, v(a.label), 1)) : k("", true)]))), 128))])) : (t(), p("p", lt, " This method does not return a structured result. "))]), _: 1 })]), g.value ? (t(), b(E, { key: 0, color: "error", variant: "soft", icon: "i-tabler:alert-circle", description: g.value }, null, 8, ["description"])) : k("", true), u.value ? (t(), b(q, { key: 1, class: "border-0" }, { header: n(() => [...m[4] || (m[4] = [c("h2", { class: "text-lg font-semibold text-highlighted" }, " Latest response ", -1)])]), default: n(() => [c("pre", ot, v(JSON.stringify(u.value, null, 2)), 1)]), _: 1 })) : k("", true)]);
  };
} }), nt = Object.assign(rt, { __name: "RpcMethod" }), bt = F({ __name: "[method]", async setup(o) {
  let s, l;
  _e("docs");
  const y = be(), u = P(() => String(y.params.method)), { data: g } = ([s, l] = ye(() => ke("rpc-method-groups-page", () => Be(Re))), s = await s, l(), s), i = P(() => {
    var _a;
    return (_a = g.value) == null ? void 0 : _a.flatMap((d) => d.methods).find((d) => d.method === u.value);
  });
  if (!i.value) throw ge({ statusCode: 404, statusMessage: "RPC method not found", fatal: true });
  return ve({ title: i.value.humanReadableName, description: i.value.description }), (d, m) => {
    const _ = nt, r = Ce, V = $e, $ = xe, q = Ue;
    return t(), b(q, null, { default: n(() => [f($, null, { default: n(() => [f(V, null, { default: n(() => [f(r, null, { default: n(() => [f(_, { method: i.value }, null, 8, ["method"])]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
export {
  bt as default
};
