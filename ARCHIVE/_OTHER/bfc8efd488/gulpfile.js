// Should I be ES6+ing this file? Does it matter? Seems like it would feel nicer but running Babel over this file feels like ouroboros.

// I'm using Gulp 3.x. I couldn't for the life of me get Gulp 4.x going, I think because my Gulp CLI was at too high (??) of a version and no amount of uninstalling and reinstalling would bring it back down.
var gulp = require("gulp");

// I thought I needed this until I found out about gulp.series. Can I refactor anything here?
var runSequence = require("run-sequence");

// Would this be a speed boost for anything? As in, only looking at files that have changed instead of all files?
// https://github.com/sindresorhus/gulp-changed

// Should I be restarting gulp on gulpfile.js change?
// https://gist.github.com/tilap/31167027ddee8acbf0e7

// General utilities
var clean = require("gulp-clean"); // for deleting files/folders
var rename = require("gulp-rename");
var plumber = require("gulp-plumber"); // to prevent gulp.watch from dying on errors

// For live reloading/CSS injection
var browserSync = require("browser-sync").create();

// Stuff for SVG workflow
var svgSymbols = require("gulp-svg-symbols");
var svgmin = require("gulp-svgmin");

// CSS workflow
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");

// JS workflow
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var minify = require("gulp-minify"); // I tried gulp-uglify-es but errored a lot for me
var concat = require("gulp-concat");

// Browsersync server. This is the general command I run to work on the site.
// Maybe should be the default task?
gulp.task("serve", function () {
  browserSync.init({
    proxy: "css-tricks.cool", // served by Local by Flywheel
    reloadDelay: 500,
  });

  gulp.watch(["scss/**/*.scss", "style.scss"], ["run-all-css-tasks"]);
  gulp.watch("./**/*.php").on("change", browserSync.reload); // WordPress, so...
  gulp.watch("js/*.js", () => {
    gulp.run("run-all-js-tasks", () => {
      browserSync.reload();
    });
  });
  gulp.watch("icons/**/*.svg", ["svg"]);
});

// SVG workflow: folder of SVGs combined into a SVG sprite of <symbol>s, output as a PHP file I can include();
gulp.task("svg", function () {
  return gulp
    .src("icons/*.svg")
    .pipe(svgmin())
    .pipe(
      svgSymbols({
        templates: [`default-svg`],
        svgAttrs: {
          width: 0,
          height: 0,
          display: "none",
        },
      })
    )
    .pipe(rename("icons/sprite/icons.php")) // so I can include() it
    .pipe(gulp.dest(""));
});

// CSS Workflow
// I should probably get sourcemaps in here...
// Issue... Sass errors don't kill the watch command, but they don't spit out errors in there either, so if I find Sass isn't refreshing, I have to stop the watch, process this separately, get the error and fix it, then restart watch.
gulp.task("sass", function () {
  return gulp
    .src(["scss/*.scss", "style.scss"])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});
gulp.task("autoprefixer", function () {
  return gulp
    .src("css/*.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("css"));
});
// Is this the best CSS minfier? I have no idea. I supposed I could try to find that fancy one that looks at my templates and tries to find unused selectors too?
gulp.task("minify-css", function () {
  return gulp
    .src("css/*.css")
    .pipe(cleanCSS({ compatibility: "*" }))
    .pipe(gulp.dest("css"));
});
gulp.task("move-main-style", function () {
  return gulp
    .src("css/style.css")
    .pipe(rename("style.css"))
    .pipe(gulp.dest("./"));
});
// Seems kinda messy/confusing way to be shuffling files around.
gulp.task("remove-style-after", function () {
  return gulp.src("css/style.css", { read: false }).pipe(clean());
});
gulp.task("run-all-css-tasks", function (callback) {
  runSequence(
    "sass",
    "autoprefixer",
    "minify-css",
    "move-main-style",
    "remove-style-after",
    callback
  );
});

// JS workflow. I don't think the sourcemaps are working.
gulp.task("babel", function () {
  return gulp
    .src([
      "js/*.js",
      "!js/min/*.js",
      "!js/global.js",
      "js/concat/global-concat.js",
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-proposal-class-properties"],
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("js/babel"));
});
// I have no idea if this is the best JavaScript minifier.
gulp.task("minify-javascript", function (cb) {
  return gulp
    .src("js/babel/*.js")
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".min.js",
        },
      })
    )
    .pipe(gulp.dest("js/min"));
});
// Maybe webpack should be doing this? But then do I need to only use ES6 `import` compatible libs?
gulp.task("concat-scripts", function () {
  return gulp
    .src([
      "js/libs/jquery.lazy.js",
      "js/libs/jquery.fitvids.js",
      "js/libs/jquery.resizable.js",
      "js/highlighting-fixes.js",
      "js/libs/prism.js",
      "js/bsa.js",
      "js/global.js",
    ])
    .pipe(concat("global-concat.js"))
    .pipe(gulp.dest("js/concat"));
});
gulp.task("clean-js-temp", function () {
  return gulp.src(["js/babel", "js/concat"], { read: false }).pipe(clean());
});
gulp.task("run-all-js-tasks", function (callback) {
  runSequence(
    "clean-js-temp",
    "concat-scripts",
    "babel",
    "minify-javascript",
    "clean-js-temp",
    callback
  );
});
