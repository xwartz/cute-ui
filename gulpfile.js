var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

var dirs = {
  styles : './public/scss',
  dest : './public/dist'
};

gulp.task('watch', function() {
  gulp.watch(dirs.styles + '/**/*', ['styles'])
});

gulp.task('styles', function() {
  gulp.src(dirs.styles + '/cute.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dirs.dest));
});
