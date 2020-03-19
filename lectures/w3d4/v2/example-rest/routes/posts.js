const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
  res.send('hello')
});

router.post("/", (req, res) => {
  res.send('hello')
});

router.get("/:id", (req, res) => {
  res.send('hello')
});

router.put("/:id", (req, res) => {
  res.send('hello')
});

router.delete("/:id", (req, res) => {
  res.send('hello')
});

module.exports = router
