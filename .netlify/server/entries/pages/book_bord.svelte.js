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
var import_index_f5faca1c = require("../../chunks/index-f5faca1c.js");
var import_Button_white_svelte = __toESM(require("./Button_white.svelte.js"));
var book_bord_svelte_svelte_type_style_lang = "";
const css = {
  code: ".book.svelte-1yut72a.svelte-1yut72a{margin:0 auto;background-color:#6e0b20;display:grid}.booking.svelte-1yut72a.svelte-1yut72a{padding:1rem}.book.svelte-1yut72a p.svelte-1yut72a{color:white}.menuer.svelte-1yut72a.svelte-1yut72a{display:grid;grid-template-columns:1fr;gap:20px;padding-top:3rem}.menuer.svelte-1yut72a h3.svelte-1yut72a{color:white}.card_1.svelte-1yut72a.svelte-1yut72a{width:27rem;height:27rem;background-image:url('../../static/aftenmenu.webp');background-image:url('aftenmenu.webp');background-size:contain;padding:1rem;padding-top:18rem}.card_2.svelte-1yut72a.svelte-1yut72a{width:27rem;height:27rem;background-image:url('../../static/frokostmenu.webp');background-image:url('frokostmenu.webp');background-size:contain;padding:1rem;padding-top:18rem}.card_3.svelte-1yut72a.svelte-1yut72a{width:27rem;height:27rem;background-image:url('../../static/olsortiment.webp');background-image:url('olsortiment.webp');background-size:contain;background-repeat:no-repeat;padding:1rem;padding-top:18rem}@media(max-width: 400px){.book.svelte-1yut72a.svelte-1yut72a{width:18em;display:grid;place-items:center}.card_1.svelte-1yut72a.svelte-1yut72a,.card_2.svelte-1yut72a.svelte-1yut72a,.card_3.svelte-1yut72a.svelte-1yut72a{width:18em;height:18em;padding-top:10rem}.booking.svelte-1yut72a.svelte-1yut72a{padding-block:2rem}.mobil_img.svelte-1yut72a.svelte-1yut72a{width:18em}}@media(max-width: 600px){.image.svelte-1yut72a.svelte-1yut72a{display:none}.book.svelte-1yut72a.svelte-1yut72a{margin-inline:0.8rem}}@media(min-width: 600px){.book.svelte-1yut72a.svelte-1yut72a{margin-inline:1.5rem;height:26.3rem;grid-template-columns:1fr 1fr}.image.svelte-1yut72a.svelte-1yut72a{width:50rem;height:26.3rem}.mobil_img.svelte-1yut72a.svelte-1yut72a{display:none}.menuer.svelte-1yut72a.svelte-1yut72a{grid-template-columns:1fr 1fr 1fr}}@media(max-width: 600px){}",
  map: null
};
const Book_bord = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Book bord</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-1q2tzwm">`, ""}

<section><h1>Book bord</h1></section>

<section class="${"book svelte-1yut72a"}"><div class="${"mobil_img svelte-1yut72a"}"><img src="${"book_bord.mobile.webp"}" alt="${""}"></div>
	<div class="${"booking svelte-1yut72a"}"><h2>Book dit bord her</h2>
		<p class="${"svelte-1yut72a"}">Trin 1 af 3</p>
		<br>
		<div class="${"sm:flex grid gap-8"}"><div class="${""}"><p class="${"svelte-1yut72a"}">Dato for jeres bes\xF8g</p>
				<input class="${"h-[45px] w-[166px]"}" placeholder="${"18/05/2022"}" type="${"Email"}"></div>
			<div class="${"form-control"}"><div class="${"input-group"}"><p class="${"svelte-1yut72a"}">Hvor mange er i?</p>
					<select class="${"select select-bordered h-[45px] w-[166px] text-black/60"}"><option class="${"text-black/80"}" disabled selected value="${"Antal g\xE6ster"}">Antal g\xE6ster</option><option value="${"1"}">1</option><option value="${"2"}">2</option><option value="${"3"}">3</option><option value="${"4"}">4</option><option value="${"5"}">5</option><option value="${"6"}">6</option><option value="${"7"}">7</option><option value="${"8"}">8</option></select></div></div></div>
		<br>
		${(0, import_index_f5faca1c.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `N\xE6ste Trin`;
    }
  })}</div>
	<div class="${"image svelte-1yut72a"}"><img class="${""}" src="${"book_bord.webp"}" alt="${""}"></div></section>

<section class="${"menuer svelte-1yut72a"}"><div class="${"card_1 svelte-1yut72a"}"><h3 class="${"svelte-1yut72a"}">Se vores <br>Aftenmenu</h3>
		${(0, import_index_f5faca1c.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `Se aftenmenu her`;
    }
  })}</div>
	<div class="${"card_2 svelte-1yut72a"}"><h3 class="${"svelte-1yut72a"}">Se vores <br>frokostmenu</h3>
		${(0, import_index_f5faca1c.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `Se frokostmenu her`;
    }
  })}</div>
	<div class="${"card_3 svelte-1yut72a"}"><h3 class="${"svelte-1yut72a"}">Se vores <br>\xD8lsortiment</h3>
		${(0, import_index_f5faca1c.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `Se \xD8lsortiment her`;
    }
  })}</div>
</section>`;
});
