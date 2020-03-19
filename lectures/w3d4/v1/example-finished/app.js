const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// import our modules
const quotesRoutes = require('./routes/quotes') 
const userRoutes = require('./routes/users') 

// setup the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up the logging
app.use(logger('dev'));

// set up the body parsers
// this makes req.body available
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up cookies
// this makes req.cookies available
app.use(cookieParser());

// authentication middleware
// this adds user to the req. eg req.user
app.use(function (req, res, next) {
  console.log('------1st middlware------');
  const userID = req.cookies.userID
  // do some logic to get a user by their id from the database
  // lets say it returns {email: 'eric@gmail.com', age: '24'}
  
  req.user = {id: 1, email: 'eric@gmail.com', age: '24' }
  
  next();
});

app.use(function (req, res, next) {
  console.log('------2nd middlware------');
  console.log(req.user)
  req.showingTheClassThatYouCanPutAnythingHere = 'anything'

  next();
});

app.use(function (req, res, next) {
  console.log('------3rd middlware------');  
  console.log(req.user)
  console.log(req.showingTheClassThatYouCanPutAnythingHere);
  
  next();
});

// setup modules
app.use('/quotes', quotesRoutes());
app.use('/users', userRoutes());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
