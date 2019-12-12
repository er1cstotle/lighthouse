const express = require('express');

module.exports = function () {
  const router = express.Router();

  // GET means retrieving
  // list all users
  router.get('/', function(req, res, next) {
    res.json([]);
  });

  // list individual quote
  router.get('/:userID', function(req, res, next) {
    // do some logic to retrieve a quote by req.params.userID
    res.json({});
  });

  // POST means creation
  router.post('/', function(req, res, next) {
    // Do some logic to create the quote
    res.send('yay')
  });
  
  // PUT means updating
  router.put('/:userID', function(req, res, next) {
    // Do some logic to update the quote by req.params.userID
    res.redirect(`/users/${req.params.userID}`)
  });
  
  // DELETE means deletion
  router.delete('/:userID', function(req, res, next) {
    // Do some logic to delete the quote
    res.redirect('/users')
  });
  
  return router
};
