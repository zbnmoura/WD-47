const gulp = require('gulp');
const ugly = require('gulp-uglifycss');
const babel = require('gulp-babel')
const uglyjs = require('gulp-uglify');

//console.log('gulp on na dist');
//console.log(gulp);

gulp.task('css', () => {
    gulp.src('src/**/*.css').pipe(ugly()).pipe(gulp.dest('dist'));

});

gulp.task('html', () => {
    gulp.src('src/**/*.html').pipe(ugly()).pipe(gulp.dest('dist'));

});

gulp.task('js', () => {
    gulp.src('src/*.js').pipe(babel({ presets: ['es2015'] })).pipe(uglyjs()).pipe(concat('app.min.js')).pipe(gulp.dest('dist'));
});