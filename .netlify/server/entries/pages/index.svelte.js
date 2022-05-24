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
var import_index_72c3c0a2 = require("../../chunks/index-72c3c0a2.js");
var import_Button_white_svelte = __toESM(require("./Button_white.svelte.js"));
var import_Button_hero_svelte = __toESM(require("./Button_hero.svelte.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-16bmd9a.svelte-16bmd9a{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;gap:10px}.left.svelte-16bmd9a.svelte-16bmd9a{width:100%}.right.svelte-16bmd9a.svelte-16bmd9a{height:100%;display:grid;width:100%;gap:10px}.kasse_1.svelte-16bmd9a.svelte-16bmd9a{display:grid;place-items:center;width:100%;height:37rem;background-image:url('shrimp.mobile.webp');background-size:cover;background-repeat:no-repeat}.kasse_2.svelte-16bmd9a.svelte-16bmd9a{display:grid;place-items:center;width:100%;height:100%;background-image:url('bundle_3.webp');background-size:cover;background-repeat:no-repeat}.kasse_3.svelte-16bmd9a.svelte-16bmd9a{display:grid;place-items:center;width:100%;height:100%;background-image:url('event.webp');background-size:cover;background-repeat:no-repeat}.container.svelte-16bmd9a.svelte-16bmd9a{display:grid;place-items:center;gap:30px;padding-block:4rem;text-align:center}.container.svelte-16bmd9a img.svelte-16bmd9a{width:4rem}.menu.svelte-16bmd9a p.svelte-16bmd9a{color:white;max-width:600px}@media(min-width: 600px){.container.svelte-16bmd9a img.svelte-16bmd9a{width:7rem}.menu.svelte-16bmd9a.svelte-16bmd9a{padding-top:3rem;background-image:url('red_bg.svg');background-size:contain;background-repeat:no-repeat}}@media(max-width: 600px){.kasse_2.svelte-16bmd9a.svelte-16bmd9a{background-image:url('bundle_3.mobile.webp')}.kasse_3.svelte-16bmd9a.svelte-16bmd9a{background-image:url('event.mobile.webp')}.top.svelte-16bmd9a.svelte-16bmd9a{padding-bottom:8rem}.menu.svelte-16bmd9a.svelte-16bmd9a{padding:1rem;background-image:url('red_bg.mobile.svg');background-size:cover;background-repeat:no-repeat}}",
  map: null
};
const Routes = (0, import_index_72c3c0a2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-t32ptj">`, ""}

<section class="${"hero svelte-16bmd9a"}"><div class="${"left svelte-16bmd9a"}"><div class="${"kasse_1 svelte-16bmd9a"}">${(0, import_index_72c3c0a2.v)(import_Button_hero_svelte.default, "Button").$$render($$result, { link: "/om_os" }, {}, {
    default: () => {
      return `BOOK BORD`;
    }
  })}</div></div>
	<div class="${"right svelte-16bmd9a"}"><div class="${"kasse_2 svelte-16bmd9a"}">${(0, import_index_72c3c0a2.v)(import_Button_hero_svelte.default, "Button").$$render($$result, { link: "/om_os" }, {}, {
    default: () => {
      return `\xD8L-SHOP`;
    }
  })}</div>
		<div class="${"kasse_3 svelte-16bmd9a"}">${(0, import_index_72c3c0a2.v)(import_Button_hero_svelte.default, "Button").$$render($$result, { link: "/om_os" }, {}, {
    default: () => {
      return `EVENTS`;
    }
  })}</div></div></section>

<section><h1>Velkommen til N\xF8rrebro Bryghus</h1>
	<div class="${"container svelte-16bmd9a"}"><div class="${"flex sm:gap-20"}"><div class="${"blomst_1 grid place-items-center gap-8"}"><img src="${"blomst_1.svg"}" alt="${""}" class="${"svelte-16bmd9a"}">
				<h3>100% \xD8KOLOGI</h3></div>
			<div class="${"blomst_2 grid place-items-center gap-8"}"><img src="${"blomst_2.svg"}" alt="${""}" class="${"svelte-16bmd9a"}">
				<h3>LOKALT ENGEGAMENT</h3></div>
			<div class="${"blomst_3 grid place-items-center gap-8"}"><img src="${"blomst_3.svg"}" alt="${""}" class="${"svelte-16bmd9a"}">
				<h3>SOCIALT ANSVAR</h3></div></div></div></section>

<section class="${"menu svelte-16bmd9a"}"><div class="${"top svelte-16bmd9a"}"><h2>Gastronomiske oplevelser</h2>
		<p class="${"svelte-16bmd9a"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aperiam vero facilis
			accusamus placeat earum nam aspernatur sed vel laboriosam!
		</p></div>
	<div class="${"bottom sm:flex sm:gap-[40rem] sm:py-[12rem] grid gap-6 pt-36"}">${(0, import_index_72c3c0a2.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/" }, {}, {
    default: () => {
      return `FROKOSTMENU`;
    }
  })}
		${(0, import_index_72c3c0a2.v)(import_Button_white_svelte.default, "Button_white").$$render($$result, { link: "/" }, {}, {
    default: () => {
      return `AFTENMENU`;
    }
  })}</div>
</section>`;
});
