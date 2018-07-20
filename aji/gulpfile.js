const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');

// ディレクトリの設定
const pathSrc = {
    scss: './assets/scss/**/*.scss',
};
const pastDest = {
    css: './dist/css'
};

// SCSS → CSSへのコンパイル
gulp.task('scss', function() {
    gulp.src(pathSrc.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(pastDest.css))
        .pipe(browserSync.stream());
});

// BrowserSyncにて開発用のローカルサーバ立ち上げ
gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: './',
            directory: true
        }
    });
});

// 監視タスク（変更を検知して更新をかける）
gulp.task('watch', function() {
    gulp.watch(pathSrc.scss, ['scss']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['scss', 'watch'], function() {
    gulp.start('bs');
});