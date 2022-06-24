module.exports = {
	options: {
		curly: true,
		eqeqeq: true,
		eqnull: true,
		browser: true,
		force: true,
		reporterOutput: "",
		globals: {
			jQuery: true
		},
		esversion: 6
	},
	all: [
		'source/js/**/*.js',
		'!source/js/libs/**/*'
	],
	configFiles: [
		'Gruntfile.js',
		'package.json'
	]
};