var Server = require("karma").Server;
const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const stylus = require('gulp-stylus');
const cleanCss = require('gulp-clean-css');

gulp.task('default', ['watch-stylus', 'watch-pug'], function() {

});

gulp.task('test', function() {
    gulp.src('tests/spec/**/*Spec.js')
        .pipe(jasmine());
});

gulp.task('watch-stylus', function() {
    return watch('src/main/assets/**/*.styl', stylusTask);
});

gulp.task('stylus', function() {
    return stylusTask();
});

function stylusTask() {
    console.log("Compiling stylus");
    return gulp.src('src/main/assets/stylus/app.styl')
        .pipe(stylus())
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css'));
}

gulp.task('watch-pug', function() {
    return watch('src/main/ui/**/*.pug', pugTask);
});

gulp.task('pug', function() {
    return pugTask();
});
function pugTask() {
    console.log("Compiling pug");
    return gulp.src('src/main/ui/pages/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('build'))
        .pipe(rename({
            extname: ".html"
        }));
}

gulp.task("ui-test", function(done) {
    return new Server({
        configFile: 'tests/ui/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('ui-tdd', function(done) {
    new Server({
        configFile: "tests/ui/karma.conf.js"
    }, done).start();
});