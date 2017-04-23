"use strict";

var gulp = require("gulp"),
  // CSS process
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  concatCSS = require('gulp-concat-css'),
  csscomb = require("gulp-csscomb"),
  cssnano = require('gulp-cssnano'),
  // Images process
  imagemin = require("gulp-imagemin"),
  // Js process
  minify = require("gulp-minify"),
  concat = require('gulp-concat'),
  // create livereload server
  server = require("browser-sync").create(),
  // helpers
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  del = require("del"),
  run = require("run-sequence");


var path = {
  build: {
    self: "build",
    css: "build/css",
    html: "build",
    fonts: "build/fonts",
    js: "build/js",
    img: "build/img"
  },
  src: {
    self: "",
    style: {
      folder: "css/**/*.css",
      self: "css/*.css"
    },
    html: {
      folder: "**/*.html",
      self: "*.html"
    },
    fonts: "fonts/**/*.{woff,woff2}",
    img: "img/**/*.*",
    script: {
      folder: "js/**/*.js",
      self: "js/*.js",
      jquery: "js/libs/jquery/*.js",
      libs: "js/libs/*.js"
    }
  }
};


gulp.task("style", function() {
  return gulp.src(path.src.style.self)
    .pipe(plumber())
    .pipe(concatCSS("style.css"))
    .pipe(postcss([autoprefixer({ browsers: ["last 4 versions"] })]))
    .pipe(csscomb())
    .pipe(gulp.dest(path.build.css))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.build.css))
    .pipe(server.stream());
});

gulp.task("build:style", function() {
  return gulp.src(path.src.style.self)
    .pipe(plumber())
    .pipe(concatCSS("style.css"))
    .pipe(postcss([autoprefixer({ browsers: ["last 4 versions"] })]))
    .pipe(csscomb())
    .pipe(gulp.dest(path.build.css))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.build.css));
});


gulp.task("js", function() {
  return gulp.src([path.src.script.jquery,
      path.src.script.libs,
      path.src.script.self
    ])
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest(path.build.js))
    .pipe(rename({ suffix: ".min" }))
    .pipe(minify({
      noSource: 1,
      ext: { min: ".js" }
    }))
    .pipe(gulp.dest(path.build.js))
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("build:js", function() {
  return gulp.src([path.src.script.jquery,
      path.src.script.libs,
      path.src.script.self
    ])
    .pipe(concat("script.js"))
    .pipe(gulp.dest(path.build.js))
    .pipe(rename({ suffix: ".min" }))
    .pipe(minify({
      noSource: 1,
      ext: { min: ".js" }
    }))
    .pipe(gulp.dest(path.build.js));
});


gulp.task("img", function() {
  return gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("build:img", function() {
  return gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 3,
      svgoPlugins: [{ cleanupIDs: false }],
      multipass: true
    }))
    .pipe(gulp.dest(path.build.img));
});


gulp.task("html", function() {
  return gulp.src(path.src.html.self)
    .pipe(gulp.dest(path.build.html))
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("build:html", function() {
  return gulp.src(path.src.html.self)
    .pipe(gulp.dest(path.build.html));
});

gulp.task("fonts", function() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
});


gulp.task("clean", function() {
  return del(path.build.self);
});


gulp.task("server", function() {
  server.init({
    server: { baseDir: "./" + path.build.self },
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
});

gulp.task("watch", function() {
  gulp.watch(path.src.style.folder, ["style"]);
  gulp.watch(path.src.html.folder, ["html"]);
  gulp.watch(path.src.fonts, ["fonts"]);
  gulp.watch(path.src.img, ["img"]);
  gulp.watch(path.src.script.folder, ["js"]);
});

gulp.task("build", function() {
  run("clean",
    "build:style",
    "build:js",
    "build:img",
    "build:html",
    "fonts"
  );
});

gulp.task("default", function() {
  run("clean",
    "build:style",
    "build:js",
    "build:img",
    "build:html",
    "fonts",
    "server",
    "watch"
  );
});
