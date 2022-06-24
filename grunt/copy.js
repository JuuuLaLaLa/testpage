module.exports = {
	scripts: {
		files: [{
			expand: true,
			cwd: 'source/js',
			src: ['**/*.js', '!libs/**/*.js'],
			dest: 'build/js',
			filter: 'isFile'
		}, {
			expand: true,
			cwd: 'source/js/libs',
			src: ['**/*.js'],
			dest: 'build/js',
			filter: 'isFile'
		}]
	},

	// styles from third-party developers

	styles: {
		files: [{
			expand: true,
			cwd: 'source/css',
			src: '*',
			dest: 'build/css',
			filter: 'isFile'
		}]
	},

};