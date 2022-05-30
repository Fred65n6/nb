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
  default: () => Shop_item
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3905281 = require("../../chunks/index-e3905281.js");
var import_Button_blacks_svelte = __toESM(require("./Button_blacks.svelte.js"));
var Shop_item_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-e63xnm{display:grid;gap:15px;place-items:center;width:23rem;height:23rem;text-align:center;padding:1rem;margin-block:4rem}@media(max-width: 600px){.card.svelte-e63xnm{width:18em}}.card.svelte-e63xnm,h3.svelte-e63xnm,p.svelte-e63xnm{color:black}img.svelte-e63xnm{width:20rem}",
  map: null
};
const Shop_item = (0, import_index_e3905281.c)(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { titel } = $$props;
  let { sub_titel } = $$props;
  let { pris } = $$props;
  let count = 0;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.titel === void 0 && $$bindings.titel && titel !== void 0)
    $$bindings.titel(titel);
  if ($$props.sub_titel === void 0 && $$bindings.sub_titel && sub_titel !== void 0)
    $$bindings.sub_titel(sub_titel);
  if ($$props.pris === void 0 && $$bindings.pris && pris !== void 0)
    $$bindings.pris(pris);
  $$result.css.add(css);
  return `<div class="${"card svelte-e63xnm"}"><img${(0, import_index_e3905281.d)("src", img, 0)} alt="${""}" class="${"svelte-e63xnm"}">
	<h3 class="${"svelte-e63xnm"}">${(0, import_index_e3905281.e)(titel)}</h3>
	<p class="${"svelte-e63xnm"}">${(0, import_index_e3905281.e)(sub_titel)}</p>
	<h3 class="${"svelte-e63xnm"}">${(0, import_index_e3905281.e)(pris)}</h3>
	<div class="${"flex gap-4"}"><button class="${"font-xl"}">-</button>
		<span class="${"bg-white px-4 border-2"}">${(0, import_index_e3905281.e)(count)}</span>
		<button>+</button></div>
	${(0, import_index_e3905281.v)(import_Button_blacks_svelte.default, "ButtonBlack").$$render($$result, {}, {}, {
    default: () => {
      return `Tilf\xF8j til Kurv`;
    }
  })}
</div>`;
});
