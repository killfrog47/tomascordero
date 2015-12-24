var gulp = require('gulp');
// var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
// var minifyCss = require('gulp-minify-css');
var notify = require("gulp-notify");
// var gutil = require('gulp-util');
// var ftp = require( 'vinyl-ftp' );
// var prompt = require('gulp-prompt');

gulp.task('deploy', function () {
	var password = '';
	return gulp.src('/')
		.pipe(prompt.prompt({
			type: 'password',
			name: 'pass',
			message: 'Please enter your password'
		}, function(res){
			var conn = ftp.create( {
		        host:     'ftp.tomascordero.com',
		        user:     'tcordero',
		        password: res.pass,
		        parallel: 4,
		        log:      gutil.log
		    } );
		    var globs = [
		        'assets/css/**',
		        'assets/images/**',
		        'assets/js/**',
		        'assets/includes/**',
		        'index.php'
		    ];
			return gulp.src( globs, { base: '.', buffer: false })
		    	.pipe( conn.newerOrDifferentSize('/public_html/dev.warriorsofthemonth'))
		    	.pipe( conn.dest('/public_html/dev.warriorsofthemonth'))
		}))
});

gulp.task('sass', function() {
	return sass('./assets/sass/**/*.scss')
		.on('error', sass.logError)
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/css'))
		.pipe(notify("Sass is done!"));
});

gulp.task('start:sass', function () {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('prod', function() {
	return sass('./assets/sass/**/*.scss')
		.on('error', sass.logError)
		.pipe(sourcemaps.init())
		.pipe(minifyCss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/css'))
		.pipe(notify("Switched to prod"));
});

gulp.task('dev', function() {
	return sass('./assets/sass/**/*.scss')
		.on('error', sass.logError)
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/css'))
		.pipe(notify("Switched to prod"));
})