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
  default: () => Button_hero
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f5faca1c = require("../../chunks/index-f5faca1c.js");
const css = {
  code: ".svelte-1aghrhe.svelte-1aghrhe{box-sizing:border-box}.btn.svelte-1aghrhe.svelte-1aghrhe{font-family:'Josefin Sans', sans-serif;background-color:rgba(0, 0, 0, 0.525);text-decoration:none;position:relative;display:inline-block;width:166px;height:45px;font-size:1rem;line-height:45px;text-align:center;text-transform:uppercase;color:white;cursor:pointer;overflow:hidden;transition:1s}.btn.svelte-1aghrhe svg.svelte-1aghrhe{position:absolute;top:0;left:0}.btn.svelte-1aghrhe svg rect.svelte-1aghrhe{stroke:white;stroke-width:3;stroke-dasharray:422, 0;stroke-dashoffset:0;transition:ease 900ms}.btn.svelte-1aghrhe:hover svg rect.svelte-1aghrhe{text-decoration:none;stroke-width:3;stroke-dasharray:110, 312;stroke-dashoffset:183;transition:1s;stroke:white;background-color:none}.btn.svelte-1aghrhe.svelte-1aghrhe:hover{background-color:rgba(0, 0, 0, 0);transition:1s}",
  map: null
};
const Button_hero = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<a class="${"btn svelte-1aghrhe"}"${(0, import_index_f5faca1c.d)("href", link, 0)}><svg class="${"svelte-1aghrhe"}"><rect x="${"0"}" y="${"0"}" fill="${"none"}" width="${"166"}" height="${"45"}" class="${"svelte-1aghrhe"}"></rect></svg>
	${slots.default ? slots.default({}) : ``}
</a>`;
});
