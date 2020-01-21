var express = require('express');
var router = express.Router();

router.get('/data-1', function(req, res, next) {
  res.json({message: 'Hello World'});
});

router.get('/data-2', function(req, res, next) {
  res.json({message: 'Hola Mundo'});
});


module.exports = router;
