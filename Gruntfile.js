module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['src/*.js'], // which files to watch
				tasks: ['uglify'],
				options: {
					nospawn: true
				}
			}
		},
		uglify: {
			options: {
				mangle: false,
				screwIE8: true
			},
			development: {
				options: {
					compress: false,
					beautify: {
						beautify: true,
						"indent_level": 2
					}
				},
				files: {
					'dist/shims.js': ['src/shims.js']
				}
			},
			production: {
				options: {
					compress: true,
					sourceMap: true,
					sourceMapName: 'dist/shims.min.js.map'
				},
				files: {
					'dist/shims.min.js': ['src/shims.js']
				}
			}
		}
	});

	grunt.registerTask('watch-files', ['watch']);

	grunt.registerTask('dist', ['uglify']);
};