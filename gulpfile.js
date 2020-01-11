const gulp = require('gulp');
workbox = require('workbox-build');

gulp.task('generate-sw', () => {
  return workbox.generateSW({
    globDirectory: 'public',
    globPatterns: [
      '**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'
    ],
    swDest: 'public/sw.js',
    clientsClaim: true,
    skipWaiting: true
  }).then(({warnings}) => {
    // In case there are any warnings from workbox-build, log them.
    for (const warning of warnings) {
      console.warn(warning);
    }
    console.info('Service worker generation completed.');
  }).catch((error) => {
    console.warn('Service worker generation failed:', error);
  });
});
