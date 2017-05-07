var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./db');

var index = require('./routes/index');
var users = require('./routes/users');
var robots_index = require('./routes/robots/index');
var robots_new = require('./routes/robots/new');
var robots_show = require('./routes/robots/show');
var robots_edit = require('./routes/robots/edit');
var orders_index = require('./routes/orders/index');
var orders_new = require('./routes/orders/new');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/', users);
app.use('/robots', robots_index);
app.use('/robots', robots_new);
app.use('/robots', robots_show);
app.use('/robots', robots_edit);
app.use('/orders', orders_index);
app.use('/orders', orders_new);

app.get('/favicon.ico', function(req, res) {
    res.send(204);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
