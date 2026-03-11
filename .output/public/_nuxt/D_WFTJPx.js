import { f as K, E as k, B as U, F as z, G as N, r as p, c as s, k as o, l as m, w as d, n as e, H as O, z as i, I as x, m as w, J as S, K as $, L as D, x as E, M as j, N as L, O as M, Q as G, A as H } from "#entry";
import { _ as J } from "./DXmP2X1J.js";
import { d as Q } from "./B_ViZct3.js";
const T = { class: "pointer-events-auto w-full max-w-96" }, q = { class: "flex items-center gap-2" }, P = { class: "hidden sm:flex group-focus-within:hidden items-center gap-1" }, W = K({ __name: "AssistantFloatingInput", setup(X) {
  const y = k(), f = U(), { open: b, isOpen: I } = z(), { t: R } = N(), t = p(""), u = p(true), l = p(null), _ = s(() => y.meta.layout === "docs"), h = s(() => {
    var _a;
    return ((_a = f.assistant) == null ? void 0 : _a.floatingInput) !== false;
  }), v = s(() => {
    var _a, _b;
    return ((_b = (_a = f.assistant) == null ? void 0 : _a.shortcuts) == null ? void 0 : _b.focusInput) || "meta_i";
  }), V = s(() => R("assistant.placeholder")), A = s(() => v.value.split("_").map((n) => n === "meta" ? "meta" : n.toUpperCase()));
  function g() {
    if (!t.value.trim()) return;
    const r = t.value;
    u.value = false, setTimeout(() => {
      b(r, true), t.value = "", u.value = true;
    }, 200);
  }
  const B = s(() => ({ [v.value]: { usingInput: true, handler: () => {
    var _a, _b;
    !_.value || !h.value || ((_b = (_a = l.value) == null ? void 0 : _a.inputRef) == null ? void 0 : _b.focus());
  } }, escape: { usingInput: true, handler: () => {
    var _a, _b;
    (_b = (_a = l.value) == null ? void 0 : _a.inputRef) == null ? void 0 : _b.blur();
  } } }));
  return Q(B), (r, c) => {
    const n = M, C = G, F = S;
    return o(), m(e(J), null, { default: d(() => [e(h) && e(_) && e(u) && !e(I) ? (o(), m(e(O).div, { key: "floating-input", initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 100, opacity: 0 }, transition: { duration: 0.2, ease: "easeOut" }, class: "pointer-events-none fixed inset-x-0 z-10 bottom-[max(1.5rem,env(safe-area-inset-bottom))] px-4 sm:px-80", style: { "will-change": "transform" } }, { default: d(() => [i("form", { class: "pointer-events-none flex w-full justify-center", onSubmit: x(g, ["prevent"]) }, [i("div", T, [w(F, { ref_key: "inputRef", ref: l, modelValue: e(t), "onUpdate:modelValue": c[0] || (c[0] = (a) => D(t) ? t.value = a : null), placeholder: e(V), size: "lg", maxlength: "1000", ui: { root: "group w-full! min-w-0 sm:max-w-96 transition-all duration-300 ease-out [@media(hover:hover)]:hover:scale-105 [@media(hover:hover)]:focus-within:scale-105", base: "bg-default shadow-lg rounded-xl text-base", trailing: "pe-2" }, onKeydown: $(x(g, ["exact", "prevent"]), ["enter"]) }, { trailing: d(() => [i("div", q, [i("div", P, [(o(true), E(j, null, L(e(A), (a) => (o(), m(n, { key: a, value: a }, null, 8, ["value"]))), 128))]), w(C, { type: "submit", icon: "i-lucide-arrow-up", color: "primary", size: "xs", disabled: !e(t).trim() }, null, 8, ["disabled"])])]), _: 1 }, 8, ["modelValue", "placeholder", "onKeydown"])])], 32)]), _: 1 })) : H("", true)]), _: 1 });
  };
} }), te = Object.assign(W, { __name: "AssistantFloatingInput" });
export {
  te as default
};
