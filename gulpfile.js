var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var dirs = {
    styles: './public/scss',
    dest: './public/dist'
};

var plumberErrorHandler = { 
  errorHandler: notify.onError({
    message: "Error: <%= error.message %>"
})};

gulp.task('watch', function() {
    gulp.watch(dirs.styles + '/**/*', ['styles'])
});

gulp.task('styles', function() {
    gulp.src(dirs.styles + '/cute.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dirs.dest));
});