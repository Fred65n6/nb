var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Modal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df09d767 = require("../../chunks/index-df09d767.js");
const css = {
  code: ".modal-overlay.svelte-30qcnt{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);z-index:10;display:flex;flex-direction:column;justify-content:center}.modal-container.svelte-30qcnt{position:relative;background-color:#ffffff;width:120rem;margin:1rem auto 0.2rem;box-shadow:0 3px 10px #555}main.svelte-30qcnt{padding:0.5rem}",
  map: null
};
const Modal = (0, import_index_df09d767.c)(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css);
  return `${show ? `<div><div class="${"modal-overlay svelte-30qcnt"}" data-close><div class="${"modal-container svelte-30qcnt"}"><main class="${"svelte-30qcnt"}"><p>About me...</p></main></div></div></div>` : ``}`;
});
