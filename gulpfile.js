const { series, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');


function minifyСss() {
  return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
}

function minifyJS() {
  return src(['./src/js/*.js'])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('dist/js/'));
}

function minImages(){
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function moveFonts(){
  return src('./src/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

function moveHtml(){
  return src('./src/*.html')
        .pipe(dest('dist'));
}

exports.build = series(minifyСss, minImages, minifyJS, moveFonts, moveHtml);
exports.minifyСss = minifyСss;
exports.minifyJS = minifyJS;
exports.minImages = minImages;
exports.moveFonts = moveFonts;
exports.moveHtml = moveHtml;