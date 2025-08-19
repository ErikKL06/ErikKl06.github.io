const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BjRD4H4T.js",app:"_app/immutable/entry/app.CQ4Nqy-q.js",imports:["_app/immutable/entry/start.BjRD4H4T.js","_app/immutable/chunks/VrJsLu0G.js","_app/immutable/chunks/DeiY8tKb.js","_app/immutable/chunks/6soK3_2Z.js","_app/immutable/chunks/C6V-ooDY.js","_app/immutable/chunks/BYsebU8d.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/entry/app.CQ4Nqy-q.js","_app/immutable/chunks/D9Z9MdNV.js","_app/immutable/chunks/6soK3_2Z.js","_app/immutable/chunks/DeiY8tKb.js","_app/immutable/chunks/C6V-ooDY.js","_app/immutable/chunks/BYsebU8d.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BKlYS0tu.js')),
			__memo(() => import('./chunks/1-rkUKiZJG.js')),
			__memo(() => import('./chunks/2-9jWC89gc.js')),
			__memo(() => import('./chunks/3-DJD97GD3.js')),
			__memo(() => import('./chunks/4-C-0ovEay.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
