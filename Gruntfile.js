module.exports = function(grunt) {
	// load all grunt tasks matching the `grunt-*` pattern
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		jitGrunt: {
			staticMappings: {
				cmq: 'grunt-combine-media-queries'
			}
		}
	});
};