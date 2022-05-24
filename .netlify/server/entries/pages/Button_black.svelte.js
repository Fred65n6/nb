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
  default: () => Button_black
});
module.exports = __toCommonJS(stdin_exports);
var import_index_72c3c0a2 = require("../../chunks/index-72c3c0a2.js");
var Button_black_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-180fimo.svelte-180fimo{box-sizing:border-box}.btn.svelte-180fimo.svelte-180fimo{font-family:'Josefin Sans', sans-serif;text-decoration:none;position:relative;display:inline-block;width:166px;height:45px;font-size:1rem;line-height:45px;text-align:center;text-transform:uppercase;color:black;cursor:pointer;overflow:hidden}.btn.svelte-180fimo svg.svelte-180fimo{position:absolute;top:0;left:0}.btn.svelte-180fimo svg rect.svelte-180fimo{stroke:black;stroke-width:3;stroke-dasharray:422, 0;stroke-dashoffset:0;transition:ease 900ms}.btn.svelte-180fimo:hover svg rect.svelte-180fimo{text-decoration:none;stroke-width:3;stroke-dasharray:110, 312;stroke-dashoffset:183;transition:1s;stroke:black;background-color:none}",
  map: null
};
const Button_black = (0, import_index_72c3c0a2.c)(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<a class="${"btn svelte-180fimo"}"${(0, import_index_72c3c0a2.d)("href", link, 0)}><svg class="${"svelte-180fimo"}"><rect x="${"0"}" y="${"0"}" fill="${"none"}" width="${"166"}" height="${"45"}" class="${"svelte-180fimo"}"></rect></svg>
	${slots.default ? slots.default({}) : ``}
</a>`;
});
