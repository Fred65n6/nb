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
  S: () => Slider,
  a: () => Sidebar
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f5faca1c = require("./index-f5faca1c.js");
var import_Checkbox_svelte = __toESM(require("../entries/pages/Checkbox.svelte.js"));
var Rail_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".rail.svelte-1u5xdj2{position:relative;height:2px;background:var(--sliderSecondary)}.selected.svelte-1u5xdj2{position:absolute;left:0;right:0;top:0;bottom:0;background:var(--sliderPrimary)}",
  map: null
};
const Rail = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$3);
  return `<div class="${"rail svelte-1u5xdj2"}"><div class="${"selected svelte-1u5xdj2"}" style="${"left: " + (0, import_index_f5faca1c.e)(value[0] * 100) + "%; right: " + (0, import_index_f5faca1c.e)((1 - value[1]) * 100) + "%;"}"></div>
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
var Thumb_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".thumb.svelte-1p2qw86{width:16px;height:16px;position:absolute;left:0;top:50%;border-radius:50%;background:var(--sliderPrimary);touch-action:none;transform:translate(-50%, -50%);transition:.2s height, .2s width}.thumb.svelte-1p2qw86:after{content:'';position:absolute;left:50%;top:50%;width:32px;height:32px;transform:translate(-50%, -50%);cursor:pointer}.thumb.svelte-1p2qw86:before{content:'';position:absolute;left:50%;top:50%;width:32px;height:32px;border-radius:50%;opacity:0.3;background:var(--sliderSecondary);transform:translate(-50%, -50%) scale(0);transition:.2s all}",
  map: null
};
const Thumb = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let { position } = $$props;
  let thumb;
  (0, import_index_f5faca1c.f)();
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css$2);
  return `<div class="${"thumb svelte-1p2qw86"}" style="${"left: " + (0, import_index_f5faca1c.e)(position * 100) + "%;"}"${(0, import_index_f5faca1c.d)("this", thumb, 0)}></div>`;
});
var Slider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".slider.svelte-1cw3o64{padding:8px}",
  map: null
};
const Slider = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let { value = [0, 1] } = $$props;
  let { single = false } = $$props;
  let container;
  (0, import_index_f5faca1c.f)();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.single === void 0 && $$bindings.single && single !== void 0)
    $$bindings.single(single);
  $$result.css.add(css$1);
  return `<div class="${"slider svelte-1cw3o64"}"><div${(0, import_index_f5faca1c.d)("this", container, 0)}>${(0, import_index_f5faca1c.v)(Rail, "Rail").$$render($$result, { value }, {}, {
    default: () => {
      return `${!single ? `${(0, import_index_f5faca1c.v)(Thumb, "Thumb").$$render($$result, { position: value[0] }, {}, {})}` : ``}
      ${(0, import_index_f5faca1c.v)(Thumb, "Thumb").$$render($$result, { position: value[1] }, {}, {})}`;
    }
  })}</div>
</div>`;
});
var Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1g43l2s{position:relative;top:0;left:0;height:auto;width:16em;padding:2rem 1rem 0.6rem;background:#fff;z-index:100;border:black 2px;border-style:solid;text-align:left}.filter_knap.svelte-1g43l2s{margin-top:2rem;border:black 2px;border-style:solid;padding:1rem}.luk_knap.svelte-1g43l2s{margin-left:12rem}.slider.svelte-1g43l2s{--sliderPrimary:#000000;--sliderSecondary:rgba(0, 0, 0, 0.05);margin-top:16px}",
  map: null
};
const Sidebar = (0, import_index_f5faca1c.c)(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css);
  return `<section>${show ? `<nav class="${"svelte-1g43l2s"}"><button class="${"luk_knap svelte-1g43l2s"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"32"}" height="${"32"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"black"}" d="${"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"}"></path></svg></button>
			
			<br>
			<ul><h3>Bryglinie</h3>
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
					<div class="${"slider svelte-1g43l2s"}">${(0, import_index_f5faca1c.v)(Slider, "Slider").$$render($$result, { value: [0, 1] }, {}, {})}</div></li>
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
  })}</li></ul>
			<div class="${"grid place-items-center"}"><button class="${"filter_knap svelte-1g43l2s"}">ANVEND FILTRE</button></div></nav>` : ``}
</section>`;
});
