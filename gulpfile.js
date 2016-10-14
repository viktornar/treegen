var gulp = require("gulp"),
  browserify = require("browserify"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  babel = require('gulp-babel'),
  mocha = require("gulp-mocha"),
  istanbul = require("gulp-istanbul"),
  browserSync = require("browser-sync").create(),
  concat = require("gulp-concat"),
  concatCss = require("gulp-concat-css"),
  gulpSequence = require("gulp-sequence"),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

gulp.task("assets-css", function () {
  return gulp.src("source/**/*.css")
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task('lint', function () {
  return gulp.src([
      "source/**/**.js",
      "test/**/**.test.js"
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task("build-compile-es6", function () {
  return gulp.src(["source/js/**/*.js"])
    .pipe(babel())
    .pipe(gulp.dest("build/js/"));
});

gulp.task("build-compile-test-es6", function () {
  return gulp.src([
      "test/js/**/*.js"
    ])
    .pipe(babel())
    .pipe(gulp.dest("test/es5/"));
});

gulp.task("build", function(cb) {
  gulpSequence(["build-compile-es6", "build-compile-test-es6"], cb);
});

gulp.task("bundle", function() {
  var libraryName = "main";
  var mainFilePath = "build/js/main.js";
  var outputFolder   = "dist/js/";
  var outputFileName = libraryName + ".js";

  var bundler = browserify({
    debug: true,
    standalone : libraryName
  });

  return bundler.add(mainFilePath)
    .bundle()
    .pipe(source(outputFileName))
    .pipe(buffer())
    .pipe(gulp.dest(outputFolder));
});

gulp.task("assets-js", function () {
  return gulp.src("build/bundle/main.js")
    .pipe(sourcemaps.init())
    .pipe(gulp.dest("assets/js"));
});

gulp.task("watch", ["default"], function () {
  browserSync.init({
    server: "."
  });
  
  gulp.watch(
      [
        "source/js/**/*.js",
        "test/js/**/*.js",
        "source/css/**/*.css"
      ], 
      ["default"]
  );
});

gulp.task("default", function (cb) {
    gulpSequence(
      'assets-css',
      "lint",
      "build",
      "bundle",
      cb
    );
});