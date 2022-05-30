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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f5faca1c = require("../../chunks/index-f5faca1c.js");
var import_Button_white_svelte = __toESM(require("./Button_white.svelte.js"));
var import_Modal_frokost_svelte = __toESM(require("./Modal_frokost.svelte.js"));
var import_Modal_aften_svelte = __toESM(require("./Modal_aften.svelte.js"));
var import_Button_mobile_svelte = __toESM(require("./Button_mobile.svelte.js"));
var import_Button_hero_svelte = __toESM(require("./Button_hero.svelte.js"));
var import_Button_black_svelte = require("./Button_black.svelte.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-1w8zzf8.svelte-1w8zzf8{display:grid;height:87vh;grid-template-columns:1fr 1fr;gap:10px;overflow-x:hidden}.left.svelte-1w8zzf8.svelte-1w8zzf8{width:100%;height:100%}.right.svelte-1w8zzf8.svelte-1w8zzf8{height:100%;display:grid;width:100%;gap:10px}.kasse_1.svelte-1w8zzf8.svelte-1w8zzf8{display:grid;height:100%;place-items:center;background-image:url('../../static/shrimp.mobile.webp');background-image:url('shrimp.mobile.webp');background-size:cover;background-repeat:no-repeat}.kasse_2.svelte-1w8zzf8.svelte-1w8zzf8{display:grid;place-items:center;height:100%;background-image:url('../../static/bundle_4.webp');background-image:url('bundle_4.webp');background-size:cover;background-repeat:no-repeat}.kasse_3.svelte-1w8zzf8.svelte-1w8zzf8{display:grid;place-items:center;height:100%;background-image:url('../../static/event.webp');background-image:url('event.webp');background-size:cover;background-repeat:no-repeat}.container.svelte-1w8zzf8.svelte-1w8zzf8{display:grid;place-items:center;gap:2rem;padding-block:4rem}.container.svelte-1w8zzf8 img.svelte-1w8zzf8{width:4rem}.menu.svelte-1w8zzf8 p.svelte-1w8zzf8,h2.svelte-1w8zzf8.svelte-1w8zzf8{max-width:600px;color:white}.menu.svelte-1w8zzf8 img.svelte-1w8zzf8{width:9rem}@media(min-width: 600px){.container.svelte-1w8zzf8 img.svelte-1w8zzf8{width:7rem}.mobile_button.svelte-1w8zzf8.svelte-1w8zzf8{display:none}.menu.svelte-1w8zzf8.svelte-1w8zzf8{padding-top:3rem;background-image:url('../../static/red_bg.svg');background-image:url('red_bg.svg');background-size:contain;background-repeat:no-repeat}}@media(max-width: 600px){.desktop_button.svelte-1w8zzf8.svelte-1w8zzf8{display:none}.kasse_2.svelte-1w8zzf8.svelte-1w8zzf8{background-image:url('../../static/bundle_3.mobile.webp');background-image:url('bundle_3.mobile.webp')}.kasse_3.svelte-1w8zzf8.svelte-1w8zzf8{background-image:url('../../static/event.mobile.webp');background-image:url('event.mobile.webp')}.top.svelte-1w8zzf8.svelte-1w8zzf8{padding-bottom:4rem}.menu.svelte-1w8zzf8.svelte-1w8zzf8{display:grid;place-items:center;gap:30px;padding-block:4rem;text-align:center;padding:1rem;background-image:url('../../static/red_bg.mobile.svg');background-image:url('red_bg.mobile.svg');background-size:cover;background-repeat:no-repeat}}",
  map: null
};
const Routes = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-t32ptj">`, ""}

${(0, import_index_f5faca1c.v)(import_Modal_aften_svelte.default, "Modal_aften").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>aften</h1>
	<p>Your selection was:</p>`;
    }
  })}

${(0, import_index_f5faca1c.v)(import_Modal_frokost_svelte.default, "Modal_frokost").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>frokost</h1>
	<p>Your selection was:</p>`;
    }
  })}

<section class="${"hero svelte-1w8zzf8"}"><div class="${"left svelte-1w8zzf8"}"><div class="${"kasse_1 svelte-1w8zzf8"}"><div class="${"desktop_button svelte-1w8zzf8"}">${(0, import_index_f5faca1c.v)(import_Button_hero_svelte.default, "Button").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `BOOK BORD`;
    }
  })}</div>
			<div class="${"mobile_button svelte-1w8zzf8"}">${(0, import_index_f5faca1c.v)(import_Button_mobile_svelte.default, "Button_mobile").$$render($$result, { link: "/book_bord" }, {}, {
    default: () => {
      return `BOOK BORD`;
    }
  })}</div></div></div>
	<div class="${"right svelte-1w8zzf8"}"><div class="${"kasse_2  svelte-1w8zzf8"}"><div class="${"desktop_button svelte-1w8zzf8"}">${(0, import_index_f5faca1c.v)(import_Button_hero_svelte.default, "Button").$$render($$result, { link: "shop" }, {}, {
    default: () => {
      return `\xD8L-SHOP`;
    }
  })}</div>
			<div class="${"mobile_button svelte-1w8zzf8"}">${(0, import_index_f5faca1c.v)(import_Button_mobile_svelte.default, "Button_mobile").$$render($$result, { link: "/shop" }, {}, {
    default: () => {
      return `\xD8L-SHOP`;
    }
  })}</div></div>

		<div class="${"kasse_3 svelte-1w8zzf8"}"><div class="${"desktop_button svelte-1w8zzf8"}">${(0, import_index_f5faca1c.v)(import_Button_hero_svelte.default, "Button").$$render($$result, { link: "/events" }, {}, {
    default: () => {
      return `EVENTS`;
    }
  })}</div>
			<div class="${"mobile_button svelte-1w8zzf8"}">${(0, import_index_f5faca1c.v)(import_Button_mobile_svelte.default, "Button_mobile").$$render($$result, { link: "/events" }, {}, {
    default: () => {
      return `EVENTS`;
    }
  })}</div></div></div></section>

<section><h1 class="${"text-center"}">Velkommen til N\xF8rrebro Bryghus</h1>
	<div class="${"container svelte-1w8zzf8"}"><div class="${"sm:flex grid gap-14"}"><div class="${"blomst_1 grid place-items-center gap-8"}"><img src="${"blomst_1.svg"}" alt="${""}" class="${"svelte-1w8zzf8"}">
				<h3>100% \xD8KOLOGI</h3></div>
			<div class="${"blomst_2 grid place-items-center gap-8"}"><img src="${"blomst_2.svg"}" alt="${""}" class="${"svelte-1w8zzf8"}">
				<h3>LOKALT ENGEGAMENT</h3></div>
			<div class="${"blomst_3 grid place-items-center gap-8"}"><img src="${"blomst_3.svg"}" alt="${""}" class="${"svelte-1w8zzf8"}">
				<h3>SOCIALT ANSVAR</h3></div></div></div></section>

<section class="${"menu svelte-1w8zzf8"}"><div class="${"top svelte-1w8zzf8"}"><h2 class="${"svelte-1w8zzf8"}">Gastronomiske oplevelser</h2>
		<p class="${"svelte-1w8zzf8"}">Lad dine smagsl\xF8g blive fork\xE6let, n\xE5r vi inviterer indenfor til et ukonventionelt og 100%
			\xF8kologisk m\xE5ltid i bryghuset. F\xE5 den fulde oplevelse sammens\xE6t retterne med nogle af vores
			fantastiske \xF8l fra N\xF8rrebro Bryghus.
		</p></div>
	<img class="${"mobile-blomst sm:hidden block svelte-1w8zzf8"}" src="${"menu_blomst.svg"}" alt="${""}">
	<div class="${"bottom sm:flex sm:gap-[40rem] sm:py-[12rem] grid gap-6 pt-20"}"><button>${(0, import_index_f5faca1c.v)(import_Button_white_svelte.default, "ButtonWhite").$$render($$result, {}, {}, {
    default: () => {
      return `FROKOSTMENU`;
    }
  })}</button>
		<button>${(0, import_index_f5faca1c.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, {}, {}, {
    default: () => {
      return `AFTENMENU`;
    }
  })}</button></div></section>

<section class="${"kalender"}"></section>`;
});
