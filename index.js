const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/users', (req, res) => {
res.send('name')
})


app.post('/users', (req, res) => {
res.send('name')
})