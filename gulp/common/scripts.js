const gulp = require('gulp')
const { compiler } = require('@juandinella/penny-scripts')
const { mode } = require('../config.js')

gulp.task('scripts', () => compiler(mode))
