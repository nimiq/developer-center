import { r as $, u as E, a as S, c as m, t as _, b as A, d as D } from "#entry";
const L = /^[^-]+.*-.*[^-]+$/, j = /^[^_]+.*_.*[^_]+$/, b = ["arrowleft", "arrowright", "arrowup", "arrowright", "tab", "escape", "enter", "backspace"];
function h(s) {
  return /^[a-z]$/i.test(s) ? `Key${s.toUpperCase()}` : /^\d$/.test(s) ? `Digit${s}` : /^f\d+$/i.test(s) ? s.toUpperCase() : { space: "Space", enter: "Enter", escape: "Escape", tab: "Tab", backspace: "Backspace", delete: "Delete", arrowup: "ArrowUp", arrowdown: "ArrowDown", arrowleft: "ArrowLeft", arrowright: "ArrowRight" }[s.toLowerCase()] || s;
}
function T(s, u = {}) {
  const i = $([]), f = () => {
    i.value.splice(0, i.value.length);
  }, v = E(f, u.chainDelay ?? 800), { macOS: w } = S(), d = D(), c = u.layoutIndependent ?? false, I = b.map((e) => h(e)), g = (e) => {
    if (!e.key) return;
    const a = c ? /^Key[A-Z]$/i.test(e.code) : /^[a-z]{1}$/i.test(e.key), t = c ? I.includes(e.code) : b.includes(e.key.toLowerCase());
    let r;
    if (i.value.push(c ? e.code : e.key), i.value.length >= 2) {
      r = i.value.slice(-2).join("-");
      for (const n of K.value.filter((l) => l.chained)) if (n.key === r) {
        n.enabled && (e.preventDefault(), n.handler(e)), f();
        return;
      }
    }
    for (const n of K.value.filter((l) => !l.chained)) {
      if (c) {
        if (e.code !== n.key) continue;
      } else if (e.key.toLowerCase() !== n.key) continue;
      if (e.metaKey === n.metaKey && e.ctrlKey === n.ctrlKey && e.altKey === n.altKey && !((a || t || n.shiftKey || e.shiftKey && (e.metaKey || e.ctrlKey)) && e.shiftKey !== n.shiftKey)) {
        n.enabled && (e.preventDefault(), n.handler(e)), f();
        return;
      }
    }
    v();
  }, y = m(() => {
    var _a, _b, _c;
    const e = (_a = d.value) == null ? void 0 : _a.tagName, a = (_b = d.value) == null ? void 0 : _b.contentEditable;
    return e === "INPUT" || e === "TEXTAREA" || a === "true" || a === "plaintext-only" ? ((_c = d.value) == null ? void 0 : _c.name) || true : false;
  }), K = m(() => Object.entries(_(s)).map(([e, a]) => {
    var _a, _b;
    if (!a) return null;
    let t;
    e.includes("-") && e !== "-" && !e.includes("_") && !((_a = e.match(L)) == null ? void 0 : _a.length) && console.trace(`[Shortcut] Invalid key: "${e}"`), e.includes("_") && e !== "_" && !((_b = e.match(j)) == null ? void 0 : _b.length) && console.trace(`[Shortcut] Invalid key: "${e}"`);
    const r = e.includes("-") && e !== "-" && !e.includes("_");
    if (r) c ? t = { key: e.split("-").map((o) => h(o)).join("-"), metaKey: false, ctrlKey: false, shiftKey: false, altKey: false } : t = { key: e.toLowerCase(), metaKey: false, ctrlKey: false, shiftKey: false, altKey: false };
    else {
      const l = e.toLowerCase().split("_").map((p) => p);
      let o = l.filter((p) => !["meta", "command", "ctrl", "shift", "alt", "option"].includes(p)).join("_");
      c && (o = h(o)), t = { key: o, metaKey: l.includes("meta") || l.includes("command"), ctrlKey: l.includes("ctrl"), shiftKey: l.includes("shift"), altKey: l.includes("alt") || l.includes("option") };
    }
    if (t.chained = r, !w.value && t.metaKey && !t.ctrlKey && (t.metaKey = false, t.ctrlKey = true), typeof a == "function" ? t.handler = a : typeof a == "object" && (t = { ...t, handler: a.handler }), !t.handler) return console.trace("[Shortcut] Invalid value"), null;
    let n = true;
    return a.usingInput ? typeof a.usingInput == "string" && (n = y.value === a.usingInput) : n = !y.value, t.enabled = n, t;
  }).filter(Boolean));
  return A("keydown", g);
}
export {
  T as d
};
