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
var import_index_72c3c0a2 = require("../../chunks/index-72c3c0a2.js");
var import_Footer_svelte = __toESM(require("./Footer.svelte.js"));
var import_Button_black_svelte = require("./Button_black.svelte.js");
const getStores = () => {
  const stores = (0, import_index_72c3c0a2.g)("__svelte__");
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
  code: "nav.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{width:100%;display:grid;place-items:center;font-family:'Josefin Sans', sans-serif}.top.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{font-family:'Josefin Sans', sans-serif}ul.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{padding-block:3rem;position:relative;margin-right:0.3rem;height:3em;display:flex;justify-content:space-between;align-items:center;list-style:none}ul.svelte-3ncd4c img.svelte-3ncd4c.svelte-3ncd4c{width:5rem}nav.svelte-3ncd4c a.svelte-3ncd4c.svelte-3ncd4c{display:flex;height:100%;align-items:center;padding:0 2em;color:black;font-weight:400;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}.dropbtn.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{display:flex;height:100%;align-items:center;padding:0 2em;color:black;font-weight:400;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c:hover{text-decoration:underline}#menu__toggle.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{opacity:0}#menu__toggle.svelte-3ncd4c:checked~.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c{transform:rotate(45deg)}#menu__toggle.svelte-3ncd4c:checked~.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c::before{top:0;transform:rotate(0)}#menu__toggle.svelte-3ncd4c:checked~.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-3ncd4c:checked~.menu__box.svelte-3ncd4c.svelte-3ncd4c{visibility:visible;right:0}.menu__btn.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{display:flex;align-items:center;position:fixed;top:15px;right:20px;width:26px;height:26px;cursor:pointer;z-index:100}.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c.svelte-3ncd4c,.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c.svelte-3ncd4c::before,.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c.svelte-3ncd4c::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c.svelte-3ncd4c::before{content:'';top:-8px}.menu__btn.svelte-3ncd4c>span.svelte-3ncd4c.svelte-3ncd4c::after{content:'';top:8px}.hamburger-menu.svelte-3ncd4c img.svelte-3ncd4c.svelte-3ncd4c{width:4rem;padding-top:0.5rem}.hamburger-menu.svelte-3ncd4c ul.svelte-3ncd4c.svelte-3ncd4c{justify-content:start}.hamburger-menu.svelte-3ncd4c li.svelte-3ncd4c.svelte-3ncd4c{padding-block:1.3rem}.menu__box.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{display:flex;flex-direction:column;margin-left:10rem;position:fixed;visibility:hidden;top:0;right:-100%;z-index:90;width:100%;height:100%;margin:0;padding:0;list-style:none;background-color:rgb(168, 212, 221);box-shadow:1px 0px 6px rgba(0, 0, 0, 0.2);transition-duration:0.25s}@media(max-width: 600px){.desktop-menu.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{display:none}}@media(min-width: 600px){.hamburger-menu.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{display:none}}.dropdown.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{position:relative;display:inline-block}.dropdown-content.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{text-align:left;display:none;position:absolute;background-color:rgb(255, 255, 255);width:auto;padding-inline:0.5rem;z-index:1}@media(max-width: 600px){.dropdown-content.svelte-3ncd4c.svelte-3ncd4c.svelte-3ncd4c{text-align:center}}.dropdown-content.svelte-3ncd4c a.svelte-3ncd4c.svelte-3ncd4c{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-3ncd4c a.svelte-3ncd4c.svelte-3ncd4c:hover{text-decoration:underline}.dropdown.svelte-3ncd4c:hover .dropdown-content.svelte-3ncd4c.svelte-3ncd4c{display:block}",
  map: null
};
const Header = (0, import_index_72c3c0a2.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_72c3c0a2.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><div class="${"top sm:flex place-self-end gap-12 px-8 pt-2 place-content-end hidden  svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ph"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"black"}" d="${"M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"}"></path></svg></a>
		<a sveltekit:prefetch href="${"/"}" class="${"text-decoration-underline: no-underline text-[0.7rem] svelte-3ncd4c"}">LOG IND</a></div>
	<nav class="${"svelte-3ncd4c"}"><div class="${"desktop-menu svelte-3ncd4c"}"><ul class="${"svelte-3ncd4c"}"><div class="${"pr-[14rem]"}"><li${(0, import_index_72c3c0a2.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-3ncd4c"}"></a></li></div>

				<div class="${""}"><div class="${"dropdown svelte-3ncd4c"}"><a href="${"/"}" class="${"dropbtn svelte-3ncd4c"}">SHOPPEN \u2BC6</a>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">\xD8L-SHOP</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">GAVEKORT</a></div></div>

					<div class="${"dropdown svelte-3ncd4c"}"><div${(0, import_index_72c3c0a2.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">MENUKORT</a></div></div>

					<div class="${"dropdown svelte-3ncd4c"}"><div${(0, import_index_72c3c0a2.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BOOK BORD</a></div></div>

					<div class="${"dropdown svelte-3ncd4c"}"><a href="${"/"}" class="${"dropbtn svelte-3ncd4c"}">EVENTS &amp; SELSKABER \u2BC6</a>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">EVENTKALENDER</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">SELSKABER &amp; M\xD8DELOKALER</a></div></div>

					<div class="${"dropdown svelte-3ncd4c"}"><a href="${"/"}" class="${"dropbtn svelte-3ncd4c"}">VORES \xD8LUDVALG \u2BC6</a>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">N\xD8RREBRO BRYGHUS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BRAW</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">INFERN\xD8L</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">\xD8L HEMMELIGHEDER</a></div></div>

					<div class="${"dropdown svelte-3ncd4c"}"><a href="${"/"}" class="${"dropbtn svelte-3ncd4c"}">OM BRYGHUSET \u2BC6</a>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">VORES HISTORIE</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">B\xC6REDYGTIGHED</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">OM BRAW BAR</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">\xD8LFORUM</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">NYHEDER FRA BRYGHUSET</a></div></div>

					<div class="${"dropdown svelte-3ncd4c"}"><a href="${"/"}" class="${"dropbtn svelte-3ncd4c"}">FOR VIRKSOMHEDER \u2BC6</a>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">FIRMAEVENTS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BOOK ET M\xD8DELOKALE</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BLIV FORHANDLER</a></div></div></div></ul></div>

		

		<div class="${"hamburger-menu flex pr-20 svelte-3ncd4c"}"><a class="${" svelte-3ncd4c"}" sveltekit:prefetch href="${"/"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-3ncd4c"}"></a>

			<div class="${"flex pl-36"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--ph"}" width="${"20"}" height="${"20"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 256 256"}"><path fill="${"black"}" d="${"M94 216a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm90-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14Zm43.5-128.4L201.1 166a22.2 22.2 0 0 1-21.2 16H84.1a22.2 22.2 0 0 1-21.2-16L36.5 73.8v-.3l-9.8-34a1.9 1.9 0 0 0-1.9-1.5H8a6 6 0 0 1 0-12h16.8a14.1 14.1 0 0 1 13.5 10.2L46.8 66h174.9a6 6 0 0 1 4.8 2.4a6 6 0 0 1 1 5.2ZM213.8 78H50.2l24.3 84.7a10 10 0 0 0 9.6 7.3h95.8a10 10 0 0 0 9.6-7.3Z"}"></path></svg></a>
				<a sveltekit:prefetch href="${"/"}" class="${"text-decoration-underline: no-underline text-[0.7rem] svelte-3ncd4c"}">LOGIN</a></div>

			<input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-3ncd4c"}">
			<label class="${"menu__btn svelte-3ncd4c"}" for="${"menu__toggle"}"><span class="${"svelte-3ncd4c"}"></span></label>

			<ul class="${"menu__box svelte-3ncd4c"}"><li class="${["svelte-3ncd4c", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-3ncd4c"}"></a></li>

				<li class="${"svelte-3ncd4c"}"><div class="${"dropdown svelte-3ncd4c"}"><div class="${"dropbtn svelte-3ncd4c"}">SHOPPEN \u2BC6</div>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">SHOP</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">GAVEKORT</a></div></div></li>

				<li class="${["svelte-3ncd4c", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BOOK BORD</a></li>

				<li class="${["svelte-3ncd4c", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">MENUKORT</a></li>

				<li class="${"svelte-3ncd4c"}"><div class="${"dropdown svelte-3ncd4c"}"><div class="${"dropbtn svelte-3ncd4c"}">VORES \xD8LUDVALG \u2BC6</div>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">N\xD8RREBRO BRYGHUS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BRAW</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">INFERN\xD8L</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">\xD8L HEMMELIGHEDER</a></div></div></li>

				<li class="${"svelte-3ncd4c"}"><div class="${"dropdown svelte-3ncd4c"}"><div class="${"dropbtn svelte-3ncd4c"}">EVENTS &amp; SELSKABER \u2BC6</div>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">EVENTKALENDER</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">SELSKABER &amp; M\xD8DELOKALER</a></div></div></li>

				<li class="${"svelte-3ncd4c"}"><div class="${"dropdown svelte-3ncd4c"}"><div class="${"dropbtn svelte-3ncd4c"}">OM BRYGHUSET \u2BC6</div>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">VORES HISTORIE</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">B\xC6REDYGTIGHED</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">OM BRAW BAR</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">\xD8LFORUM</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">NYHEDER FRA BRYGHUSET</a></div></div></li>

				<li class="${"svelte-3ncd4c"}"><div class="${"dropdown svelte-3ncd4c"}"><div class="${"dropbtn svelte-3ncd4c"}">FOR VIRKSOMHEDER \u2BC6</div>
						<div class="${"dropdown-content svelte-3ncd4c"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">FIRMAEVENTS</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BOOK ET M\xD8DELOKALE</a>
							<a sveltekit:prefetch href="${"/"}" class="${"svelte-3ncd4c"}">BLIV FORHANDLER</a></div></div></li></ul></div></nav>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-72tnm{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;margin:0 auto;box-sizing:border-box}",
  map: null
};
const _layout = (0, import_index_72c3c0a2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_72c3c0a2.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-72tnm"}">${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_72c3c0a2.v)(import_Footer_svelte.default, "Footer").$$render($$result, {}, {}, {})}`;
});
