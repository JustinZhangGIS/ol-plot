var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var cssnano = require('gulp-cssnano');
var name_ = 'ol-plot';
gulp.task('compact-js', function () {
  return gulp.src([
    './node_modules/google-closure-library/closure/goog/**/*.js',
    './src/gispace/GISpace.js',
    './src/gispace/Constants.js',
    './src/gispace/util/Utils.js',
    './src/gispace/util/DomUtils.js',
    './src/gispace/PlotTypes.js',
    './src/gispace/PlotUtils.js',
    './src/gispace/event/Event.js',
    './src/gispace/event/PlotDrawEvent.js',
    './src/gispace/event/PlotEditEvent.js',
    './src/gispace/plot/Plot.js',
    './src/gispace/plot/Arc.js',
    './src/gispace/plot/AttackArrow.js',
    './src/gispace/plot/SquadCombat.js',
    './src/gispace/plot/TailedAttackArrow.js',
    './src/gispace/plot/TailedSquadCombat.js',
    './src/gispace/plot/Circle.js',
    './src/gispace/plot/Measure.js',
    './src/gispace/plot/ClosedCurve.js',
    './src/gispace/plot/Curve.js',
    './src/gispace/plot/DoubleArrow.js',
    './src/gispace/plot/Ellipse.js',
    './src/gispace/plot/FineArrow.js',
    './src/gispace/plot/AssaultDirection.js',
    './src/gispace/plot/GatheringPlace.js',
    './src/gispace/plot/Lune.js',
    './src/gispace/plot/Sector.js',
    './src/gispace/plot/StraightArrow.js',
    './src/gispace/plot/Polyline.js',
    './src/gispace/plot/Rectangle.js',
    './src/gispace/plot/FreehandLine.js',
    './src/gispace/plot/Polygon.js',
    './src/gispace/plot/FreehandPolygon.js',
    './src/gispace/PlotFactory.js',
    './src/gispace/tool/PlotDraw.js',
    './src/gispace/tool/PlotEdit.js'])
    .pipe(concat(name_ + '.js'))
    .pipe(gulp.dest('./dist/'))
    // .pipe(uglify())
    .pipe(concat(name_ + '.min.js'))
    .pipe(gulp.dest('./dist/'))
});


gulp.task('compact-css', function () {
  return gulp.src('src/*.css')
    .pipe(concat(name_ + '.min.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(cssnano());
});

gulp.task('default', function () {
  var jsWatch = gulp.watch('./src/**/*.js', ['compact-js']);
  jsWatch.on('change', function (e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running compact js ...');
  });
  var cssWatch = gulp.watch('./src/*.css', ['compact-css']);
  jsWatch.on('change', function (e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running compact css ...');
  });
});