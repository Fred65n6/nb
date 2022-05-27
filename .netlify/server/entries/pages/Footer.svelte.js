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
  default: () => Footer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df09d767 = require("../../chunks/index-df09d767.js");
var import_Button_black_svelte = __toESM(require("./Button_black.svelte.js"));
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-10oher7{margin-inline:1rem;padding-bottom:10rem;padding-top:1rem;background-image:url('../../static/footer_bg.mobile.webp');background-size:cover;background-repeat:no-repeat}.bottom.svelte-10oher7{display:grid;align-items:flex-start}@media(min-width: 600px){.bottom.svelte-10oher7{grid-template-columns:1fr 1fr 1fr;place-items:center;align-items:flex-start}footer.svelte-10oher7{background-image:url('../../static/footer_bg.webp');background-size:100%;padding-inline:8rem;padding-top:9rem}}",
  map: null
};
const Footer = (0, import_index_df09d767.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-10oher7"}"><div class="${"top grid place-items-center"}"><h3 class="${"text-center"}">Tilmeld dig vores nyhedsbrev</h3>
		<div class="${"md:flex grid pt-4"}"><input class="${"h-[45px] w-[166px] border-2"}" placeholder="${"E-mail"}" type="${"Email"}">
			${(0, import_index_df09d767.v)(import_Button_black_svelte.default, "Button_black").$$render($$result, { link: "/" }, {}, {
    default: () => {
      return `TILMELD`;
    }
  })}</div></div>
	<div class="${"bottom svelte-10oher7"}"><div class="${"mt-12"}"><h3>Kontakt</h3>
			<p>Vi er altid klar til dit bes\xF8g og til at tage imod eventuelle sp\xF8rgsm\xE5l <br><br>
				N\xF8rrebro Bryghus <br>
				Ryesgade 3 <br> 2200 K\xF8benhavn N <br><br> Cvr. nr. 26882451 <br><br> Telefon:
				<br>
				3530 0530 <br><br> Mail vedr. restaurant og bar:
				<a href="${"mailto: info@noerrebrobryghus.dk"}">info@noerrebrobryghus.dk</a></p></div>
		<div class="${"mt-12"}"><h3>\xE5bningstider</h3>
			<p>\xC5bningstider i restauranten: <br><br>

				Mandag: Kun \xE5bent i BRAW baren 15-23 <br> <br>

				Tir-ons: <br>
				12.00-23.00 <br>
				Torsdag: <br>
				12.00-00.00 <br>
				Fre-l\xF8r: <br>
				12.00-00.00 <br>
				S\xF8n: <br>
				Lukket
			</p></div>
		<div class="${"mt-12"}"><h3>Links</h3>
			<ul class="${""}"><li><a href="${"/"}">Facebook</a>
					<br>
					<a href="${"/"}">Instagram</a></li></ul>
			<div class="${"pt-12"}"><img class="${"w-28"}" src="${"nb_logo_fill.svg"}" alt="${"logo"}"></div></div></div>
</footer>`;
});
