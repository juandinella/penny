const gulp = require('gulp')
const config = require('../config')
const purge = require('@juandinella/penny-pipes').purgecss;

gulp.task('purge', () =>
  gulp.src(config.directories.dist.styles + '*.css')
    .pipe(purge({ paths: config.purge })())
    .pipe(gulp.dest(config.directories.dist.styles))
)
