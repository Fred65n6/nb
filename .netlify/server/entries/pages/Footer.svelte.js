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
var import_index_e3905281 = require("../../chunks/index-e3905281.js");
var import_Button_blacks_svelte = __toESM(require("./Button_blacks.svelte.js"));
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1gtgb45{margin-inline:3rem;padding-bottom:10rem;padding-top:1rem;background-image:url('../../static/footer_bg.mobile.webp');background-image:url('footer_bg.mobile.webp');background-size:cover;background-repeat:no-repeat}.bottom.svelte-1gtgb45{display:grid;align-items:flex-start}@media(min-width: 600px){.bottom.svelte-1gtgb45{grid-template-columns:1fr 1fr 1fr;place-items:center;align-items:flex-start}footer.svelte-1gtgb45{background-image:url('../../static/footer_bg.webp');background-image:url('footer_bg.webp');background-size:100%;margin-inline:7rem;padding-top:9rem}}",
  map: null
};
const Footer = (0, import_index_e3905281.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-1gtgb45"}"><div class="${"top grid place-items-center"}"><h3 class="${"text-center"}">Tilmeld dig vores nyhedsbrev</h3>
		<div class="${"md:flex grid gap-4 pt-4"}"><input class="${"h-[45px] w-[166px] border-2"}" placeholder="${"E-mail"}" type="${"Email"}">
			${(0, import_index_e3905281.v)(import_Button_blacks_svelte.default, "Button_black").$$render($$result, {}, {}, {
    default: () => {
      return `TILMELD NU`;
    }
  })}</div></div>
	<div class="${"bottom svelte-1gtgb45"}"><div class="${"mt-12"}"><h3>Kontakt</h3>
			<p>Vi er altid klar til dit bes\xF8g og til at tage imod eventuelle sp\xF8rgsm\xE5l <br><br>
				N\xF8rrebro Bryghus <br>
				Ryesgade 3 <br> 2200 K\xF8benhavn N <br><br> Cvr. nr. 26882451 <br><br> Telefon:
				<br>
				3530 0530 <br><br> Mail vedr. restaurant og bar:
				<a href="${"mailto: info@noerrebrobryghus.dk"}">info@noerrebrobryghus.dk</a></p></div>
		<div class="${"mt-12"}"><h3>\xE5bningstider</h3>

			<p><span class="${"font-semibold"}">Man:</span> <br>
				Kun \xE5bent i BRAW baren 15-23 <br><br>
				<span class="${"font-semibold"}">Tirs-ons:</span> <br>
				12.00-23.00 <br><br>
				<span class="${"font-semibold"}">Tors:</span> <br>
				12.00-00.00 <br><br>
				<span class="${"font-semibold"}">Fre-l\xF8r:</span> <br>
				12.00-00.00 <br><br>
				<span class="${"font-semibold"}">S\xF8n:</span> <br>
				Lukket
			</p></div>
		<div class="${"mt-12"}"><h3>Links</h3>
			<br>
			<ul class="${"flex gap-4"}"><li><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ic"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"}"></path></svg></a></li>
				<li><a href="${"/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"}"></path></svg></a></li></ul>
			<div class="${"pt-12"}"><img class="${"w-28"}" src="${"nb_logo_fill.svg"}" alt="${"logo"}"></div></div></div>
</footer>`;
});
