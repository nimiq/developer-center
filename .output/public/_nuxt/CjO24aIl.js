import { _ as G } from "./CUG6gCyP.js";
import { L as J, _ as Y, a as W } from "./PUsQPs97.js";
import { f as T, br as Z, G as ee, b9 as K, c as I, l as t, m as y, w as n, e as N, p as e, B as _, N as H, Y as te, X as ae, P as j, bt as se, F as le, ad as oe, C as re, H as ne, bM as de, aQ as ie, I as ce, ar as ue, bN as me, L as E, A as i, O as w, n as b, Q as A, y as m, $ as F, z as P, ab as v, af as O, r as z, aX as D, bF as pe, a0 as L, a2 as he, ac as fe, bO as be, T as ye, a6 as ge, a7 as ve, b4 as _e, bP as ke, a8 as xe, ax as we } from "#entry";
import { u as qe, V as Ve } from "./Ck59o4im.js";
import { _ as Ce } from "./wdqbK2D9.js";
import { _ as Se } from "./Bi8lsjPs.js";
import { _ as $e } from "./CLaRGQ_S.js";
import { _ as Ue } from "./BsOuZGy1.js";
import { l as Be, o as Re } from "./CSzJBqtn.js";
import "./DaWZu8wl.js";
const [Pe, Ie] = se("SwitchRoot");
var Me = T({ __name: "SwitchRoot", props: { defaultValue: { type: Boolean, required: false }, modelValue: { type: [Boolean, null], required: false, default: void 0 }, disabled: { type: Boolean, required: false }, id: { type: String, required: false }, value: { type: String, required: false, default: "on" }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "button" }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: ["update:modelValue"], setup(r, { emit: l }) {
  const o = r, h = l, { disabled: f } = Z(o), p = ee(o, "modelValue", h, { defaultValue: o.defaultValue, passive: o.modelValue === void 0 });
  function g() {
    f.value || (p.value = !p.value);
  }
  const { forwardRef: d, currentElement: k } = K(), u = qe(k), c = I(() => {
    var _a;
    return o.id && k.value ? (_a = document.querySelector(`[for="${o.id}"]`)) == null ? void 0 : _a.innerText : void 0;
  });
  return Ie({ modelValue: p, toggleCheck: g, disabled: f }), (s, q) => (t(), y(e(j), H(s.$attrs, { id: s.id, ref: e(d), role: "switch", type: s.as === "button" ? "button" : void 0, value: s.value, "aria-label": s.$attrs["aria-label"] || c.value, "aria-checked": e(p), "aria-required": s.required, "data-state": e(p) ? "checked" : "unchecked", "data-disabled": e(f) ? "" : void 0, "as-child": s.asChild, as: s.as, disabled: e(f), onClick: g, onKeydown: te(ae(g, ["prevent"]), ["enter"]) }), { default: n(() => [N(s.$slots, "default", { modelValue: e(p) }), e(u) && s.name ? (t(), y(e(Ve), { key: 0, type: "checkbox", name: s.name, disabled: e(f), required: s.required, value: s.value, checked: !!e(p) }, null, 8, ["name", "disabled", "required", "value", "checked"])) : _("v-if", true)]), _: 3 }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]));
} }), ze = Me, Fe = T({ __name: "SwitchThumb", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "span" } }, setup(r) {
  const l = Pe();
  return K(), (o, h) => {
    var _a;
    return t(), y(e(j), { "data-state": ((_a = e(l).modelValue) == null ? void 0 : _a.value) ? "checked" : "unchecked", "data-disabled": e(l).disabled.value ? "" : void 0, "as-child": o.asChild, as: o.as }, { default: n(() => [N(o.$slots, "default")]), _: 3 }, 8, ["data-state", "data-disabled", "as-child", "as"]);
  };
} }), Ne = Fe;
const Te = { slots: { root: "relative flex items-start", base: ["inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-accented", "transition-[background] duration-200"], container: "flex items-center", thumb: "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center", icon: ["absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12", "transition-[color,opacity] duration-200"], wrapper: "ms-2", label: "block font-medium text-default", description: "text-muted" }, variants: { color: { primary: { base: "data-[state=checked]:bg-primary focus-visible:outline-primary", icon: "group-data-[state=checked]:text-primary" }, secondary: { base: "data-[state=checked]:bg-secondary focus-visible:outline-secondary", icon: "group-data-[state=checked]:text-secondary" }, success: { base: "data-[state=checked]:bg-success focus-visible:outline-success", icon: "group-data-[state=checked]:text-success" }, info: { base: "data-[state=checked]:bg-info focus-visible:outline-info", icon: "group-data-[state=checked]:text-info" }, warning: { base: "data-[state=checked]:bg-warning focus-visible:outline-warning", icon: "group-data-[state=checked]:text-warning" }, error: { base: "data-[state=checked]:bg-error focus-visible:outline-error", icon: "group-data-[state=checked]:text-error" }, neutral: { base: "data-[state=checked]:bg-inverted focus-visible:outline-inverted", icon: "group-data-[state=checked]:text-highlighted" } }, size: { xs: { base: "w-7", container: "h-4", thumb: "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3", wrapper: "text-xs" }, sm: { base: "w-8", container: "h-4", thumb: "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5", wrapper: "text-xs" }, md: { base: "w-9", container: "h-5", thumb: "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4", wrapper: "text-sm" }, lg: { base: "w-10", container: "h-5", thumb: "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5", wrapper: "text-sm" }, xl: { base: "w-11", container: "h-6", thumb: "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5", wrapper: "text-base" } }, checked: { true: { icon: "group-data-[state=checked]:opacity-100" } }, unchecked: { true: { icon: "group-data-[state=unchecked]:opacity-100" } }, loading: { true: { icon: "animate-spin" } }, required: { true: { label: "after:content-['*'] after:ms-0.5 after:text-error" } }, disabled: { true: { root: "opacity-75", base: "cursor-not-allowed", label: "cursor-not-allowed", description: "cursor-not-allowed" } } }, defaultVariants: { color: "primary", size: "md" } }, Ae = Object.assign({ inheritAttrs: false }, { __name: "USwitch", props: O({ as: { type: null, required: false }, color: { type: null, required: false }, size: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, checkedIcon: { type: null, required: false }, uncheckedIcon: { type: null, required: false }, label: { type: String, required: false }, description: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, disabled: { type: Boolean, required: false }, id: { type: String, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false }, value: { type: String, required: false }, defaultValue: { type: Boolean, required: false } }, { modelValue: { type: Boolean, default: void 0 }, modelModifiers: {} }), emits: O(["change"], ["update:modelValue"]), setup(r, { emit: l }) {
  const o = r, h = le(), f = l, p = oe(r, "modelValue", { type: Boolean, default: void 0 }), g = re(), d = ne("switch", o), k = de(ie(o, "required", "value", "defaultValue")), { id: u, emitFormChange: c, emitFormInput: s, size: q, color: S, name: $, disabled: V, ariaAttrs: U } = ce(o), M = u.value ?? ue(), a = me(), B = I(() => {
    const { "data-state": R, ...C } = a;
    return C;
  }), x = I(() => {
    var _a;
    return E({ extend: E(Te), ...((_a = g.ui) == null ? void 0 : _a.switch) || {} })({ size: q.value, color: S.value, required: o.required, loading: o.loading, disabled: V.value || o.loading });
  });
  function Q(R) {
    const C = new Event("change", { target: { value: R } });
    f("change", C), c(), s();
  }
  return (R, C) => {
    var _a;
    return t(), y(e(j), { as: r.as, "data-slot": "root", class: w(x.value.root({ class: [(_a = e(d)) == null ? void 0 : _a.root, o.class] })) }, { default: n(() => {
      var _a2, _b, _c, _d, _e2;
      return [i("div", { "data-slot": "container", class: w(x.value.container({ class: (_a2 = e(d)) == null ? void 0 : _a2.container })) }, [b(e(ze), H({ id: e(M) }, { ...e(k), ...B.value, ...e(U) }, { modelValue: p.value, "onUpdate:modelValue": [C[0] || (C[0] = (X) => p.value = X), Q], name: e($), disabled: e(V) || r.loading, "data-slot": "base", class: x.value.base({ class: (_b = e(d)) == null ? void 0 : _b.base }) }), { default: n(() => {
        var _a3;
        return [b(e(Ne), { "data-slot": "thumb", class: w(x.value.thumb({ class: (_a3 = e(d)) == null ? void 0 : _a3.thumb })) }, { default: n(() => {
          var _a4, _b2, _c2;
          return [r.loading ? (t(), y(A, { key: 0, name: r.loadingIcon || e(g).ui.icons.loading, "data-slot": "icon", class: w(x.value.icon({ class: (_a4 = e(d)) == null ? void 0 : _a4.icon, checked: true, unchecked: true })) }, null, 8, ["name", "class"])) : (t(), m(F, { key: 1 }, [r.checkedIcon ? (t(), y(A, { key: 0, name: r.checkedIcon, "data-slot": "icon", class: w(x.value.icon({ class: (_b2 = e(d)) == null ? void 0 : _b2.icon, checked: true })) }, null, 8, ["name", "class"])) : _("", true), r.uncheckedIcon ? (t(), y(A, { key: 1, name: r.uncheckedIcon, "data-slot": "icon", class: w(x.value.icon({ class: (_c2 = e(d)) == null ? void 0 : _c2.icon, unchecked: true })) }, null, 8, ["name", "class"])) : _("", true)], 64))];
        }), _: 1 }, 8, ["class"])];
      }), _: 1 }, 16, ["id", "modelValue", "name", "disabled", "class"])], 2), r.label || h.label || r.description || h.description ? (t(), m("div", { key: 0, "data-slot": "wrapper", class: w(x.value.wrapper({ class: (_c = e(d)) == null ? void 0 : _c.wrapper })) }, [r.label || h.label ? (t(), y(e(J), { key: 0, for: e(M), "data-slot": "label", class: w(x.value.label({ class: (_d = e(d)) == null ? void 0 : _d.label })) }, { default: n(() => [N(R.$slots, "label", { label: r.label }, () => [P(v(r.label), 1)])]), _: 3 }, 8, ["for", "class"])) : _("", true), r.description || h.description ? (t(), m("p", { key: 1, "data-slot": "description", class: w(x.value.description({ class: (_e2 = e(d)) == null ? void 0 : _e2.description })) }, [N(R.$slots, "description", { description: r.description }, () => [P(v(r.description), 1)])], 2)) : _("", true)], 2)) : _("", true)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }), Le = { class: "space-y-8" }, je = { class: "space-y-3" }, Ee = { class: "text-xs font-semibold uppercase tracking-widest text-muted" }, Oe = { class: "text-4xl font-semibold tracking-tight text-highlighted" }, De = { key: 0, class: "max-w-3xl text-base leading-7 text-muted" }, Ke = { class: "space-y-4" }, He = { key: 0, class: "grid gap-4 md:grid-cols-2" }, Qe = { class: "flex justify-end" }, Xe = { class: "grid gap-6 lg:grid-cols-2" }, Ge = { key: 0, class: "space-y-3" }, Je = { class: "flex flex-wrap items-center gap-2" }, Ye = { class: "text-sm font-semibold text-highlighted" }, We = { key: 0, class: "mt-2 text-sm text-muted" }, Ze = { key: 1, class: "text-sm text-muted" }, et = { key: 0, class: "space-y-3" }, tt = { class: "flex flex-wrap items-center gap-2" }, at = { class: "text-sm font-semibold text-highlighted" }, st = { key: 0, class: "mt-2 text-sm text-muted" }, lt = { key: 1, class: "text-sm text-muted" }, ot = { class: "overflow-x-auto text-sm" }, rt = T({ __name: "RpcMethod", props: { method: {} }, setup(r) {
  const l = r, o = z("https://rpc.nimiqwatch.com"), h = D({}), f = D({}), p = z(false), g = z(null), d = z(null);
  pe(() => {
    for (const u of l.method.input) u.type === "boolean" ? u.key in f || (f[u.key] = false) : u.key in h || (h[u.key] = "");
  });
  async function k() {
    p.value = true, d.value = null, g.value = null;
    try {
      const u = l.method.input.map((s) => s.type.includes("number") ? Number(h[s.key]) : s.type === "boolean" ? f[s.key] : h[s.key]), c = await be("/api/rpc-proxy", { method: "POST", query: { target: o.value }, body: { jsonrpc: "2.0", method: l.method.name, params: u, id: 1 } });
      g.value = c;
    } catch (u) {
      d.value = u instanceof Error ? u.message : String(u);
    } finally {
      p.value = false;
    }
  }
  return (u, c) => {
    var _a, _b;
    const s = G, q = Y, S = Ae, $ = he, V = Ce, U = fe, M = W;
    return t(), m("div", Le, [i("section", je, [i("span", Ee, v(((_b = (_a = l.method.tags) == null ? void 0 : _a[0]) == null ? void 0 : _b.name) || "rpc"), 1), i("h1", Oe, v(l.method.humanReadableName), 1), l.method.description ? (t(), m("p", De, v(l.method.description), 1)) : _("", true)]), b(V, { class: "border-0" }, { header: n(() => [...c[1] || (c[1] = [i("div", { class: "flex items-center justify-between gap-3" }, [i("div", null, [i("h2", { class: "text-lg font-semibold text-highlighted" }, " Interactive playground "), i("p", { class: "text-sm text-muted" }, " Try the method against a public RPC endpoint. ")])], -1)])]), default: n(() => [i("div", Ke, [b(q, { label: "RPC endpoint", name: "server" }, { default: n(() => [b(s, { modelValue: o.value, "onUpdate:modelValue": c[0] || (c[0] = (a) => o.value = a), icon: "i-tabler:server" }, null, 8, ["modelValue"])]), _: 1 }), l.method.input.length ? (t(), m("div", He, [(t(true), m(F, null, L(l.method.input, (a) => (t(), y(q, { key: a.key, label: a.label || a.key, name: a.key }, { default: n(() => [a.type === "boolean" ? (t(), y(S, { key: 0, modelValue: f[a.key], "onUpdate:modelValue": (B) => f[a.key] = B }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (t(), y(s, { key: 1, modelValue: h[a.key], "onUpdate:modelValue": (B) => h[a.key] = B, placeholder: a.type }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]))]), _: 2 }, 1032, ["label", "name"]))), 128))])) : _("", true), i("div", Qe, [b($, { loading: p.value, label: "Call method", "trailing-icon": "i-tabler:player-play", color: "primary", class: "rounded-full", onClick: k }, null, 8, ["loading"])])])]), _: 1 }), i("div", Xe, [b(V, { class: "border-0" }, { header: n(() => [...c[2] || (c[2] = [i("h2", { class: "text-lg font-semibold text-highlighted" }, " Parameters ", -1)])]), default: n(() => [l.method.input.length ? (t(), m("div", Ge, [(t(true), m(F, null, L(l.method.input, (a) => (t(), m("div", { key: a.key, class: "rounded-2xl border border-default bg-muted p-4" }, [i("div", Je, [i("code", Ye, v(a.key), 1), b(U, { color: "secondary", variant: "soft" }, { default: n(() => [P(v(a.type), 1)]), _: 2 }, 1024), b(U, { color: a.required ? "success" : "neutral", variant: "soft" }, { default: n(() => [P(v(a.required ? "required" : "optional"), 1)]), _: 2 }, 1032, ["color"])]), a.label ? (t(), m("p", We, v(a.label), 1)) : _("", true)]))), 128))])) : (t(), m("p", Ze, " This method does not accept any parameters. "))]), _: 1 }), b(V, { class: "border-0" }, { header: n(() => [...c[3] || (c[3] = [i("h2", { class: "text-lg font-semibold text-highlighted" }, " Response fields ", -1)])]), default: n(() => [l.method.output.length ? (t(), m("div", et, [(t(true), m(F, null, L(l.method.output, (a) => (t(), m("div", { key: a.key, class: "rounded-2xl border border-default bg-muted p-4" }, [i("div", tt, [i("code", at, v(a.key), 1), b(U, { color: "secondary", variant: "soft" }, { default: n(() => [P(v(a.type), 1)]), _: 2 }, 1024)]), a.label ? (t(), m("p", st, v(a.label), 1)) : _("", true)]))), 128))])) : (t(), m("p", lt, " This method does not return a structured result. "))]), _: 1 })]), d.value ? (t(), y(M, { key: 0, color: "error", variant: "soft", icon: "i-tabler:alert-circle", description: d.value }, null, 8, ["description"])) : _("", true), g.value ? (t(), y(V, { key: 1, class: "border-0" }, { header: n(() => [...c[4] || (c[4] = [i("h2", { class: "text-lg font-semibold text-highlighted" }, " Latest response ", -1)])]), default: n(() => [i("pre", ot, v(JSON.stringify(g.value, null, 2)), 1)]), _: 1 })) : _("", true)]);
  };
} }), nt = Object.assign(rt, { __name: "RpcMethod" }), gt = T({ __name: "[method]", async setup(r) {
  let l, o;
  ke("docs");
  const f = ye(), p = I(() => String(f.params.method)), { data: g } = ([l, o] = ge(() => xe("rpc-method-groups-page", () => Be(Re))), l = await l, o(), l), d = I(() => {
    var _a;
    return (_a = g.value) == null ? void 0 : _a.flatMap((k) => k.methods).find((k) => k.method === p.value);
  });
  if (!d.value) throw ve({ statusCode: 404, statusMessage: "RPC method not found", fatal: true });
  return _e({ title: d.value.humanReadableName, description: d.value.description }), (k, u) => {
    const c = nt, s = Se, q = $e, S = we, $ = Ue;
    return t(), y($, null, { default: n(() => [b(S, null, { default: n(() => [b(q, null, { default: n(() => [b(s, null, { default: n(() => [b(c, { method: d.value }, null, 8, ["method"])]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 });
  };
} });
export {
  gt as default
};
