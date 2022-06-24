module.exports = {
	options: {
		brace_style: 'expand',
		indent: 1,
		indent_char: '	',
		condense: true,
		indent_inner_html: true
	},
	all: {
		expand: true,
		cwd: 'build',
		ext: '.html',
		src: '**/*.html',
		dest: 'build'
	}
}