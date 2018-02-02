const gulp = require('gulp');
const ugly = require('gulp-uglifycss');
//console.log('gulp on na dist');
//console.log(gulp);

gulp.task('css', () => {
   gulp.src('src/**/*.css').pipe(ugly()).pipe(gulp.dest('dist'));
 
});

gulp.task('html', () => {
    gulp.src('src/**/*.html').pipe(ugly()).pipe(gulp.dest('dist'));
    
 });

 gulp.task('js', () => {
    gulp.src('src/**/*.js').pipe(ugly()).pipe(gulp.dest('dist'));
   
 });

 gulp.task('js', () => {
    gulp.src('src/node_modules/**/*.*').pipe(ugly()).pipe(gulp.dest('dist'));
   
 });