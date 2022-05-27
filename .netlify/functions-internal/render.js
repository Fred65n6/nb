const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["aftenmenu.png","aftenmenu.webp","blanche.webp","blomst_1.svg","blomst_2.svg","blomst_3.svg","bombay.webp","book_bord.mobile.png","book_bord.mobile.webp","book_bord.png","book_bord.webp","bundle_1.webp","bundle_2.webp","bundle_3.mobile.webp","bundle_3.webp","bundle_4.png","bundle_4.webp","by_blomst.svg","classic.webp","dj_blomst.svg","event.mobile.webp","event.webp","filter_ikon.svg","footer_bg.mobile.png","footer_bg.mobile.webp","footer_bg.png","footer_bg.svg","footer_bg.webp","frokostmenu.png","frokostmenu.webp","lager.webp","menu_blomst.svg","nb_logo.svg","nb_logo_fill.svg","olsortiment.png","olsortiment.webp","pilsner.webp","ravnsborg.webp","red_bg.mobile.svg","red_bg.svg","robots.txt","shrimp.mobile.webp","shrimp.webp","smag_blomst.svg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"start-1d557362.js","js":["start-1d557362.js","chunks/index-5a9b2991.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/17.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "Button_black",
				pattern: /^\/Button_black\/?$/,
				names: [],
				types: [],
				path: "/Button_black",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "Button_hero",
				pattern: /^\/Button_hero\/?$/,
				names: [],
				types: [],
				path: "/Button_hero",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "Button_mobile",
				pattern: /^\/Button_mobile\/?$/,
				names: [],
				types: [],
				path: "/Button_mobile",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Button_white",
				pattern: /^\/Button_white\/?$/,
				names: [],
				types: [],
				path: "/Button_white",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "Checkbox",
				pattern: /^\/Checkbox\/?$/,
				names: [],
				types: [],
				path: "/Checkbox",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "Event_card",
				pattern: /^\/Event_card\/?$/,
				names: [],
				types: [],
				path: "/Event_card",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "Footer",
				pattern: /^\/Footer\/?$/,
				names: [],
				types: [],
				path: "/Footer",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "Modal",
				pattern: /^\/Modal\/?$/,
				names: [],
				types: [],
				path: "/Modal",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "Shop_item",
				pattern: /^\/Shop_item\/?$/,
				names: [],
				types: [],
				path: "/Shop_item",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "Sidebar",
				pattern: /^\/Sidebar\/?$/,
				names: [],
				types: [],
				path: "/Sidebar",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "book_bord",
				pattern: /^\/book_bord\/?$/,
				names: [],
				types: [],
				path: "/book_bord",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "events",
				pattern: /^\/events\/?$/,
				names: [],
				types: [],
				path: "/events",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "shop",
				pattern: /^\/shop\/?$/,
				names: [],
				types: [],
				path: "/shop",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.js')),
				a: [0,16],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
