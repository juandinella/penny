const gulp = require("gulp");
const config = require("../config");
const purgecss = require("@juandinella/penny-pipes").purge;

gulp.task("purge", () => {
  return gulp
    .src("dist/assets/css/*.css")
    .pipe(purgecss({ content: ["./dist/**/*.html"] }))
    .pipe(gulp.dest(config.directories.dist.styles));
});
