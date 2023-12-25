const express = require("express")

const app = express()

app.use((req, res) => {
  res.status(201)
  res.json({ message: "Your request is received with success!" })
})

module.exports = app
