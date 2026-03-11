import { V as x, bb as me, bc as pe, bd as Z, be as he, r as I, t as P, bf as ye, bg as ve, aa as L, L as te, s as ae, c as ce, f as ge, k as re, l as se, w as R, z as k, I as be, n as T, m as G, J as we, Q as _e, y as le, a2 as Te, A as Fe, a3 as xe } from "#entry";
import { _ as Pe, a as Oe } from "./BzkzRpez.js";
import { _ as Ee } from "./Bxr547A_.js";
function fe(e) {
  return ye() ? (ve(e), true) : false;
}
function K() {
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
function X(...e) {
  if (e.length !== 1) return pe(...e);
  const t = e[0];
  return typeof t == "function" ? Z(he(() => ({ get: t, set: Ce }))) : I(t);
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
      p = L(e, (y) => {
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
      h = L([e, r], ([H, E]) => {
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
function De(e) {
  return ee(e);
}
function je(e, t, s = {}) {
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
const Be = de ? window : void 0, Se = { json: "application/json", text: "text/plain" };
function ue(e) {
  return e && Ae(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function Y(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries(e.entries()) : e;
}
function Ue(e, ...t) {
  var s, l;
  const d = typeof AbortController == "function";
  let a = {}, o = { immediate: true, refetch: false, timeout: 0, updateDataOnError: false };
  const n = { method: "GET", type: "text", payload: void 0 };
  t.length > 0 && (ue(t[0]) ? o = { ...o, ...t[0] } : a = t[0]), t.length > 1 && ue(t[1]) && (o = { ...o, ...t[1] });
  const { fetch: _ = (l = (s = Be) == null ? void 0 : s.fetch) != null ? l : globalThis == null ? void 0 : globalThis.fetch, initialData: v, timeout: g } = o, r = K(), i = K(), m = K(), f = x(false), b = x(false), p = x(false), h = x(null), O = x(null), F = x(null), y = x(v || null), H = ce(() => d && b.value);
  let E, N;
  const W = (u) => {
    d && (E == null ? void 0 : E.abort(u), E = new AbortController(), E.signal.onabort = () => p.value = true, a = { ...a, signal: E.signal });
  }, z = (u) => {
    b.value = u, f.value = !u;
  };
  g && (N = je(W, g, { immediate: false }));
  let J = 0;
  const B = async (u = false) => {
    var w, S;
    W(), z(true), F.value = null, h.value = null, p.value = false, J += 1;
    const q = J, A = { method: n.method, headers: {} }, U = P(n.payload);
    if (U) {
      const c = Y(A.headers), $ = Object.getPrototypeOf(U);
      !n.payloadType && U && ($ === Object.prototype || Array.isArray($)) && !(U instanceof FormData) && (n.payloadType = "json"), n.payloadType && (c["Content-Type"] = (w = Se[n.payloadType]) != null ? w : n.payloadType), A.body = n.payloadType === "json" ? JSON.stringify(U) : U;
    }
    let oe = false;
    const D = { url: P(e), options: { ...A, ...a }, cancel: () => {
      oe = true;
    } };
    if (o.beforeFetch && Object.assign(D, await o.beforeFetch(D)), oe || !_) return z(false), Promise.resolve(null);
    let j = null;
    return N && N.start(), _(D.url, { ...A, ...D.options, headers: { ...Y(A.headers), ...Y((S = D.options) == null ? void 0 : S.headers) } }).then(async (c) => {
      if (O.value = c, h.value = c.status, j = await c.clone()[n.type](), !c.ok) throw y.value = v || null, new Error(c.statusText);
      return o.afterFetch && ({ data: j } = await o.afterFetch({ data: j, response: c, context: D, execute: B })), y.value = j, r.trigger(c), c;
    }).catch(async (c) => {
      let $ = c.message || c.name;
      if (o.onFetchError && ({ error: $, data: j } = await o.onFetchError({ data: j, error: c, response: O.value, context: D, execute: B })), F.value = $, o.updateDataOnError && (y.value = j), i.trigger(c), u) throw c;
      return null;
    }).finally(() => {
      q === J && z(false), N && N.stop(), m.trigger(null);
    });
  }, ne = X(o.refetch);
  L([ne, X(e)], ([u]) => u && B(), { deep: true });
  const M = { isFinished: Z(f), isFetching: Z(b), statusCode: h, response: O, error: F, data: y, canAbort: H, aborted: p, abort: W, execute: B, onFetchResponse: r.on, onFetchError: i.on, onFetchFinally: m.on, get: C("GET"), put: C("PUT"), post: C("POST"), delete: C("DELETE"), patch: C("PATCH"), head: C("HEAD"), options: C("OPTIONS"), json: V("json"), text: V("text"), blob: V("blob"), arrayBuffer: V("arrayBuffer"), formData: V("formData") };
  function C(u) {
    return (w, S) => {
      if (!b.value) return n.method = u, n.payload = w, n.payloadType = S, te(n.payload) && L([ne, X(n.payload)], ([q]) => q && B(), { deep: true }), { ...M, then(q, A) {
        return Q().then(q, A);
      } };
    };
  }
  function Q() {
    return new Promise((u, w) => {
      De(f).toBe(true).then(() => u(M)).catch(w);
    });
  }
  function V(u) {
    return () => {
      if (!b.value) return n.type = u, { ...M, then(w, S) {
        return Q().then(w, S);
      } };
    };
  }
  return o.immediate && Promise.resolve().then(() => B()), { ...M, then(u, w) {
    return Q().then(u, w);
  } };
}
const ke = "https://faucet.pos.nimiq-testnet.com";
function Ne() {
  const e = I(""), t = I(""), s = I("idle"), l = ce(() => e.value.length > 0 && s.value !== "loading");
  async function d() {
    s.value = "loading", t.value = "";
    try {
      const { data: a, error: o } = await Ue(`${ke}/tapit`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ address: e.value }).toString() }).json();
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
const Ve = { class: "flex items-center justify-between gap-3" }, qe = { class: "flex justify-end" }, $e = ge({ __name: "FaucetPlayground", setup(e) {
  const { address: t, canRequest: s, message: l, requestFunds: d, state: a } = Ne();
  return (o, n) => {
    const _ = xe, v = we, g = Pe, r = _e, i = Oe, m = Ee;
    return re(), se(m, { class: "border-0" }, { header: R(() => [k("div", Ve, [n[3] || (n[3] = k("div", null, [k("p", { class: "text-sm font-semibold text-highlighted" }, " Testnet Faucet "), k("p", { class: "text-sm text-muted" }, " Request free NIM for development. ")], -1)), G(_, { color: "primary", variant: "soft" }, { default: R(() => [...n[2] || (n[2] = [le(" Testnet ", -1)])]), _: 1 })])]), default: R(() => [k("form", { class: "space-y-4", onSubmit: n[1] || (n[1] = be((...f) => T(d) && T(d)(...f), ["prevent"])) }, [G(g, { label: "Address", name: "address" }, { default: R(() => [G(v, { modelValue: T(t), "onUpdate:modelValue": n[0] || (n[0] = (f) => te(t) ? t.value = f : null), size: "xl", placeholder: "NQ...", icon: "i-tabler:wallet" }, null, 8, ["modelValue"])]), _: 1 }), k("div", qe, [G(r, { type: "submit", loading: T(a) === "loading", disabled: !T(s), label: "Request Funds", "trailing-icon": "i-tabler:arrow-right", color: "primary", class: "rounded-full" }, null, 8, ["loading", "disabled"])])], 32), T(l) ? (re(), se(i, { key: 0, color: T(a) === "success" ? "success" : "error", icon: T(a) === "success" ? "i-tabler:circle-check" : "i-tabler:alert-circle", variant: "soft", class: "mt-4" }, { description: R(() => [le(Te(T(l)), 1)]), _: 1 }, 8, ["color", "icon"])) : Fe("", true)]), _: 1 });
  };
} }), Ge = Object.assign($e, { __name: "FaucetPlayground" });
export {
  Ge as default
};
