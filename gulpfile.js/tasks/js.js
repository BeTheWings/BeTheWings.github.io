#!/usr/bin/env node

"use strict";

const { src, dest, watch, series, parallel} = require('gulp');

const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const insert = require('gulp-insert');
const fs = require('fs');

<<<<<<< HEAD
const JS_ROOT = 'assets/js';
const jsDest = `${ JS_ROOT }/dist/`;
=======
const JS_SRC = '_javascript';
const JS_DEST = `assets/js/dist`;
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864

function concatJs(files, output) {
  return src(files)
    .pipe(concat(output))
    .pipe(rename({ extname: '.min.js' }))
<<<<<<< HEAD
    .pipe(dest(jsDest));
}

function minifyJs() {
  return src(`${ jsDest }/*.js`)
    .pipe(insert.prepend(fs.readFileSync(`${ JS_ROOT }/_copyright`, 'utf8')))
    .pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
    .pipe(dest(jsDest));
}

const homeJs = () => {
  return concatJs([
      `${JS_ROOT}/_commons/*.js`,
      `${JS_ROOT}/_utils/timeago.js`
=======
    .pipe(dest(JS_DEST));
}

function minifyJs() {
  return src(`${ JS_DEST }/*.js`)
    .pipe(insert.prepend(fs.readFileSync(`${ JS_SRC }/copyright`, 'utf8')))
    .pipe(uglify({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
    .pipe(insert.append('\n'))
    .pipe(dest(JS_DEST));
}

const commonsJs = () => {
  return concatJs(`${JS_SRC}/commons/*.js`, 'commons');
};

const homeJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/locale-datetime.js`
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864
    ],
    'home'
  );
};

const postJs = () => {
  return concatJs([
<<<<<<< HEAD
      `${JS_ROOT}/_commons/*.js`,
      `${JS_ROOT}/_utils/timeago.js`,
      `${JS_ROOT}/_utils/img-hyperlink.js`,
      `${JS_ROOT}/_utils/lang-badge.js`,
      // 'smooth-scroll.js' must be called after ToC is ready
      `${JS_ROOT}/_utils/smooth-scroll.js`
=======
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/img-extra.js`,
      `${JS_SRC}/utils/locale-datetime.js`,
      `${JS_SRC}/utils/clipboard.js`,
      // 'smooth-scroll.js' must be called after ToC is ready
      `${JS_SRC}/utils/smooth-scroll.js`
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864
    ], 'post'
  );
};

const categoriesJs = () => {
  return concatJs([
<<<<<<< HEAD
      `${JS_ROOT}/_commons/*.js`,
      `${JS_ROOT}/_utils/category-collapse.js`
=======
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/category-collapse.js`
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864
    ], 'categories'
  );
};

const pageJs = () => {
  return concatJs([
<<<<<<< HEAD
      `${JS_ROOT}/_commons/*.js`,
      `${JS_ROOT}/_utils/smooth-scroll.js`
=======
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/img-extra.js`,
      `${JS_SRC}/utils/clipboard.js`,
      `${JS_SRC}/utils/smooth-scroll.js`
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864
    ], 'page'
  );
};

<<<<<<< HEAD
// GA pageviews report
const pvreportJs = () => {
  return concatJs(`${JS_ROOT}/_utils/pageviews.js`, 'pvreport');
};

const buildJs = parallel(homeJs, postJs, categoriesJs, pageJs, pvreportJs);
=======
const miscJs = () => {
  return concatJs([
      `${JS_SRC}/commons/*.js`,
      `${JS_SRC}/utils/locale-datetime.js`
    ], 'misc'
  );
};

// GA pageviews report
const pvreportJs = () => {
  return concatJs(`${JS_SRC}/utils/pageviews.js`, 'pvreport');
};

const buildJs = parallel(
  commonsJs, homeJs, postJs, categoriesJs, pageJs, miscJs, pvreportJs);
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864

exports.build = series(buildJs, minifyJs);

exports.liveRebuild = () => {
  buildJs();

  watch([
<<<<<<< HEAD
      `${ JS_ROOT }/_commons/*.js`,
      `${ JS_ROOT }/_utils/*.js`,
      `${ JS_ROOT }/lib/*.js`
    ],
    buildJs
  )
}

=======
      `${ JS_SRC }/commons/*.js`,
      `${ JS_SRC }/utils/*.js`
    ],
    buildJs
  );
};
>>>>>>> 684f32b1f4d74433fccc767095b153fc618db864
