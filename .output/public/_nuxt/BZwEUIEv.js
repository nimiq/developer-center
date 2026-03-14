import { C as B, H as T, ak as h, r as $, c as d, b as N, y as b, n as a, w as t, m as u, N as w, p as e, ai as I, al as z, am as f, an as O, O as C, B as k, ao as S, ap as j, $ as L, L as q, aq as P, D as U, ar as V, l as s } from "#entry";
import { _ as A } from "./xHcSL3N1.js";
const E = { slots: { base: "rounded-md w-full", overlay: "fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity", content: "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none", zoomedImage: "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md" }, variants: { zoom: { true: "will-change-transform" }, open: { true: "" } }, compoundVariants: [{ zoom: true, open: false, class: "cursor-zoom-in" }] }, Z = ["onClick"], M = Object.assign({ inheritAttrs: false }, { __name: "ProseImg", props: { src: { type: String, required: true }, alt: { type: String, required: true }, width: { type: [String, Number], required: false }, height: { type: [String, Number], required: false }, class: { type: null, required: false }, zoom: { type: Boolean, required: false, default: true }, ui: { type: Object, required: false } }, setup(o) {
  const n = o, x = B(), r = T("prose.img", n), [_, p] = h(), [D, R] = h(), l = $(false), i = d(() => {
    var _a, _b;
    return q({ extend: q(E), ...((_b = (_a = x.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.img) || {} })({ zoom: n.zoom, open: l.value });
  }), c = d(() => P(n.src, U().app.baseURL)), g = d(() => `${c.value}::${V()}`);
  return n.zoom && N(window, "scroll", () => {
    l.value = false;
  }), (y, v) => (s(), b(L, null, [a(e(_), null, { default: t(() => {
    var _a;
    return [(s(), u(I(e(z)), w({ src: c.value, alt: o.alt, width: o.width, height: o.height }, y.$attrs, { class: i.value.base({ class: [(_a = e(r)) == null ? void 0 : _a.base, n.class] }) }), null, 16, ["src", "alt", "width", "height", "class"]))];
  }), _: 1 }), a(e(D), null, { default: t(() => {
    var _a;
    return [(s(), u(I(e(z)), w({ src: c.value, alt: o.alt }, y.$attrs, { class: i.value.zoomedImage({ class: [(_a = e(r)) == null ? void 0 : _a.zoomedImage] }) }), null, 16, ["src", "alt", "class"]))];
  }), _: 1 }), o.zoom ? (s(), u(e(j), { key: 0, open: l.value, "onUpdate:open": v[0] || (v[0] = (m) => l.value = m), modal: false }, { default: t(({ close: m }) => [a(e(O), { "as-child": "" }, { default: t(() => [a(e(f), { "layout-id": g.value, "as-child": "", transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" } }, { default: t(() => [a(e(p))]), _: 1 }, 8, ["layout-id"])]), _: 1 }), a(e(S), null, { default: t(() => [a(e(A), null, { default: t(() => {
    var _a, _b;
    return [l.value ? (s(), u(e(f), { key: 0, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, class: C(i.value.overlay({ class: [(_a = e(r)) == null ? void 0 : _a.overlay] })) }, null, 8, ["class"])) : k("", true), l.value ? (s(), b("div", { key: 1, class: C(i.value.content({ class: [(_b = e(r)) == null ? void 0 : _b.content] })), onClick: m }, [a(e(f), { "as-child": "", "layout-id": g.value, transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" } }, { default: t(() => [a(e(R))]), _: 1 }, 8, ["layout-id"])], 10, Z)) : k("", true)];
  }), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 1 }, 8, ["open"])) : (s(), u(e(p), { key: 1 }))], 64));
} });
export {
  M as default
};
