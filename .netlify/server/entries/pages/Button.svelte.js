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
  default: () => Button
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../chunks/index-38cedc01.js");
var Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button.svelte-mhdhil{font-size:1em;color:white;border:1px solid white;background:#f26700;outline:solid #f26700 1px;padding:0.25em 1em}",
  map: null
};
const Button = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<a class="${"button svelte-mhdhil"}"${(0, import_index_38cedc01.b)("href", link, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
