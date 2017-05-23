//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');
//var browserSync = require('browser-sync').create();
//var pug = require('gulp-pug');  
//var path = require('path');
//
//
//
//
////.pipe(gulp.dest('./www/app/'))
//
//
//
//
//
//gulp.task('css', function() {
//	return gulp.src('src/sass/**/*.scss')
//		.pipe(sourcemaps.init())
//		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//		.pipe(autoprefixer({
//            browsers: ['last 2 versions']
//        }))
//        .pipe(sourcemaps.write('./maps'))
//		.pipe(gulp.dest('dist/css'))
//		.pipe(browserSync.stream())
//});
//
////gulp.task('images', function(){
////	return gulp.src('src/images/*')
////		.pipe(imagemin())
////		.pipe(gulp.dest('dist/images'))
////});
//
//gulp.task('copy', function() {
//	return gulp.src('src/*.html')
//		.pipe(gulp.dest('dist'))
//		.pipe(browserSync.stream())
//});
//
//gulp.task('browserSync', function() {
//	browserSync.init({
//		server: {
//			baseDir: 'dist'
//		}
//	})
//});
//
//
//
//
//
//
//function callback(file) {  
//  if (file.path.search('index') !== -1) {
//    return '/dist/';
//  }
//  var folder = path.basename(file.path).replace(/\..*html/, '/');
//  return '/dist/' + folder;
//}
//
//gulp.task('pug', function(done) {  
//  gulp.src('/src/**/*.jade')
//    .pipe(pug())
//    .pipe(gulp.dest(callback))
//		.pipe(browserSync.stream())
//    .on('end', done);
//});
//
//
//
//
//
//
//
//gulp.task('watch', ['browserSync', 'css', 'pug'], function(){
//	gulp.watch('src/sass/**/*.scss', ['css']);
//	gulp.watch('src/*.html', ['copy']);
//	gulp.watch('src/**/*.jade', ['pug']);
//});
//
//
/////////////////////////////////
//
//
////var pug = require('gulp-pug');  
////var path = require('path');
//
//
////var paths = {  
////  sass: ['./scss/**/*.scss'],
////  pug: ['src/**/*.pug']
////};
//
////gulp.task('default', ['sass', 'pug']); 
//
//
////gulp.task('pug', function(done) {  
////  gulp.src('./pug/**/*.pug')
////    .pipe(pug())
////    .pipe(gulp.dest(callback))
////		.pipe(browserSync.stream())
////    .on('end', done);
////});
////
////
//////.pipe(gulp.dest('./www/app/'))
////
////
////function callback(file) {  
////  if (file.path.search('index') !== -1) {
////    return '/dist/';
////  }
////  var folder = path.basename(file.path).replace(/\..*html/, '/');
////  return '/dist/' + folder;
////}
//
//
////gulp.task('watch', function() {  
////  gulp.watch(paths.sass, ['sass']);
////  gulp.watch('src/**/*.pug', ['pug']);
////});
//
//
//
//










































//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');
//var imagemin = require('gulp-imagemin');
//var browserSync = require('browser-sync').create();
//
//gulp.task('css', function() {
//	return gulp.src('src/sass/**/*.scss')
//		.pipe(sourcemaps.init())
//		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//		.pipe(autoprefixer({
//            browsers: ['last 2 versions']
//        }))
//        .pipe(sourcemaps.write('./maps'))
//		.pipe(gulp.dest('dist/css'))
//		.pipe(browserSync.stream())
//});
//
//gulp.task('images', function(){
//	return gulp.src('src/images/*')
//		.pipe(imagemin())
//		.pipe(gulp.dest('dist/images'))
//});
//
//gulp.task('copy', function() {
//	return gulp.src('src/*.html')
//		.pipe(gulp.dest('dist'))
//		.pipe(browserSync.stream())
//});
//
//gulp.task('browserSync', function() {
//	browserSync.init({
//		server: {
//			baseDir: 'dist'
//		},
//	})
//});
//
//gulp.task('watch', ['browserSync', 'css'], function(){
//	gulp.watch('src/sass/**/*.scss', ['css']);
//	gulp.watch('src/*.html', ['copy']);
//});
//
//
//
//
//
//
//
//





























var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');  
//var path = require('path');


gulp.task('css', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

gulp.task('copy', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
});

gulp.task('browserSync', function() {
	browserSync.init({
//		server: {
//			baseDir: 'dist'
//		}
//		proxy: "graze.dev"
		proxy: {
			target: "http://graze.dev",
		}
	})
});



//gulp.task('browserSync', function() {
//	browserSync({
//		server: {
//		// Use root as base directory
//			baseDir: 'dist'
//		},
//		proxy: graze.dev
//	})
//})
//gulp.task('browserSync', function() {
//browserSync({
//// Use Wordpress.dev instead of spinning up a server
//proxy: "graze.dev"
//})
//})




function callback(file) {  
  if (file.path.search('index') !== -1) {
    return 'dist/';
  }
  var folder = path.basename(file.path).replace(/\..*html/, '/');
  return 'dist/' + folder;
}

gulp.task('pug', function(done) {  
  gulp.src('src/**/*.pug')
    .pipe(pug())
//    .pipe(gulp.dest(callback))
    .pipe(gulp.dest('dist'))
//		.pipe(browserSync.stream())
    .on('end', done)
		.pipe(browserSync.stream())
});







gulp.task('watch', ['browserSync', 'css', 'pug'], function(){
	gulp.watch('src/sass/**/*.scss', ['css']);
	gulp.watch('src/*.html', ['copy']);
	gulp.watch('src/**/*.pug', ['pug']);
});