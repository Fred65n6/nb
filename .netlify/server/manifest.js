var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["aftenmenu.png", "aftenmenu.webp", "blanche.webp", "blomst_1.svg", "blomst_2.svg", "blomst_3.svg", "blue.svg", "bombay.webp", "book_bord.mobile.png", "book_bord.mobile.webp", "book_bord.png", "book_bord.webp", "bundle_1.webp", "bundle_2.webp", "bundle_3.mobile.webp", "bundle_3.webp", "bundle_4.png", "bundle_4.webp", "by_blomst.svg", "classic.webp", "dj_blomst.svg", "event.mobile.webp", "event.webp", "filter_ikon.svg", "footer_bg.mobile.png", "footer_bg.mobile.webp", "footer_bg.png", "footer_bg.svg", "footer_bg.webp", "frokostmenu.png", "frokostmenu.webp", "lager.webp", "menu_blomst.svg", "nb_logo.svg", "nb_logo_fill.svg", "olsortiment.png", "olsortiment.webp", "pil_hojre.svg", "pil_ned.svg", "pil_venstre.svg", "pilsner.webp", "ravnsborg.webp", "red.svg", "red_bg.mobile.svg", "red_bg.svg", "robots.txt", "shrimp.mobile.webp", "shrimp.webp", "smag_blomst.svg", "yellow.svg"]),
  mimeTypes: { ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".txt": "text/plain" },
  _: {
    entry: { "file": "start-16ae1377.js", "js": ["start-16ae1377.js", "chunks/index-54afa7c8.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/18.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/16.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/17.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/19.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "Button_blacks",
        pattern: /^\/Button_blacks\/?$/,
        names: [],
        types: [],
        path: "/Button_blacks",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "Button_hero",
        pattern: /^\/Button_hero\/?$/,
        names: [],
        types: [],
        path: "/Button_hero",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "Button_mobile",
        pattern: /^\/Button_mobile\/?$/,
        names: [],
        types: [],
        path: "/Button_mobile",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "Button_white",
        pattern: /^\/Button_white\/?$/,
        names: [],
        types: [],
        path: "/Button_white",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "Checkbox",
        pattern: /^\/Checkbox\/?$/,
        names: [],
        types: [],
        path: "/Checkbox",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "Event_cards",
        pattern: /^\/Event_cards\/?$/,
        names: [],
        types: [],
        path: "/Event_cards",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "Footer",
        pattern: /^\/Footer\/?$/,
        names: [],
        types: [],
        path: "/Footer",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "Modal_aften",
        pattern: /^\/Modal_aften\/?$/,
        names: [],
        types: [],
        path: "/Modal_aften",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "Modal_byen",
        pattern: /^\/Modal_byen\/?$/,
        names: [],
        types: [],
        path: "/Modal_byen",
        shadow: null,
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        id: "Modal_dj",
        pattern: /^\/Modal_dj\/?$/,
        names: [],
        types: [],
        path: "/Modal_dj",
        shadow: null,
        a: [0, 12],
        b: [1]
      },
      {
        type: "page",
        id: "Modal_frokost",
        pattern: /^\/Modal_frokost\/?$/,
        names: [],
        types: [],
        path: "/Modal_frokost",
        shadow: null,
        a: [0, 13],
        b: [1]
      },
      {
        type: "page",
        id: "Modal_smag",
        pattern: /^\/Modal_smag\/?$/,
        names: [],
        types: [],
        path: "/Modal_smag",
        shadow: null,
        a: [0, 14],
        b: [1]
      },
      {
        type: "page",
        id: "Shop_item",
        pattern: /^\/Shop_item\/?$/,
        names: [],
        types: [],
        path: "/Shop_item",
        shadow: null,
        a: [0, 15],
        b: [1]
      },
      {
        type: "page",
        id: "Sidebar",
        pattern: /^\/Sidebar\/?$/,
        names: [],
        types: [],
        path: "/Sidebar",
        shadow: null,
        a: [0, 16],
        b: [1]
      },
      {
        type: "page",
        id: "book_bord",
        pattern: /^\/book_bord\/?$/,
        names: [],
        types: [],
        path: "/book_bord",
        shadow: null,
        a: [0, 17],
        b: [1]
      },
      {
        type: "page",
        id: "events",
        pattern: /^\/events\/?$/,
        names: [],
        types: [],
        path: "/events",
        shadow: null,
        a: [0, 18],
        b: [1]
      },
      {
        type: "page",
        id: "shop",
        pattern: /^\/shop\/?$/,
        names: [],
        types: [],
        path: "/shop",
        shadow: null,
        a: [0, 19],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
