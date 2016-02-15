"use strict";
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var assign = require('lodash.assign');
var es = require('event-stream');

gulp.task('default', ['js']);

gulp.task('js', function() {

    var files = [
        './client/js/index.js',
        './client/js/summoner.js'
    ];

    var tasks = files.map(function(entry) {
        var customOpts = {
            entries: entry,
            debug: true
        };
        var opts = assign({}, watchify.args, customOpts);
        var b = browserify(opts).transform(babelify, {presets: ['es2015', 'react']}).plugin(watchify);
        b.on('update', bundle);
        b.on('log', gutil.log);
        b.on('error', gutil.log);

        function bundle() {
            return b.bundle()
                .pipe(source(nameFromPath(entry)))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true}))
                // Add transformation tasks to the pipeline here.
                .pipe(uglify())
                .on('error', gutil.log)
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./dist/js/'));
        }

        return bundle();
    });

    // create a merged stream
    return es.merge.apply(null, tasks);
});

function nameFromPath(path) {
    return path.substring(path.lastIndexOf("/") + 1);
}