var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../chunks/index-38cedc01.js");
const getStores = () => {
  const stores = (0, import_index_38cedc01.g)("__svelte__");
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
  code: "nav.svelte-i470t9.svelte-i470t9.svelte-i470t9{width:100%;display:grid;place-items:center;padding-inline:2rem;height:6rem}ul.svelte-i470t9.svelte-i470t9.svelte-i470t9{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}ul.svelte-i470t9 img.svelte-i470t9.svelte-i470t9{width:5rem}.desktop-menu.svelte-i470t9 li.svelte-i470t9.svelte-i470t9{position:relative;height:100%}nav.svelte-i470t9 a.svelte-i470t9.svelte-i470t9{display:flex;height:100%;align-items:center;padding:0 2em;color:black;font-weight:400;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-i470t9.svelte-i470t9.svelte-i470t9:hover{text-decoration:underline}.hamburger-menu.svelte-i470t9 li.svelte-i470t9.svelte-i470t9{padding:1rem;color:black}#menu__toggle.svelte-i470t9.svelte-i470t9.svelte-i470t9{opacity:0}#menu__toggle.svelte-i470t9:checked~.menu__btn.svelte-i470t9>span.svelte-i470t9{transform:rotate(45deg)}#menu__toggle.svelte-i470t9:checked~.menu__btn.svelte-i470t9>span.svelte-i470t9::before{top:0;transform:rotate(0)}#menu__toggle.svelte-i470t9:checked~.menu__btn.svelte-i470t9>span.svelte-i470t9::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-i470t9:checked~.menu__box.svelte-i470t9.svelte-i470t9{visibility:visible;right:0}.menu__btn.svelte-i470t9.svelte-i470t9.svelte-i470t9{display:flex;align-items:center;position:fixed;top:10px;right:20px;width:26px;height:26px;cursor:pointer;z-index:100}.menu__btn.svelte-i470t9>span.svelte-i470t9.svelte-i470t9,.menu__btn.svelte-i470t9>span.svelte-i470t9.svelte-i470t9::before,.menu__btn.svelte-i470t9>span.svelte-i470t9.svelte-i470t9::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-i470t9>span.svelte-i470t9.svelte-i470t9::before{content:'';top:-8px}.menu__btn.svelte-i470t9>span.svelte-i470t9.svelte-i470t9::after{content:'';top:8px}.menu__box.svelte-i470t9.svelte-i470t9.svelte-i470t9{display:flex;flex-direction:column;position:fixed;visibility:hidden;top:0;right:-100%;z-index:90;width:100%;height:100%;margin:0;padding:80px 0;list-style:none;background-color:#8072a8;box-shadow:1px 0px 6px rgba(0, 0, 0, 0.2);transition-duration:0.25s}@media(max-width: 600px){.desktop-menu.svelte-i470t9.svelte-i470t9.svelte-i470t9{display:none}a.svelte-i470t9.svelte-i470t9.svelte-i470t9:hover{color:#b12222}}@media(min-width: 600px){.hamburger-menu.svelte-i470t9.svelte-i470t9.svelte-i470t9{display:none}}.dropdown.svelte-i470t9.svelte-i470t9.svelte-i470t9{position:relative;display:inline-block}.dropdown-content.svelte-i470t9.svelte-i470t9.svelte-i470t9{text-align:center;display:none;position:absolute;background-color:white;min-width:180px;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);z-index:1}.dropdown-content.svelte-i470t9 a.svelte-i470t9.svelte-i470t9{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-i470t9 a.svelte-i470t9.svelte-i470t9:hover{text-decoration:underline}.dropdown.svelte-i470t9:hover .dropdown-content.svelte-i470t9.svelte-i470t9{display:block}",
  map: null
};
const Header = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_38cedc01.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><nav class="${"svelte-i470t9"}"><div class="${"desktop-menu svelte-i470t9"}"><ul class="${"svelte-i470t9"}"><li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Hjem</a></li>
				
				<div class="${"dropdown svelte-i470t9"}"><a href="${"/"}" class="${"dropbtn svelte-i470t9"}">Praktisk info \u25BC</a>
					<div class="${"dropdown-content svelte-i470t9"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Venues</a>
						<a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Billetter</a></div></div>
				

				<li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-i470t9"}"></a></li>

				
				<div class="${"dropdown svelte-i470t9"}"><a href="${"/"}" class="${"dropbtn svelte-i470t9"}">Praktisk info \u25BC</a>
					<div class="${"dropdown-content svelte-i470t9"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Venues</a>
						<a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Billetter</a></div></div>
				
				<li class="${["svelte-i470t9", $page.url.pathname === "/om_os" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om_os"}" class="${"svelte-i470t9"}">Om os</a></li></ul></div>
		<div class="${"hamburger-menu svelte-i470t9"}"><input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-i470t9"}">
			<label class="${"menu__btn svelte-i470t9"}" for="${"menu__toggle"}"><span class="${"svelte-i470t9"}"></span></label>

			<ul class="${"menu__box svelte-i470t9"}"><li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Hjem</a></li>

				<li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Programoversigt</a></li>
				<li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Venues</a></li>
				<li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Billetter</a></li>
				<li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">V\xE6r med</a></li>
				<li class="${["svelte-i470t9", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-i470t9"}">Om os</a></li></ul></div></nav>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1l5lemn{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}",
  map: null
};
const _layout = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_38cedc01.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1l5lemn"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
