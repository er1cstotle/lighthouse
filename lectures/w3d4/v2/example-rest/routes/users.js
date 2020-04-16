const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('success user create')
})

router.get('/', (req, res) => {
  console.log(req.user);
  
  res.send('lists all users')
})

router.get('/:id', (req, res) => {
  res.send('lists single user')
})

router.put('/:id', (req, res) => {
  res.send('updates single user')
})

router.delete('/:id', (req, res) => {
  res.send('deletes single user')
})

module.exports = router