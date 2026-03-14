var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _t2, _e2, _n2, _r2, _s2, _$e_instances, a_fn, _a;
import { s as ot, f as Dt, a as Tt } from "./BiwnguJD.js";
const Bt = /["&'<>`]/g, zt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, jt = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, qt = /[|\\{}()[\]^$+*?.]/g, Le = /* @__PURE__ */ new WeakMap();
function it(e, r) {
  if (e = e.replace(r.subset ? Vt(r.subset) : Bt, n), r.subset || r.escapeOnly) return e;
  return e.replace(zt, t).replace(jt, n);
  function t(s, a, o) {
    return r.format((s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536, o.charCodeAt(a + 2), r);
  }
  function n(s, a, o) {
    return r.format(s.charCodeAt(0), o.charCodeAt(a + 1), r);
  }
}
function Vt(e) {
  let r = Le.get(e);
  return r || (r = Ht(e), Le.set(e, r)), r;
}
function Ht(e) {
  const r = [];
  let t = -1;
  for (; ++t < e.length; ) r.push(e[t].replace(qt, "\\$&"));
  return new RegExp("(?:" + r.join("|") + ")", "g");
}
const Wt = /[\dA-Fa-f]/;
function Xt(e, r, t) {
  const n = "&#x" + e.toString(16).toUpperCase();
  return t && r && !Wt.test(String.fromCharCode(r)) ? n : n + ";";
}
const Zt = /\d/;
function Qt(e, r, t) {
  const n = "&#" + String(e);
  return t && r && !Zt.test(String.fromCharCode(r)) ? n : n + ";";
}
const Jt = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"], le = { nbsp: "\xA0", iexcl: "\xA1", cent: "\xA2", pound: "\xA3", curren: "\xA4", yen: "\xA5", brvbar: "\xA6", sect: "\xA7", uml: "\xA8", copy: "\xA9", ordf: "\xAA", laquo: "\xAB", not: "\xAC", shy: "\xAD", reg: "\xAE", macr: "\xAF", deg: "\xB0", plusmn: "\xB1", sup2: "\xB2", sup3: "\xB3", acute: "\xB4", micro: "\xB5", para: "\xB6", middot: "\xB7", cedil: "\xB8", sup1: "\xB9", ordm: "\xBA", raquo: "\xBB", frac14: "\xBC", frac12: "\xBD", frac34: "\xBE", iquest: "\xBF", Agrave: "\xC0", Aacute: "\xC1", Acirc: "\xC2", Atilde: "\xC3", Auml: "\xC4", Aring: "\xC5", AElig: "\xC6", Ccedil: "\xC7", Egrave: "\xC8", Eacute: "\xC9", Ecirc: "\xCA", Euml: "\xCB", Igrave: "\xCC", Iacute: "\xCD", Icirc: "\xCE", Iuml: "\xCF", ETH: "\xD0", Ntilde: "\xD1", Ograve: "\xD2", Oacute: "\xD3", Ocirc: "\xD4", Otilde: "\xD5", Ouml: "\xD6", times: "\xD7", Oslash: "\xD8", Ugrave: "\xD9", Uacute: "\xDA", Ucirc: "\xDB", Uuml: "\xDC", Yacute: "\xDD", THORN: "\xDE", szlig: "\xDF", agrave: "\xE0", aacute: "\xE1", acirc: "\xE2", atilde: "\xE3", auml: "\xE4", aring: "\xE5", aelig: "\xE6", ccedil: "\xE7", egrave: "\xE8", eacute: "\xE9", ecirc: "\xEA", euml: "\xEB", igrave: "\xEC", iacute: "\xED", icirc: "\xEE", iuml: "\xEF", eth: "\xF0", ntilde: "\xF1", ograve: "\xF2", oacute: "\xF3", ocirc: "\xF4", otilde: "\xF5", ouml: "\xF6", divide: "\xF7", oslash: "\xF8", ugrave: "\xF9", uacute: "\xFA", ucirc: "\xFB", uuml: "\xFC", yacute: "\xFD", thorn: "\xFE", yuml: "\xFF", fnof: "\u0192", Alpha: "\u0391", Beta: "\u0392", Gamma: "\u0393", Delta: "\u0394", Epsilon: "\u0395", Zeta: "\u0396", Eta: "\u0397", Theta: "\u0398", Iota: "\u0399", Kappa: "\u039A", Lambda: "\u039B", Mu: "\u039C", Nu: "\u039D", Xi: "\u039E", Omicron: "\u039F", Pi: "\u03A0", Rho: "\u03A1", Sigma: "\u03A3", Tau: "\u03A4", Upsilon: "\u03A5", Phi: "\u03A6", Chi: "\u03A7", Psi: "\u03A8", Omega: "\u03A9", alpha: "\u03B1", beta: "\u03B2", gamma: "\u03B3", delta: "\u03B4", epsilon: "\u03B5", zeta: "\u03B6", eta: "\u03B7", theta: "\u03B8", iota: "\u03B9", kappa: "\u03BA", lambda: "\u03BB", mu: "\u03BC", nu: "\u03BD", xi: "\u03BE", omicron: "\u03BF", pi: "\u03C0", rho: "\u03C1", sigmaf: "\u03C2", sigma: "\u03C3", tau: "\u03C4", upsilon: "\u03C5", phi: "\u03C6", chi: "\u03C7", psi: "\u03C8", omega: "\u03C9", thetasym: "\u03D1", upsih: "\u03D2", piv: "\u03D6", bull: "\u2022", hellip: "\u2026", prime: "\u2032", Prime: "\u2033", oline: "\u203E", frasl: "\u2044", weierp: "\u2118", image: "\u2111", real: "\u211C", trade: "\u2122", alefsym: "\u2135", larr: "\u2190", uarr: "\u2191", rarr: "\u2192", darr: "\u2193", harr: "\u2194", crarr: "\u21B5", lArr: "\u21D0", uArr: "\u21D1", rArr: "\u21D2", dArr: "\u21D3", hArr: "\u21D4", forall: "\u2200", part: "\u2202", exist: "\u2203", empty: "\u2205", nabla: "\u2207", isin: "\u2208", notin: "\u2209", ni: "\u220B", prod: "\u220F", sum: "\u2211", minus: "\u2212", lowast: "\u2217", radic: "\u221A", prop: "\u221D", infin: "\u221E", ang: "\u2220", and: "\u2227", or: "\u2228", cap: "\u2229", cup: "\u222A", int: "\u222B", there4: "\u2234", sim: "\u223C", cong: "\u2245", asymp: "\u2248", ne: "\u2260", equiv: "\u2261", le: "\u2264", ge: "\u2265", sub: "\u2282", sup: "\u2283", nsub: "\u2284", sube: "\u2286", supe: "\u2287", oplus: "\u2295", otimes: "\u2297", perp: "\u22A5", sdot: "\u22C5", lceil: "\u2308", rceil: "\u2309", lfloor: "\u230A", rfloor: "\u230B", lang: "\u2329", rang: "\u232A", loz: "\u25CA", spades: "\u2660", clubs: "\u2663", hearts: "\u2665", diams: "\u2666", quot: '"', amp: "&", lt: "<", gt: ">", OElig: "\u0152", oelig: "\u0153", Scaron: "\u0160", scaron: "\u0161", Yuml: "\u0178", circ: "\u02C6", tilde: "\u02DC", ensp: "\u2002", emsp: "\u2003", thinsp: "\u2009", zwnj: "\u200C", zwj: "\u200D", lrm: "\u200E", rlm: "\u200F", ndash: "\u2013", mdash: "\u2014", lsquo: "\u2018", rsquo: "\u2019", sbquo: "\u201A", ldquo: "\u201C", rdquo: "\u201D", bdquo: "\u201E", dagger: "\u2020", Dagger: "\u2021", permil: "\u2030", lsaquo: "\u2039", rsaquo: "\u203A", euro: "\u20AC" }, Yt = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"], ut = {}.hasOwnProperty, be = {};
let ee;
for (ee in le) ut.call(le, ee) && (be[le[ee]] = ee);
const Kt = /[^\dA-Za-z]/;
function er(e, r, t, n) {
  const s = String.fromCharCode(e);
  if (ut.call(be, s)) {
    const a = be[s], o = "&" + a;
    return t && Jt.includes(a) && !Yt.includes(a) && (!n || r && r !== 61 && Kt.test(String.fromCharCode(r))) ? o : o + ";";
  }
  return "";
}
function tr(e, r, t) {
  let n = Xt(e, r, t.omitOptionalSemicolons), s;
  if ((t.useNamedReferences || t.useShortestReferences) && (s = er(e, r, t.omitOptionalSemicolons, t.attribute)), (t.useShortestReferences || !s) && t.useShortestReferences) {
    const a = Qt(e, r, t.omitOptionalSemicolons);
    a.length < n.length && (n = a);
  }
  return s && (!t.useShortestReferences || s.length < n.length) ? s : n;
}
function rr(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function H(e, r) {
  return it(e, Object.assign({ format: tr }, r));
}
function Ls(e, r) {
  return it(e, Object.assign({ format: rr }, r));
}
const Fe = {}.hasOwnProperty;
function nr(e, r) {
  const t = r || {};
  function n(s, ...a) {
    let o = n.invalid;
    const i = n.handlers;
    if (s && Fe.call(s, e)) {
      const u = String(s[e]);
      o = Fe.call(i, u) ? i[u] : n.unknown;
    }
    if (o) return o.call(this, s, ...a);
  }
  return n.handlers = t.handlers || {}, n.invalid = t.invalid, n.unknown = t.unknown, n;
}
function Pe(e, r) {
  const t = String(e);
  if (typeof r != "string") throw new TypeError("Expected character");
  let n = 0, s = t.indexOf(r);
  for (; s !== -1; ) n++, s = t.indexOf(r, s + r.length);
  return n;
}
function Fs(e) {
  const r = String(e || "").trim();
  return r ? r.split(/[ \t\n\r\f]+/g) : [];
}
function sr(e) {
  return e.join(" ").trim();
}
function Ps(e) {
  const r = [], t = String(e || "");
  let n = t.indexOf(","), s = 0, a = false;
  for (; !a; ) {
    n === -1 && (n = t.length, a = true);
    const o = t.slice(s, n).trim();
    (o || !a) && r.push(o), s = n + 1, n = t.indexOf(",", s);
  }
  return r;
}
function ar(e, r) {
  const t = r || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join((t.padRight ? " " : "") + "," + (t.padLeft === false ? "" : " ")).trim();
}
const or = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], ir = /[ \t\n\f\r]/g;
function Se(e) {
  return typeof e == "object" ? e.type === "text" ? Ge(e.value) : false : Ge(e);
}
function Ge(e) {
  return e.replace(ir, "") === "";
}
const ur = /^>|^->|<!--|-->|--!>|<!-$/g, cr = [">"], lr = ["<", ">"];
function fr(e, r, t, n) {
  return n.settings.bogusComments ? "<?" + H(e.value, Object.assign({}, n.settings.characterReferences, { subset: cr })) + ">" : "<!--" + e.value.replace(ur, s) + "-->";
  function s(a) {
    return H(a, Object.assign({}, n.settings.characterReferences, { subset: lr }));
  }
}
function pr(e, r, t, n) {
  return "<!" + (n.settings.upperDoctype ? "DOCTYPE" : "doctype") + (n.settings.tightDoctype ? "" : " ") + "html>";
}
const x = lt(1), ct = lt(-1), dr = [];
function lt(e) {
  return r;
  function r(t, n, s) {
    const a = t ? t.children : dr;
    let o = (n || 0) + e, i = a[o];
    if (!s) for (; i && Se(i); ) o += e, i = a[o];
    return i;
  }
}
const gr = {}.hasOwnProperty;
function ft(e) {
  return r;
  function r(t, n, s) {
    return gr.call(e, t.tagName) && e[t.tagName](t, n, s);
  }
}
const Ne = ft({ body: mr, caption: fe, colgroup: fe, dd: Cr, dt: br, head: fe, html: hr, li: wr, optgroup: xr, option: Er, p: yr, rp: Ue, rt: Ue, tbody: Ar, td: De, tfoot: $r, th: De, thead: kr, tr: Sr });
function fe(e, r, t) {
  const n = x(t, r, true);
  return !n || n.type !== "comment" && !(n.type === "text" && Se(n.value.charAt(0)));
}
function hr(e, r, t) {
  const n = x(t, r);
  return !n || n.type !== "comment";
}
function mr(e, r, t) {
  const n = x(t, r);
  return !n || n.type !== "comment";
}
function yr(e, r, t) {
  const n = x(t, r);
  return n ? n.type === "element" && (n.tagName === "address" || n.tagName === "article" || n.tagName === "aside" || n.tagName === "blockquote" || n.tagName === "details" || n.tagName === "div" || n.tagName === "dl" || n.tagName === "fieldset" || n.tagName === "figcaption" || n.tagName === "figure" || n.tagName === "footer" || n.tagName === "form" || n.tagName === "h1" || n.tagName === "h2" || n.tagName === "h3" || n.tagName === "h4" || n.tagName === "h5" || n.tagName === "h6" || n.tagName === "header" || n.tagName === "hgroup" || n.tagName === "hr" || n.tagName === "main" || n.tagName === "menu" || n.tagName === "nav" || n.tagName === "ol" || n.tagName === "p" || n.tagName === "pre" || n.tagName === "section" || n.tagName === "table" || n.tagName === "ul") : !t || !(t.type === "element" && (t.tagName === "a" || t.tagName === "audio" || t.tagName === "del" || t.tagName === "ins" || t.tagName === "map" || t.tagName === "noscript" || t.tagName === "video"));
}
function wr(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && n.tagName === "li";
}
function br(e, r, t) {
  const n = x(t, r);
  return !!(n && n.type === "element" && (n.tagName === "dt" || n.tagName === "dd"));
}
function Cr(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && (n.tagName === "dt" || n.tagName === "dd");
}
function Ue(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && (n.tagName === "rp" || n.tagName === "rt");
}
function xr(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && n.tagName === "optgroup";
}
function Er(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && (n.tagName === "option" || n.tagName === "optgroup");
}
function kr(e, r, t) {
  const n = x(t, r);
  return !!(n && n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot"));
}
function Ar(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot");
}
function $r(e, r, t) {
  return !x(t, r);
}
function Sr(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && n.tagName === "tr";
}
function De(e, r, t) {
  const n = x(t, r);
  return !n || n.type === "element" && (n.tagName === "td" || n.tagName === "th");
}
const Nr = ft({ body: _r, colgroup: Mr, head: Ir, html: vr, tbody: Or });
function vr(e) {
  const r = x(e, -1);
  return !r || r.type !== "comment";
}
function Ir(e) {
  const r = /* @__PURE__ */ new Set();
  for (const n of e.children) if (n.type === "element" && (n.tagName === "base" || n.tagName === "title")) {
    if (r.has(n.tagName)) return false;
    r.add(n.tagName);
  }
  const t = e.children[0];
  return !t || t.type === "element";
}
function _r(e) {
  const r = x(e, -1, true);
  return !r || r.type !== "comment" && !(r.type === "text" && Se(r.value.charAt(0))) && !(r.type === "element" && (r.tagName === "meta" || r.tagName === "link" || r.tagName === "script" || r.tagName === "style" || r.tagName === "template"));
}
function Mr(e, r, t) {
  const n = ct(t, r), s = x(e, -1, true);
  return t && n && n.type === "element" && n.tagName === "colgroup" && Ne(n, t.children.indexOf(n), t) ? false : !!(s && s.type === "element" && s.tagName === "col");
}
function Or(e, r, t) {
  const n = ct(t, r), s = x(e, -1);
  return t && n && n.type === "element" && (n.tagName === "thead" || n.tagName === "tbody") && Ne(n, t.children.indexOf(n), t) ? false : !!(s && s.type === "element" && s.tagName === "tr");
}
const te = { name: [[`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")], [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]], unquoted: [[`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")], [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]], single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]], double: [['"&'.split(""), "\"&'`".split("")], ['\0"&'.split(""), "\0\"&'`".split("")]] };
function Rr(e, r, t, n) {
  const s = n.schema, a = s.space === "svg" ? false : n.settings.omitOptionalTags;
  let o = s.space === "svg" ? n.settings.closeEmptyElements : n.settings.voids.includes(e.tagName.toLowerCase());
  const i = [];
  let u;
  s.space === "html" && e.tagName === "svg" && (n.schema = ot);
  const c = Lr(n, e.properties), l = n.all(s.space === "html" && e.tagName === "template" ? e.content : e);
  return n.schema = s, l && (o = false), (c || !a || !Nr(e, r, t)) && (i.push("<", e.tagName, c ? " " + c : ""), o && (s.space === "svg" || n.settings.closeSelfClosing) && (u = c.charAt(c.length - 1), (!n.settings.tightSelfClosing || u === "/" || u && u !== '"' && u !== "'") && i.push(" "), i.push("/")), i.push(">")), i.push(l), !o && (!a || !Ne(e, r, t)) && i.push("</" + e.tagName + ">"), i.join("");
}
function Lr(e, r) {
  const t = [];
  let n = -1, s;
  if (r) {
    for (s in r) if (r[s] !== null && r[s] !== void 0) {
      const a = Fr(e, s, r[s]);
      a && t.push(a);
    }
  }
  for (; ++n < t.length; ) {
    const a = e.settings.tightAttributes ? t[n].charAt(t[n].length - 1) : void 0;
    n !== t.length - 1 && a !== '"' && a !== "'" && (t[n] += " ");
  }
  return t.join("");
}
function Fr(e, r, t) {
  const n = Dt(e.schema, r), s = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, a = e.settings.allowDangerousCharacters ? 0 : 1;
  let o = e.quote, i;
  if (n.overloadedBoolean && (t === n.attribute || t === "") ? t = true : (n.boolean || n.overloadedBoolean) && (typeof t != "string" || t === n.attribute || t === "") && (t = !!t), t == null || t === false || typeof t == "number" && Number.isNaN(t)) return "";
  const u = H(n.attribute, Object.assign({}, e.settings.characterReferences, { subset: te.name[s][a] }));
  return t === true || (t = Array.isArray(t) ? (n.commaSeparated ? ar : sr)(t, { padLeft: !e.settings.tightCommaSeparatedLists }) : String(t), e.settings.collapseEmptyAttributes && !t) ? u : (e.settings.preferUnquoted && (i = H(t, Object.assign({}, e.settings.characterReferences, { attribute: true, subset: te.unquoted[s][a] }))), i !== t && (e.settings.quoteSmart && Pe(t, o) > Pe(t, e.alternative) && (o = e.alternative), i = o + H(t, Object.assign({}, e.settings.characterReferences, { subset: (o === "'" ? te.single : te.double)[s][a], attribute: true })) + o), u + (i && "=" + i));
}
const Pr = ["<", "&"];
function pt(e, r, t, n) {
  return t && t.type === "element" && (t.tagName === "script" || t.tagName === "style") ? e.value : H(e.value, Object.assign({}, n.settings.characterReferences, { subset: Pr }));
}
function Gr(e, r, t, n) {
  return n.settings.allowDangerousHtml ? e.value : pt(e, r, t, n);
}
function Ur(e, r, t, n) {
  return n.all(e);
}
const Dr = nr("type", { invalid: Tr, unknown: Br, handlers: { comment: fr, doctype: pr, element: Rr, raw: Gr, root: Ur, text: pt } });
function Tr(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function Br(e) {
  const r = e;
  throw new Error("Cannot compile unknown node `" + r.type + "`");
}
const zr = {}, jr = {}, qr = [];
function Gs(e, r) {
  const t = r || zr, n = t.quote || '"', s = n === '"' ? "'" : '"';
  if (n !== '"' && n !== "'") throw new Error("Invalid quote `" + n + "`, expected `'` or `\"`");
  return { one: Vr, all: Hr, settings: { omitOptionalTags: t.omitOptionalTags || false, allowParseErrors: t.allowParseErrors || false, allowDangerousCharacters: t.allowDangerousCharacters || false, quoteSmart: t.quoteSmart || false, preferUnquoted: t.preferUnquoted || false, tightAttributes: t.tightAttributes || false, upperDoctype: t.upperDoctype || false, tightDoctype: t.tightDoctype || false, bogusComments: t.bogusComments || false, tightCommaSeparatedLists: t.tightCommaSeparatedLists || false, tightSelfClosing: t.tightSelfClosing || false, collapseEmptyAttributes: t.collapseEmptyAttributes || false, allowDangerousHtml: t.allowDangerousHtml || false, voids: t.voids || or, characterReferences: t.characterReferences || jr, closeSelfClosing: t.closeSelfClosing || false, closeEmptyElements: t.closeEmptyElements || false }, schema: t.space === "svg" ? ot : Tt, quote: n, alternative: s }.one(Array.isArray(e) ? { type: "root", children: e } : e, void 0, void 0);
}
function Vr(e, r, t) {
  return Dr(e, r, t, this);
}
function Hr(e) {
  const r = [], t = e && e.children || qr;
  let n = -1;
  for (; ++n < t.length; ) r[n] = this.one(t[n], n, e);
  return r.join("");
}
function W(e) {
  if ([...e].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
  return e.codePointAt(0);
}
function Wr(e, r, t) {
  return e.has(r) || e.set(r, t), e.get(r);
}
const ve = /* @__PURE__ */ new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]), E = String.raw;
function X(e, r) {
  if (e == null) throw new Error(r ?? "Value expected");
  return e;
}
const dt = E`\[\^?`, gt = `c.? | C(?:-.?)?|${E`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${E`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${E`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${E`o\{[^\}]*\}?`}|${E`\d{1,3}`}`, Ie = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, re = new RegExp(E`
  \\ (?:
    ${gt}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${Ie.source})+
  | ${dt}
  | .
`.replace(/\s+/g, ""), "gsu"), pe = new RegExp(E`
  \\ (?:
    ${gt}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${dt}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function Xr(e, r = {}) {
  const t = { flags: "", ...r, rules: { captureGroup: false, singleline: false, ...r.rules } };
  if (typeof e != "string") throw new Error("String expected as pattern");
  const n = gn(t.flags), s = [n.extended], a = { captureGroup: t.rules.captureGroup, getCurrentModX() {
    return s.at(-1);
  }, numOpenGroups: 0, popModX() {
    s.pop();
  }, pushModX(f) {
    s.push(f);
  }, replaceCurrentModX(f) {
    s[s.length - 1] = f;
  }, singleline: t.rules.singleline };
  let o = [], i;
  for (re.lastIndex = 0; i = re.exec(e); ) {
    const f = Zr(a, e, i[0], re.lastIndex);
    f.tokens ? o.push(...f.tokens) : f.token && o.push(f.token), f.lastIndex !== void 0 && (re.lastIndex = f.lastIndex);
  }
  const u = [];
  let c = 0;
  o.filter((f) => f.type === "GroupOpen").forEach((f) => {
    f.kind === "capturing" ? f.number = ++c : f.raw === "(" && u.push(f);
  }), c || u.forEach((f, p) => {
    f.kind = "capturing", f.number = p + 1;
  });
  const l = c || u.length;
  return { tokens: o.map((f) => f.type === "EscapedNumber" ? mn(f, l) : f).flat(), flags: n };
}
function Zr(e, r, t, n) {
  const [s, a] = t;
  if (t === "[" || t === "[^") {
    const o = Qr(r, t, n);
    return { tokens: o.tokens, lastIndex: o.lastIndex };
  }
  if (s === "\\") {
    if ("AbBGyYzZ".includes(a)) return { token: Te(t, t) };
    if (/^\\g[<']/.test(t)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
      return { token: on(t) };
    }
    if (/^\\k[<']/.test(t)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
      return { token: mt(t) };
    }
    if (a === "K") return { token: yt("keep", t) };
    if (a === "N" || a === "R") return { token: U("newline", t, { negate: a === "N" }) };
    if (a === "O") return { token: U("any", t) };
    if (a === "X") return { token: U("text_segment", t) };
    const o = ht(t, { inCharClass: false });
    return Array.isArray(o) ? { tokens: o } : { token: o };
  }
  if (s === "(") {
    if (a === "*") return { token: fn(t) };
    if (t === "(?{") throw new Error(`Unsupported callout "${t}"`);
    if (t.startsWith("(?#")) {
      if (r[n] !== ")") throw new Error('Unclosed comment group "(?#"');
      return { lastIndex: n + 1 };
    }
    if (/^\(\?[-imx]+[:)]$/.test(t)) return { token: ln(t, e) };
    if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, t === "(" && !e.captureGroup || t === "(?:") return { token: q("group", t) };
    if (t === "(?>") return { token: q("atomic", t) };
    if (t === "(?=" || t === "(?!" || t === "(?<=" || t === "(?<!") return { token: q(t[2] === "<" ? "lookbehind" : "lookahead", t, { negate: t.endsWith("!") }) };
    if (t === "(" && e.captureGroup || t.startsWith("(?<") && t.endsWith(">") || t.startsWith("(?'") && t.endsWith("'")) return { token: q("capturing", t, { ...t !== "(" && { name: t.slice(3, -1) } }) };
    if (t.startsWith("(?~")) {
      if (t === "(?~|") throw new Error(`Unsupported absence function kind "${t}"`);
      return { token: q("absence_repeater", t) };
    }
    throw t === "(?(" ? new Error(`Unsupported conditional "${t}"`) : new Error(`Invalid or unsupported group option "${t}"`);
  }
  if (t === ")") {
    if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error('Unmatched ")"');
    return { token: nn(t) };
  }
  if (e.getCurrentModX()) {
    if (t === "#") {
      const o = r.indexOf(`
`, n);
      return { lastIndex: o === -1 ? r.length : o };
    }
    if (/^\s$/.test(t)) {
      const o = /\s+/y;
      return o.lastIndex = n, { lastIndex: o.exec(r) ? o.lastIndex : n };
    }
  }
  if (t === ".") return { token: U("dot", t) };
  if (t === "^" || t === "$") {
    const o = e.singleline ? { "^": E`\A`, $: E`\Z` }[t] : t;
    return { token: Te(o, t) };
  }
  return t === "|" ? { token: Yr(t) } : Ie.test(t) ? { tokens: yn(t) } : { token: O(W(t), t) };
}
function Qr(e, r, t) {
  const n = [Be(r[1] === "^", r)];
  let s = 1, a;
  for (pe.lastIndex = t; a = pe.exec(e); ) {
    const o = a[0];
    if (o[0] === "[" && o[1] !== ":") s++, n.push(Be(o[1] === "^", o));
    else if (o === "]") {
      if (n.at(-1).type === "CharacterClassOpen") n.push(O(93, o));
      else if (s--, n.push(Kr(o)), !s) break;
    } else {
      const i = Jr(o);
      Array.isArray(i) ? n.push(...i) : n.push(i);
    }
  }
  return { tokens: n, lastIndex: pe.lastIndex || e.length };
}
function Jr(e) {
  if (e[0] === "\\") return ht(e, { inCharClass: true });
  if (e[0] === "[") {
    const r = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
    if (!r || !ve.has(r.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
    return U("posix", e, { value: r.groups.name, negate: !!r.groups.negate });
  }
  return e === "-" ? en(e) : e === "&&" ? tn(e) : O(W(e), e);
}
function ht(e, { inCharClass: r }) {
  const t = e[1];
  if (t === "c" || t === "C") return cn(e);
  if ("dDhHsSwW".includes(t)) return pn(e);
  if (e.startsWith(E`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
  if (/^\\[pP]\{/.test(e)) {
    if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
    return dn(e);
  }
  if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(e)) try {
    const n = e.split(/\\x/).slice(1).map((o) => parseInt(o, 16)), s = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }).decode(new Uint8Array(n)), a = new TextEncoder();
    return [...s].map((o) => {
      const i = [...a.encode(o)].map((u) => `\\x${u.toString(16)}`).join("");
      return O(W(o), i);
    });
  } catch {
    throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
  }
  if (t === "u" || t === "x") return O(hn(e), e);
  if (ze.has(t)) return O(ze.get(t), e);
  if (/\d/.test(t)) return rn(r, e);
  if (e === "\\") throw new Error(E`Incomplete escape "\"`);
  if (t === "M") throw new Error(`Unsupported meta "${e}"`);
  if ([...e].length === 2) return O(e.codePointAt(1), e);
  throw new Error(`Unexpected escape "${e}"`);
}
function Yr(e) {
  return { type: "Alternator", raw: e };
}
function Te(e, r) {
  return { type: "Assertion", kind: e, raw: r };
}
function mt(e) {
  return { type: "Backreference", raw: e };
}
function O(e, r) {
  return { type: "Character", value: e, raw: r };
}
function Kr(e) {
  return { type: "CharacterClassClose", raw: e };
}
function en(e) {
  return { type: "CharacterClassHyphen", raw: e };
}
function tn(e) {
  return { type: "CharacterClassIntersector", raw: e };
}
function Be(e, r) {
  return { type: "CharacterClassOpen", negate: e, raw: r };
}
function U(e, r, t = {}) {
  return { type: "CharacterSet", kind: e, ...t, raw: r };
}
function yt(e, r, t = {}) {
  return e === "keep" ? { type: "Directive", kind: e, raw: r } : { type: "Directive", kind: e, flags: X(t.flags), raw: r };
}
function rn(e, r) {
  return { type: "EscapedNumber", inCharClass: e, raw: r };
}
function nn(e) {
  return { type: "GroupClose", raw: e };
}
function q(e, r, t = {}) {
  return { type: "GroupOpen", kind: e, ...t, raw: r };
}
function sn(e, r, t, n) {
  return { type: "NamedCallout", kind: e, tag: r, arguments: t, raw: n };
}
function an(e, r, t, n) {
  return { type: "Quantifier", kind: e, min: r, max: t, raw: n };
}
function on(e) {
  return { type: "Subroutine", raw: e };
}
const un = /* @__PURE__ */ new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]), ze = /* @__PURE__ */ new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function cn(e) {
  const r = e[1] === "c" ? e[2] : e[3];
  if (!r || !/[A-Za-z]/.test(r)) throw new Error(`Unsupported control character "${e}"`);
  return O(W(r.toUpperCase()) - 64, e);
}
function ln(e, r) {
  let { on: t, off: n } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
  n ?? (n = "");
  const s = (r.getCurrentModX() || t.includes("x")) && !n.includes("x"), a = qe(t), o = qe(n), i = {};
  if (a && (i.enable = a), o && (i.disable = o), e.endsWith(")")) return r.replaceCurrentModX(s), yt("flags", e, { flags: i });
  if (e.endsWith(":")) return r.pushModX(s), r.numOpenGroups++, q("group", e, { ...(a || o) && { flags: i } });
  throw new Error(`Unexpected flag modifier "${e}"`);
}
function fn(e) {
  const r = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
  if (!r) throw new Error(`Incomplete or invalid named callout "${e}"`);
  const { name: t, tag: n, args: s } = r.groups;
  if (!t) throw new Error(`Invalid named callout "${e}"`);
  if (n === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
  const a = s ? s.split(",").filter((l) => l !== "").map((l) => /^[+-]?\d+$/.test(l) ? +l : l) : [], [o, i, u] = a, c = un.has(t) ? t.toLowerCase() : "custom";
  switch (c) {
    case "fail":
    case "mismatch":
    case "skip":
      if (a.length > 0) throw new Error(`Named callout arguments not allowed "${a}"`);
      break;
    case "error":
      if (a.length > 1) throw new Error(`Named callout allows only one argument "${a}"`);
      if (typeof o == "string") throw new Error(`Named callout argument must be a number "${o}"`);
      break;
    case "max":
      if (!a.length || a.length > 2) throw new Error(`Named callout must have one or two arguments "${a}"`);
      if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
      if (a.length === 2 && (typeof i == "number" || !/^[<>X]$/.test(i))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${i}"`);
      break;
    case "count":
    case "total_count":
      if (a.length > 1) throw new Error(`Named callout allows only one argument "${a}"`);
      if (a.length === 1 && (typeof o == "number" || !/^[<>X]$/.test(o))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${o}"`);
      break;
    case "cmp":
      if (a.length !== 3) throw new Error(`Named callout must have three arguments "${a}"`);
      if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
      if (typeof i == "number" || !/^(?:[<>!=]=|[<>])$/.test(i)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i}"`);
      if (typeof u == "string" && !/^[A-Za-z_]\w*$/.test(u)) throw new Error(`Named callout argument three must be a tag or number "${u}"`);
      break;
    case "custom":
      throw new Error(`Undefined callout name "${t}"`);
    default:
      throw new Error(`Unexpected named callout kind "${c}"`);
  }
  return sn(c, n ?? null, (s == null ? void 0 : s.split(",")) ?? null, e);
}
function je(e) {
  let r = null, t, n;
  if (e[0] === "{") {
    const { minStr: s, maxStr: a } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, o = 1e5;
    if (+s > o || a && +a > o) throw new Error("Quantifier value unsupported in Oniguruma");
    if (t = +s, n = a === void 0 ? +s : a === "" ? 1 / 0 : +a, t > n && (r = "possessive", [t, n] = [n, t]), e.endsWith("?")) {
      if (r === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
      r = "lazy";
    } else r || (r = "greedy");
  } else t = e[0] === "+" ? 1 : 0, n = e[0] === "?" ? 1 : 1 / 0, r = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
  return an(r, t, n, e);
}
function pn(e) {
  const r = e[1].toLowerCase();
  return U({ d: "digit", h: "hex", s: "space", w: "word" }[r], e, { negate: e[1] !== r });
}
function dn(e) {
  const { p: r, neg: t, value: n } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
  return U("property", e, { value: n, negate: r === "P" && !t || r === "p" && !!t });
}
function qe(e) {
  const r = {};
  return e.includes("i") && (r.ignoreCase = true), e.includes("m") && (r.dotAll = true), e.includes("x") && (r.extended = true), Object.keys(r).length ? r : null;
}
function gn(e) {
  const r = { ignoreCase: false, dotAll: false, extended: false, digitIsAscii: false, posixIsAscii: false, spaceIsAscii: false, wordIsAscii: false, textSegmentMode: null };
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (!"imxDPSWy".includes(n)) throw new Error(`Invalid flag "${n}"`);
    if (n === "y") {
      if (!/^y{[gw]}/.test(e.slice(t))) throw new Error('Invalid or unspecified flag "y" mode');
      r.textSegmentMode = e[t + 2] === "g" ? "grapheme" : "word", t += 3;
      continue;
    }
    r[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[n]] = true;
  }
  return r;
}
function hn(e) {
  if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
  const r = e[2] === "{" ? new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(e).groups.hex : e.slice(2);
  return parseInt(r, 16);
}
function mn(e, r) {
  const { raw: t, inCharClass: n } = e, s = t.slice(1);
  if (!n && (s !== "0" && s.length === 1 || s[0] !== "0" && +s <= r)) return [mt(t)];
  const a = [], o = s.match(/^[0-7]+|\d/g);
  for (let i = 0; i < o.length; i++) {
    const u = o[i];
    let c;
    if (i === 0 && u !== "8" && u !== "9") {
      if (c = parseInt(u, 8), c > 127) throw new Error(E`Octal encoded byte above 177 unsupported "${t}"`);
    } else c = W(u);
    a.push(O(c, (i === 0 ? "\\" : "") + u));
  }
  return a;
}
function yn(e) {
  const r = [], t = new RegExp(Ie, "gy");
  let n;
  for (; n = t.exec(e); ) {
    const s = n[0];
    if (s[0] === "{") {
      const a = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s);
      if (a) {
        const { min: o, max: i } = a.groups;
        if (+o > +i && s.endsWith("?")) {
          t.lastIndex--, r.push(je(s.slice(0, -1)));
          continue;
        }
      }
    }
    r.push(je(s));
  }
  return r;
}
function wt(e, r) {
  if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
  if (e.body.length !== 1) return false;
  const t = e.body[0];
  return !r || Object.keys(r).every((n) => r[n] === t[n]);
}
function wn(e) {
  return bn.has(e.type);
}
const bn = /* @__PURE__ */ new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function bt(e, r = {}) {
  const t = { flags: "", normalizeUnknownPropertyNames: false, skipBackrefValidation: false, skipLookbehindValidation: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r, rules: { captureGroup: false, singleline: false, ...r.rules } }, n = Xr(e, { flags: t.flags, rules: { captureGroup: t.rules.captureGroup, singleline: t.rules.singleline } }), s = (p, g) => {
    const d = n.tokens[a.nextIndex];
    switch (a.parent = p, a.nextIndex++, d.type) {
      case "Alternator":
        return D();
      case "Assertion":
        return Cn(d);
      case "Backreference":
        return xn(d, a);
      case "Character":
        return ie(d.value, { useLastValid: !!g.isCheckingRangeEnd });
      case "CharacterClassHyphen":
        return En(d, a, g);
      case "CharacterClassOpen":
        return kn(d, a, g);
      case "CharacterSet":
        return An(d, a);
      case "Directive":
        return _n(d.kind, { flags: d.flags });
      case "GroupOpen":
        return $n(d, a, g);
      case "NamedCallout":
        return On(d.kind, d.tag, d.arguments);
      case "Quantifier":
        return Sn(d, a);
      case "Subroutine":
        return Nn(d, a);
      default:
        throw new Error(`Unexpected token type "${d.type}"`);
    }
  }, a = { capturingGroups: [], hasNumberedRef: false, namedGroupsByName: /* @__PURE__ */ new Map(), nextIndex: 0, normalizeUnknownPropertyNames: t.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: t.skipBackrefValidation, skipLookbehindValidation: t.skipLookbehindValidation, skipPropertyNameValidation: t.skipPropertyNameValidation, subroutines: [], tokens: n.tokens, unicodePropertyMap: t.unicodePropertyMap, walk: s }, o = Ln(Mn(n.flags));
  let i = o.body[0];
  for (; a.nextIndex < n.tokens.length; ) {
    const p = s(i, {});
    p.type === "Alternative" ? (o.body.push(p), i = p) : i.body.push(p);
  }
  const { capturingGroups: u, hasNumberedRef: c, namedGroupsByName: l, subroutines: f } = a;
  if (c && l.size && !t.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
  for (const { ref: p } of f) if (typeof p == "number") {
    if (p > u.length) throw new Error("Subroutine uses a group number that's not defined");
    p && (u[p - 1].isSubroutined = true);
  } else if (l.has(p)) {
    if (l.get(p).length > 1) throw new Error(E`Subroutine uses a duplicate group name "\g<${p}>"`);
    l.get(p)[0].isSubroutined = true;
  } else throw new Error(E`Subroutine uses a group name that's not defined "\g<${p}>"`);
  return o;
}
function Cn({ kind: e }) {
  return Ce(X({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[e], `Unexpected assertion kind "${e}"`), { negate: e === E`\B` || e === E`\Y` });
}
function xn({ raw: e }, r) {
  const t = /^\\k[<']/.test(e), n = t ? e.slice(3, -1) : e.slice(1), s = (a, o = false) => {
    const i = r.capturingGroups.length;
    let u = false;
    if (a > i) if (r.skipBackrefValidation) u = true;
    else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
    return r.hasNumberedRef = true, xe(o ? i + 1 - a : a, { orphan: u });
  };
  if (t) {
    const a = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(n);
    if (a) return s(+a.groups.num, !!a.groups.sign);
    if (/[-+]/.test(n)) throw new Error(`Invalid backref name "${e}"`);
    if (!r.namedGroupsByName.has(n)) throw new Error(`Group name not defined to the left "${e}"`);
    return xe(n);
  }
  return s(+n);
}
function En(e, r, t) {
  const { tokens: n, walk: s } = r, a = r.parent, o = a.body.at(-1), i = n[r.nextIndex];
  if (!t.isCheckingRangeEnd && o && o.type !== "CharacterClass" && o.type !== "CharacterClassRange" && i && i.type !== "CharacterClassOpen" && i.type !== "CharacterClassClose" && i.type !== "CharacterClassIntersector") {
    const u = s(a, { ...t, isCheckingRangeEnd: true });
    if (o.type === "Character" && u.type === "Character") return a.body.pop(), In(o, u);
    throw new Error("Invalid character class range");
  }
  return ie(W("-"));
}
function kn({ negate: e }, r, t) {
  const { tokens: n, walk: s } = r, a = n[r.nextIndex], o = [ae()];
  let i = We(a);
  for (; i.type !== "CharacterClassClose"; ) {
    if (i.type === "CharacterClassIntersector") o.push(ae()), r.nextIndex++;
    else {
      const c = o.at(-1);
      c.body.push(s(c, t));
    }
    i = We(n[r.nextIndex], a);
  }
  const u = ae({ negate: e });
  return o.length === 1 ? u.body = o[0].body : (u.kind = "intersection", u.body = o.map((c) => c.body.length === 1 ? c.body[0] : c)), r.nextIndex++, u;
}
function An({ kind: e, negate: r, value: t }, n) {
  const { normalizeUnknownPropertyNames: s, skipPropertyNameValidation: a, unicodePropertyMap: o } = n;
  if (e === "property") {
    const i = ue(t);
    if (ve.has(i) && !(o == null ? void 0 : o.has(i))) e = "posix", t = i;
    else return V(t, { negate: r, normalizeUnknownPropertyNames: s, skipPropertyNameValidation: a, unicodePropertyMap: o });
  }
  return e === "posix" ? Rn(t, { negate: r }) : Ee(e, { negate: r });
}
function $n(e, r, t) {
  const { tokens: n, capturingGroups: s, namedGroupsByName: a, skipLookbehindValidation: o, walk: i } = r, u = Fn(e), c = u.type === "AbsenceFunction", l = He(u), f = l && u.negate;
  if (u.type === "CapturingGroup" && (s.push(u), u.name && Wr(a, u.name, []).push(u)), c && t.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
  let p = Xe(n[r.nextIndex]);
  for (; p.type !== "GroupClose"; ) {
    if (p.type === "Alternator") u.body.push(D()), r.nextIndex++;
    else {
      const g = u.body.at(-1), d = i(g, { ...t, isInAbsenceFunction: t.isInAbsenceFunction || c, isInLookbehind: t.isInLookbehind || l, isInNegLookbehind: t.isInNegLookbehind || f });
      if (g.body.push(d), (l || t.isInLookbehind) && !o) {
        const m = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (f || t.isInNegLookbehind) {
          if (Ve(d) || d.type === "CapturingGroup") throw new Error(m);
        } else if (Ve(d) || He(d) && d.negate) throw new Error(m);
      }
    }
    p = Xe(n[r.nextIndex]);
  }
  return r.nextIndex++, u;
}
function Sn({ kind: e, min: r, max: t }, n) {
  const s = n.parent, a = s.body.at(-1);
  if (!a || !wn(a)) throw new Error("Quantifier requires a repeatable token");
  const o = xt(e, r, t, a);
  return s.body.pop(), o;
}
function Nn({ raw: e }, r) {
  const { capturingGroups: t, subroutines: n } = r;
  let s = e.slice(3, -1);
  const a = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(s);
  if (a) {
    const i = +a.groups.num, u = t.length;
    if (r.hasNumberedRef = true, s = { "": i, "+": u + i, "-": u + 1 - i }[a.groups.sign], s < 1) throw new Error("Invalid subroutine number");
  } else s === "0" && (s = 0);
  const o = Et(s);
  return n.push(o), o;
}
function vn(e, r) {
  return { type: "AbsenceFunction", kind: e, body: Y(r == null ? void 0 : r.body) };
}
function D(e) {
  return { type: "Alternative", body: kt(e == null ? void 0 : e.body) };
}
function Ce(e, r) {
  const t = { type: "Assertion", kind: e };
  return (e === "word_boundary" || e === "text_segment_boundary") && (t.negate = !!(r == null ? void 0 : r.negate)), t;
}
function xe(e, r) {
  const t = !!(r == null ? void 0 : r.orphan);
  return { type: "Backreference", ref: e, ...t && { orphan: t } };
}
function Ct(e, r) {
  const t = { name: void 0, isSubroutined: false, ...r };
  if (t.name !== void 0 && !Pn(t.name)) throw new Error(`Group name "${t.name}" invalid in Oniguruma`);
  return { type: "CapturingGroup", number: e, ...t.name && { name: t.name }, ...t.isSubroutined && { isSubroutined: t.isSubroutined }, body: Y(r == null ? void 0 : r.body) };
}
function ie(e, r) {
  const t = { useLastValid: false, ...r };
  if (e > 1114111) {
    const n = e.toString(16);
    if (t.useLastValid) e = 1114111;
    else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${n}}"`) : new Error(`Invalid code point out of range in JS "\\x{${n}}"`);
  }
  return { type: "Character", value: e };
}
function ae(e) {
  const r = { kind: "union", negate: false, ...e };
  return { type: "CharacterClass", kind: r.kind, negate: r.negate, body: kt(e == null ? void 0 : e.body) };
}
function In(e, r) {
  if (r.value < e.value) throw new Error("Character class range out of order");
  return { type: "CharacterClassRange", min: e, max: r };
}
function Ee(e, r) {
  const t = !!(r == null ? void 0 : r.negate), n = { type: "CharacterSet", kind: e };
  return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (n.negate = t), (e === "text_segment" || e === "newline" && !t) && (n.variableLength = true), n;
}
function _n(e, r = {}) {
  if (e === "keep") return { type: "Directive", kind: e };
  if (e === "flags") return { type: "Directive", kind: e, flags: X(r.flags) };
  throw new Error(`Unexpected directive kind "${e}"`);
}
function Mn(e) {
  return { type: "Flags", ...e };
}
function I(e) {
  const r = e == null ? void 0 : e.atomic, t = e == null ? void 0 : e.flags;
  if (r && t) throw new Error("Atomic group cannot have flags");
  return { type: "Group", ...r && { atomic: r }, ...t && { flags: t }, body: Y(e == null ? void 0 : e.body) };
}
function G(e) {
  const r = { behind: false, negate: false, ...e };
  return { type: "LookaroundAssertion", kind: r.behind ? "lookbehind" : "lookahead", negate: r.negate, body: Y(e == null ? void 0 : e.body) };
}
function On(e, r, t) {
  return { type: "NamedCallout", kind: e, tag: r, arguments: t };
}
function Rn(e, r) {
  const t = !!(r == null ? void 0 : r.negate);
  if (!ve.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
  return { type: "CharacterSet", kind: "posix", value: e, negate: t };
}
function xt(e, r, t, n) {
  if (r > t) throw new Error("Invalid reversed quantifier range");
  return { type: "Quantifier", kind: e, min: r, max: t, body: n };
}
function Ln(e, r) {
  return { type: "Regex", body: Y(r == null ? void 0 : r.body), flags: e };
}
function Et(e) {
  return { type: "Subroutine", ref: e };
}
function V(e, r) {
  var _a2;
  const t = { negate: false, normalizeUnknownPropertyNames: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r };
  let n = (_a2 = t.unicodePropertyMap) == null ? void 0 : _a2.get(ue(e));
  if (!n) {
    if (t.normalizeUnknownPropertyNames) n = Gn(e);
    else if (t.unicodePropertyMap && !t.skipPropertyNameValidation) throw new Error(E`Invalid Unicode property "\p{${e}}"`);
  }
  return { type: "CharacterSet", kind: "property", value: n ?? e, negate: t.negate };
}
function Fn({ flags: e, kind: r, name: t, negate: n, number: s }) {
  switch (r) {
    case "absence_repeater":
      return vn("repeater");
    case "atomic":
      return I({ atomic: true });
    case "capturing":
      return Ct(s, { name: t });
    case "group":
      return I({ flags: e });
    case "lookahead":
    case "lookbehind":
      return G({ behind: r === "lookbehind", negate: n });
    default:
      throw new Error(`Unexpected group kind "${r}"`);
  }
}
function Y(e) {
  if (e === void 0) e = [D()];
  else if (!Array.isArray(e) || !e.length || !e.every((r) => r.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
  return e;
}
function kt(e) {
  if (e === void 0) e = [];
  else if (!Array.isArray(e) || !e.every((r) => !!r.type)) throw new Error("Invalid body; expected array of nodes");
  return e;
}
function Ve(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookahead";
}
function He(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
}
function Pn(e) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
}
function Gn(e) {
  return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (r) => r[0].toUpperCase() + r.slice(1).toLowerCase());
}
function ue(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}
function We(e, r) {
  return X(e, `${(r == null ? void 0 : r.type) === "Character" && r.value === 93 ? "Empty" : "Unclosed"} character class`);
}
function Xe(e) {
  return X(e, "Unclosed group");
}
function Q(e, r, t = null) {
  function n(a, o) {
    for (let i = 0; i < a.length; i++) {
      const u = s(a[i], o, i, a);
      i = Math.max(-1, i + u);
    }
  }
  function s(a, o = null, i = null, u = null) {
    var _a2, _b;
    let c = 0, l = false;
    const f = { node: a, parent: o, key: i, container: u, root: e, remove() {
      ne(u).splice(Math.max(0, z(i) + c), 1), c--, l = true;
    }, removeAllNextSiblings() {
      return ne(u).splice(z(i) + 1);
    }, removeAllPrevSiblings() {
      const w = z(i) + c;
      return c -= w, ne(u).splice(0, Math.max(0, w));
    }, replaceWith(w, A = {}) {
      const $ = !!A.traverse;
      u ? u[Math.max(0, z(i) + c)] = w : X(o, "Can't replace root node")[i] = w, $ && s(w, o, i, u), l = true;
    }, replaceWithMultiple(w, A = {}) {
      const $ = !!A.traverse;
      if (ne(u).splice(Math.max(0, z(i) + c), 1, ...w), c += w.length - 1, $) {
        let k = 0;
        for (let S = 0; S < w.length; S++) k += s(w[S], o, z(i) + S + k, u);
      }
      l = true;
    }, skip() {
      l = true;
    } }, { type: p } = a, g = r["*"], d = r[p], m = typeof g == "function" ? g : g == null ? void 0 : g.enter, y = typeof d == "function" ? d : d == null ? void 0 : d.enter;
    if (m == null ? void 0 : m(f, t), y == null ? void 0 : y(f, t), !l) switch (p) {
      case "AbsenceFunction":
      case "CapturingGroup":
      case "Group":
        n(a.body, a);
        break;
      case "Alternative":
      case "CharacterClass":
        n(a.body, a);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        s(a.min, a, "min"), s(a.max, a, "max");
        break;
      case "LookaroundAssertion":
        n(a.body, a);
        break;
      case "Quantifier":
        s(a.body, a, "body");
        break;
      case "Regex":
        n(a.body, a), s(a.flags, a, "flags");
        break;
      default:
        throw new Error(`Unexpected node type "${p}"`);
    }
    return (_a2 = d == null ? void 0 : d.exit) == null ? void 0 : _a2.call(d, f, t), (_b = g == null ? void 0 : g.exit) == null ? void 0 : _b.call(g, f, t), c;
  }
  return s(e), e;
}
function ne(e) {
  if (!Array.isArray(e)) throw new Error("Container expected");
  return e;
}
function z(e) {
  if (typeof e != "number") throw new Error("Numeric key expected");
  return e;
}
const Un = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function Dn(e, r) {
  for (let t = 0; t < e.length; t++) e[t] >= r && e[t]++;
}
function Tn(e, r, t, n) {
  return e.slice(0, r) + n + e.slice(r + t.length);
}
const v = Object.freeze({ DEFAULT: "DEFAULT", CHAR_CLASS: "CHAR_CLASS" });
function _e(e, r, t, n) {
  const s = new RegExp(String.raw`${r}|(?<$skip>\[\^?|\\?.)`, "gsu"), a = [false];
  let o = 0, i = "";
  for (const u of e.matchAll(s)) {
    const { 0: c, groups: { $skip: l } } = u;
    if (!l && (!n || n === v.DEFAULT == !o)) {
      t instanceof Function ? i += t(u, { context: o ? v.CHAR_CLASS : v.DEFAULT, negated: a[a.length - 1] }) : i += t;
      continue;
    }
    c[0] === "[" ? (o++, a.push(c[1] === "^")) : c === "]" && o && (o--, a.pop()), i += c;
  }
  return i;
}
function At(e, r, t, n) {
  _e(e, r, t, n);
}
function Bn(e, r, t = 0, n) {
  if (!new RegExp(r, "su").test(e)) return null;
  const s = new RegExp(`${r}|(?<$skip>\\\\?.)`, "gsu");
  s.lastIndex = t;
  let a = 0, o;
  for (; o = s.exec(e); ) {
    const { 0: i, groups: { $skip: u } } = o;
    if (!u && (!n || n === v.DEFAULT == !a)) return o;
    i === "[" ? a++ : i === "]" && a && a--, s.lastIndex == o.index && s.lastIndex++;
  }
  return null;
}
function se(e, r, t) {
  return !!Bn(e, r, 0, t);
}
function zn(e, r) {
  const t = /\\?./gsu;
  t.lastIndex = r;
  let n = e.length, s = 0, a = 1, o;
  for (; o = t.exec(e); ) {
    const [i] = o;
    if (i === "[") s++;
    else if (s) i === "]" && s--;
    else if (i === "(") a++;
    else if (i === ")" && (a--, !a)) {
      n = o.index;
      break;
    }
  }
  return e.slice(r, n);
}
const Ze = new RegExp(String.raw`(?<noncapturingStart>${Un})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
function jn(e, r) {
  const t = (r == null ? void 0 : r.hiddenCaptures) ?? [];
  let n = (r == null ? void 0 : r.captureTransfers) ?? /* @__PURE__ */ new Map();
  if (!/\(\?>/.test(e)) return { pattern: e, captureTransfers: n, hiddenCaptures: t };
  const s = "(?>", a = "(?:(?=(", o = [0], i = [];
  let u = 0, c = 0, l = NaN, f;
  do {
    f = false;
    let p = 0, g = 0, d = false, m;
    for (Ze.lastIndex = Number.isNaN(l) ? 0 : l + a.length; m = Ze.exec(e); ) {
      const { 0: y, index: w, groups: { capturingStart: A, noncapturingStart: $ } } = m;
      if (y === "[") p++;
      else if (p) y === "]" && p--;
      else if (y === s && !d) l = w, d = true;
      else if (d && $) g++;
      else if (A) d ? g++ : (u++, o.push(u + c));
      else if (y === ")" && d) {
        if (!g) {
          c++;
          const k = u + c;
          if (e = `${e.slice(0, l)}${a}${e.slice(l + s.length, w)}))<$$${k}>)${e.slice(w + 1)}`, f = true, i.push(k), Dn(t, k), n.size) {
            const S = /* @__PURE__ */ new Map();
            n.forEach((K, T) => {
              S.set(T >= k ? T + 1 : T, K.map((B) => B >= k ? B + 1 : B));
            }), n = S;
          }
          break;
        }
        g--;
      }
    }
  } while (f);
  return t.push(...i), e = _e(e, String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({ 0: p, groups: { backrefNum: g, wrappedBackrefNum: d } }) => {
    if (g) {
      const m = +g;
      if (m > o.length - 1) throw new Error(`Backref "${p}" greater than number of captures`);
      return `\\${o[m]}`;
    }
    return `\\${d}`;
  }, v.DEFAULT), { pattern: e, captureTransfers: n, hiddenCaptures: t };
}
const $t = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, de = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${$t})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
function qn(e) {
  if (!new RegExp(`${$t}\\+`).test(e)) return { pattern: e };
  const r = [];
  let t = null, n = null, s = "", a = 0, o;
  for (de.lastIndex = 0; o = de.exec(e); ) {
    const { 0: i, index: u, groups: { qBase: c, qMod: l, invalidQ: f } } = o;
    if (i === "[") a || (n = u), a++;
    else if (i === "]") a ? a-- : n = null;
    else if (!a) if (l === "+" && s && !s.startsWith("(")) {
      if (f) throw new Error(`Invalid quantifier "${i}"`);
      let p = -1;
      if (/^\{\d+\}$/.test(c)) e = Tn(e, u + c.length, l, "");
      else {
        if (s === ")" || s === "]") {
          const g = s === ")" ? t : n;
          if (g === null) throw new Error(`Invalid unmatched "${s}"`);
          e = `${e.slice(0, g)}(?>${e.slice(g, u)}${c})${e.slice(u + i.length)}`;
        } else e = `${e.slice(0, u - s.length)}(?>${s}${c})${e.slice(u + i.length)}`;
        p += 4;
      }
      de.lastIndex += p;
    } else i[0] === "(" ? r.push(u) : i === ")" && (t = r.length ? r.pop() : null);
    s = i;
  }
  return { pattern: e };
}
const N = String.raw, Vn = N`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`, ke = N`\(\?R=(?<rDepth>[^\)]+)\)|${Vn}`, ce = N`\(\?<(?![=!])(?<captureName>[^>]+)>`, St = N`${ce}|(?<unnamed>\()(?!\?)`, P = new RegExp(N`${ce}|${ke}|\(\?|\\?.`, "gsu"), ge = "Cannot use multiple overlapping recursions";
function Hn(e, r) {
  const { hiddenCaptures: t, mode: n } = { hiddenCaptures: [], mode: "plugin", ...r };
  let s = (r == null ? void 0 : r.captureTransfers) ?? /* @__PURE__ */ new Map();
  if (!new RegExp(ke, "su").test(e)) return { pattern: e, captureTransfers: s, hiddenCaptures: t };
  if (n === "plugin" && se(e, N`\(\?\(DEFINE\)`, v.DEFAULT)) throw new Error("DEFINE groups cannot be used with recursion");
  const a = [], o = se(e, N`\\[1-9]`, v.DEFAULT), i = /* @__PURE__ */ new Map(), u = [];
  let c = false, l = 0, f = 0, p;
  for (P.lastIndex = 0; p = P.exec(e); ) {
    const { 0: g, groups: { captureName: d, rDepth: m, gRNameOrNum: y, gRDepth: w } } = p;
    if (g === "[") l++;
    else if (l) g === "]" && l--;
    else if (m) {
      if (Qe(m), c) throw new Error(ge);
      if (o) throw new Error(`${n === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`);
      const A = e.slice(0, p.index), $ = e.slice(P.lastIndex);
      if (se($, ke, v.DEFAULT)) throw new Error(ge);
      const k = +m - 1;
      e = Je(A, $, k, false, t, a, f), s = Ke(s, A, k, a.length, 0, f);
      break;
    } else if (y) {
      Qe(w);
      let A = false;
      for (const Z of u) if (Z.name === y || Z.num === +y) {
        if (A = true, Z.hasRecursedWithin) throw new Error(ge);
        break;
      }
      if (!A) throw new Error(N`Recursive \g cannot be used outside the referenced group "${n === "external" ? y : N`\g<${y}&R=${w}>`}"`);
      const $ = i.get(y), k = zn(e, $);
      if (o && se(k, N`${ce}|\((?!\?)`, v.DEFAULT)) throw new Error(`${n === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`);
      const S = e.slice($, p.index), K = k.slice(S.length + g.length), T = a.length, B = +w - 1, Re = Je(S, K, B, true, t, a, f);
      s = Ke(s, S, B, a.length - T, T, f);
      const Gt = e.slice(0, $), Ut = e.slice($ + k.length);
      e = `${Gt}${Re}${Ut}`, P.lastIndex += Re.length - g.length - S.length - K.length, u.forEach((Z) => Z.hasRecursedWithin = true), c = true;
    } else if (d) f++, i.set(String(f), P.lastIndex), i.set(d, P.lastIndex), u.push({ num: f, name: d });
    else if (g[0] === "(") {
      const A = g === "(";
      A && (f++, i.set(String(f), P.lastIndex)), u.push(A ? { num: f } : {});
    } else g === ")" && u.pop();
  }
  return t.push(...a), { pattern: e, captureTransfers: s, hiddenCaptures: t };
}
function Qe(e) {
  const r = `Max depth must be integer between 2 and 100; used ${e}`;
  if (!/^[1-9]\d*$/.test(e)) throw new Error(r);
  if (e = +e, e < 2 || e > 100) throw new Error(r);
}
function Je(e, r, t, n, s, a, o) {
  const i = /* @__PURE__ */ new Set();
  n && At(e + r, ce, ({ groups: { captureName: c } }) => {
    i.add(c);
  }, v.DEFAULT);
  const u = [t, n ? i : null, s, a, o];
  return `${e}${Ye(`(?:${e}`, "forward", ...u)}(?:)${Ye(`${r})`, "backward", ...u)}${r}`;
}
function Ye(e, r, t, n, s, a, o) {
  const u = (l) => r === "forward" ? l + 2 : t - l + 2 - 1;
  let c = "";
  for (let l = 0; l < t; l++) {
    const f = u(l);
    c += _e(e, N`${St}|\\k<(?<backref>[^>]+)>`, ({ 0: p, groups: { captureName: g, unnamed: d, backref: m } }) => {
      if (m && n && !n.has(m)) return p;
      const y = `_$${f}`;
      if (d || g) {
        const w = o + a.length + 1;
        return a.push(w), Wn(s, w), d ? p : `(?<${g}${y}>`;
      }
      return N`\k<${m}${y}>`;
    }, v.DEFAULT);
  }
  return c;
}
function Wn(e, r) {
  for (let t = 0; t < e.length; t++) e[t] >= r && e[t]++;
}
function Ke(e, r, t, n, s, a) {
  if (e.size && n) {
    let o = 0;
    At(r, St, () => o++, v.DEFAULT);
    const i = a - o + s, u = /* @__PURE__ */ new Map();
    return e.forEach((c, l) => {
      const f = (n - o * t) / t, p = o * t, g = l > i + o ? l + n : l, d = [];
      for (const m of c) if (m <= i) d.push(m);
      else if (m > i + o + f) d.push(m + n);
      else if (m <= i + o) for (let y = 0; y <= t; y++) d.push(m + o * y);
      else for (let y = 0; y <= t; y++) d.push(m + p + f * y);
      u.set(g, d);
    }), u;
  }
  return e;
}
var C = String.fromCodePoint, h = String.raw, R = { flagGroups: (() => {
  try {
    new RegExp("(?i:)");
  } catch {
    return false;
  }
  return true;
})(), unicodeSets: (() => {
  try {
    new RegExp("[[]]", "v");
  } catch {
    return false;
  }
  return true;
})() };
R.bugFlagVLiteralHyphenIsRange = R.unicodeSets ? (() => {
  try {
    new RegExp(h`[\d\-a]`, "v");
  } catch {
    return true;
  }
  return false;
})() : false;
R.bugNestedClassIgnoresNegation = R.unicodeSets && new RegExp("[[^a]]", "v").test("a");
function oe(e, { enable: r, disable: t }) {
  return { dotAll: !(t == null ? void 0 : t.dotAll) && !!((r == null ? void 0 : r.dotAll) || e.dotAll), ignoreCase: !(t == null ? void 0 : t.ignoreCase) && !!((r == null ? void 0 : r.ignoreCase) || e.ignoreCase) };
}
function J(e, r, t) {
  return e.has(r) || e.set(r, t), e.get(r);
}
function Ae(e, r) {
  return et[e] >= et[r];
}
function Xn(e, r) {
  if (e == null) throw new Error(r ?? "Value expected");
  return e;
}
var et = { ES2025: 2025, ES2024: 2024, ES2018: 2018 }, Zn = { auto: "auto", ES2025: "ES2025", ES2024: "ES2024", ES2018: "ES2018" };
function Nt(e = {}) {
  if ({}.toString.call(e) !== "[object Object]") throw new Error("Unexpected options");
  if (e.target !== void 0 && !Zn[e.target]) throw new Error(`Unexpected target "${e.target}"`);
  const r = { accuracy: "default", avoidSubclass: false, flags: "", global: false, hasIndices: false, lazyCompileLength: 1 / 0, target: "auto", verbose: false, ...e, rules: { allowOrphanBackrefs: false, asciiWordBoundaries: false, captureGroup: false, recursionLimit: 20, singleline: false, ...e.rules } };
  return r.target === "auto" && (r.target = R.flagGroups ? "ES2025" : R.unicodeSets ? "ES2024" : "ES2018"), r;
}
var Qn = "[	-\r ]", Jn = /* @__PURE__ */ new Set([C(304), C(305)]), _ = h`[\p{L}\p{M}\p{N}\p{Pc}]`;
function vt(e) {
  if (Jn.has(e)) return [e];
  const r = /* @__PURE__ */ new Set(), t = e.toLowerCase(), n = t.toUpperCase(), s = es.get(t), a = Yn.get(t), o = Kn.get(t);
  return [...n].length === 1 && r.add(n), o && r.add(o), s && r.add(s), r.add(t), a && r.add(a), [...r];
}
var Me = new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((e) => [ue(e), e])), Yn = /* @__PURE__ */ new Map([["s", C(383)], [C(383), "s"]]), Kn = /* @__PURE__ */ new Map([[C(223), C(7838)], [C(107), C(8490)], [C(229), C(8491)], [C(969), C(8486)]]), es = new Map([L(453), L(456), L(459), L(498), ...he(8072, 8079), ...he(8088, 8095), ...he(8104, 8111), L(8124), L(8140), L(8188)]), ts = /* @__PURE__ */ new Map([["alnum", h`[\p{Alpha}\p{Nd}]`], ["alpha", h`\p{Alpha}`], ["ascii", h`\p{ASCII}`], ["blank", h`[\p{Zs}\t]`], ["cntrl", h`\p{Cc}`], ["digit", h`\p{Nd}`], ["graph", h`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`], ["lower", h`\p{Lower}`], ["print", h`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`], ["punct", h`[\p{P}\p{S}]`], ["space", h`\p{space}`], ["upper", h`\p{Upper}`], ["word", h`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`], ["xdigit", h`\p{AHex}`]]);
function rs(e, r) {
  const t = [];
  for (let n = e; n <= r; n++) t.push(n);
  return t;
}
function L(e) {
  const r = C(e);
  return [r.toLowerCase(), r];
}
function he(e, r) {
  return rs(e, r).map((t) => L(t));
}
var It = /* @__PURE__ */ new Set(["Lower", "Lowercase", "Upper", "Uppercase", "Ll", "Lowercase_Letter", "Lt", "Titlecase_Letter", "Lu", "Uppercase_Letter"]);
function ns(e, r) {
  const t = { accuracy: "default", asciiWordBoundaries: false, avoidSubclass: false, bestEffortTarget: "ES2025", ...r };
  _t(e);
  const n = { accuracy: t.accuracy, asciiWordBoundaries: t.asciiWordBoundaries, avoidSubclass: t.avoidSubclass, flagDirectivesByAlt: /* @__PURE__ */ new Map(), jsGroupNameMap: /* @__PURE__ */ new Map(), minTargetEs2024: Ae(t.bestEffortTarget, "ES2024"), passedLookbehind: false, strategy: null, subroutineRefMap: /* @__PURE__ */ new Map(), supportedGNodes: /* @__PURE__ */ new Set(), digitIsAscii: e.flags.digitIsAscii, spaceIsAscii: e.flags.spaceIsAscii, wordIsAscii: e.flags.wordIsAscii };
  Q(e, ss, n);
  const s = { dotAll: e.flags.dotAll, ignoreCase: e.flags.ignoreCase }, a = { currentFlags: s, prevFlags: null, globalFlags: s, groupOriginByCopy: /* @__PURE__ */ new Map(), groupsByName: /* @__PURE__ */ new Map(), multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(), openRefs: /* @__PURE__ */ new Map(), reffedNodesByReferencer: /* @__PURE__ */ new Map(), subroutineRefMap: n.subroutineRefMap };
  Q(e, as, a);
  const o = { groupsByName: a.groupsByName, highestOrphanBackref: 0, numCapturesToLeft: 0, reffedNodesByReferencer: a.reffedNodesByReferencer };
  return Q(e, os, o), e._originMap = a.groupOriginByCopy, e._strategy = n.strategy, e;
}
var ss = { AbsenceFunction({ node: e, parent: r, replaceWith: t }) {
  const { body: n, kind: s } = e;
  if (s === "repeater") {
    const a = I();
    a.body[0].body.push(G({ negate: true, body: n }), V("Any"));
    const o = I();
    o.body[0].body.push(xt("greedy", 0, 1 / 0, a)), t(b(o, r), { traverse: true });
  } else throw new Error('Unsupported absence function "(?~|"');
}, Alternative: { enter({ node: e, parent: r, key: t }, { flagDirectivesByAlt: n }) {
  const s = e.body.filter((a) => a.kind === "flags");
  for (let a = t + 1; a < r.body.length; a++) {
    const o = r.body[a];
    J(n, o, []).push(...s);
  }
}, exit({ node: e }, { flagDirectivesByAlt: r }) {
  var _a2;
  if ((_a2 = r.get(e)) == null ? void 0 : _a2.length) {
    const t = Ot(r.get(e));
    if (t) {
      const n = I({ flags: t });
      n.body[0].body = e.body, e.body = [b(n, e)];
    }
  }
} }, Assertion({ node: e, parent: r, key: t, container: n, root: s, remove: a, replaceWith: o }, i) {
  const { kind: u, negate: c } = e, { asciiWordBoundaries: l, avoidSubclass: f, supportedGNodes: p, wordIsAscii: g } = i;
  if (u === "text_segment_boundary") throw new Error(`Unsupported text segment boundary "\\${c ? "Y" : "y"}"`);
  if (u === "line_end") o(b(G({ body: [D({ body: [Ce("string_end")] }), D({ body: [ie(10)] })] }), r));
  else if (u === "line_start") o(b(M(h`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: true }), r));
  else if (u === "search_start") if (p.has(e)) s.flags.sticky = true, a();
  else {
    const d = n[t - 1];
    if (d && ps(d)) o(b(G({ negate: true }), r));
    else {
      if (f) throw new Error(h`Uses "\G" in a way that requires a subclass`);
      o(F(Ce("string_start"), r)), i.strategy = "clip_search";
    }
  }
  else if (!(u === "string_end" || u === "string_start")) if (u === "string_end_newline") o(b(M(h`(?=\n?\z)`), r));
  else if (u === "word_boundary") {
    if (!g && !l) {
      const d = `(?:(?<=${_})(?!${_})|(?<!${_})(?=${_}))`, m = `(?:(?<=${_})(?=${_})|(?<!${_})(?!${_}))`;
      o(b(M(c ? m : d), r));
    }
  } else throw new Error(`Unexpected assertion kind "${u}"`);
}, Backreference({ node: e }, { jsGroupNameMap: r }) {
  let { ref: t } = e;
  typeof t == "string" && !ye(t) && (t = me(t, r), e.ref = t);
}, CapturingGroup({ node: e }, { jsGroupNameMap: r, subroutineRefMap: t }) {
  let { name: n } = e;
  n && !ye(n) && (n = me(n, r), e.name = n), t.set(e.number, e), n && t.set(n, e);
}, CharacterClassRange({ node: e, parent: r, replaceWith: t }) {
  if (r.kind === "intersection") {
    const n = ae({ body: [e] });
    t(b(n, r), { traverse: true });
  }
}, CharacterSet({ node: e, parent: r, replaceWith: t }, { accuracy: n, minTargetEs2024: s, digitIsAscii: a, spaceIsAscii: o, wordIsAscii: i }) {
  const { kind: u, negate: c, value: l } = e;
  if (a && (u === "digit" || l === "digit")) {
    t(F(Ee("digit", { negate: c }), r));
    return;
  }
  if (o && (u === "space" || l === "space")) {
    t(b(we(M(Qn), c), r));
    return;
  }
  if (i && (u === "word" || l === "word")) {
    t(F(Ee("word", { negate: c }), r));
    return;
  }
  if (u === "any") t(F(V("Any"), r));
  else if (u === "digit") t(F(V("Nd", { negate: c }), r));
  else if (u !== "dot") if (u === "text_segment") {
    if (n === "strict") throw new Error(h`Use of "\X" requires non-strict accuracy`);
    const f = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", p = h`\p{RI}{2}|${f}(?:\u200D${f})*`;
    t(b(M(h`(?>\r\n|${s ? h`\p{RGI_Emoji}` : p}|\P{M}\p{M}*)`, { skipPropertyNameValidation: true }), r));
  } else if (u === "hex") t(F(V("AHex", { negate: c }), r));
  else if (u === "newline") t(b(M(c ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), r));
  else if (u === "posix") if (!s && (l === "graph" || l === "print")) {
    if (n === "strict") throw new Error(`POSIX class "${l}" requires min target ES2024 or non-strict accuracy`);
    let f = { graph: "!-~", print: " -~" }[l];
    c && (f = `\0-${C(f.codePointAt(0) - 1)}${C(f.codePointAt(2) + 1)}-\u{10FFFF}`), t(b(M(`[${f}]`), r));
  } else t(b(we(M(ts.get(l)), c), r));
  else if (u === "property") Me.has(ue(l)) || (e.key = "sc");
  else if (u === "space") t(F(V("space", { negate: c }), r));
  else if (u === "word") t(b(we(M(_), c), r));
  else throw new Error(`Unexpected character set kind "${u}"`);
}, Directive({ node: e, parent: r, root: t, remove: n, replaceWith: s, removeAllPrevSiblings: a, removeAllNextSiblings: o }) {
  const { kind: i, flags: u } = e;
  if (i === "flags") if (!u.enable && !u.disable) n();
  else {
    const c = I({ flags: u });
    c.body[0].body = o(), s(b(c, r), { traverse: true });
  }
  else if (i === "keep") {
    const c = t.body[0], f = t.body.length === 1 && wt(c, { type: "Group" }) && c.body[0].body.length === 1 ? c.body[0] : t;
    if (r.parent !== f || f.body.length > 1) throw new Error(h`Uses "\K" in a way that's unsupported`);
    const p = G({ behind: true });
    p.body[0].body = a(), s(b(p, r));
  } else throw new Error(`Unexpected directive kind "${i}"`);
}, Flags({ node: e, parent: r }) {
  if (e.posixIsAscii) throw new Error('Unsupported flag "P"');
  if (e.textSegmentMode === "word") throw new Error('Unsupported flag "y{w}"');
  ["digitIsAscii", "extended", "posixIsAscii", "spaceIsAscii", "wordIsAscii", "textSegmentMode"].forEach((t) => delete e[t]), Object.assign(e, { global: false, hasIndices: false, multiline: false, sticky: e.sticky ?? false }), r.options = { disable: { x: true, n: true }, force: { v: true } };
}, Group({ node: e }) {
  if (!e.flags) return;
  const { enable: r, disable: t } = e.flags;
  (r == null ? void 0 : r.extended) && delete r.extended, (t == null ? void 0 : t.extended) && delete t.extended, (r == null ? void 0 : r.dotAll) && (t == null ? void 0 : t.dotAll) && delete r.dotAll, (r == null ? void 0 : r.ignoreCase) && (t == null ? void 0 : t.ignoreCase) && delete r.ignoreCase, r && !Object.keys(r).length && delete e.flags.enable, t && !Object.keys(t).length && delete e.flags.disable, !e.flags.enable && !e.flags.disable && delete e.flags;
}, LookaroundAssertion({ node: e }, r) {
  const { kind: t } = e;
  t === "lookbehind" && (r.passedLookbehind = true);
}, NamedCallout({ node: e, parent: r, replaceWith: t }) {
  const { kind: n } = e;
  if (n === "fail") t(b(G({ negate: true }), r));
  else throw new Error(`Unsupported named callout "(*${n.toUpperCase()}"`);
}, Quantifier({ node: e }) {
  if (e.body.type === "Quantifier") {
    const r = I();
    r.body[0].body.push(e.body), e.body = b(r, e);
  }
}, Regex: { enter({ node: e }, { supportedGNodes: r }) {
  const t = [];
  let n = false, s = false;
  for (const a of e.body) if (a.body.length === 1 && a.body[0].kind === "search_start") a.body.pop();
  else {
    const o = Lt(a.body);
    o ? (n = true, Array.isArray(o) ? t.push(...o) : t.push(o)) : s = true;
  }
  n && !s && t.forEach((a) => r.add(a));
}, exit(e, { accuracy: r, passedLookbehind: t, strategy: n }) {
  if (r === "strict" && t && n) throw new Error(h`Uses "\G" in a way that requires non-strict accuracy`);
} }, Subroutine({ node: e }, { jsGroupNameMap: r }) {
  let { ref: t } = e;
  typeof t == "string" && !ye(t) && (t = me(t, r), e.ref = t);
} }, as = { Backreference({ node: e }, { multiplexCapturesToLeftByRef: r, reffedNodesByReferencer: t }) {
  const { orphan: n, ref: s } = e;
  n || t.set(e, [...r.get(s).map(({ node: a }) => a)]);
}, CapturingGroup: { enter({ node: e, parent: r, replaceWith: t, skip: n }, { groupOriginByCopy: s, groupsByName: a, multiplexCapturesToLeftByRef: o, openRefs: i, reffedNodesByReferencer: u }) {
  const c = s.get(e);
  if (c && i.has(e.number)) {
    const f = F(tt(e.number), r);
    u.set(f, i.get(e.number)), t(f);
    return;
  }
  i.set(e.number, e), o.set(e.number, []), e.name && J(o, e.name, []);
  const l = o.get(e.name ?? e.number);
  for (let f = 0; f < l.length; f++) {
    const p = l[f];
    if (c === p.node || c && c === p.origin || e === p.origin) {
      l.splice(f, 1);
      break;
    }
  }
  if (o.get(e.number).push({ node: e, origin: c }), e.name && o.get(e.name).push({ node: e, origin: c }), e.name) {
    const f = J(a, e.name, /* @__PURE__ */ new Map());
    let p = false;
    if (c) p = true;
    else for (const g of f.values()) if (!g.hasDuplicateNameToRemove) {
      p = true;
      break;
    }
    a.get(e.name).set(e, { node: e, hasDuplicateNameToRemove: p });
  }
}, exit({ node: e }, { openRefs: r }) {
  r.delete(e.number);
} }, Group: { enter({ node: e }, r) {
  r.prevFlags = r.currentFlags, e.flags && (r.currentFlags = oe(r.currentFlags, e.flags));
}, exit(e, r) {
  r.currentFlags = r.prevFlags;
} }, Subroutine({ node: e, parent: r, replaceWith: t }, n) {
  const { isRecursive: s, ref: a } = e;
  if (s) {
    let l = r;
    for (; (l = l.parent) && !(l.type === "CapturingGroup" && (l.name === a || l.number === a)); ) ;
    n.reffedNodesByReferencer.set(e, l);
    return;
  }
  const o = n.subroutineRefMap.get(a), i = a === 0, u = i ? tt(0) : Mt(o, n.groupOriginByCopy, null);
  let c = u;
  if (!i) {
    const l = Ot(cs(o, (p) => p.type === "Group" && !!p.flags)), f = l ? oe(n.globalFlags, l) : n.globalFlags;
    is(f, n.currentFlags) || (c = I({ flags: ls(f) }), c.body[0].body.push(u));
  }
  t(b(c, r), { traverse: !i });
} }, os = { Backreference({ node: e, parent: r, replaceWith: t }, n) {
  if (e.orphan) {
    n.highestOrphanBackref = Math.max(n.highestOrphanBackref, e.ref);
    return;
  }
  const a = n.reffedNodesByReferencer.get(e).filter((o) => us(o, e));
  if (!a.length) t(b(G({ negate: true }), r));
  else if (a.length > 1) {
    const o = I({ atomic: true, body: a.reverse().map((i) => D({ body: [xe(i.number)] })) });
    t(b(o, r));
  } else e.ref = a[0].number;
}, CapturingGroup({ node: e }, r) {
  e.number = ++r.numCapturesToLeft, e.name && r.groupsByName.get(e.name).get(e).hasDuplicateNameToRemove && delete e.name;
}, Regex: { exit({ node: e }, r) {
  const t = Math.max(r.highestOrphanBackref - r.numCapturesToLeft, 0);
  for (let n = 0; n < t; n++) {
    const s = Ct();
    e.body.at(-1).body.push(s);
  }
} }, Subroutine({ node: e }, r) {
  !e.isRecursive || e.ref === 0 || (e.ref = r.reffedNodesByReferencer.get(e).number);
} };
function _t(e) {
  Q(e, { "*"({ node: r, parent: t }) {
    r.parent = t;
  } });
}
function is(e, r) {
  return e.dotAll === r.dotAll && e.ignoreCase === r.ignoreCase;
}
function us(e, r) {
  let t = r;
  do {
    if (t.type === "Regex") return false;
    if (t.type === "Alternative") continue;
    if (t === e) return false;
    const n = Rt(t.parent);
    for (const s of n) {
      if (s === t) break;
      if (s === e || Ft(s, e)) return true;
    }
  } while (t = t.parent);
  throw new Error("Unexpected path");
}
function Mt(e, r, t, n) {
  const s = Array.isArray(e) ? [] : {};
  for (const [a, o] of Object.entries(e)) a === "parent" ? s.parent = Array.isArray(t) ? n : t : o && typeof o == "object" ? s[a] = Mt(o, r, s, t) : (a === "type" && o === "CapturingGroup" && r.set(s, r.get(e) ?? e), s[a] = o);
  return s;
}
function tt(e) {
  const r = Et(e);
  return r.isRecursive = true, r;
}
function cs(e, r) {
  const t = [];
  for (; e = e.parent; ) (!r || r(e)) && t.push(e);
  return t;
}
function me(e, r) {
  if (r.has(e)) return r.get(e);
  const t = `$${r.size}_${e.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  return r.set(e, t), t;
}
function Ot(e) {
  const r = ["dotAll", "ignoreCase"], t = { enable: {}, disable: {} };
  return e.forEach(({ flags: n }) => {
    r.forEach((s) => {
      var _a2, _b;
      ((_a2 = n.enable) == null ? void 0 : _a2[s]) && (delete t.disable[s], t.enable[s] = true), ((_b = n.disable) == null ? void 0 : _b[s]) && (t.disable[s] = true);
    });
  }), Object.keys(t.enable).length || delete t.enable, Object.keys(t.disable).length || delete t.disable, t.enable || t.disable ? t : null;
}
function ls({ dotAll: e, ignoreCase: r }) {
  const t = {};
  return (e || r) && (t.enable = {}, e && (t.enable.dotAll = true), r && (t.enable.ignoreCase = true)), (!e || !r) && (t.disable = {}, !e && (t.disable.dotAll = true), !r && (t.disable.ignoreCase = true)), t;
}
function Rt(e) {
  if (!e) throw new Error("Node expected");
  const { body: r } = e;
  return Array.isArray(r) ? r : r ? [r] : null;
}
function Lt(e) {
  const r = e.find((t) => t.kind === "search_start" || ds(t, { negate: false }) || !fs(t));
  if (!r) return null;
  if (r.kind === "search_start") return r;
  if (r.type === "LookaroundAssertion") return r.body[0].body[0];
  if (r.type === "CapturingGroup" || r.type === "Group") {
    const t = [];
    for (const n of r.body) {
      const s = Lt(n.body);
      if (!s) return null;
      Array.isArray(s) ? t.push(...s) : t.push(s);
    }
    return t;
  }
  return null;
}
function Ft(e, r) {
  const t = Rt(e) ?? [];
  for (const n of t) if (n === r || Ft(n, r)) return true;
  return false;
}
function fs({ type: e }) {
  return e === "Assertion" || e === "Directive" || e === "LookaroundAssertion";
}
function ps(e) {
  const r = ["Character", "CharacterClass", "CharacterSet"];
  return r.includes(e.type) || e.type === "Quantifier" && e.min && r.includes(e.body.type);
}
function ds(e, r) {
  const t = { negate: null, ...r };
  return e.type === "LookaroundAssertion" && (t.negate === null || e.negate === t.negate) && e.body.length === 1 && wt(e.body[0], { type: "Assertion", kind: "search_start" });
}
function ye(e) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e);
}
function M(e, r) {
  const n = bt(e, { ...r, unicodePropertyMap: Me }).body;
  return n.length > 1 || n[0].body.length > 1 ? I({ body: n }) : n[0].body[0];
}
function we(e, r) {
  return e.negate = r, e;
}
function F(e, r) {
  return e.parent = r, e;
}
function b(e, r) {
  return _t(e), e.parent = r, e;
}
function gs(e, r) {
  const t = Nt(r), n = Ae(t.target, "ES2024"), s = Ae(t.target, "ES2025"), a = t.rules.recursionLimit;
  if (!Number.isInteger(a) || a < 2 || a > 20) throw new Error("Invalid recursionLimit; use 2-20");
  let o = null, i = null;
  if (!s) {
    const g = [e.flags.ignoreCase];
    Q(e, hs, { getCurrentModI: () => g.at(-1), popModI() {
      g.pop();
    }, pushModI(d) {
      g.push(d);
    }, setHasCasedChar() {
      g.at(-1) ? o = true : i = true;
    } });
  }
  const u = { dotAll: e.flags.dotAll, ignoreCase: !!((e.flags.ignoreCase || o) && !i) };
  let c = e;
  const l = { accuracy: t.accuracy, appliedGlobalFlags: u, captureMap: /* @__PURE__ */ new Map(), currentFlags: { dotAll: e.flags.dotAll, ignoreCase: e.flags.ignoreCase }, inCharClass: false, lastNode: c, originMap: e._originMap, recursionLimit: a, useAppliedIgnoreCase: !!(!s && o && i), useFlagMods: s, useFlagV: n, verbose: t.verbose };
  function f(g) {
    return l.lastNode = c, c = g, Xn(ms[g.type], `Unexpected node type "${g.type}"`)(g, l, f);
  }
  const p = { pattern: e.body.map(f).join("|"), flags: f(e.flags), options: { ...e.options } };
  return n || (delete p.options.force.v, p.options.disable.v = true, p.options.unicodeSetsPlugin = null), p._captureTransfers = /* @__PURE__ */ new Map(), p._hiddenCaptures = [], l.captureMap.forEach((g, d) => {
    g.hidden && p._hiddenCaptures.push(d), g.transferTo && J(p._captureTransfers, g.transferTo, []).push(d);
  }), p;
}
var hs = { "*": { enter({ node: e }, r) {
  if (nt(e)) {
    const t = r.getCurrentModI();
    r.pushModI(e.flags ? oe({ ignoreCase: t }, e.flags).ignoreCase : t);
  }
}, exit({ node: e }, r) {
  nt(e) && r.popModI();
} }, Backreference(e, r) {
  r.setHasCasedChar();
}, Character({ node: e }, r) {
  Oe(C(e.value)) && r.setHasCasedChar();
}, CharacterClassRange({ node: e, skip: r }, t) {
  r(), Pt(e, { firstOnly: true }).length && t.setHasCasedChar();
}, CharacterSet({ node: e }, r) {
  e.kind === "property" && It.has(e.value) && r.setHasCasedChar();
} }, ms = { Alternative({ body: e }, r, t) {
  return e.map(t).join("");
}, Assertion({ kind: e, negate: r }) {
  if (e === "string_end") return "$";
  if (e === "string_start") return "^";
  if (e === "word_boundary") return r ? h`\B` : h`\b`;
  throw new Error(`Unexpected assertion kind "${e}"`);
}, Backreference({ ref: e }, r) {
  if (typeof e != "number") throw new Error("Unexpected named backref in transformed AST");
  if (!r.useFlagMods && r.accuracy === "strict" && r.currentFlags.ignoreCase && !r.captureMap.get(e).ignoreCase) throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
  return "\\" + e;
}, CapturingGroup(e, r, t) {
  const { body: n, name: s, number: a } = e, o = { ignoreCase: r.currentFlags.ignoreCase }, i = r.originMap.get(e);
  return i && (o.hidden = true, a > i.number && (o.transferTo = i.number)), r.captureMap.set(a, o), `(${s ? `?<${s}>` : ""}${n.map(t).join("|")})`;
}, Character({ value: e }, r) {
  const t = C(e), n = j(e, { escDigit: r.lastNode.type === "Backreference", inCharClass: r.inCharClass, useFlagV: r.useFlagV });
  if (n !== t) return n;
  if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase && Oe(t)) {
    const s = vt(t);
    return r.inCharClass ? s.join("") : s.length > 1 ? `[${s.join("")}]` : s[0];
  }
  return t;
}, CharacterClass(e, r, t) {
  const { kind: n, negate: s, parent: a } = e;
  let { body: o } = e;
  if (n === "intersection" && !r.useFlagV) throw new Error("Use of character class intersection requires min target ES2024");
  R.bugFlagVLiteralHyphenIsRange && r.useFlagV && o.some(st) && (o = [ie(45), ...o.filter((c) => !st(c))]);
  const i = () => `[${s ? "^" : ""}${o.map(t).join(n === "intersection" ? "&&" : "")}]`;
  if (!r.inCharClass) {
    if ((!r.useFlagV || R.bugNestedClassIgnoresNegation) && !s) {
      const l = o.filter((f) => f.type === "CharacterClass" && f.kind === "union" && f.negate);
      if (l.length) {
        const f = I(), p = f.body[0];
        return f.parent = a, p.parent = f, o = o.filter((g) => !l.includes(g)), e.body = o, o.length ? (e.parent = p, p.body.push(e)) : f.body.pop(), l.forEach((g) => {
          const d = D({ body: [g] });
          g.parent = d, d.parent = f, f.body.push(d);
        }), t(f);
      }
    }
    r.inCharClass = true;
    const c = i();
    return r.inCharClass = false, c;
  }
  const u = o[0];
  if (n === "union" && !s && u && ((!r.useFlagV || !r.verbose) && a.kind === "union" && !(R.bugFlagVLiteralHyphenIsRange && r.useFlagV) || !r.verbose && a.kind === "intersection" && o.length === 1 && u.type !== "CharacterClassRange")) return o.map(t).join("");
  if (!r.useFlagV && a.type === "CharacterClass") throw new Error("Uses nested character class in a way that requires min target ES2024");
  return i();
}, CharacterClassRange(e, r) {
  const t = e.min.value, n = e.max.value, s = { escDigit: false, inCharClass: true, useFlagV: r.useFlagV }, a = j(t, s), o = j(n, s), i = /* @__PURE__ */ new Set();
  if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase) {
    const u = Pt(e);
    xs(u).forEach((l) => {
      i.add(Array.isArray(l) ? `${j(l[0], s)}-${j(l[1], s)}` : j(l, s));
    });
  }
  return `${a}-${o}${[...i].join("")}`;
}, CharacterSet({ kind: e, negate: r, value: t, key: n }, s) {
  if (e === "dot") return s.currentFlags.dotAll ? s.appliedGlobalFlags.dotAll || s.useFlagMods ? "." : "[^]" : h`[^\n]`;
  if (e === "digit") return r ? h`\D` : h`\d`;
  if (e === "property") {
    if (s.useAppliedIgnoreCase && s.currentFlags.ignoreCase && It.has(t)) throw new Error(`Unicode property "${t}" can't be case-insensitive when other chars have specific case`);
    return `${r ? h`\P` : h`\p`}{${n ? `${n}=` : ""}${t}}`;
  }
  if (e === "word") return r ? h`\W` : h`\w`;
  throw new Error(`Unexpected character set kind "${e}"`);
}, Flags(e, r) {
  return (r.appliedGlobalFlags.ignoreCase ? "i" : "") + (e.dotAll ? "s" : "") + (e.sticky ? "y" : "");
}, Group({ atomic: e, body: r, flags: t, parent: n }, s, a) {
  const o = s.currentFlags;
  t && (s.currentFlags = oe(o, t));
  const i = r.map(a).join("|"), u = !s.verbose && r.length === 1 && n.type !== "Quantifier" && !e && (!s.useFlagMods || !t) ? i : `(?${Es(e, t, s.useFlagMods)}${i})`;
  return s.currentFlags = o, u;
}, LookaroundAssertion({ body: e, kind: r, negate: t }, n, s) {
  return `(?${`${r === "lookahead" ? "" : "<"}${t ? "!" : "="}`}${e.map(s).join("|")})`;
}, Quantifier(e, r, t) {
  return t(e.body) + ks(e);
}, Subroutine({ isRecursive: e, ref: r }, t) {
  if (!e) throw new Error("Unexpected non-recursive subroutine in transformed AST");
  const n = t.recursionLimit;
  return r === 0 ? `(?R=${n})` : h`\g<${r}&R=${n}>`;
} }, ys = /* @__PURE__ */ new Set(["$", "(", ")", "*", "+", ".", "?", "[", "\\", "]", "^", "{", "|", "}"]), ws = /* @__PURE__ */ new Set(["-", "\\", "]", "^", "["]), bs = /* @__PURE__ */ new Set(["(", ")", "-", "/", "[", "\\", "]", "^", "{", "|", "}", "!", "#", "$", "%", "&", "*", "+", ",", ".", ":", ";", "<", "=", ">", "?", "@", "`", "~"]), rt = /* @__PURE__ */ new Map([[9, h`\t`], [10, h`\n`], [11, h`\v`], [12, h`\f`], [13, h`\r`], [8232, h`\u2028`], [8233, h`\u2029`], [65279, h`\uFEFF`]]), Cs = new RegExp("^\\p{Cased}$", "u");
function Oe(e) {
  return Cs.test(e);
}
function Pt(e, r) {
  const t = !!(r == null ? void 0 : r.firstOnly), n = e.min.value, s = e.max.value, a = [];
  if (n < 65 && (s === 65535 || s >= 131071) || n === 65536 && s >= 131071) return a;
  for (let o = n; o <= s; o++) {
    const i = C(o);
    if (!Oe(i)) continue;
    const u = vt(i).filter((c) => {
      const l = c.codePointAt(0);
      return l < n || l > s;
    });
    if (u.length && (a.push(...u), t)) break;
  }
  return a;
}
function j(e, { escDigit: r, inCharClass: t, useFlagV: n }) {
  if (rt.has(e)) return rt.get(e);
  if (e < 32 || e > 126 && e < 160 || e > 262143 || r && As(e)) return e > 255 ? `\\u{${e.toString(16).toUpperCase()}}` : `\\x${e.toString(16).toUpperCase().padStart(2, "0")}`;
  const s = t ? n ? bs : ws : ys, a = C(e);
  return (s.has(a) ? "\\" : "") + a;
}
function xs(e) {
  const r = e.map((s) => s.codePointAt(0)).sort((s, a) => s - a), t = [];
  let n = null;
  for (let s = 0; s < r.length; s++) r[s + 1] === r[s] + 1 ? n ?? (n = r[s]) : n === null ? t.push(r[s]) : (t.push([n, r[s]]), n = null);
  return t;
}
function Es(e, r, t) {
  if (e) return ">";
  let n = "";
  if (r && t) {
    const { enable: s, disable: a } = r;
    n = ((s == null ? void 0 : s.ignoreCase) ? "i" : "") + ((s == null ? void 0 : s.dotAll) ? "s" : "") + (a ? "-" : "") + ((a == null ? void 0 : a.ignoreCase) ? "i" : "") + ((a == null ? void 0 : a.dotAll) ? "s" : "");
  }
  return `${n}:`;
}
function ks({ kind: e, max: r, min: t }) {
  let n;
  return !t && r === 1 ? n = "?" : !t && r === 1 / 0 ? n = "*" : t === 1 && r === 1 / 0 ? n = "+" : t === r ? n = `{${t}}` : n = `{${t},${r === 1 / 0 ? "" : r}}`, n + { greedy: "", lazy: "?", possessive: "+" }[e];
}
function nt({ type: e }) {
  return e === "CapturingGroup" || e === "Group" || e === "LookaroundAssertion";
}
function As(e) {
  return e > 47 && e < 58;
}
function st({ type: e, value: r }) {
  return e === "Character" && r === 45;
}
var $s = (_a = class extends RegExp {
  constructor(r, t, n) {
    var __super = (...args) => {
      super(...args);
      __privateAdd(this, _$e_instances);
      __privateAdd(this, _t2, /* @__PURE__ */ new Map());
      __privateAdd(this, _e2, null);
      __privateAdd(this, _n2);
      __privateAdd(this, _r2, null);
      __privateAdd(this, _s2, null);
      __publicField(this, "rawOptions", {});
      return this;
    };
    const s = !!(n == null ? void 0 : n.lazyCompile);
    if (r instanceof RegExp) {
      if (n) throw new Error("Cannot provide options when copying a regexp");
      const a = r;
      __super(a, t), __privateSet(this, _n2, a.source), a instanceof _a && (__privateSet(this, _t2, __privateGet(a, _t2)), __privateSet(this, _r2, __privateGet(a, _r2)), __privateSet(this, _s2, __privateGet(a, _s2)), this.rawOptions = a.rawOptions);
    } else {
      const a = { hiddenCaptures: [], strategy: null, transfers: [], ...n };
      __super(s ? "" : r, t), __privateSet(this, _n2, r), __privateSet(this, _t2, Ns(a.hiddenCaptures, a.transfers)), __privateSet(this, _s2, a.strategy), this.rawOptions = n ?? {};
    }
    s || __privateSet(this, _e2, this);
  }
  get source() {
    return __privateGet(this, _n2) || "(?:)";
  }
  exec(r) {
    if (!__privateGet(this, _e2)) {
      const { lazyCompile: s, ...a } = this.rawOptions;
      __privateSet(this, _e2, new _a(__privateGet(this, _n2), this.flags, a));
    }
    const t = this.global || this.sticky, n = this.lastIndex;
    if (__privateGet(this, _s2) === "clip_search" && t && n) {
      this.lastIndex = 0;
      const s = __privateMethod(this, _$e_instances, a_fn).call(this, r.slice(n));
      return s && (Ss(s, n, r, this.hasIndices), this.lastIndex += n), s;
    }
    return __privateMethod(this, _$e_instances, a_fn).call(this, r);
  }
}, _t2 = new WeakMap(), _e2 = new WeakMap(), _n2 = new WeakMap(), _r2 = new WeakMap(), _s2 = new WeakMap(), _$e_instances = new WeakSet(), a_fn = function(r) {
  __privateGet(this, _e2).lastIndex = this.lastIndex;
  const t = __superGet(_a.prototype, this, "exec").call(__privateGet(this, _e2), r);
  if (this.lastIndex = __privateGet(this, _e2).lastIndex, !t || !__privateGet(this, _t2).size) return t;
  const n = [...t];
  t.length = 1;
  let s;
  this.hasIndices && (s = [...t.indices], t.indices.length = 1);
  const a = [0];
  for (let o = 1; o < n.length; o++) {
    const { hidden: i, transferTo: u } = __privateGet(this, _t2).get(o) ?? {};
    if (i ? a.push(null) : (a.push(t.length), t.push(n[o]), this.hasIndices && t.indices.push(s[o])), u && n[o] !== void 0) {
      const c = a[u];
      if (!c) throw new Error(`Invalid capture transfer to "${c}"`);
      if (t[c] = n[o], this.hasIndices && (t.indices[c] = s[o]), t.groups) {
        __privateGet(this, _r2) || __privateSet(this, _r2, vs(this.source));
        const l = __privateGet(this, _r2).get(u);
        l && (t.groups[l] = n[o], this.hasIndices && (t.indices.groups[l] = s[o]));
      }
    }
  }
  return t;
}, _a);
function Ss(e, r, t, n) {
  if (e.index += r, e.input = t, n) {
    const s = e.indices;
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      i && (s[o] = [i[0] + r, i[1] + r]);
    }
    const a = s.groups;
    a && Object.keys(a).forEach((o) => {
      const i = a[o];
      i && (a[o] = [i[0] + r, i[1] + r]);
    });
  }
}
function Ns(e, r) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e) t.set(n, { hidden: true });
  for (const [n, s] of r) for (const a of s) J(t, a, {}).transferTo = n;
  return t;
}
function vs(e) {
  const r = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, t = /* @__PURE__ */ new Map();
  let n = 0, s = 0, a;
  for (; a = r.exec(e); ) {
    const { 0: o, groups: { capture: i, name: u } } = a;
    o === "[" ? n++ : n ? o === "]" && n-- : i && (s++, u && t.set(s, u));
  }
  return t;
}
function Is(e, r) {
  const t = _s(e, r);
  return t.options ? new $s(t.pattern, t.flags, t.options) : new RegExp(t.pattern, t.flags);
}
function _s(e, r) {
  const t = Nt(r), n = bt(e, { flags: t.flags, normalizeUnknownPropertyNames: true, rules: { captureGroup: t.rules.captureGroup, singleline: t.rules.singleline }, skipBackrefValidation: t.rules.allowOrphanBackrefs, unicodePropertyMap: Me }), s = ns(n, { accuracy: t.accuracy, asciiWordBoundaries: t.rules.asciiWordBoundaries, avoidSubclass: t.avoidSubclass, bestEffortTarget: t.target }), a = gs(s, t), o = Hn(a.pattern, { captureTransfers: a._captureTransfers, hiddenCaptures: a._hiddenCaptures, mode: "external" }), i = qn(o.pattern), u = jn(i.pattern, { captureTransfers: o.captureTransfers, hiddenCaptures: o.hiddenCaptures }), c = { pattern: u.pattern, flags: `${t.hasIndices ? "d" : ""}${t.global ? "g" : ""}${a.flags}${a.options.disable.v ? "u" : "v"}` };
  if (t.avoidSubclass) {
    if (t.lazyCompileLength !== 1 / 0) throw new Error("Lazy compilation requires subclass");
  } else {
    const l = u.hiddenCaptures.sort((d, m) => d - m), f = Array.from(u.captureTransfers), p = s._strategy, g = c.pattern.length >= t.lazyCompileLength;
    (l.length || f.length || p || g) && (c.options = { ...l.length && { hiddenCaptures: l }, ...f.length && { transfers: f }, ...p && { strategy: p }, ...g && { lazyCompile: g } });
  }
  return c;
}
const at = 4294967295;
class Ms {
  constructor(r, t = {}) {
    __publicField(this, "regexps");
    this.patterns = r, this.options = t;
    const { forgiving: n = false, cache: s, regexConstructor: a } = t;
    if (!a) throw new Error("Option `regexConstructor` is not provided");
    this.regexps = r.map((o) => {
      if (typeof o != "string") return o;
      const i = s == null ? void 0 : s.get(o);
      if (i) {
        if (i instanceof RegExp) return i;
        if (n) return null;
        throw i;
      }
      try {
        const u = a(o);
        return s == null ? void 0 : s.set(o, u), u;
      } catch (u) {
        if (s == null ? void 0 : s.set(o, u), n) return null;
        throw u;
      }
    });
  }
  findNextMatchSync(r, t, n) {
    const s = typeof r == "string" ? r : r.content, a = [];
    function o(i, u, c = 0) {
      return { index: i, captureIndices: u.indices.map((l) => l == null ? { start: at, end: at, length: 0 } : { start: l[0] + c, end: l[1] + c, length: l[1] - l[0] }) };
    }
    for (let i = 0; i < this.regexps.length; i++) {
      const u = this.regexps[i];
      if (u) try {
        u.lastIndex = t;
        const c = u.exec(s);
        if (!c) continue;
        if (c.index === t) return o(i, c, 0);
        a.push([i, c, 0]);
      } catch (c) {
        if (this.options.forgiving) continue;
        throw c;
      }
    }
    if (a.length) {
      const i = Math.min(...a.map((u) => u[1].index));
      for (const [u, c, l] of a) if (c.index === i) return o(u, c, l);
    }
    return null;
  }
}
function Os(e, r) {
  return Is(e, { global: true, hasIndices: true, lazyCompileLength: 3e3, rules: { allowOrphanBackrefs: true, asciiWordBoundaries: true, captureGroup: true, recursionLimit: 5, singleline: true }, ...r });
}
function Us(e = {}) {
  const r = Object.assign({ target: "auto", cache: /* @__PURE__ */ new Map() }, e);
  return r.regexConstructor || (r.regexConstructor = (t) => Os(t, { target: r.target })), { createScanner(t) {
    return new Ms(t, r);
  }, createString(t) {
    return { content: t };
  } };
}
export {
  Jt as a,
  Pe as b,
  Us as c,
  Ps as d,
  ar as e,
  sr as f,
  or as h,
  Fs as p,
  Ls as s,
  Gs as t,
  Se as w,
  nr as z
};
