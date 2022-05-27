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
  default: () => Event_card
});
module.exports = __toCommonJS(stdin_exports);
var import_index_df09d767 = require("../../chunks/index-df09d767.js");
var Event_card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1wggbpw.svelte-1wggbpw{display:grid;place-items:center;width:23rem;height:23rem;text-align:center;padding:1rem}.card.svelte-1wggbpw h2.svelte-1wggbpw,h3.svelte-1wggbpw.svelte-1wggbpw,p.svelte-1wggbpw.svelte-1wggbpw{color:white}@media(max-width: 600px){.card.svelte-1wggbpw.svelte-1wggbpw{width:18em}}",
  map: null
};
const Event_card = (0, import_index_df09d767.c)(($$result, $$props, $$bindings, slots) => {
  let { dato } = $$props;
  let { img } = $$props;
  let { titel } = $$props;
  let { sub_titel } = $$props;
  let { tid } = $$props;
  let { sted } = $$props;
  if ($$props.dato === void 0 && $$bindings.dato && dato !== void 0)
    $$bindings.dato(dato);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.titel === void 0 && $$bindings.titel && titel !== void 0)
    $$bindings.titel(titel);
  if ($$props.sub_titel === void 0 && $$bindings.sub_titel && sub_titel !== void 0)
    $$bindings.sub_titel(sub_titel);
  if ($$props.tid === void 0 && $$bindings.tid && tid !== void 0)
    $$bindings.tid(tid);
  if ($$props.sted === void 0 && $$bindings.sted && sted !== void 0)
    $$bindings.sted(sted);
  $$result.css.add(css);
  return `<div class="${"card svelte-1wggbpw"}"><h3 class="${"svelte-1wggbpw"}">${(0, import_index_df09d767.e)(dato)}</h3>
	<img${(0, import_index_df09d767.d)("src", img, 0)} alt="${""}">
	<h2 class="${"svelte-1wggbpw"}">${(0, import_index_df09d767.e)(titel)}</h2>
	<p class="${"svelte-1wggbpw"}">${(0, import_index_df09d767.e)(sub_titel)}</p>
	<p class="${"flex svelte-1wggbpw"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--mdi"}" width="${"25"}" height="${"25"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"white"}" d="${"M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m.5 11H11l-4-2.3l.8-1.3l3.3 1.9V7h1.5v6Z"}"></path></svg>${(0, import_index_df09d767.e)(tid)}</p>
	<p class="${"flex text-center svelte-1wggbpw"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" aria-hidden="${"true"}" role="${"img"}" class="${"iconify iconify--material-symbols"}" width="${"25"}" height="${"25"}" preserveAspectRatio="${"xMidYMid meet"}" viewBox="${"0 0 24 24"}"><path fill="${"white"}" d="${"M12 14q.425 0 .713-.288Q13 13.425 13 13v-2h2q.425 0 .713-.288Q16 10.425 16 10t-.287-.713Q15.425 9 15 9h-2V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v2H9q-.425 0-.712.287Q8 9.575 8 10t.288.712Q8.575 11 9 11h2v2q0 .425.288.712q.287.288.712.288Zm0 5.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075ZM12 10.2Z"}"></path></svg>${(0, import_index_df09d767.e)(sted)}</p>
</div>`;
});
