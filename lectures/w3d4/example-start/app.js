const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const postRoutes = require('./routes/posts')
const userRoutes = require('./routes/users')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const userDatabase = {
  1: {
    name: 'eric',
    email: 'eric@gmail.com'
  }
}

// Authentication middleware
app.use((req, res, next) => {
  const userID = req.cookies['user_id']
  const user = userDatabase[userID]
  req.user = user
  next()
});

app.use('/posts', postRoutes)

app.use((req, res, next) => {
});

app.use('/users', userRoutes)

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
