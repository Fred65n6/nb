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
  default: () => Button_blacks
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3905281 = require("../../chunks/index-e3905281.js");
const css = {
  code: ".svelte-14e6ycl.svelte-14e6ycl{box-sizing:border-box}.btn.svelte-14e6ycl.svelte-14e6ycl{font-family:'Josefin Sans', sans-serif;text-decoration:none;position:relative;display:inline-block;width:166px;height:45px;font-size:1rem;line-height:45px;text-align:center;text-transform:uppercase;color:black;cursor:pointer;overflow:hidden}.btn.svelte-14e6ycl svg.svelte-14e6ycl{position:absolute;top:0;left:0}.btn.svelte-14e6ycl svg rect.svelte-14e6ycl{stroke:black;stroke-width:3;stroke-dasharray:422, 0;stroke-dashoffset:0}.btn.svelte-14e6ycl:hover svg rect.svelte-14e6ycl{text-decoration:none;stroke-width:3;stroke-dasharray:110, 312;stroke-dashoffset:183;transition:1s;stroke:black;background-color:none}",
  map: null
};
const Button_blacks = (0, import_index_e3905281.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"btn svelte-14e6ycl"}"><svg class="${"svelte-14e6ycl"}"><rect x="${"0"}" y="${"0"}" fill="${"none"}" width="${"166"}" height="${"45"}" class="${"svelte-14e6ycl"}"></rect></svg>
	${slots.default ? slots.default({}) : ``}
</div>`;
});
