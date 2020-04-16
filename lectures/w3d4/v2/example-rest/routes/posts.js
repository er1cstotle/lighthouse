const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('success post created')
})

router.get('/', (req, res) => {
  res.send('lists all posts')
})


router.get('/:id', (req, res) => {
  res.send('lists single post')
})

router.put('/:id', (req, res) => {
  res.send('updates single post')
})


router.delete('/:id', (req, res) => {
  res.send('deletes single post')
})

module.exports = router