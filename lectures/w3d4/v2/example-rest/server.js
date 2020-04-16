const express = require("express");
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
// const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

app.use(cookieSession({
  name: 'session',
  keys: ['lknt42fnoh90hn2hf90w8fhofnwe0'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// logging to STDOUT
const morgan = require('morgan');

//  import routers
const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

// app.use(cookieParser());
const users = {
  el: {username: 'el', password: '123'}
}


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'))

app.set("view engine", "ejs");

const userAuthMiddleware = (req, res, next) => {
  const username = req.session.username || 'el'

  req.user = users[username]

  next()
}

app.use(userAuthMiddleware)


// set up routers

app.use('/users', usersRouter)


app.use('/posts', postsRouter)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
