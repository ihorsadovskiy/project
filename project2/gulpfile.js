'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var urlAdjuster = require('gulp-css-url-adjuster');

gulp.task('sass', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(sass({ imagePath: 'img' }).on('error', sass.logError))
        .pipe(urlAdjuster({replace:  ['../../images','./img']}))
        .pipe(gulp.dest('./build/static'));
});

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./build'));
});

gulp.task('images', function() {
    return gulp.src('./images/**')
        .pipe(gulp.dest('build/static/img'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('views:watch', function () {
    gulp.watch('views/**/*.pug', ['views']);
});