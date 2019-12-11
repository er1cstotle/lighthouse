const express = require('express');

module.exports = function () {
  const router = express.Router();

  // GET means retrieving
  // list all quotes
  router.get('/', function(req, res, next) {
    res.render('quotes/index', { title: 'Quote List' });
  });

  // list individual quote
  router.get('/:quoteID', function(req, res, next) {
    // do some logic to retrieve a quote by req.params.quoteID
    res.render('quotes/show', { title: 'Show Quote' });
  });

  // POST means creation
  router.post('/', function(req, res, next) {
    // Do some logic to create the quote
    res.redirect('/quotes')
  });
  
  // PUT means updating
  router.put('/:quoteID', function(req, res, next) {
    // Do some logic to update the quote by req.params.quoteID
    res.redirect(`/quotes/${req.params.quoteID}`)
  });
  
  // DELETE means deletion
  router.delete('/:quoteID', function(req, res, next) {
    // Do some logic to delete the quote
    res.redirect('/quotes')
  });
  
  return router
};
