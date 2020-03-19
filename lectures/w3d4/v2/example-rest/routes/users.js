const express = require("express");
const router = express.Router()

const userRoutes = (db) => {
  router.get("/", (req, res) => {
    res.send('hello')
  });
  
  router.post("/", (req, res) => {
    res.send('hello')
  });
  
  router.get("/:id", (req, res) => {
    const user = db[req.params.id]
    res.send(user)
  });
  
  router.put("/:id", (req, res) => {
    res.send('hello')
  });
  
  router.delete("/:id", (req, res) => {
    res.send('hello')
  });

  return router
}

module.exports = userRoutes
