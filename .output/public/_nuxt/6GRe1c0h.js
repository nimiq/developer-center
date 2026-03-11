import { f as on, bx as _, c2 as tn, c as j, aP as rn, aM as an, aa as un, aR as sn, aQ as U, aS as cn, c3 as D, c4 as pn, aT as dn, c5 as gn } from "#entry";
import { f as N, n as fn } from "./iik6CYzq.js";
const mn = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"]);
class P {
  constructor(e, o, t) {
    this.normal = o, this.property = e, t && (this.space = t);
  }
}
P.prototype.normal = {};
P.prototype.property = {};
P.prototype.space = void 0;
function V(n, e) {
  const o = {}, t = {};
  for (const r of n) Object.assign(o, r.property), Object.assign(t, r.normal);
  return new P(o, t, e);
}
function L(n) {
  return n.toLowerCase();
}
class h {
  constructor(e, o) {
    this.attribute = o, this.property = e;
  }
}
h.prototype.attribute = "";
h.prototype.booleanish = false;
h.prototype.boolean = false;
h.prototype.commaOrSpaceSeparated = false;
h.prototype.commaSeparated = false;
h.prototype.defined = false;
h.prototype.mustUseProperty = false;
h.prototype.number = false;
h.prototype.overloadedBoolean = false;
h.prototype.property = "";
h.prototype.spaceSeparated = false;
h.prototype.space = void 0;
let hn = 0;
const u = S(), m = S(), T = S(), l = S(), p = S(), C = S(), y = S();
function S() {
  return 2 ** ++hn;
}
const R = Object.freeze(Object.defineProperty({ __proto__: null, boolean: u, booleanish: m, commaOrSpaceSeparated: y, commaSeparated: C, number: l, overloadedBoolean: T, spaceSeparated: p }, Symbol.toStringTag, { value: "Module" })), M = Object.keys(R);
class B extends h {
  constructor(e, o, t, r) {
    let a = -1;
    if (super(e, o), H(this, "space", r), typeof t == "number") for (; ++a < M.length; ) {
      const s = M[a];
      H(this, M[a], (t & R[s]) === R[s]);
    }
  }
}
B.prototype.defined = true;
function H(n, e, o) {
  o && (n[e] = o);
}
function k(n) {
  const e = {}, o = {};
  for (const [t, r] of Object.entries(n.properties)) {
    const a = new B(t, n.transform(n.attributes || {}, t), r, n.space);
    n.mustUseProperty && n.mustUseProperty.includes(t) && (a.mustUseProperty = true), e[t] = a, o[L(t)] = t, o[L(a.attribute)] = t;
  }
  return new P(e, o, n.space);
}
const q = k({ properties: { ariaActiveDescendant: null, ariaAtomic: m, ariaAutoComplete: null, ariaBusy: m, ariaChecked: m, ariaColCount: l, ariaColIndex: l, ariaColSpan: l, ariaControls: p, ariaCurrent: null, ariaDescribedBy: p, ariaDetails: null, ariaDisabled: m, ariaDropEffect: p, ariaErrorMessage: null, ariaExpanded: m, ariaFlowTo: p, ariaGrabbed: m, ariaHasPopup: null, ariaHidden: m, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: p, ariaLevel: l, ariaLive: null, ariaModal: m, ariaMultiLine: m, ariaMultiSelectable: m, ariaOrientation: null, ariaOwns: p, ariaPlaceholder: null, ariaPosInSet: l, ariaPressed: m, ariaReadOnly: m, ariaRelevant: null, ariaRequired: m, ariaRoleDescription: p, ariaRowCount: l, ariaRowIndex: l, ariaRowSpan: l, ariaSelected: m, ariaSetSize: l, ariaSort: null, ariaValueMax: l, ariaValueMin: l, ariaValueNow: l, ariaValueText: null, role: null }, transform(n, e) {
  return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
} });
function W(n, e) {
  return e in n ? n[e] : e;
}
function K(n, e) {
  return W(n, e.toLowerCase());
}
const yn = k({ attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: C, acceptCharset: p, accessKey: p, action: null, allow: null, allowFullScreen: u, allowPaymentRequest: u, allowUserMedia: u, alt: null, as: null, async: u, autoCapitalize: null, autoComplete: p, autoFocus: u, autoPlay: u, blocking: p, capture: null, charSet: null, checked: u, cite: null, className: p, cols: l, colSpan: null, content: null, contentEditable: m, controls: u, controlsList: p, coords: l | C, crossOrigin: null, data: null, dateTime: null, decoding: null, default: u, defer: u, dir: null, dirName: null, disabled: u, download: T, draggable: m, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: u, formTarget: null, headers: p, height: l, hidden: T, high: l, href: null, hrefLang: null, htmlFor: p, httpEquiv: p, id: null, imageSizes: null, imageSrcSet: null, inert: u, inputMode: null, integrity: null, is: null, isMap: u, itemId: null, itemProp: p, itemRef: p, itemScope: u, itemType: p, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: u, low: l, manifest: null, max: null, maxLength: l, media: null, method: null, min: null, minLength: l, multiple: u, muted: u, name: null, nonce: null, noModule: u, noValidate: u, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: u, optimum: l, pattern: null, ping: p, placeholder: null, playsInline: u, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: u, referrerPolicy: null, rel: p, required: u, reversed: u, rows: l, rowSpan: l, sandbox: p, scope: null, scoped: u, seamless: u, selected: u, shadowRootClonable: u, shadowRootDelegatesFocus: u, shadowRootMode: null, shape: null, size: l, sizes: null, slot: null, span: l, spellCheck: m, src: null, srcDoc: null, srcLang: null, srcSet: null, start: l, step: null, style: null, tabIndex: l, target: null, title: null, translate: null, type: null, typeMustMatch: u, useMap: null, value: m, width: l, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: p, axis: null, background: null, bgColor: null, border: l, borderColor: null, bottomMargin: l, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: u, declare: u, event: null, face: null, frame: null, frameBorder: null, hSpace: l, leftMargin: l, link: null, longDesc: null, lowSrc: null, marginHeight: l, marginWidth: l, noResize: u, noHref: u, noShade: u, noWrap: u, object: null, profile: null, prompt: null, rev: null, rightMargin: l, rules: null, scheme: null, scrolling: m, standby: null, summary: null, text: null, topMargin: l, valueType: null, version: null, vAlign: null, vLink: null, vSpace: l, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: u, disableRemotePlayback: u, prefix: null, property: null, results: l, security: null, unselectable: null }, space: "html", transform: K }), vn = k({ attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", transformOrigin: "transform-origin", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, properties: { about: y, accentHeight: l, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: l, amplitude: l, arabicForm: null, ascent: l, attributeName: null, attributeType: null, azimuth: l, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: l, by: null, calcMode: null, capHeight: l, className: p, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: l, diffuseConstant: l, direction: null, display: null, dur: null, divisor: l, dominantBaseline: null, download: u, dx: null, dy: null, edgeMode: null, editable: null, elevation: l, enableBackground: null, end: null, event: null, exponent: l, externalResourcesRequired: null, fill: null, fillOpacity: l, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: C, g2: C, glyphName: C, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: l, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: l, horizOriginX: l, horizOriginY: l, id: null, ideographic: l, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: l, k: l, k1: l, k2: l, k3: l, k4: l, kernelMatrix: y, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: l, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: l, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: l, overlineThickness: l, paintOrder: null, panose1: null, path: null, pathLength: l, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: p, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: l, pointsAtY: l, pointsAtZ: l, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: y, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: y, rev: y, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: y, requiredFeatures: y, requiredFonts: y, requiredFormats: y, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: l, specularExponent: l, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: l, strikethroughThickness: l, string: null, stroke: null, strokeDashArray: y, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: l, strokeOpacity: l, strokeWidth: null, style: null, surfaceScale: l, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: y, tabIndex: l, tableValues: null, target: null, targetX: l, targetY: l, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: y, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: l, underlineThickness: l, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: l, values: null, vAlphabetic: l, vMathematical: l, vectorEffect: null, vHanging: l, vIdeographic: l, version: null, vertAdvY: l, vertOriginX: l, vertOriginY: l, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: l, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null }, space: "svg", transform: W }), $ = k({ properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null }, space: "xlink", transform(n, e) {
  return "xlink:" + e.slice(5).toLowerCase();
} }), X = k({ attributes: { xmlnsxlink: "xmlns:xlink" }, properties: { xmlnsXLink: null, xmlns: null }, space: "xmlns", transform: K }), Y = k({ properties: { xmlBase: null, xmlLang: null, xmlSpace: null }, space: "xml", transform(n, e) {
  return "xml:" + e.slice(3).toLowerCase();
} }), bn = /[A-Z]/g, F = /-[a-z]/g, Sn = /^data[-\w.:]+$/i;
function Cn(n, e) {
  const o = L(e);
  let t = e, r = h;
  if (o in n.normal) return n.property[n.normal[o]];
  if (o.length > 4 && o.slice(0, 4) === "data" && Sn.test(e)) {
    if (e.charAt(4) === "-") {
      const a = e.slice(5).replace(F, xn);
      t = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = e.slice(4);
      if (!F.test(a)) {
        let s = a.replace(bn, kn);
        s.charAt(0) !== "-" && (s = "-" + s), e = "data" + s;
      }
    }
    r = B;
  }
  return new r(t, e);
}
function kn(n) {
  return "-" + n.toLowerCase();
}
function xn(n) {
  return n.charAt(1).toUpperCase();
}
const wn = V([q, yn, $, X, Y], "html"), Kn = V([q, vn, $, X, Y], "svg");
function Pn(n, e) {
  return e.reduce((o, t) => {
    const r = Dn(n, t);
    return r !== void 0 && (o[t] = r), o;
  }, {});
}
function Dn(n, e) {
  return e.split(".").reduce((o, t) => o && o[t], n);
}
const E = "default", Z = /^@|^v-on:/, J = /^:|^v-bind:/, On = /^v-model/, Mn = ["select", "textarea", "input"], Ln = /* @__PURE__ */ new Set(["math", "svg"]), G = /* @__PURE__ */ new Set(), Tn = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((n) => [n, `prose-${n}`])), Rn = ["script", "base"], En = on({ name: "MDCRenderer", props: { body: { type: Object, required: true }, data: { type: Object, default: () => ({}) }, class: { type: [String, Object], default: void 0 }, tag: { type: [String, Boolean], default: void 0 }, prose: { type: Boolean, default: void 0 }, components: { type: Object, default: () => ({}) }, unwrap: { type: [Boolean, String], default: false } }, async setup(n) {
  var _a, _b, _c, _d, _e, _f;
  const o = (_c = (_b = (_a = tn()) == null ? void 0 : _a.appContext) == null ? void 0 : _b.app) == null ? void 0 : _c.$nuxt, t = (o == null ? void 0 : o.$route) || (o == null ? void 0 : o._route), { mdc: r } = ((_d = o == null ? void 0 : o.$config) == null ? void 0 : _d.public) || {}, a = ((_e = r == null ? void 0 : r.components) == null ? void 0 : _e.customElements) || ((_f = r == null ? void 0 : r.components) == null ? void 0 : _f.custom);
  a && a.forEach((i) => G.add(i));
  const s = j(() => {
    var _a2, _b2, _c2, _d2;
    return { ...((_a2 = r == null ? void 0 : r.components) == null ? void 0 : _a2.prose) && n.prose !== false ? Tn : {}, ...((_b2 = r == null ? void 0 : r.components) == null ? void 0 : _b2.map) || {}, ...rn(((_d2 = (_c2 = n.data) == null ? void 0 : _c2.mdc) == null ? void 0 : _d2.components) || {}), ...n.components };
  }), f = j(() => {
    var _a2;
    const i = (((_a2 = n.body) == null ? void 0 : _a2.children) || []).map((g) => g.tag || g.type).filter((g) => !z(g));
    return Array.from(new Set(i)).sort().join(".");
  }), d = an({ ...n.data });
  un(() => n.data, (i) => {
    Object.assign(d, i);
  }), await Vn(n.body, { tags: s.value });
  function c(i, g) {
    const b = i.split(".").length - 1;
    return i.split(".").reduce((v, x, w) => w == b && v ? (v[x] = g, v[x]) : typeof v == "object" ? v[x] : void 0, d);
  }
  return { tags: s, contentKey: f, route: t, runtimeData: d, updateRuntimeData: c };
}, render(n) {
  var _a, _b;
  const { tags: e, tag: o, body: t, data: r, contentKey: a, route: s, unwrap: f, runtimeData: d, updateRuntimeData: c } = n;
  if (!t) return null;
  const i = { ...r, tags: e, $route: s, runtimeData: d, updateRuntimeData: c }, g = o !== false ? A(o || ((_a = i.component) == null ? void 0 : _a.name) || i.component || "div") : void 0;
  return g ? _(g, { ...(_b = i.component) == null ? void 0 : _b.props, class: n.class, ...this.$attrs, key: a }, { default: b }) : b == null ? void 0 : b();
  function b() {
    const v = Q(t, _, { documentMeta: i, parentScope: i, resolveComponent: A });
    return (v == null ? void 0 : v.default) ? f ? N(v.default(), typeof f == "string" ? f.split(" ") : ["*"]) : v.default() : null;
  }
} });
function An(n, e, o, t) {
  const { documentMeta: r, parentScope: a, resolveComponent: s } = o;
  if (n.type === "text") return e(D, n.value);
  if (n.type === "comment") return e(pn, null, n.value);
  const f = n.tag, d = en(n, r.tags);
  if (n.tag === "binding") return Un(n, e, r, a);
  const c = nn(d) ? (b) => b : s;
  if (Rn.includes(U(d).toLowerCase())) return e("pre", { class: "mdc-renderer-dangerous-tag" }, "<" + d + ">" + fn(n) + "</" + d + ">");
  const i = c(d);
  typeof i == "object" && (i.tag = f);
  const g = Bn(n, r);
  return t && (g.key = t), e(i, g, Q(n, e, { documentMeta: r, parentScope: { ...a, ...g }, resolveComponent: c }));
}
function Q(n, e, o) {
  const { documentMeta: t, parentScope: r, resolveComponent: a } = o, f = (n.children || []).reduce((c, i) => {
    if (!Fn(i)) return c[E].children.push(i), c;
    const g = Hn(i);
    return c[g] = c[g] || { props: {}, children: [] }, i.type === "element" && (c[g].props = i.props, c[g].children.push(...i.children || [])), c;
  }, { [E]: { props: {}, children: [] } });
  return Object.entries(f).reduce((c, [i, { props: g, children: b }]) => (b.length && (c[i] = (v = {}) => {
    const x = Pn(v, Object.keys(g || {}));
    let w = b.map((I, ln) => {
      var _a;
      return An(I, e, { documentMeta: t, parentScope: { ...r, ...x }, resolveComponent: a }, String(((_a = I.props) == null ? void 0 : _a.key) || ln));
    });
    return (g == null ? void 0 : g.unwrap) && (w = N(w, g.unwrap)), Nn(w);
  }), c), {});
}
function Un(n, e, o, t = {}) {
  var _a, _b;
  const r = { ...o.runtimeData, ...t, $document: o, $doc: o }, a = /\.|\[(\d+)\]/, f = ((_a = n.props) == null ? void 0 : _a.value.trim().split(a).filter(Boolean)).reduce((c, i) => {
    if (c && i in c) return typeof c[i] == "function" ? c[i]() : c[i];
  }, r), d = (_b = n.props) == null ? void 0 : _b.defaultValue;
  return e(D, f ?? d ?? "");
}
function Bn(n, e) {
  const { tag: o = "", props: t = {} } = n;
  return Object.keys(t).reduce(function(r, a) {
    if (a === "__ignoreMap") return r;
    const s = t[a];
    if (On.test(a)) return zn(a, s, r, e, { native: Mn.includes(o) });
    if (a === "v-bind") return In(a, s, r, e);
    if (Z.test(a)) return _n(a, s, r, e);
    if (J.test(a)) return jn(a, s, r, e);
    const { attribute: f } = Cn(wn, a);
    return Array.isArray(s) && s.every((d) => typeof d == "string") ? (r[f] = s.join(" "), r) : (r[f] = s, r);
  }, {});
}
function zn(n, e, o, t, { native: r }) {
  var _a;
  const a = ((_a = n.match(/^v-model:([^=]+)/)) == null ? void 0 : _a[1]) || "modelValue", s = r ? "value" : a, f = r ? "onInput" : `onUpdate:${a}`;
  return o[s] = O(e, t.runtimeData), o[f] = (d) => {
    var _a2;
    t.updateRuntimeData(e, r ? (_a2 = d.target) == null ? void 0 : _a2.value : d);
  }, o;
}
function In(n, e, o, t) {
  const r = O(e, t);
  return o = Object.assign(o, r), o;
}
function _n(n, e, o, t) {
  return n = n.replace(Z, ""), o.on = o.on || {}, o.on[n] = () => O(e, t), o;
}
function jn(n, e, o, t) {
  return n = n.replace(J, ""), o[n] = O(e, t), o;
}
const A = (n) => {
  if (typeof n == "string") {
    if (z(n)) return n;
    const e = sn(U(n), false);
    return !n || (e == null ? void 0 : e.name) === "AsyncComponentWrapper" || typeof e == "string" ? e : "setup" in e ? cn(() => new Promise((o) => o(e))) : e;
  }
  return n;
};
function O(n, e) {
  const o = n.split(".").reduce((t, r) => typeof t == "object" ? t[r] : void 0, e);
  return typeof o > "u" ? gn(n) : o;
}
function Hn(n) {
  let e = "";
  for (const o of Object.keys(n.props || {})) if (!(!o.startsWith("#") && !o.startsWith("v-slot:"))) {
    e = o.split(/[:#]/, 2)[1];
    break;
  }
  return e || E;
}
function Fn(n) {
  return n.tag === "template";
}
function nn(n) {
  return Ln.has(n);
}
function Nn(n) {
  const e = [];
  for (const o of n) {
    const t = e[e.length - 1];
    o.type === D && (t == null ? void 0 : t.type) === D ? t.children = t.children + o.children : e.push(o);
  }
  return e;
}
async function Vn(n, e) {
  if (!n) return;
  const o = Array.from(new Set(t(n, e)));
  await Promise.all(o.map(async (r) => {
    if ((r == null ? void 0 : r.render) || (r == null ? void 0 : r.ssrRender) || (r == null ? void 0 : r.__ssrInlineRender)) return;
    const a = A(r);
    (a == null ? void 0 : a.__asyncLoader) && !a.__asyncResolved && await a.__asyncLoader();
  }));
  function t(r, a) {
    const s = r.tag;
    if (r.type === "text" || s === "binding" || r.type === "comment") return [];
    const f = en(r, a.tags);
    if (nn(f)) return [];
    const d = [];
    r.type !== "root" && !z(f) && d.push(f);
    for (const c of r.children || []) d.push(...t(c, a));
    return d;
  }
}
function en(n, e) {
  var _a;
  const o = n.tag;
  return !o || typeof ((_a = n.props) == null ? void 0 : _a.__ignoreMap) < "u" ? o : e[o] || e[U(o)] || e[dn(n.tag)] || o;
}
function z(n) {
  return (typeof n == "string" ? G.has(n) : false) || mn.has(n);
}
const $n = Object.assign(En, { __name: "MDCRenderer" });
export {
  $n as _,
  wn as a,
  Cn as f,
  mn as h,
  L as n,
  Kn as s
};
