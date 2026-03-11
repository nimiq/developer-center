import { B, R as D, ad as h, r as S, c as d, b as j, x as b, m as a, w as t, l as u, a4 as w, n as e, ab as I, ae as z, af as f, ag as $, T as k, A as C, ah as N, ai as O, M as P, S as x, aj as U, C as A, ak as L, k as s } from "#entry";
import { _ as V } from "./DXmP2X1J.js";
const E = { slots: { base: "rounded-md w-full", overlay: "fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity", content: "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none", zoomedImage: "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md" }, variants: { zoom: { true: "will-change-transform" }, open: { true: "" } }, compoundVariants: [{ zoom: true, open: false, class: "cursor-zoom-in" }] }, M = ["onClick"], G = Object.assign({ inheritAttrs: false }, { __name: "ProseImg", props: { src: { type: String, required: true }, alt: { type: String, required: true }, width: { type: [String, Number], required: false }, height: { type: [String, Number], required: false }, class: { type: null, required: false }, zoom: { type: Boolean, required: false, default: true }, ui: { type: Object, required: false } }, setup(o) {
  const n = o, R = B(), i = D("prose.img", n), [_, p] = h(), [q, T] = h(), l = S(false), r = d(() => {
    var _a, _b;
    return x({ extend: x(E), ...((_b = (_a = R.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.img) || {} })({ zoom: n.zoom, open: l.value });
  }), c = d(() => U(n.src, A().app.baseURL)), g = d(() => `${c.value}::${L()}`);
  return n.zoom && j(window, "scroll", () => {
    l.value = false;
  }), (y, v) => (s(), b(P, null, [a(e(_), null, { default: t(() => {
    var _a;
    return [(s(), u(I(e(z)), w({ src: c.value, alt: o.alt, width: o.width, height: o.height }, y.$attrs, { class: r.value.base({ class: [(_a = e(i)) == null ? void 0 : _a.base, n.class] }) }), null, 16, ["src", "alt", "width", "height", "class"]))];
  }), _: 1 }), a(e(q), null, { default: t(() => {
    var _a;
    return [(s(), u(I(e(z)), w({ src: c.value, alt: o.alt }, y.$attrs, { class: r.value.zoomedImage({ class: [(_a = e(i)) == null ? void 0 : _a.zoomedImage] }) }), null, 16, ["src", "alt", "class"]))];
  }), _: 1 }), o.zoom ? (s(), u(e(O), { key: 0, open: l.value, "onUpdate:open": v[0] || (v[0] = (m) => l.value = m), modal: false }, { default: t(({ close: m }) => [a(e($), { "as-child": "" }, { default: t(() => [a(e(f), { "layout-id": g.value, "as-child": "", transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" } }, { default: t(() => [a(e(p))]), _: 1 }, 8, ["layout-id"])]), _: 1 }), a(e(N), null, { default: t(() => [a(e(V), null, { default: t(() => {
    var _a, _b;
    return [l.value ? (s(), u(e(f), { key: 0, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, class: k(r.value.overlay({ class: [(_a = e(i)) == null ? void 0 : _a.overlay] })) }, null, 8, ["class"])) : C("", true), l.value ? (s(), b("div", { key: 1, class: k(r.value.content({ class: [(_b = e(i)) == null ? void 0 : _b.content] })), onClick: m }, [a(e(f), { "as-child": "", "layout-id": g.value, transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" } }, { default: t(() => [a(e(T))]), _: 1 }, 8, ["layout-id"])], 10, M)) : C("", true)];
  }), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 1 }, 8, ["open"])) : (s(), u(e(p), { key: 1 }))], 64));
} });
export {
  G as default
};
