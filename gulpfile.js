const { dest, series, src, task } = require('gulp');
const sass = require ('gulp-sass');

function css() {
	return src('./sass/woggle.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./css/'))
};

exports.css = css;
exports.default = css;
