import { U as C, B as z, R as I, c as x, S as v, ao as B, k as a, l as g, w as k, x as o, T as n, n as i, e as d, a5 as j, A as r, z as q, a1 as F, a4 as $, y as m, a2 as h, P, m as A, aq as N, M as S, N as w, Q as T } from "#entry";
const V = { slots: { root: "relative rounded-sm", wrapper: "", leading: "inline-flex items-center justify-center", leadingIcon: "size-5 shrink-0 text-primary", title: "text-base text-pretty font-semibold text-highlighted", description: "text-[15px] text-pretty text-muted" }, variants: { orientation: { horizontal: { root: "flex items-start gap-2.5", leading: "p-0.5" }, vertical: { leading: "mb-2.5" } }, to: { true: { root: ["has-focus-visible:ring-2 has-focus-visible:ring-primary", "transition"] } }, title: { true: { description: "mt-1" } } } }, O = Object.assign({ inheritAttrs: false }, { __name: "UPageFeature", props: { as: { type: null, required: false }, icon: { type: null, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, orientation: { type: null, required: false, default: "horizontal" }, to: { type: null, required: false }, target: { type: [String, Object, null], required: false }, onClick: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const c = e, t = C(), p = z(), s = I("pageFeature", c), l = x(() => {
    var _a;
    return v({ extend: v(V), ...((_a = p.ui) == null ? void 0 : _a.pageFeature) || {} })({ orientation: c.orientation, title: !!c.title || !!t.title, to: !!c.to || !!c.onClick });
  }), u = x(() => (t.title && B(t.title()) || c.title || "Feature link").trim());
  return (f, y) => {
    var _a;
    return a(), g(i(P), { as: e.as, "data-orientation": e.orientation, "data-slot": "root", class: n(l.value.root({ class: [(_a = i(s)) == null ? void 0 : _a.root, c.class] })), onClick: e.onClick }, { default: k(() => {
      var _a2, _b;
      return [e.icon || t.leading ? (a(), o("div", { key: 0, "data-slot": "leading", class: n(l.value.leading({ class: (_a2 = i(s)) == null ? void 0 : _a2.leading })) }, [d(f.$slots, "leading", { ui: l.value }, () => {
        var _a3;
        return [e.icon ? (a(), g(j, { key: 0, name: e.icon, "data-slot": "leadingIcon", class: n(l.value.leadingIcon({ class: (_a3 = i(s)) == null ? void 0 : _a3.leadingIcon })) }, null, 8, ["name", "class"])) : r("", true)];
      })], 2)) : r("", true), q("div", { "data-slot": "wrapper", class: n(l.value.wrapper({ class: (_b = i(s)) == null ? void 0 : _b.wrapper })) }, [e.to ? (a(), g(F, $({ key: 0, "aria-label": u.value }, { to: e.to, target: e.target, ...f.$attrs }, { class: "focus:outline-none peer", raw: "" }), { default: k(() => [...y[0] || (y[0] = [q("span", { class: "absolute inset-0", "aria-hidden": "true" }, null, -1)])]), _: 1 }, 16, ["aria-label"])) : r("", true), d(f.$slots, "default", {}, () => {
        var _a3, _b2;
        return [e.title || t.title ? (a(), o("div", { key: 0, "data-slot": "title", class: n(l.value.title({ class: (_a3 = i(s)) == null ? void 0 : _a3.title })) }, [d(f.$slots, "title", {}, () => [m(h(e.title), 1)])], 2)) : r("", true), e.description || t.description ? (a(), o("div", { key: 1, "data-slot": "description", class: n(l.value.description({ class: (_b2 = i(s)) == null ? void 0 : _b2.description })) }, [d(f.$slots, "description", {}, () => [m(h(e.description), 1)])], 2)) : r("", true)];
      })], 2)];
    }), _: 3 }, 8, ["as", "data-orientation", "class", "onClick"]);
  };
} }), U = { slots: { root: "relative isolate", container: "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16", wrapper: "", header: "", leading: "flex items-center mb-6", leadingIcon: "size-10 shrink-0 text-primary", headline: "mb-3", title: "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted", description: "text-base sm:text-lg text-muted", body: "mt-8", features: "grid", footer: "mt-8", links: "flex flex-wrap gap-x-6 gap-y-3" }, variants: { orientation: { horizontal: { container: "lg:grid-cols-2 lg:items-center", description: "text-pretty", features: "gap-4" }, vertical: { container: "", headline: "justify-center", leading: "justify-center", title: "text-center", description: "text-center text-balance", links: "justify-center", features: "sm:grid-cols-2 lg:grid-cols-3 gap-8" } }, reverse: { true: { wrapper: "order-last" } }, headline: { true: { headline: "font-semibold text-primary flex items-center gap-1.5" } }, title: { true: { description: "mt-6" } }, description: { true: "" }, body: { true: "" } }, compoundVariants: [{ orientation: "vertical", title: true, class: { body: "mt-16" } }, { orientation: "vertical", description: true, class: { body: "mt-16" } }, { orientation: "vertical", body: true, class: { footer: "mt-16" } }] }, L = { key: 2, class: "hidden lg:block" }, E = { __name: "UPageSection", props: { as: { type: null, required: false, default: "section" }, headline: { type: String, required: false }, icon: { type: null, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, links: { type: Array, required: false }, features: { type: Array, required: false }, orientation: { type: null, required: false, default: "vertical" }, reverse: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const c = e, t = C(), p = z(), s = I("pageSection", c), l = x(() => {
    var _a, _b;
    return v({ extend: v(U), ...((_a = p.ui) == null ? void 0 : _a.pageSection) || {} })({ orientation: c.orientation, reverse: c.reverse, title: !!c.title || !!t.title, description: !!c.description || !!t.description, body: !!t.body || !!((_b = c.features) == null ? void 0 : _b.length) || !!t.features });
  });
  return (u, f) => {
    var _a;
    return a(), g(i(P), { as: e.as, "data-orientation": e.orientation, "data-slot": "root", class: n(l.value.root({ class: [(_a = i(s)) == null ? void 0 : _a.root, c.class] })) }, { default: k(() => {
      var _a2;
      return [d(u.$slots, "top"), A(N, { "data-slot": "container", class: n(l.value.container({ class: (_a2 = i(s)) == null ? void 0 : _a2.container })) }, { default: k(() => {
        var _a3, _b, _c, _d, _e, _f, _g, _h;
        return [t.header || e.icon || t.leading || e.headline || t.headline || e.title || t.title || e.description || t.description || t.body || ((_a3 = e.features) == null ? void 0 : _a3.length) || t.features || t.footer || ((_b = e.links) == null ? void 0 : _b.length) || t.links ? (a(), o("div", { key: 0, "data-slot": "wrapper", class: n(l.value.wrapper({ class: (_c = i(s)) == null ? void 0 : _c.wrapper })) }, [t.header || e.icon || t.leading || e.headline || t.headline || e.title || t.title || e.description || t.description ? (a(), o("div", { key: 0, "data-slot": "header", class: n(l.value.header({ class: (_d = i(s)) == null ? void 0 : _d.header })) }, [d(u.$slots, "header", {}, () => {
          var _a4, _b2, _c2, _d2;
          return [e.icon || t.leading ? (a(), o("div", { key: 0, "data-slot": "leading", class: n(l.value.leading({ class: (_a4 = i(s)) == null ? void 0 : _a4.leading })) }, [d(u.$slots, "leading", { ui: l.value }, () => {
            var _a5;
            return [e.icon ? (a(), g(j, { key: 0, name: e.icon, "data-slot": "leadingIcon", class: n(l.value.leadingIcon({ class: (_a5 = i(s)) == null ? void 0 : _a5.leadingIcon })) }, null, 8, ["name", "class"])) : r("", true)];
          })], 2)) : r("", true), e.headline || t.headline ? (a(), o("div", { key: 1, "data-slot": "headline", class: n(l.value.headline({ class: (_b2 = i(s)) == null ? void 0 : _b2.headline, headline: !t.headline })) }, [d(u.$slots, "headline", {}, () => [m(h(e.headline), 1)])], 2)) : r("", true), e.title || t.title ? (a(), o("h2", { key: 2, "data-slot": "title", class: n(l.value.title({ class: (_c2 = i(s)) == null ? void 0 : _c2.title })) }, [d(u.$slots, "title", {}, () => [m(h(e.title), 1)])], 2)) : r("", true), e.description || t.description ? (a(), o("div", { key: 3, "data-slot": "description", class: n(l.value.description({ class: (_d2 = i(s)) == null ? void 0 : _d2.description })) }, [d(u.$slots, "description", {}, () => [m(h(e.description), 1)])], 2)) : r("", true)];
        })], 2)) : r("", true), t.body || ((_e = e.features) == null ? void 0 : _e.length) || t.features ? (a(), o("div", { key: 1, "data-slot": "body", class: n(l.value.body({ class: (_f = i(s)) == null ? void 0 : _f.body })) }, [d(u.$slots, "body", {}, () => {
          var _a4, _b2;
          return [((_a4 = e.features) == null ? void 0 : _a4.length) || t.features ? (a(), o("ul", { key: 0, "data-slot": "features", class: n(l.value.features({ class: (_b2 = i(s)) == null ? void 0 : _b2.features })) }, [d(u.$slots, "features", {}, () => [(a(true), o(S, null, w(e.features, (y, b) => (a(), g(O, $({ key: b, as: "li" }, { ref_for: true }, y), null, 16))), 128))])], 2)) : r("", true)];
        })], 2)) : r("", true), t.footer || ((_g = e.links) == null ? void 0 : _g.length) || t.links ? (a(), o("div", { key: 2, "data-slot": "footer", class: n(l.value.footer({ class: (_h = i(s)) == null ? void 0 : _h.footer })) }, [d(u.$slots, "footer", {}, () => {
          var _a4, _b2;
          return [((_a4 = e.links) == null ? void 0 : _a4.length) || t.links ? (a(), o("div", { key: 0, "data-slot": "links", class: n(l.value.links({ class: (_b2 = i(s)) == null ? void 0 : _b2.links })) }, [d(u.$slots, "links", {}, () => [(a(true), o(S, null, w(e.links, (y, b) => (a(), g(T, $({ key: b, size: "lg" }, { ref_for: true }, y), null, 16))), 128))])], 2)) : r("", true)];
        })], 2)) : r("", true)], 2)) : r("", true), t.default ? d(u.$slots, "default", { key: 1 }) : e.orientation === "horizontal" ? (a(), o("div", L)) : r("", true)];
      }), _: 3 }, 8, ["class"]), d(u.$slots, "bottom")];
    }), _: 3 }, 8, ["as", "data-orientation", "class"]);
  };
} };
export {
  E as default
};
