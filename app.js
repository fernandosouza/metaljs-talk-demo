var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var soynode = require('soynode');
var os = require('os');

soynode.setOptions({
  outputDir: os.tmpdir(), 
  uniqueDir: true, 
  allowDynamicRecompile: true, 
  eraseTemporaryFiles: true
});

var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'modules'));
app.set('view engine', '.soy');

var soyRenderer = function(_path, options, callback) {
    var templatePath = _path.replace(path.normalize(this.root + '/'), '');
    console.log(templatePath);
    templatePath = templatePath.replace('.soy',path.sep + options['function']);
    console.log(templatePath);
    templatePath = templatePath.split(path.sep).join('.');
    console.log(templatePath);
    callback(null, options.soynode.render(templatePath, options));
};

app.engine('.soy', soyRenderer);
app.use(function(req, res, next) {
    res.locals.soynode = soynode;
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

soynode.compileTemplates('modules', function(err) {
    if (err) throw err;
});

soynode.compileTemplates('modules', function(err) {
    if (err) throw err;
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    // res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
    if (err) throw err;
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  // res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });

  if (err) throw err;
});


module.exports = app;
