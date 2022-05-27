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
  default: () => Events
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df09d767 = require("../../chunks/index-df09d767.js");
var import_Event_card_svelte = __toESM(require("./Event_card.svelte.js"));
var events_svelte_svelte_type_style_lang = "";
const css = {
  code: ".heading.svelte-vh2g57.svelte-vh2g57{padding-top:3rem;text-align:center}.dj.svelte-vh2g57.svelte-vh2g57{background-color:#6e0b20}.smag.svelte-vh2g57.svelte-vh2g57{background-color:#ebd37f}.by.svelte-vh2g57.svelte-vh2g57{background-color:#abccd8}.kalender.svelte-vh2g57.svelte-vh2g57{margin:0 auto;max-width:1600px;place-items:center;display:grid;grid-template-columns:1fr;gap:20px}@media(min-width: 1200px){.kalender.svelte-vh2g57.svelte-vh2g57{grid-template-columns:1fr 1fr 1fr}}.heading.svelte-vh2g57 p.svelte-vh2g57{max-width:600px}.btn-group.svelte-vh2g57.svelte-vh2g57{display:flex;gap:8px;align-items:center}.dropdown.svelte-vh2g57.svelte-vh2g57{position:relative;display:inline-block}input.svelte-vh2g57.svelte-vh2g57{margin:1rem}.dropbtn.svelte-vh2g57.svelte-vh2g57{background-color:white;padding:0.5rem;border:black 2px;border-style:solid}.dropdown-content.svelte-vh2g57.svelte-vh2g57{text-align:left;display:none;position:absolute;background-color:rgb(255, 255, 255);width:200px;z-index:1}.dropdown.svelte-vh2g57:hover .dropdown-content.svelte-vh2g57{display:block}.filter.svelte-vh2g57.svelte-vh2g57{display:grid;align-items:center;grid-template-columns:1fr 1fr 1fr}@media(max-width: 600px){.dropdown-content.svelte-vh2g57.svelte-vh2g57{text-align:left}.dropbtn.svelte-vh2g57.svelte-vh2g57{font-size:1rem}.filter.svelte-vh2g57.svelte-vh2g57{display:flex;justify-content:space-between}}@media(min-width: 600px){}",
  map: null
};
const Events = (0, import_index_df09d767.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Book bord</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-1q2tzwm">`, ""}

<section class="${"heading svelte-vh2g57"}"><h1>Det sker i bryghuset</h1>
	<p class="${"svelte-vh2g57"}">F\xF8lg med i aktiviteterne p\xE5 N\xF8rrebro Bryghus i vores eventkalender herunder. Vores hus byder p\xE5
		mange forskellige arrangementer, og vi gl\xE6der os til at se dig i vores \xF8lslaraffenland i hjertet
		af N\xF8rrebro.
	</p></section>

<section class="${"filter svelte-vh2g57"}"><div class="${""}"><div class="${"dropdown svelte-vh2g57"}"><div class="${"dropbtn flex svelte-vh2g57"}">FILTRER EVENTS<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols mt-1"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
			<div class="${"dropdown-content flex svelte-vh2g57"}"><fieldset class="${"grid"}"><div><input type="${"radio"}" id="${"byvandring"}" name="${"drone"}" value="${"byvandring"}" checked class="${"svelte-vh2g57"}">
						<label for="${"byvandring"}">BYVANDRING</label></div>

					<div><input type="${"radio"}" id="${"olsmagning"}" name="${"drone"}" value="${"olsmagning"}" class="${"svelte-vh2g57"}">
						<label for="${"olsmagning"}">\xD8LSMAGNING</label></div>

					<div><input type="${"radio"}" id="${"djevent"}" name="${"drone"}" value="${"djevent"}" class="${"svelte-vh2g57"}">
						<label for="${"djevent"}">DJ EVENT</label></div></fieldset></div></div></div>
	<div class="${"btn-group svelte-vh2g57"}"><button class="${"btn"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"25"}" height="${"25"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"}"></path></svg></button>
		<button class="${"btn"}">MAJ, 2022</button>
		<button class="${"btn"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"25"}" height="${"25"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"}"></path></svg></button></div></section>

<section class="${"kalender svelte-vh2g57"}"><div class="${"smag svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "4/5/2022",
    img: "smag_blomst.svg",
    titel: "\xF8lsmagning",
    sub_titel: "En smagsoplevelse i \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"by svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "6/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"dj svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "7/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"by svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "10/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"smag svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "11/5/2022",
    img: "smag_blomst.svg",
    titel: "\xF8lsmagning",
    sub_titel: "En smagsoplevelse i \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>

	<div class="${"dj svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "12/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"by svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "16/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"dj svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "17/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"by svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "18/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>

	<div class="${"dj svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "23/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"smag svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "24/5/2022",
    img: "smag_blomst.svg",
    titel: "\xF8lsmagning",
    sub_titel: "En smagsoplevelse i \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
	<div class="${"dj svelte-vh2g57"}">${(0, import_index_df09d767.v)(import_Event_card_svelte.default, "Event_card").$$render($$result, {
    dato: "27/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div>
</section>`;
});
