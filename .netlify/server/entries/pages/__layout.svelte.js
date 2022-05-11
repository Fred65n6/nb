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
var import_index_ed214626 = require("../../chunks/index-ed214626.js");
const getStores = () => {
  const stores = (0, import_index_ed214626.g)("__svelte__");
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
  code: "nav.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{width:100%;display:grid;place-items:center;padding-inline:2rem;height:6rem}ul.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background-size:contain}ul.svelte-afgfk3 img.svelte-afgfk3.svelte-afgfk3{width:5rem}.desktop-menu.svelte-afgfk3 li.svelte-afgfk3.svelte-afgfk3{position:relative;height:100%}nav.svelte-afgfk3 a.svelte-afgfk3.svelte-afgfk3{display:flex;height:100%;align-items:center;padding:0 2em;color:black;font-weight:400;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3:hover{text-decoration:underline}.hamburger-menu.svelte-afgfk3 li.svelte-afgfk3.svelte-afgfk3{padding:1rem;color:black}#menu__toggle.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{opacity:0}#menu__toggle.svelte-afgfk3:checked~.menu__btn.svelte-afgfk3>span.svelte-afgfk3{transform:rotate(45deg)}#menu__toggle.svelte-afgfk3:checked~.menu__btn.svelte-afgfk3>span.svelte-afgfk3::before{top:0;transform:rotate(0)}#menu__toggle.svelte-afgfk3:checked~.menu__btn.svelte-afgfk3>span.svelte-afgfk3::after{top:0;transform:rotate(90deg)}#menu__toggle.svelte-afgfk3:checked~.menu__box.svelte-afgfk3.svelte-afgfk3{visibility:visible;right:0}.menu__btn.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{display:flex;align-items:center;position:fixed;top:10px;right:20px;width:26px;height:26px;cursor:pointer;z-index:100}.menu__btn.svelte-afgfk3>span.svelte-afgfk3.svelte-afgfk3,.menu__btn.svelte-afgfk3>span.svelte-afgfk3.svelte-afgfk3::before,.menu__btn.svelte-afgfk3>span.svelte-afgfk3.svelte-afgfk3::after{display:block;position:absolute;width:100%;height:2.5px;border-radius:12px;background-color:#1c1c1c;transition-duration:0.25s}.menu__btn.svelte-afgfk3>span.svelte-afgfk3.svelte-afgfk3::before{content:'';top:-8px}.menu__btn.svelte-afgfk3>span.svelte-afgfk3.svelte-afgfk3::after{content:'';top:8px}.menu__box.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{display:flex;flex-direction:column;position:fixed;visibility:hidden;top:0;right:-100%;z-index:90;width:100%;height:100%;margin:0;padding:80px 0;list-style:none;background-color:#8072a8;box-shadow:1px 0px 6px rgba(0, 0, 0, 0.2);transition-duration:0.25s}@media(max-width: 600px){.desktop-menu.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{display:none}a.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3:hover{color:#b12222}}@media(min-width: 600px){.hamburger-menu.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{display:none}}.dropdown.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{position:relative;display:inline-block}.dropdown-content.svelte-afgfk3.svelte-afgfk3.svelte-afgfk3{text-align:center;display:none;position:absolute;background-color:#fffdf6;min-width:180px;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);z-index:1}.dropdown-content.svelte-afgfk3 a.svelte-afgfk3.svelte-afgfk3{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-afgfk3 a.svelte-afgfk3.svelte-afgfk3:hover{text-decoration:underline}.dropdown.svelte-afgfk3:hover .dropdown-content.svelte-afgfk3.svelte-afgfk3{display:block}",
  map: null
};
const Header = (0, import_index_ed214626.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_ed214626.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header><nav class="${"svelte-afgfk3"}"><div class="${"desktop-menu svelte-afgfk3"}"><ul class="${"svelte-afgfk3"}"><li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Hjem</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Forestillinger &amp; events</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}"><img src="${"nb_logo.svg"}" alt="${""}" class="${"svelte-afgfk3"}"></a></li>
				
				<div class="${"dropdown svelte-afgfk3"}"><a href="${"/"}" class="${"dropbtn svelte-afgfk3"}">Praktisk info \u25BC</a>
					<div class="${"dropdown-content svelte-afgfk3"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Venues</a>
						<a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Billetter</a></div></div>
				
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">V\xE6r med</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/om_os" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/om_os"}" class="${"svelte-afgfk3"}">Om os</a></li></ul></div>
		<div class="${"hamburger-menu svelte-afgfk3"}"><input id="${"menu__toggle"}" type="${"checkbox"}" class="${"svelte-afgfk3"}">
			<label class="${"menu__btn svelte-afgfk3"}" for="${"menu__toggle"}"><span class="${"svelte-afgfk3"}"></span></label>

			<ul class="${"menu__box svelte-afgfk3"}"><li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Hjem</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Forestillinger &amp; events</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Programoversigt</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Venues</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Billetter</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">V\xE6r med</a></li>
				<li class="${["svelte-afgfk3", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-afgfk3"}">Om os</a></li></ul></div></nav>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1l5lemn{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}",
  map: null
};
const _layout = (0, import_index_ed214626.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_ed214626.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1l5lemn"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
