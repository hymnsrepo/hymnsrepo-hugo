const gulp = require('gulp');
const path = require('path');
const swPrecache = require('sw-precache');

gulp.task('generate-sw', function(callback) {
  swPrecache.write('service-worker.js', {
    staticFileGlobs: ['public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'],
    stripPrefix: "public",
    navigateFallback: '/'
  }, callback);
});
