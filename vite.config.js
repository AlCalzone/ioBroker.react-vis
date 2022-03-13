export default {
	root: "www-src",
	build: {
		outDir: "../www",
		commonjsOptions: { exclude: ["prop-types"] },
	},
};
