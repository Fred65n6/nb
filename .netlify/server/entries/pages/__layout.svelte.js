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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f5faca1c = require("../../chunks/index-f5faca1c.js");
var import_Footer_svelte = __toESM(require("./Footer.svelte.js"));
var import_Button_black_svelte = require("./Button_black.svelte.js");
var app = "";
const getStores = () => {
  const stores = (0, import_index_f5faca1c.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-m78454.svelte-m78454.svelte-m78454{margin-inline:1rem;width:100%;font-family:'Josefin Sans', sans-serif}.ikoner.svelte-m78454.svelte-m78454.svelte-m78454{padding-top:0.5rem;margin-inline:1rem;display:flex;place-content:flex-end;gap:2rem;font-family:'Josefin Sans', sans-serif}@media(max-width: 1300px){.ikoner.svelte-m78454.svelte-m78454.svelte-m78454{display:none}}ul.svelte-m78454.svelte-m78454.svelte-m78454{margin-inline:1rem;padding-block:2.5rem;height:3em;display:flex;justify-content:space-between;align-items:center;list-style:none}ul.svelte-m78454 img.svelte-m78454.svelte-m78454{width:80px}nav.svelte-m78454 a.svelte-m78454.svelte-m78454{display:flex;height:100%;align-items:center;padding-inline:1rem;color:black;font-weight:400;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}.dropbtn.svelte-m78454.svelte-m78454.svelte-m78454{display:flex;height:100%;align-items:center;padding:0 2em;color:black;font-weight:400;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-m78454.svelte-m78454.svelte-m78454:hover{text-decoration:underline}#menu__toggle.svelte-m78454.svelte-m78454.svelte-m78454{opacity:0}#menu__toggle.svelte-m78454:checked~.menu__btn.svelte-m78454>span.svelte-m78454{transform:rotate(45deg)}#menu__toggle.svelte-m78454:checked~.menu__btn.svelte-m78454>span.svelte-m78454::before{top:0;transform:rotate(0)}#menu__toggle.svelte-m78454:checked~.menu__btn.svelte-m78454>span.svelte-m78454::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-m78454:checked~.menu__box.svelte-m78454.svelte-m78454{visibility:visible;right:0}.menu__btn.svelte-m78454.svelte-m78454.svelte-m78454{display:flex;align-items:center;position:fixed;top:25px;right:30px;width:26px;height:26px;cursor:pointer;z-index:100}.menu__btn.svelte-m78454>span.svelte-m78454.svelte-m78454,.menu__btn.svelte-m78454>span.svelte-m78454.svelte-m78454::before,.menu__btn.svelte-m78454>span.svelte-m78454.svelte-m78454::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-m78454>span.svelte-m78454.svelte-m78454::before{content:'';top:-8px}.menu__btn.svelte-m78454>span.svelte-m78454.svelte-m78454::after{content:'';top:8px}.hamburger-menu.svelte-m78454 img.svelte-m78454.svelte-m78454{width:4rem;padding-top:0.5rem}.hamburger-menu.svelte-m78454 ul.svelte-m78454.svelte-m78454{justify-content:start}.hamburger-menu.svelte-m78454 li.svelte-m78454.svelte-m78454{padding-block:0.8rem}.menu__box.svelte-m78454.svelte-m78454.svelte-m78454{display:flex;flex-direction:column;position:fixed;visibility:hidden;top:0;right:-100%;z-index:90;width:100%;height:100%;margin:0;padding:0;list-style:none;background-color:rgb(168, 212, 221);box-shadow:1px 0px 6px rgba(0, 0, 0, 0.2);transition-duration:0.25s}@media(max-width: 1300px){.desktop-menu.svelte-m78454.svelte-m78454.svelte-m78454{display:none}header.svelte-m78454.svelte-m78454.svelte-m78454{overflow-x:hidden}}@media(min-width: 1300px){.hamburger-menu.svelte-m78454.svelte-m78454.svelte-m78454{display:none}}.dropdown.svelte-m78454.svelte-m78454.svelte-m78454{position:relative;display:inline-block}.dropdown-content.svelte-m78454.svelte-m78454.svelte-m78454{text-align:left;display:none;position:absolute;background-color:rgb(255, 255, 255);width:auto;padding-inline:0.5rem;z-index:1}@media(max-width: 600px){.dropdown-content.svelte-m78454.svelte-m78454.svelte-m78454{text-align:center}}.dropdown-content.svelte-m78454 a.svelte-m78454.svelte-m78454{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-m78454 a.svelte-m78454.svelte-m78454:hover{text-decoration:underline}.dropdown.svelte-m78454:hover .dropdown-content.svelte-m78454.svelte-m78454{display:block}",
  map: null
};
const Header = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f5faca1c.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-m78454"}"><div class="${"ikoner svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ph"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"black"}" d="${"M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"}"></path></svg></a>
		<a sveltekit:prefetch href="${"/"}" class="${"text-decoration-underline: no-underline flex gap-2 text-[0.7rem] svelte-m78454"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ph"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"black"}" d="${"M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"}"></path></svg></a></div>
	<nav class="${"svelte-m78454"}"><div class="${"desktop-menu svelte-m78454"}"><ul class="${"svelte-m78454"}"><div class="${""}"><div class="${""}"><li${(0, import_index_f5faca1c.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-m78454"}"></a></li></div></div>

				<div class="${""}"><div class="${"dropdown svelte-m78454"}"><a href="${"shop"}" class="${"dropbtn svelte-m78454"}">SHOPPEN <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></a>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"shop"}" class="${"svelte-m78454"}">\xD8L-SHOP</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">GAVEKORT</a></div></div>

					<div class="${"dropdown svelte-m78454"}"><div${(0, import_index_f5faca1c.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">MENUKORT</a></div></div>

					<div class="${"dropdown svelte-m78454"}"><div${(0, import_index_f5faca1c.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"book_bord"}" class="${"svelte-m78454"}">BOOK BORD</a></div></div>

					<div class="${"dropdown svelte-m78454"}"><a href="${"/"}" class="${"dropbtn svelte-m78454"}">EVENTS &amp; SELSKABER <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></a>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"events"}" class="${"svelte-m78454"}">EVENTKALENDER</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">SELSKABER &amp; M\xD8DELOKALER</a></div></div>

					<div class="${"dropdown svelte-m78454"}"><a href="${"/"}" class="${"dropbtn svelte-m78454"}">VORES \xD8LUDVALG<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></a>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">N\xD8RREBRO BRYGHUS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">BRAW</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">INFERN\xD8L</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">\xD8L HEMMELIGHEDER</a></div></div>

					<div class="${"dropdown svelte-m78454"}"><a href="${"/"}" class="${"dropbtn svelte-m78454"}">OM BRYGHUSET <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></a>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">VORES HISTORIE</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">B\xC6REDYGTIGHED</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">OM BRAW BAR</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">\xD8LFORUM</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">NYHEDER FRA BRYGHUSET</a></div></div>

					<div class="${"dropdown svelte-m78454"}"><a href="${"/"}" class="${"dropbtn svelte-m78454"}">FOR VIRKSOMHEDER <svg width="${"9"}" height="${"5"}" viewBox="${"0 0 9 5"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M0.5 0.5L4.5 3.5L8.5 0.5"}" stroke="${"black"}" stroke-miterlimit="${"10"}"></path></svg></a>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">FIRMAEVENTS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">M\xD8DELOKALER</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">BLIV FORHANDLER</a></div></div></div></ul></div>

		

		<div class="${"hamburger-menu flex svelte-m78454"}"><a class="${" svelte-m78454"}" sveltekit:prefetch href="${"/"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-m78454"}"></a>

			<div class="${"flex gap-4 mx-4"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ph"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"black"}" d="${"M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"}"></path></svg></a>
				<a sveltekit:prefetch href="${"/"}" class="${"text-decoration-underline: no-underline text-[0.7rem] svelte-m78454"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ph"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"black"}" d="${"M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"}"></path></svg></a></div>

			<input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-m78454"}">
			<label class="${"menu__btn svelte-m78454"}" for="${"menu__toggle"}"><span class="${"svelte-m78454"}"></span></label>

			<ul class="${"menu__box svelte-m78454"}"><li class="${["svelte-m78454", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-m78454"}"></a></li>

				<li class="${"svelte-m78454"}"><div class="${"dropdown svelte-m78454"}"><div class="${"dropbtn svelte-m78454"}">SHOPPEN <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"shop"}" class="${"svelte-m78454"}">SHOP</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">GAVEKORT</a></div></div></li>

				<li class="${["svelte-m78454", $page.url.pathname === "book_bord" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"book_bord"}" class="${"svelte-m78454"}">BOOK BORD</a></li>

				<li class="${["svelte-m78454", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">MENUKORT</a></li>

				<li class="${"svelte-m78454"}"><div class="${"dropdown svelte-m78454"}"><div class="${"dropbtn svelte-m78454"}">VORES \xD8LUDVALG <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">N\xD8RREBRO BRYGHUS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">BRAW</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">INFERN\xD8L</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">\xD8L HEMMELIGHEDER</a></div></div></li>

				<li class="${"svelte-m78454"}"><div class="${"dropdown svelte-m78454"}"><div class="${"dropbtn svelte-m78454"}">OM BRYGHUSET <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">VORES HISTORIE</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">B\xC6REDYGTIGHED</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">OM BRAW BAR</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">\xD8LFORUM</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">NYHEDER FRA BRYGHUSET</a></div></div></li>

				<li class="${"svelte-m78454"}"><div class="${"dropdown svelte-m78454"}"><div class="${"dropbtn svelte-m78454"}">EVENTS &amp; SELSKABER <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"events"}" class="${"svelte-m78454"}">EVENTKALENDER</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">SELSKABER &amp; M\xD8DELOKALER</a></div></div></li>

				<li class="${"svelte-m78454"}"><div class="${"dropdown svelte-m78454"}"><div class="${"dropbtn svelte-m78454"}">FOR VIRKSOMHEDER <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"}"></path></svg></div>
						<div class="${"dropdown-content svelte-m78454"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">M\xD8DELOKALER</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-m78454"}">BLIV FORHANDLER</a></div></div></li></ul></div></nav>
</header>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-72tnm{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;margin:0 auto;box-sizing:border-box}",
  map: null
};
const _layout = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_f5faca1c.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-72tnm"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_f5faca1c.v)(import_Footer_svelte.default, "Footer").$$render($$result, {}, {}, {})}`;
});
