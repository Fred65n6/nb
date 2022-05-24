const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["blomst_1.svg","blomst_2.svg","blomst_3.svg","bundle_3.mobile.webp","bundle_3.webp","event.mobile.webp","event.webp","footer_bg.mobile.png","footer_bg.png","footer_bg.svg","footer_bg.webp","nb_logo.svg","nb_logo_fill.svg","red_bg.mobile.svg","red_bg.svg","robots.txt","shrimp.mobile.webp","shrimp.webp"]),
	mimeTypes: {".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"start-0307ccf3.js","js":["start-0307ccf3.js","chunks/index-2379c78a.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
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
				id: "Button_white",
				pattern: /^\/Button_white\/?$/,
				names: [],
				types: [],
				path: "/Button_white",
				shadow: null,
				a: [0,5],
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
				a: [0,6],
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
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
