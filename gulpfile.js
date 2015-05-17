var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var reload = browserSync.reload
var plumber = require('gulp-plumber');
var less = require('gulp-less');

// watch files for changes and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(['./dist/*.html', './dist/styles/**/*.css', './dist/scripts/**/*.js'], {
        cwd: 'app'
    }, reload);
});

gulp.task('layout', function () {
    gulp.src('./view/index.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));
});

gulp.task('fonts', function () {
    gulp.src('./fonts/*')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('less', function () {
    return gulp.src('./less/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task('javascript', function () {
    var bundleStream = browserify({
        entries: './src/app.js',
        debug: true,
        transform: [reactify]
    }).bundle();

    bundleStream
        .pipe(plumber())
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('default', ['fonts', 'less', 'javascript', 'layout', 'serve'], function () {
    var jsWatcher = gulp.watch('src/**/*.js', ['javascript']);
    var htmlWatcher = gulp.watch('view/**/*.html', ['layout']);
    var lessWatcher = gulp.watch('less/main.less', ['less']);
});
