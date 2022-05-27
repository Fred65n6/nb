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
  default: () => Book_bord
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df09d767 = require("../../chunks/index-df09d767.js");
var import_Button_white_svelte = __toESM(require("./Button_white.svelte.js"));
var book_bord_svelte_svelte_type_style_lang = "";
const css = {
  code: ".book.svelte-10wbbz0.svelte-10wbbz0{background-color:#6e0b20;display:grid}.book.svelte-10wbbz0 p.svelte-10wbbz0{color:white}.menuer.svelte-10wbbz0.svelte-10wbbz0{display:grid;grid-template-columns:1fr;gap:20px;padding-top:3rem}.menuer.svelte-10wbbz0 h3.svelte-10wbbz0{color:white}.card_1.svelte-10wbbz0.svelte-10wbbz0{width:27rem;height:27rem;background-image:url('../../static/aftenmenu.webp');background-size:contain;padding:1rem;padding-top:18rem}.card_2.svelte-10wbbz0.svelte-10wbbz0{width:27rem;height:27rem;background-image:url('../../static/frokostmenu.webp');background-size:contain;padding:1rem;padding-top:18rem}.card_3.svelte-10wbbz0.svelte-10wbbz0{width:27rem;height:27rem;background-image:url('../../static/olsortiment.webp');background-size:contain;padding:1rem;padding-top:18rem}@media(max-width: 600px){.image.svelte-10wbbz0.svelte-10wbbz0{display:none}.booking.svelte-10wbbz0.svelte-10wbbz0{padding-block:2rem}}@media(min-width: 600px){.book.svelte-10wbbz0.svelte-10wbbz0{height:26.3rem;grid-template-columns:1fr 1fr}.image.svelte-10wbbz0.svelte-10wbbz0{width:50rem;height:26.3rem}.mobil_img.svelte-10wbbz0.svelte-10wbbz0{display:none}.menuer.svelte-10wbbz0.svelte-10wbbz0{grid-template-columns:1fr 1fr 1fr}}",
  map: null
};
const Book_bord = (0, import_index_df09d767.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Book bord</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-1q2tzwm">`, ""}

<section><h1>Book bord</h1></section>

<section class="${"book svelte-10wbbz0"}"><div class="${"mobil_img svelte-10wbbz0"}"><img src="${"book_bord.mobile.webp"}" alt="${""}"></div>
	<div class="${"booking svelte-10wbbz0"}"><h2>Book dit bord her</h2>
		<p class="${"svelte-10wbbz0"}">Trin 1 af 3</p>
		<br>
		<div class="${"flex gap-8"}"><div class="${""}"><p class="${"svelte-10wbbz0"}">Dato for jeres bes\xF8g</p>
				<input class="${"h-[45px] w-[166px]"}" placeholder="${"18/05/2022"}" type="${"Email"}"></div>
			<div class="${""}"><p class="${"svelte-10wbbz0"}">Hvor mange er</p>
				<input class="${"h-[45px] w-[166px]"}" placeholder="${"Antal g\xE6ster"}" type="${"Email"}"></div></div>
		<br>
		${(0, import_index_df09d767.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `N\xE6ste Trin`;
    }
  })}</div>
	<div class="${"image svelte-10wbbz0"}"><img class="${""}" src="${"book_bord.webp"}" alt="${""}"></div></section>

<section class="${"menuer svelte-10wbbz0"}"><div class="${"card_1 svelte-10wbbz0"}"><h3 class="${"svelte-10wbbz0"}">Se vores <br>Aftenmenu</h3>
		${(0, import_index_df09d767.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `Se aftenmenu her`;
    }
  })}</div>
	<div class="${"card_2 svelte-10wbbz0"}"><h3 class="${"svelte-10wbbz0"}">Se vores <br>frokostmenu</h3>
		${(0, import_index_df09d767.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `Se frokostmenu her`;
    }
  })}</div>
	<div class="${"card_3 svelte-10wbbz0"}"><h3 class="${"svelte-10wbbz0"}">Se vores <br>\xD8lsortiment</h3>
		${(0, import_index_df09d767.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `Se \xD8lsortiment her`;
    }
  })}</div>
</section>`;
});
