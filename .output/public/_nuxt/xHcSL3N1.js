import { aD as S, aE as A, ah as $, aF as L, o as T, k as b, aG as C, aH as P, f as k, c as H, l as I, m as z, w as W, e as B, N as D, p as _, ai as R, aI as U, aJ as G } from "#entry";
let N = 0;
function X(a) {
  const i = /* @__PURE__ */ new WeakMap(), l = S();
  function p(o) {
    if (a.mode !== "popLayout") return;
    const f = o.offsetParent, E = f instanceof HTMLElement && f.offsetWidth || 0, r = { height: o.offsetHeight || 0, width: o.offsetWidth || 0, top: o.offsetTop, left: o.offsetLeft, right: 0 };
    r.right = E - r.width - r.left;
    const g = a.anchorX === "left" ? `left: ${r.left}px` : `right: ${r.right}px`, v = `pop-${N++}`;
    o.dataset.motionPopId = v;
    const m = document.createElement("style");
    l.value.nonce && (m.nonce = l.value.nonce), i.set(o, m), document.head.appendChild(m), m.sheet && m.sheet.insertRule(`
    [data-motion-pop-id="${v}"] {
      position: absolute !important;
      width: ${r.width}px !important;
      height: ${r.height}px !important;
      top: ${r.top}px !important;
      ${g} !important;
      }
      `);
  }
  function h(o) {
    const f = i.get(o);
    f && (i.delete(o), A.render(() => {
      document.head.removeChild(f);
    }));
  }
  return { addPopStyle: p, removePopStyle: h };
}
function F(a) {
  const i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), { addPopStyle: p, removePopStyle: h } = X(a);
  function o(t, n) {
    let e = i.get(t);
    e || (e = { motions: /* @__PURE__ */ new Set(), exitingMotions: /* @__PURE__ */ new Set(), el: t }, i.set(t, e)), e.motions.add(n);
  }
  function f(t, n) {
    const e = i.get(t);
    e && (e.exitingMotions.delete(n), e.exitingMotions.size === 0 && e.done && m(e));
  }
  function E(t) {
    l.add(t);
  }
  function r(t) {
    l.delete(t);
  }
  const g = { initial: a.initial, custom: a.custom, register: o, onMotionExitComplete: f, registerPending: E, unregisterPending: r };
  $(() => a.custom, (t) => {
    g.custom = t;
  }, { flush: "pre" }), L(g), T(() => {
    g.initial = void 0;
  });
  function v(t) {
    if (t instanceof HTMLElement && !t.hasAttribute(P)) {
      t.setAttribute(P, "");
      const n = C.get(t);
      n && !n.presenceContainer && (n.presenceContainer = t, o(t, n));
    }
  }
  function m(t) {
    var n, e, u, x, c;
    h(t.el), t.motions.forEach((s) => {
      s.getSnapshot(s.options, false);
    }), (n = t.done) == null || n.call(t), t.done = void 0, (e = t.el) != null && e.isConnected ? (x = (u = t.motions.values().next()) == null ? void 0 : u.value) == null || x.didUpdate() : (t.motions.forEach((s) => {
      s.unmount();
    }), t.motions.clear()), (c = a.onExitComplete) == null || c.call(a);
  }
  function w(t, n) {
    v(t);
    const e = i.get(t);
    e && (e.exitingMotions.clear(), e.motions.forEach((u) => {
      u.setActive("exit", false), u.getSnapshot(u.options, true);
    })), n();
  }
  function y(t, n) {
    var e, u, x;
    const c = t;
    v(c), l.forEach((d) => {
      d.element && c.contains(d.element) && (d.presenceContainer = c, o(c, d), l.delete(d));
    });
    const s = i.get(c), M = C.get(c);
    if ((!s || s.motions.size === 0) && !M) {
      n(), (e = a.onExitComplete) == null || e.call(a);
      return;
    }
    s.done = n, p(c), s.motions.forEach((d) => {
      s.exitingMotions.add(d), d.setActive("exit", true), d.getSnapshot(d.options, false);
    }), (x = (u = s.motions.values().next()) == null ? void 0 : u.value) == null || x.didUpdate();
  }
  return b(() => {
    i.forEach((t) => {
      t.motions.forEach((n) => {
        n.unmount();
      });
    }), i.clear();
  }), { enter: w, exit: y };
}
const j = k({ name: "AnimatePresence", inheritAttrs: true, __name: "AnimatePresence", props: { mode: { default: "sync" }, initial: { type: Boolean, default: true }, as: {}, custom: {}, onExitComplete: {}, anchorX: { default: "left" } }, setup(a) {
  const i = a, { enter: l, exit: p } = F(i), h = H(() => i.mode !== "wait" ? { tag: i.as } : { mode: i.mode === "wait" ? "out-in" : void 0 });
  return (o, f) => (I(), z(R(o.mode === "wait" ? U : G), D(h.value, { appear: "", onLeave: _(p), onEnter: _(l) }), { default: W(() => [B(o.$slots, "default")]), _: 3 }, 16, ["onLeave", "onEnter"]));
} });
export {
  j as _
};
