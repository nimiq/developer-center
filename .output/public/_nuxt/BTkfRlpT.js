import { a3 as x, bm as me, bn as pe, bo as Y, bp as he, r as I, t as P, bq as ye, aB as ve, ah as W, Z as te, v as ae, c as ce, f as ge, l as re, m as se, w as R, A as N, X as be, p as T, n as G, a2 as we, z as le, ab as _e, B as Te, ac as Fe } from "#entry";
import { _ as xe } from "./CUG6gCyP.js";
import { _ as Pe, a as Oe } from "./PUsQPs97.js";
import { _ as Ee } from "./wdqbK2D9.js";
function fe(e) {
  return ye() ? (ve(e), true) : false;
}
function X() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return { on: (a) => {
    e.add(a);
    const o = () => t(a);
    return fe(o), { off: o };
  }, off: t, trigger: (...a) => Promise.all(Array.from(e).map((o) => o(...a))), clear: () => {
    e.clear();
  } };
}
const de = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ce = () => {
};
function Z(...e) {
  if (e.length !== 1) return pe(...e);
  const t = e[0];
  return typeof t == "function" ? Y(he(() => ({ get: t, set: Ce }))) : I(t);
}
function ie(e, t = false, s = "Timeout") {
  return new Promise((l, d) => {
    setTimeout(t ? () => d(s) : l, e);
  });
}
function Ae(e, ...t) {
  return t.some((s) => s in e);
}
function ee(e, t = false) {
  function s(r, { flush: i = "sync", deep: m = false, timeout: f, throwOnTimeout: b } = {}) {
    let p = null;
    const O = [new Promise((F) => {
      p = W(e, (y) => {
        r(y) !== t && (p ? p() : ae(() => p == null ? void 0 : p()), F(y));
      }, { flush: i, deep: m, immediate: true });
    })];
    return f != null && O.push(ie(f, b).then(() => P(e)).finally(() => p == null ? void 0 : p())), Promise.race(O);
  }
  function l(r, i) {
    if (!te(r)) return s((y) => y === r, i);
    const { flush: m = "sync", deep: f = false, timeout: b, throwOnTimeout: p } = i ?? {};
    let h = null;
    const F = [new Promise((y) => {
      h = W([e, r], ([H, E]) => {
        t !== (H === E) && (h ? h() : ae(() => h == null ? void 0 : h()), y(H));
      }, { flush: m, deep: f, immediate: true });
    })];
    return b != null && F.push(ie(b, p).then(() => P(e)).finally(() => (h == null ? void 0 : h(), P(e)))), Promise.race(F);
  }
  function d(r) {
    return s((i) => !!i, r);
  }
  function a(r) {
    return l(null, r);
  }
  function o(r) {
    return l(void 0, r);
  }
  function n(r) {
    return s(Number.isNaN, r);
  }
  function _(r, i) {
    return s((m) => {
      const f = Array.from(m);
      return f.includes(r) || f.includes(P(r));
    }, i);
  }
  function v(r) {
    return g(1, r);
  }
  function g(r = 1, i) {
    let m = -1;
    return s(() => (m += 1, m >= r), i);
  }
  return Array.isArray(P(e)) ? { toMatch: s, toContains: _, changed: v, changedTimes: g, get not() {
    return ee(e, !t);
  } } : { toMatch: s, toBe: l, toBeTruthy: d, toBeNull: a, toBeNaN: n, toBeUndefined: o, changed: v, changedTimes: g, get not() {
    return ee(e, !t);
  } };
}
function Be(e) {
  return ee(e);
}
function De(e, t, s = {}) {
  const { immediate: l = true, immediateCallback: d = false } = s, a = x(false);
  let o;
  function n() {
    o && (clearTimeout(o), o = void 0);
  }
  function _() {
    a.value = false, n();
  }
  function v(...g) {
    d && e(), n(), a.value = true, o = setTimeout(() => {
      a.value = false, o = void 0, e(...g);
    }, P(t));
  }
  return l && (a.value = true, de && v()), fe(_), { isPending: me(a), start: v, stop: _ };
}
const je = de ? window : void 0, Se = { json: "application/json", text: "text/plain" };
function ue(e) {
  return e && Ae(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function K(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries(e.entries()) : e;
}
function Ue(e, ...t) {
  var s, l;
  const d = typeof AbortController == "function";
  let a = {}, o = { immediate: true, refetch: false, timeout: 0, updateDataOnError: false };
  const n = { method: "GET", type: "text", payload: void 0 };
  t.length > 0 && (ue(t[0]) ? o = { ...o, ...t[0] } : a = t[0]), t.length > 1 && ue(t[1]) && (o = { ...o, ...t[1] });
  const { fetch: _ = (l = (s = je) == null ? void 0 : s.fetch) != null ? l : globalThis == null ? void 0 : globalThis.fetch, initialData: v, timeout: g } = o, r = X(), i = X(), m = X(), f = x(false), b = x(false), p = x(false), h = x(null), O = x(null), F = x(null), y = x(v || null), H = ce(() => d && b.value);
  let E, k;
  const z = (u) => {
    d && (E == null ? void 0 : E.abort(u), E = new AbortController(), E.signal.onabort = () => p.value = true, a = { ...a, signal: E.signal });
  }, L = (u) => {
    b.value = u, f.value = !u;
  };
  g && (k = De(z, g, { immediate: false }));
  let J = 0;
  const j = async (u = false) => {
    var w, S;
    z(), L(true), F.value = null, h.value = null, p.value = false, J += 1;
    const V = J, A = { method: n.method, headers: {} }, U = P(n.payload);
    if (U) {
      const c = K(A.headers), $ = Object.getPrototypeOf(U);
      !n.payloadType && U && ($ === Object.prototype || Array.isArray($)) && !(U instanceof FormData) && (n.payloadType = "json"), n.payloadType && (c["Content-Type"] = (w = Se[n.payloadType]) != null ? w : n.payloadType), A.body = n.payloadType === "json" ? JSON.stringify(U) : U;
    }
    let oe = false;
    const B = { url: P(e), options: { ...A, ...a }, cancel: () => {
      oe = true;
    } };
    if (o.beforeFetch && Object.assign(B, await o.beforeFetch(B)), oe || !_) return L(false), Promise.resolve(null);
    let D = null;
    return k && k.start(), _(B.url, { ...A, ...B.options, headers: { ...K(A.headers), ...K((S = B.options) == null ? void 0 : S.headers) } }).then(async (c) => {
      if (O.value = c, h.value = c.status, D = await c.clone()[n.type](), !c.ok) throw y.value = v || null, new Error(c.statusText);
      return o.afterFetch && ({ data: D } = await o.afterFetch({ data: D, response: c, context: B, execute: j })), y.value = D, r.trigger(c), c;
    }).catch(async (c) => {
      let $ = c.message || c.name;
      if (o.onFetchError && ({ error: $, data: D } = await o.onFetchError({ data: D, error: c, response: O.value, context: B, execute: j })), F.value = $, o.updateDataOnError && (y.value = D), i.trigger(c), u) throw c;
      return null;
    }).finally(() => {
      V === J && L(false), k && k.stop(), m.trigger(null);
    });
  }, ne = Z(o.refetch);
  W([ne, Z(e)], ([u]) => u && j(), { deep: true });
  const M = { isFinished: Y(f), isFetching: Y(b), statusCode: h, response: O, error: F, data: y, canAbort: H, aborted: p, abort: z, execute: j, onFetchResponse: r.on, onFetchError: i.on, onFetchFinally: m.on, get: C("GET"), put: C("PUT"), post: C("POST"), delete: C("DELETE"), patch: C("PATCH"), head: C("HEAD"), options: C("OPTIONS"), json: q("json"), text: q("text"), blob: q("blob"), arrayBuffer: q("arrayBuffer"), formData: q("formData") };
  function C(u) {
    return (w, S) => {
      if (!b.value) return n.method = u, n.payload = w, n.payloadType = S, te(n.payload) && W([ne, Z(n.payload)], ([V]) => V && j(), { deep: true }), { ...M, then(V, A) {
        return Q().then(V, A);
      } };
    };
  }
  function Q() {
    return new Promise((u, w) => {
      Be(f).toBe(true).then(() => u(M)).catch(w);
    });
  }
  function q(u) {
    return () => {
      if (!b.value) return n.type = u, { ...M, then(w, S) {
        return Q().then(w, S);
      } };
    };
  }
  return o.immediate && Promise.resolve().then(() => j()), { ...M, then(u, w) {
    return Q().then(u, w);
  } };
}
const Ne = "https://faucet.pos.nimiq-testnet.com";
function ke() {
  const e = I(""), t = I(""), s = I("idle"), l = ce(() => e.value.length > 0 && s.value !== "loading");
  async function d() {
    s.value = "loading", t.value = "";
    try {
      const { data: a, error: o } = await Ue(`${Ne}/tapit`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ address: e.value }).toString() }).json();
      if (o.value) throw new Error(o.value.message || "Request failed");
      const n = a.value;
      if (!n.success) throw new Error(n.msg || "Faucet error");
      s.value = "success", t.value = n.msg;
    } catch (a) {
      s.value = "error", t.value = a.message;
    }
  }
  return { address: e, state: s, message: t, requestFunds: d, canRequest: l };
}
const qe = { class: "flex items-center justify-between gap-3" }, Ve = { class: "flex justify-end" }, $e = ge({ __name: "FaucetPlayground", setup(e) {
  const { address: t, canRequest: s, message: l, requestFunds: d, state: a } = ke();
  return (o, n) => {
    const _ = Fe, v = xe, g = Pe, r = we, i = Oe, m = Ee;
    return re(), se(m, { class: "border-0" }, { header: R(() => [N("div", qe, [n[3] || (n[3] = N("div", null, [N("p", { class: "text-sm font-semibold text-highlighted" }, " Testnet Faucet "), N("p", { class: "text-sm text-muted" }, " Request free NIM for development. ")], -1)), G(_, { color: "primary", variant: "soft" }, { default: R(() => [...n[2] || (n[2] = [le(" Testnet ", -1)])]), _: 1 })])]), default: R(() => [N("form", { class: "space-y-4", onSubmit: n[1] || (n[1] = be((...f) => T(d) && T(d)(...f), ["prevent"])) }, [G(g, { label: "Address", name: "address" }, { default: R(() => [G(v, { modelValue: T(t), "onUpdate:modelValue": n[0] || (n[0] = (f) => te(t) ? t.value = f : null), size: "xl", placeholder: "NQ...", icon: "i-tabler:wallet" }, null, 8, ["modelValue"])]), _: 1 }), N("div", Ve, [G(r, { type: "submit", loading: T(a) === "loading", disabled: !T(s), label: "Request Funds", "trailing-icon": "i-tabler:arrow-right", color: "primary", class: "rounded-full" }, null, 8, ["loading", "disabled"])])], 32), T(l) ? (re(), se(i, { key: 0, color: T(a) === "success" ? "success" : "error", icon: T(a) === "success" ? "i-tabler:circle-check" : "i-tabler:alert-circle", variant: "soft", class: "mt-4" }, { description: R(() => [le(_e(T(l)), 1)]), _: 1 }, 8, ["color", "icon"])) : Te("", true)]), _: 1 });
  };
} }), Ie = Object.assign($e, { __name: "FaucetPlayground" });
export {
  Ie as default
};
