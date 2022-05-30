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
  default: () => Button_mobile
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3905281 = require("../../chunks/index-e3905281.js");
const css = {
  code: ".svelte-1p7uy29{box-sizing:border-box}.btn.svelte-1p7uy29{border:white 2px;border-style:solid;font-family:'Josefin Sans', sans-serif;background-color:rgba(0, 0, 0, 0.525);text-decoration:none;position:relative;display:inline-block;padding-inline:0.5rem;padding-block:0.1rem;font-size:1rem;line-height:45px;text-align:center;text-transform:uppercase;color:white;cursor:pointer;overflow:hidden;transition:1s}",
  map: null
};
const Button_mobile = (0, import_index_e3905281.c)(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<a class="${"btn svelte-1p7uy29"}"${(0, import_index_e3905281.d)("href", link, 0)}>${slots.default ? slots.default({}) : ``}
</a>`;
});
