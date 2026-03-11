import { r as L, bq as U, f as le, bh as ie, br as oe, bi as ue, bj as Y, c as w, k as _, l as O, w as P, m as V, n as s, P as te, K as M, I as N, e as ae, bp as de, bs as ce, bt as fe, s as ve, bu as G, bk as pe, h as he, a4 as ne, bv as J, U as ge, B as me, R as ye, ad as be, aa as D, W as xe, x as $, M as Q, N as ke, z as F, T as E, ab as Ce, S as X, a5 as Z, a2 as Te, A as ee } from "#entry";
import { R as Ke } from "./BKAnssJs.js";
import Se from "./B3lh_D4v.js";
function Ae(f, K) {
  const e = L(), b = (l, g) => {
    if (K.multiple && Array.isArray(f.value)) if (K.selectionBehavior === "replace") f.value = [l], e.value = l;
    else {
      const S = f.value.findIndex((p) => g(p));
      S !== -1 ? f.value = f.value.filter((p, v) => v !== S) : f.value = [...f.value, l];
    }
    else K.selectionBehavior === "replace" ? f.value = { ...l } : !Array.isArray(f.value) && g(f.value) ? f.value = void 0 : f.value = { ...l };
    return f.value;
  };
  function B(l, g, S, p) {
    var _a;
    if (!(e == null ? void 0 : e.value) || !K.multiple || !Array.isArray(f.value)) return;
    const I = (_a = S().filter((A) => A.ref.dataset.disabled !== "").find((A) => A.ref === g)) == null ? void 0 : _a.value;
    if (!I) return;
    let x = null;
    switch (l) {
      case "prev":
      case "next": {
        x = U(p, e.value, I);
        break;
      }
      case "first": {
        x = U(p, e.value, p == null ? void 0 : p[0]);
        break;
      }
      case "last": {
        x = U(p, e.value, p == null ? void 0 : p[p.length - 1]);
        break;
      }
    }
    f.value = x;
  }
  return { firstValue: e, onSelectItem: b, handleMultipleReplace: B };
}
function W(f) {
  return f.reduce((K, e) => (K.push(e), e.children && K.push(...W(e.children)), K), []);
}
const [Ie, Ee] = pe("TreeRoot");
var _e = le({ __name: "TreeRoot", props: { modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, items: { type: Array, required: false }, expanded: { type: Array, required: false }, defaultExpanded: { type: Array, required: false }, getKey: { type: Function, required: true }, getChildren: { type: Function, required: false, default: (f) => f.children }, selectionBehavior: { type: String, required: false, default: "toggle" }, multiple: { type: Boolean, required: false, skipCheck: true }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, propagateSelect: { type: Boolean, required: false }, bubbleSelect: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "ul" } }, emits: ["update:modelValue", "update:expanded"], setup(f, { emit: K }) {
  const e = f, b = K, { items: B, multiple: l, disabled: g, propagateSelect: S, dir: p, bubbleSelect: v } = ie(e), { handleTypeaheadSearch: I } = oe(), x = ue(p), A = L(), R = L(false), q = ce(), d = Y(e, "modelValue", b, { defaultValue: e.defaultValue ?? (l.value ? [] : void 0), passive: true, deep: true }), C = Y(e, "expanded", b, { defaultValue: e.defaultExpanded ?? [], passive: e.expanded === void 0, deep: true }), { onSelectItem: a, handleMultipleReplace: i } = Ae(d, e), c = w(() => l.value && Array.isArray(d.value) ? d.value.map((t) => e.getKey(t)) : [e.getKey(d.value ?? {})]);
  function r(t, n = 1, k) {
    return t.reduce((y, T, j) => {
      const H = e.getKey(T), z = e.getChildren(T), re = C.value.includes(H), se = { _id: H, value: T, index: j, level: n, parentItem: k, hasChildren: !!z, bind: { value: T, level: n, "aria-setsize": t.length, "aria-posinset": j + 1 } };
      return y.push(se), z && re && y.push(...r(z, n + 1, T)), y;
    }, []);
  }
  const u = w(() => {
    const t = e.items;
    return C.value.map((n) => n), r(t ?? []);
  });
  function o(t) {
    var _a;
    if (R.value) q.trigger(t);
    else {
      const n = ((_a = A.value) == null ? void 0 : _a.getItems()) ?? [];
      I(t.key, n);
    }
  }
  function h(t) {
    if (R.value) return;
    const n = fe[t.key];
    ve(() => {
      var _a;
      i(n, G(), (_a = A.value) == null ? void 0 : _a.getItems, u.value.map((k) => k.value));
    });
  }
  function m(t) {
    var _a;
    if (t.parentItem != null && Array.isArray(d.value) && e.multiple) {
      const n = u.value.find((k) => t.parentItem != null && e.getKey(k.value) === e.getKey(t.parentItem));
      n != null && (((_a = e.getChildren(n.value)) == null ? void 0 : _a.every((y) => d.value.find((T) => e.getKey(T) === e.getKey(y)))) ? d.value = [...d.value, n.value] : d.value = d.value.filter((y) => e.getKey(y) !== e.getKey(n.value)), m(n));
    }
  }
  return Ee({ modelValue: d, selectedKeys: c, onSelect: (t) => {
    var _a;
    const n = (y) => e.getKey(y ?? {}) === e.getKey(t), k = e.multiple && Array.isArray(d.value) ? ((_a = d.value) == null ? void 0 : _a.findIndex(n)) !== -1 : void 0;
    if (a(t, n), e.bubbleSelect && e.multiple && Array.isArray(d.value)) {
      const y = u.value.find((T) => e.getKey(T.value) === e.getKey(t));
      y != null && m(y);
    }
    if (e.propagateSelect && e.multiple && Array.isArray(d.value)) {
      const y = W(e.getChildren(t) ?? []);
      k ? d.value = [...d.value].filter((T) => !y.some((j) => e.getKey(T ?? {}) === e.getKey(j))) : d.value = [...d.value, ...y];
    }
  }, expanded: C, onToggle(t) {
    if (!(t ? e.getChildren(t) : void 0)) return;
    const k = e.getKey(t) ?? t;
    C.value.includes(k) ? C.value = C.value.filter((y) => y !== k) : C.value = [...C.value, k];
  }, getKey: e.getKey, getChildren: e.getChildren, items: B, expandedItems: u, disabled: g, multiple: l, dir: x, propagateSelect: S, bubbleSelect: v, isVirtual: R, virtualKeydownHook: q, handleMultipleReplace: i }), (t, n) => (_(), O(s(de), { ref_key: "rovingFocusGroupRef", ref: A, "as-child": "", orientation: "vertical", dir: s(x) }, { default: P(() => [V(s(te), { role: "tree", as: t.as, "as-child": t.asChild, "aria-multiselectable": s(l) ? true : void 0, onKeydown: [o, M(N(h, ["shift"]), ["up", "down"])] }, { default: P(() => [ae(t.$slots, "default", { flattenItems: u.value, modelValue: s(d), expanded: s(C) })]), _: 3 }, 8, ["as", "as-child", "aria-multiselectable", "onKeydown"])]), _: 3 }, 8, ["dir"]));
} }), qe = _e;
const we = "tree.select", Be = "tree.toggle";
var Re = le({ inheritAttrs: false, __name: "TreeItem", props: { value: { type: null, required: true }, level: { type: Number, required: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "li" } }, emits: ["select", "toggle"], setup(f, { expose: K, emit: e }) {
  const b = f, B = e, l = Ie(), { getItems: g } = he(), S = w(() => !!l.getChildren(b.value)), p = w(() => {
    const a = l.getKey(b.value);
    return l.expanded.value.includes(a);
  }), v = w(() => {
    const a = l.getKey(b.value);
    return l.selectedKeys.value.includes(a);
  }), I = w(() => {
    if (l.bubbleSelect.value && S.value && Array.isArray(l.modelValue.value)) {
      const a = W(l.getChildren(b.value) || []);
      return a.some((i) => l.modelValue.value.find((c) => l.getKey(c) === l.getKey(i))) && !a.every((i) => l.modelValue.value.find((c) => l.getKey(c) === l.getKey(i)));
    } else return l.propagateSelect.value && v.value && S.value && Array.isArray(l.modelValue.value) ? !W(l.getChildren(b.value) || []).every((i) => l.modelValue.value.find((c) => l.getKey(c) === l.getKey(i))) : void 0;
  });
  function x(a) {
    if (S.value) if (p.value) {
      const i = g().map((h) => h.ref), c = G(), r = i.indexOf(c), o = [...i].slice(r).find((h) => Number(h.getAttribute("data-indent")) === b.level + 1);
      o && o.focus();
    } else C(a);
  }
  function A(a) {
    if (p.value) C(a);
    else {
      const i = g().map((h) => h.ref), c = G(), r = i.indexOf(c), o = [...i].slice(0, r).reverse().find((h) => Number(h.getAttribute("data-indent")) === b.level - 1);
      o && o.focus();
    }
  }
  async function R(a) {
    B("select", a), !(a == null ? void 0 : a.defaultPrevented) && l.onSelect(b.value);
  }
  async function q(a) {
    B("toggle", a), !(a == null ? void 0 : a.defaultPrevented) && l.onToggle(b.value);
  }
  async function d(a) {
    if (!a) return;
    const i = { originalEvent: a, value: b.value, isExpanded: p.value, isSelected: v.value };
    J(we, R, i);
  }
  async function C(a) {
    if (!a) return;
    const i = { originalEvent: a, value: b.value, isExpanded: p.value, isSelected: v.value };
    J(Be, q, i);
  }
  return K({ isExpanded: p, isSelected: v, isIndeterminate: I, handleToggle: () => l.onToggle(b.value), handleSelect: () => l.onSelect(b.value) }), (a, i) => (_(), O(s(Ke), { "as-child": "", value: a.value, "allow-shift-key": "" }, { default: P(() => [V(s(te), ne(a.$attrs, { role: "treeitem", as: a.as, "as-child": a.asChild, "aria-selected": v.value, "aria-expanded": S.value ? p.value : void 0, "aria-level": a.level, "data-indent": a.level, "data-selected": v.value ? "" : void 0, "data-expanded": p.value ? "" : void 0, onKeydown: [M(N(d, ["self", "prevent"]), ["enter", "space"]), i[0] || (i[0] = M(N((c) => s(l).dir.value === "ltr" ? x(c) : A(c), ["prevent"]), ["right"])), i[1] || (i[1] = M(N((c) => s(l).dir.value === "ltr" ? A(c) : x(c), ["prevent"]), ["left"]))], onClick: i[2] || (i[2] = N((c) => {
    d(c), C(c);
  }, ["stop"])) }), { default: P(() => [ae(a.$slots, "default", { isExpanded: p.value, isSelected: v.value, isIndeterminate: I.value, handleSelect: () => s(l).onSelect(a.value), handleToggle: () => s(l).onToggle(a.value) })]), _: 3 }, 16, ["as", "as-child", "aria-selected", "aria-expanded", "aria-level", "data-indent", "data-selected", "data-expanded", "onKeydown"])]), _: 3 }, 8, ["value"]));
} }), Ve = Re;
const Le = { slots: { root: "relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-muted rounded-md", list: "isolate relative p-2 border-b lg:border-b-0 lg:border-e border-muted overflow-y-auto", item: "", listWithChildren: "ms-4.5 border-s border-default", itemWithChildren: "ps-1.5 -ms-px", link: "relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2", linkLeadingIcon: "size-4 shrink-0", linkLabel: "truncate", linkTrailing: "ms-auto inline-flex gap-1.5 items-center", linkTrailingIcon: "size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180", content: "overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-l-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto" }, variants: { active: { true: { link: "text-highlighted before:bg-elevated" }, false: { link: ["hover:text-highlighted hover:before:bg-elevated/50", "transition-colors before:transition-colors"] } } } }, Oe = Object.assign({ inheritAttrs: false }, { __name: "ProseCodeTree", props: { items: { type: Array, required: false }, modelValue: { type: String, required: false }, defaultValue: { type: String, required: false }, expandAll: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, emits: ["update:modelValue"], setup(f, { emit: K }) {
  var _a;
  const e = f, b = K, B = ge(), l = me(), g = ye("prose.codeTree", e), [S, p] = be(), v = w(() => {
    var _a2, _b;
    return X({ extend: X(Le), ...((_b = (_a2 = l.ui) == null ? void 0 : _a2.prose) == null ? void 0 : _b.codeTree) || {} })();
  }), I = e.modelValue ?? e.defaultValue, x = L(I ? { path: I } : void 0), A = L();
  D(x, (r) => {
    (r == null ? void 0 : r.path) !== e.modelValue && b("update:modelValue", r == null ? void 0 : r.path);
  }), D(() => e.modelValue, (r) => {
    var _a2;
    if (r === ((_a2 = x.value) == null ? void 0 : _a2.path)) return;
    x.value = r ? { path: r } : void 0;
    const u = i(r);
    for (const o of u) c.value.includes(o) || c.value.push(o);
  });
  const R = L(1), q = w(() => {
    var _a2, _b;
    return R.value, e.items || ((_b = (_a2 = B.default) == null ? void 0 : _a2.call(B)) == null ? void 0 : _b.flatMap(a).filter(Boolean)) || [];
  }), d = w(() => C(q.value));
  function C(r) {
    const u = /* @__PURE__ */ new Map(), o = [];
    r.forEach((m) => {
      const t = m.label.split("/");
      let n = "";
      t.forEach((k, y) => {
        var _a2, _b;
        if (n = n ? `${n}/${k}` : k, !u.has(n)) {
          const T = { label: k, path: n, ...y < t.length - 1 && { children: [] } };
          u.set(n, T), y === 0 ? o.push(T) : (_b = (_a2 = u.get(t.slice(0, y).join("/"))) == null ? void 0 : _a2.children) == null ? void 0 : _b.push(T);
        }
      });
    });
    const h = (m) => m.sort((t, n) => !!t.children == !!n.children ? t.label.localeCompare(n.label) : n.children ? 1 : -1).map((t) => ({ ...t, children: t.children && h(t.children) }));
    return h(o);
  }
  function a(r, u) {
    var _a2, _b, _c, _d;
    return typeof r.type == "symbol" ? (_a2 = r.children) == null ? void 0 : _a2.map(a) : { label: ((_b = r.props) == null ? void 0 : _b.filename) || ((_c = r.props) == null ? void 0 : _c.label) || `${u}`, icon: (_d = r.props) == null ? void 0 : _d.icon, component: r };
  }
  function i(r) {
    if (e.expandAll) {
      const o = /* @__PURE__ */ new Set();
      return q.value.forEach((h) => {
        const m = h.label.split("/");
        for (let t = 1; t < m.length; t++) o.add(m.slice(0, t).join("/"));
      }), Array.from(o);
    }
    if (!r) return [];
    const u = r.split("/");
    return u.slice(0, -1).map((o, h) => u.slice(0, h + 1).join("/"));
  }
  const c = L(i((_a = x.value) == null ? void 0 : _a.path));
  return D(q, (r, u) => {
    if (!e.expandAll) return;
    const o = r.map((m) => m.label).join(`
`), h = (u == null ? void 0 : u.map((m) => m.label).join(`
`)) ?? "";
    o !== h && (c.value = i());
  }), D(x, (r) => {
    const u = q.value.find((o) => (r == null ? void 0 : r.path) === o.label);
    (u == null ? void 0 : u.component) && (A.value = u);
  }, { immediate: true }), xe(() => R.value++), (r, u) => {
    var _a2, _b, _c, _d;
    return _(), $(Q, null, [V(s(S), null, { default: P(({ items: o, level: h }) => [(_(true), $(Q, null, ke(o, (m, t) => {
      var _a3, _b2;
      return _(), $("li", { key: `${h}-${t}`, role: "presentation", class: E(h > 1 ? v.value.itemWithChildren({ class: (_a3 = s(g)) == null ? void 0 : _a3.itemWithChildren }) : v.value.item({ class: (_b2 = s(g)) == null ? void 0 : _b2.item })) }, [V(s(Ve), { level: h, value: m, "as-child": "" }, { default: P(({ isExpanded: n, isSelected: k }) => {
        var _a4, _b3, _c2, _d2, _e2, _f, _g, _h, _i, _j;
        return [F("button", { type: "button", class: E(v.value.link({ class: (_a4 = s(g)) == null ? void 0 : _a4.link, active: k })) }, [((_b3 = m.children) == null ? void 0 : _b3.length) ? (_(), O(Z, { key: 0, name: n ? s(l).ui.icons.folderOpen : s(l).ui.icons.folder, class: E(v.value.linkLeadingIcon({ class: (_c2 = s(g)) == null ? void 0 : _c2.linkLeadingIcon })) }, null, 8, ["name", "class"])) : (_(), O(Se, { key: 1, filename: m.label, class: E(v.value.linkLeadingIcon({ class: (_d2 = s(g)) == null ? void 0 : _d2.linkLeadingIcon })) }, null, 8, ["filename", "class"])), F("span", { class: E(v.value.linkLabel({ class: (_e2 = s(g)) == null ? void 0 : _e2.linkLabel })) }, Te(m.label), 3), ((_f = m.children) == null ? void 0 : _f.length) ? (_(), $("span", { key: 2, class: E(v.value.linkTrailing({ class: (_g = s(g)) == null ? void 0 : _g.linkTrailing })) }, [V(Z, { name: s(l).ui.icons.chevronDown, class: E(v.value.linkTrailingIcon({ class: (_h = s(g)) == null ? void 0 : _h.linkTrailingIcon })) }, null, 8, ["name", "class"])], 2)) : ee("", true)], 2), ((_i = m.children) == null ? void 0 : _i.length) && n ? (_(), $("ul", { key: 0, role: "group", class: E(v.value.listWithChildren({ class: (_j = s(g)) == null ? void 0 : _j.listWithChildren })) }, [V(s(p), { items: m.children, level: h + 1 }, null, 8, ["items", "level"])], 2)) : ee("", true)];
      }), _: 2 }, 1032, ["level", "value"])], 2);
    }), 128))]), _: 1 }), F("div", ne(r.$attrs, { class: v.value.root({ class: [(_a2 = s(g)) == null ? void 0 : _a2.root, e.class] }) }), [V(s(qe), { modelValue: x.value, "onUpdate:modelValue": u[0] || (u[0] = (o) => x.value = o), expanded: c.value, "onUpdate:expanded": u[1] || (u[1] = (o) => c.value = o), class: E(v.value.list({ class: (_b = s(g)) == null ? void 0 : _b.list })), items: d.value, "get-key": (o) => o.path }, { default: P(() => [V(s(p), { items: d.value, level: 1 }, null, 8, ["items"])]), _: 1 }, 8, ["modelValue", "expanded", "class", "items", "get-key"]), F("div", { class: E(v.value.content({ class: (_c = s(g)) == null ? void 0 : _c.content })) }, [(_(), O(Ce((_d = A.value) == null ? void 0 : _d.component)))], 2)], 16)], 64);
  };
} });
export {
  Oe as default
};
