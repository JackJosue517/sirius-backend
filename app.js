const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200)
  res.json({ message: 'This is the ENTRY POINT OF OUR BACKEND API!' })
})

app.use('/api/', (req, res) => {
  res.status(201)
  res.json({ message: 'Your request is received with success!' })
})

module.exports = app
