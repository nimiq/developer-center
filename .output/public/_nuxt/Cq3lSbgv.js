import { f as F, T as K, C as $, U as k, V as S, r as p, c as s, l as o, m, w as d, p as e, W as z, A as i, X as x, n as y, Y as D, Z as N, y as O, $ as j, a0 as E, a1 as T, a2 as L, B as M } from "#entry";
import { _ as W } from "./CUG6gCyP.js";
import { _ as X } from "./xHcSL3N1.js";
import { d as Y } from "./B_ViZct3.js";
const Z = { class: "pointer-events-auto w-full max-w-96" }, q = { class: "flex items-center gap-2" }, G = { class: "hidden sm:flex group-focus-within:hidden items-center gap-1" }, H = F({ __name: "AssistantFloatingInput", setup(J) {
  const w = K(), f = $(), { open: b, isOpen: I } = k(), { t: V } = S(), t = p(""), u = p(true), l = p(null), _ = s(() => w.meta.layout === "docs"), h = s(() => {
    var _a;
    return ((_a = f.assistant) == null ? void 0 : _a.floatingInput) !== false;
  }), v = s(() => {
    var _a, _b;
    return ((_b = (_a = f.assistant) == null ? void 0 : _a.shortcuts) == null ? void 0 : _b.focusInput) || "meta_i";
  }), C = s(() => V("assistant.placeholder")), R = s(() => v.value.split("_").map((n) => n === "meta" ? "meta" : n.toUpperCase()));
  function g() {
    if (!t.value.trim()) return;
    const r = t.value;
    u.value = false, setTimeout(() => {
      b(r, true), t.value = "", u.value = true;
    }, 200);
  }
  const A = s(() => ({ [v.value]: { usingInput: true, handler: () => {
    var _a, _b;
    !_.value || !h.value || ((_b = (_a = l.value) == null ? void 0 : _a.inputRef) == null ? void 0 : _b.focus());
  } }, escape: { usingInput: true, handler: () => {
    var _a, _b;
    (_b = (_a = l.value) == null ? void 0 : _a.inputRef) == null ? void 0 : _b.blur();
  } } }));
  return Y(A), (r, c) => {
    const n = T, B = L, U = W;
    return o(), m(e(X), null, { default: d(() => [e(h) && e(_) && e(u) && !e(I) ? (o(), m(e(z).div, { key: "floating-input", initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 100, opacity: 0 }, transition: { duration: 0.2, ease: "easeOut" }, class: "pointer-events-none fixed inset-x-0 z-10 bottom-[max(1.5rem,env(safe-area-inset-bottom))] px-4 sm:px-80", style: { "will-change": "transform" } }, { default: d(() => [i("form", { class: "pointer-events-none flex w-full justify-center", onSubmit: x(g, ["prevent"]) }, [i("div", Z, [y(U, { ref_key: "inputRef", ref: l, modelValue: e(t), "onUpdate:modelValue": c[0] || (c[0] = (a) => N(t) ? t.value = a : null), placeholder: e(C), size: "lg", maxlength: "1000", ui: { root: "group w-full! min-w-0 sm:max-w-96 transition-all duration-300 ease-out [@media(hover:hover)]:hover:scale-105 [@media(hover:hover)]:focus-within:scale-105", base: "bg-default shadow-lg rounded-xl text-base", trailing: "pe-2" }, onKeydown: D(x(g, ["exact", "prevent"]), ["enter"]) }, { trailing: d(() => [i("div", q, [i("div", G, [(o(true), O(j, null, E(e(R), (a) => (o(), m(n, { key: a, value: a }, null, 8, ["value"]))), 128))]), y(B, { type: "submit", icon: "i-lucide-arrow-up", color: "primary", size: "xs", disabled: !e(t).trim() }, null, 8, ["disabled"])])]), _: 1 }, 8, ["modelValue", "placeholder", "onKeydown"])])], 32)]), _: 1 })) : M("", true)]), _: 1 });
  };
} }), se = Object.assign(H, { __name: "AssistantFloatingInput" });
export {
  se as default
};
