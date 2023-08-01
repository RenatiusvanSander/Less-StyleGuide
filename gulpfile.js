var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('build-less', function(done) {
  gulp.src('./src/**.less') .pipe(less()) .pipe(gulp.dest('./distro/css/remad-styleguide.css'));
  done();
});