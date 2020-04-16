const express = require("express");
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
// const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

// logging to STDOUT
const morgan = require('morgan');

// app.use(cookieParser());
const users = {
  el: {username: 'el', password: '123'}
}
app.use(cookieSession({
  name: 'session',
  keys: ['lknt42fnoh90hn2hf90w8fhofnwe0'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(morgan('combined'))
app.set("view engine", "ejs");


app.get('/users', (req, res) => {
  res.send('USERSSSSSS')
})

app.put('/users', (req, res) => {
  res.send('puuuttt')
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
