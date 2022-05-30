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
var import_index_e3905281 = require("../../chunks/index-e3905281.js");
var import_Modal_byen_svelte = __toESM(require("./Modal_byen.svelte.js"));
var import_Modal_dj_svelte = __toESM(require("./Modal_dj.svelte.js"));
var import_Modal_smag_svelte = __toESM(require("./Modal_smag.svelte.js"));
var import_Event_cards_svelte = __toESM(require("./Event_cards.svelte.js"));
var import_Button_blacks_svelte = require("./Button_blacks.svelte.js");
var events_svelte_svelte_type_style_lang = "";
const css = {
  code: ".heading.svelte-1nokq14.svelte-1nokq14{padding-top:3rem;text-align:center}@media(max-width: 600px){.heading.svelte-1nokq14.svelte-1nokq14{text-align:left}}.kasse.svelte-1nokq14.svelte-1nokq14{align-items:baseline}.dj.svelte-1nokq14.svelte-1nokq14{background-color:#6e0b20}.smag.svelte-1nokq14.svelte-1nokq14{background-color:#ebd37f}.by.svelte-1nokq14.svelte-1nokq14{background-color:#abccd8}.kalender.svelte-1nokq14.svelte-1nokq14{margin:0 auto;max-width:1600px;place-items:center;display:grid;grid-template-columns:1fr;gap:20px}@media(min-width: 1200px){.kalender.svelte-1nokq14.svelte-1nokq14{grid-template-columns:1fr 1fr 1fr}}.heading.svelte-1nokq14 p.svelte-1nokq14{max-width:600px}.btn-group.svelte-1nokq14.svelte-1nokq14{display:flex;gap:8px;align-items:center}.dropdown.svelte-1nokq14.svelte-1nokq14{position:relative;display:inline-block}input.svelte-1nokq14.svelte-1nokq14{margin:1rem}.dropbtn.svelte-1nokq14.svelte-1nokq14{background-color:white;padding:0.5rem;border:black 2px;border-style:solid}.dropdown-content.svelte-1nokq14.svelte-1nokq14{text-align:left;display:none;position:absolute;background-color:rgb(255, 255, 255);width:200px;z-index:1}.dropdown.svelte-1nokq14:hover .dropdown-content.svelte-1nokq14{display:block}.filter.svelte-1nokq14.svelte-1nokq14{display:grid;align-items:center;grid-template-columns:1fr 1fr 1fr}@media(max-width: 600px){.dropdown-content.svelte-1nokq14.svelte-1nokq14{text-align:left}.dropbtn.svelte-1nokq14.svelte-1nokq14{font-size:1rem}.filter.svelte-1nokq14.svelte-1nokq14{display:flex;justify-content:space-between}}",
  map: null
};
const Events = (0, import_index_e3905281.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Book bord</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-1q2tzwm">`, ""}

<section class="${"heading svelte-1nokq14"}"><h1>Det sker i bryghuset</h1>
	<p class="${"svelte-1nokq14"}">F\xF8lg med i aktiviteterne p\xE5 N\xF8rrebro Bryghus i vores eventkalender herunder. Vores hus byder p\xE5
		mange forskellige arrangementer, og vi gl\xE6der os til at se dig i vores \xF8lslaraffenland i hjertet
		af N\xF8rrebro.
	</p></section>

<section class="${"filter svelte-1nokq14"}"><div class="${""}"><div class="${"dropdown svelte-1nokq14"}"><div class="${"dropbtn flex  svelte-1nokq14"}">FILTRER<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols mt-1"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
			<div class="${"dropdown-content flex svelte-1nokq14"}"><fieldset class="${"grid mt-8"}"><div class="${"flex kasse svelte-1nokq14"}"><input class="${"radio svelte-1nokq14"}" type="${"checkbox"}" id="${"byvandring"}" name="${"drone"}" value="${"byvandring"}">
						<label class="${"flex gap-4"}" for="${"byvandring"}">\xD8LSMAGNING <svg width="${"20"}" height="${"20"}" viewBox="${"0 0 6 6"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M5 0H0V5H5V0Z"}" fill="${"#EBD37F"}"></path></svg></label></div>

					<div class="${"flex kasse svelte-1nokq14"}"><input class="${"radio svelte-1nokq14"}" type="${"checkbox"}" id="${"olsmagning"}" name="${"drone"}" value="${"olsmagning"}">
						<label class="${"flex gap-4"}" for="${"olsmagning"}">BYVANDRING <svg width="${"20"}" height="${"20"}" viewBox="${"0 0 6 6"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M5 0H0V5H5V0Z"}" fill="${"#ABCCD8"}"></path></svg></label></div>

					<div class="${"flex kasse svelte-1nokq14"}"><input class="${"radio bg-black svelte-1nokq14"}" type="${"checkbox"}" id="${"djevent"}" name="${"drone"}" value="${"djevent"}">
						<label class="${"flex gap-4"}" for="${"djevent"}">DJ EVENT
							<svg width="${"20"}" height="${"20"}" viewBox="${"0 0 6 6"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M5 0H0V5H5V0Z"}" fill="${"#6E0B20"}"></path></svg></label></div></fieldset></div></div></div>
	<div class="${"btn-group svelte-1nokq14"}"><button class="${"btn"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"25"}" height="${"25"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"}"></path></svg></button>
		<button class="${"btn"}">MAJ, 2022</button>
		<button class="${"btn"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"25"}" height="${"25"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"}"></path></svg></button></div></section>

<section class="${"kalender svelte-1nokq14"}"><button><div class="${"smag mix svelte-1nokq14"}" data-name="${"smag"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "4/5/2022",
    img: "smag_blomst.svg",
    titel: "\xF8lsmagning",
    sub_titel: "En smagsoplevelse i \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"by mix svelte-1nokq14"}" data-name="${"by"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "6/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"dj mix svelte-1nokq14"}" data-name="${"dj"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "7/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"by mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "10/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"smag mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "11/5/2022",
    img: "smag_blomst.svg",
    titel: "\xF8lsmagning",
    sub_titel: "En smagsoplevelse i \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"dj mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "12/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"by mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "16/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"dj mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "17/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"by mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "18/5/2022",
    img: "by_blomst.svg",
    titel: "\xD8l-byvandring",
    sub_titel: "Oplev k\xF8benhavn igennem \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"dj mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "23/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"smag mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "24/5/2022",
    img: "smag_blomst.svg",
    titel: "\xF8lsmagning",
    sub_titel: "En smagsoplevelse i \xF8llets verden",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button>

	<button><div class="${"dj mix svelte-1nokq14"}">${(0, import_index_e3905281.v)(import_Event_cards_svelte.default, "Event_card").$$render($$result, {
    dato: "27/5/2022",
    img: "dj_blomst.svg",
    titel: "DJ I BRYGHUSET",
    sub_titel: "Bliv forf\xF8rt af l\xE6kker \xF8l til lyden af l\xE6kre toner",
    tid: "17:00-19:00",
    sted: "Ryesgade 3, 2200 KBH NV"
  }, {}, {})}</div></button></section>

${(0, import_index_e3905281.v)(import_Modal_byen_svelte.default, "Modal_by").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>By</h1>
	<p>Your selection was:</p>`;
    }
  })}

${(0, import_index_e3905281.v)(import_Modal_smag_svelte.default, "Modal_smag").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Smag</h1>
	<p>Your selection was:</p>`;
    }
  })}

${(0, import_index_e3905281.v)(import_Modal_dj_svelte.default, "Modal_dj").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>DJ</h1>
	<p>Your selection was:</p>`;
    }
  })}`;
});
