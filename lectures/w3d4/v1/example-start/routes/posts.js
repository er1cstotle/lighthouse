const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('inside the router.get');
  
  res.send('posts!')
});

router.get('/:id', function(req, res) {
  res.send('single post!')
});


module.exports = router