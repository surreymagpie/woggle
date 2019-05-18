const { dest, series, src, task, watch } = require('gulp');
const sass = require ('gulp-sass');

function css() {
	return src('./sass/woggle.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./css/'))
};

function watch_files() {
	watch('sass/**/*.s(a|c)ss', css);
}

exports.css = css;
exports.default = series(css, watch_files);
