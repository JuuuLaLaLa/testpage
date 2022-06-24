module.exports = {
	dist: {
		files: [{
			cwd: 'source/templates',
			src: ['**/*.jade', '!{helpers,layouts,partials}/**/*'],
			dest: 'build',
			expand: true,
			ext: '.html'
		}]
	}
}