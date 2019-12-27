const gulp = require('gulp')
const config = require('../config')
const production = config.production
const fs = require('fs')
const pug = require('@juandinella/penny-pipes').pug;

gulp.task('markup', () =>
  gulp.src(config.directories.src.markup + '/*.pug')
    .pipe(pug({
      pug: {
        basedir: config.directories.src.markup,
        locals: {
          icon: name => fs.readFileSync(`./src/assets/icons/${name}.svg`),
          production
        }
      }
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.markup))
)
