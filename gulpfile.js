var gulp = require('gulp');
// var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// gulp.task('sass', function() {
// 	return sass('./assets/sass/**/*.scss')
// 		.on('error', sass.logError)
// 		.pipe(sourcemaps.init())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('./assets/css'))
// 		.pipe(notify("Sass is done!"));
// });
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./assets/sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./assets/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets/css"))
        .pipe(notify("Sass is done!"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

// gulp.task('dev', function () {
// 	gulp.watch('./assets/sass/**/*.scss', ['sass']);
// });
