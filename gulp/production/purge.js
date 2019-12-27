const gulp = require('gulp')
const config = require('../config')
const purge = require('@juandinella/penny-pipes').purge;

gulp.task('purge', () => {
  return gulp
    .src(config.directories.dist.styles + "*.css")
    .pipe(purge({ content: ["./dist/**/*.html"] }))
    .pipe(gulp.dest(config.directories.dist.styles));
})
