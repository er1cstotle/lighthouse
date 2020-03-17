const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('inside the router.get');
  
  res.send('images!')
});

router.get('/:id', function(req, res) {
  res.send('single image!')
});


module.exports = router