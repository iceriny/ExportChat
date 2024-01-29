"use strict";
var ExportChat = (() => {
const serverUrl = 'https://*.github.io/ExportChat';
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js
  var require_bcmodsdk = __commonJS({
    "node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js"(exports) {
      var bcModSdk = function() {
        "use strict";
        const e = "1.1.0";
        function o(e2) {
          alert("Mod ERROR:\n" + e2);
          const o2 = new Error(e2);
          throw console.error(o2), o2;
        }
        __name(o, "o");
        const t = new TextEncoder();
        function n(e2) {
          return !!e2 && "object" == typeof e2 && !Array.isArray(e2);
        }
        __name(n, "n");
        function r(e2) {
          const o2 = /* @__PURE__ */ new Set();
          return e2.filter((e3) => !o2.has(e3) && o2.add(e3));
        }
        __name(r, "r");
        const i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
        function d(e2) {
          a.has(e2) || (a.add(e2), console.warn(e2));
        }
        __name(d, "d");
        function s(e2) {
          const o2 = [], t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set();
          for (const r3 of p.values()) {
            const i3 = r3.patching.get(e2.name);
            if (i3) {
              o2.push(...i3.hooks);
              for (const [o3, a2] of i3.patches.entries())
                t2.has(o3) && t2.get(o3) !== a2 && d(`ModSDK: Mod '${r3.name}' is patching function ${e2.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${o3}
Patch1:
${t2.get(o3) || ""}
Patch2:
${a2}`), t2.set(o3, a2), n2.add(r3.name);
            }
          }
          o2.sort((e3, o3) => o3.priority - e3.priority);
          const r2 = function(e3, o3) {
            if (0 === o3.size)
              return e3;
            let t3 = e3.toString().replaceAll("\r\n", "\n");
            for (const [n3, r3] of o3.entries())
              t3.includes(n3) || d(`ModSDK: Patching ${e3.name}: Patch ${n3} not applied`), t3 = t3.replaceAll(n3, r3);
            return (0, eval)(`(${t3})`);
          }(e2.original, t2);
          let i2 = /* @__PURE__ */ __name(function(o3) {
            var t3, i3;
            const a2 = null === (i3 = (t3 = m.errorReporterHooks).hookChainExit) || void 0 === i3 ? void 0 : i3.call(t3, e2.name, n2), d2 = r2.apply(this, o3);
            return null == a2 || a2(), d2;
          }, "i");
          for (let t3 = o2.length - 1; t3 >= 0; t3--) {
            const n3 = o2[t3], r3 = i2;
            i2 = /* @__PURE__ */ __name(function(o3) {
              var t4, i3;
              const a2 = null === (i3 = (t4 = m.errorReporterHooks).hookEnter) || void 0 === i3 ? void 0 : i3.call(t4, e2.name, n3.mod), d2 = n3.hook.apply(this, [o3, (e3) => {
                if (1 !== arguments.length || !Array.isArray(o3))
                  throw new Error(`Mod ${n3.mod} failed to call next hook: Expected args to be array, got ${typeof e3}`);
                return r3.call(this, e3);
              }]);
              return null == a2 || a2(), d2;
            }, "i");
          }
          return { hooks: o2, patches: t2, patchesSources: n2, enter: i2, final: r2 };
        }
        __name(s, "s");
        function c(e2, o2 = false) {
          let r2 = i.get(e2);
          if (r2)
            o2 && (r2.precomputed = s(r2));
          else {
            let o3 = window;
            const a2 = e2.split(".");
            for (let t2 = 0; t2 < a2.length - 1; t2++)
              if (o3 = o3[a2[t2]], !n(o3))
                throw new Error(`ModSDK: Function ${e2} to be patched not found; ${a2.slice(0, t2 + 1).join(".")} is not object`);
            const d2 = o3[a2[a2.length - 1]];
            if ("function" != typeof d2)
              throw new Error(`ModSDK: Function ${e2} to be patched not found`);
            const c2 = function(e3) {
              let o4 = -1;
              for (const n2 of t.encode(e3)) {
                let e4 = 255 & (o4 ^ n2);
                for (let o5 = 0; o5 < 8; o5++)
                  e4 = 1 & e4 ? -306674912 ^ e4 >>> 1 : e4 >>> 1;
                o4 = o4 >>> 8 ^ e4;
              }
              return ((-1 ^ o4) >>> 0).toString(16).padStart(8, "0").toUpperCase();
            }(d2.toString().replaceAll("\r\n", "\n")), l2 = { name: e2, original: d2, originalHash: c2 };
            r2 = Object.assign(Object.assign({}, l2), { precomputed: s(l2), router: () => {
            }, context: o3, contextProperty: a2[a2.length - 1] }), r2.router = /* @__PURE__ */ function(e3) {
              return function(...o4) {
                return e3.precomputed.enter.apply(this, [o4]);
              };
            }(r2), i.set(e2, r2), o3[r2.contextProperty] = r2.router;
          }
          return r2;
        }
        __name(c, "c");
        function l() {
          const e2 = /* @__PURE__ */ new Set();
          for (const o2 of p.values())
            for (const t2 of o2.patching.keys())
              e2.add(t2);
          for (const o2 of i.keys())
            e2.add(o2);
          for (const o2 of e2)
            c(o2, true);
        }
        __name(l, "l");
        function f() {
          const e2 = /* @__PURE__ */ new Map();
          for (const [o2, t2] of i)
            e2.set(o2, { name: o2, original: t2.original, originalHash: t2.originalHash, sdkEntrypoint: t2.router, currentEntrypoint: t2.context[t2.contextProperty], hookedByMods: r(t2.precomputed.hooks.map((e3) => e3.mod)), patchedByMods: Array.from(t2.precomputed.patchesSources) });
          return e2;
        }
        __name(f, "f");
        const p = /* @__PURE__ */ new Map();
        function u(e2) {
          p.get(e2.name) !== e2 && o(`Failed to unload mod '${e2.name}': Not registered`), p.delete(e2.name), e2.loaded = false, l();
        }
        __name(u, "u");
        function g(e2, t2, r2) {
          "string" == typeof e2 && "string" == typeof t2 && (alert(`Mod SDK warning: Mod '${e2}' is registering in a deprecated way.
It will work for now, but please inform author to update.`), e2 = { name: e2, fullName: e2, version: t2 }, t2 = { allowReplace: true === r2 }), e2 && "object" == typeof e2 || o("Failed to register mod: Expected info object, got " + typeof e2), "string" == typeof e2.name && e2.name || o("Failed to register mod: Expected name to be non-empty string, got " + typeof e2.name);
          let i2 = `'${e2.name}'`;
          "string" == typeof e2.fullName && e2.fullName || o(`Failed to register mod ${i2}: Expected fullName to be non-empty string, got ${typeof e2.fullName}`), i2 = `'${e2.fullName} (${e2.name})'`, "string" != typeof e2.version && o(`Failed to register mod ${i2}: Expected version to be string, got ${typeof e2.version}`), e2.repository || (e2.repository = void 0), void 0 !== e2.repository && "string" != typeof e2.repository && o(`Failed to register mod ${i2}: Expected repository to be undefined or string, got ${typeof e2.version}`), null == t2 && (t2 = {}), t2 && "object" == typeof t2 || o(`Failed to register mod ${i2}: Expected options to be undefined or object, got ${typeof t2}`);
          const a2 = true === t2.allowReplace, d2 = p.get(e2.name);
          d2 && (d2.allowReplace && a2 || o(`Refusing to load mod ${i2}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`), u(d2));
          const s2 = /* @__PURE__ */ __name((e3) => {
            "string" == typeof e3 && e3 || o(`Mod ${i2} failed to patch a function: Expected function name string, got ${typeof e3}`);
            let t3 = g2.patching.get(e3);
            return t3 || (t3 = { hooks: [], patches: /* @__PURE__ */ new Map() }, g2.patching.set(e3, t3)), t3;
          }, "s"), f2 = { unload: () => u(g2), hookFunction: (e3, t3, n2) => {
            g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`);
            const r3 = s2(e3);
            "number" != typeof t3 && o(`Mod ${i2} failed to hook function '${e3}': Expected priority number, got ${typeof t3}`), "function" != typeof n2 && o(`Mod ${i2} failed to hook function '${e3}': Expected hook function, got ${typeof n2}`);
            const a3 = { mod: g2.name, priority: t3, hook: n2 };
            return r3.hooks.push(a3), l(), () => {
              const e4 = r3.hooks.indexOf(a3);
              e4 >= 0 && (r3.hooks.splice(e4, 1), l());
            };
          }, patchFunction: (e3, t3) => {
            g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`);
            const r3 = s2(e3);
            n(t3) || o(`Mod ${i2} failed to patch function '${e3}': Expected patches object, got ${typeof t3}`);
            for (const [n2, a3] of Object.entries(t3))
              "string" == typeof a3 ? r3.patches.set(n2, a3) : null === a3 ? r3.patches.delete(n2) : o(`Mod ${i2} failed to patch function '${e3}': Invalid format of patch '${n2}'`);
            l();
          }, removePatches: (e3) => {
            g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`);
            s2(e3).patches.clear(), l();
          }, callOriginal: (e3, t3, n2) => (g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`), "string" == typeof e3 && e3 || o(`Mod ${i2} failed to call a function: Expected function name string, got ${typeof e3}`), Array.isArray(t3) || o(`Mod ${i2} failed to call a function: Expected args array, got ${typeof t3}`), function(e4, o2, t4 = window) {
            return c(e4).original.apply(t4, o2);
          }(e3, t3, n2)), getOriginalHash: (e3) => ("string" == typeof e3 && e3 || o(`Mod ${i2} failed to get hash: Expected function name string, got ${typeof e3}`), c(e3).originalHash) }, g2 = { name: e2.name, fullName: e2.fullName, version: e2.version, repository: e2.repository, allowReplace: a2, api: f2, loaded: true, patching: /* @__PURE__ */ new Map() };
          return p.set(e2.name, g2), Object.freeze(f2);
        }
        __name(g, "g");
        function h() {
          const e2 = [];
          for (const o2 of p.values())
            e2.push({ name: o2.name, fullName: o2.fullName, version: o2.version, repository: o2.repository });
          return e2;
        }
        __name(h, "h");
        let m;
        const y = function() {
          if (void 0 === window.bcModSdk)
            return window.bcModSdk = function() {
              const o2 = { version: e, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: f, errorReporterHooks: Object.seal({ hookEnter: null, hookChainExit: null }) };
              return m = o2, Object.freeze(o2);
            }();
          if (n(window.bcModSdk) || o("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== e && (alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk.version.startsWith("1.0.") && void 0 === window.bcModSdk._shim10register)) {
            const e2 = window.bcModSdk, o2 = Object.freeze(Object.assign(Object.assign({}, e2), { registerMod: (o3, t2, n2) => o3 && "object" == typeof o3 && "string" == typeof o3.name && "string" == typeof o3.version ? e2.registerMod(o3.name, o3.version, "object" == typeof t2 && !!t2 && true === t2.allowReplace) : e2.registerMod(o3, t2, n2), _shim10register: true }));
            window.bcModSdk = o2;
          }
          return window.bcModSdk;
        }();
        return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: true }), exports.default = y), y;
      }();
    }
  });

  // src/ExportChat.ts
  var ExportChat_exports = {};
  __export(ExportChat_exports, {
    bcModSDK: () => bcModSDK
  });
  var import_bondage_club_mod_sdk = __toESM(require_bcmodsdk());

  // src/Utilities.ts
  function EC_SendLocal(msg, time) {
    var bgColor = Player.ChatSettings.ColorTheme.indexOf("Light") > -1 ? "#F6D7E0" : "#522340";
    let text = `<div style='background-color:${bgColor};'>${msg}</div>`;
    ChatRoomSendLocal(text);
  }
  __name(EC_SendLocal, "EC_SendLocal");
  function getCurrentTime() {
    const currentDate = /* @__PURE__ */ new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  __name(getCurrentTime, "getCurrentTime");

  // src/HTMLManager.ts
  var HTMLManager = class {
    constructor() {
      this.myStyle = {
        fontSize: "28.672px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        width: "70vw"
      };
      this.target = null;
      this.category_processing = [
        {
          content: "bce-notification",
          isDelete: true,
          type: 0 /* class */
        },
        {
          content: "ChatMessageNonDialogue",
          isDelete: true,
          type: 0 /* class */
        },
        {
          content: "bce-line-icon-wrapper",
          isDelete: true,
          type: 0 /* class */
        }
      ];
    }
    static {
      __name(this, "HTMLManager");
    }
    getTags() {
      this.target = document.getElementById("TextAreaChatLog");
      if (this.target != null) {
        EC_SendLocal("\u627E\u7684\u804A\u5929\u8BB0\u5F55\u6807\u7B7E\u5F00\u59CB\u5904\u7406...");
      } else {
        EC_SendLocal("\u51FA\u9519\uFF0C\u672A\u627E\u5230\u804A\u5929\u8BB0\u5F55\u6807\u7B7E");
      }
    }
    handleTags() {
      const clonedElement = this.target?.cloneNode(true);
      let removeElements = [];
      for (let item of this.category_processing) {
        if (item.isDelete == true) {
          if (item.type == 0 /* class */) {
            clonedElement?.querySelectorAll(`.${item.content}`).forEach((element) => {
              removeElements.push(element);
            });
          } else if (item.type == 1 /* ID */) {
            clonedElement?.querySelectorAll(`#${item.content}`).forEach((element) => {
              removeElements.push(element);
            });
          }
        }
      }
      if (removeElements.length > 0) {
        for (let item of removeElements) {
          this.target?.removeChild(item);
        }
      } else {
        EC_SendLocal("\u6CA1\u6709\u627E\u5230\u9700\u8981\u5904\u7406\u7684\u6807\u7B7E");
      }
      clonedElement.style.fontSize = this.myStyle.fontSize;
      clonedElement.style.fontFamily = this.myStyle.fontFamily;
      clonedElement.style.display = this.myStyle.display;
      clonedElement.style.flexDirection = this.myStyle.flexDirection;
      clonedElement.style.width = this.myStyle.width;
      return clonedElement;
    }
    generatePage() {
      const contentTags = this.handleTags();
      const title = `\u8C03\u6559\u8BB0\u5F55${getCurrentTime()}`;
      const htmlContent = `<html><head><title>${title}</title></head><body style="display: flex;align-items: center;justify-content: center;background-color: #f2f2f2;">${contentTags}</body></html>`;
      const blob = new Blob([htmlContent], { type: "text/html" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${title}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // src/commands.ts
  var CommandsManager = class {
    constructor() {
      this.ecCommands = [
        {
          Tag: "help",
          Description: ": \u663E\u793A\u5BFC\u51FA\u804A\u5929\u5BA4\u8BB0\u5F55\u7684\u547D\u4EE4\u5E2E\u52A9.",
          Action: (args, msg, parsed) => {
            let helpLines = [];
            this.orderedCommands.forEach((c) => {
              helpLines.push(`<br><b>/ec ${c.Tag}</b> ${c.Description}`);
            });
            let helpText = `<b>- \u5BFC\u51FA\u804A\u5929\u5BA4\u8BB0\u5F55\u7684\u547D\u4EE4\u5E2E\u52A9 -</b>${helpLines.join()}`;
            EC_SendLocal(helpText);
          }
        },
        {
          Tag: "exportlog",
          Description: ": \u5BFC\u51FA\u5F53\u524D\u804A\u5929\u5BA4\u7684\u5168\u90E8\u5185\u5BB9",
          Action: () => {
            const M = new HTMLManager();
            M.getTags();
            M.generatePage();
          }
        }
      ];
      this.init();
    }
    static {
      __name(this, "CommandsManager");
    }
    init() {
      CommandCombine([
        // {
        // 	Tag: 'echat',
        // 	Description: "or <b>/echat help</b> : Opens the help for ExportChat commands",
        // 	AutoComplete(parsed, low, msg) {
        // 	},
        // 	Action: (args, msg, parsed) => {
        // 		if (parsed.length <= 0) {
        // 			this.getSubcommand("help")!.Action!("", msg, []);
        // 		} else {
        // 			var command = this.getSubcommand(parsed[0]);
        // 			var subArgs = parsed.slice(1);
        // 			command?.Action!(subArgs.join(" "), msg, subArgs)
        // 		}
        // 	}
        // },
        {
          Tag: "exportlog",
          Description: ": \u5BFC\u51FA\u5F53\u524D\u804A\u5929\u5BA4\u7684\u5168\u90E8\u5185\u5BB9",
          Action: () => {
            const M = new HTMLManager();
            M.getTags();
            M.generatePage();
          }
        }
      ]);
    }
    get orderedCommands() {
      var helpCommand = this.getSubcommand("help");
      var sorted = this.ecCommands.filter((c) => c.Tag != "help").sort((a, b) => a.Tag.localeCompare(b.Tag));
      return [helpCommand, ...sorted];
    }
    get subCommands() {
      return this.orderedCommands.map((c) => c.Tag);
    }
    getSubcommand(name) {
      return this.ecCommands.find((c) => c.Tag.toLocaleLowerCase() == name.toLocaleLowerCase());
    }
  };

  // src/ExportChat.ts
  var EC_Version = "0.0.1";
  var bcModSDK = import_bondage_club_mod_sdk.default.registerMod({
    name: "ExportChat",
    fullName: "package.json",
    version: EC_Version,
    repository: "https://github.com/iceriny/ExportChat"
  });
  function initWait() {
    console.debug("ExportChat: Init wait");
    if (CurrentScreen == null || CurrentScreen === "Login") {
      bcModSDK.hookFunction("LoginResponse", 0, (args, next) => {
        console.debug("ExportChat: Init LoginResponse caught", args);
        next(args);
        const response = args[0];
        if (response && typeof response.Name === "string" && typeof response.AccountName === "string") {
          init();
        }
      });
      console.log(`ExportChat Ready!`);
    } else {
      console.debug("ExportChat: Already logged in, init");
      init();
    }
  }
  __name(initWait, "initWait");
  function init() {
    console.debug("EC-  Init");
    const cmManager = new CommandsManager();
  }
  __name(init, "init");
  initWait();
  return __toCommonJS(ExportChat_exports);
})();
//# sourceMappingURL=main.js.map
