const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  
  res.render('users', { title: 'users' });
});

router.get('/:id', function(req, res) {
  console.log(req.user)
  res.render('users', { title: 'users' });
});

router.post('/', function(req, res) {
  console.log(req.user)
  res.render('users', { title: 'users' });
});

router.put('/:id', function(req, res) {
  console.log(req.user)
  res.render('users', { title: 'users' });
});

router.get('/new', function(req, res) {
  res.render('users', { title: 'users' });
});

router.get('/:id/edit', function(req, res) {
  console.log(req.user)
  res.render('users', { title: 'users' });
});

router.delete('/:id', function(req, res) {
  console.log(req.user)
  res.render('users', { title: 'users' });
});

module.exports = router