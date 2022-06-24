module.exports = function(grunt) {
	return {
		dist: {
			options: {
				base: 'build',
				livereload: true,
				port: 3001,
				open: {
					target: 'http://localhost:3001',
					callback: function() {
						grunt.log.write('Page opened in your default browser!');
					}
				}
			}
		}
	};
};