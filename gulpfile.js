var gulp = require('gulp');
var jscs = require('gulp-jscs');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');
var deploy = require("gulp-gh-pages");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('lint', function() {
  // return gulp.src('./src/**/*.js')
  //   .pipe(jscs({
  //      esnext: true,
  //      preset: 'airbnb'
  //    }))
});

gulp.task('babel', function () {
  browserify({
    debug: true
  })
  .require('./src/js/index.js', { entry: true })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['lint','babel']);
  gulp.watch(['./src/scss/*.scss'], ['sass']);
  gulp.watch(['./src/index.html'], ['copy']);
  gulp.watch(['./src/favicon.ico'], ['copy']);
  gulp.watch(['./src/assets/**/*.*'], ['copy']);
});

gulp.task('copy', function () {
  gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('dist/assets/'));

  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest('dist'));

  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});

var options = {
    remoteUrl: "https://github.com/shawncothran/shawncothran.github.io.git",
    branch: "master"};
gulp.task('deploy', function () {
    gulp.src("dist/**/*.*")
        .pipe(deploy(options));
});

gulp.task('default', [
  'watch',
  'lint',
  'babel',
  'sass',
  'copy'
  ]
);
