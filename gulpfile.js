const { dest, parallel, series, src, task, watch } = require('gulp');
const sass = require ('gulp-sass');
const browserSync = require('browser-sync').create();

function css() {
	return src('./sass/woggle.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('./css/'))
		.pipe(browserSync.stream());
};

function watch_files() {
	watch('sass/**/*.s(a|c)ss', css);
}

function browsersync(done) {
    browserSync.init({
        proxy: "http://localhost:8080"
	});
	done();
};

exports.css = css;
exports.default = series(css, browsersync, watch_files);
