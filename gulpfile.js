const { series, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const useref = require('gulp-useref');


function minifyСss() {
  return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
}

function minifyJS() {
  return src(['./src/js/*.+(js|min.js)'])
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('dist/js/'));
}

function minifyHtml() {
  return src('./src/*.html')
        .pipe(useref())
        .pipe(htmlmin({collapseWhitespace: true }))
        .pipe(dest('dist/'));
}

function minImages() {
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function moveFonts() {
  return src('./src/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

exports.build = series(minifyСss, minImages, minifyJS, moveFonts, minifyHtml);

exports.minifyСss = minifyСss;
exports.minifyJS = minifyJS;
exports.minImages = minImages;
exports.moveFonts = moveFonts;
exports.minifyHtml = minifyHtml;