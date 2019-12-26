const gulp = require('gulp')
const minifyStyles = require('penny-pipes').minifyStyles;
const config = require('../config')

gulp.task('minifyStyles', () =>
  gulp.src(config.directories.dist.styles + '/*.css')
    .pipe(minifyStyles()())
    .pipe(gulp.dest(config.directories.dist.styles))
)
