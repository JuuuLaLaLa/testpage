module.exports = {
	configFiles: {
		files: ['.csscomb.json', 'Gruntfile.js', 'package.json', 'grunt/**/*'],
		options: {
			reload: true
		},
		tasks: ['newer:jshint:configFiles']
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['build/**/*']
	},
	imagemin: {
		files: ['source/img/**/*.{png,jpg,gif}'],
		tasks: ['newer:imagemin']
	},
	stylus: {
		files: ['source/styles/**/*.styl'],
		tasks: ['stylus', 'autoprefixer', 'cmq', 'csscomb']
	},
	jade: {
		files: ['source/templates/**/*.jade', '!source/templates/{helpers,layouts,partials}/**/*'],
		tasks: ['newer:jade', 'newer:prettify']
	},
	jadePartials: {
		files: 'source/templates/{helpers,layouts,partials}/**/*.jade',
		tasks: ['jade', 'newer:prettify']
	},
	jshint: {
		files: ['source/js/**/*.js', '!source/js/libs/**/*'],
		tasks: ['newer:jshint:all']
	},
	scripts: {
		files: ['source/js/**/*.js'],
		tasks: ['newer:copy:scripts']
	},
	copyCss: {
		files: ['source/css/**/*'],
		tasks: ['newer:copy:styles']
	}
};