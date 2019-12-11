const express = require('express');

module.exports = function () {
  const router = express.Router();

  // GET means retrieving
  // list all users
  router.get('/', function(req, res, next) {
    res.render('users/index', { title: 'Quote List' });
  });

  // list individual quote
  router.get('/:userID', function(req, res, next) {
    // do some logic to retrieve a quote by req.params.userID
    res.render('users/show', { title: 'Show Quote' });
  });

  // POST means creation
  router.post('/', function(req, res, next) {
    // Do some logic to create the quote
    res.redirect('/users')
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
