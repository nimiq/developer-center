import { T as w, a as T, b as B, c as I, d as M } from "./CThuPAwS.js";
import { U as L, a6 as q, B as z, R as U, c as y, r as G, o as N, a9 as $, aa as h, W as D, l as d, w as f, m, n as a, T as n, x, N as S, M as V, a8 as P, S as _, k as i, z as R, a2 as j, ab as A } from "#entry";
import E from "./B3lh_D4v.js";
import "./BKAnssJs.js";
const F = { slots: { root: "relative group *:not-first:!my-0 *:not-first:!static my-5", list: "relative flex items-center gap-1 border border-muted bg-default border-b-0 rounded-t-md overflow-x-auto p-2", indicator: "absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-elevated rounded-md shadow-xs", trigger: ["relative inline-flex items-center gap-1.5 text-default data-[state=active]:text-highlighted hover:bg-elevated/50 px-2 py-1.5 text-sm rounded-md disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none", "transition-colors"], triggerIcon: "size-4 shrink-0", triggerLabel: "truncate" } }, J = { __name: "ProseCodeGroup", props: P({ defaultValue: { type: String, required: false, default: "0" }, sync: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, { modelValue: { type: String }, modelModifiers: {} }), emits: ["update:modelValue"], setup(p) {
  const c = p, k = L(), s = q(p, "modelValue"), C = z(), r = U("prose.codeGroup", c), o = y(() => {
    var _a, _b;
    return _({ extend: _(F), ...((_b = (_a = C.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeGroup) || {} })();
  }), g = G(1), v = y(() => {
    var _a, _b;
    return g.value, ((_b = (_a = k.default) == null ? void 0 : _a.call(k)) == null ? void 0 : _b.flatMap(b).filter(Boolean)) || [];
  });
  function b(e, t) {
    var _a, _b, _c, _d;
    return typeof e.type == "symbol" ? (_a = e.children) == null ? void 0 : _a.map(b) : { label: ((_b = e.props) == null ? void 0 : _b.filename) || ((_c = e.props) == null ? void 0 : _c.label) || `${t}`, icon: (_d = e.props) == null ? void 0 : _d.icon, component: e };
  }
  return N(() => {
    if (c.sync) {
      const e = `code-group-${c.sync}`, t = $(e, () => localStorage.getItem(e));
      h(t, () => {
        t.value && (s.value = t.value);
      }, { immediate: true }), h(s, () => {
        s.value && (t.value = s.value, localStorage.setItem(e, s.value));
      });
    }
  }), D(() => g.value++), (e, t) => {
    var _a;
    return i(), d(a(B), { modelValue: s.value, "onUpdate:modelValue": t[0] || (t[0] = (l) => s.value = l), "default-value": p.defaultValue, "unmount-on-hide": false, class: n(o.value.root({ class: [(_a = a(r)) == null ? void 0 : _a.root, c.class] })) }, { default: f(() => {
      var _a2;
      return [m(a(T), { class: n(o.value.list({ class: (_a2 = a(r)) == null ? void 0 : _a2.list })) }, { default: f(() => {
        var _a3;
        return [m(a(w), { class: n(o.value.indicator({ class: (_a3 = a(r)) == null ? void 0 : _a3.indicator })) }, null, 8, ["class"]), (i(true), x(V, null, S(v.value, (l, u) => {
          var _a4;
          return i(), d(a(I), { key: u, value: String(u), class: n(o.value.trigger({ class: (_a4 = a(r)) == null ? void 0 : _a4.trigger })) }, { default: f(() => {
            var _a5, _b;
            return [m(E, { icon: l.icon, filename: l.label, class: n(o.value.triggerIcon({ class: (_a5 = a(r)) == null ? void 0 : _a5.triggerIcon })) }, null, 8, ["icon", "filename", "class"]), R("span", { class: n(o.value.triggerLabel({ class: (_b = a(r)) == null ? void 0 : _b.triggerLabel })) }, j(l.label), 3)];
          }), _: 2 }, 1032, ["value", "class"]);
        }), 128))];
      }), _: 1 }, 8, ["class"]), (i(true), x(V, null, S(v.value, (l, u) => (i(), d(a(M), { key: u, value: String(u), "as-child": "" }, { default: f(() => [(i(), d(A(l.component), { "hide-header": "", tabindex: "-1" }))]), _: 2 }, 1032, ["value"]))), 128))];
    }), _: 1 }, 8, ["modelValue", "default-value", "class"]);
  };
} };
export {
  J as default
};
