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
  default: () => Shop
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f5faca1c = require("../../chunks/index-f5faca1c.js");
var import_Sidebar_1c450b8f = require("../../chunks/Sidebar-1c450b8f.js");
var import_Shop_item_svelte = __toESM(require("./Shop_item.svelte.js"));
var import_Checkbox_svelte = __toESM(require("./Checkbox.svelte.js"));
var import_Button_black_svelte = __toESM(require("./Button_black.svelte.js"));
const Search = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f5faca1c.h)($$props, [
    "value",
    "autofocus",
    "debounce",
    "label",
    "hideLabel",
    "id",
    "ref",
    "removeFormAriaAttributes"
  ]);
  let { value = "" } = $$props;
  let { autofocus = false } = $$props;
  let { debounce = 0 } = $$props;
  let { label = "Label" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "search" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  let { removeFormAriaAttributes = false } = $$props;
  (0, import_index_f5faca1c.f)();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce !== void 0)
    $$bindings.debounce(debounce);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.removeFormAriaAttributes === void 0 && $$bindings.removeFormAriaAttributes && removeFormAriaAttributes !== void 0)
    $$bindings.removeFormAriaAttributes(removeFormAriaAttributes);
  return `<form data-svelte-search${(0, import_index_f5faca1c.d)("role", removeFormAriaAttributes ? null : "search", 0)}${(0, import_index_f5faca1c.d)("aria-labelledby", removeFormAriaAttributes ? null : id, 0)}><label id="${(0, import_index_f5faca1c.e)(id) + "-label"}"${(0, import_index_f5faca1c.d)("for", id, 0)}${(0, import_index_f5faca1c.d)("style", hideLabel && "position: absolute;height: 1px;width: 1px;overflow: hidden;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);white-space: nowrap;", 0)}>${slots.label ? slots.label({}) : `${(0, import_index_f5faca1c.e)(label)}`}</label>
  <input${(0, import_index_f5faca1c.i)([
    { name: "search" },
    { type: "search" },
    { placeholder: "Search..." },
    { autocomplete: "off" },
    { spellcheck: "false" },
    (0, import_index_f5faca1c.j)($$restProps),
    { id: (0, import_index_f5faca1c.k)(id) }
  ], {})}${(0, import_index_f5faca1c.d)("this", ref, 0)}${(0, import_index_f5faca1c.d)("value", value, 0)}></form>`;
});
var shop_svelte_svelte_type_style_lang = "";
const css = {
  code: ".shop.svelte-kqrbb{margin-top:0rem;position:relative;display:grid;grid-template-columns:1fr}.knapper.svelte-kqrbb{margin-top:2rem;position:absolute;display:flex;justify-content:space-between}@media(max-width: 600px){.knapper.svelte-kqrbb{display:none}.mobile-filter.svelte-kqrbb{text-align:center;display:grid;place-items:center}.shop.svelte-kqrbb{margin-top:-4rem}}@media(min-width: 600px){.mobile-filter.svelte-kqrbb{display:none}.shop.svelte-kqrbb{margin-left:14rem;grid-template-columns:1fr 1fr 1fr}.knapper.svelte-kqrbb{margin-inline:2rem}}.filter-knap.svelte-kqrbb{border-style:solid;margin-block:2rem}.slider.svelte-kqrbb{--sliderPrimary:#000000;--sliderSecondary:rgba(0, 0, 0, 0.05);margin-top:16px}",
  map: null
};
const Shop = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let sidebar_show = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"knapper svelte-kqrbb"}"><ul><button class="${"filter-knap flex gap-2 svelte-kqrbb"}"><svg width="${"20"}" height="${"25"}" viewBox="${"0 0 39 46"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><line x1="${"5.5"}" y1="${"46"}" x2="${"5.5"}" stroke="${"black"}" stroke-width="${"3"}"></line><line x1="${"18.5"}" y1="${"46"}" x2="${"18.5"}" stroke="${"black"}" stroke-width="${"3"}"></line><line x1="${"33.5"}" y1="${"46"}" x2="${"33.5"}" stroke="${"black"}" stroke-width="${"3"}"></line><circle cx="${"5"}" cy="${"32"}" r="${"3.5"}" fill="${"black"}" stroke="${"black"}" stroke-width="${"3"}"></circle><circle cx="${"18"}" cy="${"13"}" r="${"3.5"}" fill="${"black"}" stroke="${"black"}" stroke-width="${"3"}"></circle><circle cx="${"34"}" cy="${"24"}" r="${"3.5"}" fill="${"black"}" stroke="${"black"}" stroke-width="${"3"}"></circle></svg>FILTRER</button>

		${(0, import_index_f5faca1c.v)(Search, "Search").$$render($$result, {
      class: "h-16 p-2 border-2",
      label: "",
      placeholder: "S\xF8g efter produkter..."
    }, {}, {})}
		<br>
		<h3>Bryglinie</h3>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `N\xF8rrebro bryghus`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `BRAW`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Infer\xF8l`;
      }
    })}</li>
		<br>
		<h3>TYPE</h3>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Pilsner`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `IPA`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Ale`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Hvede\xF8l`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `NE IPA`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Lager`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Porter`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Fruited sour`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Stout`;
      }
    })}</li>
		<br>
		<li><div class="${"title"}"><h3>PRIS</h3>
				${``}</div>
			<div class="${"slider svelte-kqrbb"}">${(0, import_index_f5faca1c.v)(import_Sidebar_1c450b8f.S, "Slider").$$render($$result, { value: [0, 1] }, {}, {})}</div></li>
		<br>
		<h3>%</h3>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Alkoholisk`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Alkoholfri`;
      }
    })}</li>
		<br>
		<h3>Pakker</h3>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Pakker`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Enkelt \xF8l`;
      }
    })}</li>
		<br>
		<h3>CL</h3>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `0.33`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `0.44`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `0.5`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `0.75`;
      }
    })}</li>
		<br>
		<h3>Tilbud og nyheder</h3>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Aktuelle tilbud`;
      }
    })}</li>
		<li>${(0, import_index_f5faca1c.v)(import_Checkbox_svelte.default, "Checkbox").$$render($$result, {}, {}, {
      default: () => {
        return `Nyheder`;
      }
    })}</li></ul></div>

<section class="${"mobile-filter svelte-kqrbb"}">${(0, import_index_f5faca1c.v)(import_Sidebar_1c450b8f.a, "Sidebar").$$render($$result, { show: sidebar_show }, {
      show: ($$value) => {
        sidebar_show = $$value;
        $$settled = false;
      }
    }, {})}

	<button class="${"filter-knap flex gap-2 svelte-kqrbb"}"><svg width="${"20"}" height="${"25"}" viewBox="${"0 0 39 46"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><line x1="${"5.5"}" y1="${"46"}" x2="${"5.5"}" stroke="${"black"}" stroke-width="${"3"}"></line><line x1="${"18.5"}" y1="${"46"}" x2="${"18.5"}" stroke="${"black"}" stroke-width="${"3"}"></line><line x1="${"33.5"}" y1="${"46"}" x2="${"33.5"}" stroke="${"black"}" stroke-width="${"3"}"></line><circle cx="${"5"}" cy="${"32"}" r="${"3.5"}" fill="${"black"}" stroke="${"black"}" stroke-width="${"3"}"></circle><circle cx="${"18"}" cy="${"13"}" r="${"3.5"}" fill="${"black"}" stroke="${"black"}" stroke-width="${"3"}"></circle><circle cx="${"34"}" cy="${"24"}" r="${"3.5"}" fill="${"black"}" stroke="${"black"}" stroke-width="${"3"}"></circle></svg>FILTRER</button>
	${(0, import_index_f5faca1c.v)(Search, "Search").$$render($$result, {
      class: "h-16 p-2 border-2",
      label: "",
      placeholder: "S\xF8g efter produkter..."
    }, {}, {})}</section>

<section class="${"shop svelte-kqrbb"}">${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "classic.webp",
      titel: "N\xF8rrebro classic",
      sub_titel: "Pilsner 33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "lager.webp",
      titel: "Ney York lager",
      sub_titel: "Lager 33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "blanche.webp",
      titel: "Blanche",
      sub_titel: "Hvede \xF8l 33 cl",
      pris: "kr 35,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "pilsner.webp",
      titel: "N\xF8rrebro Pilsner",
      sub_titel: "Pilsner 33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "bombay.webp",
      titel: "Bombay ipa",
      sub_titel: "IPA 0.75 cl",
      pris: "kr 35,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "ravnsborg.webp",
      titel: "Ravnsborg r\xF8d",
      sub_titel: "Ale 33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "bundle_1.webp",
      titel: "beer bundle #1",
      sub_titel: "Pilsner & Ale 3x33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "bundle_2.webp",
      titel: "beer bundle #2",
      sub_titel: "Pilsner & Hvede 3x33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	${(0, import_index_f5faca1c.v)(import_Shop_item_svelte.default, "ShopItem").$$render($$result, {
      img: "bundle_3.webp",
      titel: "beer bundle #3",
      sub_titel: "Pilsner & IPA 3x33 cl",
      pris: "kr 29,-"
    }, {}, {})}
	<div class="${""}"></div>
	<section class="${"pt-20"}">${(0, import_index_f5faca1c.v)(import_Button_black_svelte.default, "ButtonBlack").$$render($$result, {}, {}, {
      default: () => {
        return `Indl\xE6s mere \u25BC`;
      }
    })}</section>
</section>`;
  } while (!$$settled);
  return $$rendered;
});
