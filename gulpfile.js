//global packages = [browserify, eslint, nodemon, postcss-cli]
var gulp 		= require('gulp'),
	sourcemaps 	= require('gulp-sourcemaps'),
	watch 		= require('gulp-watch'),
	plumber 	= require('gulp-plumber'),
	browserSync = require('browser-sync').create(),
	reload 		= browserSync.reload;

//===============================
// 		Util
//===============================
var gutil = require('gulp-util'),
    chalk = require('chalk');

function map_error(err) {
	if (err.fileName) {
		// regular error
		gutil.log(chalk.red(err.name)
			+ ': '
			+ chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
			+ ': '
			+ 'Line '
			+ chalk.magenta(err.lineNumber)
			+ ' & '
			+ 'Column '
			+ chalk.magenta(err.columnNumber || err.column)
			+ ': '
			+ chalk.blue(err.description));
	} else {
		// browserify error..
		gutil.log(chalk.red(err.name)
			+ ': '
			+ chalk.yellow(err.message));
	}
	this.emit('end');
}

//===============================
// 		Javascript - Tasks
//===============================

var watchify 			= require('watchify'),
	browserify 			= require('browserify'),
	babelify 			= require('babelify'),
	uglify 				= require('gulp-uglify'),

	rename 				= require('gulp-rename'),
	merge  				= require('merge-stream'),
	assign 				= require('lodash.assign'),
	source 				= require('vinyl-source-stream'),
	buffer 				= require('vinyl-buffer');

gulp.task('watch-js', function () {
	var customOpts = {
		entries: ['./src/index.js'],
  		debug: true
	};
	var options = assign({}, watchify.args, customOpts);
	var bundler = watchify(browserify(options)).transform(babelify, { presets: ['es2015'] });

	var scripts = function(changedFiles){
		return bundle_js(bundler);
	};

	bundler.on('update', scripts);
	bundler.on('log', function(log){
		gutil.log(log + ' - watch-js');
	});

	return scripts();
});

function bundle_js(bundler) {
	return bundler.bundle()
		.pipe(plumber())
		.on('error', map_error)
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./dist'))
		.pipe(rename('main.min.js'))
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
}

gulp.task('build-js', function(){
	var bundler = browserify('./src/index.js').transform(babelify, { presets: ['es2015'] });
	return bundle_js(bundler);
});
//===============================
// 		Html - Tasks
//===============================

gulp.task('html-browser-sync', function(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['./*.html', './dist/*.js'], reload);
});

//===============================
// 		Grouped Tasks
//===============================

gulp.task('build', ['build-js']);
gulp.task('watch', ['html-browser-sync', 'watch-js']);

gulp.task('default', ["watch"]);
