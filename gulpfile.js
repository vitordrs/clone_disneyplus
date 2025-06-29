const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
}

function styles(){
    return gulp.src('./src/style/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}
function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}


exports.default = gulp.parallel (styles, images, scripts);
exports.watch =  function(){
    gulp.watch('./src/style/*.scss', gulp.parallel(styles))
    gulp.watch('.src/*.js', gulp.parallel(scripts))
}
// exports.images = images;