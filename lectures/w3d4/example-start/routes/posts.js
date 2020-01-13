const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('lakshfklsdhglksdhflk');
  
  res.render('posts', { title: 'posts' });
});

router.get('/:id', function(req, res) {
  console.log(req.user)
  res.render('posts', { title: 'posts' });
});

router.post('/', function(req, res) {
  console.log(req.user)
  res.render('posts', { title: 'posts' });
});

router.put('/:id', function(req, res) {
  console.log(req.user)
  res.render('posts', { title: 'posts' });
});

router.get('/new', function(req, res) {
  res.render('posts', { title: 'posts' });
});

router.get('/:id/edit', function(req, res) {
  console.log(req.user)
  res.render('posts', { title: 'posts' });
});

router.delete('/:id', function(req, res) {
  console.log(req.user)
  res.render('posts', { title: 'posts' });
});

module.exports = router