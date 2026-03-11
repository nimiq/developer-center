import { U as x, B as b, R as $, c as q, S as y, k as a, l as g, w as k, e as n, m as w, aq as S, T as o, n as l, x as d, y as f, a2 as h, A as c, M as C, N as B, Q as P, a4 as z, P as N } from "#entry";
const j = { slots: { root: "relative isolate", container: "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24", wrapper: "", header: "", headline: "mb-4", title: "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted", description: "text-lg sm:text-xl/8 text-muted", body: "mt-10", footer: "mt-10", links: "flex flex-wrap gap-x-6 gap-y-3" }, variants: { orientation: { horizontal: { container: "lg:grid-cols-2 lg:items-center", description: "text-pretty" }, vertical: { container: "", headline: "justify-center", wrapper: "text-center", description: "text-balance", links: "justify-center" } }, reverse: { true: { wrapper: "order-last" } }, headline: { true: { headline: "font-semibold text-primary flex items-center gap-1.5" } }, title: { true: { description: "mt-6" } } } }, A = { key: 2, class: "hidden lg:block" }, V = { __name: "UPageHero", props: { as: { type: null, required: false }, headline: { type: String, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, links: { type: Array, required: false }, orientation: { type: null, required: false, default: "vertical" }, reverse: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const u = t, e = x(), m = b(), s = $("pageHero", u), i = q(() => {
    var _a;
    return y({ extend: y(j), ...((_a = m.ui) == null ? void 0 : _a.pageHero) || {} })({ orientation: u.orientation, reverse: u.reverse, title: !!u.title || !!e.title });
  });
  return (r, H) => {
    var _a;
    return a(), g(l(N), { as: t.as, "data-orientation": t.orientation, "data-slot": "root", class: o(i.value.root({ class: [(_a = l(s)) == null ? void 0 : _a.root, u.class] })) }, { default: k(() => {
      var _a2;
      return [n(r.$slots, "top"), w(S, { "data-slot": "container", class: o(i.value.container({ class: (_a2 = l(s)) == null ? void 0 : _a2.container })) }, { default: k(() => {
        var _a3, _b, _c, _d, _e, _f;
        return [e.header || t.headline || e.headline || t.title || e.title || t.description || e.description || e.body || e.footer || ((_a3 = t.links) == null ? void 0 : _a3.length) || e.links ? (a(), d("div", { key: 0, "data-slot": "wrapper", class: o(i.value.wrapper({ class: (_b = l(s)) == null ? void 0 : _b.wrapper })) }, [e.header || t.headline || e.headline || t.title || e.title || t.description || e.description ? (a(), d("div", { key: 0, "data-slot": "header", class: o(i.value.header({ class: (_c = l(s)) == null ? void 0 : _c.header })) }, [n(r.$slots, "header", {}, () => {
          var _a4, _b2, _c2;
          return [t.headline || e.headline ? (a(), d("div", { key: 0, "data-slot": "headline", class: o(i.value.headline({ class: (_a4 = l(s)) == null ? void 0 : _a4.headline, headline: !e.headline })) }, [n(r.$slots, "headline", {}, () => [f(h(t.headline), 1)])], 2)) : c("", true), t.title || e.title ? (a(), d("h1", { key: 1, "data-slot": "title", class: o(i.value.title({ class: (_b2 = l(s)) == null ? void 0 : _b2.title })) }, [n(r.$slots, "title", {}, () => [f(h(t.title), 1)])], 2)) : c("", true), t.description || e.description ? (a(), d("div", { key: 2, "data-slot": "description", class: o(i.value.description({ class: (_c2 = l(s)) == null ? void 0 : _c2.description })) }, [n(r.$slots, "description", {}, () => [f(h(t.description), 1)])], 2)) : c("", true)];
        })], 2)) : c("", true), e.body ? (a(), d("div", { key: 1, "data-slot": "body", class: o(i.value.body({ class: (_d = l(s)) == null ? void 0 : _d.body })) }, [n(r.$slots, "body")], 2)) : c("", true), e.footer || ((_e = t.links) == null ? void 0 : _e.length) || e.links ? (a(), d("div", { key: 2, "data-slot": "footer", class: o(i.value.footer({ class: (_f = l(s)) == null ? void 0 : _f.footer })) }, [n(r.$slots, "footer", {}, () => {
          var _a4, _b2;
          return [((_a4 = t.links) == null ? void 0 : _a4.length) || e.links ? (a(), d("div", { key: 0, "data-slot": "links", class: o(i.value.links({ class: (_b2 = l(s)) == null ? void 0 : _b2.links })) }, [n(r.$slots, "links", {}, () => [(a(true), d(C, null, B(t.links, (p, v) => (a(), g(P, z({ key: v, size: "xl" }, { ref_for: true }, p), null, 16))), 128))])], 2)) : c("", true)];
        })], 2)) : c("", true)], 2)) : c("", true), e.default ? n(r.$slots, "default", { key: 1 }) : t.orientation === "horizontal" ? (a(), d("div", A)) : c("", true)];
      }), _: 3 }, 8, ["class"]), n(r.$slots, "bottom")];
    }), _: 3 }, 8, ["as", "data-orientation", "class"]);
  };
} };
export {
  V as default
};
