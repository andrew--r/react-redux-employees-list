/* eslint-disable import/no-extraneous-dependencies, arrow-body-style */

// common
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import plumberErrorHandler from 'gulp-plumber-error-handler';
import sourcemaps from 'gulp-sourcemaps';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';

// styles
import sass from 'gulp-sass';

// scripts
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';


const SOURCE = './source';
const OUT = './build';
const bsync = browserSync.create();


function errorHandler(taskName) {
	return {
		errorHandler: plumberErrorHandler(`Error in ${taskName} task`),
	};
}


gulp.task('compile-styles', () => {
	return gulp
		.src(`${SOURCE}/styles/**/*.sass`)
		.pipe(plumber(errorHandler('compile-styles')))
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(`${OUT}/styles`));
});

gulp.task('compile-scripts', () => {
	return gulp
		.src(`${SOURCE}/scripts/index.jsx`)
		.pipe(plumber(errorHandler('compile-scripts')))
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(`${OUT}/scripts`));
});

gulp.task('copy-markup', () => {
	return gulp
		.src(`${SOURCE}/*.html`)
		.pipe(plumber(errorHandler('copy-markup')))
		.pipe(changed(`${OUT}/static`))
		.pipe(gulp.dest(OUT));
});

gulp.task('default', [
	'copy-markup',
	'compile-styles',
	'compile-scripts',
], () => {
	bsync.init({
		server: OUT,
		port: 5000,
	});
	gulp.watch(`${SOURCE}/styles/**/*.sass`, ['compile-styles']).on('change', bsync.reload);
	gulp.watch(`${SOURCE}/scripts/**/*.{js,jsx}`, ['compile-scripts']).on('change', bsync.reload);
	gulp.watch(`${SOURCE}/*.html`, ['copy-markup']).on('change', bsync.reload);
});
