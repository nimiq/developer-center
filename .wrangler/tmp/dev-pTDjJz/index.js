var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key2 in headers) {
    if (Array.isArray(headers[key2])) {
      for (const h of headers[key2]) {
        rawHeaders2.push(key2, h);
      }
    } else {
      rawHeaders2.push(key2, headers[key2]);
    }
  }
  return rawHeaders2;
}
__name(rawHeaders, "rawHeaders");
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener2, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener2, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/wrangler@4.58.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count3, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/@cloudflare+unenv-preset@2.8.0_unenv@2.0.0-rc.24_workerd@1.20260107.1/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
var unenvProcess = new Process({
  env: globalProcess.env,
  // `hrtime` is only available from workerd process v2
  hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  // Always implemented by workerd
  env,
  // Only implemented in workerd v2
  hrtime: hrtime3,
  // Always implemented by workerd
  nextTick
} = unenvProcess;
var {
  _channel,
  _disconnect,
  _events,
  _eventsCount,
  _handleQueue,
  _maxListeners,
  _pendingMessage,
  _send,
  assert: assert2,
  disconnect,
  mainModule
} = unenvProcess;
var {
  // @ts-expect-error `_debugEnd` is missing typings
  _debugEnd,
  // @ts-expect-error `_debugProcess` is missing typings
  _debugProcess,
  // @ts-expect-error `_exiting` is missing typings
  _exiting,
  // @ts-expect-error `_fatalException` is missing typings
  _fatalException,
  // @ts-expect-error `_getActiveHandles` is missing typings
  _getActiveHandles,
  // @ts-expect-error `_getActiveRequests` is missing typings
  _getActiveRequests,
  // @ts-expect-error `_kill` is missing typings
  _kill,
  // @ts-expect-error `_linkedBinding` is missing typings
  _linkedBinding,
  // @ts-expect-error `_preload_modules` is missing typings
  _preload_modules,
  // @ts-expect-error `_rawDebug` is missing typings
  _rawDebug,
  // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
  _startProfilerIdleNotifier,
  // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
  _stopProfilerIdleNotifier,
  // @ts-expect-error `_tickCallback` is missing typings
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  availableMemory,
  // @ts-expect-error `binding` is missing typings
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  // @ts-expect-error `domain` is missing typings
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  // @ts-expect-error `initgroups` is missing typings
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  // @ts-expect-error `moduleLoadList` is missing typings
  moduleLoadList,
  off,
  on,
  once,
  // @ts-expect-error `openStdin` is missing typings
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  // @ts-expect-error `reallyExit` is missing typings
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = isWorkerdProcessV2 ? workerdProcess : unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/wrangler@4.58.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/request.mjs
import { Socket } from "node:net";
import { Readable } from "node:stream";
var IncomingMessage = class extends Readable {
  static {
    __name(this, "IncomingMessage");
  }
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
  _read() {
  }
};
function _distinct(obj) {
  const d = {};
  for (const [key2, value] of Object.entries(obj)) {
    if (key2) {
      d[key2] = (Array.isArray(value) ? value : [value]).filter(Boolean);
    }
  }
  return d;
}
__name(_distinct, "_distinct");

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/response.mjs
import { Writable as Writable2 } from "node:stream";
var ServerResponse = class extends Writable2 {
  static {
    __name(this, "ServerResponse");
  }
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) {
      } else {
        for (const key2 in headers) {
          this.setHeader(key2, headers[key2]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [...Array.isArray(current) ? current : [current], ...Array.isArray(value) ? value : [value]].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = Array.isArray(value) ? [...value] : value;
    return this;
  }
  setHeaders(headers) {
    for (const [key2, value] of headers.entries()) {
      this.setHeader(key2, value);
    }
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/agent.mjs
import { EventEmitter as EventEmitter2 } from "node:events";
var Agent = class extends EventEmitter2 {
  static {
    __name(this, "Agent");
  }
  __unenv__ = {};
  maxFreeSockets = 256;
  maxSockets = Infinity;
  maxTotalSockets = Infinity;
  freeSockets = {};
  sockets = {};
  requests = {};
  options;
  constructor(opts = {}) {
    super();
    this.options = opts;
  }
  destroy() {
  }
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/http/constants.mjs
var METHODS = [
  "ACL",
  "BIND",
  "CHECKOUT",
  "CONNECT",
  "COPY",
  "DELETE",
  "GET",
  "HEAD",
  "LINK",
  "LOCK",
  "M-SEARCH",
  "MERGE",
  "MKACTIVITY",
  "MKCALENDAR",
  "MKCOL",
  "MOVE",
  "NOTIFY",
  "OPTIONS",
  "PATCH",
  "POST",
  "PRI",
  "PROPFIND",
  "PROPPATCH",
  "PURGE",
  "PUT",
  "REBIND",
  "REPORT",
  "SEARCH",
  "SOURCE",
  "SUBSCRIBE",
  "TRACE",
  "UNBIND",
  "UNLINK",
  "UNLOCK",
  "UNSUBSCRIBE"
];
var STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
var maxHeaderSize = 16384;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/http.mjs
var createServer = /* @__PURE__ */ notImplemented("http.createServer");
var request = /* @__PURE__ */ notImplemented("http.request");
var get = /* @__PURE__ */ notImplemented("http.get");
var Server = /* @__PURE__ */ notImplementedClass("http.Server");
var OutgoingMessage = /* @__PURE__ */ notImplementedClass("http.OutgoingMessage");
var ClientRequest = /* @__PURE__ */ notImplementedClass("http.ClientRequest");
var globalAgent = new Agent();
var validateHeaderName = /* @__PURE__ */ notImplemented("http.validateHeaderName");
var validateHeaderValue = /* @__PURE__ */ notImplemented("http.validateHeaderValue");
var setMaxIdleHTTPParsers = /* @__PURE__ */ notImplemented("http.setMaxIdleHTTPParsers");
var _connectionListener = /* @__PURE__ */ notImplemented("http._connectionListener");
var WebSocket = globalThis.WebSocket || /* @__PURE__ */ notImplementedClass("WebSocket");
var CloseEvent = globalThis.CloseEvent || /* @__PURE__ */ notImplementedClass("CloseEvent");
var MessageEvent = globalThis.MessageEvent || /* @__PURE__ */ notImplementedClass("MessageEvent");
var http_default = {
  METHODS,
  STATUS_CODES,
  maxHeaderSize,
  IncomingMessage,
  ServerResponse,
  WebSocket,
  CloseEvent,
  MessageEvent,
  createServer,
  request,
  get,
  Server,
  OutgoingMessage,
  ClientRequest,
  Agent,
  globalAgent,
  validateHeaderName,
  validateHeaderValue,
  setMaxIdleHTTPParsers,
  _connectionListener
};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/https.mjs
var Server2 = /* @__PURE__ */ notImplementedClass("https.Server");

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs
var access = /* @__PURE__ */ notImplemented("fs.access");
var copyFile = /* @__PURE__ */ notImplemented("fs.copyFile");
var cp = /* @__PURE__ */ notImplemented("fs.cp");
var open = /* @__PURE__ */ notImplemented("fs.open");
var opendir = /* @__PURE__ */ notImplemented("fs.opendir");
var rename = /* @__PURE__ */ notImplemented("fs.rename");
var truncate = /* @__PURE__ */ notImplemented("fs.truncate");
var rm = /* @__PURE__ */ notImplemented("fs.rm");
var rmdir = /* @__PURE__ */ notImplemented("fs.rmdir");
var mkdir = /* @__PURE__ */ notImplemented("fs.mkdir");
var readdir = /* @__PURE__ */ notImplemented("fs.readdir");
var readlink = /* @__PURE__ */ notImplemented("fs.readlink");
var symlink = /* @__PURE__ */ notImplemented("fs.symlink");
var lstat = /* @__PURE__ */ notImplemented("fs.lstat");
var stat = /* @__PURE__ */ notImplemented("fs.stat");
var link = /* @__PURE__ */ notImplemented("fs.link");
var unlink = /* @__PURE__ */ notImplemented("fs.unlink");
var chmod = /* @__PURE__ */ notImplemented("fs.chmod");
var lchmod = /* @__PURE__ */ notImplemented("fs.lchmod");
var lchown = /* @__PURE__ */ notImplemented("fs.lchown");
var chown = /* @__PURE__ */ notImplemented("fs.chown");
var utimes = /* @__PURE__ */ notImplemented("fs.utimes");
var lutimes = /* @__PURE__ */ notImplemented("fs.lutimes");
var realpath = /* @__PURE__ */ notImplemented("fs.realpath");
var mkdtemp = /* @__PURE__ */ notImplemented("fs.mkdtemp");
var writeFile = /* @__PURE__ */ notImplemented("fs.writeFile");
var appendFile = /* @__PURE__ */ notImplemented("fs.appendFile");
var readFile = /* @__PURE__ */ notImplemented("fs.readFile");
var watch = /* @__PURE__ */ notImplemented("fs.watch");
var statfs = /* @__PURE__ */ notImplemented("fs.statfs");
var glob = /* @__PURE__ */ notImplemented("fs.glob");

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  COPYFILE_EXCL: () => COPYFILE_EXCL,
  COPYFILE_FICLONE: () => COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: () => COPYFILE_FICLONE_FORCE,
  EXTENSIONLESS_FORMAT_JAVASCRIPT: () => EXTENSIONLESS_FORMAT_JAVASCRIPT,
  EXTENSIONLESS_FORMAT_WASM: () => EXTENSIONLESS_FORMAT_WASM,
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECT: () => O_DIRECT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOATIME: () => O_NOATIME,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  S_IFBLK: () => S_IFBLK,
  S_IFCHR: () => S_IFCHR,
  S_IFDIR: () => S_IFDIR,
  S_IFIFO: () => S_IFIFO,
  S_IFLNK: () => S_IFLNK,
  S_IFMT: () => S_IFMT,
  S_IFREG: () => S_IFREG,
  S_IFSOCK: () => S_IFSOCK,
  S_IRGRP: () => S_IRGRP,
  S_IROTH: () => S_IROTH,
  S_IRUSR: () => S_IRUSR,
  S_IRWXG: () => S_IRWXG,
  S_IRWXO: () => S_IRWXO,
  S_IRWXU: () => S_IRWXU,
  S_IWGRP: () => S_IWGRP,
  S_IWOTH: () => S_IWOTH,
  S_IWUSR: () => S_IWUSR,
  S_IXGRP: () => S_IXGRP,
  S_IXOTH: () => S_IXOTH,
  S_IXUSR: () => S_IXUSR,
  UV_DIRENT_BLOCK: () => UV_DIRENT_BLOCK,
  UV_DIRENT_CHAR: () => UV_DIRENT_CHAR,
  UV_DIRENT_DIR: () => UV_DIRENT_DIR,
  UV_DIRENT_FIFO: () => UV_DIRENT_FIFO,
  UV_DIRENT_FILE: () => UV_DIRENT_FILE,
  UV_DIRENT_LINK: () => UV_DIRENT_LINK,
  UV_DIRENT_SOCKET: () => UV_DIRENT_SOCKET,
  UV_DIRENT_UNKNOWN: () => UV_DIRENT_UNKNOWN,
  UV_FS_COPYFILE_EXCL: () => UV_FS_COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: () => UV_FS_COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: () => UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_O_FILEMAP: () => UV_FS_O_FILEMAP,
  UV_FS_SYMLINK_DIR: () => UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: () => UV_FS_SYMLINK_JUNCTION,
  W_OK: () => W_OK,
  X_OK: () => X_OK
});
var UV_FS_SYMLINK_DIR = 1;
var UV_FS_SYMLINK_JUNCTION = 2;
var O_RDONLY = 0;
var O_WRONLY = 1;
var O_RDWR = 2;
var UV_DIRENT_UNKNOWN = 0;
var UV_DIRENT_FILE = 1;
var UV_DIRENT_DIR = 2;
var UV_DIRENT_LINK = 3;
var UV_DIRENT_FIFO = 4;
var UV_DIRENT_SOCKET = 5;
var UV_DIRENT_CHAR = 6;
var UV_DIRENT_BLOCK = 7;
var EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
var EXTENSIONLESS_FORMAT_WASM = 1;
var S_IFMT = 61440;
var S_IFREG = 32768;
var S_IFDIR = 16384;
var S_IFCHR = 8192;
var S_IFBLK = 24576;
var S_IFIFO = 4096;
var S_IFLNK = 40960;
var S_IFSOCK = 49152;
var O_CREAT = 64;
var O_EXCL = 128;
var UV_FS_O_FILEMAP = 0;
var O_NOCTTY = 256;
var O_TRUNC = 512;
var O_APPEND = 1024;
var O_DIRECTORY = 65536;
var O_NOATIME = 262144;
var O_NOFOLLOW = 131072;
var O_SYNC = 1052672;
var O_DSYNC = 4096;
var O_DIRECT = 16384;
var O_NONBLOCK = 2048;
var S_IRWXU = 448;
var S_IRUSR = 256;
var S_IWUSR = 128;
var S_IXUSR = 64;
var S_IRWXG = 56;
var S_IRGRP = 32;
var S_IWGRP = 16;
var S_IXGRP = 8;
var S_IRWXO = 7;
var S_IROTH = 4;
var S_IWOTH = 2;
var S_IXOTH = 1;
var F_OK = 0;
var R_OK = 4;
var W_OK = 2;
var X_OK = 1;
var UV_FS_COPYFILE_EXCL = 1;
var COPYFILE_EXCL = 1;
var UV_FS_COPYFILE_FICLONE = 2;
var COPYFILE_FICLONE = 2;
var UV_FS_COPYFILE_FICLONE_FORCE = 4;
var COPYFILE_FICLONE_FORCE = 4;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/unenv@2.0.0-rc.24/node_modules/unenv/dist/runtime/node/fs/promises.mjs
var promises_default = {
  constants: constants_exports,
  access,
  appendFile,
  chmod,
  chown,
  copyFile,
  cp,
  glob,
  lchmod,
  lchown,
  link,
  lstat,
  lutimes,
  mkdir,
  mkdtemp,
  open,
  opendir,
  readFile,
  readdir,
  readlink,
  realpath,
  rename,
  rm,
  rmdir,
  stat,
  statfs,
  symlink,
  truncate,
  unlink,
  utimes,
  watch,
  writeFile
};

// .output/server/index.mjs
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
globalThis.__nitro_main__ = import.meta.url;
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key2, value) {
  if (key2 === "__proto__" || key2 === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key2);
    return;
  }
  return value;
}
__name(jsonParseTransform, "jsonParseTransform");
function warnKeyDropped(key2) {
  console.warn(`[destr] Dropping "${key2}" key to prevent prototype pollution.`);
}
__name(warnKeyDropped, "warnKeyDropped");
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error3) {
    if (options.strict) {
      throw error3;
    }
    return value;
  }
}
__name(destr, "destr");
function lazyInherit(target, source, sourceKey) {
  for (const key2 of Object.getOwnPropertyNames(source)) {
    const targetDesc = Object.getOwnPropertyDescriptor(target, key2);
    const desc = Object.getOwnPropertyDescriptor(source, key2);
    let modified = false;
    if (desc.get) {
      modified = true;
      desc.get = targetDesc?.get || function() {
        return this[sourceKey][key2];
      };
    }
    if (desc.set) {
      modified = true;
      desc.set = targetDesc?.set || function(value) {
        this[sourceKey][key2] = value;
      };
    }
    if (typeof desc.value === "function") {
      modified = true;
      desc.value = function(...args) {
        return this[sourceKey][key2](...args);
      };
    }
    if (modified) Object.defineProperty(target, key2, desc);
  }
}
__name(lazyInherit, "lazyInherit");
var FastURL = /* @__PURE__ */ (() => {
  const NativeURL = globalThis.URL;
  const FastURL$1 = class URL {
    static {
      __name(this, "URL");
    }
    #url;
    #href;
    #protocol;
    #host;
    #pathname;
    #search;
    #searchParams;
    #pos;
    constructor(url) {
      if (typeof url === "string") this.#href = url;
      else {
        this.#protocol = url.protocol;
        this.#host = url.host;
        this.#pathname = url.pathname;
        this.#search = url.search;
      }
    }
    get _url() {
      if (this.#url) return this.#url;
      this.#url = new NativeURL(this.href);
      this.#href = void 0;
      this.#protocol = void 0;
      this.#host = void 0;
      this.#pathname = void 0;
      this.#search = void 0;
      this.#searchParams = void 0;
      this.#pos = void 0;
      return this.#url;
    }
    get href() {
      if (this.#url) return this.#url.href;
      if (!this.#href) this.#href = `${this.#protocol || "http:"}//${this.#host || "localhost"}${this.#pathname || "/"}${this.#search || ""}`;
      return this.#href;
    }
    #getPos() {
      if (!this.#pos) {
        const url = this.href;
        const protoIndex = url.indexOf("://");
        const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
        const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
        this.#pos = [
          protoIndex,
          pathnameIndex,
          qIndex
        ];
      }
      return this.#pos;
    }
    get pathname() {
      if (this.#url) return this.#url.pathname;
      if (this.#pathname === void 0) {
        const [, pathnameIndex, queryIndex] = this.#getPos();
        if (pathnameIndex === -1) return this._url.pathname;
        this.#pathname = this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex);
      }
      return this.#pathname;
    }
    get search() {
      if (this.#url) return this.#url.search;
      if (this.#search === void 0) {
        const [, pathnameIndex, queryIndex] = this.#getPos();
        if (pathnameIndex === -1) return this._url.search;
        const url = this.href;
        this.#search = queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex);
      }
      return this.#search;
    }
    get searchParams() {
      if (this.#url) return this.#url.searchParams;
      if (!this.#searchParams) this.#searchParams = new URLSearchParams(this.search);
      return this.#searchParams;
    }
    get protocol() {
      if (this.#url) return this.#url.protocol;
      if (this.#protocol === void 0) {
        const [protocolIndex] = this.#getPos();
        if (protocolIndex === -1) return this._url.protocol;
        const url = this.href;
        this.#protocol = url.slice(0, protocolIndex + 1);
      }
      return this.#protocol;
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
  };
  lazyInherit(FastURL$1.prototype, NativeURL.prototype, "_url");
  Object.setPrototypeOf(FastURL$1.prototype, NativeURL.prototype);
  Object.setPrototypeOf(FastURL$1, NativeURL);
  return FastURL$1;
})();
function splitSetCookieString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitSetCookieString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }, "skipWhitespace");
  const notSpecialChar = /* @__PURE__ */ __name(() => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }, "notSpecialChar");
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}
__name(splitSetCookieString, "splitSetCookieString");
var kNodeInspect = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
var NodeRequestHeaders = /* @__PURE__ */ (() => {
  const _Headers = class Headers$1 {
    static {
      __name(this, "Headers$1");
    }
    _node;
    constructor(nodeCtx) {
      this._node = nodeCtx;
    }
    append(name, value) {
      name = validateHeader(name);
      const _headers = this._node.req.headers;
      const _current = _headers[name];
      if (_current) if (Array.isArray(_current)) _current.push(value);
      else _headers[name] = [_current, value];
      else _headers[name] = value;
    }
    delete(name) {
      name = validateHeader(name);
      this._node.req.headers[name] = void 0;
    }
    get(name) {
      name = validateHeader(name);
      const rawValue = this._node.req.headers[name];
      if (rawValue === void 0) return null;
      return _normalizeValue(this._node.req.headers[name]);
    }
    getSetCookie() {
      const setCookie = this._node.req.headers["set-cookie"];
      if (!setCookie || setCookie.length === 0) return [];
      return splitSetCookieString(setCookie);
    }
    has(name) {
      name = validateHeader(name);
      return !!this._node.req.headers[name];
    }
    set(name, value) {
      name = validateHeader(name);
      this._node.req.headers[name] = value;
    }
    get count() {
      throw new Error("Method not implemented.");
    }
    getAll(_name) {
      throw new Error("Method not implemented.");
    }
    toJSON() {
      const _headers = this._node.req.headers;
      const result = {};
      for (const key2 in _headers) if (_headers[key2]) result[key2] = _normalizeValue(_headers[key2]);
      return result;
    }
    forEach(cb, thisArg) {
      const _headers = this._node.req.headers;
      for (const key2 in _headers) if (_headers[key2]) cb.call(thisArg, _normalizeValue(_headers[key2]), key2, this);
    }
    *entries() {
      const headers = this._node.req.headers;
      const isHttp2 = this._node.req.httpVersion === "2.0";
      for (const key2 in headers) if (!isHttp2 || key2[0] !== ":") yield [key2, _normalizeValue(headers[key2])];
    }
    *keys() {
      const keys = Object.keys(this._node.req.headers);
      for (const key2 of keys) yield key2;
    }
    *values() {
      const values = Object.values(this._node.req.headers);
      for (const value of values) yield _normalizeValue(value);
    }
    [Symbol.iterator]() {
      return this.entries()[Symbol.iterator]();
    }
    get [Symbol.toStringTag]() {
      return "Headers";
    }
    [kNodeInspect]() {
      return Object.fromEntries(this.entries());
    }
  };
  Object.setPrototypeOf(_Headers.prototype, globalThis.Headers.prototype);
  return _Headers;
})();
function _normalizeValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  return typeof value === "string" ? value : String(value ?? "");
}
__name(_normalizeValue, "_normalizeValue");
function validateHeader(name) {
  if (name[0] === ":") throw new TypeError(`${JSON.stringify(name)} is an invalid header name.`);
  return name.toLowerCase();
}
__name(validateHeader, "validateHeader");
var NodeResponse = /* @__PURE__ */ (() => {
  const NativeResponse = globalThis.Response;
  const STATUS_CODES2 = globalThis.process?.getBuiltinModule?.("node:http")?.STATUS_CODES || {};
  class NodeResponse$1 {
    static {
      __name(this, "NodeResponse$1");
    }
    #body;
    #init;
    #headers;
    #response;
    constructor(body, init) {
      this.#body = body;
      this.#init = init;
    }
    get status() {
      return this.#response?.status || this.#init?.status || 200;
    }
    get statusText() {
      return this.#response?.statusText || this.#init?.statusText || STATUS_CODES2[this.status] || "";
    }
    get headers() {
      if (this.#response) return this.#response.headers;
      if (this.#headers) return this.#headers;
      const initHeaders = this.#init?.headers;
      return this.#headers = initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders);
    }
    get ok() {
      if (this.#response) return this.#response.ok;
      const status = this.status;
      return status >= 200 && status < 300;
    }
    get _response() {
      if (this.#response) return this.#response;
      this.#response = new NativeResponse(this.#body, this.#headers ? {
        ...this.#init,
        headers: this.#headers
      } : this.#init);
      this.#init = void 0;
      this.#headers = void 0;
      this.#body = void 0;
      return this.#response;
    }
    nodeResponse() {
      const status = this.status;
      const statusText = this.statusText;
      let body;
      let contentType;
      let contentLength;
      if (this.#response) body = this.#response.body;
      else if (this.#body) if (this.#body instanceof ReadableStream) body = this.#body;
      else if (typeof this.#body === "string") {
        body = this.#body;
        contentType = "text/plain; charset=UTF-8";
        contentLength = Buffer.byteLength(this.#body);
      } else if (this.#body instanceof ArrayBuffer) {
        body = Buffer.from(this.#body);
        contentLength = this.#body.byteLength;
      } else if (this.#body instanceof Uint8Array) {
        body = this.#body;
        contentLength = this.#body.byteLength;
      } else if (this.#body instanceof DataView) {
        body = Buffer.from(this.#body.buffer);
        contentLength = this.#body.byteLength;
      } else if (this.#body instanceof Blob) {
        body = this.#body.stream();
        contentType = this.#body.type;
        contentLength = this.#body.size;
      } else if (typeof this.#body.pipe === "function") body = this.#body;
      else body = this._response.body;
      const rawNodeHeaders = [];
      const initHeaders = this.#init?.headers;
      const headerEntries = this.#response?.headers || this.#headers || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders).map(([k, v]) => [k.toLowerCase(), v]) : void 0);
      let hasContentTypeHeader;
      let hasContentLength;
      if (headerEntries) for (const [key2, value] of headerEntries) {
        if (key2 === "set-cookie") {
          for (const setCookie of splitSetCookieString(value)) rawNodeHeaders.push(["set-cookie", setCookie]);
          continue;
        }
        rawNodeHeaders.push([key2, value]);
        if (key2 === "content-type") hasContentTypeHeader = true;
        else if (key2 === "content-length") hasContentLength = true;
      }
      if (contentType && !hasContentTypeHeader) rawNodeHeaders.push(["content-type", contentType]);
      if (contentLength && !hasContentLength) rawNodeHeaders.push(["content-length", String(contentLength)]);
      this.#init = void 0;
      this.#headers = void 0;
      this.#response = void 0;
      this.#body = void 0;
      return {
        status,
        statusText,
        headers: rawNodeHeaders,
        body
      };
    }
  }
  lazyInherit(NodeResponse$1.prototype, NativeResponse.prototype, "_response");
  Object.setPrototypeOf(NodeResponse$1, NativeResponse);
  Object.setPrototypeOf(NodeResponse$1.prototype, NativeResponse.prototype);
  return NodeResponse$1;
})();
async function sendNodeResponse(nodeRes, webRes) {
  if (!webRes) {
    nodeRes.statusCode = 500;
    return endNodeResponse(nodeRes);
  }
  if (webRes.nodeResponse) {
    const res = webRes.nodeResponse();
    writeHead(nodeRes, res.status, res.statusText, res.headers.flat());
    if (res.body) {
      if (res.body instanceof ReadableStream) return streamBody(res.body, nodeRes);
      else if (typeof res.body?.pipe === "function") {
        res.body.pipe(nodeRes);
        return new Promise((resolve2) => nodeRes.on("close", resolve2));
      }
      nodeRes.write(res.body);
    }
    return endNodeResponse(nodeRes);
  }
  const headerEntries = [];
  for (const [key2, value] of webRes.headers) if (key2 === "set-cookie") for (const setCookie of splitSetCookieString(value)) headerEntries.push(["set-cookie", setCookie]);
  else headerEntries.push([key2, value]);
  writeHead(nodeRes, webRes.status, webRes.statusText, headerEntries.flat());
  return webRes.body ? streamBody(webRes.body, nodeRes) : endNodeResponse(nodeRes);
}
__name(sendNodeResponse, "sendNodeResponse");
function writeHead(nodeRes, status, statusText, headers) {
  if (!nodeRes.headersSent) if (nodeRes.req?.httpVersion === "2.0") nodeRes.writeHead(status, headers.flat());
  else nodeRes.writeHead(status, statusText, headers.flat());
}
__name(writeHead, "writeHead");
function endNodeResponse(nodeRes) {
  return new Promise((resolve2) => nodeRes.end(resolve2));
}
__name(endNodeResponse, "endNodeResponse");
function streamBody(stream, nodeRes) {
  if (nodeRes.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
  function streamCancel(error3) {
    reader.cancel(error3).catch(() => {
    });
    if (error3) nodeRes.destroy(error3);
  }
  __name(streamCancel, "streamCancel");
  function streamHandle({ done, value }) {
    try {
      if (done) nodeRes.end();
      else if (nodeRes.write(value)) reader.read().then(streamHandle, streamCancel);
      else nodeRes.once("drain", () => reader.read().then(streamHandle, streamCancel));
    } catch (error3) {
      streamCancel(error3 instanceof Error ? error3 : void 0);
    }
  }
  __name(streamHandle, "streamHandle");
  nodeRes.on("close", streamCancel);
  nodeRes.on("error", streamCancel);
  reader.read().then(streamHandle, streamCancel);
  return reader.closed.finally(() => {
    nodeRes.off("close", streamCancel);
    nodeRes.off("error", streamCancel);
  });
}
__name(streamBody, "streamBody");
var NodeRequestURL = class extends FastURL {
  static {
    __name(this, "NodeRequestURL");
  }
  #req;
  constructor({ req }) {
    const path2 = req.url || "/";
    if (path2[0] === "/") {
      const qIndex = path2.indexOf("?");
      const pathname = qIndex === -1 ? path2 : path2?.slice(0, qIndex) || "/";
      const search = qIndex === -1 ? "" : path2?.slice(qIndex) || "";
      const host2 = req.headers.host || req.headers[":authority"] || `${req.socket.localFamily === "IPv6" ? "[" + req.socket.localAddress + "]" : req.socket.localAddress}:${req.socket?.localPort || "80"}`;
      const protocol = req.socket?.encrypted || req.headers["x-forwarded-proto"] === "https" || req.headers[":scheme"] === "https" ? "https:" : "http:";
      super({
        protocol,
        host: host2,
        pathname,
        search
      });
    } else super(path2);
    this.#req = req;
  }
  get pathname() {
    return super.pathname;
  }
  set pathname(value) {
    this._url.pathname = value;
    this.#req.url = this._url.pathname + this._url.search;
  }
};
var NodeRequest = /* @__PURE__ */ (() => {
  let Readable2;
  const NativeRequest = globalThis._Request ??= globalThis.Request;
  const PatchedRequest = class Request extends NativeRequest {
    static {
      __name(this, "Request");
    }
    static _srvx = true;
    constructor(input, options) {
      if (typeof input === "object" && "_request" in input) input = input._request;
      if (options?.body?.getReader !== void 0) options.duplex ??= "half";
      super(input, options);
    }
  };
  if (!globalThis.Request._srvx) globalThis.Request = PatchedRequest;
  class NodeRequest$1 {
    static {
      __name(this, "NodeRequest$1");
    }
    _node;
    _url;
    runtime;
    #request;
    #headers;
    #abortSignal;
    constructor(ctx) {
      this._node = ctx;
      this._url = new NodeRequestURL({ req: ctx.req });
      this.runtime = {
        name: "node",
        node: ctx
      };
    }
    get ip() {
      return this._node.req.socket?.remoteAddress;
    }
    get method() {
      return this._node.req.method || "GET";
    }
    get url() {
      return this._url.href;
    }
    get headers() {
      return this.#headers ||= new NodeRequestHeaders(this._node);
    }
    get signal() {
      if (!this.#abortSignal) {
        this.#abortSignal = new AbortController();
        this._node.req.once("close", () => {
          this.#abortSignal?.abort();
        });
      }
      return this.#abortSignal.signal;
    }
    get _request() {
      if (!this.#request) {
        const method = this.method;
        const hasBody = !(method === "GET" || method === "HEAD");
        if (hasBody && !Readable2) Readable2 = process.getBuiltinModule("node:stream").Readable;
        this.#request = new PatchedRequest(this.url, {
          method,
          headers: this.headers,
          signal: this.signal,
          body: hasBody ? Readable2.toWeb(this._node.req) : void 0
        });
      }
      return this.#request;
    }
  }
  lazyInherit(NodeRequest$1.prototype, NativeRequest.prototype, "_request");
  Object.setPrototypeOf(NodeRequest$1.prototype, PatchedRequest.prototype);
  return NodeRequest$1;
})();
function toNodeHandler(fetchHandler) {
  return (nodeReq, nodeRes) => {
    const request2 = new NodeRequest({
      req: nodeReq,
      res: nodeRes
    });
    const res = fetchHandler(request2);
    return res instanceof Promise ? res.then((resolvedRes) => sendNodeResponse(nodeRes, resolvedRes)) : sendNodeResponse(nodeRes, res);
  };
}
__name(toNodeHandler, "toNodeHandler");
function defineNitroErrorHandler(handler) {
  return handler;
}
__name(defineNitroErrorHandler, "defineNitroErrorHandler");
var NUMBER_CHAR_RE = /\d/;
var STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
__name(isUppercase, "isUppercase");
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
__name(splitByCase, "splitByCase");
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
__name(kebabCase, "kebabCase");
function snakeCase(str) {
  return kebabCase(str || "", "_");
}
__name(snakeCase, "snakeCase");
function useRuntimeConfig() {
  return useRuntimeConfig._cached ||= getRuntimeConfig();
}
__name(useRuntimeConfig, "useRuntimeConfig");
function getRuntimeConfig() {
  const runtimeConfig = globalThis.__NITRO_RUNTIME_CONFIG__ || {
    "app": {
      "baseURL": "/"
    },
    "nitro": {
      "routeRules": {}
    }
  };
  const env2 = globalThis.process?.env || {};
  applyEnv(runtimeConfig, {
    prefix: "NITRO_",
    altPrefix: runtimeConfig.nitro?.envPrefix ?? env2?.NITRO_ENV_PREFIX ?? "_",
    envExpansion: runtimeConfig.nitro?.envExpansion ?? env2?.NITRO_ENV_EXPANSION ?? false
  });
  return runtimeConfig;
}
__name(getRuntimeConfig, "getRuntimeConfig");
function getEnv(key2, opts) {
  const envKey = snakeCase(key2).toUpperCase();
  return process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey];
}
__name(getEnv, "getEnv");
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
__name(_isObject, "_isObject");
function applyEnv(obj, opts, parentKey = "") {
  for (const key2 in obj) {
    const subKey = parentKey ? `${parentKey}_${key2}` : key2;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key2])) {
      if (_isObject(envValue)) {
        obj[key2] = { ...obj[key2], ...envValue };
        applyEnv(obj[key2], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key2], opts, subKey);
      } else {
        obj[key2] = envValue ?? obj[key2];
      }
    } else {
      obj[key2] = envValue ?? obj[key2];
    }
    if (opts.envExpansion && typeof obj[key2] === "string") {
      obj[key2] = _expandFromEnv(obj[key2]);
    }
  }
  return obj;
}
__name(applyEnv, "applyEnv");
var envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key2) => {
    return process.env[key2] || match;
  });
}
__name(_expandFromEnv, "_expandFromEnv");
var NullProtoObj = /* @__PURE__ */ (() => {
  const e = /* @__PURE__ */ __name(function() {
  }, "e");
  return e.prototype = /* @__PURE__ */ Object.create(null), Object.freeze(e.prototype), e;
})();
var kEventNS = "h3.internal.event.";
var kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
var kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
var H3Event = class {
  static {
    __name(this, "H3Event");
  }
  /**
  * Access to the H3 application instance.
  */
  app;
  /**
  * Incoming HTTP request info.
  *
  * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Request)
  */
  req;
  /**
  * Access to the parsed request URL.
  *
  * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/URL)
  */
  url;
  /**
  * Event context.
  */
  context;
  /**
  * @internal
  */
  static __is_event__ = true;
  constructor(req, context2, app) {
    this.context = context2 || req.context || new NullProtoObj();
    this.req = req;
    this.app = app;
    const _url = req._url;
    this.url = _url && _url instanceof URL ? _url : new FastURL(req.url);
  }
  /**
  * Prepared HTTP response.
  */
  get res() {
    return this[kEventRes] ||= new H3EventResponse();
  }
  /**
  * Access to runtime specific additional context.
  *
  */
  get runtime() {
    return this.req.runtime;
  }
  /**
  * Tell the runtime about an ongoing operation that shouldn't close until the promise resolves.
  */
  waitUntil(promise) {
    this.req.waitUntil?.(promise);
  }
  toString() {
    return `[${this.req.method}] ${this.req.url}`;
  }
  toJSON() {
    return this.toString();
  }
  /**
  * Access to the raw Node.js req/res objects.
  *
  * @deprecated Use `event.runtime.{node|deno|bun|...}.` instead.
  */
  get node() {
    return this.req.runtime?.node;
  }
  /**
  * Access to the incoming request headers.
  *
  * @deprecated Use `event.req.headers` instead.
  *
  */
  get headers() {
    return this.req.headers;
  }
  /**
  * Access to the incoming request url (pathname+search).
  *
  * @deprecated Use `event.url.pathname + event.url.search` instead.
  *
  * Example: `/api/hello?name=world`
  * */
  get path() {
    return this.url.pathname + this.url.search;
  }
  /**
  * Access to the incoming request method.
  *
  * @deprecated Use `event.req.method` instead.
  */
  get method() {
    return this.req.method;
  }
};
var H3EventResponse = class {
  static {
    __name(this, "H3EventResponse");
  }
  status;
  statusText;
  get headers() {
    return this[kEventResHeaders] ||= new Headers();
  }
};
var DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
__name(sanitizeStatusMessage, "sanitizeStatusMessage");
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) return defaultStatusCode;
  if (typeof statusCode === "string") statusCode = +statusCode;
  if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
  return statusCode;
}
__name(sanitizeStatusCode, "sanitizeStatusCode");
var HTTPError = class HTTPError2 extends Error {
  static {
    __name(this, "HTTPError");
  }
  get name() {
    return "HTTPError";
  }
  /**
  * HTTP status code in range [200...599]
  */
  status;
  /**
  * HTTP status text
  *
  * **NOTE:** This should be short (max 512 to 1024 characters).
  * Allowed characters are tabs, spaces, visible ASCII characters, and extended characters (byte value 128–255).
  *
  * **TIP:** Use `message` for longer error descriptions in JSON body.
  */
  statusText;
  /**
  * Additional HTTP headers to be sent in error response.
  */
  headers;
  /**
  * Original error object that caused this error.
  */
  cause;
  /**
  * Additional data attached in the error JSON body under `data` key.
  */
  data;
  /**
  * Additional top level JSON body properties to attach in the error JSON body.
  */
  body;
  /**
  * Flag to indicate that the error was not handled by the application.
  *
  * Unhandled error stack trace, data and message are hidden in non debug mode for security reasons.
  */
  unhandled;
  /**
  * Check if the input is an instance of HTTPError using its constructor name.
  *
  * It is safer than using `instanceof` because it works across different contexts (e.g., if the error was thrown in a different module).
  */
  static isError(input) {
    return input instanceof Error && input?.name === "HTTPError";
  }
  /**
  * Create a new HTTPError with the given status code and optional status text and details.
  *
  * @example
  *
  * HTTPError.status(404)
  * HTTPError.status(418, "I'm a teapot")
  * HTTPError.status(403, "Forbidden", { message: "Not authenticated" })
  */
  static status(status, statusText, details) {
    return new HTTPError2({
      ...details,
      statusText,
      status
    });
  }
  constructor(arg1, arg2) {
    let messageInput;
    let details;
    if (typeof arg1 === "string") {
      messageInput = arg1;
      details = arg2;
    } else details = arg1;
    const status = sanitizeStatusCode(details?.status || details?.cause?.status || details?.status || details?.statusCode, 500);
    const statusText = sanitizeStatusMessage(details?.statusText || details?.cause?.statusText || details?.statusText || details?.statusMessage);
    const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
      "HTTPError",
      status,
      statusText
    ].filter(Boolean).join(" ");
    super(message, { cause: details });
    this.cause = details;
    Error.captureStackTrace?.(this, this.constructor);
    this.status = status;
    this.statusText = statusText || void 0;
    const rawHeaders2 = details?.headers || details?.cause?.headers;
    this.headers = rawHeaders2 ? new Headers(rawHeaders2) : void 0;
    this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
    this.data = details?.data;
    this.body = details?.body;
  }
  /**
  * @deprecated Use `status`
  */
  get statusCode() {
    return this.status;
  }
  /**
  * @deprecated Use `statusText`
  */
  get statusMessage() {
    return this.statusText;
  }
  toJSON() {
    const unhandled = this.unhandled;
    return {
      status: this.status,
      statusText: this.statusText,
      unhandled,
      message: unhandled ? "HTTPError" : this.message,
      data: unhandled ? void 0 : this.data,
      ...unhandled ? void 0 : this.body
    };
  }
};
function isJSONSerializable(value, _type) {
  if (value === null || value === void 0) return true;
  if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
  if (typeof value.toJSON === "function") return true;
  if (Array.isArray(value)) return true;
  if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
  if (value instanceof NullProtoObj) return true;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
__name(isJSONSerializable, "isJSONSerializable");
var kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
var kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config2 = {}) {
  if (typeof val?.then === "function") return (val.catch?.((error3) => error3) || Promise.resolve(val)).then((resolvedVal) => toResponse(resolvedVal, event, config2));
  const response = prepareResponse(val, event, config2);
  if (typeof response?.then === "function") return toResponse(response, event, config2);
  const { onResponse: onResponse$1 } = config2;
  return onResponse$1 ? Promise.resolve(onResponse$1(response, event)).then(() => response) : response;
}
__name(toResponse, "toResponse");
var HTTPResponse = class {
  static {
    __name(this, "HTTPResponse");
  }
  #headers;
  #init;
  body;
  constructor(body, init) {
    this.body = body;
    this.#init = init;
  }
  get status() {
    return this.#init?.status || 200;
  }
  get statusText() {
    return this.#init?.statusText || "OK";
  }
  get headers() {
    return this.#headers ||= new Headers(this.#init?.headers);
  }
};
function prepareResponse(val, event, config2, nested) {
  if (val === kHandled) return new NodeResponse(null);
  if (val === kNotFound) val = new HTTPError({
    status: 404,
    message: `Cannot find any route matching [${event.req.method}] ${event.url}`
  });
  if (val && val instanceof Error) {
    const isHTTPError = HTTPError.isError(val);
    const error3 = isHTTPError ? val : new HTTPError(val);
    if (!isHTTPError) {
      error3.unhandled = true;
      if (val?.stack) error3.stack = val.stack;
    }
    if (error3.unhandled && !config2.silent) console.error(error3);
    const { onError: onError$1 } = config2;
    return onError$1 && !nested ? Promise.resolve(onError$1(error3, event)).catch((error$1) => error$1).then((newVal) => prepareResponse(newVal ?? val, event, config2, true)) : errorResponse(error3, config2.debug);
  }
  const preparedRes = event[kEventRes];
  const preparedHeaders = preparedRes?.[kEventResHeaders];
  if (!(val instanceof Response)) {
    const res = prepareResponseBody(val, event, config2);
    const status = res.status || preparedRes?.status;
    return new NodeResponse(nullBody(event.req.method, status) ? null : res.body, {
      status,
      statusText: res.statusText || preparedRes?.statusText,
      headers: res.headers && preparedHeaders ? mergeHeaders$1(res.headers, preparedHeaders) : res.headers || preparedHeaders
    });
  }
  if (!preparedHeaders) return val;
  try {
    mergeHeaders$1(val.headers, preparedHeaders, val.headers);
    return val;
  } catch {
    return new NodeResponse(nullBody(event.req.method, val.status) ? null : val.body, {
      status: val.status,
      statusText: val.statusText,
      headers: mergeHeaders$1(val.headers, preparedHeaders)
    });
  }
}
__name(prepareResponse, "prepareResponse");
function mergeHeaders$1(base, overrides, target = new Headers(base)) {
  for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
  else target.set(name, value);
  return target;
}
__name(mergeHeaders$1, "mergeHeaders$1");
var emptyHeaders = /* @__PURE__ */ new Headers({ "content-length": "0" });
var jsonHeaders = /* @__PURE__ */ new Headers({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config2) {
  if (val === null || val === void 0) return {
    body: "",
    headers: emptyHeaders
  };
  const valType = typeof val;
  if (valType === "string") return { body: val };
  if (val instanceof Uint8Array) {
    event.res.headers.set("content-length", val.byteLength.toString());
    return { body: val };
  }
  if (val instanceof HTTPResponse || val?.constructor?.name === "HTTPResponse") return val;
  if (isJSONSerializable(val, valType)) return {
    body: JSON.stringify(val, void 0, config2.debug ? 2 : void 0),
    headers: jsonHeaders
  };
  if (valType === "bigint") return {
    body: val.toString(),
    headers: jsonHeaders
  };
  if (val instanceof Blob) {
    const headers = new Headers({
      "content-type": val.type,
      "content-length": val.size.toString()
    });
    let filename = val.name;
    if (filename) {
      filename = encodeURIComponent(filename);
      headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
    }
    return {
      body: val.stream(),
      headers
    };
  }
  if (valType === "symbol") return { body: val.toString() };
  if (valType === "function") return { body: `${val.name}()` };
  return { body: val };
}
__name(prepareResponseBody, "prepareResponseBody");
function nullBody(method, status) {
  return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
__name(nullBody, "nullBody");
function errorResponse(error3, debug4) {
  return new NodeResponse(JSON.stringify({
    ...error3.toJSON(),
    stack: debug4 && error3.stack ? error3.stack.split("\n").map((l) => l.trim()) : void 0
  }, void 0, debug4 ? 2 : void 0), {
    status: error3.status,
    statusText: error3.statusText,
    headers: error3.headers ? mergeHeaders$1(jsonHeaders, error3.headers) : jsonHeaders
  });
}
__name(errorResponse, "errorResponse");
function callMiddleware(event, middleware, handler, index = 0) {
  if (index === middleware.length) return handler(event);
  const fn = middleware[index];
  let nextCalled;
  let nextResult;
  const next = /* @__PURE__ */ __name(() => {
    if (nextCalled) return nextResult;
    nextCalled = true;
    nextResult = callMiddleware(event, middleware, handler, index + 1);
    return nextResult;
  }, "next");
  const ret = fn(event, next);
  return is404(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => is404(resolved) ? next() : resolved) : ret;
}
__name(callMiddleware, "callMiddleware");
function is404(val) {
  return val === void 0 || val === kNotFound || val?.status === 404 && val instanceof Response;
}
__name(is404, "is404");
function toRequest(input, options) {
  if (typeof input === "string") {
    let url = input;
    if (url[0] === "/") {
      const headers = options?.headers ? new Headers(options.headers) : void 0;
      const host2 = headers?.get("host") || "localhost";
      const proto = headers?.get("x-forwarded-proto") === "https" ? "https" : "http";
      url = `${proto}://${host2}${url}`;
    }
    return new Request(url, options);
  } else if (options || input instanceof URL) return new Request(input, options);
  return input;
}
__name(toRequest, "toRequest");
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.req.headers.get("x-forwarded-host");
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) return xForwardedHost;
  }
  return event.req.headers.get("host") || "";
}
__name(getRequestHost, "getRequestHost");
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false) {
    const forwardedProto = event.req.headers.get("x-forwarded-proto");
    if (forwardedProto === "https") return "https";
    if (forwardedProto === "http") return "http";
  }
  const url = event.url || new URL(event.req.url);
  return url.protocol.slice(0, -1);
}
__name(getRequestProtocol, "getRequestProtocol");
function getRequestURL(event, opts = {}) {
  const url = new URL(event.url || event.req.url);
  url.protocol = getRequestProtocol(event, opts);
  if (opts.xForwardedHost) {
    const host2 = getRequestHost(event, opts);
    if (host2) {
      url.host = host2;
      if (!host2.includes(":")) url.port = "";
    }
  }
  return url;
}
__name(getRequestURL, "getRequestURL");
function defineHandler(input) {
  if (typeof input === "function") return handlerWithFetch(input);
  const handler = input.handler || (input.fetch ? /* @__PURE__ */ __name(function _fetchHandler(event) {
    return input.fetch(event.req);
  }, "_fetchHandler") : NoHandler);
  return Object.assign(handlerWithFetch(input.middleware?.length ? /* @__PURE__ */ __name(function _handlerMiddleware(event) {
    return callMiddleware(event, input.middleware, handler);
  }, "_handlerMiddleware") : handler), input);
}
__name(defineHandler, "defineHandler");
function handlerWithFetch(handler) {
  if ("fetch" in handler) return handler;
  return Object.assign(handler, { fetch: /* @__PURE__ */ __name((req) => {
    if (typeof req === "string") req = new URL(req, "http://_");
    if (req instanceof URL) req = new Request(req);
    const event = new H3Event(req);
    try {
      return Promise.resolve(toResponse(handler(event), event));
    } catch (error3) {
      return Promise.resolve(toResponse(error3, event));
    }
  }, "fetch") });
}
__name(handlerWithFetch, "handlerWithFetch");
function toEventHandler(handler) {
  if (typeof handler === "function") return handler;
  if (typeof handler?.handler === "function") return handler.handler;
  if (typeof handler?.fetch === "function") return /* @__PURE__ */ __name(function _fetchHandler(event) {
    return handler.fetch(event.req);
  }, "_fetchHandler");
}
__name(toEventHandler, "toEventHandler");
var NoHandler = /* @__PURE__ */ __name(() => kNotFound, "NoHandler");
var H3Core = /* @__PURE__ */ (() => {
  const HTTPMethods = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "HEAD",
    "OPTIONS",
    "CONNECT",
    "TRACE"
  ];
  class H3Core$1 {
    static {
      __name(this, "H3Core$1");
    }
    _middleware;
    _routes = [];
    config;
    constructor(config2 = {}) {
      this._middleware = [];
      this.config = config2;
      this.fetch = this.fetch.bind(this);
      this.request = this.request.bind(this);
      this.handler = this.handler.bind(this);
      config2.plugins?.forEach((plugin) => plugin(this));
    }
    fetch(request2) {
      return this._request(request2);
    }
    request(_req, _init, context2) {
      return this._request(toRequest(_req, _init), context2);
    }
    _request(request2, context2) {
      const event = new H3Event(request2, context2, this);
      let handlerRes;
      try {
        if (this.config.onRequest) {
          const hookRes = this.config.onRequest(event);
          handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
        } else handlerRes = this.handler(event);
      } catch (error3) {
        handlerRes = Promise.reject(error3);
      }
      return toResponse(handlerRes, event, this.config);
    }
    /**
    * Immediately register an H3 plugin.
    */
    register(plugin) {
      plugin(this);
      return this;
    }
    _findRoute(_event) {
    }
    _addRoute(_route) {
      this._routes.push(_route);
    }
    _getMiddleware(_event, route) {
      return route?.data.middleware ? [...this._middleware, ...route.data.middleware] : this._middleware;
    }
    handler(event) {
      const route = this._findRoute(event);
      if (route) {
        event.context.params = route.params;
        event.context.matchedRoute = route.data;
      }
      const routeHandler = route?.data.handler || NoHandler;
      const middleware = this._getMiddleware(event, route);
      return middleware.length > 0 ? callMiddleware(event, middleware, routeHandler) : routeHandler(event);
    }
    mount(base, input) {
      if ("handler" in input) {
        if (input._middleware.length > 0) this._middleware.push((event, next) => {
          return event.url.pathname.startsWith(base) ? callMiddleware(event, input._middleware, next) : next();
        });
        for (const r of input._routes) this._addRoute({
          ...r,
          route: base + r.route
        });
      } else {
        const fetchHandler = "fetch" in input ? input.fetch : input;
        this.all(`${base}/**`, /* @__PURE__ */ __name(function _mountedMiddleware(event) {
          const url = new URL(event.url);
          url.pathname = url.pathname.slice(base.length) || "/";
          return fetchHandler(new Request(url, event.req));
        }, "_mountedMiddleware"));
      }
      return this;
    }
    all(route, handler, opts) {
      return this.on("", route, handler, opts);
    }
    on(method, route, handler, opts) {
      const _method = (method || "").toUpperCase();
      route = new URL(route, "http://_").pathname;
      this._addRoute({
        method: _method,
        route,
        handler: toEventHandler(handler),
        middleware: opts?.middleware,
        meta: {
          ...handler.meta,
          ...opts?.meta
        }
      });
      return this;
    }
    _normalizeMiddleware(fn, _opts) {
      return fn;
    }
    use(arg1, arg2, arg3) {
      let route;
      let fn;
      let opts;
      if (typeof arg1 === "string") {
        route = arg1;
        fn = arg2;
        opts = arg3;
      } else {
        fn = arg1;
        opts = arg2;
      }
      this._middleware.push(this._normalizeMiddleware(fn, {
        ...opts,
        route
      }));
      return this;
    }
  }
  for (const method of HTTPMethods) H3Core$1.prototype[method.toLowerCase()] = function(route, handler, opts) {
    return this.on(method, route, handler, opts);
  };
  return H3Core$1;
})();
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key2 in configHooks) {
    const subHook = configHooks[key2];
    const name = parentName ? `${parentName}:${key2}` : key2;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
__name(flatHooks, "flatHooks");
var defaultTask = { run: /* @__PURE__ */ __name((function_) => function_(), "run") };
var _createTask = /* @__PURE__ */ __name(() => defaultTask, "_createTask");
var createTask3 = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask3(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
__name(serialTaskCaller, "serialTaskCaller");
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask3(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
__name(parallelTaskCaller, "parallelTaskCaller");
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}
__name(callEachWith, "callEachWith");
var Hookable = class {
  static {
    __name(this, "Hookable");
  }
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: /* @__PURE__ */ __name(() => "_" + name.replace(/\W+/g, "_") + "_hook_cb", "get"),
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = /* @__PURE__ */ __name((...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    }, "_function");
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key2) => this.hook(key2, hooks[key2])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key2 in hooks) {
      this.removeHook(key2, hooks[key2]);
    }
  }
  removeAllHooks() {
    for (const key2 in this._hooks) {
      delete this._hooks[key2];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
};
function createHooks() {
  return new Hookable();
}
__name(createHooks, "createHooks");
var errorHandler$0 = defineNitroErrorHandler(
  /* @__PURE__ */ __name(function defaultNitroErrorHandler(error3, event) {
    const res = defaultHandler(error3, event);
    return new NodeResponse(JSON.stringify(res.body, null, 2), res);
  }, "defaultNitroErrorHandler")
);
function defaultHandler(error3, event, opts) {
  const isSensitive = error3.unhandled;
  const status = error3.status || 500;
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (status === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error3.unhandled && "[unhandled]"].filter(Boolean).join(" ");
    console.error(
      `[request error] ${tags} [${event.req.method}] ${url}
`,
      error3
    );
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  if (status === 404 || !event.res.headers.has("cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    status,
    statusText: error3.statusText,
    message: isSensitive ? "Server Error" : error3.message,
    data: isSensitive ? void 0 : error3.data
  };
  return {
    status,
    statusText: error3.statusText,
    headers,
    body
  };
}
__name(defaultHandler, "defaultHandler");
var errorHandlers = [errorHandler$0];
async function errorHandler(error3, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error3, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error4) {
      console.error(error4);
    }
  }
}
__name(errorHandler, "errorHandler");
var plugins = [];
var ENC_SLASH_RE = /%2f/gi;
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
__name(decode, "decode");
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
__name(decodePath, "decodePath");
var JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
__name(hasTrailingSlash, "hasTrailingSlash");
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
__name(withoutTrailingSlash, "withoutTrailingSlash");
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
__name(withTrailingSlash, "withTrailingSlash");
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
__name(hasLeadingSlash, "hasLeadingSlash");
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
__name(withLeadingSlash, "withLeadingSlash");
function isNonEmptyURL(url) {
  return url && url !== "/";
}
__name(isNonEmptyURL, "isNonEmptyURL");
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
__name(joinURL, "joinURL");
var assets = {
  "/nimiq-dev-center-banner.png": {
    "type": "image/png",
    "etag": '"20e0-G5X4YdR59w0Eo2LNePCxC3rll+8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 8416,
    "path": "../public/nimiq-dev-center-banner.png"
  },
  "/og-image.png": {
    "type": "image/png",
    "etag": '"26e7bd-5rxeYadBCxUuxByCb5KP/m+74Hk"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 2549693,
    "path": "../public/og-image.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"43-BEzmj4PuhUNHX+oW9uOnPSihxtU"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 67,
    "path": "../public/robots.txt"
  },
  "/favicons/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": '"2669-8omj8UTYxNe0R1yyqreweO5hH3c"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 9833,
    "path": "../public/favicons/android-chrome-192x192.png"
  },
  "/favicons/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": '"7d78-smWHKuZLMtqzPAvh8fOcoEejEPg"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 32120,
    "path": "../public/favicons/android-chrome-512x512.png"
  },
  "/favicons/apple-touch-icon.png": {
    "type": "image/png",
    "etag": '"105a-tWGylR7vcX+usWQ1FAvafFXRNz0"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 4186,
    "path": "../public/favicons/apple-touch-icon.png"
  },
  "/favicons/browserconfig.xml": {
    "type": "application/xml",
    "etag": '"f6-FJMf/zI9VWGY+z5sMxX7nMnNs0M"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 246,
    "path": "../public/favicons/browserconfig.xml"
  },
  "/favicons/favicon-16x16.png": {
    "type": "image/png",
    "etag": '"3f6-BV+n7eU72c+zaBuCFeYkamu6ZRo"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 1014,
    "path": "../public/favicons/favicon-16x16.png"
  },
  "/favicons/favicon-32x32.png": {
    "type": "image/png",
    "etag": '"5fa-YYQSKRqppjDLlkt3LRlHK9t7JNs"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 1530,
    "path": "../public/favicons/favicon-32x32.png"
  },
  "/favicons/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"3aee-BRamBhdZi3s3DqomnEJ/7H3I/Qc"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 15086,
    "path": "../public/favicons/favicon.ico"
  },
  "/favicons/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"4f3-0RBOPsh4h6oouXNtix9JFz+DH14"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 1267,
    "path": "../public/favicons/favicon.svg"
  },
  "/favicons/mstile-150x150.png": {
    "type": "image/png",
    "etag": '"12e3-qbTOybf2EGrHzS79/aF8FnNWA9s"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 4835,
    "path": "../public/favicons/mstile-150x150.png"
  },
  "/favicons/nimiq-hexagon-192.png": {
    "type": "image/png",
    "etag": '"1635a-xjKTk29iL9ipf4+99Xq63EGAJ58"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 90970,
    "path": "../public/favicons/nimiq-hexagon-192.png"
  },
  "/favicons/nimiq-hexagon-512.png": {
    "type": "image/png",
    "etag": '"8ead0-6GmhYGrhxAZ/XiblMqydQXVIxjY"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 584400,
    "path": "../public/favicons/nimiq-hexagon-512.png"
  },
  "/favicons/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": '"3b8-Mvog5ORostX0Zdjgz3BaLCw50qg"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 952,
    "path": "../public/favicons/safari-pinned-tab.svg"
  },
  "/favicons/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"1aa-E+WqWOshgtis5jJmhWyMwpxHwIM"',
    "mtime": "2025-10-13T06:33:42.506Z",
    "size": 426,
    "path": "../public/favicons/site.webmanifest"
  },
  "/assets/fonts/firacode-0336df1a.woff2": {
    "type": "font/woff2",
    "etag": '"14d4-Dw90menjUCBCiOCHx2QSa5eHs64"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 5332,
    "path": "../public/assets/fonts/firacode-0336df1a.woff2"
  },
  "/assets/fonts/firacode-18cd976a.woff2": {
    "type": "font/woff2",
    "etag": '"5b18-3xdpUyOLgHtMOq8UUVbEy6ROqC4"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 23320,
    "path": "../public/assets/fonts/firacode-18cd976a.woff2"
  },
  "/assets/fonts/firacode-278bd38b.woff2": {
    "type": "font/woff2",
    "etag": '"1e54-y33OqAolERrvhGw5uR3sEoI1Pbo"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 7764,
    "path": "../public/assets/fonts/firacode-278bd38b.woff2"
  },
  "/assets/fonts/firacode-3c6ba0f0.woff2": {
    "type": "font/woff2",
    "etag": '"19e0-ttdNWYEsJQR0Wuw4clkqt2Cuk3E"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6624,
    "path": "../public/assets/fonts/firacode-3c6ba0f0.woff2"
  },
  "/assets/fonts/firacode-43c3e27d.woff2": {
    "type": "font/woff2",
    "etag": '"5b38-picL4S5YjaLGstZydYdTUJFt9do"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 23352,
    "path": "../public/assets/fonts/firacode-43c3e27d.woff2"
  },
  "/assets/fonts/firacode-49b6e5d8.woff2": {
    "type": "font/woff2",
    "etag": '"1ed4-FUDCoOffgFu4rhyPB1fSshO6BO4"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 7892,
    "path": "../public/assets/fonts/firacode-49b6e5d8.woff2"
  },
  "/assets/fonts/firacode-5dcf5257.woff2": {
    "type": "font/woff2",
    "etag": '"2ea0-MHi1/JupLZ6+o0BJMve+JYQHtSE"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 11936,
    "path": "../public/assets/fonts/firacode-5dcf5257.woff2"
  },
  "/assets/fonts/firacode-753269da.woff2": {
    "type": "font/woff2",
    "etag": '"2ed8-W1pPiBjfSysWDqSaVruSYhRNOFQ"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 11992,
    "path": "../public/assets/fonts/firacode-753269da.woff2"
  },
  "/assets/fonts/firacode-8dcb650c.woff2": {
    "type": "font/woff2",
    "etag": '"1e48-Unq0fiBpTlkm0XfWspaRy6eszZ4"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 7752,
    "path": "../public/assets/fonts/firacode-8dcb650c.woff2"
  },
  "/assets/fonts/firacode-99864655.woff2": {
    "type": "font/woff2",
    "etag": '"19f4-lK0uWI6+IUolifoOJp4MkXP91KQ"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6644,
    "path": "../public/assets/fonts/firacode-99864655.woff2"
  },
  "/assets/fonts/firacode-a5a5fa50.woff2": {
    "type": "font/woff2",
    "etag": '"dac-5mM8wrBS4UoKhqa41Ws0zoV5mXs"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 3500,
    "path": "../public/assets/fonts/firacode-a5a5fa50.woff2"
  },
  "/assets/fonts/firacode-b759ebc4.woff2": {
    "type": "font/woff2",
    "etag": '"2e80-sWuDkcLqiKeinI9gf5EHbqi6cqA"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 11904,
    "path": "../public/assets/fonts/firacode-b759ebc4.woff2"
  },
  "/assets/fonts/firacode-b9eb462b.woff2": {
    "type": "font/woff2",
    "etag": '"5b14-dmDL61gOuuNjDSr1kmN0GG8Tt/8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 23316,
    "path": "../public/assets/fonts/firacode-b9eb462b.woff2"
  },
  "/assets/fonts/firacode-c7fc62fb.woff2": {
    "type": "font/woff2",
    "etag": '"150c-D8vI0GZn36eXLno994pP3R7okNs"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 5388,
    "path": "../public/assets/fonts/firacode-c7fc62fb.woff2"
  },
  "/assets/fonts/firacode-cca9883d.woff2": {
    "type": "font/woff2",
    "etag": '"19dc-H2m4kYSjFqGYqUaezckWSdiIFM0"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6620,
    "path": "../public/assets/fonts/firacode-cca9883d.woff2"
  },
  "/assets/fonts/firacode-d3b5b76b.woff2": {
    "type": "font/woff2",
    "etag": '"1508-1sxX/sUot+8m3xQiRNfYAR335sA"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 5384,
    "path": "../public/assets/fonts/firacode-d3b5b76b.woff2"
  },
  "/assets/fonts/firacode-d87b9a37.woff2": {
    "type": "font/woff2",
    "etag": '"1e5c-AFuv0X2nPUZOTFRvCkAegGgS848"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 7772,
    "path": "../public/assets/fonts/firacode-d87b9a37.woff2"
  },
  "/assets/fonts/firacode-dc537500.woff2": {
    "type": "font/woff2",
    "etag": '"1e7c-AgjENhiq1l0sd8X0rMEufPe9B/8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 7804,
    "path": "../public/assets/fonts/firacode-dc537500.woff2"
  },
  "/assets/fonts/firacode-f7e13124.woff2": {
    "type": "font/woff2",
    "etag": '"1e30-mY7Gnqtr5CR5/iNkB/D/6yzyBcQ"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 7728,
    "path": "../public/assets/fonts/firacode-f7e13124.woff2"
  },
  "/assets/fonts/mulish-021f3d3f.woff2": {
    "type": "font/woff2",
    "etag": '"2180-/g2JFaFfICjJqRkvsIwvYIG9sns"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 8576,
    "path": "../public/assets/fonts/mulish-021f3d3f.woff2"
  },
  "/assets/fonts/mulish-086a288a.woff2": {
    "type": "font/woff2",
    "etag": '"1364-CPRPS0O7b+tDxvABKvDZVcPgJL0"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 4964,
    "path": "../public/assets/fonts/mulish-086a288a.woff2"
  },
  "/assets/fonts/mulish-0b696a2e.woff2": {
    "type": "font/woff2",
    "etag": '"758c-aSFDxzGaJmL4YAUmVCfLU38iiXw"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 30092,
    "path": "../public/assets/fonts/mulish-0b696a2e.woff2"
  },
  "/assets/fonts/mulish-0c042aff.woff2": {
    "type": "font/woff2",
    "etag": '"1a6c-RhmNwWzRwshvBefSKJchvT5e2KA"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6764,
    "path": "../public/assets/fonts/mulish-0c042aff.woff2"
  },
  "/assets/fonts/mulish-1ac4d5c4.woff2": {
    "type": "font/woff2",
    "etag": '"21a4-SQjXh+9D//wY2yYfLcNB6iPdLQ8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 8612,
    "path": "../public/assets/fonts/mulish-1ac4d5c4.woff2"
  },
  "/assets/fonts/mulish-294ced17.woff2": {
    "type": "font/woff2",
    "etag": '"3e14-GvWEgKabR4TPseuKDPzxB04KzMQ"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 15892,
    "path": "../public/assets/fonts/mulish-294ced17.woff2"
  },
  "/assets/fonts/mulish-4a683114.woff2": {
    "type": "font/woff2",
    "etag": '"34c4-jv8jUqyzst4gbARE9PcE7UbPsTQ"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 13508,
    "path": "../public/assets/fonts/mulish-4a683114.woff2"
  },
  "/assets/fonts/mulish-4eb440e1.woff2": {
    "type": "font/woff2",
    "etag": '"2638-8dV0rfzANg3rrDX57sqYi4CCkak"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 9784,
    "path": "../public/assets/fonts/mulish-4eb440e1.woff2"
  },
  "/assets/fonts/mulish-4fe8af2a.woff2": {
    "type": "font/woff2",
    "etag": '"31ac-Yv1x5dLnGIq/TjvV1V1cIWPP9rc"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 12716,
    "path": "../public/assets/fonts/mulish-4fe8af2a.woff2"
  },
  "/assets/fonts/mulish-5d4af4fe.woff2": {
    "type": "font/woff2",
    "etag": '"1350-hv0EywQcvBsVj+rY9KQiJ0hQ2Ig"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 4944,
    "path": "../public/assets/fonts/mulish-5d4af4fe.woff2"
  },
  "/assets/fonts/mulish-747c2eb7.woff2": {
    "type": "font/woff2",
    "etag": '"13c8-sNS1Kyxzvpiy8szy76rnAGpvMlU"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 5064,
    "path": "../public/assets/fonts/mulish-747c2eb7.woff2"
  },
  "/assets/fonts/mulish-78a2d471.woff2": {
    "type": "font/woff2",
    "etag": '"5308-k4Vv7HtxwG+Q5k7/zhDrhPEEIuA"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 21256,
    "path": "../public/assets/fonts/mulish-78a2d471.woff2"
  },
  "/assets/fonts/mulish-81f6c1ba.woff2": {
    "type": "font/woff2",
    "etag": '"6650-g+cNdMn1qQCHvgfBEN5xmP25JBw"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 26192,
    "path": "../public/assets/fonts/mulish-81f6c1ba.woff2"
  },
  "/assets/fonts/mulish-8f67bca7.woff2": {
    "type": "font/woff2",
    "etag": '"3154-X5yizQJfUT0jl/FyLgw/nXGYBiU"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 12628,
    "path": "../public/assets/fonts/mulish-8f67bca7.woff2"
  },
  "/assets/fonts/mulish-99b0528e.woff2": {
    "type": "font/woff2",
    "etag": '"221c-Tsn2obQuPzxnBsAyp5XD2PUox9E"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 8732,
    "path": "../public/assets/fonts/mulish-99b0528e.woff2"
  },
  "/assets/fonts/mulish-a51b2cd0.woff2": {
    "type": "font/woff2",
    "etag": '"3144-t1OAviaUCuxxYyOoU3rkwbLkJS0"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 12612,
    "path": "../public/assets/fonts/mulish-a51b2cd0.woff2"
  },
  "/assets/fonts/mulish-a998f292.woff2": {
    "type": "font/woff2",
    "etag": '"1a44-X5MC4lazLPel/SDABWiq2EuKUZQ"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6724,
    "path": "../public/assets/fonts/mulish-a998f292.woff2"
  },
  "/assets/fonts/mulish-c1a61bc6.woff2": {
    "type": "font/woff2",
    "etag": '"6920-C9MP6qZP3zo2ImwCYM79Bxmhkuo"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 26912,
    "path": "../public/assets/fonts/mulish-c1a61bc6.woff2"
  },
  "/assets/fonts/mulish-c7803f2b.woff2": {
    "type": "font/woff2",
    "etag": '"3d9c-aVPZhiN3BTtOY6QK8GwpkKpwEKM"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 15772,
    "path": "../public/assets/fonts/mulish-c7803f2b.woff2"
  },
  "/assets/fonts/mulish-d0c9a80d.woff2": {
    "type": "font/woff2",
    "etag": '"1a78-gW900h3/I32AR8kC1wBNr8V5Pf8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6776,
    "path": "../public/assets/fonts/mulish-d0c9a80d.woff2"
  },
  "/assets/fonts/mulish-df217072.woff2": {
    "type": "font/woff2",
    "etag": '"34c0-uCgHKrJIuvile0SdT+g3JuVUGQY"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 13504,
    "path": "../public/assets/fonts/mulish-df217072.woff2"
  },
  "/assets/fonts/mulish-e64de9e7.woff2": {
    "type": "font/woff2",
    "etag": '"74c8-yF/QhshPCLEx5FfNLWvZxD0vWpg"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 29896,
    "path": "../public/assets/fonts/mulish-e64de9e7.woff2"
  },
  "/assets/fonts/mulish-ecf98336.woff2": {
    "type": "font/woff2",
    "etag": '"25b8-oHtPRhiCzaPMJ+fZ6c4nHD/UaiY"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 9656,
    "path": "../public/assets/fonts/mulish-ecf98336.woff2"
  },
  "/assets/fonts/mulish-f727ad98.woff2": {
    "type": "font/woff2",
    "etag": '"52c0-YTxbZwXAB5EF2Trr0enlwl1XeDw"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 21184,
    "path": "../public/assets/fonts/mulish-f727ad98.woff2"
  },
  "/assets/fonts/mulish-fcf17f92.woff2": {
    "type": "font/woff2",
    "etag": '"34ec-/lofHav5uENCxukJGdtyG/P4OXc"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 13548,
    "path": "../public/assets/fonts/mulish-fcf17f92.woff2"
  },
  "/assets/icons/curly.svg": {
    "type": "image/svg+xml",
    "etag": '"16bf-A2gdyy7LNffDeT//3yRxY23QKb4"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 5823,
    "path": "../public/assets/icons/curly.svg"
  },
  "/assets/icons/mcp.svg": {
    "type": "image/svg+xml",
    "etag": '"355-5WZx7RtiBJi4ZvweyoKjHqvDWVo"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 853,
    "path": "../public/assets/icons/mcp.svg"
  },
  "/assets/icons/nimiq-albatross.svg": {
    "type": "image/svg+xml",
    "etag": '"65d-l15z25Ytc6j3fP8q6oUaZd2Byl0"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 1629,
    "path": "../public/assets/icons/nimiq-albatross.svg"
  },
  "/assets/icons/nimiq-dev.svg": {
    "type": "image/svg+xml",
    "etag": '"61d-dypd57EjOsH9kLhV6vD1N9iFb9g"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 1565,
    "path": "../public/assets/icons/nimiq-dev.svg"
  },
  "/assets/icons/nimiq-hub.svg": {
    "type": "image/svg+xml",
    "etag": '"fd4-mpFTm6s4L//svJ/RpNSl8QWdD9o"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 4052,
    "path": "../public/assets/icons/nimiq-hub.svg"
  },
  "/assets/icons/nimiq-mcp.svg": {
    "type": "image/svg+xml",
    "etag": '"9cd-neLwrisYVzxERzqung8jx8rCaQw"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 2509,
    "path": "../public/assets/icons/nimiq-mcp.svg"
  },
  "/assets/icons/nimiq-rpc.svg": {
    "type": "image/svg+xml",
    "etag": '"18b6-1xChkben6vSazyeUebcETPuVy90"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 6326,
    "path": "../public/assets/icons/nimiq-rpc.svg"
  },
  "/assets/icons/nimiq-tutorial.svg": {
    "type": "image/svg+xml",
    "etag": '"6cf-ArhXz6O0Gkfi6l+F9r3frtMYkHw"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 1743,
    "path": "../public/assets/icons/nimiq-tutorial.svg"
  },
  "/assets/icons/nimiq-utils.svg": {
    "type": "image/svg+xml",
    "etag": '"6d2-ta+BKEpV2ie+2K259QlgMthHkN8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 1746,
    "path": "../public/assets/icons/nimiq-utils.svg"
  },
  "/assets/icons/nimiq-validators.svg": {
    "type": "image/svg+xml",
    "etag": '"bb3-7+mbxv/D1SZ+ANONzcRAuFjY3vY"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 2995,
    "path": "../public/assets/icons/nimiq-validators.svg"
  },
  "/assets/icons/nimiq-web-client.svg": {
    "type": "image/svg+xml",
    "etag": '"afc-tawTqOhTZqQM5KEP8ddXxivqln8"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 2812,
    "path": "../public/assets/icons/nimiq-web-client.svg"
  },
  "/assets/icons/rpc.svg": {
    "type": "image/svg+xml",
    "etag": '"edb-EE+6J3ZIw0Jrhcwl4JAPmEirw6Y"',
    "mtime": "2025-10-13T06:33:42.510Z",
    "size": 3803,
    "path": "../public/assets/icons/rpc.svg"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises_default.readFile(resolve(serverDir, assets[id].path));
}
__name(readAsset, "readAsset");
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
__name(isPublicAssetURL, "isPublicAssetURL");
function getAsset(id) {
  return assets[id];
}
__name(getAsset, "getAsset");
var METHODS2 = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = { gzip: ".gz", br: ".br" };
var _IrDZu6 = defineHandler((event) => {
  if (event.req.method && !METHODS2.has(event.req.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(event.url.pathname))
  );
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
var findRouteRules = /* @__PURE__ */ __name((m, p) => {
  return [];
}, "findRouteRules");
var findRoute = /* @__PURE__ */ __name((m, p) => {
}, "findRoute");
var findRoutedMiddleware = /* @__PURE__ */ __name((m, p) => {
  return [];
}, "findRoutedMiddleware");
var globalMiddleware = [toEventHandler(_IrDZu6)];
function useNitroApp() {
  return useNitroApp.__instance__ ??= initNitroApp();
}
__name(useNitroApp, "useNitroApp");
function initNitroApp() {
  const nitroApp2 = createNitroApp();
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error3) {
      nitroApp2.captureError(error3, { tags: ["plugin"] });
      throw error3;
    }
  }
  return nitroApp2;
}
__name(initNitroApp, "initNitroApp");
function createNitroApp() {
  const hooks = createHooks();
  const captureError = /* @__PURE__ */ __name((error3, errorCtx) => {
    const promise = hooks.callHookParallel("error", error3, errorCtx).catch((hookError) => {
      console.error("Error while capturing another error", hookError);
    });
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error: error3, context: errorCtx });
      }
      if (typeof errorCtx.event.req.waitUntil === "function") {
        errorCtx.event.req.waitUntil(promise);
      }
    }
  }, "captureError");
  const h3App = createH3App(captureError);
  let fetchHandler = /* @__PURE__ */ __name(async (req) => {
    req.context ??= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    const event = { req };
    const nitroApp2 = useNitroApp();
    await nitroApp2.hooks.callHook("request", event).catch((error3) => {
      captureError(error3, { event, tags: ["request"] });
    });
    const response = await h3App.request(req, void 0, req.context);
    await nitroApp2.hooks.callHook("response", response, event).catch((error3) => {
      captureError(error3, { event, tags: ["request", "response"] });
    });
    return response;
  }, "fetchHandler");
  const requestHandler = /* @__PURE__ */ __name((input, init, context2) => {
    const req = toRequest(input, init);
    req.context = { ...req.context, ...context2 };
    return Promise.resolve(fetchHandler(req));
  }, "requestHandler");
  const originalFetch = globalThis.fetch;
  const nitroFetch = /* @__PURE__ */ __name((input, init) => {
    if (typeof input === "string" && input.startsWith("/")) {
      return requestHandler(input, init);
    }
    if (input instanceof Request && "_request" in input) {
      input = input._request;
    }
    return originalFetch(input, init);
  }, "nitroFetch");
  globalThis.fetch = nitroFetch;
  const app = {
    _h3: h3App,
    hooks,
    fetch: requestHandler,
    captureError
  };
  return app;
}
__name(createNitroApp, "createNitroApp");
function createH3App(captureError) {
  const DEBUG_MODE = ["1", "true", "TRUE"].includes("false");
  const h3App = new H3Core({
    debug: DEBUG_MODE,
    onError: /* @__PURE__ */ __name((error3, event) => {
      captureError(error3, { event, tags: ["request"] });
      return errorHandler(error3, event);
    }, "onError")
  });
  h3App._findRoute = (event) => findRoute(event.req.method, event.url.pathname);
  h3App._getMiddleware = (event, route) => {
    event.url.pathname;
    event.req.method;
    const { routeRules, routeRuleMiddleware } = getRouteRules();
    event.context.routeRules = routeRules;
    return [
      ...routeRuleMiddleware,
      ...globalMiddleware,
      ...findRoutedMiddleware().map((r) => r.data),
      ...route?.data?.middleware || []
    ].filter(Boolean);
  };
  return h3App;
}
__name(createH3App, "createH3App");
function getRouteRules(method, pathname) {
  const m = findRouteRules();
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = { ...currentRule.options, ...rule.options };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = { ...currentRule.params, ...layer.params };
      } else if (rule.options !== false) {
        routeRules[rule.name] = { ...rule, params: layer.params };
      }
    }
  }
  const middleware = [];
  for (const rule of Object.values(routeRules)) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
__name(getRouteRules, "getRouteRules");
function _captureError(error3, type) {
  console.error(`[${type}]`, error3);
  useNitroApp().captureError(error3, { tags: [type] });
}
__name(_captureError, "_captureError");
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error3) => _captureError(error3, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error3) => _captureError(error3, "uncaughtException")
  );
}
__name(trapUnhandledNodeErrors, "trapUnhandledNodeErrors");
var debug3 = /* @__PURE__ */ __name((...args) => {
}, "debug");
function GracefulShutdown(server2, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: /* @__PURE__ */ __name((signal) => Promise.resolve(signal), "onShutdown"),
      preShutdown: /* @__PURE__ */ __name((signal) => Promise.resolve(signal), "preShutdown")
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      __name(call, "call");
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  __name(onceFactory, "onceFactory");
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once2 = onceFactory();
  once2(process, signals, (signal) => {
    debug3("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error3) => {
      debug3("server shut down error occurred", error3);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  __name(isFunction, "isFunction");
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http_default.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  __name(destroy, "destroy");
  function destroyAllConnections(force = false) {
    debug3("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key2 of Object.keys(connections)) {
      const socket = connections[key2];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug3("Connections destroyed : " + counter);
    debug3("Connection Counter    : " + connectionCounter);
    for (const key2 of Object.keys(secureConnections)) {
      const socket = secureConnections[key2];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug3("Secure Connections destroyed : " + secureCounter);
    debug3("Secure Connection Counter    : " + secureConnectionCounter);
  }
  __name(destroyAllConnections, "destroyAllConnections");
  server2.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server2.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server2.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug3("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug3("Close http server");
      return new Promise((resolve2, reject) => {
        server2.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve2(true);
        });
      });
    }
    __name(cleanupHttp, "cleanupHttp");
    debug3("shutdown signal - " + sig);
    if (options.development) {
      debug3("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug3("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    __name(finalHandler, "finalHandler");
    function waitForReadyToShutDown(totalNumInterval) {
      debug3(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug3(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug3("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug3("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve2) => {
        setTimeout(() => {
          resolve2(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    __name(waitForReadyToShutDown, "waitForReadyToShutDown");
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug3("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug3("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error3) => {
      const errString = typeof error3 === "string" ? error3 : JSON.stringify(error3);
      debug3(errString);
      failed = true;
      throw errString;
    });
  }
  __name(shutdown, "shutdown");
  function shutdownManual() {
    return shutdown("manual");
  }
  __name(shutdownManual, "shutdownManual");
  return shutdownManual;
}
__name(GracefulShutdown, "GracefulShutdown");
function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
__name(getGracefulShutdownConfig, "getGracefulShutdownConfig");
function setupGracefulShutdown(listener2, nitroApp2) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener2, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: /* @__PURE__ */ __name(async () => {
      await new Promise((resolve2) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve2();
        }, shutdownConfig.timeout);
        nitroApp2.hooks.callHook("close").catch((error3) => {
          console.error(error3);
        }).finally(() => {
          clearTimeout(timeout);
          resolve2();
        });
      });
    }, "onShutdown")
  });
}
__name(setupGracefulShutdown, "setupGracefulShutdown");
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
var server = cert && key ? new Server2({ key, cert }, toNodeHandler(nitroApp.fetch)) : new Server(toNodeHandler(nitroApp.fetch));
var port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
var host = process.env.NITRO_HOST || process.env.HOST;
var path = process.env.NITRO_UNIX_SOCKET;
var listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
var nodeServer = {};

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request2, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request2, env2);
  } finally {
    try {
      if (request2.body !== null && !request2.bodyUsed) {
        const reader = request2.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request2, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request2, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-O6AJ4f/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = nodeServer;

// ../../Library/Caches/pnpm/dlx/ebed1273bb2581a19ed4b3044368419900ad06e8c49637038fc50cf5d1f42682/19cd7b3dd15-59e0/node_modules/.pnpm/wrangler@4.58.0/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request2, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request2, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request2, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request2, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-O6AJ4f/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request2, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request2, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request2, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request2, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request2, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request2);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request2) {
      return __facade_invoke__(
        request2,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
