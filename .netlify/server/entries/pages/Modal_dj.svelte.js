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
  default: () => Modal_dj,
  getModalDj: () => getModalDj
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f5faca1c = require("../../chunks/index-f5faca1c.js");
var import_Button_black_svelte = __toESM(require("./Button_black.svelte.js"));
var Modal_dj_svelte_svelte_type_style_lang = "";
const css = {
  code: "#topModal.svelte-wxel4.svelte-wxel4{visibility:hidden;z-index:9999;position:fixed;top:0;left:0;right:0;bottom:0;background:#4448;display:flex;align-items:center;justify-content:center}#modal.svelte-wxel4.svelte-wxel4{position:relative;border-radius:6px;background:white;border:2px solid #000;filter:drop-shadow(5px 5px 5px #555);padding:1em}.visible.svelte-wxel4.svelte-wxel4{visibility:visible !important}#close.svelte-wxel4.svelte-wxel4{position:absolute;top:-12px;right:-12px;width:24px;height:24px;cursor:pointer;fill:#f44;transition:transform 0.3s}#close.svelte-wxel4.svelte-wxel4:hover{transform:scale(2)}#close.svelte-wxel4 line.svelte-wxel4{stroke:#fff;stroke-width:2}#modal-content.svelte-wxel4.svelte-wxel4{max-width:calc(100vw - 20px);max-height:calc(100vh - 20px);overflow:auto}",
  map: null
};
let onTop;
const modals = {};
function getModalDj(id = "") {
  return modals[id];
}
const Modal_dj = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let topDiv;
  let visible = false;
  let prevOnTop;
  let closeCallback;
  let { id = "" } = $$props;
  function keyPress(ev) {
    if (ev.key == "Escape" && onTop == topDiv)
      close();
  }
  function open(callback) {
    closeCallback = callback;
    if (visible)
      return;
    prevOnTop = onTop;
    onTop = topDiv;
    window.addEventListener("keydown", keyPress);
    document.body.style.overflow = "hidden";
    visible = true;
    document.body.appendChild(topDiv);
  }
  function close(retVal) {
    if (!visible)
      return;
    window.removeEventListener("keydown", keyPress);
    onTop = prevOnTop;
    if (onTop == null)
      document.body.style.overflow = "";
    visible = false;
    if (closeCallback)
      closeCallback(retVal);
  }
  modals[id] = { open, close };
  (0, import_index_f5faca1c.o)(() => {
    delete modals[id];
    window.removeEventListener("keydown", keyPress);
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<div id="${"topModal"}" class="${["svelte-wxel4", visible ? "visible" : ""].join(" ").trim()}"${(0, import_index_f5faca1c.d)("this", topDiv, 0)}><div id="${"modal"}" class="${"svelte-wxel4"}"><svg id="${"close"}" viewBox="${"0 0 12 12"}" class="${"svelte-wxel4"}"><circle cx="${"6"}" cy="${"6"}" r="${"6"}"></circle><line x1="${"3"}" y1="${"3"}" x2="${"9"}" y2="${"9"}" class="${"svelte-wxel4"}"></line><line x1="${"9"}" y1="${"3"}" x2="${"3"}" y2="${"9"}" class="${"svelte-wxel4"}"></line></svg>
		<div id="${"modal-content"}" class="${"svelte-wxel4"}">${slots.default ? slots.default({}) : ``}
			${(0, import_index_f5faca1c.v)(import_Button_black_svelte.default, "ButtonBlack").$$render($$result, {}, {}, {
    default: () => {
      return `Book Nu`;
    }
  })}</div></div>
</div>`;
});
