"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");

var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require('gulp-cssnano');

var imagemin = require("gulp-imagemin");

var minify = require("gulp-minify");

var server = require("browser-sync").create();

var rename = require("gulp-rename");
var del = require("del");
var run = require("run-sequence");



/* CSS */

gulp.task("style", function() {
  gulp.src("css/style.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("style-build", function() {

  return gulp.src(["css/**/*.css", "!css/**/*.min.css"])
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]})
    ]))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("build/css"));
});


/* JS */

gulp.task("scripts-build", function() {
  return gulp.src("js/**/*.js")
    .pipe(minify({
      noSource: 1,
      ext: { min:".js" }
    }))
    .pipe(gulp.dest("build/js"));
});


/* IMG */

gulp.task("img-build", function() {
  return gulp.src(["img/**/*.{png,jpg,gif,svg}", "!img/svg-img{,/**}"])
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest("build/img"));
});


/* Build project */

gulp.task("copy-files", function() {

  return gulp.src([
      "fonts/**/*.{woff,woff2}",
      "*.html"
    ], {
      base : "."
    })
    .pipe(gulp.dest("build"));
});


gulp.task("clean", function() {
  return del("build");
});


gulp.task("build", function(fn) {

  run("clean",
    "copy-files",
    "style-build",
    "scripts-build",
    "img-build",
    fn);
});


/* Dev server */

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(["css/**/*.css", "!css/**/*.min.css"], ["style"]);
  gulp.watch("js/**/*.js").on("change", server.reload);
  gulp.watch("*.html").on("change", server.reload);
});
