export default {
	root: "www-src",
	base: "/react-vis/",
	build: {
		outDir: "../www",
		commonjsOptions: { exclude: ["prop-types"] },
	},
};
