const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
const cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')

const bcrypt = require('bcrypt');

const bodyParser   = require('body-parser');

// logging to STDOUT
// const morgan = require('morgan');

// app.use(cookieParser());

const saltRounds = 10;

app.use(cookieSession({
  name: 'session',
  keys: ['keysnsdjkfnk'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(morgan('combined'))
app.set("view engine", "ejs");

// APP LOGIC STARTS

// FAKE USER DB
const users = {
  "el": { username: "el", password: "123", firstName: "Eric" },
  "kv": { username: "kv", password: "123", firstName: "Khurram" },
  "al": { username: "al", password: "456", firstName: "Andy" }
};

// ROUTES
app.get("/", (req, res) => {
  res.render('home');
});

// Any user can view the treasure (as long as you are logged in)
app.get("/treasure", (req, res) => {
  // CHECK IF THE USER IS AUTHENTICATED
  const username = req.session.username // if undefined, they are not logged in
  
  if (username && users[username]) {
    // assume logged in
    res.render("treasure", { user: users[username] });
  } else {
    res.status(403).send('ACCESS NOT ALLOWED');
  }
});

// FORMS FOR AUTENTICATION
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

// AUTH POST ROUTES
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // The above is same as doing this ...
  // const username = req.body.username;
  // const password = req.body.password;

  const user = users[username];

  console.log(user);
  

  bcrypt.compare(password, user.password, function(err, result) {
    if(result) {
      req.session.username = username
      return res.redirect('/');
    }

    res.send('FAIL');
    // result == true
  });
});


// AUTH POST ROUTES
app.post('/signup', (req, res) => {
  const { username, password } = req.body;


  bcrypt.genSalt(10, function(err, salt) {

    bcrypt.hash(password, salt, function(err, hash) {          
      users[username] = {username, password: hash}
    
      return res.redirect('/');
      // Store hash in your password DB.
    });

  });



});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
