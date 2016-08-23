var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify')

var paths = {
  stylus: ['./dev/nuomi/stylus/*.styl'],
  script:['./dev/nuomi/js/*.js']
};

gulp.task('stylus-1', function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({
      	compress : 0
      }))
    .pipe(gulp.dest('./pro/nuomi/css'));
});


gulp.task('script-1', function() {
  return gulp.src(paths.script[0])
      // .pipe(uglify())
    .pipe(gulp.dest('./pro/nuomi/js'));
});



//监听
gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus-1']);
  gulp.watch(paths.script, ['script-1']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch','stylus-1','script-1']);